// Small Business ERD - vis-network
// Customer, Order, OrderLine, Product, Supplier with PK/FK and relationships
// CANVAS_HEIGHT: 720

document.addEventListener('DOMContentLoaded', function () {
  const ENT = '#43A047';
  const ENT_BORDER = '#1B5E20';
  const JOIN_BG = '#9CCC65';

  function entLabel(name, attrs) {
    const lines = [name + '\n────────────'];
    attrs.forEach(a => lines.push(a));
    return lines.join('\n');
  }

  const nodes = new vis.DataSet([
    { id: 'customer', label: entLabel('CUSTOMER', ['customer_id (PK)', 'email', 'first_name', 'last_name', 'created_at']),
      shape: 'box', x: -350, y: -150, color: { background: ENT, border: ENT_BORDER }, font: { color: 'white', face: 'monospace', size: 11, multi: true } },
    { id: 'order', label: entLabel('ORDER', ['order_id (PK)', 'customer_id (FK)', 'order_date', 'status', 'total']),
      shape: 'box', x: 0, y: -150, color: { background: ENT, border: ENT_BORDER }, font: { color: 'white', face: 'monospace', size: 11, multi: true } },
    { id: 'orderline', label: entLabel('ORDER_LINE', ['order_id (PK,FK)', 'product_id (PK,FK)', 'quantity', 'unit_price']),
      shape: 'box', x: 350, y: -150, color: { background: JOIN_BG, border: ENT_BORDER }, font: { color: '#212121', face: 'monospace', size: 11, multi: true } },
    { id: 'product', label: entLabel('PRODUCT', ['product_id (PK)', 'supplier_id (FK)', 'name', 'price', 'in_stock']),
      shape: 'box', x: 350, y: 150, color: { background: ENT, border: ENT_BORDER }, font: { color: 'white', face: 'monospace', size: 11, multi: true } },
    { id: 'supplier', label: entLabel('SUPPLIER', ['supplier_id (PK)', 'name', 'contact_email', 'country']),
      shape: 'box', x: 0, y: 150, color: { background: ENT, border: ENT_BORDER }, font: { color: 'white', face: 'monospace', size: 11, multi: true } }
  ]);

  // Crow's foot via labels (vis-network limited; we use text labels at endpoints)
  const edges = new vis.DataSet([
    { id: 'cust-order', from: 'customer', to: 'order', label: 'places\n1 ─ M', color: { color: '#26A69A' }, font: { size: 10 } },
    { id: 'order-line', from: 'order', to: 'orderline', label: 'has\n1 ─ M', color: { color: '#26A69A' }, font: { size: 10 } },
    { id: 'line-prod', from: 'orderline', to: 'product', label: 'refs\nM ─ 1', color: { color: '#26A69A' }, font: { size: 10 } },
    { id: 'sup-prod', from: 'supplier', to: 'product', label: 'supplies\n1 ─ M', color: { color: '#26A69A' }, font: { size: 10 } }
  ]);

  edges.forEach(e => edges.update({ id: e.id, smooth: { type: 'cubicBezier' }, width: 2 }));

  const network = new vis.Network(document.getElementById('network'), { nodes, edges }, {
    physics: false,
    interaction: { hover: true, dragNodes: false, zoomView: true, dragView: true },
    nodes: { borderWidth: 2, shadow: { enabled: true, size: 3 }, widthConstraint: { minimum: 160, maximum: 200 } }
  });

  const info = {
    customer: { desc: 'A person or company that has registered to buy.', attrs: 'customer_id is the surrogate primary key. email must be unique. created_at is the first signup time.', sample: '{42, "kim@example.com", "Kim", "Park", 2024-03-12}' },
    order: { desc: 'A single purchase event by a customer.', attrs: 'order_id PK; customer_id FK references CUSTOMER. status is an enum (pending|paid|shipped|cancelled).', sample: '{1009, 42, 2024-04-15, "shipped", $129.99}' },
    orderline: { desc: 'The many-to-many bridge between ORDER and PRODUCT. Stores the per-line quantity and locked-in unit_price.', attrs: 'Composite PK (order_id, product_id). Both columns are also FKs.', sample: '{1009, 77, 2, $14.99}' },
    product: { desc: 'A SKU sold by the business.', attrs: 'product_id PK; supplier_id FK; in_stock is a denormalized counter (faster reads, must update on every change).', sample: '{77, 5, "Iris-mug", $14.99, 230}' },
    supplier: { desc: 'A vendor that provides one or more products.', attrs: 'supplier_id PK; country tracked for cross-border tax/regulation.', sample: '{5, "MugCo", "sales@mugco.com", "USA"}' }
  };

  const edgeInfo = {
    'cust-order': 'Each Customer places zero or more Orders. Each Order is placed by exactly one Customer.',
    'order-line': 'Each Order has one or more Order Lines. Each Order Line belongs to exactly one Order.',
    'line-prod': 'Each Order Line references exactly one Product. Each Product can appear on many Order Lines.',
    'sup-prod': 'Each Supplier supplies zero or more Products. Each Product is supplied by exactly one Supplier.'
  };

  const panelTitle = document.getElementById('panel-title');
  const panelBody = document.getElementById('panel-body');
  function show(item, type) {
    if (type === 'node') {
      const i = info[item];
      panelTitle.textContent = item.toUpperCase();
      panelBody.innerHTML =
        '<p><strong>What it represents:</strong> ' + i.desc + '</p>' +
        '<p><strong>Attributes:</strong> ' + i.attrs + '</p>' +
        '<p><strong>Sample row:</strong> <code>' + i.sample + '</code></p>';
    } else if (type === 'edge') {
      panelTitle.textContent = 'Cardinality';
      panelBody.innerHTML = '<p>' + edgeInfo[item] + '</p>';
    }
  }
  panelTitle.textContent = 'Click any entity or relationship';
  panelBody.innerHTML = '<p style="color:#666;font-size:12px;">Click an entity for description and sample data, or click a relationship line for plain-English cardinality.</p>';

  network.on('click', p => {
    if (p.nodes.length) show(p.nodes[0], 'node');
    else if (p.edges.length) show(p.edges[0], 'edge');
  });

  let nfMode = false;
  document.getElementById('toggle-nf').addEventListener('click', function () {
    nfMode = !nfMode;
    if (nfMode) {
      panelTitle.textContent = 'Normal-Form Watch-Outs';
      panelBody.innerHTML =
        '<p><strong>1NF (atomic):</strong> Don\'t add a comma-separated <code>tags</code> column on PRODUCT. Use a TAG entity with PRODUCT_TAG join.</p>' +
        '<p><strong>2NF (no partial dependency):</strong> On ORDER_LINE, never add Product.name there — name depends on product_id alone, not the composite key.</p>' +
        '<p><strong>3NF (no transitive dependency):</strong> Don\'t add Supplier.country onto PRODUCT — country depends on supplier_id, not product_id.</p>';
      this.textContent = 'Hide Normal-Form Watch-Outs';
    } else {
      panelTitle.textContent = 'Click any entity or relationship';
      panelBody.innerHTML = '<p style="color:#666;font-size:12px;">Click an entity for description and sample data, or click a relationship line for plain-English cardinality.</p>';
      this.textContent = 'Show Normal-Form Watch-Outs';
    }
  });
});
