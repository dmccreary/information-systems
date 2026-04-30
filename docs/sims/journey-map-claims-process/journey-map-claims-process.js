// Journey Map for an Insurance Claims Process - p5.js
// Five stages, five rows (actions, touchpoints, thoughts, emotion, pain/opp)
// CANVAS_HEIGHT: 680

let canvasWidth = 720;
let drawHeight = 620;
let controlHeight = 60;
let canvasHeight = drawHeight + controlHeight;

const stages = ['Incident', 'Report', 'Assess', 'Repair', 'Settle'];

const personas = {
  maria: {
    name: 'Maria (busy parent, mobile-first)',
    actions: ['Pull over after fender-bender', 'Use mobile app', 'Upload photos', 'Drop car at shop', 'Get reimbursement'],
    touch: ['phone', 'app', 'app+text', 'in-person', 'app'],
    thoughts: ['"Is anyone hurt?"', '"Where do I tap?"', '"Am I done?"', '"How long?"', '"Finally."'],
    emotion: [-1, 1, 0, -1, 2], // -3 to 3 scale
    pain: [['shock', 'phone calls'], ['form length'], ['waiting'], ['rental coverage unclear'], ['delay']],
    opp: [['SMS confirm'], ['photo-only intake'], ['proactive status'], ['rental auto-arranged'], ['instant payout']]
  },
  frank: {
    name: 'Frank (retiree, no smartphone)',
    actions: ['Wait for AAA', 'Call agent', 'Wait for adjuster', 'Wait for shop', 'Mail check'],
    touch: ['phone', 'phone', 'in-person', 'in-person', 'mail'],
    thoughts: ['"Where is everyone?"', '"They put me on hold."', '"3-day wait!"', '"Days off work."', '"Two weeks?"'],
    emotion: [-2, -1, -3, -2, -1],
    pain: [['hold time'], ['IVR maze'], ['no online status'], ['phone-only updates'], ['paper check delay']],
    opp: [['callback'], ['agent direct'], ['outbound updates'], ['weekly call'], ['ACH option']]
  }
};

let currentPersona = 'maria';
let showSystems = false;
let hoveredStage = -1;

let personaBtn, sysBtn;

function setup() {
  updateCanvasSize();
  const c = createCanvas(canvasWidth, canvasHeight);
  c.parent(document.querySelector('main'));

  personaBtn = createButton('Switch Persona: Frank');
  personaBtn.position(20, drawHeight + 12);
  personaBtn.parent(document.querySelector('main'));
  personaBtn.mousePressed(() => {
    currentPersona = currentPersona === 'maria' ? 'frank' : 'maria';
    personaBtn.html('Switch Persona: ' + (currentPersona === 'maria' ? 'Frank' : 'Maria'));
  });
  styleBtn(personaBtn, '#1a3a6c');

  sysBtn = createButton('Show Systems');
  sysBtn.position(220, drawHeight + 12);
  sysBtn.parent(document.querySelector('main'));
  sysBtn.mousePressed(() => { showSystems = !showSystems; sysBtn.html(showSystems ? 'Hide Systems' : 'Show Systems'); });
  styleBtn(sysBtn, '#FF7043');

  describe('Customer journey map for an insurance claims process across five stages.', LABEL);
}
function styleBtn(b, bg) { b.style('background-color', bg); b.style('color', 'white'); b.style('border', 'none'); b.style('padding', '6px 10px'); b.style('border-radius', '4px'); b.style('cursor', 'pointer'); b.style('font-size', '11px'); }

function draw() {
  updateCanvasSize();
  background('#fafbfc');

  noStroke(); fill('#1a3a6c');
  textSize(15); textStyle(BOLD); textAlign(CENTER, TOP);
  text('Insurance Claims Journey Map — ' + personas[currentPersona].name, canvasWidth / 2, 12);
  textStyle(NORMAL);

  const colW = (canvasWidth - 100) / stages.length;
  const xStart = 90;

  // Stage header row
  for (let i = 0; i < stages.length; i++) {
    const x = xStart + i * colW;
    const dim = hoveredStage >= 0 && hoveredStage !== i ? 0.4 : 1;
    fill(`rgba(67, 160, 71, ${dim})`);
    rect(x + 4, 50, colW - 8, 30, 5);
    fill(`rgba(255, 255, 255, ${dim})`);
    noStroke(); textSize(12); textStyle(BOLD); textAlign(CENTER, CENTER);
    text(stages[i], x + colW / 2, 65);
    textStyle(NORMAL);
  }

  // Hover tracking
  if (mouseY > 50 && mouseY < drawHeight - 30 && mouseX > xStart) {
    hoveredStage = Math.floor((mouseX - xStart) / colW);
    if (hoveredStage >= stages.length) hoveredStage = -1;
  } else hoveredStage = -1;

  // Row labels
  const rowY = [110, 180, 250, 350, 470, 540];
  const rowLabels = ['Actions', 'Touchpoints', 'Thoughts', 'Emotion', 'Pain / Opportunity'];
  for (let i = 0; i < rowLabels.length; i++) {
    fill('#37474F'); noStroke(); textSize(10); textStyle(BOLD); textAlign(RIGHT, TOP);
    text(rowLabels[i], 80, rowY[i] - 4);
    textStyle(NORMAL);
  }

  const p = personas[currentPersona];

  // Row 1: Actions
  for (let i = 0; i < 5; i++) {
    const x = xStart + i * colW;
    const dim = hoveredStage >= 0 && hoveredStage !== i ? 0.3 : 1;
    fill(`rgba(120, 144, 156, ${dim})`); noStroke();
    rect(x + 4, rowY[0], colW - 8, 50, 4);
    fill(`rgba(255, 255, 255, ${dim})`); textSize(10); textAlign(CENTER, CENTER);
    text(p.actions[i], x + colW / 2, rowY[0] + 25, colW - 16);
  }
  // Row 2: Touchpoints
  for (let i = 0; i < 5; i++) {
    const x = xStart + i * colW;
    const dim = hoveredStage >= 0 && hoveredStage !== i ? 0.3 : 1;
    fill(`rgba(33, 150, 243, ${dim})`); noStroke();
    rect(x + 4, rowY[1], colW - 8, 50, 4);
    fill(`rgba(255, 255, 255, ${dim})`); textSize(10); textAlign(CENTER, CENTER);
    text(p.touch[i], x + colW / 2, rowY[1] + 25);
  }
  // Row 3: Thoughts
  for (let i = 0; i < 5; i++) {
    const x = xStart + i * colW;
    const dim = hoveredStage >= 0 && hoveredStage !== i ? 0.3 : 1;
    fill(`rgba(255, 248, 225, ${dim})`); stroke(`rgba(245, 124, 0, ${dim})`); strokeWeight(1);
    rect(x + 8, rowY[2] + 4, colW - 16, 70, 8);
    fill(`rgba(33, 33, 33, ${dim})`); noStroke();
    textSize(10); textStyle(ITALIC); textAlign(CENTER, CENTER);
    text(p.thoughts[i], x + colW / 2, rowY[2] + 38, colW - 24);
    textStyle(NORMAL);
  }
  // Row 4: Emotion curve
  stroke('#FF7043'); strokeWeight(3); noFill();
  beginShape();
  for (let i = 0; i < 5; i++) {
    const x = xStart + i * colW + colW / 2;
    const y = rowY[3] + 60 - p.emotion[i] * 16;
    vertex(x, y);
  }
  endShape();
  // Markers
  for (let i = 0; i < 5; i++) {
    const x = xStart + i * colW + colW / 2;
    const y = rowY[3] + 60 - p.emotion[i] * 16;
    noStroke();
    fill(p.emotion[i] >= 0 ? '#43A047' : '#C2185B');
    circle(x, y, 14);
    fill('white'); textSize(10); textStyle(BOLD); textAlign(CENTER, CENTER);
    text(p.emotion[i] >= 0 ? '☺' : '☹', x, y);
    textStyle(NORMAL);
  }
  // Emotion baseline
  stroke('#90A4AE'); strokeWeight(1);
  drawingContext.setLineDash([4, 4]);
  line(xStart, rowY[3] + 60, canvasWidth - 20, rowY[3] + 60);
  drawingContext.setLineDash([]);

  // Row 5: Pain / Opportunity chips
  for (let i = 0; i < 5; i++) {
    const x = xStart + i * colW;
    const dim = hoveredStage >= 0 && hoveredStage !== i ? 0.3 : 1;
    let cy = rowY[4] + 4;
    p.pain[i].forEach(t => {
      fill(`rgba(194, 24, 91, ${dim})`); noStroke();
      rect(x + 8, cy, colW - 16, 18, 9);
      fill('white'); textSize(9); textAlign(CENTER, CENTER); textStyle(BOLD);
      text('✕ ' + t, x + colW / 2, cy + 9);
      textStyle(NORMAL);
      cy += 22;
    });
    p.opp[i].forEach(t => {
      fill(`rgba(67, 160, 71, ${dim})`); noStroke();
      rect(x + 8, cy, colW - 16, 18, 9);
      fill('white'); textSize(9); textAlign(CENTER, CENTER); textStyle(BOLD);
      text('+ ' + t, x + colW / 2, cy + 9);
      textStyle(NORMAL);
      cy += 22;
    });
  }

  // Systems overlay
  if (showSystems) {
    const sysList = ['Telephony / IVR', 'Mobile claims app', 'CRM + claims hub', 'Body-shop network', 'Payment gateway'];
    for (let i = 0; i < 5; i++) {
      const x = xStart + i * colW;
      fill(255, 255, 255, 240); stroke('#26A69A'); strokeWeight(2);
      rect(x + 6, rowY[1] + 50, colW - 12, 24, 4);
      fill('#26A69A'); noStroke();
      textSize(9); textStyle(BOLD); textAlign(CENTER, CENTER);
      text(sysList[i], x + colW / 2, rowY[1] + 62);
      textStyle(NORMAL);
    }
  }
}

function windowResized() { updateCanvasSize(); resizeCanvas(canvasWidth, canvasHeight); }
function updateCanvasSize() {
  const c = document.querySelector('main');
  if (c) canvasWidth = c.offsetWidth;
}
