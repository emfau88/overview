(() => {
  'use strict';

  const $ = (id) => document.getElementById(id);
  const escape = (value) => String(value ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const array = (value) => Array.isArray(value) ? value : [];
  let data;
  try { data = JSON.parse($('dashboard-data').textContent); }
  catch (_) { $('page').innerHTML = '<div class="empty">Die eingebetteten Dashboard-Daten konnten nicht gelesen werden.</div>'; return; }
  const context = data.context || {};
  const inventory = data.projects || {};
  const results = data.results || {};
  const projects = array(inventory.projects);
  const related = array(inventory.relatedProducts);
  const analyses = array(results.analyses);
  const documents = array(data.documents);
  const allProjects = new Map([...projects, ...related].map((item) => [item.id, item]));
  const areaLabels = { games: 'Browsergames', apps: 'Android-Apps', web: 'Onlineauftritt' };
  const areaAlias = (area) => ({ android: 'apps', online: 'web' })[area] || area;
  const statusLabels = { inventoried: 'Bestand erfasst', pilot_complete: 'Pilot abgeschlossen', reviewed: 'Analyse abgeschlossen', proposed: 'Vorschlag · offen', established: 'Festgehalten', completed: 'Abgeschlossen', pending: 'Noch offen', in_progress: 'In Arbeit', documented: 'Dokumentiert', review_in_progress: 'Prüfung läuft' };
  const evidenceLabels = { runtime: 'Im Webtest reproduziert', code: 'Codebefund', assessment: 'Bewertung', mismatch: 'Abgleich / Widerspruch', inference: 'Einschätzung / Hypothese', store: 'Store-Beobachtung' };
  const priorityLabels = { high: 'Hohe Priorität', medium: 'Mittlere Priorität', low: 'Niedrige Priorität' };
  const filterState = { query: '', area: '', status: '' };
  const paths = new Map();
  const workspace = String(data.meta?.workspace || 'C:/Users/madde/Documents/OVERVIEW').replace(/\\/g, '/').replace(/\/$/, '');
  const normalize = (value) => {
    let path = String(value ?? '').trim().replace(/^<|>$/g, '').replace(/\\/g, '/');
    try { path = decodeURIComponent(path); } catch (_) { /* Keep a literal path. */ }
    path = path.replace(/:\d+(?::\d+)?$/, '');
    if (path.toLowerCase().startsWith(workspace.toLowerCase() + '/')) path = path.slice(workspace.length + 1);
    return path.replace(/^\.\//, '').replace(/^\//, '').toLowerCase();
  };
  documents.forEach((doc) => paths.set(normalize(doc.path), doc));
  const docRoute = (doc) => '#docs/' + encodeURIComponent(doc.path);
  const safeLink = (value, sourcePath = '') => {
    const raw = String(value ?? '').trim().replace(/^<|>$/g, '');
    if (/^https?:\/\//i.test(raw)) {
      try { const url = new URL(raw); return ['http:', 'https:'].includes(url.protocol) ? { href: url.href, external: true } : null; }
      catch (_) { return null; }
    }
    let found = paths.get(normalize(raw));
    if (!found && sourcePath && !/^[a-z][a-z0-9+.-]*:/i.test(raw)) {
      const base = String(sourcePath).replace(/\\/g, '/').split('/').slice(0, -1);
      raw.replace(/\\/g, '/').split('/').forEach((part) => { if (part === '..') base.pop(); else if (part !== '.') base.push(part); });
      found = paths.get(normalize(base.join('/')));
    }
    return found ? { href: docRoute(found), external: false } : null;
  };
  const link = (label, target, cls = '') => {
    const safe = safeLink(target);
    return safe ? `<a${cls ? ` class="${escape(cls)}"` : ''} href="${escape(safe.href)}"${safe.external ? ' target="_blank" rel="noopener noreferrer"' : ''}>${escape(label)}</a>` : `<span${cls ? ` class="${escape(cls)}"` : ''}>${escape(label)}</span>`;
  };
  const text = (value) => typeof value === 'string' ? value : value == null ? '' : JSON.stringify(value, null, 2);
  const list = (items) => array(items).length ? `<ul class="clean-list">${items.map((item) => `<li>${escape(text(item))}</li>`).join('')}</ul>` : '<p class="muted">Noch nicht dokumentiert.</p>';
  const badge = (value, customLabel) => `<span class="badge ${['reviewed', 'pilot_complete', 'completed', 'established'].includes(value) ? 'green' : ['proposed', 'pending', 'in_progress', 'high', 'review_in_progress'].includes(value) ? 'amber' : 'blue'}">${escape(customLabel || statusLabels[value] || value || 'Offen')}</span>`;
  const dateLabel = (value) => {
    const parts = String(value || '').slice(0, 10).split('-');
    return parts.length === 3 && /^\d{4}$/.test(parts[0]) ? `${parts[2]}.${parts[1]}.${parts[0]}` : String(value || 'ohne Datumsangabe');
  };
  const icons = {
    overview: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    context: '<circle cx="12" cy="12" r="9"/><path d="m16 8-2 6-6 2 2-6z"/>',
    projects: '<rect x="3" y="6" width="18" height="15" rx="2"/><path d="M8 6V3h8v3M3 11h18"/>',
    results: '<path d="m4 17 5-6 4 3 7-10M4 21h17"/>',
    pending: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l4 2"/>',
    docs: '<path d="M5 3h9l5 5v13H5zM14 3v5h5M8 12h8M8 16h8"/>',
    games: '<path d="M7 7h10l4 11-3 2-4-4h-4l-4 4-3-2zM6 11h4M8 9v4"/><circle cx="16" cy="11" r="1"/>',
    apps: '<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M10 18h4"/>',
    web: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c5 5 5 13 0 18-5-5-5-13 0-18"/>',
    check: '<path d="m5 12 4 4L19 6"/>'
  };
  const svg = (id) => `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[id] || icons.projects}</svg>`;
  const productIcon = (project) => {
    const icon = data.icons?.[project.id];
    return icon?.dataUrl && /^data:image\/(png|webp|jpeg|gif);base64,[a-z0-9+/=\s]+$/i.test(icon.dataUrl)
      ? `<img class="product-icon" src="${escape(icon.dataUrl)}" alt="" title="${escape(icon.note || '')}" width="46" height="46">`
      : `<span class="monogram" aria-hidden="true">${escape(project.name.split(/\s+/).map((part) => part[0]).slice(0, 2).join('').toUpperCase())}</span>`;
  };
  const sources = (items) => array(items).length ? `<div class="sources">${items.map((path) => link(String(path).split(/[\\/]/).pop(), path)).join('')}</div>` : '';
  const intro = (eyebrow, title, description) => `<div class="page-intro"><div class="eyebrow">${escape(eyebrow)}</div><h1>${escape(title)}</h1><p>${escape(description)}</p></div>`;
  const section = (title, body, note = '') => `<div class="section-head"><h2>${escape(title)}</h2>${note ? `<span>${escape(note)}</span>` : ''}</div>${body}`;
  const field = (label, value) => `<p><span class="label">${escape(label)}</span>${escape(text(value))}</p>`;
  let toastTimer;
  const toast = (message) => { $('toast').textContent = message; $('toast').classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => $('toast').classList.remove('show'), 3500); };

  function inlineMarkdown(value, sourcePath) {
    const tokens = [];
    const save = (html) => `\uE000${tokens.push(html) - 1}\uE001`;
    let content = String(value).replace(/\uE000|\uE001/g, '');
    content = content.replace(/`([^`]+)`/g, (_, code) => save(`<code>${escape(code)}</code>`));
    content = content.replace(/!?\[([^\]]+)\]\((<[^>]*>|[^)]*)\)/g, (match, label, destination) => {
      const safe = safeLink(destination.replace(/\s+"[^"]*"$/, ''), sourcePath);
      const shown = label.replace(/[*_`]/g, '');
      return save(safe ? `<a href="${escape(safe.href)}"${safe.external ? ' target="_blank" rel="noopener noreferrer"' : ''}>${escape(shown)}${match[0] === '!' ? ' (Bildquelle)' : ''}</a>` : escape(shown));
    });
    content = escape(content).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/__([^_]+)__/g, '<strong>$1</strong>').replace(/\*([^*]+)\*/g, '<em>$1</em>');
    return content.replace(/\uE000(\d+)\uE001/g, (_, index) => tokens[Number(index)] || '');
  }

  function markdown(content, sourcePath) {
    const lines = String(content || '').replace(/\r\n?/g, '\n').split('\n');
    const output = [];
    const splitCells = (row) => row.trim().replace(/^\||\|$/g, '').split(/(?<!\\)\|/).map((cell) => cell.trim().replace(/\\\|/g, '|'));
    const tableDivider = (line) => /^\s*\|?\s*:?-{3,}:?\s*(?:\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(line || '');
    const blockStart = (line) => /^(?:#{1,6}\s|\s*```|\s*~~~|\s*>|\s*[-*+]\s|\s*\d+[.)]\s|\s*[-*_]{3,}\s*$)/.test(line || '');
    for (let i = 0; i < lines.length;) {
      const line = lines[i];
      if (!line.trim()) { i++; continue; }
      const fence = line.match(/^\s*(```+|~~~+)\s*([^\s]*)/);
      if (fence) {
        const code = []; i++;
        while (i < lines.length && !lines[i].trim().startsWith(fence[1])) code.push(lines[i++]);
        if (i < lines.length) i++;
        output.push(`<pre><code>${escape(code.join('\n'))}</code></pre>`); continue;
      }
      const heading = line.match(/^(#{1,6})\s+(.+?)\s*#*$/);
      if (heading) { const level = heading[1].length; output.push(`<h${level}>${inlineMarkdown(heading[2], sourcePath)}</h${level}>`); i++; continue; }
      if (/^\s*([-*_])(?:\s*\1){2,}\s*$/.test(line)) { output.push('<hr>'); i++; continue; }
      if (line.includes('|') && tableDivider(lines[i + 1])) {
        const head = splitCells(line); i += 2; const rows = [];
        while (i < lines.length && lines[i].trim() && lines[i].includes('|')) rows.push(splitCells(lines[i++]));
        output.push(`<div class="table-wrap"><table><thead><tr>${head.map((cell) => `<th>${inlineMarkdown(cell, sourcePath)}</th>`).join('')}</tr></thead><tbody>${rows.map((cells) => `<tr>${head.map((_, index) => `<td>${inlineMarkdown(cells[index] || '', sourcePath)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`); continue;
      }
      if (/^\s*>/.test(line)) {
        const quote = []; while (i < lines.length && /^\s*>/.test(lines[i])) quote.push(lines[i++].replace(/^\s*>\s?/, ''));
        output.push(`<blockquote class="note">${markdown(quote.join('\n'), sourcePath)}</blockquote>`); continue;
      }
      const item = line.match(/^\s*([-*+]|\d+[.)])\s+(.+)$/);
      if (item) {
        const ordered = /^\d/.test(item[1]); const entries = [];
        while (i < lines.length) {
          const next = lines[i].match(/^\s*([-*+]|\d+[.)])\s+(.+)$/);
          if (!next || /^\d/.test(next[1]) !== ordered) break;
          let entry = next[2]; i++;
          while (i < lines.length && /^\s{2,}\S/.test(lines[i]) && !blockStart(lines[i])) entry += ' ' + lines[i++].trim();
          entries.push(`<li>${inlineMarkdown(entry.replace(/^\[([ xX])\]\s*/, (_, checked) => checked === ' ' ? '☐ ' : '☑ '), sourcePath)}</li>`);
        }
        output.push(`<${ordered ? 'ol' : 'ul'}>${entries.join('')}</${ordered ? 'ol' : 'ul'}>`); continue;
      }
      const paragraph = [line.trim()]; i++;
      while (i < lines.length && lines[i].trim() && !blockStart(lines[i]) && !(lines[i].includes('|') && tableDivider(lines[i + 1]))) paragraph.push(lines[i++].trim());
      output.push(`<p>${inlineMarkdown(paragraph.join(' '), sourcePath)}</p>`);
    }
    return output.join('\n');
  }

  function overview() {
    const completed = analyses.filter((analysis) => ['reviewed', 'completed'].includes(analysis.status));
    const zerohero = analyses.find((analysis) => analysis.id === 'zerohero') || analyses[0];
    const actions = array(zerohero?.actions);
    const cards = Object.entries(areaLabels).map(([id, title]) => {
      const members = projects.filter((project) => areaAlias(project.area) === id);
      const area = array(context.areas).find((entry) => areaAlias(entry.id) === id);
      return `<article class="panel"><div class="area-icon">${svg(id)}</div><h2>${escape(title)}</h2><p class="muted">${escape(area?.goal || '')}</p><div class="area-footer"><span>${members.length} Hauptprodukte</span><a href="#projects/${id}">Bestand ansehen →</a></div></article>`;
    }).join('');
    const nextSteps = array(results.pending).slice(0, 5);
    return intro('Ziele · Bestand · Ergebnisse', 'Ein Kompass für alle Projekte.', 'Die Ausgangslage bleibt sichtbar. Produkte, ausführliche Analysen und offene Entscheidungen stehen an einem Ort – mit klarer Trennung zwischen geprüft, vorgeschlagen und umgesetzt.') +
      `<div class="numbers"><div class="number"><strong>${projects.length}</strong><span>Hauptprodukte</span></div><div class="number"><strong>${Object.keys(areaLabels).length}</strong><span>Projektbereiche</span></div><div class="number"><strong>${completed.length}</strong><span>abgeschlossene Analysen</span></div><div class="number"><strong>${related.length}</strong><span>verwandte Spiele-Repositories</span></div></div>` +
      `<div class="hero"><div><div class="eyebrow">Dokumentierter Analysepilot</div><h2>${escape(zerohero ? allProjects.get(zerohero.projectId)?.name || zerohero.title : 'Der Bestand ist erfasst')}</h2><p>${escape(zerohero?.summary || 'Als Nächstes folgen einzelne nachvollziehbare Produktprüfungen.')}</p></div>${zerohero ? `<a class="button primary" href="#results/${escape(zerohero.id)}/review">Ergebnisse lesen →</a>` : '<a class="button primary" href="#projects">Produkte ansehen →</a>'}</div>` +
      section('Drei Bereiche, unterschiedliche Fragen', `<div class="grid three">${cards}</div>`) +
      `<div class="grid two">${actions.length ? `<section class="panel"> <h2>Begrenzter nächster Updateumfang</h2><p class="muted small-text">${escape(allProjects.get(zerohero.projectId)?.name || '')} · Vorschläge aus der Analyse, bisher nicht umgesetzt.</p><div class="queue">${actions.map((action, index) => `<div class="queue-item"><span class="step-number">${action.order || index + 1}</span><div><strong>${escape(action.title)}</strong><p>${escape(action.detail)}</p></div></div>`).join('')}</div><a href="#results/${escape(zerohero.id)}/actions">Maßnahmen und Prüfung ansehen →</a></section>` : ''}<section class="panel"><h2>Was als Nächstes offen ist</h2><div class="queue">${nextSteps.map((step, index) => `<div class="queue-item"><span class="step-number">${index + 1}</span><div><strong>${escape(step.title)}</strong><p>${escape(step.detail)}</p></div></div>`).join('')}</div><a href="#pending">Alle offenen Schritte und Entscheidungen →</a></section></div>` +
      `<div class="note">Die ungefähr 50 Downloads der drei Haupt-Apps waren die Ausgangsschilderung. Aktuelle Kennzahlen, Zeiträume und Grenzen stehen separat in den Analysen. Mehr Downloads, ehrliche Produktbewertungen und eine geeignete Landingpage bleiben die Ziele.</div><a class="button quiet" href="#context">Ursprüngliche Anliegen und Ziele lesen</a>`;
  }

  function contextView() {
    return intro('Der rote Faden', context.title || 'Ausgangslage und Ziele', 'Die ursprünglichen Anliegen bleiben erhalten. Hier stehen Problematik, Ziele, offene Fragen, Arbeitsregeln und die unveränderten Usernachrichten.') +
      `<div class="content-stack">${array(context.situation).map((item) => `<article class="panel"><h2>${escape(item.title)}</h2><p>${escape(item.text)}</p><p class="muted small-text">Quelle: ${escape(item.source)}</p></article>`).join('')}</div>` +
      section('Ziele und Fragen je Bereich', `<div class="grid three">${array(context.areas).map((area) => `<article class="panel"><div class="area-icon">${svg(areaAlias(area.id))}</div><h2>${escape(area.title)}</h2><p>${escape(area.goal)}</p><h3>Offene Fragen</h3>${list(area.questions)}<details class="original"><summary>Rahmen und Grenzen</summary>${list(area.constraints)}</details></article>`).join('')}</div>`) +
      section('Wie wir arbeiten', `<div class="panel">${list(context.principles)}</div>`) +
      section('Dokumentierter Verlauf', `<div class="timeline">${array(context.chronology).slice().sort((a, b) => a.order - b.order).map((step) => `<article class="timeline-item"><h3>${escape(step.title)}</h3>${badge(step.status)}<p>${escape(step.detail)}</p></article>`).join('')}</div>`) +
      section('Originalnachrichten', array(context.originalMessages).map((message) => `<details class="original"><summary>${escape(message.label)}</summary><p>${escape(message.text)}</p></details>`).join(''), 'Wortlaut als dauerhafte Quelle');
  }

  function projectCard(project) {
    const repoName = project.repository?.split('/').filter(Boolean).pop();
    return `<article class="project-card"><div class="project-head">${productIcon(project)}<div><h3>${escape(project.name)}</h3><small>${escape(areaLabels[areaAlias(project.area)] || 'Verwandtes Repository')}</small></div></div><p>${escape(project.description)}</p><div class="project-meta">${repoName ? `Repo <code>${escape(repoName)}</code>` : 'Lokales Projekt'} · ${array(project.paths).length} ${array(project.paths).length === 1 ? 'Pfad' : 'Pfade'}</div>${badge(project.status || 'inventoried', project.statusLabel || 'Bestand erfasst')}<div class="card-bottom"><button class="button" data-project="${escape(project.id)}">Details & Pfade</button>${project.analysisId ? `<a href="#results/${escape(project.analysisId)}/review">Analyse →</a>` : '<span class="muted small-text">Prüfung steht aus</span>'}</div></article>`;
  }

  function updateProjectCards() {
    const query = filterState.query.toLocaleLowerCase('de').trim();
    const filtered = projects.filter((project) => (!filterState.area || areaAlias(project.area) === filterState.area) && (!filterState.status || project.status === filterState.status) && (!query || JSON.stringify(project).toLocaleLowerCase('de').includes(query)));
    $('project-count').textContent = `${filtered.length} von ${projects.length} Hauptprodukten`;
    $('project-cards').innerHTML = filtered.length ? filtered.map(projectCard).join('') : '<div class="empty">Keine passenden Produkte. Suche oder Filter ändern.</div>';
  }

  function projectsView(routeArea) {
    if (routeArea && areaLabels[areaAlias(routeArea)]) filterState.area = areaAlias(routeArea);
    const statuses = [...new Set(projects.map((project) => project.status))];
    return intro('Repositorys und lokale Produkte', 'Der vollständige angefragte Bestand.', 'Hauptprodukte, lokale Pfade und Varianten bleiben zusammen. Fehlende Zuordnungen sind offene Fragen; eine Bestandsbeschreibung ist noch kein Qualitätsurteil.') +
      `<div class="toolbar"><input id="project-search" class="search" type="search" placeholder="Produkt, Repo, Beschreibung oder Pfad suchen …" aria-label="Produkte durchsuchen" value="${escape(filterState.query)}"><select id="project-area" class="filter" aria-label="Bereich filtern"><option value="">Alle Bereiche</option>${Object.entries(areaLabels).map(([id, label]) => `<option value="${id}"${filterState.area === id ? ' selected' : ''}>${label}</option>`).join('')}</select><select id="project-status" class="filter" aria-label="Prüfstand filtern"><option value="">Alle Prüfstände</option>${statuses.map((status) => `<option value="${escape(status)}"${filterState.status === status ? ' selected' : ''}>${escape(statusLabels[status] || status)}</option>`).join('')}</select></div><div id="project-count" class="result-count"></div><div id="project-cards" class="project-grid"></div>` +
      section('Verwandte Spiele-Repositories', `<p class="muted">Separate Versionen oder Ableger. Sie werden zusätzlich geführt und nicht als weitere registrierte Hauptspiele gezählt.</p><div class="project-grid">${related.map(projectCard).join('')}</div>`, `${related.length} ergänzende Funde`) +
      section('Umfang und Zuordnung', `<div class="panel">${list(inventory.scopeNotes)}${sources(['spiele-bestand.json', 'online-bestand.json', 'apps-bestand.json', 'github-repositories.json'])}</div>`);
  }

  function pathRows(items) {
    return array(items).length ? items.map((path) => `<div class="path-row"><code>${escape(path)}</code><button class="button small" data-copy-path="${escape(path)}" aria-label="Pfad kopieren">Kopieren</button></div>`).join('') : '<p class="muted">Kein eindeutig zugeordneter lokaler Pfad gefunden.</p>';
  }

  function showProject(id) {
    const project = allProjects.get(id);
    if (!project) { toast('Dieses Produkt ist im Snapshot nicht enthalten.'); return; }
    const icon = data.icons?.[id];
    $('dialog-content').innerHTML = `<div class="dialog-header"><div><div class="project-head">${productIcon(project)}<div><h2 id="dialog-title">${escape(project.name)}</h2><small>${escape(areaLabels[areaAlias(project.area)] || 'Verwandtes Spiele-Repository')}</small></div></div>${badge(project.status || 'inventoried', project.statusLabel || 'Bestand erfasst')}</div><button class="dialog-close" data-close-dialog aria-label="Dialog schließen">×</button></div><div class="dialog-body"><p>${escape(project.description)}</p>${project.repository ? link('GitHub-Repository öffnen ↗', project.repository, 'button quiet') : '<p class="muted">Kein App-Quellcode-Repository zugeordnet.</p>'}<h3>Bestätigte lokale Pfade</h3>${pathRows(project.paths)}${array(project.variants).length ? `<h3>Varianten und Identität</h3>${project.variants.map((variant) => `<section class="variant"><h4>${escape(variant.name)}</h4><p>${escape([variant.framework, variant.packageId, variant.version].filter(Boolean).join(' · '))}</p>${variant.path ? pathRows([variant.path]) : ''}<p>${escape(variant.note || '')}</p></section>`).join('')}` : ''}<h3>Hinweise</h3>${list(project.notes || (project.note ? [project.note] : []))}${array(project.openQuestions).length ? `<h3>Offene Fragen</h3>${list(project.openQuestions)}` : ''}${project.nextStep ? `<h3>Nächster Schritt</h3><p>${escape(project.nextStep)}</p>` : ''}${project.analysisId ? `<a class="button primary" data-close-dialog href="#results/${escape(project.analysisId)}/review">Vollständige Analyse lesen</a>` : ''}<h3>Quellen</h3>${sources(project.sourceFiles)}${icon ? `<details class="original"><summary>Produktbild: Herkunft und Grenze</summary><p>${escape(icon.note || '')}</p><p class="path-reference">${escape(icon.source || '')}</p></details>` : '<p class="small-text muted">Monogramm zur Orientierung; kein erfundenes Produktlogo.</p>'}</div>`;
    $('project-dialog').showModal();
  }

  function findingsView(analysis) {
    return `<div class="note">Befunde sind nach Belegtyp markiert. „Im Webtest reproduziert“ bezeichnet die dokumentierte Testkopie; native und veröffentlichte Builds sind separat abzugleichen.</div>` +
      section('Stärken und vorhandene Grundlage', `<div class="grid two">${array(analysis.strengths).map((strength) => `<article class="panel"><div class="strength-item">${svg('check')}<div><strong>${escape(strength.title)}</strong><p>${escape(strength.detail)}</p></div></div></article>`).join('')}</div>`) +
      section('Ausführliche Befunde', array(analysis.findings).map((finding) => `<details class="finding"><summary><strong>${escape(finding.title)}</strong>${badge(finding.evidenceType, evidenceLabels[finding.evidenceType] || finding.evidenceType)}${finding.priority ? badge(finding.priority, priorityLabels[finding.priority] || finding.priority) : ''}</summary><div class="finding-body">${field('Befund', finding.detail)}${field('Beleg / Beobachtung', finding.evidence)}${field('Aussagegrenze', finding.limitation)}${field('Empfehlung', finding.recommendation)}${sources(finding.sourceDocs)}</div></details>`).join(''), `${array(analysis.findings).length} dokumentierte Befunde`) +
      section('Noch offene Fragen', `<div class="panel">${list(analysis.openQuestions)}</div>`);
  }

  function metricsView(analysis) {
    const metrics = array(analysis.metrics);
    return `<div class="note amber">Auswahlzeitraum und tatsächliche Datenabdeckung sind getrennt. Installationsklicks sind keine bestätigten Installationen; fehlende Werte sind nicht null. Zahlen aus unterschiedlichen Berichten ergeben keinen gemeinsamen Funnel.</div>` +
      (metrics.length ? `<div class="table-wrap"><table class="metric-table"><thead><tr><th>Kennzahl</th><th>Wert / Einheit</th><th>Auswahl</th><th>Tatsächliche Abdeckung</th><th>Definition und Grenze</th></tr></thead><tbody>${metrics.map((metric) => `<tr><td>${escape(metric.label)}</td><td><strong>${escape(metric.value == null ? '—' : typeof metric.value === 'number' ? new Intl.NumberFormat('de-DE').format(metric.value) : metric.value)}</strong><p>${escape(metric.unit)}</p></td><td>${escape(metric.selectedPeriod)}</td><td>${escape(metric.availablePeriod)}</td><td>${escape(metric.definition)}<p>${escape(metric.caveat)}</p></td></tr>`).join('')}</tbody></table></div>` : '<div class="empty">Für diese Analyse sind keine Kennzahlen dokumentiert.</div>') + sources(analysis.documents);
  }

  function screenshotsView(analysis) {
    const images = array(data.screenshots).filter((image) => image.projectId === analysis.projectId);
    if (!images.length) return '';
    const mirrorNote = analysis.projectId === 'mirror'
      ? 'Historische lokale UI-Preview vom 07.10.2026. Diese Bilder sind keine heutigen Aufnahmen und keine Belege eines Tests des veröffentlichten Play-Binaries. Der aktuelle Laufzeittest und seine Grenzen stehen gesondert im Bericht.'
      : 'Visuelle Referenzen mit dokumentierter Herkunft. Die Notizen je Bild bestimmen ihren Prüfstand und ihre Aussagegrenzen.';
    const validImage = (value) => /^data:image\/(png|webp|jpeg|gif);base64,[a-z0-9+/=\s]+$/i.test(value || '');
    return section('Visuelle Referenzen', `<div class="note">${escape(mirrorNote)}</div><div class="screenshot-grid">${images.map((image) => `<details class="screenshot"><summary>${validImage(image.dataUrl) ? `<img class="screenshot-thumb" src="${escape(image.dataUrl)}" alt="Preview: ${escape(image.title || 'Produktansicht')}" loading="lazy">` : '<span class="muted">Bild nicht im Snapshot verfügbar</span>'}<span>${escape(image.title || 'Produktansicht')}</span><small>Ansicht vergrößern</small></summary><div class="screenshot-body">${validImage(image.dataUrl) ? `<img class="screenshot-full" src="${escape(image.dataUrl)}" alt="${escape(image.title || 'Produktansicht')}" loading="lazy">` : ''}<p>${escape(image.note || mirrorNote)}</p><p class="path-reference">${escape(image.path || '')}</p></div></details>`).join('')}</div>`, `${images.length} dokumentierte Bilder`);
  }

  function actionsView(analysis) {
    return `<div class="note amber">Diese Maßnahmen sind aus der Analyse abgeleitete Vorschläge. Eine abgeschlossene Analyse bedeutet keinen behobenen Fehler, kein veröffentlichtes Update und keinen bewiesenen wirtschaftlichen Erfolg.</div>` + array(analysis.actions).slice().sort((a, b) => a.order - b.order).map((action, index) => `<article class="action"><span class="step-number">${action.order || index + 1}</span><div><h2>${escape(action.title)}</h2>${badge(action.status)}<p>${escape(action.detail)}</p><h3>Wie der Schritt geprüft werden soll</h3><p>${escape(action.validation)}</p></div></article>`).join('');
  }

  function scopeView(analysis) {
    return `<div class="grid two"><article class="panel"><h2>Tatsächlich geprüft</h2>${list(analysis.scope?.checked)}</article><article class="panel"><h2>Grenzen und nicht geprüft</h2>${list(analysis.scope?.notChecked)}</article></div>` + screenshotsView(analysis) + section('Vollständige Detaildokumente', `<div class="content-stack">${array(analysis.documents).map((path) => { const doc = paths.get(normalize(path)); return `<article class="panel list-row">${svg('docs')}<div class="grow"><h3>${escape(doc?.title || path.split('/').pop())}</h3><p class="path-reference">${escape(path)}</p></div>${link('Lesen →', path, 'button small')}</article>`; }).join('')}</div>`);
  }

  function resultsView(id, tab) {
    const analysis = analyses.find((item) => item.id === id) || analyses[0];
    if (!analysis) return intro('Ergebnisse', 'Noch keine Produktanalyse enthalten.', 'Die Bestandsaufnahme und die vorgesehenen Prüfungen stehen in den übrigen Bereichen.');
    const selectedTab = ['review', 'metrics', 'actions', 'scope'].includes(tab) ? tab : 'review';
    const tabs = { review: 'Bewertung & Befunde', metrics: 'Kennzahlen', actions: 'Maßnahmen', scope: 'Prüfumfang & Quellen' };
    const selection = analyses.length > 1 ? `<div class="toolbar"><label for="analysis-choice">Analyse:</label><select id="analysis-choice" class="filter">${analyses.map((item) => `<option value="${escape(item.id)}"${item.id === analysis.id ? ' selected' : ''}>${escape(item.title)}</option>`).join('')}</select></div>` : '';
    return intro('Ausführlich dokumentiert', analysis.title, analysis.summary) + `<div class="pill-row">${badge(analysis.status)}<span class="badge">${array(analysis.findings).length} Befunde</span><span class="badge">${array(analysis.metrics).length} Kennzahlen</span><span class="badge">${array(analysis.actions).length} Maßnahmen</span></div>${selection}<nav class="subnav" aria-label="Analysebereiche">${Object.entries(tabs).map(([key, title]) => `<a href="#results/${escape(analysis.id)}/${key}"${key === selectedTab ? ' class="active" aria-current="page"' : ''}>${title}</a>`).join('')}</nav>` + ({ review: findingsView, metrics: metricsView, actions: actionsView, scope: scopeView })[selectedTab](analysis);
  }

  function pendingView() {
    const entries = array(results.pending);
    return intro('Offene Arbeit und Entscheidungen', 'Der nächste Schritt bleibt nachvollziehbar.', 'Geplante Prüfungen, Strategievorschläge und bereits festgehaltene Arbeitsentscheidungen sind getrennt. Die Reihenfolge ist ein Arbeitsstand, keine pauschale Qualitätsbewertung.') +
      Object.entries(areaLabels).map(([id, title]) => section(title, `<div class="content-stack">${entries.filter((entry) => areaAlias(entry.area) === id).map((entry) => `<article class="panel"><div class="pill-row">${badge('pending', ({ verification: 'Gegenprüfung offen', analysis: 'Analyse offen', strategy: 'Entscheidung offen' })[entry.kind] || 'Offen')}${entry.projectId ? `<button class="link-button" data-project="${escape(entry.projectId)}">${escape(allProjects.get(entry.projectId)?.name || entry.projectId)}</button>` : ''}</div><h3>${escape(entry.title)}</h3><p>${escape(entry.detail)}</p></article>`).join('') || '<p class="muted">Kein weiterer Schritt dokumentiert.</p>'}</div>`)).join('') +
      section('Festgehaltene Entscheidungen und Vorschläge', array(results.decisions).map((decision) => `<article class="panel decision"><h3>${escape(decision.title)}</h3>${badge(decision.status)}<p>${escape(decision.detail)}</p><p class="small-text muted">Quelle: ${escape(decision.source || '')}</p>${sources([decision.source].filter((source) => paths.has(normalize(source))))}</article>`).join(''));
  }

  function docsView(path) {
    let requested = ''; try { requested = decodeURIComponent(path || ''); } catch (_) { requested = path || ''; }
    const doc = paths.get(normalize(requested)) || documents[0];
    if (!doc) return intro('Quellenbibliothek', 'Noch keine Dokumente eingebettet.', 'Detailberichte werden beim nächsten Build in das Dashboard übernommen.');
    const json = /\.json$/i.test(doc.path);
    let content = String(doc.content ?? '');
    if (json) { try { content = JSON.stringify(JSON.parse(content), null, 2); } catch (_) { /* Preserve original text. */ } }
    return intro('Alle Arbeitsinformationen', 'Dokumente und vollständige Quellen.', 'Die Berichte und Bestandsdateien sind vollständig eingebettet. Lesen, herunterladen und exportieren funktionieren auch ohne Server; Links zu bekannten Quellen führen hierher.') +
      `<div class="doc-layout"><nav class="doc-list" aria-label="Dokumentauswahl">${documents.map((entry) => `<a href="${escape(docRoute(entry))}"${entry.path === doc.path ? ' class="active" aria-current="page"' : ''}>${escape(entry.title || entry.path.split('/').pop())}<br><span class="small-text">${escape(entry.path)}</span></a>`).join('')}</nav><article class="doc-reader"><div class="doc-heading"><div><span>${escape(doc.path)}</span></div><div class="top-actions"><button class="button small" data-download-doc="${escape(doc.path)}">Original herunterladen</button><button class="button small quiet" data-print>Drucken</button></div></div>${json ? `<pre><code>${escape(content)}</code></pre>` : markdown(content, doc.path)}</article></div>`;
  }

  function download(name, content, mime) {
    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a'); anchor.href = url; anchor.download = name;
    document.body.appendChild(anchor); anchor.click(); anchor.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  const navigation = [['overview', 'Übersicht'], ['context', 'Anliegen & Ziele'], ['projects', 'Produkte & Repos'], ['results', 'Ergebnisse'], ['pending', 'Offene Schritte'], ['docs', 'Dokumente']];
  function render() {
    const parts = location.hash.replace(/^#\/?/, '').split('/');
    const view = navigation.some(([id]) => id === parts[0]) ? parts[0] : 'overview';
    $('navigation').innerHTML = navigation.map(([id, label]) => `<a class="nav-link${id === view ? ' active' : ''}" href="#${id}"${id === view ? ' aria-current="page"' : ''}>${svg(id)}<span>${label}</span>${id === 'projects' ? `<small>${projects.length}</small>` : id === 'results' ? `<small>${analyses.length}</small>` : ''}</a>`).join('');
    $('breadcrumb').textContent = navigation.find(([id]) => id === view)[1];
    $('page').innerHTML = ({ overview, context: contextView, projects: () => projectsView(parts[1]), results: () => resultsView(parts[1], parts[2]), pending: pendingView, docs: () => docsView(parts.slice(1).join('/')) })[view]();
    if (view === 'projects') {
      updateProjectCards();
      $('project-search').addEventListener('input', (event) => { filterState.query = event.target.value; updateProjectCards(); });
      $('project-area').addEventListener('change', (event) => { filterState.area = event.target.value; updateProjectCards(); });
      $('project-status').addEventListener('change', (event) => { filterState.status = event.target.value; updateProjectCards(); });
    }
    const choice = $('analysis-choice');
    if (choice) choice.addEventListener('change', (event) => { location.hash = `results/${event.target.value}/review`; });
  }

  document.addEventListener('click', async (event) => {
    const target = event.target.closest('[data-project],[data-close-dialog],[data-copy-path],[data-download-doc],[data-print]');
    if (!target) return;
    if (target.hasAttribute('data-project')) showProject(target.dataset.project);
    if (target.hasAttribute('data-close-dialog')) $('project-dialog').close();
    if (target.hasAttribute('data-copy-path')) {
      try {
        if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
        await navigator.clipboard.writeText(target.dataset.copyPath); toast('Pfad kopiert.');
      } catch (_) { toast('Kopieren ist hier nicht verfügbar. Den sichtbaren Pfad markieren und mit Strg+C kopieren.'); }
    }
    if (target.hasAttribute('data-download-doc')) {
      const doc = paths.get(normalize(target.dataset.downloadDoc));
      if (doc) download(doc.path.split(/[\\/]/).pop(), doc.content, /\.json$/i.test(doc.path) ? 'application/json;charset=utf-8' : 'text/markdown;charset=utf-8');
    }
    if (target.hasAttribute('data-print')) window.print();
  });
  $('project-dialog').addEventListener('click', (event) => { if (event.target === $('project-dialog')) { const box = event.target.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) event.target.close(); } });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && $('project-dialog').open) $('project-dialog').close(); });
  $('export').addEventListener('click', () => { download(`emfau-overview-${data.meta?.updatedAt || context.updatedAt || 'snapshot'}.json`, JSON.stringify(data, null, 2), 'application/json;charset=utf-8'); toast('Vollständiger Snapshot wird heruntergeladen.'); });
  let printDetails = [];
  window.addEventListener('beforeprint', () => { printDetails = [...document.querySelectorAll('details:not([open])')]; printDetails.forEach((detail) => { detail.open = true; }); });
  window.addEventListener('afterprint', () => { printDetails.forEach((detail) => { detail.open = false; }); printDetails = []; });
  window.addEventListener('hashchange', () => { if ($('project-dialog').open) $('project-dialog').close(); render(); window.scrollTo({ top: 0, behavior: 'instant' }); });
  const updated = dateLabel(data.meta?.updatedAt || context.updatedAt);
  $('sidebar-date').textContent = `Stand ${updated}`;
  $('stamp').textContent = `Stand ${updated}`;
  render();
})();
