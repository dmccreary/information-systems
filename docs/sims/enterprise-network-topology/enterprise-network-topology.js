// Enterprise Network Topology - vis-network
// Three sites (HQ, Branch, Plant) connected via SD-WAN to public internet, AWS, and SaaS
// CANVAS_HEIGHT: 720

document.addEventListener('DOMContentLoaded', function () {
  const LAN = '#A5D6A7', LAN_BORDER = '#2E7D32';
  const WAN = '#90A4AE', WAN_BORDER = '#37474F';
  const INTERNET = '#FFF59D', INTERNET_BORDER = '#F9A825';
  const CLOUD = '#F8BBD0', CLOUD_BORDER = '#C2185B';
  const SDWAN = '#FF8A65', SDWAN_BORDER = '#D84315';

  const nodes = new vis.DataSet([
    // Sites - left column
    { id: 'hq-user', label: 'HQ User\nLaptop', x: -550, y: -200, shape: 'box', color: { background: LAN, border: LAN_BORDER } },
    { id: 'hq-sw', label: 'HQ\nSwitch', x: -400, y: -200, shape: 'box', color: { background: LAN, border: LAN_BORDER } },
    { id: 'hq-sdwan', label: 'HQ\nSD-WAN', x: -250, y: -200, shape: 'box', color: { background: SDWAN, border: SDWAN_BORDER } },
    { id: 'br-user', label: 'Branch\nLaptop', x: -550, y: 0, shape: 'box', color: { background: LAN, border: LAN_BORDER } },
    { id: 'br-sw', label: 'Branch\nSwitch', x: -400, y: 0, shape: 'box', color: { background: LAN, border: LAN_BORDER } },
    { id: 'br-sdwan', label: 'Branch\nSD-WAN', x: -250, y: 0, shape: 'box', color: { background: SDWAN, border: SDWAN_BORDER } },
    { id: 'pl-user', label: 'Plant\nWorkstation', x: -550, y: 200, shape: 'box', color: { background: LAN, border: LAN_BORDER } },
    { id: 'pl-sw', label: 'Plant\nSwitch', x: -400, y: 200, shape: 'box', color: { background: LAN, border: LAN_BORDER } },
    { id: 'pl-sdwan', label: 'Plant\nSD-WAN', x: -250, y: 200, shape: 'box', color: { background: SDWAN, border: SDWAN_BORDER } },
    // WAN cloud center
    { id: 'wan', label: 'WAN', x: 0, y: 0, shape: 'ellipse', size: 50, color: { background: WAN, border: WAN_BORDER }, font: { color: 'white', size: 14 } },
    // Destinations right
    { id: 'internet', label: 'Public\nInternet', x: 250, y: -150, shape: 'ellipse', color: { background: INTERNET, border: INTERNET_BORDER } },
    { id: 'aws', label: 'AWS\nCloud', x: 250, y: 0, shape: 'box', color: { background: CLOUD, border: CLOUD_BORDER } },
    { id: 'saas', label: 'Salesforce\nSaaS', x: 250, y: 150, shape: 'box', color: { background: CLOUD, border: CLOUD_BORDER } },
    // Remote worker
    { id: 'remote', label: 'Remote\nWorker', x: 0, y: 280, shape: 'box', color: { background: '#90CAF9', border: '#1976D2' } }
  ]);

  const edges = new vis.DataSet([
    // LAN within HQ
    { id: 'e1', from: 'hq-user', to: 'hq-sw', color: { color: LAN_BORDER }, label: 'LAN' },
    { id: 'e2', from: 'hq-sw', to: 'hq-sdwan', color: { color: LAN_BORDER }, label: 'LAN' },
    { id: 'e3', from: 'br-user', to: 'br-sw', color: { color: LAN_BORDER }, label: 'LAN' },
    { id: 'e4', from: 'br-sw', to: 'br-sdwan', color: { color: LAN_BORDER }, label: 'LAN' },
    { id: 'e5', from: 'pl-user', to: 'pl-sw', color: { color: LAN_BORDER }, label: 'LAN' },
    { id: 'e6', from: 'pl-sw', to: 'pl-sdwan', color: { color: LAN_BORDER }, label: 'LAN' },
    // WAN paths
    { id: 'e7', from: 'hq-sdwan', to: 'wan', label: 'MPLS', color: { color: '#1E88E5' }, width: 3 },
    { id: 'e8', from: 'hq-sdwan', to: 'wan', label: 'Broadband', color: { color: '#FFA000' }, width: 2 },
    { id: 'e9', from: 'br-sdwan', to: 'wan', label: 'Broadband-1', color: { color: '#FFA000' } },
    { id: 'e10', from: 'br-sdwan', to: 'wan', label: 'Broadband-2', color: { color: '#FFA000' } },
    { id: 'e11', from: 'pl-sdwan', to: 'wan', label: 'Broadband', color: { color: '#FFA000' } },
    { id: 'e12', from: 'pl-sdwan', to: 'wan', label: 'LTE failover', color: { color: '#9E9E9E' }, dashes: true },
    // WAN to destinations
    { id: 'e13', from: 'wan', to: 'internet', label: 'Internet', color: { color: INTERNET_BORDER } },
    { id: 'e14', from: 'wan', to: 'aws', label: 'Public link', color: { color: '#9E9E9E' } },
    { id: 'e15', from: 'hq-sdwan', to: 'aws', label: 'Direct Connect', color: { color: CLOUD_BORDER }, width: 5, smooth: { type: 'curvedCW', roundness: 0.5 } },
    { id: 'e16', from: 'wan', to: 'saas', label: 'Internet', color: { color: INTERNET_BORDER } },
    // VPN
    { id: 'e17', from: 'remote', to: 'wan', label: 'VPN tunnel', color: { color: '#26A69A' }, dashes: true },
    { id: 'e18', from: 'wan', to: 'hq-sdwan', label: 'VPN ingress', color: { color: '#26A69A' }, dashes: true }
  ]);

  edges.forEach(e => {
    if (!e.smooth) edges.update({ id: e.id, smooth: { type: 'dynamic' }, font: { size: 10, align: 'top' } });
    edges.update({ id: e.id, arrows: '' });
  });

  const network = new vis.Network(document.getElementById('network'), { nodes, edges }, {
    physics: false,
    interaction: { hover: true, dragNodes: false, zoomView: true, dragView: true },
    nodes: { borderWidth: 2, font: { size: 11, face: 'Arial' }, shadow: { enabled: true, size: 3 } }
  });

  const info = {
    'hq-user': { cat: 'LAN endpoint', bw: '1 Gbps Ethernet', lat: '<1 ms', cost: '~$0' },
    'hq-sw': { cat: 'LAN switch', bw: '10–100 Gbps backplane', lat: '<1 ms', cost: '$2-10k' },
    'hq-sdwan': { cat: 'SD-WAN appliance', bw: 'aggregates underlying links', lat: 'depends on path', cost: '$500-3k/mo' },
    'br-user': { cat: 'LAN endpoint', bw: '1 Gbps', lat: '<1 ms', cost: '~$0' },
    'br-sw': { cat: 'LAN switch', bw: '10 Gbps', lat: '<1 ms', cost: '$1-5k' },
    'br-sdwan': { cat: 'SD-WAN appliance', bw: 'broadband + broadband', lat: '20-40 ms to HQ', cost: '$200-1k/mo' },
    'pl-user': { cat: 'LAN endpoint (often industrial)', bw: '1 Gbps', lat: '<1 ms', cost: '~$0' },
    'pl-sw': { cat: 'LAN switch', bw: '10 Gbps', lat: '<1 ms', cost: '$1-5k' },
    'pl-sdwan': { cat: 'SD-WAN with LTE failover', bw: 'broadband + LTE', lat: '20-50 ms', cost: '$200-1.5k/mo' },
    'wan': { cat: 'Wide Area Network', bw: 'aggregate', lat: '5-50 ms across continent', cost: 'underlying carrier links' },
    'internet': { cat: 'Public Internet', bw: 'best-effort', lat: '20-100 ms global', cost: '$100-1k/mo per site' },
    'aws': { cat: 'Cloud provider', bw: '10 Gbps Direct Connect', lat: '~5-10 ms from HQ', cost: '$500-2k/mo for DX + usage' },
    'saas': { cat: 'SaaS application', bw: 'depends on internet', lat: '40-150 ms', cost: 'per-user license' },
    'remote': { cat: 'Remote worker (VPN client)', bw: 'home internet', lat: '30-80 ms', cost: 'home ISP cost' }
  };

  const panelTitle = document.getElementById('panel-title');
  const panelBody = document.getElementById('panel-body');

  function showInfo(id) {
    const i = info[id];
    if (!i) {
      panelTitle.textContent = 'Click any node';
      panelBody.innerHTML = '<p style="color:#666;font-size:12px;">Click any node to see its category, bandwidth, latency, and rough cost.</p>';
      return;
    }
    panelTitle.textContent = (nodes.get(id).label || '').replace('\n', ' ');
    panelBody.innerHTML =
      '<p><strong>Category:</strong> ' + i.cat + '</p>' +
      '<p><strong>Bandwidth:</strong> ' + i.bw + '</p>' +
      '<p><strong>Latency:</strong> ' + i.lat + '</p>' +
      '<p><strong>Cost:</strong> ' + i.cost + '</p>';
  }
  showInfo(null);
  network.on('click', p => { if (p.nodes.length) showInfo(p.nodes[0]); else showInfo(null); });

  // Trace packet
  const traces = {
    'web': ['hq-user', 'hq-sw', 'hq-sdwan', 'wan', 'internet'],
    'saas': ['hq-user', 'hq-sw', 'hq-sdwan', 'wan', 'saas'],
    'aws-dx': ['hq-user', 'hq-sw', 'hq-sdwan', 'aws'],
    'remote': ['remote', 'wan', 'hq-sdwan']
  };

  document.getElementById('trace').addEventListener('change', async function () {
    const path = traces[this.value];
    if (!path) return;
    network.unselectAll();
    for (const id of path) {
      network.selectNodes([id]);
      await new Promise(r => setTimeout(r, 600));
    }
  });

  // Fail link
  let mplsDown = false;
  document.getElementById('fail-mpls').addEventListener('click', function () {
    mplsDown = !mplsDown;
    if (mplsDown) {
      edges.update({ id: 'e7', dashes: true, color: { color: '#C62828' }, label: 'MPLS DOWN', width: 1 });
      edges.update({ id: 'e8', width: 4, label: 'Broadband (re-routed)' });
      this.textContent = 'Restore MPLS';
      this.classList.add('active');
      panelTitle.textContent = 'SD-WAN re-routed';
      panelBody.innerHTML = '<p>HQ\'s MPLS circuit failed. SD-WAN automatically shifted traffic to broadband within seconds.</p><p>Users notice slightly higher latency but stay connected.</p>';
    } else {
      edges.update({ id: 'e7', dashes: false, color: { color: '#1E88E5' }, label: 'MPLS', width: 3 });
      edges.update({ id: 'e8', width: 2, label: 'Broadband' });
      this.textContent = 'Fail HQ MPLS Circuit';
      this.classList.remove('active');
      showInfo(null);
    }
  });
});
