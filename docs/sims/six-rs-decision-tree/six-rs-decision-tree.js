// Six R's Cloud Migration Decision Tree - vis-network
// Retire, Repurchase, Refactor, Replatform, Rehost, Retain
// CANVAS_HEIGHT: 720

document.addEventListener('DOMContentLoaded', function () {
  const Q = '#00695C';
  const RETIRE = '#90A4AE';
  const REPURCHASE = '#C2185B';
  const REFACTOR = '#43A047';
  const REPLATFORM = '#FF7043';
  const REHOST = '#FFA000';
  const RETAIN = '#90A4AE';

  const nodes = new vis.DataSet([
    { id: 'root', label: 'Workload\nto migrate', shape: 'box', color: { background: Q, border: '#003D2C' }, font: { color: 'white' } },
    { id: 'q1', label: 'Still used?', shape: 'diamond', size: 30, color: { background: '#80CBC4', border: '#004D40' } },
    { id: 'leaf-retire', label: 'RETIRE\nlow effort\n(decommission)', shape: 'box', color: { background: RETIRE, border: '#37474F' }, font: { color: 'white' } },
    { id: 'q2', label: 'SaaS\nequivalent\navailable?', shape: 'diamond', size: 30, color: { background: '#80CBC4', border: '#004D40' } },
    { id: 'leaf-repurchase', label: 'REPURCHASE\nmedium effort\n(switch to SaaS)', shape: 'box', color: { background: REPURCHASE, border: '#7F0000' }, font: { color: 'white' } },
    { id: 'q3', label: 'Strategic,\nlong-lived?', shape: 'diamond', size: 30, color: { background: '#80CBC4', border: '#004D40' } },
    { id: 'leaf-refactor', label: 'REFACTOR\nhigh effort\n(re-architect)', shape: 'box', color: { background: REFACTOR, border: '#1B5E20' }, font: { color: 'white' } },
    { id: 'q4', label: 'Cloud benefit\nworth minor\neffort?', shape: 'diamond', size: 30, color: { background: '#80CBC4', border: '#004D40' } },
    { id: 'leaf-replatform', label: 'REPLATFORM\nmedium effort\n(lift & adjust)', shape: 'box', color: { background: REPLATFORM, border: '#BF360C' }, font: { color: 'white' } },
    { id: 'q5', label: 'Migration\ndeadline?', shape: 'diamond', size: 30, color: { background: '#80CBC4', border: '#004D40' } },
    { id: 'leaf-rehost', label: 'REHOST\nlow effort\n(lift & shift)', shape: 'box', color: { background: REHOST, border: '#E65100' }, font: { color: 'white' } },
    { id: 'leaf-retain', label: 'RETAIN\nno effort now\n(revisit later)', shape: 'box', color: { background: RETAIN, border: '#37474F' }, font: { color: 'white' } }
  ]);

  const edges = new vis.DataSet([
    { from: 'root', to: 'q1', arrows: 'to' },
    { from: 'q1', to: 'leaf-retire', label: 'no', arrows: 'to' },
    { from: 'q1', to: 'q2', label: 'yes', arrows: 'to' },
    { from: 'q2', to: 'leaf-repurchase', label: 'yes', arrows: 'to' },
    { from: 'q2', to: 'q3', label: 'no', arrows: 'to' },
    { from: 'q3', to: 'leaf-refactor', label: 'yes', arrows: 'to' },
    { from: 'q3', to: 'q4', label: 'no', arrows: 'to' },
    { from: 'q4', to: 'leaf-replatform', label: 'yes', arrows: 'to' },
    { from: 'q4', to: 'q5', label: 'no', arrows: 'to' },
    { from: 'q5', to: 'leaf-rehost', label: 'yes', arrows: 'to' },
    { from: 'q5', to: 'leaf-retain', label: 'no', arrows: 'to' }
  ]);

  edges.forEach(e => edges.update({ id: e.id, color: { color: '#546E7A' }, smooth: { type: 'cubicBezier', forceDirection: 'vertical', roundness: 0.3 }, font: { align: 'middle' } }));

  const network = new vis.Network(document.getElementById('network'), { nodes, edges }, {
    layout: { hierarchical: { direction: 'UD', sortMethod: 'directed', levelSeparation: 100, nodeSpacing: 180 } },
    physics: false,
    interaction: { hover: true, dragNodes: false, zoomView: true, dragView: true },
    nodes: { borderWidth: 2, font: { size: 11, face: 'Arial' }, shadow: { enabled: true, size: 3 }, widthConstraint: { minimum: 100, maximum: 150 } }
  });

  const info = {
    'leaf-retire': { mean: 'Decommission the workload entirely. The cheapest migration is the one you don\'t do.', tl: 'days', ex: 'A reporting tool nobody has logged into in 18 months.' },
    'leaf-repurchase': { mean: 'Replace with a SaaS product. Often involves data migration and process re-engineering.', tl: '3-9 months', ex: 'Replace homegrown CRM with Salesforce.' },
    'leaf-refactor': { mean: 'Re-architect the application to be cloud-native (microservices, managed services). High effort, highest ROI for strategic workloads.', tl: '12-24 months', ex: 'Rewrite the core trading platform to run on Kubernetes with managed Postgres.' },
    'leaf-replatform': { mean: 'Lift the application but make small adjustments — e.g., switch from self-managed DB to managed RDS, change OS family.', tl: '3-6 months', ex: 'Move WebSphere apps to AWS EC2 with managed RDS.' },
    'leaf-rehost': { mean: 'Lift and shift — move VMs to cloud as-is. Fast, but you keep the same architecture and inefficiencies.', tl: '1-3 months', ex: 'Move legacy ERP server to Azure with same VM specs.' },
    'leaf-retain': { mean: 'Keep on-prem for now. Revisit when constraints change.', tl: 'no migration', ex: 'Mainframe banking core that\'s working fine and not yet ready for cloud.' }
  };

  const panelTitle = document.getElementById('panel-title');
  const panelBody = document.getElementById('panel-body');
  function showInfo(id) {
    const i = info[id];
    if (!i) {
      panelTitle.textContent = 'Click any node';
      panelBody.innerHTML = '<p style="color:#666;font-size:12px;">Click any leaf for the strategy meaning, typical timeline, and a real-world example.</p>';
      return;
    }
    panelTitle.textContent = nodes.get(id).label.split('\n')[0];
    panelBody.innerHTML =
      '<p><strong>What it means:</strong> ' + i.mean + '</p>' +
      '<p><strong>Typical timeline:</strong> ' + i.tl + '</p>' +
      '<p><strong>Example:</strong> ' + i.ex + '</p>';
  }
  showInfo(null);
  network.on('click', p => { if (p.nodes.length) showInfo(p.nodes[0]); else showInfo(null); });

  document.getElementById('trace-example').addEventListener('click', async function () {
    panelTitle.textContent = 'Example: homegrown HR portal';
    panelBody.innerHTML = '<p>Walking through the Six Rs decision tree for a homegrown HR portal...</p>';
    const path = ['root', 'q1', 'q2', 'leaf-repurchase'];
    network.unselectAll();
    for (const id of path) {
      network.selectNodes([id]);
      await new Promise(r => setTimeout(r, 700));
    }
    panelBody.innerHTML +=
      '<p>Q1: still used? <strong>yes</strong></p>' +
      '<p>Q2: SaaS equivalent (Workday, BambooHR)? <strong>yes</strong></p>' +
      '<p>→ <strong>Repurchase</strong> the SaaS. Building a homegrown HR portal is rarely the strategic differentiator.</p>';
  });
});
