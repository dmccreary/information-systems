// Normalization Journey 1NF -> 3NF - p5.js step-through
// Show denormalized -> 1NF -> 2NF -> 3NF
// CANVAS_HEIGHT: 720

let canvasWidth = 720;
let drawHeight = 660;
let controlHeight = 60;
let canvasHeight = drawHeight + controlHeight;

let step = 0;
let nextBtn, prevBtn, updateBtn;

const stepInfo = [
  { name: 'Denormalized (0NF)', violation: 'Multivalued column "product_list"; mixes products and salesperson info.', anomaly: 'Renaming a product means updating dozens of rows; deleting an order can lose product data.', fix: '—' },
  { name: '1NF', violation: 'product_list violates atomicity (multivalued).', anomaly: 'You cannot index or join on a column that contains "Mug, Hat, Shirt" as one string.', fix: 'Split into OrderLine table — one product per row.' },
  { name: '2NF', violation: 'product_name depends only on product_id, not on the (order_id, product_id) key.', anomaly: 'Same product appears with three slightly different names across orders.', fix: 'Extract Product table (product_id, name, price).' },
  { name: '3NF', violation: 'salesperson_region depends transitively on salesperson, not directly on order.', anomaly: 'Move a salesperson to a new region: update many rows; risk of inconsistency.', fix: 'Extract Salesperson table (salesperson_id, region).' }
];

function setup() {
  updateCanvasSize();
  const c = createCanvas(canvasWidth, canvasHeight);
  c.parent(document.querySelector('main'));

  prevBtn = createButton('◀ Previous');
  prevBtn.position(20, drawHeight + 12);
  prevBtn.parent(document.querySelector('main'));
  prevBtn.mousePressed(() => { step = max(0, step - 1); });
  styleBtn(prevBtn, '#90A4AE');

  nextBtn = createButton('Next ▶');
  nextBtn.position(150, drawHeight + 12);
  nextBtn.parent(document.querySelector('main'));
  nextBtn.mousePressed(() => { step = min(stepInfo.length - 1, step + 1); });
  styleBtn(nextBtn, '#1a3a6c');

  updateBtn = createButton('Show Update Anomaly Cost');
  updateBtn.position(280, drawHeight + 12);
  updateBtn.parent(document.querySelector('main'));
  updateBtn.mousePressed(() => { showUpdate = !showUpdate; });
  styleBtn(updateBtn, '#FF7043');

  describe('Step-through normalization journey from denormalized to 3NF.', LABEL);
}
function styleBtn(b, bg) { b.style('background-color', bg); b.style('color', 'white'); b.style('border', 'none'); b.style('padding', '6px 10px'); b.style('border-radius', '4px'); b.style('cursor', 'pointer'); b.style('font-size', '11px'); }

let showUpdate = false;

function draw() {
  updateCanvasSize();
  background('#fafbfc');

  noStroke(); fill('#1a3a6c');
  textSize(15); textStyle(BOLD); textAlign(CENTER, TOP);
  text('Normalization Journey: ' + stepInfo[step].name, canvasWidth / 2, 12);
  textStyle(NORMAL);
  textSize(11); fill('#555');
  text('Step ' + (step + 1) + ' of ' + stepInfo.length, canvasWidth / 2, 32);

  // Schema rendering
  drawSchema(20, 60, canvasWidth - 40, 200, step);

  // Side panel
  const sp = stepInfo[step];
  fill('#fff5e6'); stroke('#FFA000'); strokeWeight(2);
  rect(20, 280, canvasWidth - 40, 120, 6);
  fill('#1a3a6c'); noStroke(); textSize(11); textStyle(BOLD); textAlign(LEFT, TOP);
  text('Rule violated:', 35, 290);
  text('Update anomaly:', 35, 326);
  text('Structural fix:', 35, 362);
  textStyle(NORMAL); fill('#212121'); textSize(11);
  text(sp.violation, 130, 290, canvasWidth - 170);
  text(sp.anomaly, 130, 326, canvasWidth - 170);
  text(sp.fix, 130, 362, canvasWidth - 170);

  if (showUpdate && step >= 1) {
    fill('#fce4ec'); stroke('#C2185B'); strokeWeight(2);
    rect(20, 420, canvasWidth - 40, 80, 6);
    fill('#C2185B'); noStroke(); textSize(11); textStyle(BOLD); textAlign(LEFT, TOP);
    text('Update Anomaly Cost', 35, 430);
    textStyle(NORMAL); fill('#212121'); textSize(11);
    text('In the unnormalized schema: rename "Mug" to "Coffee Mug" → must update 47 rows.', 35, 450);
    text('In the corrected schema: rename product_id 77 in Product table → 1 row updated.', 35, 470);
    fill('#43A047'); textStyle(BOLD);
    text('That is a 47:1 ratio. Multiply across hundreds of products: that is your weekend.', 35, 488);
    textStyle(NORMAL);
  }
}

function drawSchema(x, y, w, h, s) {
  // Single denormalized table
  if (s === 0) {
    drawTable(x + w / 2 - 250, y + 10, 500, 'Order Report (denormalized)',
      ['order_id', 'customer_name', 'customer_email', 'product_list', 'order_total', 'salesperson', 'salesperson_region'],
      ['1001', 'Kim Park', 'kim@x.com', '"Mug, Hat, Shirt"', '$45', 'Bob', 'East'],
      [3, 6]);
  } else if (s === 1) {
    drawTable(x + 10, y + 10, w / 2 - 20, 'Order',
      ['order_id', 'customer_name', 'customer_email', 'order_total', 'salesperson', 'salesperson_region'],
      ['1001', 'Kim Park', 'kim@x.com', '$45', 'Bob', 'East'], []);
    drawTable(x + w / 2 + 10, y + 10, w / 2 - 20, 'OrderLine',
      ['order_id', 'product_name', 'price'],
      ['1001', 'Mug', '$15'], []);
  } else if (s === 2) {
    drawTable(x + 10, y + 10, w / 3 - 10, 'Order',
      ['order_id', 'customer_name', 'order_total', 'salesperson', 'salesperson_region'],
      ['1001', 'Kim Park', '$45', 'Bob', 'East'], []);
    drawTable(x + w / 3 + 5, y + 10, w / 3 - 10, 'OrderLine',
      ['order_id', 'product_id', 'qty'],
      ['1001', '77', '1'], []);
    drawTable(x + 2 * w / 3, y + 10, w / 3 - 10, 'Product',
      ['product_id', 'name', 'price'],
      ['77', 'Mug', '$15'], []);
  } else if (s === 3) {
    drawTable(x + 10, y + 10, w / 4 - 10, 'Order',
      ['order_id', 'cust', 'sp_id'],
      ['1001', 'Kim', '5'], []);
    drawTable(x + w / 4 + 5, y + 10, w / 4 - 10, 'OrderLine',
      ['order_id', 'prod_id', 'qty'],
      ['1001', '77', '1'], []);
    drawTable(x + w / 2 + 5, y + 10, w / 4 - 10, 'Product',
      ['product_id', 'name', 'price'],
      ['77', 'Mug', '$15'], []);
    drawTable(x + 3 * w / 4 + 5, y + 10, w / 4 - 15, 'Salesperson',
      ['sp_id', 'name', 'region'],
      ['5', 'Bob', 'East'], []);
  }
}

function drawTable(x, y, w, title, cols, sample, violations) {
  fill('#1a3a6c'); noStroke(); textSize(11); textStyle(BOLD); textAlign(CENTER, BOTTOM);
  text(title, x + w / 2, y - 4);
  textStyle(NORMAL);
  // Header row
  fill('#43A047'); rect(x, y, w, 22, 3);
  fill('white'); textSize(9); textAlign(LEFT, CENTER);
  let cx = x + 6;
  const colW = (w - 12) / cols.length;
  for (let i = 0; i < cols.length; i++) {
    const isViolation = violations.includes(i);
    if (isViolation) {
      fill('#C2185B'); rect(x + i * colW, y, colW, 22);
    }
    fill('white'); textStyle(BOLD); textAlign(CENTER, CENTER);
    text(cols[i], x + i * colW + colW / 2, y + 11);
    textStyle(NORMAL);
  }
  // Sample row
  fill('#fff'); stroke('#90A4AE'); strokeWeight(1);
  rect(x, y + 22, w, 22, 0);
  fill('#212121'); noStroke(); textSize(9); textAlign(CENTER, CENTER);
  for (let i = 0; i < cols.length && i < sample.length; i++) {
    text(sample[i], x + i * colW + colW / 2, y + 33);
  }
}

function windowResized() { updateCanvasSize(); resizeCanvas(canvasWidth, canvasHeight); }
function updateCanvasSize() {
  const c = document.querySelector('main');
  if (c) canvasWidth = c.offsetWidth;
}
