// Write Skew Under Read Committed - p5.js
// Two concurrent transactions reading on-call schedule and both releasing
// CANVAS_HEIGHT: 580

let canvasWidth = 720;
let drawHeight = 520;
let controlHeight = 60;
let canvasHeight = drawHeight + controlHeight;

let step = 0;
let isolation = 'read-committed';
let isolSel, stepBtn, resetBtn;

const events = [
  { txn: 'A', label: 'BEGIN', state: 'Jones=on, Smith=on' },
  { txn: 'B', label: 'BEGIN', state: 'Jones=on, Smith=on' },
  { txn: 'A', label: 'SELECT count(*) WHERE on_call = true → 2', state: 'Jones=on, Smith=on' },
  { txn: 'B', label: 'SELECT count(*) WHERE on_call = true → 2', state: 'Jones=on, Smith=on' },
  { txn: 'A', label: 'UPDATE Jones SET on_call=false', state: 'Jones=off, Smith=on (uncommitted)' },
  { txn: 'B', label: 'UPDATE Smith SET on_call=false', state: 'Jones=off, Smith=off (uncommitted)' },
  { txn: 'A', label: 'COMMIT', state: 'Jones=off, Smith=on (A committed)' },
  { txn: 'B', label: 'COMMIT — anomaly!', state: 'Jones=off, Smith=off — RULE VIOLATED' }
];
const eventsSerial = [
  { txn: 'A', label: 'BEGIN', state: 'Jones=on, Smith=on' },
  { txn: 'B', label: 'BEGIN', state: 'Jones=on, Smith=on' },
  { txn: 'A', label: 'SELECT count(*) WHERE on_call = true → 2', state: 'Jones=on, Smith=on' },
  { txn: 'B', label: 'SELECT count(*) WHERE on_call = true → 2', state: 'Jones=on, Smith=on' },
  { txn: 'A', label: 'UPDATE Jones SET on_call=false', state: 'Jones=off, Smith=on' },
  { txn: 'B', label: 'UPDATE Smith SET on_call=false → conflict detected', state: 'serialization conflict!' },
  { txn: 'A', label: 'COMMIT', state: 'Jones=off, Smith=on (A committed)' },
  { txn: 'B', label: 'ROLLBACK + retry: re-reads → Jones=off, Smith=on; refuses', state: 'B cannot release Smith. Rule holds.' }
];

function setup() {
  updateCanvasSize();
  const c = createCanvas(canvasWidth, canvasHeight);
  c.parent(document.querySelector('main'));

  isolSel = createSelect();
  isolSel.position(140, drawHeight + 12);
  isolSel.parent(document.querySelector('main'));
  isolSel.option('Read Committed', 'read-committed');
  isolSel.option('Serializable', 'serializable');
  isolSel.changed(() => { isolation = isolSel.value(); step = 0; });

  stepBtn = createButton('Step ▶');
  stepBtn.position(280, drawHeight + 12);
  stepBtn.parent(document.querySelector('main'));
  stepBtn.mousePressed(() => { step++; });
  styleBtn(stepBtn, '#1a3a6c');

  resetBtn = createButton('Reset');
  resetBtn.position(360, drawHeight + 12);
  resetBtn.parent(document.querySelector('main'));
  resetBtn.mousePressed(() => { step = 0; });
  styleBtn(resetBtn, '#90A4AE');

  describe('Two concurrent transactions illustrating write skew under read committed.', LABEL);
}
function styleBtn(b, bg) { b.style('background-color', bg); b.style('color', 'white'); b.style('border', 'none'); b.style('padding', '6px 10px'); b.style('border-radius', '4px'); b.style('cursor', 'pointer'); b.style('font-size', '11px'); }

function draw() {
  updateCanvasSize();
  background('#fafbfc');
  noStroke(); fill('#1a3a6c');
  textSize(15); textStyle(BOLD); textAlign(CENTER, TOP);
  text('Write Skew on Hospital On-Call Schedule', canvasWidth / 2, 12);
  textStyle(NORMAL);
  textSize(11); fill('#555');
  text('Rule: at least one doctor must remain on call.', canvasWidth / 2, 32);

  const evList = isolation === 'serializable' ? eventsSerial : events;
  step = constrain(step, 0, evList.length);

  // Two timelines
  const tlAY = 80, tlBY = 160;
  const padX = 30;
  const tlW = canvasWidth - 2 * padX;
  // Headers
  fill('#43A047'); stroke('white'); strokeWeight(1);
  rect(padX, tlAY, 80, 24, 3);
  fill('white'); noStroke(); textSize(11); textStyle(BOLD); textAlign(CENTER, CENTER);
  text('Txn A', padX + 40, tlAY + 12);
  fill('#FF7043'); rect(padX, tlBY, 80, 24, 3);
  fill('white'); text('Txn B', padX + 40, tlBY + 12);
  textStyle(NORMAL);

  // Lifelines
  stroke('#90A4AE'); strokeWeight(1);
  drawingContext.setLineDash([4, 4]);
  line(padX + 80, tlAY + 12, canvasWidth - padX, tlAY + 12);
  line(padX + 80, tlBY + 12, canvasWidth - padX, tlBY + 12);
  drawingContext.setLineDash([]);

  // Events
  const evW = (tlW - 100) / Math.max(1, evList.length);
  for (let i = 0; i < step && i < evList.length; i++) {
    const ev = evList[i];
    const x = padX + 100 + i * evW;
    const y = ev.txn === 'A' ? tlAY + 12 : tlBY + 12;
    const color = ev.txn === 'A' ? '#43A047' : '#FF7043';
    fill(color); noStroke();
    circle(x, y, 12);
    fill('#212121'); textSize(8); textStyle(BOLD); textAlign(CENTER, BOTTOM);
    push();
    translate(x, y - 8);
    rotate(-PI / 6);
    text(ev.label, 0, 0);
    pop();
    textStyle(NORMAL);
  }

  // DB state panel
  const stateY = 240;
  fill('#fff'); stroke('#90A4AE'); strokeWeight(1);
  rect(padX, stateY, tlW, 40, 4);
  fill('#1a3a6c'); noStroke(); textSize(11); textStyle(BOLD); textAlign(LEFT, CENTER);
  text('DB state:', padX + 10, stateY + 20);
  textStyle(NORMAL); fill('#212121'); textSize(11);
  const lastEv = step > 0 ? evList[step - 1] : null;
  text(lastEv ? lastEv.state : 'Jones=on, Smith=on', padX + 80, stateY + 20);

  // Explanation panel
  const expY = 300;
  fill('#fff'); stroke('#26A69A'); strokeWeight(2);
  rect(padX, expY, tlW, 90, 6);
  fill('#1a3a6c'); noStroke(); textSize(12); textStyle(BOLD); textAlign(LEFT, TOP);
  text('Explanation', padX + 10, expY + 8);
  textStyle(NORMAL); fill('#212121'); textSize(11);
  if (isolation === 'read-committed') {
    text('Each transaction sees committed data only — but neither sees the other\'s in-progress writes. Both check "is there ≥1 on-call doctor", both see 2, both release one. Result: 0 on-call. Anomaly.', padX + 10, expY + 30, tlW - 20);
  } else {
    text('Serializable isolation detects the conflict. The second transaction is aborted, then retries. On retry, B sees Jones already off and refuses to release Smith. Rule holds — at the cost of one rollback.', padX + 10, expY + 30, tlW - 20);
  }

  // Anomaly flash
  if (step >= evList.length && isolation === 'read-committed') {
    fill('#fce4ec'); stroke('#C2185B'); strokeWeight(2);
    rect(padX, expY + 95, tlW, 30, 4);
    fill('#C2185B'); noStroke(); textSize(12); textStyle(BOLD); textAlign(CENTER, CENTER);
    text('⚠ Rule violated: zero doctors on call.', canvasWidth / 2, expY + 110);
    textStyle(NORMAL);
  } else if (step >= evList.length && isolation === 'serializable') {
    fill('#E8F5E9'); stroke('#2E7D32'); strokeWeight(2);
    rect(padX, expY + 95, tlW, 30, 4);
    fill('#2E7D32'); noStroke(); textSize(12); textStyle(BOLD); textAlign(CENTER, CENTER);
    text('✓ Rule holds. One doctor remains on call.', canvasWidth / 2, expY + 110);
    textStyle(NORMAL);
  }

  // Slider/select labels
  fill('#212121'); textSize(11); noStroke(); textAlign(LEFT, CENTER);
  text('Isolation:', padX + 50, drawHeight + 22);
}

function windowResized() { updateCanvasSize(); resizeCanvas(canvasWidth, canvasHeight); }
function updateCanvasSize() {
  const c = document.querySelector('main');
  if (c) canvasWidth = c.offsetWidth;
}
