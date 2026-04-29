// Loan Application State Diagram - vis-network
// UML state machine: Draft -> Submitted -> Under Review -> ... -> Funded -> Closed
// CANVAS_HEIGHT: 720

document.addEventListener('DOMContentLoaded', function () {
  const STATE = '#90A4AE';
  const SUCCESS = '#43A047';
  const FAIL = '#C2185B';
  const ATTN = '#FFA000';

  const nodes = new vis.DataSet([
    { id: 'init', label: '●', shape: 'circle', size: 12, color: { background: '#000', border: '#000' }, font: { color: 'white', size: 10 } },
    { id: 'draft', label: 'Draft', shape: 'box', color: { background: STATE, border: '#37474F' }, font: { color: 'white' } },
    { id: 'submitted', label: 'Submitted', shape: 'box', color: { background: STATE, border: '#37474F' }, font: { color: 'white' } },
    { id: 'review', label: 'Under Review', shape: 'box', color: { background: STATE, border: '#37474F' }, font: { color: 'white' } },
    { id: 'await', label: 'Awaiting\nDocuments', shape: 'box', color: { background: ATTN, border: '#E65100' } },
    { id: 'approved', label: 'Approved', shape: 'box', color: { background: SUCCESS, border: '#1B5E20' }, font: { color: 'white' } },
    { id: 'cond', label: 'Conditionally\nApproved', shape: 'box', color: { background: '#9CCC65', border: '#33691E' } },
    { id: 'denied', label: 'Denied', shape: 'box', color: { background: FAIL, border: '#7F0000' }, font: { color: 'white' } },
    { id: 'withdrawn', label: 'Withdrawn', shape: 'box', color: { background: FAIL, border: '#7F0000' }, font: { color: 'white' } },
    { id: 'funded', label: 'Funded', shape: 'box', color: { background: SUCCESS, border: '#1B5E20' }, font: { color: 'white' } },
    { id: 'closed', label: 'Closed', shape: 'box', color: { background: SUCCESS, border: '#1B5E20' }, font: { color: 'white' } },
    { id: 'final', label: '◉', shape: 'circle', size: 14, color: { background: 'white', border: '#000' }, font: { size: 12 } }
  ]);

  const transitions = [
    { id: 't1', from: 'init', to: 'draft', label: 'applicantStarts' },
    { id: 't2', from: 'draft', to: 'submitted', label: 'applicantSubmits' },
    { id: 't3', from: 'submitted', to: 'review', label: 'analystAssigned' },
    { id: 't4', from: 'review', to: 'approved', label: 'creditCheckPasses' },
    { id: 't5', from: 'review', to: 'cond', label: 'needsAdditionalInfo' },
    { id: 't6', from: 'review', to: 'denied', label: 'creditCheckFails' },
    { id: 't7', from: 'cond', to: 'await', label: 'requestDocs' },
    { id: 't8', from: 'await', to: 'review', label: 'docsReceived' },
    { id: 't9', from: 'review', to: 'review', label: 'analystAddsNote (self)', smooth: { type: 'curvedCW', roundness: 0.6 } },
    { id: 't10', from: 'draft', to: 'withdrawn', label: 'applicantWithdraws' },
    { id: 't11', from: 'submitted', to: 'withdrawn', label: 'applicantWithdraws' },
    { id: 't12', from: 'review', to: 'withdrawn', label: 'applicantWithdraws' },
    { id: 't13', from: 'approved', to: 'funded', label: 'disburseFunds' },
    { id: 't14', from: 'funded', to: 'closed', label: 'paidOff' },
    { id: 't15', from: 'funded', to: 'closed', label: 'defaulted' },
    { id: 't16', from: 'denied', to: 'final' },
    { id: 't17', from: 'withdrawn', to: 'final' },
    { id: 't18', from: 'closed', to: 'final' }
  ];

  const edges = new vis.DataSet(transitions.map(t => ({ ...t, arrows: 'to', color: { color: '#26A69A' }, font: { size: 9, color: '#212121', strokeWidth: 3, strokeColor: 'white' }, smooth: t.smooth || { type: 'cubicBezier', roundness: 0.3 } })));

  const network = new vis.Network(document.getElementById('network'), { nodes, edges }, {
    layout: { hierarchical: { direction: 'UD', sortMethod: 'directed', levelSeparation: 90, nodeSpacing: 130 } },
    physics: false,
    interaction: { hover: true, dragNodes: false, zoomView: true, dragView: true },
    nodes: { borderWidth: 2, font: { size: 11, face: 'Arial' }, shadow: { enabled: true, size: 3 }, widthConstraint: { minimum: 90, maximum: 130 } }
  });

  const legalOps = {
    'draft': ['Edit application fields', 'Save draft', 'Submit', 'Withdraw'],
    'submitted': ['Wait for analyst assignment', 'Withdraw'],
    'review': ['Analyst evaluates credit', 'Add notes', 'Request docs', 'Decide'],
    'await': ['Applicant uploads docs', 'Cancel waiting (back to review)'],
    'approved': ['Disburse funds (move to Funded)'],
    'cond': ['Request docs (move to Awaiting Documents)'],
    'denied': ['(Terminal) — adverse action notice sent'],
    'withdrawn': ['(Terminal) — record retained'],
    'funded': ['Track repayments', 'Move to Closed on paid-off or default'],
    'closed': ['(Terminal) — record retained for compliance']
  };

  const panelTitle = document.getElementById('panel-title');
  const panelBody = document.getElementById('panel-body');
  function showInfo(id) {
    const ops = legalOps[id];
    if (!ops) {
      panelTitle.textContent = 'Click any state';
      panelBody.innerHTML = '<p style="color:#666;font-size:12px;">Click any state for the business operations legal in that state.</p>';
      return;
    }
    panelTitle.textContent = nodes.get(id).label.replace(/\n/g, ' ') + ' — Legal operations';
    panelBody.innerHTML = '<ul style="margin: 0; padding-left: 18px;">' + ops.map(o => '<li>' + o + '</li>').join('') + '</ul>';
  }
  showInfo(null);
  network.on('click', p => { if (p.nodes.length) showInfo(p.nodes[0]); else showInfo(null); });

  document.getElementById('play').addEventListener('click', async function () {
    const path = ['draft', 'submitted', 'review', 'cond', 'await', 'review', 'approved', 'funded', 'closed'];
    network.unselectAll();
    for (const id of path) {
      network.selectNodes([id]);
      showInfo(id);
      await new Promise(r => setTimeout(r, 800));
    }
  });

  // Show invalid transitions toggle
  let showInvalid = false;
  let invalidIds = [];
  document.getElementById('toggle-invalid').addEventListener('click', function () {
    showInvalid = !showInvalid;
    if (showInvalid) {
      const invalid = [
        { id: 'inv1', from: 'funded', to: 'draft', label: '✗ NOT allowed' },
        { id: 'inv2', from: 'denied', to: 'approved', label: '✗ NOT allowed' },
        { id: 'inv3', from: 'closed', to: 'funded', label: '✗ NOT allowed' }
      ];
      invalid.forEach(e => edges.add({ ...e, arrows: 'to', dashes: true, color: { color: '#C62828' }, width: 2, font: { size: 10, color: '#C62828' } }));
      invalidIds = invalid.map(e => e.id);
      this.textContent = 'Hide Invalid Transitions';
      panelTitle.textContent = 'Invalid transitions';
      panelBody.innerHTML = '<p>State machines act as business-rule guardrails. The red dashed arrows show transitions the system would reject.</p>';
    } else {
      invalidIds.forEach(id => edges.remove(id));
      invalidIds = [];
      this.textContent = 'Show Invalid Transitions';
      showInfo(null);
    }
  });
});
