// Knowledge Triangle MicroSim
// Demonstrates the three layers of data transformation:
// Data Layer -> Information Layer -> Knowledge Layer

// Canvas dimensions - REQUIRED structure
let canvasWidth = 600;
let drawHeight = 500;
let controlHeight = 0; // no controls, just clicks on the canvas itself
let canvasHeight = drawHeight + controlHeight;
let margin = 25;
let defaultTextSize = 16;

// Triangle dimensions
let triangleBase;
let triangleHeight;
let triangleTop;
let triangleBottom;

// Layer boundaries (y-coordinates)
let dataLayerTop;
let infoLayerTop;
let knowledgeLayerTop;

// Hover state
let hoveredLayer = null; // 'data', 'info', 'knowledge', or null

// Data for each layer
let dataChars = [];
let factCircles = [];
let knowledgeNodes = [];
let knowledgeEdges = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  // Calculate triangle dimensions
  calculateTriangle();

  // Generate random data for each layer
  generateDataLayer();
  generateInfoLayer();
  generateKnowledgeLayer();

  describe('Knowledge Triangle visualization showing three layers: Data (binary), Information (facts), and Knowledge (connected graph)');
}

function draw() {
  updateCanvasSize();

  // Fill the drawing area with aliceblue background
  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, width, drawHeight);
  noStroke()

  // Draw the three layers
  drawDataLayer();
  drawInfoLayer();
  drawKnowledgeLayer();

  // Draw triangle outlines
  drawTriangleOutlines();

  // Place the title at the base of the knowledge layer
  fill('black');
  textSize(36);
  textAlign(CENTER, BOTTOM);
  noStroke();
  text('Knowledge Triangle', canvasWidth/2, margin*2);

  // Reset text settings
  textAlign(LEFT, CENTER);
  textSize(defaultTextSize);

  // Check for hover and draw infobox
  checkHover();
  drawInfoBox();
}

function calculateTriangle() {
  triangleBase = canvasWidth - 2 * margin;
  triangleHeight = drawHeight - 80; // Leave room for title
  triangleTop = 60;
  triangleBottom = triangleTop + triangleHeight;

  // Each layer is 1/3 of the triangle height
  knowledgeLayerTop = triangleTop;
  infoLayerTop = triangleTop + triangleHeight / 3;
  dataLayerTop = triangleTop + 2 * triangleHeight / 3;
}

function generateDataLayer() {
  // Fixed grid of 0s and 1s — raw disk bytes with no semantics.
  // Each row is laid out at uniform x positions; the triangle clip in
  // drawDataLayer() trims rows that extend past the triangle edges, so
  // upper rows naturally render shorter than lower rows.
  dataChars = [];
  let charSpacing = 9;
  let rowSpacing = 14;
  let xStart = margin + 6;
  let xEnd = canvasWidth - margin - 6;

  for (let y = dataLayerTop + rowSpacing; y < triangleBottom - 4; y += rowSpacing) {
    for (let x = xStart; x <= xEnd; x += charSpacing) {
      dataChars.push({
        char: random() > 0.5 ? '1' : '0',
        x: x,
        y: y
      });
    }
  }
}

function generateInfoLayer() {
  // Place fact circles inside the info-layer trapezoid using rejection
  // sampling so circles do not overlap each other. If a circle can't be
  // placed after maxAttempts, it is skipped — fewer circles is better
  // than overlap.
  factCircles = [];
  let numFacts = 12;
  let colors = ['#FFB6C1', '#87CEEB', '#98FB98', '#DDA0DD', '#F0E68C', '#FFE4B5'];
  let radius = 12;
  let minSeparation = radius * 2 + 6;
  let maxAttempts = 250;
  let centerX = canvasWidth / 2;

  // Reserve the area under the "Information Layer" label so circles
  // don't get hidden behind it. Mirrors the label sizing in drawInfoLayer.
  textSize(20);
  let labelY = infoLayerTop + (dataLayerTop - infoLayerTop) / 2;
  let labelHalfW = (textWidth('Information Layer') + 24) / 2 + radius + 4;
  let labelHalfH = 16 + radius + 4;

  for (let i = 0; i < numFacts; i++) {
    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      let y = random(infoLayerTop + 5, dataLayerTop - 8);
      let triangleWidthAtY = getTriangleWidthAtY(y);
      let minX = centerX - triangleWidthAtY / 2 + 20;
      let maxX = centerX + triangleWidthAtY / 2 - 20;
      if (maxX <= minX) continue;
      let x = random(minX, maxX);

      // Skip positions that would land under the center label
      if (abs(x - centerX) < labelHalfW && abs(y - labelY) < labelHalfH) continue;

      let overlaps = false;
      for (let f of factCircles) {
        if (dist(x, y, f.x, f.y) < minSeparation) {
          overlaps = true;
          break;
        }
      }
      if (!overlaps) {
        factCircles.push({ x, y, radius, color: random(colors) });
        break;
      }
    }
  }
}

function generateKnowledgeLayer() {
  // Generate connected nodes for the knowledge layer
  knowledgeNodes = [];
  knowledgeEdges = [];
  let numNodes = 8;
  let colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F'];

  // Create nodes
  for (let i = 0; i < numNodes; i++) {
    let y = random(knowledgeLayerTop + 30, infoLayerTop - 20);
    let triangleWidthAtY = getTriangleWidthAtY(y);
    let centerX = canvasWidth / 2;
    let minX = centerX - triangleWidthAtY / 2 + 30;
    let maxX = centerX + triangleWidthAtY / 2 - 30;

    knowledgeNodes.push({
      x: random(minX, maxX),
      y: y,
      radius: 7,
      color: random(colors)
    });
  }

  // Create edges between nearby nodes
  let edgeColors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A'];
  for (let i = 0; i < knowledgeNodes.length; i++) {
    let connections = floor(random(1, 4));
    for (let j = 0; j < connections; j++) {
      let targetIndex = floor(random(knowledgeNodes.length));
      if (targetIndex !== i) {
        knowledgeEdges.push({
          from: i,
          to: targetIndex,
          color: random(edgeColors)
        });
      }
    }
  }
}

function getTriangleWidthAtY(y) {
  // Calculate the width of the triangle at a given y position
  // Triangle is narrow at top (small y) and wide at bottom (large y)
  let relativeY = y - triangleTop;
  let ratio = relativeY / triangleHeight;
  return triangleBase * ratio;
}

function drawDataLayer() {
  // Draw black background for data layer
  fill(0);
  noStroke();

  // Calculate triangle points for data layer
  let dataTop = dataLayerTop;
  let dataWidthAtTop = getTriangleWidthAtY(dataTop);
  let centerX = canvasWidth / 2;

  beginShape();
  vertex(centerX - dataWidthAtTop / 2, dataTop);
  vertex(centerX + dataWidthAtTop / 2, dataTop);
  vertex(centerX + triangleBase / 2, triangleBottom);
  vertex(centerX - triangleBase / 2, triangleBottom);
  endShape(CLOSE);

  // Draw green 1s and 0s
  fill('#00FF00'); // Bright green like old terminals
  textSize(12);
  textAlign(CENTER, CENTER);
  for (let dc of dataChars) {
    // Check if point is within the data layer triangle
    if (isPointInDataLayer(dc.x, dc.y)) {
      text(dc.char, dc.x, dc.y);
    }
  }

  // Draw layer label with a solid black backing rect so the green bits
  // behind it don't compete with the white letters
  textSize(20);
  textAlign(CENTER, CENTER);
  let labelY = dataLayerTop + (triangleBottom - dataLayerTop) / 2;
  let labelText = 'Data Layer';
  let padX = 12;
  let padY = 6;
  let labelW = textWidth(labelText) + padX * 2;
  let labelH = 20 + padY * 2;
  fill(0);
  noStroke();
  rect(centerX - labelW / 2, labelY - labelH / 2, labelW, labelH, 4);
  fill('white');
  text(labelText, centerX, labelY);
}

function drawInfoLayer() {
  // Draw gray background for info layer
  fill('gray');
  noStroke();

  let centerX = canvasWidth / 2;
  let infoWidthAtTop = getTriangleWidthAtY(infoLayerTop);
  let dataWidthAtTop = getTriangleWidthAtY(dataLayerTop);

  beginShape();
  vertex(centerX - infoWidthAtTop / 2, infoLayerTop);
  vertex(centerX + infoWidthAtTop / 2, infoLayerTop);
  vertex(centerX + dataWidthAtTop / 2, dataLayerTop);
  vertex(centerX - dataWidthAtTop / 2, dataLayerTop);
  endShape(CLOSE);

  // Draw fact circles
  for (let fact of factCircles) {
    if (isPointInInfoLayer(fact.x, fact.y)) {
      // Draw circle with colored background
      fill(fact.color);
      stroke(0);
      strokeWeight(1);
      circle(fact.x, fact.y, fact.radius * 2);

      // Draw "Fact" text
      fill(0);
      noStroke();
      textSize(10);
      textAlign(CENTER, CENTER);
      text('Fact', fact.x, fact.y);
    }
  }

  // Draw layer label with a dark-gray backing rect so any fact circles
  // behind it don't compete with the letters
  textSize(20);
  textAlign(CENTER, CENTER);
  noStroke();
  let infoLabelY = infoLayerTop + (dataLayerTop - infoLayerTop) / 2;
  let infoLabelText = 'Information Layer';
  let infoPadX = 12;
  let infoPadY = 6;
  let infoLabelW = textWidth(infoLabelText) + infoPadX * 2;
  let infoLabelH = 20 + infoPadY * 2;
  fill('gray');
  rect(centerX - infoLabelW / 2, infoLabelY - infoLabelH / 2, infoLabelW, infoLabelH, 4);
  fill('black');
  text(infoLabelText, centerX, infoLabelY);
}

function drawKnowledgeLayer() {
  // Draw white background for knowledge layer
  fill('white');
  noStroke();

  let centerX = canvasWidth / 2;
  let infoWidthAtTop = getTriangleWidthAtY(infoLayerTop);

  beginShape();
  vertex(centerX, knowledgeLayerTop);
  vertex(centerX + infoWidthAtTop / 2, infoLayerTop);
  vertex(centerX - infoWidthAtTop / 2, infoLayerTop);
  endShape(CLOSE);

  // Draw edges first (so they appear behind nodes)
  for (let edge of knowledgeEdges) {
    let fromNode = knowledgeNodes[edge.from];
    let toNode = knowledgeNodes[edge.to];
    stroke(edge.color);
    strokeWeight(2);
    line(fromNode.x, fromNode.y, toNode.x, toNode.y);
  }

  // Draw nodes
  for (let node of knowledgeNodes) {
    fill(node.color);
    stroke(0);
    strokeWeight(1);
    circle(node.x, node.y, node.radius * 2);
  }

  // Draw layer label with a white backing rect so edges and nodes
  // behind it don't compete with the letters
  textSize(20);
  textAlign(CENTER, CENTER);
  noStroke();
  // required some manual adjustment
  let knowLabelY = knowledgeLayerTop + (infoLayerTop - knowledgeLayerTop) / 2 + 55;
  let knowLabelText = 'Knowledge Layer';
  let knowPadX = 12;
  let knowPadY = 6;
  let knowLabelW = textWidth(knowLabelText) + knowPadX * 2;
  let knowLabelH = 20 + knowPadY * 2;
  fill('white');
  rect(centerX - knowLabelW / 2, knowLabelY - knowLabelH / 2, knowLabelW, knowLabelH, 4);
  fill('black');
  text(knowLabelText, centerX, knowLabelY);
}

function drawTriangleOutlines() {
  // Draw outlines for the triangle sections
  stroke('silver');
  strokeWeight(2);
  noFill();

  let centerX = canvasWidth / 2;

  // Outer triangle
  triangle(
    centerX, triangleTop,
    centerX - triangleBase / 2, triangleBottom,
    centerX + triangleBase / 2, triangleBottom
  );

  // Lines separating layers
  let infoWidth = getTriangleWidthAtY(infoLayerTop);
  let dataWidth = getTriangleWidthAtY(dataLayerTop);

  line(centerX - infoWidth / 2, infoLayerTop, centerX + infoWidth / 2, infoLayerTop);
  line(centerX - dataWidth / 2, dataLayerTop, centerX + dataWidth / 2, dataLayerTop);
}

function checkHover() {
  if (mouseX >= 0 && mouseX <= canvasWidth && mouseY >= triangleTop && mouseY <= triangleBottom) {
    if (isPointInDataLayer(mouseX, mouseY)) {
      hoveredLayer = 'data';
    } else if (isPointInInfoLayer(mouseX, mouseY)) {
      hoveredLayer = 'info';
    } else if (isPointInKnowledgeLayer(mouseX, mouseY)) {
      hoveredLayer = 'knowledge';
    } else {
      hoveredLayer = null;
    }
  } else {
    hoveredLayer = null;
  }
}

function isPointInDataLayer(x, y) {
  if (y < dataLayerTop || y > triangleBottom) return false;

  let centerX = canvasWidth / 2;
  let widthAtY = getTriangleWidthAtY(y);
  let leftEdge = centerX - widthAtY / 2;
  let rightEdge = centerX + widthAtY / 2;

  return x >= leftEdge && x <= rightEdge;
}

function isPointInInfoLayer(x, y) {
  if (y < infoLayerTop || y > dataLayerTop) return false;

  let centerX = canvasWidth / 2;
  let widthAtY = getTriangleWidthAtY(y);
  let leftEdge = centerX - widthAtY / 2;
  let rightEdge = centerX + widthAtY / 2;

  return x >= leftEdge && x <= rightEdge;
}

function isPointInKnowledgeLayer(x, y) {
  if (y < knowledgeLayerTop || y > infoLayerTop) return false;

  let centerX = canvasWidth / 2;
  let widthAtY = getTriangleWidthAtY(y);
  let leftEdge = centerX - widthAtY / 2;
  let rightEdge = centerX + widthAtY / 2;

  return x >= leftEdge && x <= rightEdge;
}

function drawInfoBox() {
  if (hoveredLayer === null) return;

  // Define infobox content based on hovered layer
  let title = '';
  let content = '';

  if (hoveredLayer === 'data') {
    title = 'Data Layer';
    content = 'Contains raw binary data in the form of 1s and 0s. It is the information you might see by creating a raw dump of the data on a hard drive. Finding meaning out of the data layer takes a lot of work.';
  } else if (hoveredLayer === 'info') {
    title = 'Information Layer';
    content = 'Contains isolated facts extracted from the raw data. These facts are each disconnected from other facts.';
  } else if (hoveredLayer === 'knowledge') {
    title = 'Knowledge Layer';
    content = 'Contains connected facts. It is a graph where facts are all connected together. Each fact must connect to other facts to be valuable. Insight occurs by traversing the network of facts.';
  }

  // Calculate box dimensions
  let boxWidth = 350;
  let boxHeight = 130;
  let boxX = mouseX + 15;
  let boxY = mouseY + 15;

  // Keep box on screen
  if (boxX + boxWidth > canvasWidth - 10) {
    boxX = mouseX - boxWidth - 15;
  }
  if (boxY + boxHeight > drawHeight - 10) {
    boxY = mouseY - boxHeight - 15;
  }

  // Draw box background with shadow effect
  fill(0, 0, 0, 30);
  noStroke();
  rect(boxX + 4, boxY + 4, boxWidth, boxHeight, 8);

  // Draw main box with border
  fill(255, 255, 255, 250);
  stroke(100);
  strokeWeight(2);
  rect(boxX, boxY, boxWidth, boxHeight, 8);

  // Draw title bar
  fill(70, 130, 180);
  noStroke();
  rect(boxX, boxY, boxWidth, 35, 8, 8, 0, 0);

  // Draw title text
  fill(255);
  textSize(18);
  textAlign(LEFT, CENTER);
  textStyle(BOLD);
  text(title, boxX + 12, boxY + 18);

  // Draw content text with word wrapping
  fill(50);
  textSize(14);
  textStyle(NORMAL);
  textAlign(LEFT, TOP);

  let words = content.split(' ');
  let line = '';
  let yPos = boxY + 45;
  let maxWidth = boxWidth - 24;

  for (let word of words) {
    let testLine = line + word + ' ';
    let testWidth = textWidth(testLine);

    if (testWidth > maxWidth && line.length > 0) {
      text(line, boxX + 12, yPos);
      line = word + ' ';
      yPos += 20;
    } else {
      line = testLine;
    }
  }
  text(line, boxX + 12, yPos);
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);
  calculateTriangle();

  // Regenerate layer data with new dimensions
  generateDataLayer();
  generateInfoLayer();
  generateKnowledgeLayer();
}

function updateCanvasSize() {
  const container = document.querySelector('main');
  if (container) {
    canvasWidth = container.offsetWidth;
  }
}
