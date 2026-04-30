// Technical Debt Feedback Loop - vis-network causal loop diagram
// Reinforcing loop: tech debt -> low velocity -> schedule pressure -> shortcuts -> more tech debt
// CANVAS_HEIGHT: 720

document.addEventListener('DOMContentLoaded', function () {
  const NODE_BG = '#ECEFF1';
  const NODE_BORDER = '#37474F';
  const REINFORCING = '#FF7043';
  const BALANCING = '#00897B';

  const nodes = new vis.DataSet([
    { id: 'debt', label: 'Technical\nDebt', x: 0, y: -200, shape: 'ellipse', color: { background: NODE_BG, border: NODE_BORDER }, font: { size: 13, bold: true } },
    { id: 'velocity', label: 'Development\nVelocity', x: 200, y: -50, shape: 'ellipse', color: { background: NODE_BG, border: NODE_BORDER }, font: { size: 13, bold: true } },
    { id: 'pressure', label: 'Schedule\nPressure', x: 120, y: 180, shape: 'ellipse', color: { background: NODE_BG, border: NODE_BORDER }, font: { size: 13, bold: true } },
    { id: 'shortcut', label: 'Shortcut\nRate', x: -120, y: 180, shape: 'ellipse', color: { background: NODE_BG, border: NODE_BORDER }, font: { size: 13, bold: true } },
    { id: 'defect', label: 'Defect\nRate', x: -200, y: -50, shape: 'ellipse', color: { background: NODE_BG, border: NODE_BORDER }, font: { size: 13, bold: true } }
  ]);

  const reinforceEdges = [
    { id: 'r1', from: 'debt', to: 'velocity', label: '−', color: { color: REINFORCING } },
    { id: 'r2', from: 'velocity', to: 'pressure', label: '−', color: { color: REINFORCING } },
    { id: 'r3', from: 'pressure', to: 'shortcut', label: '+', color: { color: REINFORCING } },
    { id: 'r4', from: 'shortcut', to: 'debt', label: '+', color: { color: REINFORCING } },
    { id: 'r5', from: 'debt', to: 'defect', label: '+', color: { color: REINFORCING } },
    { id: 'r6', from: 'defect', to: 'pressure', label: '+', color: { color: REINFORCING } }
  ];

  const balanceEdges = [
    { id: 'b1', from: 'lev1', to: 'shortcut', label: '−', color: { color: BALANCING } },
    { id: 'b2', from: 'lev2', to: 'debt', label: '−', color: { color: BALANCING } },
    { id: 'b3', from: 'lev3', to: 'pressure', label: '−', color: { color: BALANCING } }
  ];

  const leverageNodes = [
    { id: 'lev1', label: 'Protected\nRefactor\nCapacity', shape: 'box', color: { background: '#A5D6A7', border: '#1B5E20' }, x: -250, y: 200 },
    { id: 'lev2', label: 'Debt\nVisibility', shape: 'box', color: { background: '#A5D6A7', border: '#1B5E20' }, x: 0, y: -350 },
    { id: 'lev3', label: 'Engineering\nLeadership\nCover', shape: 'box', color: { background: '#A5D6A7', border: '#1B5E20' }, x: 250, y: 200 }
  ];

  const edges = new vis.DataSet(reinforceEdges.map(e => ({
    ...e, arrows: 'to', font: { size: 14, bold: true, color: REINFORCING }, smooth: { type: 'curvedCW', roundness: 0.3 }, width: 3
  })));

  const network = new vis.Network(document.getElementById('network'), { nodes, edges }, {
    physics: false,
    interaction: { hover: true, dragNodes: false, zoomView: true, dragView: true },
    nodes: { borderWidth: 2, font: { size: 12, face: 'Arial' }, shadow: { enabled: true, size: 3 } }
  });

  const panelTitle = document.getElementById('panel-title');
  const panelBody = document.getElementById('panel-body');
  panelTitle.textContent = 'Reinforcing Feedback Loop';
  panelBody.innerHTML =
    '<p>This is a <strong>doom loop</strong>. Each variable amplifies the next, and the cycle repeats.</p>' +
    '<p>Read it: <em>more debt → less velocity → more schedule pressure → more shortcuts → more debt.</em></p>' +
    '<p>Click <strong>Add Leverage Points</strong> to introduce three structural interventions and convert this into a controllable system.</p>';

  let leverageOn = false;
  document.getElementById('toggle-leverage').addEventListener('click', function () {
    leverageOn = !leverageOn;
    if (leverageOn) {
      leverageNodes.forEach(n => nodes.add(n));
      balanceEdges.forEach(e => edges.add({ ...e, arrows: 'to', font: { size: 14, bold: true, color: BALANCING }, smooth: { type: 'cubicBezier' }, width: 3 }));
      this.textContent = 'Remove Leverage Points';
      this.classList.add('active');
      panelTitle.textContent = 'Three Leverage Points';
      panelBody.innerHTML =
        '<p><strong>Protected Refactor Capacity</strong> — a fixed % of every sprint reserved for paying down debt. Reduces shortcut rate.</p>' +
        '<p><strong>Debt Visibility</strong> — make debt visible on a dashboard. Reduces unmonitored debt accumulation.</p>' +
        '<p><strong>Engineering Leadership Cover</strong> — leaders push back on unrealistic schedules. Reduces schedule pressure.</p>' +
        '<p>Each balancing intervention (green) cuts a feedback path of the doom loop.</p>';
    } else {
      leverageNodes.forEach(n => nodes.remove(n.id));
      balanceEdges.forEach(e => edges.remove(e.id));
      this.textContent = 'Add Leverage Points';
      this.classList.remove('active');
      panelTitle.textContent = 'Reinforcing Feedback Loop';
      panelBody.innerHTML =
        '<p>This is a <strong>doom loop</strong>. Each variable amplifies the next, and the cycle repeats.</p>' +
        '<p>Read it: <em>more debt → less velocity → more schedule pressure → more shortcuts → more debt.</em></p>';
    }
  });
});
