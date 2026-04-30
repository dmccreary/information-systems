// Waterfall Model - p5.js
// Five-phase descending waterfall with optional feedback arrows
// CANVAS_HEIGHT: 540

let canvasWidth = 720;
let drawHeight = 480;
let controlHeight = 60;
let canvasHeight = drawHeight + controlHeight;

let showFeedback = false;
let hovered = -1;
let feedbackBtn;

const phases = [
  { name: 'Requirements', color: '#90CAF9', activities: 'Stakeholder interviews; SRS document.', artifacts: 'Requirements doc; signoff', stall: 'Stakeholders disagree on scope.' },
  { name: 'Design', color: '#42A5F5', activities: 'Architecture, schemas, API contracts.', artifacts: 'Design doc; ERD; API spec', stall: 'New requirement discovered late.', warn: true },
  { name: 'Implementation', color: '#1E88E5', activities: 'Coding, unit tests.', artifacts: 'Source code; build artifacts', stall: 'Estimated effort underestimated.' },
  { name: 'Verification', color: '#1565C0', activities: 'Integration test, UAT.', artifacts: 'Test reports; defect log', stall: 'Defects open at cutover.', warn: true },
  { name: 'Maintenance', color: '#0D47A1', activities: 'Bug fixes, enhancements.', artifacts: 'Patches; release notes', stall: 'Backlog of "small" requests.' }
];

function setup() {
  updateCanvasSize();
  const c = createCanvas(canvasWidth, canvasHeight);
  c.parent(document.querySelector('main'));
  feedbackBtn = createButton('Show Feedback Arrows');
  feedbackBtn.position(20, drawHeight + 12);
  feedbackBtn.parent(document.querySelector('main'));
  feedbackBtn.mousePressed(() => { showFeedback = !showFeedback; feedbackBtn.html(showFeedback ? 'Hide Feedback' : 'Show Feedback Arrows'); });
  styleBtn(feedbackBtn, '#1a3a6c');

  describe('Five-phase waterfall model with hover details and optional feedback arrows.', LABEL);
}
function styleBtn(b, bg) { b.style('background-color', bg); b.style('color', 'white'); b.style('border', 'none'); b.style('padding', '6px 10px'); b.style('border-radius', '4px'); b.style('cursor', 'pointer'); b.style('font-size', '11px'); }

function draw() {
  updateCanvasSize();
  background('#fafbfc');
  noStroke(); fill('#1a3a6c');
  textSize(15); textStyle(BOLD); textAlign(CENTER, TOP);
  text('The Waterfall Model', canvasWidth / 2, 12);
  textStyle(NORMAL);

  hovered = -1;
  const padX = 30;
  const slot = (canvasWidth - 2 * padX) / phases.length;
  const startY = 60;
  const stepDown = 50;

  for (let i = 0; i < phases.length; i++) {
    const x = padX + i * slot;
    const y = startY + i * stepDown;
    const w = slot - 6;
    const h = 60;
    const p = phases[i];

    fill(p.color); stroke('white'); strokeWeight(2);
    rect(x, y, w, h, 6);
    fill('white'); noStroke();
    textSize(11); textStyle(BOLD); textAlign(CENTER, CENTER);
    text(p.name, x + w / 2, y + 30);
    textStyle(NORMAL);

    if (p.warn) {
      fill('#FFA000'); noStroke();
      textSize(16); textAlign(CENTER, CENTER);
      text('⚠', x + w - 12, y + 12);
    }

    if (mouseX >= x && mouseX < x + w && mouseY >= y && mouseY < y + h) hovered = i;

    // Cascading arrow to next phase
    if (i < phases.length - 1) {
      const nx = padX + (i + 1) * slot;
      const ny = startY + (i + 1) * stepDown;
      stroke(p.color); strokeWeight(3); noFill();
      const cx1 = x + w + 8;
      const cy1 = y + h;
      bezier(cx1, cy1, cx1 + 10, cy1 + 30, nx - 10, ny - 30, nx, ny);
      // Arrowhead
      noStroke(); fill(p.color);
      triangle(nx, ny, nx - 6, ny - 4, nx - 6, ny + 4);
    }
  }

  // Feedback arrows
  if (showFeedback) {
    for (let i = 1; i < phases.length; i++) {
      const x1 = padX + i * slot + slot / 2 - 3;
      const y1 = startY + i * stepDown;
      const x2 = padX + (i - 1) * slot + (slot - 6) / 2 + 3;
      const y2 = startY + (i - 1) * stepDown + 60;
      stroke('#FFA000'); strokeWeight(2); noFill();
      drawingContext.setLineDash([5, 4]);
      bezier(x1, y1, x1 - 30, y1 - 40, x2 + 30, y2 + 40, x2, y2);
      drawingContext.setLineDash([]);
      noStroke(); fill('#FFA000');
      triangle(x2, y2, x2 + 6, y2 + 4, x2 + 6, y2 - 4);
    }
    fill('#FFA000'); noStroke(); textSize(10); textStyle(ITALIC); textAlign(LEFT, CENTER);
    text('Backward feedback paths — possible but expensive.', padX, drawHeight - 70);
    textStyle(NORMAL);
  }

  // Hover panel
  if (hovered >= 0) {
    const p = phases[hovered];
    fill('#fff'); stroke(p.color); strokeWeight(2);
    rect(20, drawHeight - 110, canvasWidth - 40, 90, 6);
    fill('#1a3a6c'); noStroke(); textSize(12); textStyle(BOLD); textAlign(LEFT, TOP);
    text(p.name, 35, drawHeight - 102);
    textStyle(NORMAL); fill('#212121'); textSize(10);
    text('Activities: ' + p.activities, 35, drawHeight - 80, canvasWidth - 70);
    text('Artifacts: ' + p.artifacts, 35, drawHeight - 64, canvasWidth - 70);
    fill('#C2185B');
    text('Common stall: ' + p.stall, 35, drawHeight - 44, canvasWidth - 70);
  }
}

function windowResized() { updateCanvasSize(); resizeCanvas(canvasWidth, canvasHeight); }
function updateCanvasSize() {
  const c = document.querySelector('main');
  if (c) canvasWidth = c.offsetWidth;
}
