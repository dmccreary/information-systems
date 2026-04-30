// ERP Implementation Timeline - p5.js
// 24-month Gantt with cutover, big-bang vs phased toggle
// CANVAS_HEIGHT: 700

let canvasWidth = 720;
let drawHeight = 620;
let controlHeight = 80;
let canvasHeight = drawHeight + controlHeight;

const phases = [
  { name: 'Strategy / Selection', start: 0,  dur: 3, color: '#80CBC4', risk: 'medium', deliv: 'Vendor decision; signed contract', fail: 'Selecting on demo, not on architecture fit.' },
  { name: 'Discovery / Design',   start: 3,  dur: 4, color: '#4DB6AC', risk: 'high',   deliv: 'Functional design, gap analysis', fail: 'Underestimating customizations.' },
  { name: 'Build / Configure',    start: 7,  dur: 6, color: '#26A69A', risk: 'high',   deliv: 'Configured system; integrations', fail: 'Custom code creep.' },
  { name: 'Test',                 start: 13, dur: 4, color: '#00897B', risk: 'critical', deliv: 'UAT signoff', fail: 'Skipping integration testing.' },
  { name: 'Train',                start: 16, dur: 3, color: '#43A047', risk: 'medium', deliv: 'Trained users + materials', fail: 'Training too early.' },
  { name: 'Cutover',              start: 21, dur: 1, color: '#FF7043', risk: 'critical', deliv: '96-hour cutover plan executed', fail: 'No go/no-go discipline.' },
  { name: 'Hypercare',            start: 22, dur: 2, color: '#90CAF9', risk: 'medium', deliv: 'Stable steady-state operations', fail: 'Releasing the team too soon.' }
];

let bigBang = true;
let skipTesting = false;
let strategyBtn, testBtn;

function setup() {
  updateCanvasSize();
  const c = createCanvas(canvasWidth, canvasHeight);
  c.parent(document.querySelector('main'));

  strategyBtn = createButton('Switch to Phased Rollout');
  strategyBtn.position(20, drawHeight + 12);
  strategyBtn.parent(document.querySelector('main'));
  strategyBtn.mousePressed(() => { bigBang = !bigBang; strategyBtn.html(bigBang ? 'Switch to Phased Rollout' : 'Switch to Big Bang'); });
  styleBtn(strategyBtn, '#1a3a6c');

  testBtn = createButton('What If: Skip Testing');
  testBtn.position(220, drawHeight + 12);
  testBtn.parent(document.querySelector('main'));
  testBtn.mousePressed(() => { skipTesting = !skipTesting; testBtn.html(skipTesting ? 'Reset Testing' : 'What If: Skip Testing'); });
  styleBtn(testBtn, '#C2185B');

  describe('24-month ERP implementation timeline with cutover detail and rollout strategy toggle.', LABEL);
}
function styleBtn(b, bg) { b.style('background-color', bg); b.style('color', 'white'); b.style('border', 'none'); b.style('padding', '6px 10px'); b.style('border-radius', '4px'); b.style('cursor', 'pointer'); b.style('font-size', '11px'); }

function draw() {
  updateCanvasSize();
  background('#fafbfc');
  noStroke(); fill('#1a3a6c');
  textSize(15); textStyle(BOLD); textAlign(CENTER, TOP);
  text('ERP Implementation — 24-Month Timeline', canvasWidth / 2, 12);
  textStyle(NORMAL);

  // Timeline axis
  const axisX = 50, axisY = 70, axisW = canvasWidth - 100;
  const months = 30;
  const monthW = axisW / months;
  stroke('#90A4AE'); strokeWeight(1);
  for (let m = 0; m <= months; m += 3) {
    const x = axisX + m * monthW;
    line(x, axisY, x, axisY + 10);
    noStroke(); fill('#37474F'); textSize(9); textAlign(CENTER, TOP);
    text('M' + m, x, axisY + 12);
    stroke('#90A4AE');
  }

  // Phase bars
  let phaseY = axisY + 35;
  for (const p of phases) {
    const x = axisX + p.start * monthW;
    const w = p.dur * monthW;
    // dim if skipping testing
    let bg = p.color;
    if (skipTesting && p.name === 'Test') bg = '#E0E0E0';
    fill(bg); stroke('white'); strokeWeight(1);
    rect(x, phaseY, w, 26, 4);
    fill('white'); noStroke();
    textSize(10); textStyle(BOLD); textAlign(LEFT, CENTER);
    text(p.name, x + 6, phaseY + 13);
    textStyle(NORMAL);
    phaseY += 30;
  }

  // Cutover detail (96-hour expanded)
  const cutY = phaseY + 20;
  const cutEvents = ['Freeze legacy', 'Final extract', 'Migrate data', 'Reconcile', 'Smoke tests', 'Go/no-go', 'Enable users', 'First txn', 'Hypercare standby'];
  fill('#1a3a6c'); noStroke(); textSize(11); textStyle(BOLD); textAlign(LEFT, TOP);
  text('Cutover Window (96 hours, M21-M22):', 50, cutY);
  textStyle(NORMAL);
  const cevW = (canvasWidth - 100) / cutEvents.length;
  for (let i = 0; i < cutEvents.length; i++) {
    const x = 50 + i * cevW;
    fill(i === 5 ? '#FFA000' : '#FF7043');
    rect(x + 2, cutY + 20, cevW - 4, 22, 3);
    fill('white'); textSize(8); textStyle(BOLD); textAlign(CENTER, CENTER);
    text(cutEvents[i], x + cevW / 2, cutY + 31);
    textStyle(NORMAL);
  }

  // Rollout strategy lane
  const rolY = cutY + 60;
  fill('#1a3a6c'); noStroke(); textSize(11); textStyle(BOLD); textAlign(LEFT, TOP);
  text('Rollout Strategy: ' + (bigBang ? 'Big Bang' : 'Phased'), 50, rolY);
  textStyle(NORMAL);

  if (bigBang) {
    // Single big-bang
    const x = axisX + 22 * monthW;
    fill('#C2185B'); noStroke();
    rect(x, rolY + 20, monthW * 1, 22, 3);
    fill('white'); textSize(10); textAlign(CENTER, CENTER);
    text('GO-LIVE', x + monthW / 2, rolY + 31);
  } else {
    // Phased: 3 cutovers
    const stops = [14, 18, 24];
    stops.forEach((m, i) => {
      const x = axisX + m * monthW;
      fill('#FF7043'); noStroke();
      rect(x, rolY + 20, monthW * 1, 22, 3);
      fill('white'); textSize(9); textAlign(CENTER, CENTER); textStyle(BOLD);
      text(['Wave 1', 'Wave 2', 'Wave 3'][i], x + monthW / 2, rolY + 31);
      textStyle(NORMAL);
    });
    // Interim integration arrows
    stroke('#90A4AE'); strokeWeight(1.5); fill('#90A4AE');
    for (let i = 0; i < 2; i++) {
      const x1 = axisX + stops[i] * monthW + monthW;
      const x2 = axisX + stops[i + 1] * monthW;
      noFill();
      drawingContext.setLineDash([4, 4]);
      line(x1, rolY + 50, x2, rolY + 50);
      drawingContext.setLineDash([]);
      noStroke(); fill('#37474F'); textSize(9); textAlign(CENTER, TOP);
      text('interim integration', (x1 + x2) / 2, rolY + 53);
    }
  }

  // Skip testing alert
  if (skipTesting) {
    fill('#FFCDD2'); stroke('#C62828'); strokeWeight(2);
    rect(50, drawHeight - 65, canvasWidth - 100, 50, 6);
    fill('#C62828'); noStroke(); textSize(11); textStyle(BOLD); textAlign(LEFT, TOP);
    text('⚠ Skipping testing → cutover failures observed in real ERP rollouts:', 60, drawHeight - 56);
    textStyle(NORMAL); textSize(10);
    text('• Wrong data migrations · Integration breaks · Users locked out · Need to roll back', 60, drawHeight - 38);
    text('Schedule looks shorter, but the post-cutover hypercare blow-up is much longer.', 60, drawHeight - 22);
  }

  // Post-ERP review marker
  const m30x = axisX + 30 * monthW;
  stroke('#1a3a6c'); strokeWeight(2);
  line(m30x, axisY, m30x, drawHeight - 80);
  noStroke(); fill('#1a3a6c'); textSize(9); textAlign(CENTER, BOTTOM);
  text('Post-ERP\nReview', m30x, axisY - 4);
}

function windowResized() { updateCanvasSize(); resizeCanvas(canvasWidth, canvasHeight); }
function updateCanvasSize() {
  const c = document.querySelector('main');
  if (c) canvasWidth = c.offsetWidth;
}
