// Cloud Shared Responsibility Stack - p5.js
// Five columns (On-Prem, IaaS, PaaS, SaaS, FaaS) x 8 layers
// CANVAS_HEIGHT: 660

let canvasWidth = 720;
let drawHeight = 600;
let controlHeight = 60;
let canvasHeight = drawHeight + controlHeight;

const layers = ['Data', 'Application', 'Runtime', 'OS', 'Virtualization', 'Servers', 'Storage', 'Networking'];
// columns: each is 8-layer array of 'C' (customer) or 'P' (provider), top -> bottom
const columns = [
  { name: 'On-Premises', stack: ['C','C','C','C','C','C','C','C'] },
  { name: 'IaaS',        stack: ['C','C','C','C','P','P','P','P'] },
  { name: 'PaaS',        stack: ['C','C','P','P','P','P','P','P'] },
  { name: 'SaaS',        stack: ['C','P','P','P','P','P','P','P'] },
  { name: 'FaaS',        stack: ['C','C','P','P','P','P','P','P'] }
];

const layerInfo = {
  'Data': { meaning: 'Your business data — the only thing you can never outsource.', task: 'Classify data sensitivity, set retention.' },
  'Application': { meaning: 'Application code that implements business logic.', task: 'Write/own the application code.' },
  'Runtime': { meaning: 'Programming language runtime, libraries, framework.', task: 'Update Java JDK; rebuild Docker images.' },
  'OS': { meaning: 'Operating system patches, kernel, base packages.', task: 'Patch CVE in Linux kernel.' },
  'Virtualization': { meaning: 'Hypervisor, container orchestration plane.', task: 'Patch the hypervisor; manage Kubernetes cluster.' },
  'Servers': { meaning: 'Physical compute, BIOS, firmware.', task: 'Replace failed PSU; update firmware.' },
  'Storage': { meaning: 'Physical disks, storage arrays, backup hardware.', task: 'Capacity planning; replace failing drives.' },
  'Networking': { meaning: 'Physical network, switches, routers, cabling.', task: 'Run new fiber; replace router.' }
};

let billingMode = false;
let billingBtn;

function setup() {
  updateCanvasSize();
  const c = createCanvas(canvasWidth, canvasHeight);
  c.parent(document.querySelector('main'));

  billingBtn = createButton('Show Billing View');
  billingBtn.position(20, drawHeight + 12);
  billingBtn.parent(document.querySelector('main'));
  billingBtn.mousePressed(() => { billingMode = !billingMode; billingBtn.html(billingMode ? 'Show Responsibility View' : 'Show Billing View'); });
  billingBtn.style('background-color', '#1a3a6c');
  billingBtn.style('color', 'white');
  billingBtn.style('border', 'none');
  billingBtn.style('padding', '6px 10px');
  billingBtn.style('border-radius', '4px');
  billingBtn.style('cursor', 'pointer');
  billingBtn.style('font-size', '11px');

  describe('Cloud shared-responsibility stack across five service models.', LABEL);
}

function draw() {
  updateCanvasSize();
  background('#fafbfc');

  noStroke(); fill('#1a3a6c');
  textSize(15); textStyle(BOLD); textAlign(CENTER, TOP);
  text(billingMode ? 'Cloud Billing — what you pay for' : 'Cloud Shared Responsibility Stack', canvasWidth / 2, 12);
  textStyle(NORMAL);
  textSize(11); fill('#555');
  text(billingMode ? 'Provider charges in dark gray; customer in green' : 'Customer responsibility in green; provider in slate-gray', canvasWidth / 2, 32);

  const colW = (canvasWidth - 80) / columns.length;
  const startX = 80;
  const startY = 70;
  const rowH = (drawHeight - startY - 60) / layers.length;

  // Layer labels (left axis)
  for (let i = 0; i < layers.length; i++) {
    const y = startY + i * rowH;
    fill('#37474F'); noStroke();
    textSize(11); textAlign(RIGHT, CENTER); textStyle(BOLD);
    text(layers[i], 70, y + rowH / 2);
    textStyle(NORMAL);
  }

  // Columns
  for (let c = 0; c < columns.length; c++) {
    const x = startX + c * colW;
    // Column header
    fill('#1a3a6c'); noStroke();
    textSize(12); textStyle(BOLD); textAlign(CENTER, BOTTOM);
    text(columns[c].name, x + colW / 2, startY - 6);
    textStyle(NORMAL);

    // Layer cells
    for (let i = 0; i < layers.length; i++) {
      const y = startY + i * rowH;
      const owner = columns[c].stack[i];
      let bg, txt;
      if (billingMode) {
        // billing: customer pays for emerald layers explicitly; provider layers baked in
        bg = (owner === 'C') ? '#43A047' : '#37474F';
        txt = 'white';
      } else {
        bg = (owner === 'C') ? '#43A047' : '#90A4AE';
        txt = 'white';
      }
      fill(bg);
      stroke(c === 4 ? '#FF7043' : '#fff'); strokeWeight(c === 4 ? 2 : 1);
      rect(x + 4, y + 2, colW - 8, rowH - 4, 4);
      fill(txt); noStroke();
      textSize(10); textAlign(CENTER, CENTER);
      text(owner === 'C' ? 'You' : 'Cloud', x + colW / 2, y + rowH / 2);
    }
  }

  // Hover detection
  let hoveredCol = -1, hoveredLayer = -1;
  if (mouseX >= startX && mouseX < startX + colW * columns.length &&
      mouseY >= startY && mouseY < startY + rowH * layers.length) {
    hoveredCol = Math.floor((mouseX - startX) / colW);
    hoveredLayer = Math.floor((mouseY - startY) / rowH);
  }

  // Hover info panel
  if (hoveredCol >= 0 && hoveredLayer >= 0) {
    const layerName = layers[hoveredLayer];
    const owner = columns[hoveredCol].stack[hoveredLayer];
    const ownerName = owner === 'C' ? 'You (customer)' : 'Cloud provider';
    const info = layerInfo[layerName];
    const py = startY + rowH * layers.length + 10;
    fill('#fff'); stroke('#90A4AE'); strokeWeight(1);
    rect(startX, py, canvasWidth - 100, 70, 6);
    fill('#1a3a6c'); noStroke();
    textSize(11); textStyle(BOLD); textAlign(LEFT, TOP);
    text(layerName + ' (' + columns[hoveredCol].name + ')', startX + 12, py + 6);
    textStyle(NORMAL); fill('#212121'); textSize(10);
    text('Meaning: ' + info.meaning, startX + 12, py + 24, canvasWidth - 124);
    text('Task: ' + info.task + '   |   Owner: ' + ownerName, startX + 12, py + 50, canvasWidth - 124);
  } else {
    fill('#666'); noStroke(); textSize(10); textAlign(CENTER, TOP);
    text('Hover any cell to see what that layer means and who is responsible.', canvasWidth / 2, drawHeight - 40);
  }

  // FaaS callout
  fill('#FF7043'); noStroke(); textSize(10); textAlign(CENTER, TOP); textStyle(ITALIC);
  text('FaaS — "rent a moment" — only function code + data are yours', startX + colW * 4 + colW / 2, drawHeight - 10);
  textStyle(NORMAL);
}

function windowResized() { updateCanvasSize(); resizeCanvas(canvasWidth, canvasHeight); }
function updateCanvasSize() {
  const c = document.querySelector('main');
  if (c) canvasWidth = c.offsetWidth;
}
