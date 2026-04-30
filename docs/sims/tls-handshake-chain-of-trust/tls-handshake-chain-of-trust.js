// TLS Handshake and Chain of Trust - p5.js
// Step-through TLS 1.3 handshake with cert chain panel
// CANVAS_HEIGHT: 700

let canvasWidth = 720;
let drawHeight = 620;
let controlHeight = 80;
let canvasHeight = drawHeight + controlHeight;

let step = 0;
let mitm = false;
let expired = false;
let showAttacker = false;

let nextBtn, prevBtn, mitmBtn, expBtn, attBtn;

const steps = [
  { name: 'ClientHello', from: 'browser', to: 'server', detail: 'Browser sends supported cipher suites + random' },
  { name: 'ServerHello + Cert', from: 'server', to: 'browser', detail: 'Server picks cipher, sends its certificate chain' },
  { name: 'Verify chain', from: 'browser', to: 'browser', detail: 'Browser walks Cert → Intermediate → Root, validating signatures' },
  { name: 'Key exchange (ECDHE)', from: 'browser', to: 'server', detail: 'Ephemeral elliptic-curve Diffie-Hellman' },
  { name: 'Session key derived', from: 'browser', to: 'browser', detail: 'Both sides derive the same symmetric session key' },
  { name: 'Encrypted application data', from: 'browser', to: 'server', detail: 'TLS-protected HTTP traffic flows' }
];

function setup() {
  updateCanvasSize();
  const c = createCanvas(canvasWidth, canvasHeight);
  c.parent(document.querySelector('main'));

  prevBtn = createButton('◀');
  prevBtn.position(20, drawHeight + 12);
  prevBtn.parent(document.querySelector('main'));
  prevBtn.mousePressed(() => { step = max(0, step - 1); });
  styleBtn(prevBtn, '#90A4AE');

  nextBtn = createButton('▶');
  nextBtn.position(60, drawHeight + 12);
  nextBtn.parent(document.querySelector('main'));
  nextBtn.mousePressed(() => { step = min(steps.length - 1, step + 1); });
  styleBtn(nextBtn, '#1a3a6c');

  mitmBtn = createButton('Try MITM');
  mitmBtn.position(110, drawHeight + 12);
  mitmBtn.parent(document.querySelector('main'));
  mitmBtn.mousePressed(() => { mitm = !mitm; });
  styleBtn(mitmBtn, '#C2185B');

  expBtn = createButton('Force Expired Cert');
  expBtn.position(200, drawHeight + 12);
  expBtn.parent(document.querySelector('main'));
  expBtn.mousePressed(() => { expired = !expired; });
  styleBtn(expBtn, '#FFA000');

  attBtn = createButton('Show Attacker View');
  attBtn.position(330, drawHeight + 12);
  attBtn.parent(document.querySelector('main'));
  attBtn.mousePressed(() => { showAttacker = !showAttacker; });
  styleBtn(attBtn, '#26A69A');

  describe('Step-through TLS 1.3 handshake with chain-of-trust visualization.', LABEL);
}
function styleBtn(b, bg) { b.style('background-color', bg); b.style('color', 'white'); b.style('border', 'none'); b.style('padding', '6px 10px'); b.style('border-radius', '4px'); b.style('cursor', 'pointer'); b.style('font-size', '11px'); }

function draw() {
  updateCanvasSize();
  background('#fafbfc');
  noStroke(); fill('#1a3a6c');
  textSize(15); textStyle(BOLD); textAlign(CENTER, TOP);
  text('TLS Handshake & Chain of Trust', canvasWidth / 2, 12);
  textStyle(NORMAL);

  const browX = 80, servX = canvasWidth - 80;
  // Headers
  fill('#43A047'); stroke('white'); strokeWeight(1);
  rect(browX - 50, 50, 100, 28, 4);
  fill('white'); noStroke(); textSize(11); textStyle(BOLD); textAlign(CENTER, CENTER);
  text('🌐 Browser', browX, 64);
  fill('#C2185B'); stroke('white'); strokeWeight(1);
  rect(servX - 50, 50, 100, 28, 4);
  fill('white'); noStroke(); textStyle(BOLD); textAlign(CENTER, CENTER);
  text('🖥 Server', servX, 64);
  textStyle(NORMAL);

  // Lifelines
  stroke('#90A4AE'); strokeWeight(1);
  drawingContext.setLineDash([4, 4]);
  line(browX, 80, browX, drawHeight - 290);
  line(servX, 80, servX, drawHeight - 290);
  drawingContext.setLineDash([]);

  // Draw steps up to current
  const stepY0 = 110;
  const stepH = 38;
  for (let i = 0; i <= step; i++) {
    const s = steps[i];
    const y = stepY0 + i * stepH;
    const x1 = s.from === 'browser' ? browX : servX;
    const x2 = s.to === 'browser' ? browX : servX;
    if (x1 !== x2) {
      stroke(s.from === 'browser' ? '#43A047' : '#C2185B'); strokeWeight(2);
      line(x1, y, x2, y);
      noStroke(); fill(s.from === 'browser' ? '#43A047' : '#C2185B');
      const dir = x2 > x1 ? 1 : -1;
      triangle(x2, y, x2 - 8 * dir, y - 4, x2 - 8 * dir, y + 4);
    } else {
      // self-arrow
      stroke('#FFA000'); strokeWeight(2); noFill();
      arc(x1 + 18, y, 32, 24, -PI/2, PI/2);
    }
    fill('#37474F'); noStroke(); textSize(10); textStyle(BOLD); textAlign(CENTER, BOTTOM);
    text(s.name, (x1 + x2) / 2, y - 4);
    textStyle(NORMAL);
  }

  // Current step info
  fill('#fff'); stroke('#90A4AE'); strokeWeight(1);
  rect(20, drawHeight - 270, canvasWidth - 40, 50, 5);
  fill('#1a3a6c'); noStroke(); textSize(12); textStyle(BOLD); textAlign(LEFT, TOP);
  text('Step ' + (step + 1) + ': ' + steps[step].name, 35, drawHeight - 262);
  textStyle(NORMAL); fill('#212121'); textSize(11);
  text(steps[step].detail, 35, drawHeight - 240, canvasWidth - 70);

  // Cert chain panel
  drawCertChain(20, drawHeight - 210, canvasWidth - 40, 190);

  // Attacker view
  if (showAttacker && step >= 5) {
    fill(255, 255, 255, 245); stroke('#26A69A'); strokeWeight(2);
    rect(40, drawHeight - 200, canvasWidth - 80, 120, 6);
    fill('#26A69A'); noStroke(); textSize(11); textStyle(BOLD); textAlign(LEFT, TOP);
    text('What an on-path attacker sees:', 55, drawHeight - 192);
    textStyle(NORMAL); fill('#212121'); textSize(10); textFont('monospace');
    text('17 03 03 00 4A   3A B9 D2 8E F1 C0 A4 ...', 55, drawHeight - 170);
    text('17 03 03 00 33   88 4F 7E ...  (encrypted payload)', 55, drawHeight - 154);
    text('17 03 03 00 80   C2 91 33 ...  (encrypted payload)', 55, drawHeight - 138);
    textFont('Arial'); fill('#666'); textSize(10);
    text('Cipher = AES_128_GCM_SHA256. Without the session key the bytes are noise.', 55, drawHeight - 110);
  }

  // MITM warning
  if (mitm) {
    fill('#FFCDD2'); stroke('#C62828'); strokeWeight(2);
    rect(20, drawHeight - 280, canvasWidth - 40, 24, 4);
    fill('#C62828'); noStroke(); textSize(11); textStyle(BOLD); textAlign(LEFT, CENTER);
    text('⚠ MITM attempted with self-signed cert: chain validation FAILS.', 35, drawHeight - 268);
    textStyle(NORMAL);
  }
}

function drawCertChain(x, y, w, h) {
  fill('#fafbfc'); stroke('#90A4AE'); strokeWeight(1);
  rect(x, y, w, h, 5);
  fill('#1a3a6c'); noStroke(); textSize(11); textStyle(BOLD); textAlign(LEFT, TOP);
  text('Certificate Chain', x + 8, y + 8);
  textStyle(NORMAL);

  const certs = [
    { sub: 'CN=example.com', iss: 'Let\'s Encrypt R3', valid: !expired },
    { sub: "CN=Let's Encrypt R3", iss: 'CN=ISRG Root X1', valid: true },
    { sub: 'CN=ISRG Root X1 (trust anchor in OS)', iss: '— self-signed root —', valid: !mitm }
  ];

  for (let i = 0; i < certs.length; i++) {
    const cy = y + 30 + i * 50;
    const c = certs[i];
    fill(c.valid ? '#E8F5E9' : '#FFCDD2');
    stroke(c.valid ? '#2E7D32' : '#C62828'); strokeWeight(1.5);
    rect(x + 12, cy, w - 24, 42, 4);
    fill('#212121'); noStroke();
    textSize(10); textStyle(BOLD); textAlign(LEFT, TOP);
    text((c.valid ? '✓ ' : '✗ ') + c.sub, x + 22, cy + 6);
    textStyle(NORMAL); textSize(9); fill('#555');
    text('issuer: ' + c.iss, x + 22, cy + 24);
    if (i < certs.length - 1) {
      stroke('#90A4AE'); strokeWeight(1);
      line(x + w / 2, cy + 42, x + w / 2, cy + 50);
    }
  }
}

function windowResized() { updateCanvasSize(); resizeCanvas(canvasWidth, canvasHeight); }
function updateCanvasSize() {
  const c = document.querySelector('main');
  if (c) canvasWidth = c.offsetWidth;
}
