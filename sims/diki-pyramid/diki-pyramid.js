// DIKI Hierarchy Pyramid MicroSim
// Visualizes Data -> Information -> Knowledge -> Insight using a hospital-patient scenario
// CANVAS_HEIGHT: 600

let canvasWidth = 720;
let drawHeight = 500;
let controlHeight = 100;
let canvasHeight = drawHeight + controlHeight;

let mouseOverCanvas = false;
let pulsePhase = 0;
let selectedLayer = -1;
let hoveredLayer = -1;

let pyramidTopX, pyramidTopY;
let pyramidBaseWidth;
let levelHeight;

// Index 0 = bottom (Data), Index 3 = top (Insight)
const layers = [
  {
    name: "Data",
    color: "#DCE8F4",
    hoverColor: "#B0C4DE",
    border: "#7A93B5",
    headerText: "#1a3a6c",
    definition: "Raw, unprocessed facts without context: a number, a symbol, a reading.",
    example: "98.6",
    question: "What was measured?"
  },
  {
    name: "Information",
    color: "#B2DFDB",
    hoverColor: "#4DB6AC",
    border: "#00897B",
    headerText: "#004D40",
    definition: "Data placed in context: who, what, when, and where.",
    example: "Patient Marisol Chen, oral temperature 98.6°F, 14:32 on April 28.",
    question: "What does it describe?"
  },
  {
    name: "Knowledge",
    color: "#A5D6A7",
    hoverColor: "#66BB6A",
    border: "#2E7D32",
    headerText: "#1B5E20",
    definition: "Patterns and rules derived from information that support decisions.",
    example: "Marisol's six consecutive normal readings indicate she meets the discharge criterion.",
    question: "What rule does it support?"
  },
  {
    name: "Insight",
    color: "#FFE082",
    hoverColor: "#FFB300",
    border: "#E65100",
    headerText: "#5D4037",
    definition: "An actionable, often non-obvious finding distilled from knowledge.",
    example: "Patients matching Marisol's discharge profile have a 15% higher 72-hour readmission rate when transportation is not pre-confirmed before 3pm.",
    question: "What action should we take?"
  }
];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  canvas.mouseOver(() => mouseOverCanvas = true);
  canvas.mouseOut(() => mouseOverCanvas = false);

  textFont('Arial');

  describe(
    "Interactive four-level DIKI Hierarchy pyramid showing Data, Information, Knowledge, and Insight. " +
    "Hover or tap a layer to see a definition and a hospital-patient example. Click to pin the callout open.",
    LABEL
  );
}

function draw() {
  updateCanvasSize();

  // Backgrounds
  noStroke();
  fill('#fafbfc');
  rect(0, 0, canvasWidth, drawHeight);
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);

  if (mouseOverCanvas) {
    pulsePhase += 0.03;
  }

  // Layout
  pyramidTopY = 70;
  pyramidBaseWidth = min(canvasWidth * 0.45, 350);
  pyramidTopX = pyramidBaseWidth / 2 + 50;
  levelHeight = (drawHeight - pyramidTopY - 80) / 4;

  // Title
  fill('#1a3a6c');
  noStroke();
  textSize(20);
  textStyle(BOLD);
  textAlign(CENTER, TOP);
  text("DIKI Hierarchy", canvasWidth / 2, 12);
  textStyle(NORMAL);
  fill('#666');
  textSize(12);
  text("From raw facts to actionable insight", canvasWidth / 2, 38);

  drawSideArrows();

  for (let i = 0; i < 4; i++) {
    drawLayer(i);
  }

  let display = selectedLayer >= 0 ? selectedLayer : hoveredLayer;
  drawCallout(display);

  drawFooter();
}

function drawLayer(layerIndex) {
  let layer = layers[layerIndex];
  let baseY = drawHeight - 70;
  let y = baseY - (layerIndex + 1) * levelHeight;
  let nextY = y + levelHeight;

  let topRatio = (4 - layerIndex - 1) / 4;
  let botRatio = (4 - layerIndex) / 4;
  let topWidth = pyramidBaseWidth * topRatio;
  let botWidth = pyramidBaseWidth * botRatio;

  let tl = pyramidTopX - topWidth / 2;
  let tr = pyramidTopX + topWidth / 2;
  let bl = pyramidTopX - botWidth / 2;
  let br = pyramidTopX + botWidth / 2;

  let isHovered = isMouseOverLayer(layerIndex);
  let isSelected = selectedLayer === layerIndex;

  let fillColor;
  if (isSelected) {
    fillColor = color(layer.hoverColor);
  } else if (isHovered) {
    let pulse = sin(pulsePhase * 2) * 0.5 + 0.5;
    fillColor = lerpColor(color(layer.color), color(layer.hoverColor), pulse * 0.5 + 0.3);
  } else {
    fillColor = color(layer.color);
  }

  fill(fillColor);
  stroke(layer.border);
  strokeWeight(isHovered || isSelected ? 2 : 1);

  beginShape();
  vertex(tl, y);
  vertex(tr, y);
  vertex(br, nextY);
  vertex(bl, nextY);
  endShape(CLOSE);

  // Label
  fill(layer.headerText);
  noStroke();
  textSize(layerIndex === 3 ? 13 : 16);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text(layer.name, pyramidTopX, y + levelHeight / 2);
  textStyle(NORMAL);

  if (isHovered) {
    hoveredLayer = layerIndex;
  }
}

function isMouseOverLayer(layerIndex) {
  let baseY = drawHeight - 70;
  let y = baseY - (layerIndex + 1) * levelHeight;
  let nextY = y + levelHeight;

  if (mouseY < y || mouseY > nextY) return false;

  let t = (mouseY - y) / levelHeight;
  let topRatio = (4 - layerIndex - 1) / 4;
  let botRatio = (4 - layerIndex) / 4;
  let widthAt = lerp(pyramidBaseWidth * topRatio, pyramidBaseWidth * botRatio, t);

  let leftEdge = pyramidTopX - widthAt / 2;
  let rightEdge = pyramidTopX + widthAt / 2;

  return mouseX >= leftEdge && mouseX <= rightEdge;
}

function drawSideArrows() {
  let arrowTopY = pyramidTopY + 10;
  let arrowBottomY = drawHeight - 80;

  // Left arrow: more volume / less context (pointing down)
  let leftX = pyramidTopX - pyramidBaseWidth / 2 - 22;
  stroke('#888');
  strokeWeight(2);
  line(leftX, arrowTopY, leftX, arrowBottomY);
  fill('#888');
  noStroke();
  triangle(leftX, arrowBottomY + 8, leftX - 5, arrowBottomY - 4, leftX + 5, arrowBottomY - 4);

  push();
  translate(leftX - 12, (arrowTopY + arrowBottomY) / 2);
  rotate(-HALF_PI);
  textAlign(CENTER, CENTER);
  textSize(11);
  fill('#555');
  text("More volume / less context", 0, 0);
  pop();

  // Right arrow: more context / more value (pointing up)
  let rightX = pyramidTopX + pyramidBaseWidth / 2 + 22;
  stroke('#888');
  strokeWeight(2);
  line(rightX, arrowTopY, rightX, arrowBottomY);
  fill('#888');
  noStroke();
  triangle(rightX, arrowTopY - 8, rightX - 5, arrowTopY + 4, rightX + 5, arrowTopY + 4);

  push();
  translate(rightX + 12, (arrowTopY + arrowBottomY) / 2);
  rotate(HALF_PI);
  textAlign(CENTER, CENTER);
  textSize(11);
  fill('#555');
  text("More context / more value", 0, 0);
  pop();
}

function drawCallout(layerIndex) {
  let pX = pyramidTopX + pyramidBaseWidth / 2 + 50;
  let pY = pyramidTopY + 10;
  let pW = canvasWidth - pX - 15;
  let pH = drawHeight - pY - 90;

  if (pW < 160) {
    return;
  }

  fill(255, 255, 255, 245);
  stroke('#ccc');
  strokeWeight(1);
  rect(pX, pY, pW, pH, 8);

  if (layerIndex < 0) {
    fill('#888');
    noStroke();
    textSize(13);
    textAlign(CENTER, CENTER);
    textStyle(ITALIC);
    text(
      "Hover any layer of the pyramid to see what it looks like for one real patient.",
      pX + 15, pY + 15, pW - 30, pH - 30
    );
    textStyle(NORMAL);
    return;
  }

  let layer = layers[layerIndex];

  // Header bar
  fill(layer.hoverColor);
  noStroke();
  rect(pX, pY, pW, 32, 8, 8, 0, 0);
  fill(layer.headerText);
  textAlign(LEFT, CENTER);
  textSize(15);
  textStyle(BOLD);
  text(layer.name, pX + 12, pY + 16);
  textStyle(NORMAL);

  let cx = pX + 12;
  let cy = pY + 44;
  let cw = pW - 24;

  fill('#333');
  textAlign(LEFT, TOP);
  textSize(12);
  textStyle(BOLD);
  text("Definition", cx, cy);
  textStyle(NORMAL);
  cy += 16;
  fill('#555');
  text(layer.definition, cx, cy, cw, 56);
  cy += 56;

  fill('#333');
  textStyle(BOLD);
  textSize(12);
  text("Hospital example", cx, cy);
  textStyle(NORMAL);
  cy += 16;
  fill('#555');
  textSize(11);
  text('"' + layer.example + '"', cx, cy, cw, 100);
  cy += 100;

  fill('#888');
  textStyle(ITALIC);
  textSize(11);
  text(layer.question, cx, cy, cw);
  textStyle(NORMAL);
}

function drawFooter() {
  // Headline below pyramid
  fill('#1a3a6c');
  noStroke();
  textSize(13);
  textStyle(BOLD);
  textAlign(CENTER, TOP);
  text("Most IS projects fail at a layer transition.", canvasWidth / 2, drawHeight + 10);
  textStyle(NORMAL);
  fill('#444');
  textSize(13);
  text("Which layer are you actually serving?", canvasWidth / 2, drawHeight + 30);

  // Small footer note about DIKW vs DIKI
  fill('#888');
  textStyle(ITALIC);
  textSize(10);
  textAlign(CENTER, TOP);
  text(
    "Older texts call this the DIKW Hierarchy with Wisdom at the top; modern practice prefers Insight — it names a deliverable, not a virtue.",
    20, drawHeight + 60, canvasWidth - 40, 40
  );
  textStyle(NORMAL);
}

function mousePressed() {
  if (mouseY > drawHeight) return;
  for (let i = 0; i < 4; i++) {
    if (isMouseOverLayer(i)) {
      selectedLayer = (selectedLayer === i) ? -1 : i;
      return;
    }
  }
  selectedLayer = -1;
}

function mouseMoved() {
  hoveredLayer = -1;
  for (let i = 0; i < 4; i++) {
    if (isMouseOverLayer(i)) {
      hoveredLayer = i;
      break;
    }
  }
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);
}

function updateCanvasSize() {
  const container = document.querySelector('main');
  if (container) {
    canvasWidth = container.offsetWidth;
  }
}
