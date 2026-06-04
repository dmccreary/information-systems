// Project Triangle (Scope, Time, Cost) - p5.js
// Lock 2 sides, the third flexes; quality at center
// CANVAS_HEIGHT: 600

let canvasWidth = 720;
let drawHeight = 460;
let controlHeight = 140;
let canvasHeight = drawHeight + controlHeight;

let scope = 50, time = 50, cost = 50;
let lockedScope = false, lockedTime = false, lockedCost = false;
let scopeChk, timeChk, costChk;
let scopeSld, timeSld, costSld;
let presetSel;

function setup() {
  updateCanvasSize();
  const c = createCanvas(canvasWidth, canvasHeight);
  c.parent(document.querySelector('main'));

  // Sliders
  scopeSld = createSlider(10, 100, 50);
  scopeSld.position(140, drawHeight + 12);
  scopeSld.parent(document.querySelector('main'));
  scopeSld.style('width', '160px');
  scopeSld.input(() => { scope = scopeSld.value(); rebalance('scope'); });

  timeSld = createSlider(10, 100, 50);
  timeSld.position(140, drawHeight + 42);
  timeSld.parent(document.querySelector('main'));
  timeSld.style('width', '160px');
  timeSld.input(() => { time = timeSld.value(); rebalance('time'); });

  costSld = createSlider(10, 100, 50);
  costSld.position(140, drawHeight + 72);
  costSld.parent(document.querySelector('main'));
  costSld.style('width', '160px');
  costSld.input(() => { cost = costSld.value(); rebalance('cost'); });

  scopeChk = createCheckbox(' lock', false);
  scopeChk.position(310, drawHeight + 12);
  scopeChk.parent(document.querySelector('main'));
  scopeChk.changed(() => lockedScope = scopeChk.checked());

  timeChk = createCheckbox(' lock', false);
  timeChk.position(310, drawHeight + 42);
  timeChk.parent(document.querySelector('main'));
  timeChk.changed(() => lockedTime = timeChk.checked());

  costChk = createCheckbox(' lock', false);
  costChk.position(310, drawHeight + 72);
  costChk.parent(document.querySelector('main'));
  costChk.changed(() => lockedCost = costChk.checked());

  presetSel = createSelect();
  presetSel.position(380, drawHeight + 12);
  presetSel.parent(document.querySelector('main'));
  presetSel.option('— preset —');
  presetSel.option('Fixed-bid contract', 'fixed');
  presetSel.option('Startup MVP', 'mvp');
  presetSel.option('Regulatory deadline', 'reg');
  presetSel.changed(() => applyPreset(presetSel.value()));

  describe('Project triangle interactive showing tradeoff between scope, time, and cost.', LABEL);
}

function applyPreset(p) {
  if (p === 'fixed') { scope = 70; time = 50; cost = 50; lockedScope = lockedCost = true; lockedTime = false; scopeChk.checked(true); costChk.checked(true); timeChk.checked(false); }
  else if (p === 'mvp') { scope = 30; time = 60; cost = 35; lockedTime = lockedCost = true; lockedScope = false; timeChk.checked(true); costChk.checked(true); scopeChk.checked(false); }
  else if (p === 'reg') { scope = 60; time = 90; cost = 70; lockedTime = lockedScope = true; lockedCost = false; timeChk.checked(true); scopeChk.checked(true); costChk.checked(false); }
  syncSliders();
}
function syncSliders() { scopeSld.value(scope); timeSld.value(time); costSld.value(cost); }

function rebalance(changed) {
  // If 2 are locked, the third must move proportionally
  // If user moves a locked one, it stays user-set
  // For simplicity: if user moves a locked one, just keep it; let it conflict
}

function draw() {
  updateCanvasSize();
  background('#fafbfc');
  noStroke(); fill('#1a3a6c');
  textSize(15); textStyle(BOLD); textAlign(CENTER, TOP);
  text('Project Triangle: Scope, Time, Cost', canvasWidth / 2, 12);
  textStyle(NORMAL);

  const cx = canvasWidth / 2;
  const cy = 250;
  const baseR = 140;
  // Three vertices
  const sScope = scope / 50;
  const sTime = time / 50;
  const sCost = cost / 50;
  const v1 = { x: cx, y: cy - baseR * sScope };
  const v2 = { x: cx + baseR * sTime * cos(PI / 6), y: cy + baseR * sTime * sin(PI / 6) };
  const v3 = { x: cx - baseR * sCost * cos(PI / 6), y: cy + baseR * sCost * sin(PI / 6) };

  // Triangle fill
  const lockedCount = (lockedScope ? 1 : 0) + (lockedTime ? 1 : 0) + (lockedCost ? 1 : 0);
  // Quality
  const total = scope + time + cost;
  const balance = Math.abs(scope - 50) + Math.abs(time - 50) + Math.abs(cost - 50);
  let quality = 100 - balance * 0.6;
  if (lockedCount === 3) quality = 30; // overconstrained
  let qColor = quality > 70 ? '#43A047' : (quality > 40 ? '#FFA000' : '#C2185B');

  // Sides
  drawSide(v1, v2, 'Time', lockedTime);
  drawSide(v2, v3, 'Cost', lockedCost);
  drawSide(v3, v1, 'Scope', lockedScope);

  // Vertices
  fill('#1a3a6c'); noStroke();
  for (const v of [v1, v2, v3]) circle(v.x, v.y, 8);

  // Quality indicator
  fill(qColor); stroke('white'); strokeWeight(3);
  circle(cx, cy, 60);
  fill('white'); noStroke();
  textSize(11); textStyle(BOLD); textAlign(CENTER, CENTER);
  text('Quality\n' + Math.round(quality), cx, cy);
  textStyle(NORMAL);

  // Commentary
  fill('#fff'); stroke('#90A4AE'); strokeWeight(1);
  rect(20, drawHeight - 80, canvasWidth - 40, 70, 6);
  fill('#1a3a6c'); noStroke(); textSize(11); textStyle(BOLD); textAlign(LEFT, TOP);
  text('Tradeoff:', 35, drawHeight - 72);
  textStyle(NORMAL); fill('#212121'); textSize(11);
  let msg = 'Move the sliders. Lock two sides to fix them, and the third must flex.';
  if (lockedCount === 3) msg = '⚠ You locked all three! Quality collapses. The triangle cannot accommodate.';
  else if (lockedScope && lockedTime && !lockedCost) msg = 'Locked scope + time → cost rises. Add staff or accept overtime.';
  else if (lockedScope && lockedCost && !lockedTime) msg = 'Locked scope + cost → time stretches. Schedule slips.';
  else if (lockedTime && lockedCost && !lockedScope) msg = 'Locked time + cost → scope must shrink. Pick which features to cut.';
  text(msg, 35, drawHeight - 52, canvasWidth - 70);

  // Slider labels
  fill('#212121'); textSize(11);
  text('Scope:', 70, drawHeight + 22);
  text('Time:',  70, drawHeight + 52);
  text('Cost:',  70, drawHeight + 82);
}

function drawSide(p1, p2, label, locked) {
  stroke(locked ? '#43A047' : '#FF7043'); strokeWeight(locked ? 4 : 2);
  noFill(); line(p1.x, p1.y, p2.x, p2.y);
  // Label
  noStroke(); fill('#1a3a6c');
  textSize(12); textStyle(BOLD); textAlign(CENTER, CENTER);
  text(label + (locked ? ' 🔒' : ''), (p1.x + p2.x) / 2, (p1.y + p2.y) / 2 - 14);
  textStyle(NORMAL);
}

function windowResized() { updateCanvasSize(); resizeCanvas(canvasWidth, canvasHeight); }
function updateCanvasSize() {
  const c = document.querySelector('main');
  if (c) canvasWidth = c.offsetWidth;
}
