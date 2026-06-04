// CI/CD Pipeline - p5.js
// Horizontal pipeline with run-through animation
// CANVAS_HEIGHT: 540

let canvasWidth = 720;
let drawHeight = 420;
let controlHeight = 120;
let canvasHeight = drawHeight + controlHeight;

const stages = [
  { name: 'Commit', artifact: 'commit SHA' },
  { name: 'Build', artifact: 'binary' },
  { name: 'Unit Tests', artifact: 'test report' },
  { name: 'Integration', artifact: 'API contract' },
  { name: 'Static Analysis', artifact: 'lint report' },
  { name: 'Security Scan', artifact: 'CVE report' },
  { name: 'Deploy Staging', artifact: 'manifest' },
  { name: 'Smoke Tests', artifact: 'smoke results' },
  { name: 'Deploy Prod', artifact: 'release tag' }
];

let runState = []; // each entry: 'pending' | 'running' | 'pass' | 'fail'
let activeIdx = -1;
let lastTick = 0;
let cdMode = true; // continuous delivery (manual gate)
let injectFailAt = -1;

let runBtn, gateBtn, failSel, resetBtn;

function setup() {
  updateCanvasSize();
  const c = createCanvas(canvasWidth, canvasHeight);
  c.parent(document.querySelector('main'));
  resetRun();

  runBtn = createButton('Trigger Commit ▶');
  runBtn.position(20, drawHeight + 12);
  runBtn.parent(document.querySelector('main'));
  runBtn.mousePressed(triggerRun);
  styleBtn(runBtn, '#1a3a6c');

  gateBtn = createButton('CD: Continuous Delivery (manual gate)');
  gateBtn.position(170, drawHeight + 12);
  gateBtn.parent(document.querySelector('main'));
  gateBtn.mousePressed(() => {
    cdMode = !cdMode;
    gateBtn.html(cdMode ? 'CD: Continuous Delivery (manual gate)' : 'CD: Continuous Deployment (no gate)');
  });
  styleBtn(gateBtn, '#FF7043');

  failSel = createSelect();
  failSel.position(20, drawHeight + 50);
  failSel.parent(document.querySelector('main'));
  failSel.option('— inject failure: none —', '-1');
  stages.forEach((s, i) => failSel.option('Fail at ' + s.name, String(i)));
  failSel.changed(() => injectFailAt = parseInt(failSel.value(), 10));

  resetBtn = createButton('Reset');
  resetBtn.position(450, drawHeight + 12);
  resetBtn.parent(document.querySelector('main'));
  resetBtn.mousePressed(resetRun);
  styleBtn(resetBtn, '#90A4AE');

  describe('Animated CI/CD pipeline that walks through canonical stages.', LABEL);
}
function styleBtn(b, bg) { b.style('background-color', bg); b.style('color', 'white'); b.style('border', 'none'); b.style('padding', '6px 10px'); b.style('border-radius', '4px'); b.style('cursor', 'pointer'); b.style('font-size', '11px'); }

function resetRun() {
  runState = stages.map(() => 'pending');
  activeIdx = -1;
}
function triggerRun() {
  resetRun();
  activeIdx = 0;
  runState[0] = 'running';
  lastTick = millis();
}

function draw() {
  updateCanvasSize();
  background('#fafbfc');
  noStroke(); fill('#1a3a6c');
  textSize(15); textStyle(BOLD); textAlign(CENTER, TOP);
  text('CI/CD Pipeline', canvasWidth / 2, 12);
  textStyle(NORMAL);

  // Advance pipeline if running
  if (activeIdx >= 0 && millis() - lastTick > 700) {
    if (runState[activeIdx] === 'running') {
      // Decide pass/fail
      if (injectFailAt === activeIdx) {
        runState[activeIdx] = 'fail';
        activeIdx = -2; // halt
      } else {
        runState[activeIdx] = 'pass';
        // Production gate
        if (cdMode && stages[activeIdx].name === 'Smoke Tests') {
          // pause for manual approval
          activeIdx = -3;
        } else if (activeIdx + 1 < stages.length) {
          activeIdx++;
          runState[activeIdx] = 'running';
        } else {
          activeIdx = -1;
        }
      }
      lastTick = millis();
    }
  }

  // Draw pipeline
  const padX = 30;
  const stageW = (canvasWidth - 2 * padX) / stages.length;
  const stageY = 80;
  const stageH = 60;
  for (let i = 0; i < stages.length; i++) {
    const x = padX + i * stageW;
    const y = stageY;
    let bg = '#90A4AE', border = '#37474F', txt = 'white';
    if (runState[i] === 'pass') { bg = '#43A047'; border = '#1B5E20'; }
    else if (runState[i] === 'fail') { bg = '#C2185B'; border = '#7F0000'; }
    else if (runState[i] === 'running') {
      const pulse = 0.5 + 0.5 * sin(frameCount * 0.2);
      bg = lerpColor(color('#FFA000'), color('#FFC107'), pulse);
      border = '#E65100';
    }
    fill(bg); stroke(border); strokeWeight(runState[i] === 'running' ? 3 : 1.5);
    rect(x + 4, y, stageW - 8, stageH, 6);
    fill(txt); noStroke();
    textSize(10); textStyle(BOLD); textAlign(CENTER, CENTER);
    text(stages[i].name, x + stageW / 2, y + 22);
    textStyle(NORMAL); textSize(9);
    text(stages[i].artifact, x + stageW / 2, y + 42);
    // Arrow
    if (i < stages.length - 1) {
      stroke('#90A4AE'); strokeWeight(2); noFill();
      line(x + stageW - 4, y + stageH / 2, x + stageW + 4, y + stageH / 2);
      noStroke(); fill('#90A4AE');
      triangle(x + stageW + 4, y + stageH / 2, x + stageW - 1, y + stageH / 2 - 4, x + stageW - 1, y + stageH / 2 + 4);
    }
  }

  // Developer + users icons
  fill('#1976D2'); noStroke();
  textAlign(CENTER, CENTER); textSize(20);
  text('👨‍💻', 18, stageY + stageH / 2);
  textSize(10); fill('#37474F'); text('dev', 18, stageY + stageH + 8);
  textSize(20); fill('#1976D2');
  text('👥', canvasWidth - 18, stageY + stageH / 2);
  textSize(10); fill('#37474F'); text('users', canvasWidth - 18, stageY + stageH + 8);

  // Status
  fill('#37474F'); noStroke();
  textAlign(LEFT, TOP); textSize(11);
  let status = 'Idle. Click Trigger Commit.';
  if (activeIdx >= 0) status = '⏳ Running ' + stages[activeIdx].name + '...';
  else if (activeIdx === -2) status = '❌ Pipeline halted at ' + stages[runState.indexOf('fail')].name + '. Fix and re-run.';
  else if (activeIdx === -3) status = '⏸ Awaiting manual approval to deploy to production (CD mode).';
  else if (runState[runState.length - 1] === 'pass') status = '✅ Deployed successfully.';
  text('Status: ' + status, 30, 170);

  // Mode line
  textSize(10); fill('#555');
  text('Mode: ' + (cdMode ? 'Continuous Delivery (manual approval before prod)' : 'Continuous Deployment (auto-deploy)'), 30, 188);

  // If awaiting approval, show approve button text
  if (activeIdx === -3) {
    fill('#1a3a6c'); textSize(11); textStyle(BOLD);
    text('Click anywhere on the canvas to approve & deploy.', 30, 220);
    textStyle(NORMAL);
  }

  // Inject failure note
  if (injectFailAt >= 0) {
    fill('#C2185B'); textSize(10);
    text('Failure injection: ' + stages[injectFailAt].name, 30, 240);
  }

  // Footer slider labels
  fill('#212121'); textSize(11);
  text('Inject failure:', 20, drawHeight + 90);
}

function mousePressed() {
  if (activeIdx === -3) {
    runState[runState.length - 1] = 'running';
    activeIdx = stages.length - 1;
    lastTick = millis();
  }
}

function windowResized() { updateCanvasSize(); resizeCanvas(canvasWidth, canvasHeight); }
function updateCanvasSize() {
  const c = document.querySelector('main');
  if (c) canvasWidth = c.offsetWidth;
}
