// Cross-Border Data Transfer Decision Tree - vis-network
// Walks GDPR transfer mechanisms: adequacy, BCR, SCC + TIA, derogations
// CANVAS_HEIGHT: 720

document.addEventListener('DOMContentLoaded', function () {
  const Q = '#37474F';
  const PERMITTED = '#43A047';
  const COND = '#FFA000';
  const DENY = '#C62828';
  const SCHREMS = '#C2185B';

  const nodes = new vis.DataSet([
    { id: 'q1', label: 'Transfer EU PII\nto country X.\nWhat to do?', shape: 'box', color: { background: Q, border: '#000' }, font: { color: 'white', size: 12 } },
    { id: 'q2', label: 'Adequacy\ndecision\ncovers X?', shape: 'diamond', size: 30, color: { background: '#90A4AE', border: '#37474F' }, font: { size: 11 } },
    { id: 'leaf-adeq', label: 'Transfer\npermitted\n(Art. 45)', shape: 'box', color: { background: PERMITTED, border: '#1B5E20' }, font: { color: 'white' } },
    { id: 'q3', label: 'Binding Corporate\nRules approved?', shape: 'diamond', size: 30, color: { background: '#90A4AE', border: '#37474F' }, font: { size: 11 } },
    { id: 'leaf-bcr', label: 'Transfer\npermitted\n(Art. 47)', shape: 'box', color: { background: PERMITTED, border: '#1B5E20' }, font: { color: 'white' } },
    { id: 'q4', label: 'Use SCCs?\n(Art. 46)', shape: 'diamond', size: 30, color: { background: '#90A4AE', border: '#37474F' }, font: { size: 11 } },
    { id: 'q5', label: 'Transfer Impact\nAssessment\nshows risk?', shape: 'diamond', size: 30, color: { background: '#90A4AE', border: '#37474F' }, font: { size: 11 } },
    { id: 'leaf-scc-ok', label: 'Transfer w/\nSCCs\n(permitted)', shape: 'box', color: { background: PERMITTED, border: '#1B5E20' }, font: { color: 'white' } },
    { id: 'q6', label: 'Apply supplementary\nmeasures?\n(EU-held keys, etc.)', shape: 'diamond', size: 30, color: { background: '#90A4AE', border: '#37474F' }, font: { size: 11 } },
    { id: 'leaf-supp', label: 'Permitted\nwith\nsafeguards', shape: 'box', color: { background: COND, border: '#E65100' }, font: { color: '#212121' } },
    { id: 'q7', label: 'Derogation\navailable?\n(Art. 49)', shape: 'diamond', size: 30, color: { background: '#90A4AE', border: '#37474F' }, font: { size: 11 } },
    { id: 'leaf-derog', label: 'Permitted\n(narrow,\nrare)', shape: 'box', color: { background: COND, border: '#E65100' }, font: { color: '#212121' } },
    { id: 'leaf-deny', label: 'DO NOT\nTRANSFER', shape: 'box', color: { background: DENY, border: '#7F0000' }, font: { color: 'white', size: 14, bold: true } },
    { id: 'schrems', label: '⚠ Schrems II', shape: 'box', color: { background: SCHREMS, border: '#880E4F' }, font: { color: 'white' } }
  ]);

  const edges = new vis.DataSet([
    { from: 'q1', to: 'q2', arrows: 'to' },
    { from: 'q2', to: 'leaf-adeq', label: 'yes', arrows: 'to' },
    { from: 'q2', to: 'q3', label: 'no', arrows: 'to' },
    { from: 'q3', to: 'leaf-bcr', label: 'yes (intra-group)', arrows: 'to', font: { size: 10 } },
    { from: 'q3', to: 'q4', label: 'no', arrows: 'to' },
    { from: 'q4', to: 'q5', label: 'yes', arrows: 'to' },
    { from: 'q4', to: 'q7', label: 'no', arrows: 'to' },
    { from: 'q5', to: 'leaf-scc-ok', label: 'no risk', arrows: 'to', font: { size: 10 } },
    { from: 'q5', to: 'q6', label: 'risk found', arrows: 'to', font: { size: 10 } },
    { from: 'q6', to: 'leaf-supp', label: 'yes', arrows: 'to' },
    { from: 'q6', to: 'q7', label: 'no', arrows: 'to' },
    { from: 'q7', to: 'leaf-derog', label: 'yes', arrows: 'to' },
    { from: 'q7', to: 'leaf-deny', label: 'no', arrows: 'to' },
    { from: 'schrems', to: 'q5', dashes: true, color: { color: SCHREMS }, label: 'requires TIA', arrows: 'to', font: { size: 10, color: SCHREMS } }
  ]);

  edges.forEach(e => {
    if (!e.dashes) edges.update({ id: e.id, color: { color: '#546E7A' }, width: 2, font: { align: 'middle' }, smooth: { type: 'cubicBezier', forceDirection: 'vertical', roundness: 0.3 } });
  });

  const network = new vis.Network(document.getElementById('network'), { nodes, edges }, {
    layout: { hierarchical: { direction: 'UD', sortMethod: 'directed', levelSeparation: 110, nodeSpacing: 160 } },
    physics: false,
    interaction: { hover: true, dragNodes: false, zoomView: true, dragView: true },
    nodes: { borderWidth: 2, font: { face: 'Arial', size: 11 }, shadow: { enabled: true, size: 3, x: 1, y: 1 }, widthConstraint: { minimum: 100, maximum: 160 } }
  });

  const info = {
    'q2': 'GDPR Art. 45. EU Commission has issued ~15 adequacy decisions (UK, Japan, South Korea, etc.). If yes, you can transfer with no extra safeguards.',
    'q3': 'GDPR Art. 47. BCRs are internal codes of conduct approved by a lead supervisory authority. Used for intra-group transfers in multinationals.',
    'q4': 'GDPR Art. 46. Standard Contractual Clauses are EU-Commission-approved templates the parties sign.',
    'q5': 'Schrems II (CJEU 2020) requires a Transfer Impact Assessment. Evaluates surveillance laws of the destination country (e.g., FISA Section 702 in the US).',
    'q6': 'Encryption with EU-held keys, pseudonymization, contractual rights of audit. Designed to make government access ineffective.',
    'q7': 'Art. 49 derogations: explicit consent, contract necessity, vital interests. Narrow, occasional use only.',
    'schrems': 'Case C-311/18. Invalidated Privacy Shield and added the TIA requirement to SCC-based transfers.',
    'leaf-adeq': 'Easiest path. No further paperwork beyond standard data-processing-agreement clauses.',
    'leaf-bcr': 'High-effort to set up (multi-year approval), but reusable across the group forever after.',
    'leaf-scc-ok': 'Most common transfer mechanism in practice. Requires the TIA and ongoing monitoring.',
    'leaf-supp': 'Sometimes the only way to keep using a US cloud provider for EU data without breaking GDPR.',
    'leaf-derog': 'Per-transfer basis. Cannot be used as a routine mechanism — supervisors will object.',
    'leaf-deny': 'You must localize. Either use an EU provider or delete the transfer entirely.'
  };

  const panelTitle = document.getElementById('panel-title');
  const panelBody = document.getElementById('panel-body');

  function showInfo(id) {
    if (!info[id]) {
      panelTitle.textContent = 'Click any node';
      panelBody.innerHTML = '<p style="color:#666;font-size:12px;">Click any node to see the legal basis and case-law reference.</p>';
      return;
    }
    const node = nodes.get(id);
    panelTitle.textContent = (node && node.label.split('\n').join(' ')) || id;
    panelBody.innerHTML = '<p>' + info[id] + '</p>';
  }
  showInfo(null);
  network.on('click', p => { if (p.nodes.length) showInfo(p.nodes[0]); else showInfo(null); });

  // Scenario picker
  const scenarios = {
    'us-cloud': { path: ['q1','q2','q3','q4','q5','q6','leaf-supp'], desc: 'EU PII to US cloud provider: no adequacy, no BCR, SCCs + TIA reveals US surveillance risk → supplementary measures (EU-held encryption keys).' },
    'india': { path: ['q1','q2','q3','q4','q5','q6','q7','leaf-deny'], desc: 'EU PII to Indian outsourcer: no adequacy, no BCR, SCC TIA finds risk, supplementary measures unworkable, no derogation → DO NOT TRANSFER.' },
    'intragroup-uk': { path: ['q1','q2','leaf-adeq'], desc: 'EU-to-UK intra-group transfer: UK has an adequacy decision (post-Brexit) → permitted directly under Art. 45.' }
  };

  document.getElementById('scenario').addEventListener('change', async function () {
    const s = scenarios[this.value];
    if (!s) return;
    network.unselectAll();
    document.getElementById('scenario-desc').textContent = s.desc;
    for (const id of s.path) {
      network.selectNodes([id]);
      await new Promise(r => setTimeout(r, 600));
    }
  });
});
