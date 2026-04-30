// Scrum Sprint Cycle - p5.js circular diagram
// Sprint planning, daily standup ticks, review, retrospective
// CANVAS_HEIGHT: 600

let canvasWidth = 720;
let drawHeight = 540;
let controlHeight = 60;
let canvasHeight = drawHeight + controlHeight;

let sprintLen = 14; // days
let markerPos = 0; // 0..1 around the cycle
let playing = false;
let lastTick = 0;
let cadenceSel, playBtn;

const events = [
  { angle: -PI/2, name: 'Sprint Planning', dur: '4-8h', participants: 'Whole team', out: 'Sprint goal + backlog', dys: '"Bring whatever fits" mode.' },
  { angle: 0, name: 'Sprint Review', dur: '1-4h', participants: 'Team + stakeholders', out: 'Demo of increment', dys: 'Stakeholders see only happy path.' },
  { angle: PI/2, name: 'Sprint Retrospective', dur: '1-3h', participants: 'Team only', out: 'One change to try next sprint', dys: 'Vague "communicate better" outcomes.' }
];

function setup() {
  updateCanvasSize();
  const c = createCanvas(canvasWidth, canvasHeight);
  c.parent(document.querySelector('main'));

  playBtn = createButton('▶ Play');
  playBtn.position(20, drawHeight + 12);
  playBtn.parent(document.querySelector('main'));
  playBtn.mousePressed(() => { playing = !playing; playBtn.html(playing ? '⏸ Pause' : '▶ Play'); });
  styleBtn(playBtn, '#1a3a6c');

  cadenceSel = createSelect();
  cadenceSel.position(110, drawHeight + 12);
  cadenceSel.parent(document.querySelector('main'));
  cadenceSel.option('1 week', '7');
  cadenceSel.option('2 weeks', '14');
  cadenceSel.option('4 weeks', '28');
  cadenceSel.selected('2 weeks');
  cadenceSel.changed(() => sprintLen = parseInt(cadenceSel.value(), 10));

  describe('Scrum sprint cycle as a circular diagram with events and daily ticks.', LABEL);
}
function styleBtn(b, bg) { b.style('background-color', bg); b.style('color', 'white'); b.style('border', 'none'); b.style('padding', '6px 10px'); b.style('border-radius', '4px'); b.style('cursor', 'pointer'); b.style('font-size', '11px'); }

function draw() {
  updateCanvasSize();
  background('#fafbfc');
  noStroke(); fill('#1a3a6c');
  textSize(15); textStyle(BOLD); textAlign(CENTER, TOP);
  text('Scrum Sprint Cycle (' + sprintLen + ' days)', canvasWidth / 2, 12);
  textStyle(NORMAL);

  if (playing && millis() - lastTick > 60) {
    markerPos = (markerPos + 0.005) % 1;
    lastTick = millis();
  }

  const cx = canvasWidth / 2;
  const cy = 280;
  const R = 150;

  // Outer ring
  noFill(); stroke('#FFA000'); strokeWeight(8);
  circle(cx, cy, 2 * R);
  // Right side dev work in green overlay
  stroke('#43A047'); strokeWeight(8);
  arc(cx, cy, 2 * R, 2 * R, -PI/2, PI/2, OPEN);
  noStroke();

  // Day ticks (inner ring)
  for (let i = 0; i < sprintLen; i++) {
    const a = -PI/2 + i * TWO_PI / sprintLen;
    const x1 = cx + cos(a) * (R - 30);
    const y1 = cy + sin(a) * (R - 30);
    const x2 = cx + cos(a) * (R - 14);
    const y2 = cy + sin(a) * (R - 14);
    stroke('#90A4AE'); strokeWeight(1);
    line(x1, y1, x2, y2);
    fill('#26A69A'); noStroke(); circle(x2, y2, 6);
  }
  fill('#37474F'); noStroke(); textSize(9); textAlign(CENTER, CENTER); textStyle(ITALIC);
  text('Daily standup', cx, cy);
  textStyle(NORMAL);

  // Events
  for (const e of events) {
    const ex = cx + cos(e.angle) * R;
    const ey = cy + sin(e.angle) * R;
    fill(e.name.includes('Retrospective') ? '#43A047' : '#FF7043');
    stroke('white'); strokeWeight(2);
    circle(ex, ey, 28);
    fill('#1a3a6c'); noStroke(); textSize(10); textStyle(BOLD); textAlign(CENTER, BOTTOM);
    text(e.name, ex, ey - 18);
    textStyle(NORMAL);
  }

  // Backlog inflow (left)
  fill('#90A4AE'); noStroke();
  rect(20, cy - 30, 60, 60, 4);
  fill('white'); textSize(9); textStyle(BOLD); textAlign(CENTER, CENTER);
  text('Backlog', 50, cy);
  textStyle(NORMAL);
  stroke('#90A4AE'); strokeWeight(1.5); noFill();
  line(80, cy, cx - R, cy);
  noStroke(); fill('#90A4AE');
  triangle(cx - R, cy, cx - R - 8, cy - 4, cx - R - 8, cy + 4);

  // Increment outflow (right)
  fill('#1B5E20'); noStroke();
  rect(canvasWidth - 80, cy - 30, 60, 60, 4);
  fill('white'); textSize(9); textStyle(BOLD); textAlign(CENTER, CENTER);
  text('Increment', canvasWidth - 50, cy);
  textStyle(NORMAL);
  stroke('#1B5E20'); strokeWeight(1.5); noFill();
  line(cx + R, cy, canvasWidth - 80, cy);
  noStroke(); fill('#1B5E20');
  triangle(canvasWidth - 80, cy, canvasWidth - 88, cy - 4, canvasWidth - 88, cy + 4);

  // Marker
  const mAngle = -PI/2 + markerPos * TWO_PI;
  fill('#C2185B'); stroke('white'); strokeWeight(2);
  circle(cx + cos(mAngle) * R, cy + sin(mAngle) * R, 18);

  // Currently active event
  let active = events[0];
  let dist = 99;
  for (const e of events) {
    let d = abs(((e.angle + PI*2) % (PI*2)) - ((mAngle + PI*2) % (PI*2)));
    if (d > PI) d = TWO_PI - d;
    if (d < dist) { dist = d; active = e; }
  }

  // Info panel
  fill('#fff'); stroke('#90A4AE'); strokeWeight(1);
  rect(20, drawHeight - 90, canvasWidth - 40, 80, 6);
  fill('#1a3a6c'); noStroke(); textSize(12); textStyle(BOLD); textAlign(LEFT, TOP);
  text(active.name, 35, drawHeight - 82);
  textStyle(NORMAL); fill('#212121'); textSize(10);
  text('Participants: ' + active.participants + '   ·   Timebox: ' + active.dur + '   ·   Output: ' + active.out, 35, drawHeight - 60, canvasWidth - 70);
  fill('#C2185B'); textStyle(BOLD);
  text('⚠ Common dysfunction: ' + active.dys, 35, drawHeight - 30);
  textStyle(NORMAL);
}

function windowResized() { updateCanvasSize(); resizeCanvas(canvasWidth, canvasHeight); }
function updateCanvasSize() {
  const c = document.querySelector('main');
  if (c) canvasWidth = c.offsetWidth;
}
