// Git Feature-Branch Workflow - vis-network
// Visualizes commits, branches, PRs, and CI status across a feature lifecycle
// CANVAS_HEIGHT: 720

document.addEventListener('DOMContentLoaded', function () {
  const MAIN = '#43A047';
  const FEAT = '#26A69A';
  const PR = '#FF7043';
  const FAIL = '#C62828';
  const PASS = '#43A047';

  // Layout: main branch horizontal at y=0, feature branches at y=-150
  const main = (id, x, label, ci) => ({ id, label, x, y: 0, shape: 'circle', size: 14, color: { background: MAIN, border: '#1B5E20' }, font: { size: 10 }, ci });
  const feat = (id, x, label, ci) => ({ id, label, x, y: -120, shape: 'circle', size: 14, color: { background: FEAT, border: '#00695C' }, font: { size: 10 }, ci });

  const nodes = new vis.DataSet([
    main('m1', -400, 'C1\nmain', 'pass'),
    main('m2', -250, 'C2\nmain', 'pass'),
    main('m3', -100, 'C3\nmain', 'pass'),
    feat('f1', -250, 'F1\nbranch', null),
    feat('f2', -150, 'F2\ncommit', 'pass'),
    feat('f3', -50, 'F3\ncommit', 'fail'),
    feat('f4', 50, 'F4\nfix-up', 'pass'),
    { id: 'pr', label: 'PR\n#42\nopened', x: 100, y: -180, shape: 'box', color: { background: PR, border: '#BF360C' }, font: { color: 'white', size: 10 } },
    { id: 'review', label: 'review\ncomments', x: 200, y: -180, shape: 'box', color: { background: '#FFA000', border: '#E65100' }, font: { size: 10 } },
    feat('f5', 200, 'F5\naddress', 'pass'),
    { id: 'approve', label: 'PR\napproved', x: 300, y: -180, shape: 'box', color: { background: PASS, border: '#1B5E20' }, font: { color: 'white', size: 10 } },
    main('merge', 250, 'merge\nC4', 'pass'),
    main('deploy', 400, 'deploy\nprod', 'pass')
  ]);

  // Color CI badge by extra annotation
  nodes.forEach(n => {
    if (n.ci === 'fail') {
      nodes.update({ id: n.id, color: { background: '#FFCDD2', border: FAIL } });
    } else if (n.ci === 'pass' && n.id !== 'merge' && !n.id.startsWith('m')) {
      nodes.update({ id: n.id, color: { background: '#C8E6C9', border: PASS } });
    }
  });

  const edges = new vis.DataSet([
    { from: 'm1', to: 'm2', color: { color: MAIN }, width: 3 },
    { from: 'm2', to: 'm3', color: { color: MAIN }, width: 3 },
    { from: 'm3', to: 'merge', color: { color: MAIN }, width: 3, dashes: true },
    { from: 'merge', to: 'deploy', color: { color: MAIN }, width: 3 },
    // branch from m2 to feature
    { from: 'm2', to: 'f1', label: 'git checkout -b feature-x', color: { color: FEAT }, font: { size: 9 } },
    { from: 'f1', to: 'f2', color: { color: FEAT }, width: 2 },
    { from: 'f2', to: 'f3', color: { color: FEAT }, width: 2 },
    { from: 'f3', to: 'f4', color: { color: FEAT }, width: 2 },
    { from: 'f4', to: 'pr', label: 'git push + open PR', color: { color: PR }, font: { size: 9 } },
    { from: 'pr', to: 'review', color: { color: '#FFA000' } },
    { from: 'review', to: 'f5', label: 'reviewer requests changes', color: { color: '#FFA000' }, font: { size: 9 } },
    { from: 'f5', to: 'approve', color: { color: PASS } },
    { from: 'approve', to: 'merge', label: 'merge to main', color: { color: PR }, font: { size: 9 } }
  ]);

  edges.forEach(e => edges.update({ id: e.id, arrows: 'to', smooth: { type: 'cubicBezier', roundness: 0.3 } }));

  const network = new vis.Network(document.getElementById('network'), { nodes, edges }, {
    physics: false,
    interaction: { hover: true, dragNodes: false, zoomView: true, dragView: true },
    nodes: { borderWidth: 2, font: { size: 10, face: 'monospace' }, shadow: { enabled: true, size: 2 } }
  });

  const info = {
    'm1': { msg: 'C1: initial commit on main', auth: 'alice', ci: 'pass' },
    'm2': { msg: 'C2: refactor logging', auth: 'bob', ci: 'pass' },
    'm3': { msg: 'C3: bump dependency', auth: 'alice', ci: 'pass' },
    'f1': { msg: 'branch created from C2', auth: 'carol', ci: '—' },
    'f2': { msg: 'F2: add new feature stub', auth: 'carol', ci: 'pass' },
    'f3': { msg: 'F3: edge case logic', auth: 'carol', ci: 'fail (test broken)' },
    'f4': { msg: 'F4: fix test expectation', auth: 'carol', ci: 'pass' },
    'f5': { msg: 'F5: address review comments', auth: 'carol', ci: 'pass' },
    'pr': { msg: 'PR #42: Add new feature', auth: 'carol → main', ci: 'opened' },
    'review': { msg: '"please rename this var; missing test for null"', auth: 'reviewer: bob', ci: 'changes-requested' },
    'approve': { msg: 'LGTM ✓ approved', auth: 'reviewer: bob', ci: 'approved' },
    'merge': { msg: 'merge commit C4: PR #42 squashed', auth: 'github-actions', ci: 'pass' },
    'deploy': { msg: 'deploy to prod (post-merge action)', auth: 'github-actions', ci: 'pass' }
  };

  const panelTitle = document.getElementById('panel-title');
  const panelBody = document.getElementById('panel-body');
  function showInfo(id) {
    const i = info[id];
    if (!i) {
      panelTitle.textContent = 'Click any node';
      panelBody.innerHTML = '<p style="color:#666;font-size:12px;">Click any commit, PR, or review node to see its message, author, and CI status.</p>';
      return;
    }
    panelTitle.textContent = id.toUpperCase();
    panelBody.innerHTML = '<p><strong>Message:</strong> ' + i.msg + '</p><p><strong>Author:</strong> ' + i.auth + '</p><p><strong>CI:</strong> ' + i.ci + '</p>';
  }
  showInfo(null);
  network.on('click', p => { if (p.nodes.length) showInfo(p.nodes[0]); else showInfo(null); });

  document.getElementById('play').addEventListener('click', async function () {
    const seq = ['m1','m2','m3','f1','f2','f3','f4','pr','review','f5','approve','merge','deploy'];
    network.unselectAll();
    for (const id of seq) {
      network.selectNodes([id]);
      showInfo(id);
      await new Promise(r => setTimeout(r, 700));
    }
  });
});
