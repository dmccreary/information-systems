// Place Order Sequence Diagram - p5.js
// UML sequence diagram with five participants, alt fragment, and play animation
// CANVAS_HEIGHT: 700

let canvasWidth = 720;
let drawHeight = 620;
let controlHeight = 80;
let canvasHeight = drawHeight + controlHeight;

const participants = [
  { id: 'cust', label: 'Customer', icon: '👤' },
  { id: 'web', label: 'Web Frontend', icon: '🌐' },
  { id: 'order', label: 'Order Service', icon: '⚙' },
  { id: 'inv', label: 'Inventory', icon: '📦' },
  { id: 'pay', label: 'Payment GW', icon: '💳' }
];

let succeed = true;
let showTiming = false;
let playStep = -1;
let lastTick = 0;

let altBtn, timingBtn, playBtn;

function setup() {
  updateCanvasSize();
  const c = createCanvas(canvasWidth, canvasHeight);
  c.parent(document.querySelector('main'));

  playBtn = createButton('▶ Play');
  playBtn.position(20, drawHeight + 12);
  playBtn.parent(document.querySelector('main'));
  playBtn.mousePressed(() => { playStep = 0; lastTick = millis(); });
  styleBtn(playBtn, '#1a3a6c');

  altBtn = createButton('Toggle alt: Payment succeeds');
  altBtn.position(100, drawHeight + 12);
  altBtn.parent(document.querySelector('main'));
  altBtn.mousePressed(() => {
    succeed = !succeed;
    altBtn.html('Toggle alt: Payment ' + (succeed ? 'succeeds' : 'fails'));
  });
  styleBtn(altBtn, '#FF7043');

  timingBtn = createButton('Show Timing');
  timingBtn.position(330, drawHeight + 12);
  timingBtn.parent(document.querySelector('main'));
  timingBtn.mousePressed(() => { showTiming = !showTiming; });
  styleBtn(timingBtn, '#26A69A');

  describe('UML sequence diagram for placing an order across five participants.', LABEL);
}
function styleBtn(b, bg) { b.style('background-color', bg); b.style('color', 'white'); b.style('border', 'none'); b.style('padding', '6px 10px'); b.style('border-radius', '4px'); b.style('cursor', 'pointer'); b.style('font-size', '11px'); }

function getMessages() {
  const succ = [
    { from: 'cust', to: 'web', label: 'submitOrder(items, payment)', timing: '5ms' },
    { from: 'web', to: 'order', label: 'createOrder(...)', timing: '10ms' },
    { from: 'order', to: 'inv', label: 'reserveItems(...)', timing: '40ms' },
    { from: 'inv', to: 'order', label: 'reservationId', dashed: true, timing: '40ms' },
    { from: 'order', to: 'pay', label: 'charge(amount, token)', timing: '300ms' },
    { from: 'pay', to: 'order', label: 'paymentConfirmation', dashed: true, timing: '300ms' },
    { from: 'order', to: 'web', label: 'orderConfirmed', dashed: true, timing: '5ms' },
    { from: 'web', to: 'cust', label: 'orderConfirmed', dashed: true, timing: '5ms' }
  ];
  const fail = [
    { from: 'cust', to: 'web', label: 'submitOrder(items, payment)', timing: '5ms' },
    { from: 'web', to: 'order', label: 'createOrder(...)', timing: '10ms' },
    { from: 'order', to: 'inv', label: 'reserveItems(...)', timing: '40ms' },
    { from: 'inv', to: 'order', label: 'reservationId', dashed: true, timing: '40ms' },
    { from: 'order', to: 'pay', label: 'charge(amount, token)', timing: '300ms' },
    { from: 'pay', to: 'order', label: 'paymentDeclined', dashed: true, timing: '300ms', error: true },
    { from: 'order', to: 'inv', label: 'releaseItems(reservationId)', timing: '40ms' },
    { from: 'order', to: 'web', label: 'orderFailed', dashed: true, timing: '5ms', error: true },
    { from: 'web', to: 'cust', label: 'orderFailed', dashed: true, timing: '5ms', error: true }
  ];
  return succeed ? succ : fail;
}

function draw() {
  updateCanvasSize();
  background('#fafbfc');
  noStroke(); fill('#1a3a6c');
  textSize(15); textStyle(BOLD); textAlign(CENTER, TOP);
  text('Sequence Diagram — Place Order', canvasWidth / 2, 12);
  textStyle(NORMAL);

  const padX = 60;
  const colW = (canvasWidth - 2 * padX) / participants.length;

  // Participant headers
  for (let i = 0; i < participants.length; i++) {
    const x = padX + i * colW + colW / 2;
    fill('#37474F'); stroke('white'); strokeWeight(1);
    rect(x - 50, 50, 100, 30, 4);
    fill('white'); noStroke();
    textSize(10); textStyle(BOLD); textAlign(CENTER, CENTER);
    text(participants[i].icon + ' ' + participants[i].label, x, 65);
    textStyle(NORMAL);
    // Lifeline
    stroke('#90A4AE'); strokeWeight(1);
    drawingContext.setLineDash([4, 4]);
    line(x, 80, x, drawHeight - 30);
    drawingContext.setLineDash([]);
  }

  // alt fragment box
  const messages = getMessages();
  noFill(); stroke('#C2185B'); strokeWeight(2);
  rect(padX - 5, 200, canvasWidth - 2 * padX + 10, drawHeight - 240, 4);
  fill('white'); noStroke();
  rect(padX, 195, 80, 16);
  fill('#C2185B'); textSize(10); textStyle(BOLD); textAlign(LEFT, CENTER);
  text('alt [' + (succeed ? 'success' : 'failure') + ']', padX + 4, 203);
  textStyle(NORMAL);

  // Auto-advance play
  if (playStep >= 0 && millis() - lastTick > 800) {
    playStep++;
    lastTick = millis();
    if (playStep >= messages.length) playStep = -1;
  }

  // Draw messages
  let curY = 110;
  const stepY = (drawHeight - 200) / messages.length;
  for (let i = 0; i < messages.length; i++) {
    const m = messages[i];
    const fromIdx = participants.findIndex(p => p.id === m.from);
    const toIdx = participants.findIndex(p => p.id === m.to);
    const fromX = padX + fromIdx * colW + colW / 2;
    const toX = padX + toIdx * colW + colW / 2;
    const y = curY + i * stepY;

    const dim = playStep >= 0 && i > playStep ? 0.3 : 1;
    const lineColor = m.error ? `rgba(194, 24, 91, ${dim})` : (m.dashed ? `rgba(255, 112, 67, ${dim})` : `rgba(38, 166, 154, ${dim})`);

    stroke(lineColor); strokeWeight(playStep === i ? 3 : 1.5);
    if (m.dashed) drawingContext.setLineDash([6, 4]);
    line(fromX, y, toX, y);
    drawingContext.setLineDash([]);
    // Arrowhead
    noStroke(); fill(lineColor);
    const dir = toX > fromX ? 1 : -1;
    triangle(toX, y, toX - 8 * dir, y - 4, toX - 8 * dir, y + 4);

    // Label
    const cx = (fromX + toX) / 2;
    fill(`rgba(33, 33, 33, ${dim})`);
    textSize(9); textAlign(CENTER, BOTTOM);
    text(m.label + (showTiming ? '   ⏱' + m.timing : ''), cx, y - 3);
  }
}

function windowResized() { updateCanvasSize(); resizeCanvas(canvasWidth, canvasHeight); }
function updateCanvasSize() {
  const c = document.querySelector('main');
  if (c) canvasWidth = c.offsetWidth;
}
