// Enterprise Systems Landscape - vis-network
// ERP hub with satellite systems (CRM, SCM, HRIS, Payroll, Procurement, BI)
// CANVAS_HEIGHT: 720

document.addEventListener('DOMContentLoaded', function () {
  const ERP_COLOR = '#43A047';
  const SAT_BLUE = '#42A5F5';
  const SAT_CORAL = '#FF8A65';

  const nodes = new vis.DataSet([
    { id: 'erp', label: 'ERP\nSystem of Record', shape: 'circle', size: 50, color: { background: ERP_COLOR, border: '#1B5E20' }, font: { color: 'white', size: 14, bold: true }, x: 0, y: 0 },
    { id: 'crm', label: 'CRM\n(Sales/Mktg/Svc)', shape: 'box', color: { background: SAT_BLUE, border: '#0D47A1' }, font: { color: 'white' }, x: -300, y: -200 },
    { id: 'scm', label: 'SCM\n(Plan/Logistics)', shape: 'box', color: { background: SAT_CORAL, border: '#BF360C' }, font: { color: 'white' }, x: 300, y: -200 },
    { id: 'hris', label: 'HRIS\n(Core HR/Talent)', shape: 'box', color: { background: SAT_BLUE, border: '#0D47A1' }, font: { color: 'white' }, x: -300, y: 200 },
    { id: 'payroll', label: 'Payroll', shape: 'box', color: { background: SAT_CORAL, border: '#BF360C' }, font: { color: 'white' }, x: 0, y: 280 },
    { id: 'procure', label: 'Procurement\n(S2P)', shape: 'box', color: { background: SAT_BLUE, border: '#0D47A1' }, font: { color: 'white' }, x: 300, y: 200 },
    { id: 'bi', label: 'BI / Reporting', shape: 'box', color: { background: SAT_CORAL, border: '#BF360C' }, font: { color: 'white' }, x: 0, y: -300 }
  ]);

  // Edge styles
  const REAL = { color: '#26A69A', label: 'real-time API' };
  const BATCH = { color: '#FFA000', label: 'nightly batch' };
  const EVENT = { color: '#90A4AE', label: 'event stream', dashes: true };

  const erpEdges = [
    { id: 'erp-crm', from: 'erp', to: 'crm', label: 'master-data\n(real-time)', color: { color: REAL.color }, width: 3 },
    { id: 'erp-scm', from: 'erp', to: 'scm', label: 'orders/inventory\n(real-time)', color: { color: REAL.color }, width: 3 },
    { id: 'erp-hris', from: 'erp', to: 'hris', label: 'employees\n(nightly)', color: { color: BATCH.color }, width: 2 },
    { id: 'erp-payroll', from: 'erp', to: 'payroll', label: 'GL postings\n(batch)', color: { color: BATCH.color }, width: 2 },
    { id: 'erp-procure', from: 'erp', to: 'procure', label: 'POs / receipts\n(real-time)', color: { color: REAL.color }, width: 3 },
    { id: 'erp-bi', from: 'erp', to: 'bi', label: 'events\n(stream)', color: { color: EVENT.color }, dashes: true, width: 2 }
  ];

  // Best-of-breed extra integration edges
  const bobEdges = [
    { id: 'crm-procure', from: 'crm', to: 'procure', label: 'referral\n(custom)', color: { color: '#C2185B' }, dashes: true },
    { id: 'hris-payroll', from: 'hris', to: 'payroll', label: 'comp & deductions', color: { color: '#C2185B' }, dashes: true },
    { id: 'scm-procure', from: 'scm', to: 'procure', label: 'replenishment', color: { color: '#C2185B' }, dashes: true },
    { id: 'crm-bi', from: 'crm', to: 'bi', label: 'pipeline data', color: { color: '#C2185B' }, dashes: true },
    { id: 'scm-bi', from: 'scm', to: 'bi', label: 'fulfillment KPIs', color: { color: '#C2185B' }, dashes: true },
    { id: 'hris-bi', from: 'hris', to: 'bi', label: 'workforce KPIs', color: { color: '#C2185B' }, dashes: true }
  ];

  const edges = new vis.DataSet(erpEdges.map(e => ({ ...e, smooth: { type: 'cubicBezier' }, font: { size: 10, align: 'top' } })));

  const network = new vis.Network(document.getElementById('network'), { nodes, edges }, {
    physics: false,
    interaction: { hover: true, dragNodes: false, zoomView: true, dragView: true },
    nodes: { borderWidth: 2, font: { size: 11, face: 'Arial' }, shadow: { enabled: true, size: 3 } }
  });

  const info = {
    erp: { cat: 'System of record (financial truth)', vendors: 'SAP S/4HANA, Oracle Fusion, Microsoft D365 F&O, NetSuite', integ: 'Hub for master data, GL postings, and order data' },
    crm: { cat: 'Customer Relationship Management', vendors: 'Salesforce, Microsoft Dynamics 365 Sales, HubSpot', integ: 'Real-time customer master sync; orders flow into ERP' },
    scm: { cat: 'Supply Chain Management', vendors: 'SAP IBP, Oracle SCM Cloud, Blue Yonder, Manhattan', integ: 'Real-time inventory, planning, and warehouse data' },
    hris: { cat: 'Human Resources Information System', vendors: 'Workday, SAP SuccessFactors, Oracle HCM Cloud, BambooHR', integ: 'Employee master flows to ERP nightly' },
    payroll: { cat: 'Payroll system', vendors: 'ADP, Paychex, Workday Payroll', integ: 'Receives time/comp from HRIS, posts GL entries to ERP' },
    procure: { cat: 'Source-to-Pay (S2P)', vendors: 'Coupa, SAP Ariba, Ivalua', integ: 'POs, receipts, invoices flow to/from ERP in real-time' },
    bi: { cat: 'BI / Reporting', vendors: 'Power BI, Tableau, Looker, Qlik', integ: 'Reads event streams + nightly extracts from all systems' }
  };

  const panelTitle = document.getElementById('panel-title');
  const panelBody = document.getElementById('panel-body');
  function showInfo(id) {
    const i = info[id];
    if (!i) {
      panelTitle.textContent = 'Click any system';
      panelBody.innerHTML = '<p style="color:#666;font-size:12px;">Click any node to see its category, representative vendors, and typical integration pattern.</p>';
      return;
    }
    panelTitle.textContent = nodes.get(id).label.replace('\n', ' ');
    panelBody.innerHTML =
      '<p><strong>Category:</strong> ' + i.cat + '</p>' +
      '<p><strong>Vendors:</strong> ' + i.vendors + '</p>' +
      '<p><strong>Integration:</strong> ' + i.integ + '</p>';
  }
  showInfo(null);
  network.on('click', p => { if (p.nodes.length) showInfo(p.nodes[0]); else showInfo(null); });

  let bobMode = false;
  document.getElementById('bob-toggle').addEventListener('click', function () {
    bobMode = !bobMode;
    if (bobMode) {
      bobEdges.forEach(e => edges.add({ ...e, smooth: { type: 'curvedCW', roundness: 0.2 }, font: { size: 9, align: 'top' } }));
      this.textContent = 'Hide Best-of-Breed Edges';
      this.classList.add('active');
      panelTitle.textContent = 'Best-of-Breed Strategy';
      panelBody.innerHTML = '<p>Each function is a separate best-in-class vendor product.</p><p>Notice the magenta dashed lines — every pair of systems that needs to talk now requires a custom integration.</p><p>Integration burden grows roughly O(n²): with 7 systems you can have up to 21 integration paths.</p>';
    } else {
      bobEdges.forEach(e => edges.remove(e.id));
      this.textContent = 'Show Best-of-Breed Edges';
      this.classList.remove('active');
      showInfo(null);
    }
  });

  let mdMode = false;
  document.getElementById('md-toggle').addEventListener('click', function () {
    mdMode = !mdMode;
    erpEdges.forEach(e => edges.update({ id: e.id, width: mdMode ? 5 : (e.label.includes('real-time') ? 3 : 2), color: { color: mdMode ? '#1A237E' : (e.color.color) } }));
    this.textContent = mdMode ? 'Hide Master Data Flow' : 'Show Master Data Flow';
    this.classList.toggle('active', mdMode);
    if (mdMode) {
      panelTitle.textContent = 'Master Data Flow';
      panelBody.innerHTML = '<p>The big four master records (customer, vendor, item, employee) flow outward from ERP to every satellite.</p><p>If two systems disagree about who a customer is, you have a master-data problem — not an integration problem.</p>';
    }
  });
});
