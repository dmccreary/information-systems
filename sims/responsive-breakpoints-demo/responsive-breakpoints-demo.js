// Responsive Breakpoints Demo - p5.js
// Drag a viewport frame to resize and watch layout reflow at breakpoints
// CANVAS_HEIGHT: 700

let canvasWidth = 720;
let drawHeight = 620;
let controlHeight = 80;
let canvasHeight = drawHeight + controlHeight;

let viewportW = 800;
let dragging = false;
let showCode = false;
let codeBtn, deviceSel;

const presets = {
  'iPhone SE': 375,
  'iPad': 768,
  'MacBook': 1280,
  '4K Monitor': 1920
};

function setup() {
  updateCanvasSize();
  const c = createCanvas(canvasWidth, canvasHeight);
  c.parent(document.querySelector('main'));

  codeBtn = createButton('Show Breakpoint Code');
  codeBtn.position(20, drawHeight + 12);
  codeBtn.parent(document.querySelector('main'));
  codeBtn.mousePressed(() => { showCode = !showCode; codeBtn.html(showCode ? 'Hide Code' : 'Show Breakpoint Code'); });
  styleBtn(codeBtn, '#1a3a6c');

  deviceSel = createSelect();
  deviceSel.position(220, drawHeight + 12);
  deviceSel.parent(document.querySelector('main'));
  deviceSel.option('— device preset —');
  Object.keys(presets).forEach(k => deviceSel.option(k));
  deviceSel.changed(() => { const v = presets[deviceSel.value()]; if (v) viewportW = v; });

  describe('Drag to resize a simulated viewport and observe responsive breakpoints.', LABEL);
}
function styleBtn(b, bg) { b.style('background-color', bg); b.style('color', 'white'); b.style('border', 'none'); b.style('padding', '6px 10px'); b.style('border-radius', '4px'); b.style('cursor', 'pointer'); b.style('font-size', '11px'); }

function getBreakpoint(w) {
  if (w < 600) return { name: 'Mobile (<600px)', cols: 1, nav: 'hamburger' };
  if (w < 900) return { name: 'Tablet (600-900px)', cols: 2, nav: 'horizontal' };
  if (w < 1200) return { name: 'Laptop (900-1200px)', cols: 3, nav: 'horizontal+rail' };
  return { name: 'Desktop (>=1200px)', cols: 4, nav: 'full' };
}

function draw() {
  updateCanvasSize();
  background('#fafbfc');
  noStroke(); fill('#1a3a6c');
  textSize(15); textStyle(BOLD); textAlign(CENTER, TOP);
  text('Responsive Breakpoints Demo', canvasWidth / 2, 12);
  textStyle(NORMAL);

  // Constrain
  viewportW = constrain(viewportW, 320, Math.min(1920, canvasWidth - 60));

  // Draw breakpoint scale
  fill('#1a3a6c'); noStroke();
  textSize(10); textAlign(CENTER, TOP);
  text(viewportW + 'px', canvasWidth / 2, 36);

  // Viewport frame
  const frameX = (canvasWidth - viewportW) / 2;
  const frameY = 60;
  const frameH = 380;
  fill('#37474F'); stroke('#000'); strokeWeight(1);
  rect(frameX - 6, frameY - 24, viewportW + 12, 22, 4);
  fill('#FFA000'); circle(frameX + 4, frameY - 13, 6);
  fill('#FFA000'); circle(frameX + 14, frameY - 13, 6);
  fill('#FFA000'); circle(frameX + 24, frameY - 13, 6);

  fill('#fff'); stroke('#1a3a6c'); strokeWeight(2);
  rect(frameX - 4, frameY - 4, viewportW + 8, frameH + 8, 4);

  // Resize handle on right
  fill('#FF7043'); noStroke();
  rect(frameX + viewportW + 4, frameY + frameH / 2 - 18, 14, 36, 3);
  fill('white'); textSize(11); textStyle(BOLD); textAlign(CENTER, CENTER);
  text('⇔', frameX + viewportW + 11, frameY + frameH / 2);
  textStyle(NORMAL);

  // Layout inside frame
  const bp = getBreakpoint(viewportW);
  // Header
  fill('#1a3a6c'); noStroke();
  rect(frameX, frameY, viewportW, 32);
  fill('white'); textSize(10); textStyle(BOLD); textAlign(LEFT, CENTER);
  text('Site Logo', frameX + 10, frameY + 16);
  if (bp.nav === 'hamburger') {
    fill('white'); textSize(14); textAlign(RIGHT, CENTER);
    text('☰', frameX + viewportW - 12, frameY + 16);
  } else {
    fill('white'); textSize(9); textAlign(RIGHT, CENTER);
    text('Home  About  Services  Contact', frameX + viewportW - 12, frameY + 16);
  }
  textStyle(NORMAL);

  // Hero
  fill('#43A047'); noStroke();
  rect(frameX, frameY + 36, viewportW, 80);
  fill('white'); textSize(11); textStyle(BOLD); textAlign(CENTER, CENTER);
  text('Hero Image', frameX + viewportW / 2, frameY + 76);
  textStyle(NORMAL);

  // Content cards
  const cards = bp.cols === 1 ? 3 : 3;
  const cardCols = bp.cols === 1 ? 1 : (bp.cols >= 3 ? 3 : 2);
  const railW = bp.cols >= 3 ? 80 : 0;
  const cardArea = viewportW - railW;
  const cardW = cardArea / cardCols - 8;
  for (let i = 0; i < 3; i++) {
    const col = i % cardCols;
    const row = Math.floor(i / cardCols);
    const cx = frameX + 4 + col * (cardW + 8);
    const cy = frameY + 124 + row * 70;
    fill('#FF8A65'); noStroke();
    rect(cx, cy, cardW, 60, 4);
    fill('white'); textSize(10); textStyle(BOLD); textAlign(CENTER, CENTER);
    text('Card ' + (i + 1), cx + cardW / 2, cy + 30);
    textStyle(NORMAL);
  }
  // Side rail at >= 900
  if (bp.cols >= 3) {
    fill('#90CAF9'); noStroke();
    rect(frameX + viewportW - railW + 4, frameY + 124, railW - 8, 130, 4);
    fill('#0D47A1'); textSize(9); textAlign(CENTER, CENTER);
    text('Side\nRail', frameX + viewportW - railW / 2, frameY + 190);
  }
  // Marketing column at >= 1200
  if (bp.cols >= 4) {
    fill('#CE93D8'); noStroke();
    rect(frameX + viewportW - 160, frameY + 270, 156, 50, 4);
    fill('white'); textSize(10); textStyle(BOLD); textAlign(CENTER, CENTER);
    text('Marketing Module', frameX + viewportW - 80, frameY + 295);
    textStyle(NORMAL);
  }
  // Footer
  fill('#37474F'); noStroke();
  rect(frameX, frameY + frameH - 30, viewportW, 30);
  fill('white'); textSize(9); textAlign(CENTER, CENTER);
  text('© Footer', frameX + viewportW / 2, frameY + frameH - 15);

  // Breakpoint indicator
  fill('#fff'); stroke('#C2185B'); strokeWeight(2);
  rect(20, frameY + frameH + 30, canvasWidth - 40, 32, 6);
  fill('#C2185B'); noStroke(); textSize(12); textStyle(BOLD); textAlign(LEFT, CENTER);
  text('Active breakpoint: ' + bp.name + '   ·   ' + bp.cols + ' content columns   ·   nav: ' + bp.nav, 35, frameY + frameH + 46);
  textStyle(NORMAL);

  // Code overlay
  if (showCode) {
    fill(255, 255, 255, 245); stroke('#26A69A'); strokeWeight(2);
    rect(20, frameY + frameH + 75, canvasWidth - 40, 80, 6);
    fill('#212121'); noStroke();
    textSize(10); textFont('monospace'); textAlign(LEFT, TOP);
    text('@media (max-width: 599px)  { .container { grid-template-columns: 1fr; } }', 35, frameY + frameH + 82);
    text('@media (min-width: 600px)  { .container { grid-template-columns: repeat(2, 1fr); } }', 35, frameY + frameH + 100);
    text('@media (min-width: 900px)  { .container { grid-template-columns: 1fr 1fr 1fr 80px; } }', 35, frameY + frameH + 118);
    text('@media (min-width: 1200px) { .container { grid-template-columns: 1fr 1fr 1fr 80px 160px; } }', 35, frameY + frameH + 136);
    textFont('Arial');
  }
}

function mousePressed() {
  const frameX = (canvasWidth - viewportW) / 2;
  const handleX = frameX + viewportW + 4;
  const frameY = 60, frameH = 380;
  if (mouseX >= handleX && mouseX <= handleX + 14 && mouseY >= frameY + frameH / 2 - 18 && mouseY <= frameY + frameH / 2 + 18) {
    dragging = true;
  }
}
function mouseReleased() { dragging = false; }
function mouseDragged() {
  if (dragging) {
    const frameX = (canvasWidth - viewportW) / 2;
    viewportW = (mouseX - frameX) - 4;
  }
}

function windowResized() { updateCanvasSize(); resizeCanvas(canvasWidth, canvasHeight); }
function updateCanvasSize() {
  const c = document.querySelector('main');
  if (c) canvasWidth = c.offsetWidth;
}
