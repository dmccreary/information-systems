// Value Stream Map - Invoice Approval - p5.js
// Process boxes with VA/NVA timeline; toggle to To-Be state
// CANVAS_HEIGHT: 600

let canvasWidth = 720;
let drawHeight = 540;
let controlHeight = 60;
let canvasHeight = drawHeight + controlHeight;

let asIs = true;
let toggleBtn;

const stateAsIs = {
  steps: [
    { name: 'Receive Invoice', ct: 5, queue: 18 },
    { name: 'AP Data Entry', ct: 8, queue: 23 },
    { name: 'Manager Approval', ct: 4, queue: 35 },
    { name: 'Director Approval', ct: 6, queue: 28 },
    { name: 'Payment Scheduling', ct: 5, queue: 12 },
    { name: 'Payment Issued', ct: 3, queue: 0 }
  ]
};
const stateToBe = {
  steps: [
    { name: 'Auto-OCR Intake', ct: 1, queue: 4 },
    { name: 'Auto-Validate', ct: 2, queue: 5 },
    { name: 'Manager Approval (>$1k)', ct: 3, queue: 8 },
    // Director removed (auto-approve <$10k); Manager handles >$1k
    { name: 'Auto-Schedule Payment', ct: 1, queue: 2 },
    { name: 'Payment Issued', ct: 1, queue: 0 }
  ]
};

function setup() {
  updateCanvasSize();
  const c = createCanvas(canvasWidth, canvasHeight);
  c.parent(document.querySelector('main'));
  toggleBtn = createButton('Switch to To-Be');
  toggleBtn.position(20, drawHeight + 12);
  toggleBtn.parent(document.querySelector('main'));
  toggleBtn.mousePressed(() => { asIs = !asIs; toggleBtn.html(asIs ? 'Switch to To-Be' : 'Switch to As-Is'); });
  styleBtn(toggleBtn, asIs ? '#1a3a6c' : '#43A047');

  describe('Value stream map showing invoice approval before and after Lean improvements.', LABEL);
}
function styleBtn(b, bg) { b.style('background-color', bg); b.style('color', 'white'); b.style('border', 'none'); b.style('padding', '6px 10px'); b.style('border-radius', '4px'); b.style('cursor', 'pointer'); b.style('font-size', '11px'); }

function draw() {
  updateCanvasSize();
  background('#fafbfc');
  noStroke(); fill('#1a3a6c');
  textSize(15); textStyle(BOLD); textAlign(CENTER, TOP);
  text('Value Stream Map: Invoice Approval (' + (asIs ? 'As-Is' : 'To-Be') + ')', canvasWidth / 2, 12);
  textStyle(NORMAL);

  toggleBtn.style('background-color', asIs ? '#1a3a6c' : '#43A047');

  const state = asIs ? stateAsIs : stateToBe;
  const steps = state.steps;

  const padX = 20;
  const slot = (canvasWidth - 2 * padX) / steps.length;
  const boxY = 80;
  const boxH = 60;
  const queueY = 180;
  const timelineY = 280;

  // Process boxes + queues
  for (let i = 0; i < steps.length; i++) {
    const s = steps[i];
    const x = padX + i * slot;
    fill('#43A047'); stroke('white'); strokeWeight(1);
    rect(x + 4, boxY, slot - 8, boxH, 4);
    fill('white'); noStroke(); textSize(10); textStyle(BOLD); textAlign(CENTER, CENTER);
    text(s.name, x + slot / 2, boxY + 20, slot - 16);
    textStyle(NORMAL); textSize(9);
    text('CT: ' + s.ct + 'd', x + slot / 2, boxY + 42);

    if (s.queue > 0 && i < steps.length - 1) {
      // Queue triangle between boxes
      fill('#FF7043'); stroke('#BF360C'); strokeWeight(1);
      const tx = x + slot - 4;
      triangle(tx, queueY, tx - 14, queueY + 18, tx + 14, queueY + 18);
      fill('white'); noStroke(); textSize(9); textStyle(BOLD); textAlign(CENTER, CENTER);
      text(s.queue, tx, queueY + 12);
      fill('#37474F'); textSize(8); textStyle(NORMAL); textAlign(CENTER, TOP);
      text('waiting', tx, queueY + 20);
    }
  }

  // Timeline
  let totalNVA = 0, totalVA = 0;
  for (const s of steps) { totalVA += s.ct; totalNVA += s.queue; }
  const totalLT = totalVA + totalNVA;
  const tlX = padX, tlW = canvasWidth - 2 * padX;

  // NVA top rung (red)
  fill('#FFCDD2'); stroke('#C62828'); strokeWeight(1);
  rect(tlX, timelineY, tlW, 22, 3);
  fill('#C62828'); noStroke(); textSize(9); textStyle(BOLD); textAlign(LEFT, CENTER);
  text('Non-Value-Added Time: ' + totalNVA + ' days (queue waits)', tlX + 8, timelineY + 11);
  // VA bottom rung (green)
  fill('#C8E6C9'); stroke('#1B5E20'); strokeWeight(1);
  rect(tlX, timelineY + 30, tlW, 22, 3);
  fill('#1B5E20'); noStroke(); textStyle(BOLD); textAlign(LEFT, CENTER);
  text('Value-Added Time: ' + totalVA + ' days (actual processing)', tlX + 8, timelineY + 41);

  // Summary box
  const sumX = padX, sumY = timelineY + 80, sumW = canvasWidth - 2 * padX;
  fill('#fff'); stroke('#1a3a6c'); strokeWeight(2);
  rect(sumX, sumY, sumW, 90, 6);
  fill('#1a3a6c'); noStroke(); textSize(12); textStyle(BOLD); textAlign(LEFT, TOP);
  text('Summary', sumX + 12, sumY + 8);
  textStyle(NORMAL); fill('#212121'); textSize(11);
  text('Total Lead Time: ' + totalLT + ' days', sumX + 12, sumY + 30);
  text('Value-Added Time: ' + totalVA + ' days', sumX + 12, sumY + 48);
  const va = (totalVA / totalLT * 100).toFixed(1);
  fill(va > 15 ? '#43A047' : (va > 8 ? '#FFA000' : '#C62828'));
  textStyle(BOLD); textSize(13);
  text('Value-Added Ratio: ' + va + '%', sumX + 12, sumY + 66);
  textStyle(NORMAL);

  if (!asIs) {
    fill('#26A69A'); textSize(10); textStyle(ITALIC); textAlign(LEFT, TOP);
    text('Lean changes: removed director-approval step, OCR intake, auto-schedule.', sumX + 240, sumY + 30, sumW - 250);
    textStyle(NORMAL);
  }
}

function windowResized() { updateCanvasSize(); resizeCanvas(canvasWidth, canvasHeight); }
function updateCanvasSize() {
  const c = document.querySelector('main');
  if (c) canvasWidth = c.offsetWidth;
}
