// API Gateway Request Flow - vis-network
// Client -> API Gateway -> {Orders, Inventory, Customer} services with databases
// CANVAS_HEIGHT: 720

document.addEventListener('DOMContentLoaded', function () {
  const nodeData = {
    client: { id: 'client', label: 'Client\n(Mobile / Browser)', shape: 'box', color: { background: '#90CAF9', border: '#1976D2' }, x: -400, y: 0 },
    gateway: { id: 'gateway', label: 'API Gateway', shape: 'box', color: { background: '#4DB6AC', border: '#00695C' }, font: { color: 'white', size: 16, bold: true }, x: -100, y: 0 },
    orders: { id: 'orders', label: 'Orders\nService', shape: 'box', color: { background: '#AED581', border: '#558B2F' }, x: 250, y: -120 },
    inventory: { id: 'inventory', label: 'Inventory\nService', shape: 'box', color: { background: '#FFD54F', border: '#F57F17' }, x: 250, y: 0 },
    customer: { id: 'customer', label: 'Customer\nService', shape: 'box', color: { background: '#FF8A65', border: '#D84315' }, x: 250, y: 120 },
    'db-orders': { id: 'db-orders', label: 'orders_db', shape: 'database', color: { background: '#CFD8DC', border: '#455A64' }, x: 450, y: -120 },
    'db-inventory': { id: 'db-inventory', label: 'inventory_db', shape: 'database', color: { background: '#CFD8DC', border: '#455A64' }, x: 450, y: 0 },
    'db-customer': { id: 'db-customer', label: 'customer_db', shape: 'database', color: { background: '#CFD8DC', border: '#455A64' }, x: 450, y: 120 }
  };

  const baseEdges = [
    { from: 'client', to: 'gateway', label: 'request' },
    { from: 'gateway', to: 'orders', label: '/orders/*' },
    { from: 'gateway', to: 'inventory', label: '/inventory/*' },
    { from: 'gateway', to: 'customer', label: '/customers/*' },
    { from: 'orders', to: 'db-orders' },
    { from: 'inventory', to: 'db-inventory' },
    { from: 'customer', to: 'db-customer' }
  ];

  const nodes = new vis.DataSet(Object.values(nodeData));
  const edges = new vis.DataSet(baseEdges.map(e => ({
    ...e,
    arrows: 'to',
    color: { color: '#546E7A' },
    smooth: { type: 'cubicBezier', forceDirection: 'horizontal', roundness: 0.2 },
    font: { align: 'top', size: 11, color: '#37474F', strokeWidth: 0 }
  })));

  const container = document.getElementById('network');
  const data = { nodes: nodes, edges: edges };
  const options = {
    physics: false,
    interaction: { hover: true, dragNodes: false, zoomView: false },
    nodes: {
      borderWidth: 2,
      shadow: { enabled: true, size: 4, x: 1, y: 1 },
      font: { size: 13, face: 'Arial' }
    },
    edges: { width: 2 }
  };
  const network = new vis.Network(container, data, options);

  // Side panel updates
  const panelTitle = document.getElementById('panel-title');
  const panelBody = document.getElementById('panel-body');

  const concerns = {
    request: [
      { name: 'Authenticate', detail: 'Verify the JWT or API key on the request' },
      { name: 'Rate Limit', detail: 'Apply per-client throttling (e.g., 100 req/sec)' },
      { name: 'Route', detail: 'Match path prefix to backend service' },
      { name: 'Log', detail: 'Emit audit log with request id, user, latency' }
    ],
    response: [
      { name: 'Cache', detail: 'Cache idempotent responses for short TTL' },
      { name: 'Transform', detail: 'Strip internal headers, mask PII fields' },
      { name: 'Log', detail: 'Emit response metrics: status, bytes, time' }
    ]
  };

  function renderPanel(title, items) {
    panelTitle.textContent = title;
    panelBody.innerHTML = items.map((c, i) =>
      '<div class="concern"><span class="step-num">' + (i + 1) + '</span>' +
      '<div><strong>' + c.name + '</strong><br/><span class="detail">' + c.detail + '</span></div></div>'
    ).join('');
  }

  renderPanel('Click a node or trace a request to see what happens.', []);

  network.on('click', function (params) {
    if (params.nodes.length === 0) return;
    const id = params.nodes[0];
    if (id === 'gateway') {
      renderPanel('API Gateway: Cross-Cutting Concerns (request)', concerns.request);
    } else if (id === 'client') {
      renderPanel('Client', [
        { name: 'Send signed request', detail: 'Includes auth header, request id, body' },
        { name: 'Wait for response', detail: 'Subject to gateway rate-limit and timeout' }
      ]);
    } else if (id.startsWith('db-')) {
      renderPanel('Database: ' + id.replace('db-', ''), [
        { name: 'Owned by service', detail: 'Each microservice has its own data store — no shared schema' }
      ]);
    } else {
      renderPanel(id.charAt(0).toUpperCase() + id.slice(1) + ' Service', [
        { name: 'Receive routed call', detail: 'Trusts gateway-validated auth context' },
        { name: 'Apply business logic', detail: 'No need to reimplement auth, rate limit, or logging' },
        { name: 'Persist via owned DB', detail: 'Reads/writes only its own database' }
      ]);
    }
  });

  // Trace request animation
  const targetSelect = document.getElementById('target-service');
  const traceBtn = document.getElementById('trace-btn');
  let animating = false;

  traceBtn.addEventListener('click', async function () {
    if (animating) return;
    animating = true;
    traceBtn.disabled = true;
    const target = targetSelect.value;
    const path = ['client', 'gateway', target, 'db-' + target];

    // Highlight request path
    for (let i = 0; i < path.length - 1; i++) {
      highlightEdge(path[i], path[i + 1], '#1976D2', 4);
      flashNode(path[i + 1], '#FFEB3B');
      if (path[i + 1] === 'gateway') {
        renderPanel('Gateway processing request', concerns.request);
      }
      await sleep(700);
    }
    renderPanel(target.charAt(0).toUpperCase() + target.slice(1) + ' Service: handling request', [
      { name: 'Read from ' + target + '_db', detail: 'Service-owned data access' }
    ]);
    await sleep(700);
    // Response path
    for (let i = path.length - 1; i > 0; i--) {
      highlightEdge(path[i - 1], path[i], '#00897B', 4);
      flashNode(path[i - 1], '#C8E6C9');
      if (path[i - 1] === 'gateway') {
        renderPanel('Gateway processing response', concerns.response);
      }
      await sleep(700);
    }
    await sleep(500);
    resetEdges();
    animating = false;
    traceBtn.disabled = false;
  });

  function highlightEdge(from, to, color, width) {
    const eid = edges.get().find(e => (e.from === from && e.to === to) || (e.from === to && e.to === from));
    if (eid) edges.update({ id: eid.id, color: { color: color }, width: width });
  }

  function flashNode(id, color) {
    const original = nodeData[id];
    nodes.update({ id: id, color: { background: color, border: original.color.border } });
    setTimeout(() => nodes.update({ id: id, color: original.color }), 600);
  }

  function resetEdges() {
    baseEdges.forEach(e => {
      const eid = edges.get().find(x => x.from === e.from && x.to === e.to);
      if (eid) edges.update({ id: eid.id, color: { color: '#546E7A' }, width: 2 });
    });
  }

  function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

  // Toggle "no gateway" view
  document.getElementById('no-gateway').addEventListener('click', function () {
    const isOn = this.classList.toggle('active');
    if (isOn) {
      this.textContent = 'Show With Gateway';
      // Add direct client-to-each-backend edges and hide gateway routes
      edges.add([
        { id: 'no-gw-orders', from: 'client', to: 'orders', dashes: true, color: { color: '#C2185B' }, label: 'auth + rate + log' },
        { id: 'no-gw-inv', from: 'client', to: 'inventory', dashes: true, color: { color: '#C2185B' }, label: 'auth + rate + log' },
        { id: 'no-gw-cust', from: 'client', to: 'customer', dashes: true, color: { color: '#C2185B' }, label: 'auth + rate + log' }
      ]);
      renderPanel('Without a Gateway', [
        { name: 'Clutter is the point', detail: 'Each backend now must reimplement auth, rate-limit, and logging.' },
        { name: 'Inconsistency risk', detail: 'Three services, three slightly-different auth bugs.' },
        { name: 'Operational overhead', detail: 'Three places to update a security policy.' }
      ]);
    } else {
      this.textContent = 'Show Without Gateway';
      ['no-gw-orders', 'no-gw-inv', 'no-gw-cust'].forEach(id => edges.remove(id));
      renderPanel('Click a node or trace a request to see what happens.', []);
    }
  });
});
