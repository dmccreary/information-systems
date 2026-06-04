// Three-Tier Architecture - p5.js
// Presentation -> Application -> Data, animated request/response
// CANVAS_HEIGHT: 600

let canvasWidth = 720;
let drawHeight = 540;
let controlHeight = 60;
let canvasHeight = drawHeight + controlHeight;

const requests = {
  product: {
    name: 'View product page',
    pres: 'User opens /product/77',
    app: 'Look up product, render template',
    data: 'SELECT * FROM products WHERE id=77'
  },
  loan: {
    name: 'Submit loan application',
    pres: 'User clicks "Apply for Loan"',
    app: 'Validate inputs, run eligibility rules',
    data: 'INSERT loan + read credit history'
  },
  report: {
    name: 'Generate monthly report',
    pres: 'User clicks "Generate Report"',
    app: 'Aggregate data, render PDF',
    data: 'Long-running aggregate queries'
  }
};

let currentRequest = 'product';
let dotPos = -1;
let traceBtn, reqSel;

function setup() {
  updateCanvasSize();
  const c = createCanvas(canvasWidth, canvasHeight);
  c.parent(document.querySelector('main'));

  traceBtn = createButton('Trace a Request');
  traceBtn.position(20, drawHeight + 12);
  traceBtn.parent(document.querySelector('main'));
  traceBtn.mousePressed(() => { dotPos = 0; });
  styleBtn(traceBtn, '#1a3a6c');

  reqSel = createSelect();
  reqSel.position(180, drawHeight + 12);
  reqSel.parent(document.querySelector('main'));
  reqSel.option('View product page', 'product');
  reqSel.option('Submit loan application', 'loan');
  reqSel.option('Generate monthly report', 'report');
  reqSel.changed(() => currentRequest = reqSel.value());

  describe('Three-tier architecture diagram with animated request/response trace.', LABEL);
}
function styleBtn(b, bg) { b.style('background-color', bg); b.style('color', 'white'); b.style('border', 'none'); b.style('padding', '6px 10px'); b.style('border-radius', '4px'); b.style('cursor', 'pointer'); b.style('font-size', '11px'); }

function draw() {
  updateCanvasSize();
  background('#fafbfc');
  noStroke(); fill('#1a3a6c');
  textSize(15); textStyle(BOLD); textAlign(CENTER, TOP);
  text('Three-Tier Architecture', canvasWidth / 2, 12);
  textStyle(NORMAL);

  const padX = 30;
  const layerH = 110;
  const tiers = [
    { name: 'Presentation Tier', color: '#90CAF9', border: '#1976D2', icon: '🌐', y: 60 },
    { name: 'Application Tier', color: '#26A69A', border: '#00695C', icon: '⚙', y: 200 },
    { name: 'Data Tier',         color: '#FFC107', border: '#FF8F00', icon: '🗄', y: 340 }
  ];

  for (const t of tiers) {
    fill(t.color); stroke(t.border); strokeWeight(2);
    rect(padX, t.y, canvasWidth - 2 * padX, layerH, 8);
    fill('#1a3a6c'); noStroke();
    textSize(20); textAlign(LEFT, CENTER);
    text(t.icon, padX + 16, t.y + 30);
    textSize(13); textStyle(BOLD); textAlign(LEFT, CENTER);
    text(t.name, padX + 50, t.y + 30);
    textStyle(NORMAL);
  }

  // Layer separators (between)
  stroke('#90A4AE'); strokeWeight(1);
  drawingContext.setLineDash([4, 4]);
  line(padX, 175, canvasWidth - padX, 175);
  line(padX, 315, canvasWidth - padX, 315);
  drawingContext.setLineDash([]);

  // Request descriptions in each tier
  const r = requests[currentRequest];
  fill('#37474F'); noStroke(); textSize(11); textAlign(LEFT, TOP);
  text('▸ ' + r.pres, padX + 30, 90, canvasWidth - 2 * padX - 60);
  text('▸ ' + r.app, padX + 30, 230, canvasWidth - 2 * padX - 60);
  text('▸ ' + r.data, padX + 30, 370, canvasWidth - 2 * padX - 60);

  // Animate dot if active
  if (dotPos >= 0) {
    dotPos += 0.4;
    // 0..6 = down, 6..12 = up
    const path = [
      { y: 110, label: 'request enters Presentation' },
      { y: 175, label: 'crosses to Application' },
      { y: 250, label: 'request hits Application' },
      { y: 315, label: 'crosses to Data' },
      { y: 390, label: 'request hits Data' },
      { y: 315, label: 'response back to Application' },
      { y: 250, label: 'response in Application' },
      { y: 175, label: 'response crosses up' },
      { y: 110, label: 'response delivered' }
    ];
    const idx = Math.min(Math.floor(dotPos), path.length - 1);
    const px = canvasWidth / 2;
    const py = path[idx].y;
    fill('#C2185B'); stroke('white'); strokeWeight(2);
    circle(px, py, 16);
    fill('#fff'); stroke('#C2185B'); strokeWeight(1);
    rect(canvasWidth / 2 - 110, py + 14, 220, 22, 4);
    fill('#C2185B'); noStroke();
    textSize(10); textStyle(BOLD); textAlign(CENTER, CENTER);
    text(path[idx].label, canvasWidth / 2, py + 25);
    textStyle(NORMAL);
    if (dotPos >= path.length) dotPos = -1;
  }

  // Footer hint
  fill('#666'); noStroke(); textSize(11); textAlign(CENTER, TOP); textStyle(ITALIC);
  text('Pick a request type and click Trace a Request to animate the request/response.', canvasWidth / 2, drawHeight - 30);
  textStyle(NORMAL);
}

function windowResized() { updateCanvasSize(); resizeCanvas(canvasWidth, canvasHeight); }
function updateCanvasSize() {
  const c = document.querySelector('main');
  if (c) canvasWidth = c.offsetWidth;
}
