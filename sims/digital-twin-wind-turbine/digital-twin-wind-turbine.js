// Digital Twin of a Wind Turbine - p5.js
// Physical turbine on left, digital twin dials on right, wind-speed slider drives both
// CANVAS_HEIGHT: 660

let canvasWidth = 720;
let drawHeight = 580;
let controlHeight = 80;
let canvasHeight = drawHeight + controlHeight;

let bladeAngle = 0;
let windSpeed = 8; // m/s
let predictMode = false;
let predictDay = 0;
let lastPredictTick = 0;
let vibration = 1.0;
let showDataPath = false;
let windSlider, predictBtn, dataBtn;

function setup() {
  updateCanvasSize();
  const c = createCanvas(canvasWidth, canvasHeight);
  c.parent(document.querySelector('main'));

  windSlider = createSlider(0, 25, 8, 1);
  windSlider.position(140, drawHeight + 12);
  windSlider.style('width', '200px');
  windSlider.parent(document.querySelector('main'));

  predictBtn = createButton('Predict Bearing Failure');
  predictBtn.position(360, drawHeight + 8);
  predictBtn.parent(document.querySelector('main'));
  predictBtn.mousePressed(() => { predictMode = true; predictDay = 0; vibration = 1.0; });
  styleBtn(predictBtn, '#C2185B');

  dataBtn = createButton('Show Data Path');
  dataBtn.position(20, drawHeight + 44);
  dataBtn.parent(document.querySelector('main'));
  dataBtn.mousePressed(() => { showDataPath = !showDataPath; dataBtn.html(showDataPath ? 'Hide Data Path' : 'Show Data Path'); });
  styleBtn(dataBtn, '#26A69A');

  describe('Digital twin of a wind turbine with live data dials and a predictive-maintenance demo.', LABEL);
}
function styleBtn(b, bg) { b.style('background-color', bg); b.style('color', 'white'); b.style('border', 'none'); b.style('padding', '6px 10px'); b.style('border-radius', '4px'); b.style('cursor', 'pointer'); b.style('font-size', '11px'); }

function draw() {
  updateCanvasSize();
  background('#fafbfc');

  windSpeed = windSlider.value();
  bladeAngle += windSpeed * 0.04; // rotation speed proportional to wind

  // Title
  noStroke(); fill('#1a3a6c');
  textSize(15); textStyle(BOLD); textAlign(CENTER, TOP);
  text('Digital Twin — Wind Turbine', canvasWidth / 2, 12);
  textStyle(NORMAL);

  // Physical turbine (left)
  drawTurbine(canvasWidth * 0.25, drawHeight * 0.45);

  // Digital twin dials (right)
  drawTwin(canvasWidth * 0.7, drawHeight * 0.45);

  // Bidirectional arrows in middle
  drawDataFlow();

  // Predict simulation
  if (predictMode) {
    if (millis() - lastPredictTick > 400) {
      predictDay++;
      vibration += 0.4 + random(-0.1, 0.2);
      lastPredictTick = millis();
      if (predictDay >= 14) {
        predictMode = false;
      }
    }
  }

  // Bottom labels
  fill('#1a3a6c'); noStroke(); textSize(11);
  textAlign(LEFT, CENTER);
  text('Wind speed: ' + windSpeed + ' m/s', 20, drawHeight + 22);

  // Data path overlay
  if (showDataPath) {
    push();
    fill(255, 255, 255, 235); stroke('#26A69A'); strokeWeight(2);
    rect(40, drawHeight - 130, canvasWidth - 80, 110, 8);
    fill('#1a3a6c'); noStroke(); textSize(11); textStyle(BOLD); textAlign(LEFT, TOP);
    text('Data Path Behind the Twin:', 50, drawHeight - 122);
    textStyle(NORMAL); textSize(10); fill('#212121');
    text('Sensors (50+ on a turbine) → Edge Gateway (aggregates 1Hz to 1min)', 50, drawHeight - 100);
    text('→ Time-Series DB (cloud) → Twin Model (physics + ML) → Dashboard', 50, drawHeight - 84);
    text('A bidirectional control channel sends pitch/yaw commands back to the SCADA system.', 50, drawHeight - 60);
    pop();
  }
}

function drawTurbine(cx, cy) {
  // Tower
  fill('#90A4AE'); stroke('#37474F'); strokeWeight(1);
  rect(cx - 8, cy - 80, 16, 200, 2);
  // Nacelle
  fill('#90A4AE'); rect(cx - 25, cy - 105, 50, 30, 6);
  // Blades
  push();
  translate(cx, cy - 90);
  rotate(bladeAngle);
  for (let i = 0; i < 3; i++) {
    push();
    rotate(i * TWO_PI / 3);
    fill('#43A047'); stroke('#1B5E20'); strokeWeight(1);
    triangle(0, 0, 60, -3, 60, 3);
    pop();
  }
  // Hub
  fill('#37474F'); circle(0, 0, 10);
  pop();
  // Ground
  fill('#9E9E9E'); noStroke();
  rect(cx - 80, cy + 120, 160, 6);
  // Label
  fill('#37474F'); noStroke(); textSize(10); textAlign(CENTER, TOP);
  text('Physical Turbine', cx, cy + 130);
}

function drawTwin(cx, cy) {
  // Wireframe outline
  noFill(); stroke('#43A047'); strokeWeight(2);
  rect(cx - 130, cy - 130, 260, 280, 8);
  fill('#1a3a6c'); noStroke(); textSize(11); textStyle(BOLD); textAlign(CENTER, TOP);
  text('Digital Twin', cx, cy - 122);
  textStyle(NORMAL);

  // Dials
  const rpm = 5 + windSpeed * 0.8;
  const temp = 25 + windSpeed * 1.4 + (predictMode ? predictDay * 0.5 : 0);
  const vib = predictMode ? vibration : 0.8 + random(-0.1, 0.1);
  const pitch = constrain(map(windSpeed, 0, 25, 0, 30), 0, 30);

  drawDial(cx - 70, cy - 60, 'RPM', rpm.toFixed(1), 0, 25, '#43A047');
  drawDial(cx + 60, cy - 60, 'Temp °C', temp.toFixed(0), 0, 80, temp > 60 ? '#C2185B' : '#43A047');
  drawDial(cx - 70, cy + 50, 'Vibration', vib.toFixed(2), 0, 10, vib > 5 ? '#C2185B' : '#43A047');
  drawDial(cx + 60, cy + 50, 'Pitch°', pitch.toFixed(1), 0, 30, '#43A047');

  // Maintenance alert
  if (vib > 4) {
    fill('#C2185B'); stroke('white'); strokeWeight(2);
    rect(cx - 100, cy + 110, 200, 28, 5);
    fill('white'); noStroke(); textSize(11); textStyle(BOLD); textAlign(CENTER, CENTER);
    text('⚠ Maintenance alert: Day ' + predictDay, cx, cy + 124);
    textStyle(NORMAL);
  }
}

function drawDial(x, y, label, val, mn, mx, col) {
  fill('#fafbfc'); stroke('#43A047'); strokeWeight(1.5);
  arc(x, y, 70, 70, PI, TWO_PI, OPEN);
  // Needle
  const v = parseFloat(val);
  const ang = map(v, mn, mx, PI, TWO_PI);
  stroke(col); strokeWeight(2);
  line(x, y, x + cos(ang) * 28, y + sin(ang) * 28);
  noStroke(); fill('#37474F');
  textSize(9); textAlign(CENTER, TOP); textStyle(BOLD);
  text(val, x, y + 4);
  text(label, x, y + 16);
  textStyle(NORMAL);
}

function drawDataFlow() {
  const startX = canvasWidth * 0.42;
  const endX = canvasWidth * 0.58;
  const y = drawHeight * 0.45;
  // To twin (sensor data)
  stroke('#FF7043'); strokeWeight(2); fill('#FF7043');
  drawArrow(startX, y - 20, endX, y - 20);
  noStroke(); textSize(10); textAlign(CENTER, BOTTOM);
  text('sensor data', (startX + endX) / 2, y - 24);
  // From twin (control)
  stroke('#26A69A'); strokeWeight(2); fill('#26A69A');
  drawArrow(endX, y + 20, startX, y + 20);
  noStroke(); textSize(10);
  text('control commands', (startX + endX) / 2, y + 36);
}

function drawArrow(x1, y1, x2, y2) {
  line(x1, y1, x2, y2);
  push();
  translate(x2, y2);
  rotate(atan2(y2 - y1, x2 - x1));
  triangle(0, 0, -8, -4, -8, 4);
  pop();
}

function windowResized() { updateCanvasSize(); resizeCanvas(canvasWidth, canvasHeight); }
function updateCanvasSize() {
  const c = document.querySelector('main');
  if (c) canvasWidth = c.offsetWidth;
}
