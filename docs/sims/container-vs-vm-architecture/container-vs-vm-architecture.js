// Container vs VM Architecture - p5.js side-by-side
// Shows layered stacks with hover details and scale-up toggle
// CANVAS_HEIGHT: 600

let canvasWidth = 720;
let drawHeight = 540;
let controlHeight = 60;
let canvasHeight = drawHeight + controlHeight;

let scaledUp = false;
let sharedKernel = false;
let scaleBtn, kernelBtn;

function setup() {
  updateCanvasSize();
  const c = createCanvas(canvasWidth, canvasHeight);
  c.parent(document.querySelector('main'));

  scaleBtn = createButton('Scale Up Both Panels');
  scaleBtn.position(20, drawHeight + 12);
  scaleBtn.parent(document.querySelector('main'));
  scaleBtn.mousePressed(() => { scaledUp = !scaledUp; scaleBtn.html(scaledUp ? 'Scale Down' : 'Scale Up Both Panels'); });
  styleBtn(scaleBtn, '#1a3a6c');

  kernelBtn = createButton('Highlight Shared Kernel');
  kernelBtn.position(180, drawHeight + 12);
  kernelBtn.parent(document.querySelector('main'));
  kernelBtn.mousePressed(() => { sharedKernel = !sharedKernel; kernelBtn.html(sharedKernel ? 'Hide Shared Kernel' : 'Highlight Shared Kernel'); });
  styleBtn(kernelBtn, '#FF7043');

  describe('Side-by-side comparison of VM and container architectures.', LABEL);
}
function styleBtn(b, bg) { b.style('background-color', bg); b.style('color', 'white'); b.style('border', 'none'); b.style('padding', '6px 10px'); b.style('border-radius', '4px'); b.style('cursor', 'pointer'); b.style('font-size', '11px'); }

function draw() {
  updateCanvasSize();
  background('#fafbfc');
  noStroke(); fill('#1a3a6c');
  textSize(15); textStyle(BOLD); textAlign(CENTER, TOP);
  text('Container vs Virtual Machine Architecture', canvasWidth / 2, 12);
  textStyle(NORMAL);

  const panelW = (canvasWidth - 60) / 2;
  drawVMPanel(20, 50, panelW);
  drawContainerPanel(40 + panelW, 50, panelW);

  // Stats footer
  fill('#37474F'); noStroke();
  textSize(11); textAlign(CENTER, TOP);
  text('VM: full guest OS per unit · ~2 GB · 30-90s boot', 20 + panelW / 2, drawHeight - 18);
  text('Container: shares host kernel · 50-300 MB · <1s boot', 40 + panelW + panelW / 2, drawHeight - 18);
}

function drawVMPanel(x, y, w) {
  fill('#f0f4f8'); stroke('#90A4AE'); strokeWeight(1);
  rect(x, y, w, drawHeight - y - 30, 6);

  fill('#1a3a6c'); noStroke(); textSize(13); textStyle(BOLD); textAlign(CENTER, TOP);
  text('Virtual Machines', x + w / 2, y + 8);
  textStyle(NORMAL);

  // Layers from bottom up
  const layers = [
    { name: 'Hardware', color: '#90A4AE' },
    { name: 'Host OS', color: '#26A69A' },
    { name: 'Hypervisor', color: '#FF8A65' }
  ];
  let curY = y + (drawHeight - y - 30) - 30;
  for (const l of layers) {
    fill(l.color); stroke('white'); strokeWeight(2);
    rect(x + 10, curY, w - 20, 28, 4);
    fill('white'); noStroke(); textSize(10); textStyle(BOLD); textAlign(CENTER, CENTER);
    text(l.name, x + w / 2, curY + 14);
    curY -= 30;
  }
  textStyle(NORMAL);

  // VMs - 3 (or 6 if scaled)
  const numVMs = scaledUp ? 6 : 3;
  const vmCols = scaledUp ? 6 : 3;
  const vmW = (w - 30) / vmCols - 8;
  const vmH = curY - y - 30;

  for (let i = 0; i < numVMs && i < vmCols; i++) {
    const vmX = x + 15 + i * ((w - 30) / vmCols);
    const vmY = y + 30;
    fill('#90A4AE'); stroke('#37474F'); strokeWeight(1);
    rect(vmX, vmY, vmW, vmH, 4);
    // App
    fill('#C2185B'); noStroke();
    rect(vmX + 4, vmY + 4, vmW - 8, vmH * 0.3, 3);
    fill('white'); textSize(9); textStyle(BOLD); textAlign(CENTER, CENTER);
    text('App', vmX + vmW / 2, vmY + vmH * 0.15 + 4);
    // Libs
    fill('#7B1FA2'); noStroke();
    rect(vmX + 4, vmY + 4 + vmH * 0.3 + 2, vmW - 8, vmH * 0.25, 3);
    fill('white'); textSize(9);
    text('Libs', vmX + vmW / 2, vmY + 4 + vmH * 0.42);
    // Guest OS (the cost)
    fill('#37474F'); noStroke();
    rect(vmX + 4, vmY + 4 + vmH * 0.55 + 4, vmW - 8, vmH * 0.4, 3);
    fill('white'); textSize(9);
    text('Guest OS', vmX + vmW / 2, vmY + 4 + vmH * 0.75);
    textStyle(NORMAL);
  }

  fill('#666'); noStroke(); textSize(10); textAlign(LEFT, TOP);
  text('size badge: ~2 GB each', x + 12, y + 28);
}

function drawContainerPanel(x, y, w) {
  fill('#f0f4f8'); stroke('#90A4AE'); strokeWeight(1);
  rect(x, y, w, drawHeight - y - 30, 6);

  fill('#1a3a6c'); noStroke(); textSize(13); textStyle(BOLD); textAlign(CENTER, TOP);
  text('Containers', x + w / 2, y + 8);
  textStyle(NORMAL);

  const hostOSColor = sharedKernel ? '#FFA000' : '#26A69A';
  const layers = [
    { name: 'Hardware', color: '#90A4AE' },
    { name: sharedKernel ? 'Host OS (shared kernel)' : 'Host OS', color: hostOSColor },
    { name: 'Container Runtime (Docker)', color: '#43A047' }
  ];
  let curY = y + (drawHeight - y - 30) - 30;
  for (const l of layers) {
    fill(l.color); stroke('white'); strokeWeight(2);
    rect(x + 10, curY, w - 20, 28, 4);
    fill('white'); noStroke(); textSize(10); textStyle(BOLD); textAlign(CENTER, CENTER);
    text(l.name, x + w / 2, curY + 14);
    curY -= 30;
  }
  textStyle(NORMAL);

  // Containers (5 default, 10 scaled)
  const numC = scaledUp ? 10 : 5;
  const cCols = numC;
  const cW = (w - 30) / cCols - 4;
  const cH = curY - y - 30;
  for (let i = 0; i < numC; i++) {
    const cX = x + 15 + i * ((w - 30) / cCols);
    const cY = y + 30;
    fill('#90A4AE'); stroke('#37474F'); strokeWeight(1);
    rect(cX, cY, cW, cH, 4);
    // App
    fill('#C2185B'); noStroke();
    rect(cX + 2, cY + 2, cW - 4, cH * 0.45, 3);
    fill('white'); textSize(8); textStyle(BOLD); textAlign(CENTER, CENTER);
    text('App', cX + cW / 2, cY + cH * 0.225);
    // Libs
    fill('#7B1FA2'); noStroke();
    rect(cX + 2, cY + 2 + cH * 0.45 + 2, cW - 4, cH * 0.45, 3);
    fill('white'); textSize(8);
    text('Libs', cX + cW / 2, cY + 2 + cH * 0.7);
    textStyle(NORMAL);
  }

  fill('#666'); noStroke(); textSize(10); textAlign(LEFT, TOP);
  text('size badge: ~50-300 MB each', x + 12, y + 28);
}

function windowResized() { updateCanvasSize(); resizeCanvas(canvasWidth, canvasHeight); }
function updateCanvasSize() {
  const c = document.querySelector('main');
  if (c) canvasWidth = c.offsetWidth;
}
