// IS Executive Roles - vis-network
// CEO, Audit Committee, CIO/CTO/CDO/CISO, EA/BA/Data Steward
// CANVAS_HEIGHT: 720

document.addEventListener('DOMContentLoaded', function () {
  let cisoToAudit = false;

  const nodes = new vis.DataSet([
    { id: 'ceo', label: 'CEO', shape: 'box', color: { background: '#0D47A1', border: '#001970' }, font: { color: 'white', size: 14, bold: true }, level: 0 },
    { id: 'audit', label: 'Audit\nCommittee', shape: 'box', color: { background: '#880E4F', border: '#560027' }, font: { color: 'white' }, level: 0 },
    { id: 'cio', label: 'CIO', shape: 'box', color: { background: '#26A69A', border: '#00695C' }, font: { color: 'white', size: 13, bold: true }, level: 1 },
    { id: 'cto', label: 'CTO', shape: 'box', color: { background: '#9CCC65', border: '#558B2F' }, font: { color: 'white', size: 13, bold: true }, level: 1 },
    { id: 'cdo', label: 'CDO', shape: 'box', color: { background: '#FFC107', border: '#F57F17' }, font: { color: '#212121', size: 13, bold: true }, level: 1 },
    { id: 'ciso', label: 'CISO', shape: 'box', color: { background: '#FF8A65', border: '#D84315' }, font: { color: 'white', size: 13, bold: true }, level: 1 },
    { id: 'ea', label: 'Enterprise\nArchitect', shape: 'box', color: { background: '#CE93D8', border: '#6A1B9A' }, font: { color: 'white' }, level: 2 },
    { id: 'ba', label: 'Business\nAnalyst', shape: 'box', color: { background: '#CE93D8', border: '#6A1B9A' }, font: { color: 'white' }, level: 2 },
    { id: 'ds', label: 'Data\nSteward', shape: 'box', color: { background: '#CE93D8', border: '#6A1B9A' }, font: { color: 'white' }, level: 2 }
  ]);

  function buildEdges() {
    return [
      { id: 'ceo-cio', from: 'ceo', to: 'cio' },
      { id: 'ceo-cto', from: 'ceo', to: 'cto' },
      { id: 'ceo-cdo', from: 'ceo', to: 'cdo' },
      { id: 'ceo-ciso', from: 'ceo', to: 'ciso', dashes: cisoToAudit },
      cisoToAudit
        ? { id: 'audit-ciso', from: 'audit', to: 'ciso', color: { color: '#880E4F' }, width: 3 }
        : { id: 'cio-ciso', from: 'cio', to: 'ciso', color: { color: '#26A69A' }, width: 3 },
      { id: 'cio-ea', from: 'cio', to: 'ea' },
      { id: 'cio-ba', from: 'cio', to: 'ba' },
      { id: 'cdo-ds', from: 'cdo', to: 'ds' }
    ];
  }
  const edges = new vis.DataSet(buildEdges().map(e => ({ ...e, arrows: 'to', color: e.color || { color: '#546E7A' }, smooth: { type: 'cubicBezier', forceDirection: 'vertical', roundness: 0.4 } })));

  const network = new vis.Network(document.getElementById('network'), { nodes, edges }, {
    layout: { hierarchical: { direction: 'UD', sortMethod: 'directed', levelSeparation: 130, nodeSpacing: 140 } },
    physics: false,
    interaction: { hover: true, dragNodes: false, zoomView: true, dragView: true },
    nodes: { borderWidth: 2, font: { face: 'Arial' }, shadow: { enabled: true, size: 3 }, widthConstraint: { minimum: 90, maximum: 130 } }
  });

  const info = {
    'ceo': { acc: 'Overall enterprise performance.', day: 'Sets strategy; chairs leadership team.', path: 'Diverse executive backgrounds.' },
    'audit': { acc: 'Independent oversight of risk and controls.', day: 'Quarterly review of audit findings; signs off on financial controls.', path: 'Senior board members, often external.' },
    'cio': { acc: 'Run and improve the IS that the business depends on day-to-day.', day: 'Vendor reviews, project portfolio reviews, system outages.', path: 'IT manager → director → CIO; sometimes consulting.' },
    'cto': { acc: 'Technical strategy, architecture choices, and external technology direction.', day: 'Architecture reviews, build-vs-buy decisions, evaluating new platforms.', path: 'Engineer → eng manager → CTO; or product-tech leadership.' },
    'cdo': { acc: 'Data as a strategic asset: governance, quality, and value extraction.', day: 'Data product roadmap; data-quality KPIs; AI/analytics priorities.', path: 'Analytics leader, data engineering, or chief analytics officer.' },
    'ciso': { acc: 'Information security risk and incident response.', day: 'Threat briefings, risk acceptance reviews, security incident calls.', path: 'Security engineer → security director → CISO.' },
    'ea': { acc: 'Cross-portfolio architecture coherence.', day: 'Architecture review board; reference architectures; tech-debt reviews.', path: 'Solutions architect → enterprise architect.' },
    'ba': { acc: 'Translate business need into requirements; user-process design.', day: 'Stakeholder interviews; user-story writing; UAT coordination.', path: 'Functional analyst → senior BA.' },
    'ds': { acc: 'Definitive owner of data quality in a business domain.', day: 'Approves data definitions, reviews data-quality scorecards, resolves disputes.', path: 'Subject-matter expert in a business domain.' }
  };

  const panelTitle = document.getElementById('panel-title');
  const panelBody = document.getElementById('panel-body');
  function showInfo(id) {
    const i = info[id];
    if (!i) {
      panelTitle.textContent = 'Click any role';
      panelBody.innerHTML = '<p style="color:#666;font-size:12px;">Click any node for accountability, day-in-the-life, and career path.</p>';
      return;
    }
    panelTitle.textContent = nodes.get(id).label.replace('\n', ' ');
    panelBody.innerHTML =
      '<p><strong>Primary accountability:</strong> ' + i.acc + '</p>' +
      '<p><strong>Day in the life:</strong> ' + i.day + '</p>' +
      '<p><strong>Career path:</strong> ' + i.path + '</p>';
  }
  showInfo(null);
  network.on('click', p => { if (p.nodes.length) showInfo(p.nodes[0]); else showInfo(null); });

  document.getElementById('toggle-ciso').addEventListener('click', function () {
    cisoToAudit = !cisoToAudit;
    edges.clear();
    edges.add(buildEdges().map(e => ({ ...e, arrows: 'to', color: e.color || { color: '#546E7A' }, smooth: { type: 'cubicBezier', forceDirection: 'vertical', roundness: 0.4 } })));
    this.textContent = cisoToAudit ? 'CISO → CIO (operational)' : 'CISO → Audit Committee (independent)';
    panelTitle.textContent = cisoToAudit ? 'CISO reports to Audit Committee' : 'CISO reports to CIO';
    panelBody.innerHTML = cisoToAudit
      ? '<p>The CISO reports independently to the Audit Committee. This <em>strengthens</em> separation of duties — the security function cannot be pressured to soft-pedal findings about the CIO\'s own systems.</p><p>Tradeoff: less day-to-day operational integration with IT.</p>'
      : '<p>The CISO reports to the CIO. <em>Operational</em> integration is strong, but the CISO cannot easily flag failures by their own boss without political risk.</p><p>Tradeoff: weakened separation of duties; mitigated only if Audit Committee has direct CISO access.</p>';
  });
});
