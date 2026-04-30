// As-Is vs To-Be Automation Comparison - p5.js
// Three panels: manual, RPA, workflow automation, with cycle-time bars
// CANVAS_HEIGHT: 720

let canvasWidth = 720;
let drawHeight = 660;
let controlHeight = 40;
let canvasHeight = drawHeight + controlHeight;

let activePanel = 0; // 0,1,2
let showWaste = false;
let toggleBtn, panelBtns = [];

const panels = [
  {
    title: 'AS-IS — Manual',
    cycleDays: 9,
    handoffs: 8,
    vaRatio: 12,
    note: 'Email-driven handoffs; lots of waiting',
    color: '#90A4AE',
    steps: [
      { lane: 'HR clerk', step: 'Receive offer accepted', t: '0.5d', waste: '' },
      { lane: 'HR clerk', step: 'Create paper file', t: '1d', waste: 'Motion' },
      { lane: 'HR clerk', step: 'Email IT to set up account', t: '1d', waste: 'Waiting' },
      { lane: 'IT', step: 'Create AD/email/laptop', t: '2d', waste: '' },
      { lane: 'Facilities', step: 'Order badge & desk', t: '2d', waste: 'Waiting' },
      { lane: 'Manager', step: 'Plan first-day schedule', t: '0.5d', waste: '' },
      { lane: 'Payroll', step: 'Add to payroll system', t: '2d', waste: 'Waiting' }
    ]
  },
  {
    title: 'TO-BE — RPA',
    cycleDays: 3,
    handoffs: 5,
    vaRatio: 35,
    note: 'Bots automate repetitive entry — fragile to UI changes',
    color: '#FF7043',
    steps: [
      { lane: 'HR clerk', step: 'Receive offer accepted', t: '0.5d', waste: '' },
      { lane: '🤖 RPA Bot', step: 'Auto-create HR record', t: '0.1d', waste: '' },
      { lane: '🤖 RPA Bot', step: 'Auto-create IT accounts', t: '0.5d', waste: '' },
      { lane: 'Facilities', step: 'Order badge & desk', t: '1d', waste: '' },
      { lane: 'Manager', step: 'Plan first-day schedule', t: '0.5d', waste: '' },
      { lane: 'Payroll', step: 'Add to payroll', t: '0.5d', waste: '' }
    ]
  },
  {
    title: 'TO-BE — Workflow Automation',
    cycleDays: 1,
    handoffs: 2,
    vaRatio: 70,
    note: 'API-driven orchestration; strategic foundation',
    color: '#43A047',
    steps: [
      { lane: 'HR', step: 'Submit candidate', t: '0.1d', waste: '' },
      { lane: '⚙ Workflow Engine', step: 'Orchestrate parallel API calls (IT, Facilities, Payroll)', t: '0.3d', waste: '' },
      { lane: 'Manager', step: 'Approve schedule', t: '0.4d', waste: '' },
      { lane: 'Workflow Engine', step: 'Notify and finalize', t: '0.2d', waste: '' }
    ]
  }
];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  // Buttons for panel switching
  for (let i = 0; i < 3; i++) {
    const b = createButton(panels[i].title);
    b.position(20 + i * 140, drawHeight + 8);
    b.parent(document.querySelector('main'));
    b.mousePressed(((idx) => () => { activePanel = idx; })(i));
    b.style('background-color', '#1a3a6c');
    b.style('color', 'white');
    b.style('border', 'none');
    b.style('padding', '5px 10px');
    b.style('border-radius', '4px');
    b.style('cursor', 'pointer');
    b.style('font-size', '11px');
    panelBtns.push(b);
  }
  toggleBtn = createButton('Show 8 Wastes');
  toggleBtn.position(450, drawHeight + 8);
  toggleBtn.parent(document.querySelector('main'));
  toggleBtn.mousePressed(() => { showWaste = !showWaste; toggleBtn.html(showWaste ? 'Hide Wastes' : 'Show 8 Wastes'); });
  toggleBtn.style('background-color', '#FF7043');
  toggleBtn.style('color', 'white');
  toggleBtn.style('border', 'none');
  toggleBtn.style('padding', '5px 10px');
  toggleBtn.style('border-radius', '4px');
  toggleBtn.style('cursor', 'pointer');
  toggleBtn.style('font-size', '11px');

  describe('Side-by-side comparison of manual, RPA, and workflow-automation versions of an onboarding process.', LABEL);
}

function draw() {
  updateCanvasSize();
  background('#ffffff');

  // Draw active panel
  const p = panels[activePanel];

  // Title
  noStroke(); fill('#1a3a6c');
  textSize(15); textStyle(BOLD); textAlign(CENTER, TOP);
  text(p.title + ' — Employee Onboarding', canvasWidth / 2, 12);
  textStyle(NORMAL);

  // Cycle-time bar at top
  const barX = 60, barY = 50, barH = 22;
  const maxDays = 9;
  const barW = canvasWidth - 200;
  noFill(); stroke('#90A4AE'); strokeWeight(1);
  rect(barX, barY, barW, barH, 4);
  noStroke(); fill(p.color);
  rect(barX, barY, map(p.cycleDays, 0, maxDays, 0, barW), barH, 4);
  fill('#212121'); textSize(11); textAlign(LEFT, CENTER);
  text('Cycle time: ' + p.cycleDays + ' days', barX, barY - 12);

  // Stats panel right
  fill('#f8f9fa'); noStroke();
  rect(canvasWidth - 130, barY - 18, 120, 90, 4);
  fill('#1a3a6c'); textSize(10); textStyle(BOLD); textAlign(LEFT, TOP);
  text('Stats', canvasWidth - 122, barY - 12);
  textStyle(NORMAL); fill('#212121'); textSize(10);
  text('Cycle: ' + p.cycleDays + 'd', canvasWidth - 122, barY + 4);
  text('Handoffs: ' + p.handoffs, canvasWidth - 122, barY + 18);
  text('VA ratio: ' + p.vaRatio + '%', canvasWidth - 122, barY + 32);
  text('Note: ' + p.note, canvasWidth - 122, barY + 46, 110);

  // Steps as swim lanes
  const stepY = 130;
  const rowH = 50;
  for (let i = 0; i < p.steps.length; i++) {
    const s = p.steps[i];
    const y = stepY + i * rowH;
    // lane label
    fill('#37474F'); textSize(11); textAlign(RIGHT, CENTER);
    text(s.lane, 100, y + rowH / 2);
    // step box
    const boxX = 110, boxW = canvasWidth - 250;
    let boxColor = p.color;
    if (s.lane.includes('Bot')) boxColor = '#FF7043';
    if (s.lane.includes('Workflow')) boxColor = '#43A047';
    fill(boxColor); noStroke();
    rect(boxX, y + 6, boxW, rowH - 16, 6);
    fill('white'); textSize(11); textAlign(LEFT, CENTER); textStyle(BOLD);
    text(s.step, boxX + 12, y + rowH / 2);
    textStyle(NORMAL); textAlign(RIGHT, CENTER);
    text(s.t, boxX + boxW - 12, y + rowH / 2);
    // waste badge
    if (showWaste && s.waste) {
      fill('#C2185B'); noStroke();
      rect(canvasWidth - 130, y + 14, 60, 18, 3);
      fill('white'); textSize(10); textStyle(BOLD); textAlign(CENTER, CENTER);
      text(s.waste, canvasWidth - 100, y + 23);
      textStyle(NORMAL);
    }
    // Arrow down
    if (i < p.steps.length - 1) {
      stroke('#90A4AE'); strokeWeight(1.5); noFill();
      line(boxX + boxW / 2, y + rowH - 10, boxX + boxW / 2, y + rowH);
      noStroke(); fill('#90A4AE');
      triangle(boxX + boxW / 2 - 4, y + rowH - 2, boxX + boxW / 2 + 4, y + rowH - 2, boxX + boxW / 2, y + rowH + 5);
    }
  }
}

function windowResized() { updateCanvasSize(); resizeCanvas(canvasWidth, canvasHeight); }
function updateCanvasSize() {
  const c = document.querySelector('main');
  if (c) canvasWidth = c.offsetWidth;
}
