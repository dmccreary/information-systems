// BPMN Order-to-Cash Process - vis-network
// Three-lane diagram (Sales, Credit, Fulfillment) with gateways and message flows
// CANVAS_HEIGHT: 720

document.addEventListener('DOMContentLoaded', function () {
  // Coordinates: lanes at y=-150 (Sales), 0 (Credit), 150 (Fulfillment), 320 (Customer pool)
  const SALES = -150, CREDIT = 0, FULFILL = 150, CUST = 320;
  const COL = 130;

  // BPMN elements with their type, definition, and example
  const bpmnInfo = {
    'start': { type: 'Start Event', def: 'Triggers the start of the process.', ex: 'Customer order arrives in the system.' },
    'end': { type: 'End Event', def: 'Marks the completion of the process.', ex: 'Order has been shipped to the customer.' },
    'validate': { type: 'Task', def: 'A discrete unit of work performed by a participant.', ex: 'Sales rep verifies SKU, quantity, address.' },
    'gw-credit': { type: 'Exclusive Gateway (XOR)', def: 'Routes to exactly one outgoing path based on a condition.', ex: 'Order > $10,000? Yes/No.' },
    'review': { type: 'Task', def: 'Manual approval task.', ex: 'Credit manager reviews and approves the line of credit.' },
    'auto': { type: 'Task (Service)', def: 'Automated task executed by a system.', ex: 'Auto-approve credit via the rules engine.' },
    'gw-merge': { type: 'Exclusive Gateway (Merge)', def: 'Joins paths back together; first arriving token continues.', ex: 'Reunites the two credit paths.' },
    'gw-split': { type: 'Parallel Gateway (AND-split)', def: 'Triggers all outgoing paths simultaneously.', ex: 'Pick-and-pack and invoice both must happen.' },
    'pick': { type: 'Task', def: 'Physical fulfillment task.', ex: 'Warehouse picks items and packs the carton.' },
    'invoice': { type: 'Task', def: 'Document-generation task.', ex: 'Generate invoice PDF and email to customer.' },
    'gw-join': { type: 'Parallel Gateway (AND-join)', def: 'Waits for all incoming paths before continuing.', ex: 'Cannot ship until both pick and invoice are done.' },
    'ship': { type: 'Task', def: 'Final fulfillment task.', ex: 'Carrier picks up shipment.' },
    'cust': { type: 'Pool (Black-Box)', def: 'External participant whose internal process is hidden.', ex: 'The customer organization.' }
  };

  const nodes = new vis.DataSet([
    // Sales lane
    { id: 'start', label: 'Order\nreceived', x: -COL * 3, y: SALES, shape: 'circle', size: 22, color: { background: '#F8BBD0', border: '#C2185B' } },
    { id: 'validate', label: 'Validate\norder', x: -COL * 2, y: SALES, shape: 'box', color: { background: '#4DB6AC', border: '#00695C' }, font: { color: 'white' } },
    { id: 'gw-credit', label: 'X\n>$10k?', x: -COL, y: SALES, shape: 'diamond', size: 28, color: { background: '#FFD54F', border: '#F57F17' } },
    // Credit lane
    { id: 'review', label: 'Manager\ncredit review', x: 0, y: CREDIT - 50, shape: 'box', color: { background: '#4DB6AC', border: '#00695C' }, font: { color: 'white' } },
    { id: 'auto', label: 'Auto-approve\ncredit', x: 0, y: CREDIT + 50, shape: 'box', color: { background: '#4DB6AC', border: '#00695C' }, font: { color: 'white' } },
    { id: 'gw-merge', label: 'X', x: COL, y: CREDIT, shape: 'diamond', size: 24, color: { background: '#FFD54F', border: '#F57F17' } },
    // Fulfillment lane
    { id: 'gw-split', label: '+', x: COL * 2, y: FULFILL, shape: 'diamond', size: 24, color: { background: '#FF8A65', border: '#D84315' } },
    { id: 'pick', label: 'Pick &\npack', x: COL * 3, y: FULFILL - 50, shape: 'box', color: { background: '#4DB6AC', border: '#00695C' }, font: { color: 'white' } },
    { id: 'invoice', label: 'Generate\ninvoice', x: COL * 3, y: FULFILL + 50, shape: 'box', color: { background: '#4DB6AC', border: '#00695C' }, font: { color: 'white' } },
    { id: 'gw-join', label: '+', x: COL * 4, y: FULFILL, shape: 'diamond', size: 24, color: { background: '#FF8A65', border: '#D84315' } },
    { id: 'ship', label: 'Ship\norder', x: COL * 5, y: FULFILL, shape: 'box', color: { background: '#4DB6AC', border: '#00695C' }, font: { color: 'white' } },
    { id: 'end', label: 'Order\nshipped', x: COL * 6, y: FULFILL, shape: 'circle', size: 22, color: { background: '#F8BBD0', border: '#C2185B' }, borderWidth: 4 },
    // Customer pool
    { id: 'cust', label: 'Customer', x: 0, y: CUST, shape: 'box', color: { background: '#ECEFF1', border: '#546E7A' }, widthConstraint: 250 }
  ]);

  const edges = new vis.DataSet([
    // Sequence flows
    { from: 'start', to: 'validate', arrows: 'to' },
    { from: 'validate', to: 'gw-credit', arrows: 'to' },
    { from: 'gw-credit', to: 'review', label: 'yes', arrows: 'to', font: { align: 'top', size: 10 } },
    { from: 'gw-credit', to: 'auto', label: 'no', arrows: 'to', font: { align: 'top', size: 10 } },
    { from: 'review', to: 'gw-merge', arrows: 'to' },
    { from: 'auto', to: 'gw-merge', arrows: 'to' },
    { from: 'gw-merge', to: 'gw-split', arrows: 'to' },
    { from: 'gw-split', to: 'pick', arrows: 'to' },
    { from: 'gw-split', to: 'invoice', arrows: 'to' },
    { from: 'pick', to: 'gw-join', arrows: 'to' },
    { from: 'invoice', to: 'gw-join', arrows: 'to' },
    { from: 'gw-join', to: 'ship', arrows: 'to' },
    { from: 'ship', to: 'end', arrows: 'to' },
    // Message flows (dashed)
    { from: 'cust', to: 'start', dashes: true, arrows: 'to', label: 'places order', color: { color: '#777' }, font: { size: 10 } },
    { from: 'end', to: 'cust', dashes: true, arrows: 'to', label: 'delivery confirmation', color: { color: '#777' }, font: { size: 10 } }
  ]);

  // Add common styling to all sequence-flow edges
  edges.forEach(e => {
    if (!e.dashes) {
      edges.update({ id: e.id, color: { color: '#26A69A' }, smooth: { type: 'cubicBezier', forceDirection: 'horizontal', roundness: 0.2 }, width: 2 });
    }
  });

  const container = document.getElementById('network');
  const network = new vis.Network(container, { nodes, edges }, {
    physics: false,
    interaction: { hover: true, dragNodes: false, zoomView: true, dragView: true },
    nodes: { borderWidth: 2, font: { face: 'Arial', size: 11 }, shadow: { enabled: true, size: 3, x: 1, y: 1 } }
  });

  const panelTitle = document.getElementById('panel-title');
  const panelBody = document.getElementById('panel-body');

  function showInfo(id) {
    const info = bpmnInfo[id];
    if (!info) {
      panelTitle.textContent = 'Click any element';
      panelBody.innerHTML = '<p style="color:#666;font-size:12px;">Click any node to see its BPMN element type, formal definition, and a real-world example.</p>';
      return;
    }
    panelTitle.textContent = info.type;
    panelBody.innerHTML =
      '<p><strong>Definition:</strong> ' + info.def + '</p>' +
      '<p><strong>Example:</strong> ' + info.ex + '</p>';
  }

  showInfo(null);

  network.on('click', params => {
    if (params.nodes.length) showInfo(params.nodes[0]);
    else showInfo(null);
  });

  // Trace token animation
  let tracing = false;
  document.getElementById('trace-large').addEventListener('click', () => trace(['start', 'validate', 'gw-credit', 'review', 'gw-merge', 'gw-split', 'pick', 'gw-join', 'ship', 'end']));
  document.getElementById('trace-small').addEventListener('click', () => trace(['start', 'validate', 'gw-credit', 'auto', 'gw-merge', 'gw-split', 'invoice', 'gw-join', 'ship', 'end']));

  async function trace(path) {
    if (tracing) return;
    tracing = true;
    network.unselectAll();
    for (const id of path) {
      network.selectNodes([id]);
      showInfo(id);
      await new Promise(r => setTimeout(r, 750));
    }
    tracing = false;
    network.unselectAll();
  }

  // Highlight handoffs (lane crossings)
  document.getElementById('highlight-handoffs').addEventListener('click', function () {
    const isOn = this.classList.toggle('active');
    const handoffs = [
      ['gw-credit', 'review'], ['gw-credit', 'auto'],   // Sales -> Credit
      ['gw-merge', 'gw-split'],                         // Credit -> Fulfillment
    ];
    edges.forEach(e => {
      const isHandoff = handoffs.some(h => (h[0] === e.from && h[1] === e.to) || (h[0] === e.to && h[1] === e.from));
      if (isHandoff) {
        edges.update({ id: e.id, color: { color: isOn ? '#C2185B' : '#26A69A' }, width: isOn ? 4 : 2 });
      }
    });
    this.textContent = isOn ? 'Hide Lane Handoffs' : 'Highlight Lane Handoffs';
  });
});
