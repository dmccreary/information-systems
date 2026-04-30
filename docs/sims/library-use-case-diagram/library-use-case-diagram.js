// Library Use Case Diagram - vis-network
// UML use case diagram with actors, use cases, includes, and extends
// CANVAS_HEIGHT: 720

document.addEventListener('DOMContentLoaded', function () {
  const UC = '#43A047';
  const ACTOR = '#00695C';
  const AUTH = '#C2185B';

  const nodes = new vis.DataSet([
    // Actors
    { id: 'patron', label: 'Patron', shape: 'icon', icon: { face: "'FontAwesome'", code: '', size: 36, color: ACTOR }, x: -400, y: 0, font: { size: 12, vadjust: 30 } },
    { id: 'librarian', label: 'Librarian', shape: 'icon', icon: { face: "'FontAwesome'", code: '', size: 36, color: ACTOR }, x: 400, y: 0, font: { size: 12, vadjust: 30 } },
    { id: 'gateway', label: 'Payment\nGateway', shape: 'box', color: { background: '#37474F', border: '#000' }, font: { color: 'white', size: 11 }, x: 0, y: 280 },
    // Use cases
    { id: 'uc-search', label: 'Search\nCatalog', shape: 'ellipse', color: { background: UC, border: '#1B5E20' }, font: { color: 'white' }, x: -180, y: -150 },
    { id: 'uc-borrow', label: 'Borrow\nItem', shape: 'ellipse', color: { background: UC, border: '#1B5E20' }, font: { color: 'white' }, x: -60, y: -150 },
    { id: 'uc-return', label: 'Return\nItem', shape: 'ellipse', color: { background: UC, border: '#1B5E20' }, font: { color: 'white' }, x: 60, y: -150 },
    { id: 'uc-renew', label: 'Renew\nLoan', shape: 'ellipse', color: { background: UC, border: '#1B5E20' }, font: { color: 'white' }, x: 180, y: -150 },
    { id: 'uc-hold', label: 'Place\nHold', shape: 'ellipse', color: { background: UC, border: '#1B5E20' }, font: { color: 'white' }, x: -180, y: 0 },
    { id: 'uc-pay', label: 'Pay\nFine', shape: 'ellipse', color: { background: UC, border: '#1B5E20' }, font: { color: 'white' }, x: -60, y: 0 },
    { id: 'uc-waiver', label: 'Apply\nLate-Fee\nWaiver', shape: 'ellipse', color: { background: '#80DEEA', border: '#00838F' }, x: -60, y: 130 },
    { id: 'uc-manage', label: 'Manage\nCatalog', shape: 'ellipse', color: { background: UC, border: '#1B5E20' }, font: { color: 'white' }, x: 60, y: 0 },
    { id: 'uc-reports', label: 'Generate\nReports', shape: 'ellipse', color: { background: UC, border: '#1B5E20' }, font: { color: 'white' }, x: 180, y: 0 },
    { id: 'uc-auth', label: 'Authenticate\nUser', shape: 'ellipse', color: { background: AUTH, border: '#880E4F' }, font: { color: 'white' }, x: 0, y: 130 }
  ]);

  const baseEdges = [
    // Patron associations
    { from: 'patron', to: 'uc-search' },
    { from: 'patron', to: 'uc-borrow' },
    { from: 'patron', to: 'uc-return' },
    { from: 'patron', to: 'uc-renew' },
    { from: 'patron', to: 'uc-hold' },
    { from: 'patron', to: 'uc-pay' },
    // Librarian associations
    { from: 'librarian', to: 'uc-manage' },
    { from: 'librarian', to: 'uc-reports' },
    { from: 'librarian', to: 'uc-borrow' },
    { from: 'librarian', to: 'uc-return' },
    // Gateway
    { from: 'gateway', to: 'uc-pay' }
  ];

  const includeEdges = [
    { id: 'inc-borrow', from: 'uc-borrow', to: 'uc-auth', label: '«include»', dashes: true, color: { color: '#FF7043' }, arrows: 'to', font: { size: 9, color: '#BF360C' } },
    { id: 'inc-hold', from: 'uc-hold', to: 'uc-auth', label: '«include»', dashes: true, color: { color: '#FF7043' }, arrows: 'to', font: { size: 9, color: '#BF360C' } },
    { id: 'inc-pay', from: 'uc-pay', to: 'uc-auth', label: '«include»', dashes: true, color: { color: '#FF7043' }, arrows: 'to', font: { size: 9, color: '#BF360C' } },
    { id: 'ext-waiver', from: 'uc-waiver', to: 'uc-pay', label: '«extend»', dashes: true, color: { color: '#7B1FA2' }, arrows: 'to', font: { size: 9, color: '#4A148C' } }
  ];

  const edges = new vis.DataSet(baseEdges.map(e => ({ ...e, color: { color: '#546E7A' }, smooth: { enabled: false } })));

  const network = new vis.Network(document.getElementById('network'), { nodes, edges }, {
    physics: false,
    interaction: { hover: true, dragNodes: false, zoomView: true, dragView: true },
    nodes: { borderWidth: 2, font: { size: 10, face: 'Arial' } }
  });

  // Use case template info
  const ucTemplates = {
    'uc-search': { pre: 'Patron has internet access.', main: '1. Patron enters search terms.\n2. System returns matching items with availability.\n3. Patron browses results.', alt: 'No results: system suggests alternative terms.', post: 'Patron has identified items of interest.' },
    'uc-borrow': { pre: 'Patron is authenticated; item is on shelf.', main: '1. Patron presents item.\n2. System checks out item to patron.\n3. Due date assigned (3 weeks).', alt: 'Patron has overdue item: prompt fine payment.', post: 'Item linked to patron; loan record created.' },
    'uc-return': { pre: 'Patron has borrowed item.', main: '1. Patron returns item.\n2. System updates inventory and clears loan.', alt: 'Item is overdue: assess late fee.', post: 'Item back on shelf; loan closed.' },
    'uc-renew': { pre: 'Patron has active loan; no holds.', main: '1. Patron requests renewal.\n2. System extends due date by 3 weeks.', alt: 'Hold by another patron: renewal denied.', post: 'Due date extended.' },
    'uc-hold': { pre: 'Patron is authenticated; item exists but is checked out.', main: '1. Patron requests hold.\n2. System notifies patron when item returns.', alt: 'Already on hold for this item: deny.', post: 'Hold record created.' },
    'uc-pay': { pre: 'Patron is authenticated; outstanding fine exists.', main: '1. Patron initiates payment.\n2. Payment gateway charges card.\n3. System clears fine.', alt: 'Card declined: notify patron.', post: 'Fine cleared; receipt issued.' },
    'uc-waiver': { pre: 'Patron is paying a fine; meets waiver criteria (one-time, low-amount).', main: 'Extends Pay Fine: waiver applied; charged amount = 0.', alt: '—', post: 'Fine cleared without payment.' },
    'uc-manage': { pre: 'Librarian is authenticated.', main: '1. Librarian adds/edits/removes catalog records.', alt: 'Concurrent edit: optimistic lock conflict.', post: 'Catalog updated; audit entry written.' },
    'uc-reports': { pre: 'Librarian is authenticated.', main: '1. Librarian selects report.\n2. System generates and displays.', alt: 'Large dataset: generate offline.', post: 'Report available for download.' },
    'uc-auth': { pre: 'User has credentials.', main: '1. User submits credentials.\n2. System verifies and issues session.', alt: '3 failed attempts: lock account 15 min.', post: 'Authenticated session established.' }
  };

  const panelTitle = document.getElementById('panel-title');
  const panelBody = document.getElementById('panel-body');
  function showInfo(id) {
    if (id === 'patron' || id === 'librarian' || id === 'gateway') {
      const node = nodes.get(id);
      panelTitle.textContent = 'Actor: ' + node.label.replace('\n', ' ');
      panelBody.innerHTML = '<p>Highlighted in blue are the use cases this actor participates in.</p>';
      highlightActor(id);
      return;
    }
    const t = ucTemplates[id];
    if (!t) {
      panelTitle.textContent = 'Click any element';
      panelBody.innerHTML = '<p style="color:#666;font-size:12px;">Click any use case for the use-case template; click an actor to see its associations.</p>';
      resetEdges();
      return;
    }
    panelTitle.textContent = nodes.get(id).label.replace(/\n/g, ' ');
    panelBody.innerHTML =
      '<p><strong>Preconditions:</strong> ' + t.pre + '</p>' +
      '<p><strong>Main success:</strong><br/>' + t.main.replace(/\n/g, '<br/>') + '</p>' +
      '<p><strong>Alternative:</strong> ' + t.alt + '</p>' +
      '<p><strong>Postconditions:</strong> ' + t.post + '</p>';
    resetEdges();
  }

  function resetEdges() {
    baseEdges.forEach((e, i) => {
      const eid = edges.get().find(x => x.from === e.from && x.to === e.to);
      if (eid) edges.update({ id: eid.id, color: { color: '#546E7A' }, width: 1 });
    });
  }
  function highlightActor(actorId) {
    resetEdges();
    edges.get().forEach(e => {
      if (e.from === actorId || e.to === actorId) edges.update({ id: e.id, color: { color: '#1976D2' }, width: 3 });
    });
  }

  showInfo(null);
  network.on('click', p => { if (p.nodes.length) showInfo(p.nodes[0]); else showInfo(null); });

  let inclVisible = false;
  document.getElementById('toggle-includes').addEventListener('click', function () {
    inclVisible = !inclVisible;
    if (inclVisible) {
      includeEdges.forEach(e => edges.add(e));
      this.textContent = 'Hide «include»/«extend»';
    } else {
      includeEdges.forEach(e => edges.remove(e.id));
      this.textContent = 'Show «include»/«extend»';
    }
  });
});
