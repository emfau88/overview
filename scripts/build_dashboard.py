#!/usr/bin/env python3
"""Build the self-contained project dashboard with Python's standard library."""

from __future__ import annotations

import argparse
import base64
import hashlib
import json
import re
import sys
from datetime import datetime
from pathlib import Path, PurePosixPath
from typing import Any
from urllib.parse import urlsplit


ROOT = Path(__file__).resolve().parent.parent
DASHBOARD = ROOT / "dashboard"
OUTPUT = ROOT / "index.html"
WORKSPACE = "C:/Users/madde/Documents/OVERVIEW"
REPOSITORY = "https://github.com/emfau88/overview"
DASHBOARD_URL = "https://emfau88.github.io/overview/"
DATA_FILES = ("context.json", "projects.json", "results.json", "icons.json")
ROOT_DOCUMENTS = (
    "README.md",
    "AGENTS.md",
    "KOMPAKTUEBERSICHT.md",
    "spiele-bestand.json",
    "online-bestand.json",
    "apps-bestand.json",
    "github-repositories.json",
    "dashboard/README.md",
    "dashboard/assets/fonts/README.md",
    "dashboard/assets/fonts/OFL.txt",
    "dashboard/assets/fonts/FONTLOG.txt",
)
IMAGE_MIME_TYPES = {
    ".png": "image/png",
    ".webp": "image/webp",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif",
    ".svg": "image/svg+xml",
}


class BuildError(ValueError):
    """An input cannot be safely or consistently bundled."""


def read_text(path: Path) -> str:
    if not path.is_file():
        raise BuildError(f"Erforderliche Datei fehlt: {path.relative_to(ROOT)}")
    # Decode bytes directly to preserve the complete document, including CRLF.
    return path.read_bytes().decode("utf-8-sig")


def read_json(path: Path) -> dict[str, Any]:
    try:
        value = json.loads(read_text(path))
    except (UnicodeError, json.JSONDecodeError) as exc:
        raise BuildError(f"Ungültiges UTF-8/JSON in {path.relative_to(ROOT)}: {exc}") from exc
    if not isinstance(value, dict):
        raise BuildError(f"JSON muss ein Objekt sein: {path.relative_to(ROOT)}")
    return value


def local_path(value: str) -> Path:
    if not isinstance(value, str) or not value:
        raise BuildError("Leerer oder ungültiger relativer Dateipfad")
    normalized = value.replace("\\", "/")
    relative = PurePosixPath(normalized)
    if relative.is_absolute() or ".." in relative.parts or ":" in normalized:
        raise BuildError(f"Dateireferenz muss im Repository liegen: {value}")
    path = ROOT.joinpath(*relative.parts)
    if not path.resolve().is_relative_to(ROOT.resolve()):
        raise BuildError(f"Dateireferenz verlässt das Repository: {value}")
    return path


def identified_items(items: Any, label: str) -> dict[str, dict[str, Any]]:
    if not isinstance(items, list):
        raise BuildError(f"{label} muss eine Liste sein")
    result: dict[str, dict[str, Any]] = {}
    for item in items:
        if not isinstance(item, dict) or not isinstance(item.get("id"), str) or not item["id"]:
            raise BuildError(f"{label} enthält einen Eintrag ohne gültige ID")
        if item["id"] in result:
            raise BuildError(f"Doppelte ID in {label}: {item['id']}")
        result[item["id"]] = item
    return result


def document_paths() -> list[Path]:
    paths = [local_path(name) for name in ROOT_DOCUMENTS]
    paths.extend(DASHBOARD / name for name in DATA_FILES)
    # Only report-level Markdown and runtime provenance, never copied source,
    # build assets, binary packages, logs or credentials.
    paths.extend((ROOT / "analysen").glob("*/*.md"))
    paths.extend((ROOT / "analysen").glob("*/runtime/*.md"))
    paths.extend((ROOT / "analysen").glob("*/screenshots/*.md"))
    paths.extend((ROOT / "analysen").glob("*/screenshots/manifest.json"))
    mirror_evidence = ROOT / "analysen" / "mirror" / "evidence.json"
    if mirror_evidence.is_file():
        paths.append(mirror_evidence)
    icon_provenance = ROOT / "analysen" / "mirror" / "heartvia-icon-provenienz.json"
    if icon_provenance.is_file():
        paths.append(icon_provenance)
    unique = {path.relative_to(ROOT).as_posix(): path for path in paths}
    return [unique[name] for name in sorted(unique)]


def document_title(path: Path, content: str) -> str:
    if path.suffix.lower() == ".md":
        match = re.search(r"^#{1,6}\s+(.+?)\s*#*\s*$", content, re.MULTILINE)
        if match:
            return match.group(1).strip()
    return path.name


def browser_screenshots(project_id: str, capture_directory: Path) -> list[dict[str, Any]]:
    """Bundle explicit browser captures while preserving public/local provenance."""
    manifest_path = capture_directory / "manifest.json"
    if not manifest_path.is_file():
        return []
    manifest = read_json(manifest_path)
    kind = manifest.get("kind")
    if kind not in {"public_browser_capture", "local_browser_capture"}:
        return []  # Historical Mirror captures keep their existing handling.
    captures = manifest.get("captures")
    if not isinstance(captures, list):
        raise BuildError(f"Screenshot-Manifest benötigt captures-Liste: {manifest_path.relative_to(ROOT)}")
    bundled = []
    seen = set()
    for capture in captures:
        if not isinstance(capture, dict):
            raise BuildError(f"Ungültiger Screenshot-Eintrag: {manifest_path.relative_to(ROOT)}")
        name = capture.get("file", "")
        if not isinstance(name, str) or not name or len(PurePosixPath(name).parts) != 1 or "\\" in name:
            raise BuildError(f"Screenshot-Datei muss direkt im zugehörigen screenshots-Ordner liegen: {name}")
        path = local_path((capture_directory.relative_to(ROOT) / name).as_posix())
        if path in seen:
            raise BuildError(f"Doppelter Screenshot im Manifest: {name}")
        seen.add(path)
        if not path.is_file():
            raise BuildError(f"Screenshot-Datei fehlt: {path.relative_to(ROOT)}")
        payload = path.read_bytes()
        mime = IMAGE_MIME_TYPES.get(path.suffix.lower())
        signatures = {
            "image/jpeg": payload.startswith(b"\xff\xd8\xff"),
            "image/png": payload.startswith(b"\x89PNG\r\n\x1a\n"),
            "image/webp": payload[:4] == b"RIFF" and payload[8:12] == b"WEBP",
        }
        if not signatures.get(mime, False):
            raise BuildError(f"Screenshot-Endung und Bildformat passen nicht: {name}")
        expected = capture.get("sha256", "")
        digest = hashlib.sha256(payload).hexdigest()
        if not isinstance(expected, str) or not re.fullmatch(r"[a-fA-F0-9]{64}", expected) or digest != expected.lower():
            raise BuildError(f"Screenshot-Prüfsumme stimmt nicht mit dem Manifest überein: {name}")
        for field in ("title", "url", "capturedAt", "note"):
            if not isinstance(capture.get(field), str) or not capture[field].strip():
                raise BuildError(f"Screenshot-Herkunft fehlt ({field}): {name}")
        url = urlsplit(capture["url"])
        if url.scheme not in {"http", "https"} or not url.netloc:
            raise BuildError(f"Screenshot benötigt eine nachvollziehbare Browser-URL: {name}")
        if kind == "local_browser_capture":
            if url.scheme != "http" or url.hostname not in {"127.0.0.1", "localhost"} or url.username or url.password:
                raise BuildError(f"Lokale Browseraufnahme benötigt eine HTTP-Testadresse auf 127.0.0.1 oder localhost: {name}")
        elif url.hostname in {"127.0.0.1", "localhost", "::1"}:
            raise BuildError(f"Loopback-Aufnahme muss als local_browser_capture ausgewiesen sein: {name}")
        try:
            datetime.fromisoformat(capture["capturedAt"].replace("Z", "+00:00"))
        except ValueError as exc:
            raise BuildError(f"Ungültiges Screenshot-Aufnahmedatum: {name}") from exc
        viewport = capture.get("viewport")
        if not isinstance(viewport, dict) or any(type(viewport.get(side)) is not int or viewport[side] <= 0 for side in ("width", "height")):
            raise BuildError(f"Screenshot benötigt viewport.width und viewport.height als positive Pixelwerte: {name}")
        bundled.append({
            "projectId": project_id,
            "kind": kind,
            "path": path.relative_to(ROOT).as_posix(),
            "title": capture["title"],
            "note": capture["note"],
            "url": capture["url"],
            "capturedAt": capture["capturedAt"],
            "viewport": viewport,
            "sha256": digest,
            "dataUrl": f"data:{mime};base64," + base64.b64encode(payload).decode("ascii"),
        })
    return bundled


def validate_references(
    value: Any,
    project_ids: set[str],
    analysis_ids: set[str],
    documents: set[str],
    location: str,
) -> None:
    if isinstance(value, list):
        for index, child in enumerate(value):
            validate_references(child, project_ids, analysis_ids, documents, f"{location}[{index}]")
        return
    if not isinstance(value, dict):
        return
    for key, child in value.items():
        child_location = f"{location}.{key}"
        if key == "projectId" and child is not None and child not in project_ids:
            raise BuildError(f"Unbekannte Produkt-ID in {child_location}: {child}")
        if key == "analysisId" and child is not None and child not in analysis_ids:
            raise BuildError(f"Unbekannte Analyse-ID in {child_location}: {child}")
        if key == "projectIds":
            if not isinstance(child, list) or any(item not in project_ids for item in child):
                raise BuildError(f"Ungültige Produktreferenzen in {child_location}")
        if key in {"sourceFiles", "sourceDocs", "documents"}:
            if not isinstance(child, list):
                raise BuildError(f"Dokumentreferenzen müssen eine Liste sein: {child_location}")
            for reference in child:
                normalized = local_path(reference).relative_to(ROOT).as_posix()
                if normalized not in documents:
                    raise BuildError(f"Dokument nicht eingebunden: {child_location} → {reference}")
        validate_references(child, project_ids, analysis_ids, documents, child_location)


def build_data() -> dict[str, Any]:
    inputs = {name: read_json(DASHBOARD / name) for name in DATA_FILES}
    project_record = inputs["projects.json"]
    result_record = inputs["results.json"]
    projects = identified_items(project_record.get("projects"), "projects")
    related = identified_items(project_record.get("relatedProducts", []), "relatedProducts")
    if set(projects) & set(related):
        raise BuildError("Hauptprodukte und verwandte Produkte dürfen keine ID teilen")
    analyses = identified_items(result_record.get("analyses", []), "analyses")
    identified_items(result_record.get("decisions", []), "decisions")
    identified_items(result_record.get("pending", []), "pending")
    for project in projects.values():
        if project.get("area") not in {"apps", "games", "web"}:
            raise BuildError(f"Unbekannter Produktbereich: {project['id']}")
    for analysis in analyses.values():
        if analysis.get("projectId") not in projects:
            raise BuildError(f"Analyse ohne gültiges Hauptprodukt: {analysis['id']}")

    documents = []
    for path in document_paths():
        content = read_text(path)
        documents.append({
            "path": path.relative_to(ROOT).as_posix(),
            "title": document_title(path, content),
            "content": content,
        })
    document_ids = {item["path"] for item in documents}
    for name in ("context.json", "projects.json", "results.json"):
        validate_references(inputs[name], set(projects), set(analyses), document_ids, name)

    icon_record = inputs["icons.json"].get("icons")
    if not isinstance(icon_record, dict):
        raise BuildError("icons.json muss ein icons-Objekt enthalten")
    icons = {}
    for project_id, entry in sorted(icon_record.items()):
        if project_id not in projects:
            raise BuildError(f"Icon ohne zugeordnetes Hauptprodukt: {project_id}")
        if not isinstance(entry, dict):
            raise BuildError(f"Ungültiger Icon-Eintrag: {project_id}")
        path = local_path(entry.get("path", ""))
        if not path.is_file():
            raise BuildError(f"Icon-Datei fehlt: {entry['path']}")
        mime = IMAGE_MIME_TYPES.get(path.suffix.lower())
        if not mime:
            raise BuildError(f"Unbekanntes Bildformat: {entry['path']}")
        encoded = base64.b64encode(path.read_bytes()).decode("ascii")
        icons[project_id] = {**entry, "dataUrl": f"data:{mime};base64,{encoded}"}

    dates = [inputs[name].get("updatedAt", "") for name in ("context.json", "projects.json", "results.json")]
    screenshots = []
    capture_titles = ["Startseite", "Clarity Scan", "Scan-Ergebnis", "Nächster Schritt", "Home mit letzter Lesung", "Daily Tarot"]
    for project_id in projects:
        capture_directory = ROOT / "analysen" / project_id / "screenshots"
        historical_paths = sorted(capture_directory.glob("bestand-ui-*.png")) if project_id == "mirror" else []
        for number, path in enumerate(historical_paths):
            screenshots.append({
                "projectId": project_id,
                "path": path.relative_to(ROOT).as_posix(),
                "title": capture_titles[number] if project_id == "mirror" and number < len(capture_titles) else path.stem,
                "note": "Lokale UI-Preview vom 07.10.2026 mit Testdaten; kein heutiger Laufzeit- oder Play-Release-Beleg.",
                "dataUrl": "data:image/png;base64," + base64.b64encode(path.read_bytes()).decode("ascii"),
            })
        screenshots.extend(browser_screenshots(project_id, capture_directory))
    if any(not isinstance(date, str) or not re.fullmatch(r"\d{4}-\d{2}-\d{2}", date) for date in dates):
        raise BuildError("Alle Dashboard-Daten benötigen updatedAt im Format YYYY-MM-DD")
    return {
        "meta": {
            "updatedAt": max(dates),
            "workspace": WORKSPACE,
            "repository": REPOSITORY,
            "dashboardUrl": DASHBOARD_URL,
            "schemaVersion": 1,
        },
        "context": inputs["context.json"],
        "projects": project_record,
        "results": result_record,
        "icons": icons,
        "screenshots": screenshots,
        "documents": documents,
    }


def render_dashboard(data: dict[str, Any]) -> bytes:
    template = read_text(DASHBOARD / "index.template.html")
    font_dir = DASHBOARD / "assets" / "fonts"
    font_bytes = (font_dir / "Manrope-Variable.ttf").read_bytes()
    if font_bytes[:4] != b"\x00\x01\x00\x00":
        raise BuildError("Manrope muss eine gültige TrueType-Schriftdatei sein")
    font_license = read_text(font_dir / "OFL.txt")
    font_log = read_text(font_dir / "FONTLOG.txt")
    embedded_font = (
        "/* Manrope font license and information:\n"
        + "\n".join(line.rstrip() for line in (font_license + "\n" + font_log).splitlines()).replace("*/", "* /")
        + "\n*/\n@font-face{font-family:'Manrope';font-style:normal;"
        "font-weight:200 800;font-display:swap;src:url(data:font/ttf;base64,"
        + base64.b64encode(font_bytes).decode("ascii")
        + ") format('truetype')}\n"
    )
    replacements = {
        "/* DASHBOARD_STYLES */": embedded_font + read_text(DASHBOARD / "styles.css"),
        "/* DASHBOARD_DATA */": json.dumps(data, ensure_ascii=False, separators=(",", ":"), allow_nan=False).replace("</", "<\\/"),
        "/* DASHBOARD_APP */": read_text(DASHBOARD / "app.js"),
    }
    for placeholder, replacement in replacements.items():
        if template.count(placeholder) != 1:
            raise BuildError(f"Template benötigt genau einen Platzhalter: {placeholder}")
        template = template.replace(placeholder, replacement, 1)
    # Build output remains identical on Windows and Linux.
    return template.replace("\r\n", "\n").encode("utf-8")


def main() -> int:
    parser = argparse.ArgumentParser(description="Vollständig eingebettetes Dashboard erstellen oder auf Aktualität prüfen.")
    parser.add_argument("--check", action="store_true", help="Keine Dateien schreiben; index.html muss dem aktuellen Build exakt entsprechen.")
    options = parser.parse_args()
    try:
        data = build_data()
        output = render_dashboard(data)
        if options.check:
            if not OUTPUT.is_file() or OUTPUT.read_bytes() != output:
                raise BuildError("index.html fehlt oder ist veraltet. Zuerst python scripts/build_dashboard.py ausführen.")
            action = "Aktueller Build bestätigt"
        else:
            OUTPUT.write_bytes(output)
            action = "index.html erstellt"
        print(f"{action}: {len(data['projects']['projects'])} Hauptprodukte, "
              f"{len(data['results']['analyses'])} Analysen, {len(data['documents'])} vollständige Dokumente, "
              f"{len(data['icons'])} eingebettete Icons ({len(output):,} Bytes).")
        return 0
    except (BuildError, OSError, UnicodeError) as exc:
        print(f"Dashboard-Build fehlgeschlagen: {exc}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
