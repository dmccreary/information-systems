// Privacy Regulatory Landscape - vis-network
// 2D map of privacy regulations on geography x sector axes
// CANVAS_HEIGHT: 720

document.addEventListener('DOMContentLoaded', function () {
  // Coordinates: x=-300 single-state, +300 global; y=-200 cross-sector, +200 sector-specific
  const nodes = new vis.DataSet([
    { id: 'gdpr', label: 'GDPR\n(EU)', shape: 'box', color: { background: '#43A047', border: '#1B5E20' }, font: { color: 'white', size: 13, bold: true }, x: 100, y: -180 },
    { id: 'ccpa', label: 'CCPA/\nCPRA', shape: 'box', color: { background: '#FF7043', border: '#BF360C' }, font: { color: 'white', size: 13, bold: true }, x: -250, y: -180 },
    { id: 'hipaa', label: 'HIPAA', shape: 'box', color: { background: '#C2185B', border: '#880E4F' }, font: { color: 'white', size: 13, bold: true }, x: -50, y: 100 },
    { id: 'sox', label: 'SOX', shape: 'box', color: { background: '#1E88E5', border: '#0D47A1' }, font: { color: 'white', size: 13, bold: true }, x: -100, y: 0 },
    { id: 'pci', label: 'PCI-DSS', shape: 'box', color: { background: '#FFA000', border: '#E65100' }, font: { color: 'white', size: 13, bold: true }, x: 250, y: 200 },
    { id: 'pipl', label: 'PIPL\n(China)', shape: 'box', color: { background: '#7B1FA2', border: '#4A148C' }, font: { color: 'white', size: 12 }, x: 200, y: -50 },
    { id: 'lgpd', label: 'LGPD\n(Brazil)', shape: 'box', color: { background: '#5E35B1', border: '#311B92' }, font: { color: 'white', size: 12 }, x: 100, y: -80 },
    { id: 'pipeda', label: 'PIPEDA\n(Canada)', shape: 'box', color: { background: '#3949AB', border: '#1A237E' }, font: { color: 'white', size: 12 }, x: -150, y: -80 }
  ]);

  const edges = new vis.DataSet([
    { from: 'gdpr', to: 'ccpa', label: 'shared rights\n(access, delete)', dashes: true, font: { size: 9 } },
    { from: 'gdpr', to: 'lgpd', label: 'GDPR-modeled', dashes: true, font: { size: 9 } },
    { from: 'gdpr', to: 'pipl', label: 'GDPR-modeled', dashes: true, font: { size: 9 } },
    { from: 'gdpr', to: 'pipeda', label: 'breach-notification\nsimilar', dashes: true, font: { size: 9 } },
    { from: 'hipaa', to: 'gdpr', label: 'health data\noverlap', dashes: true, font: { size: 9 } },
    { from: 'pci', to: 'gdpr', label: 'PII overlap', dashes: true, font: { size: 9 } }
  ]);

  edges.forEach(e => edges.update({ id: e.id, color: { color: '#9E9E9E' }, smooth: { type: 'curvedCW' } }));

  const network = new vis.Network(document.getElementById('network'), { nodes, edges }, {
    physics: false,
    interaction: { hover: true, dragNodes: false, zoomView: true, dragView: true },
    nodes: { borderWidth: 2, font: { size: 11, face: 'Arial' }, shadow: { enabled: true, size: 3 }, widthConstraint: { minimum: 80, maximum: 110 } }
  });

  const info = {
    'gdpr': { yr: '2018', reg: 'EU Member-State DPAs', pen: '€20M or 4% global revenue', sum: 'Cross-sector EU privacy law; data-subject rights, breach notice, transfer rules.' },
    'ccpa': { yr: '2020 (CPRA 2023)', reg: 'CA Privacy Protection Agency', pen: '$2,500–$7,500 per violation', sum: 'California consumer rights to know, delete, opt-out of sale of personal info.' },
    'hipaa': { yr: '1996', reg: 'HHS / OCR (US)', pen: 'up to $1.9M/year/category', sum: 'US healthcare privacy/security; covers PHI for covered entities and business associates.' },
    'sox': { yr: '2002', reg: 'SEC + PCAOB', pen: 'criminal liability + delisting risk', sum: 'US public-company financial reporting controls; ITGCs are in scope.' },
    'pci': { yr: '2004 (v4 in 2024)', reg: 'PCI Security Standards Council', pen: 'fines + loss of card processing', sum: 'Card payment security standard; mandatory for any merchant or processor.' },
    'pipl': { yr: '2021', reg: 'CAC (China)', pen: 'up to ¥50M or 5% revenue', sum: 'China PIPL: GDPR-style framework with strong data-localization requirements.' },
    'lgpd': { yr: '2020', reg: 'ANPD (Brazil)', pen: 'up to BRL 50M per infraction', sum: 'Brazil general data-protection law; very GDPR-flavored.' },
    'pipeda': { yr: '2001', reg: 'OPC Canada', pen: 'CAD 100k per violation', sum: 'Canada commercial privacy law; consent-based, sector-neutral.' }
  };

  const dataMap = {
    'health': ['hipaa', 'gdpr', 'pipl', 'lgpd', 'pipeda', 'ccpa'],
    'finance': ['sox', 'gdpr', 'ccpa'],
    'card': ['pci', 'gdpr', 'ccpa'],
    'generic-personal': ['gdpr', 'ccpa', 'pipl', 'lgpd', 'pipeda']
  };

  const panelTitle = document.getElementById('panel-title');
  const panelBody = document.getElementById('panel-body');
  function showInfo(id) {
    const i = info[id];
    if (!i) {
      panelTitle.textContent = 'Click any regulation';
      panelBody.innerHTML = '<p style="color:#666;font-size:12px;">Click any node for the year, regulator, max penalty, and summary.</p>';
      return;
    }
    panelTitle.textContent = nodes.get(id).label.replace(/\n/g, ' ');
    panelBody.innerHTML =
      '<p><strong>In force since:</strong> ' + i.yr + '</p>' +
      '<p><strong>Regulator:</strong> ' + i.reg + '</p>' +
      '<p><strong>Max penalty:</strong> ' + i.pen + '</p>' +
      '<p><strong>What it demands:</strong> ' + i.sum + '</p>';
  }
  showInfo(null);
  network.on('click', p => { if (p.nodes.length) showInfo(p.nodes[0]); else showInfo(null); });

  document.getElementById('data-filter').addEventListener('change', function () {
    const v = this.value;
    nodes.forEach(n => {
      const ids = dataMap[v] || [];
      const dim = v && !ids.includes(n.id);
      nodes.update({ id: n.id, opacity: dim ? 0.25 : 1 });
    });
    if (v) {
      const ids = dataMap[v];
      panelTitle.textContent = 'Applicable for ' + v.replace('-', ' ') + ' data';
      panelBody.innerHTML = '<p>Highlighted: ' + ids.map(i => i.toUpperCase()).join(', ') + '</p><p>Click any one for details.</p>';
    }
  });
});
