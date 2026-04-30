// STRIDE Threat Model Overlay - vis-network
// Web app DFD with STRIDE threat overlay (Spoofing/Tampering/Repudiation/InfoDisc/DoS/Elev)
// CANVAS_HEIGHT: 720

document.addEventListener('DOMContentLoaded', function () {
  const EXT = '#90A4AE';
  const PROC = '#43A047';
  const STORE = '#C2185B';

  let showMitigations = false;

  const baseNodes = [
    { id: 'browser', label: 'Browser\n(External)', shape: 'box', color: { background: EXT, border: '#37474F' }, font: { color: 'white' }, x: -400, y: 0 },
    { id: 'web', label: 'Web\nServer', shape: 'ellipse', color: { background: PROC, border: '#1B5E20' }, font: { color: 'white' }, x: -150, y: 0 },
    { id: 'app', label: 'App\nServer', shape: 'ellipse', color: { background: PROC, border: '#1B5E20' }, font: { color: 'white' }, x: 100, y: 0 },
    { id: 'auth', label: 'Auth\nService', shape: 'ellipse', color: { background: PROC, border: '#1B5E20' }, font: { color: 'white' }, x: 100, y: -150 },
    { id: 'db', label: 'Database', shape: 'database', color: { background: STORE, border: '#7F0000' }, font: { color: 'white' }, x: 350, y: 0 }
  ];

  const baseEdges = [
    { id: 'e1', from: 'browser', to: 'web', label: 'HTTPS', arrows: 'to' },
    { id: 'e2', from: 'web', to: 'app', label: 'API call', arrows: 'to' },
    { id: 'e3', from: 'app', to: 'auth', label: 'verify token', arrows: 'to' },
    { id: 'e4', from: 'app', to: 'db', label: 'SQL', arrows: 'to' }
  ];

  const nodes = new vis.DataSet(baseNodes);
  const edges = new vis.DataSet(baseEdges.map(e => ({ ...e, color: { color: '#26A69A' }, font: { size: 10, align: 'top' }, smooth: { type: 'cubicBezier' } })));

  // STRIDE threats per element
  const threats = {
    browser: [
      { letter: 'S', name: 'Spoofing', threat: 'Attacker impersonates the user via stolen cookies or weak auth.', mitigation: 'Strong authentication (MFA), HttpOnly + Secure cookies.' }
    ],
    web: [
      { letter: 'T', name: 'Tampering', threat: 'Modified request bodies bypass server-side validation.', mitigation: 'Server-side validation; reject any field client could not have legitimately set.' },
      { letter: 'D', name: 'DoS', threat: 'Flood of requests overwhelms web server.', mitigation: 'Rate limiting at gateway; autoscaling.' }
    ],
    app: [
      { letter: 'I', name: 'Info Disclosure', threat: 'Verbose error messages leak stack traces and table names.', mitigation: 'Generic error responses; structured logging that never echoes back to user.' },
      { letter: 'E', name: 'Elev. of Privilege', threat: 'Missing authorization check lets a low-priv user call admin endpoint.', mitigation: 'RBAC enforced at every endpoint; default-deny.' }
    ],
    auth: [
      { letter: 'S', name: 'Spoofing', threat: 'Forged JWT signature accepted because of weak key handling.', mitigation: 'Strong signing keys, key rotation, signature verification.' },
      { letter: 'R', name: 'Repudiation', threat: 'User claims they didn\'t log in / didn\'t change password.', mitigation: 'Tamper-evident audit log of every auth event.' }
    ],
    db: [
      { letter: 'I', name: 'Info Disclosure', threat: 'Database backup leaked publicly; data readable.', mitigation: 'Encryption at rest; least-privilege backup roles.' },
      { letter: 'T', name: 'Tampering', threat: 'Privileged user modifies stored credentials directly.', mitigation: 'Hash + salt all secrets; segregate DBA from app DB credentials.' }
    ]
  };

  const stridLetters = { S: '#1976D2', T: '#FF7043', R: '#FFA000', I: '#7B1FA2', D: '#C62828', E: '#43A047' };

  const panelTitle = document.getElementById('panel-title');
  const panelBody = document.getElementById('panel-body');
  function show(id) {
    const list = threats[id];
    if (!list) {
      panelTitle.textContent = 'Click any element';
      panelBody.innerHTML = '<p style="color:#666;font-size:12px;">Click any node to see the STRIDE threats applicable to that element type.</p>';
      return;
    }
    panelTitle.textContent = baseNodes.find(n => n.id === id).label.replace('\n', ' ') + ' — STRIDE';
    panelBody.innerHTML = list.map(t =>
      '<div style="margin-bottom:8px; padding: 6px; border-left: 3px solid ' + stridLetters[t.letter] + '; background: #f8f9fa;">' +
      '<strong>' + t.letter + ' — ' + t.name + '</strong><br/>' +
      '<span style="font-size:11px; color:#444;"><strong>Threat:</strong> ' + t.threat + '</span><br/>' +
      '<span style="font-size:11px; color: ' + stridLetters[t.letter] + ';"><strong>' + (showMitigations ? 'Control' : 'Mitigation') + ':</strong> ' + t.mitigation + '</span>' +
      '</div>'
    ).join('');
  }
  show(null);

  const network = new vis.Network(document.getElementById('network'), { nodes, edges }, {
    physics: false,
    interaction: { hover: true, dragNodes: false, zoomView: true, dragView: true },
    nodes: { borderWidth: 2, font: { size: 11, face: 'Arial' }, shadow: { enabled: true, size: 3 }, widthConstraint: { minimum: 70, maximum: 110 } }
  });
  network.on('click', p => { if (p.nodes.length) show(p.nodes[0]); else show(null); });

  document.getElementById('toggle-mit').addEventListener('click', function () {
    showMitigations = !showMitigations;
    this.textContent = showMitigations ? 'Show Threats' : 'Show Mitigations';
    this.classList.toggle('active', showMitigations);
    show(null);
  });

  document.getElementById('reveal-all').addEventListener('click', function () {
    panelTitle.textContent = 'All STRIDE Threats Identified';
    panelBody.innerHTML = Object.entries(threats).map(([id, ts]) =>
      '<p><strong>' + id + ':</strong> ' + ts.map(t => t.letter + ' (' + t.name + ')').join(', ') + '</p>'
    ).join('');
  });
});
