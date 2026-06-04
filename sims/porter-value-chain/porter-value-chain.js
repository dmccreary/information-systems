// Porter Value Chain with IS Overlay - p5.js
// 5 primary activities + 4 support activities, with industry preset
// CANVAS_HEIGHT: 600

let canvasWidth = 720;
let drawHeight = 540;
let controlHeight = 60;
let canvasHeight = drawHeight + controlHeight;

const primary = ['Inbound Logistics', 'Operations', 'Outbound Logistics', 'Marketing & Sales', 'Service'];
const support = ['Firm Infrastructure', 'Human Resource Mgmt', 'Technology Development', 'Procurement'];

const industries = {
  manufacturing: {
    'Inbound Logistics': { sys: 'WMS, SCM', metric: 'inventory turns' },
    'Operations': { sys: 'ERP, MES, predictive maintenance', metric: 'throughput per shift' },
    'Outbound Logistics': { sys: 'TMS, fleet routing', metric: 'on-time delivery' },
    'Marketing & Sales': { sys: 'CRM, marketing automation', metric: 'lead-to-quote' },
    'Service': { sys: 'Field service, IoT alerts', metric: 'first-call resolution' },
    'Firm Infrastructure': { sys: 'Finance, BI', metric: 'days to close' },
    'Human Resource Mgmt': { sys: 'HRIS, LMS', metric: 'time-to-hire' },
    'Technology Development': { sys: 'PLM, CAD', metric: 'time-to-prototype' },
    'Procurement': { sys: 'Source-to-Pay (Coupa, Ariba)', metric: 'POs auto-approved' }
  },
  bank: {
    'Inbound Logistics': { sys: 'Document intake / OCR', metric: 'docs/hour' },
    'Operations': { sys: 'Core banking, payments', metric: 'transactions/sec' },
    'Outbound Logistics': { sys: 'Payment rails (ACH, Fedwire)', metric: 'settlement latency' },
    'Marketing & Sales': { sys: 'CRM, lead-scoring', metric: 'conversion rate' },
    'Service': { sys: 'Contact center, chatbot', metric: 'NPS, CSAT' },
    'Firm Infrastructure': { sys: 'GL, regulatory reporting', metric: 'audit findings' },
    'Human Resource Mgmt': { sys: 'Workday, compliance training', metric: 'training compliance' },
    'Technology Development': { sys: 'API platform, fintech labs', metric: 'API uptime' },
    'Procurement': { sys: 'Vendor risk mgmt', metric: 'vendor risk score' }
  },
  hospital: {
    'Inbound Logistics': { sys: 'Pharmacy mgmt, supply chain', metric: 'stockouts' },
    'Operations': { sys: 'EHR, OR scheduling', metric: 'OR utilization' },
    'Outbound Logistics': { sys: 'Discharge planning, pharmacy', metric: 'discharge time' },
    'Marketing & Sales': { sys: 'Patient outreach, appt CRM', metric: 'appt no-show rate' },
    'Service': { sys: 'Patient portal, billing', metric: 'patient satisfaction' },
    'Firm Infrastructure': { sys: 'GL, revenue cycle', metric: 'days in A/R' },
    'Human Resource Mgmt': { sys: 'Credentialing, scheduling', metric: 'nurse retention' },
    'Technology Development': { sys: 'Clinical AI, analytics', metric: 'readmission reduction' },
    'Procurement': { sys: 'Group purchasing org tools', metric: 'savings %' }
  }
};

let currentIndustry = 'manufacturing';
let hovered = null;
let industrySel;

function setup() {
  updateCanvasSize();
  const c = createCanvas(canvasWidth, canvasHeight);
  c.parent(document.querySelector('main'));

  industrySel = createSelect();
  industrySel.position(140, drawHeight + 14);
  industrySel.parent(document.querySelector('main'));
  industrySel.option('Manufacturing', 'manufacturing');
  industrySel.option('Retail Bank', 'bank');
  industrySel.option('Hospital', 'hospital');
  industrySel.changed(() => currentIndustry = industrySel.value());
  industrySel.style('padding', '6px 8px');
  industrySel.style('font-size', '11px');

  describe('Porter value chain with IS overlay across three industries.', LABEL);
}

function draw() {
  updateCanvasSize();
  background('#fafbfc');
  noStroke(); fill('#1a3a6c');
  textSize(15); textStyle(BOLD); textAlign(CENTER, TOP);
  text('Porter Value Chain with IS Overlay — ' + industries[currentIndustry] && {manufacturing: 'Manufacturing', bank: 'Retail Bank', hospital: 'Hospital'}[currentIndustry], canvasWidth / 2, 12);
  textStyle(NORMAL);

  // Support activities (top stacked bar)
  const padX = 20;
  const padY = 60;
  const supportH = 40;
  const supW = (canvasWidth - 2 * padX) / support.length;
  for (let i = 0; i < support.length; i++) {
    const x = padX + i * supW;
    const isTech = support[i] === 'Technology Development';
    fill(isTech ? '#43A047' : '#90A4AE');
    stroke('white'); strokeWeight(1);
    rect(x, padY, supW, supportH, 4);
    fill('white'); noStroke(); textSize(10); textStyle(BOLD); textAlign(CENTER, CENTER);
    text(support[i], x + supW / 2, padY + supportH / 2);
    textStyle(NORMAL);
    if (mouseX >= x && mouseX < x + supW && mouseY >= padY && mouseY < padY + supportH) hovered = support[i];
  }

  // Primary activities (chevron arrow)
  const arrY = padY + supportH + 30;
  const arrH = 80;
  const primW = (canvasWidth - 2 * padX) / primary.length;
  for (let i = 0; i < primary.length; i++) {
    const x = padX + i * primW;
    const ramp = lerpColor(color('#26A69A'), color('#43A047'), i / (primary.length - 1));
    fill(ramp); stroke('white'); strokeWeight(1);
    if (i === primary.length - 1) {
      // arrow point
      beginShape();
      vertex(x, arrY);
      vertex(x + primW * 0.8, arrY);
      vertex(x + primW, arrY + arrH / 2);
      vertex(x + primW * 0.8, arrY + arrH);
      vertex(x, arrY + arrH);
      endShape(CLOSE);
    } else {
      rect(x, arrY, primW, arrH, 0);
    }
    fill('white'); noStroke(); textSize(11); textStyle(BOLD); textAlign(CENTER, CENTER);
    text(primary[i], x + primW / 2, arrY + arrH / 2);
    textStyle(NORMAL);
    if (mouseX >= x && mouseX < x + primW && mouseY >= arrY && mouseY < arrY + arrH) hovered = primary[i];
  }

  // Margin label
  fill('#1a3a6c'); noStroke(); textSize(11); textStyle(BOLD); textAlign(LEFT, CENTER);
  text('Margin →', canvasWidth - 80, arrY + arrH + 16);
  textStyle(NORMAL);

  // Callout panel below
  const callY = arrY + arrH + 40;
  if (hovered) {
    const data = industries[currentIndustry][hovered];
    fill('#fff'); stroke('#26A69A'); strokeWeight(2);
    rect(20, callY, canvasWidth - 40, 130, 8);
    fill('#1a3a6c'); noStroke(); textSize(13); textStyle(BOLD); textAlign(LEFT, TOP);
    text(hovered, 35, callY + 10);
    textStyle(NORMAL); fill('#212121'); textSize(11);
    text('Example IS systems: ' + (data ? data.sys : '—'), 35, callY + 38, canvasWidth - 70);
    text('Example metric IS would move: ' + (data ? data.metric : '—'), 35, callY + 70, canvasWidth - 70);
    fill('#666'); textSize(10); textStyle(ITALIC);
    text('Hover any other segment to see its examples for this industry.', 35, callY + 100);
    textStyle(NORMAL);
  } else {
    fill('#666'); noStroke(); textSize(11); textAlign(CENTER, TOP); textStyle(ITALIC);
    text('Hover any segment to see example IS systems and metrics.', canvasWidth / 2, callY + 20);
    textStyle(NORMAL);
  }

  hovered = null;
  // Industry label
  fill('#212121'); noStroke(); textSize(11); textAlign(LEFT, CENTER);
  text('Industry:', 80, drawHeight + 24);
}

function windowResized() { updateCanvasSize(); resizeCanvas(canvasWidth, canvasHeight); }
function updateCanvasSize() {
  const c = document.querySelector('main');
  if (c) canvasWidth = c.offsetWidth;
}
