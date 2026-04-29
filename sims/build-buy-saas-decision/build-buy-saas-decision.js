// Build vs Buy vs SaaS Decision Tree - vis-network
// Top-down decision tree with leaves recommending Build, Buy, or SaaS
// CANVAS_HEIGHT: 720

document.addEventListener('DOMContentLoaded', function () {
  const Q = '#455A64';   // question (slate)
  const BUILD = '#43A047';  // build leaf (emerald)
  const BUY = '#1E88E5';    // buy leaf (deep blue)
  const SAAS = '#FF7043';   // SaaS leaf (coral)

  const nodes = new vis.DataSet([
    { id: 'q1', label: 'Is this capability\na strategic\ndifferentiator?', level: 0, color: { background: Q, border: '#263238' }, font: { color: 'white' }, shape: 'box' },
    { id: 'q2', label: 'Will it change\nfrequently?', level: 1, color: { background: Q, border: '#263238' }, font: { color: 'white' }, shape: 'box' },
    { id: 'q3', label: 'Does mature SaaS\ncover 80%+ of\nrequirements?', level: 1, color: { background: Q, border: '#263238' }, font: { color: 'white' }, shape: 'box' },
    { id: 'q4', label: 'Data sovereignty /\nregulation\nconstraint?', level: 2, color: { background: Q, border: '#263238' }, font: { color: 'white' }, shape: 'box' },
    { id: 'leaf-build-1', label: 'BUILD', level: 2, color: { background: BUILD, border: '#1B5E20' }, font: { color: 'white', size: 16 }, shape: 'box' },
    { id: 'leaf-build-2', label: 'BUILD', level: 3, color: { background: BUILD, border: '#1B5E20' }, font: { color: 'white', size: 16 }, shape: 'box' },
    { id: 'leaf-buy-1', label: 'BUY\n(on-prem)', level: 3, color: { background: BUY, border: '#0D47A1' }, font: { color: 'white', size: 14 }, shape: 'box' },
    { id: 'leaf-saas-1', label: 'SAAS', level: 3, color: { background: SAAS, border: '#BF360C' }, font: { color: 'white', size: 16 }, shape: 'box' },
    { id: 'leaf-buy-2', label: 'BUY', level: 2, color: { background: BUY, border: '#0D47A1' }, font: { color: 'white', size: 16 }, shape: 'box' }
  ]);

  const edges = new vis.DataSet([
    { from: 'q1', to: 'q2', label: 'yes', font: { align: 'middle' }, arrows: 'to' },
    { from: 'q1', to: 'q3', label: 'no', font: { align: 'middle' }, arrows: 'to' },
    { from: 'q2', to: 'leaf-build-1', label: 'yes', font: { align: 'middle' }, arrows: 'to' },
    { from: 'q2', to: 'leaf-buy-2', label: 'no, stable', font: { align: 'middle' }, arrows: 'to' },
    { from: 'q3', to: 'q4', label: 'yes', font: { align: 'middle' }, arrows: 'to' },
    { from: 'q3', to: 'leaf-build-2', label: 'no', font: { align: 'middle' }, arrows: 'to' },
    { from: 'q4', to: 'leaf-buy-1', label: 'yes', font: { align: 'middle' }, arrows: 'to' },
    { from: 'q4', to: 'leaf-saas-1', label: 'no', font: { align: 'middle' }, arrows: 'to' }
  ]);

  edges.forEach(e => edges.update({ id: e.id, color: { color: '#546E7A' }, width: 2, smooth: { type: 'cubicBezier', forceDirection: 'vertical', roundness: 0.4 } }));

  const network = new vis.Network(document.getElementById('network'), { nodes, edges }, {
    layout: { hierarchical: { direction: 'UD', sortMethod: 'directed', levelSeparation: 120, nodeSpacing: 180 } },
    physics: false,
    interaction: { hover: true, dragNodes: false, zoomView: true, dragView: true },
    nodes: { borderWidth: 2, shape: 'box', font: { face: 'Arial', size: 12 }, shadow: { enabled: true, size: 3, x: 1, y: 1 }, widthConstraint: { minimum: 110, maximum: 160 } }
  });

  const info = {
    'q1': { title: 'Strategic Differentiator?', body: 'Capabilities that win you customers — your *secret sauce* — deserve to be built. Commodities (payroll, email) do not.' },
    'q2': { title: 'Frequent Change?', body: 'High change rate favors Build (you can iterate fast). Low change rate may favor Buy (vendor maintains the slow drumbeat).' },
    'q3': { title: '80%+ Fit?', body: 'A mature SaaS rarely fits perfectly. The 80% rule: if you cannot get to 80% out-of-the-box, you will spend more on customization than on building from scratch.' },
    'q4': { title: 'Data Sovereignty / Regulation?', body: 'EU GDPR, US export controls, FedRAMP boundaries — these may force on-prem deployment instead of multi-tenant SaaS.' },
    'leaf-build-1': { title: 'Build', body: '<strong>Example:</strong> Netflix recommendation engine, Amazon ranking algorithm.<br/><strong>Failure mode:</strong> NIH syndrome — building commodities you should have bought.<br/><strong>5-yr cost:</strong> high upfront, flat afterward.' },
    'leaf-build-2': { title: 'Build', body: '<strong>Example:</strong> Specialized inventory math no vendor offers.<br/><strong>Failure mode:</strong> Underestimating ongoing maintenance.<br/><strong>5-yr cost:</strong> high upfront + maintenance.' },
    'leaf-buy-1': { title: 'Buy (on-prem)', body: '<strong>Example:</strong> SAP on-prem ERP for a regulated financial institution.<br/><strong>Failure mode:</strong> Customizing a packaged product into a bespoke system.<br/><strong>5-yr cost:</strong> license + support + customization.' },
    'leaf-buy-2': { title: 'Buy', body: '<strong>Example:</strong> Tax calculation engine, geocoder.<br/><strong>Failure mode:</strong> Vendor lock-in if APIs are proprietary.<br/><strong>5-yr cost:</strong> predictable license + support.' },
    'leaf-saas-1': { title: 'SaaS', body: '<strong>Example:</strong> Salesforce CRM, Workday HRIS.<br/><strong>Failure mode:</strong> Forgetting that subscription cost grows with seats and data.<br/><strong>5-yr cost:</strong> low upfront, linear ongoing.' }
  };

  const panelTitle = document.getElementById('panel-title');
  const panelBody = document.getElementById('panel-body');

  function showInfo(id) {
    if (!info[id]) {
      panelTitle.textContent = 'Click any node';
      panelBody.innerHTML = '<p style="color:#666;font-size:12px;">Click any node to see examples, common failure modes, and the typical 5-year cost shape.</p>';
      return;
    }
    panelTitle.textContent = info[id].title;
    panelBody.innerHTML = info[id].body;
  }
  showInfo(null);
  network.on('click', p => { if (p.nodes.length) showInfo(p.nodes[0]); else showInfo(null); });
});
