// Earned Value Management (EVM) Variance Visualization - Chart.js
// Shows PV, EV, AC curves with computed CV/SV/CPI/SPI/EAC at the selected month
// CANVAS_HEIGHT: 720

document.addEventListener('DOMContentLoaded', function () {
  const months = Array.from({ length: 13 }, (_, i) => i); // months 0..12
  const monthLabels = months.map(m => 'M' + m);
  const BAC = 1200000; // Budget at completion ($1.2M)

  // Three scenarios. Each is {pv, ev, ac} arrays of length 13.
  const scenarios = {
    'behind-under': {
      label: 'Behind Schedule, Under Budget',
      pv: [0, 100, 200, 320, 450, 570, 690, 810, 920, 1020, 1100, 1170, 1200].map(v => v * 1000),
      ev: [0, 80, 160, 250, 360, 460, 560, 660, 760, 850, 940, 1010, 1080].map(v => v * 1000),
      ac: [0, 75, 155, 240, 340, 430, 520, 620, 710, 790, 880, 950, 1010].map(v => v * 1000)
    },
    'ahead-under': {
      label: 'Ahead of Schedule, Under Budget',
      pv: [0, 100, 200, 320, 450, 570, 690, 810, 920, 1020, 1100, 1170, 1200].map(v => v * 1000),
      ev: [0, 110, 230, 360, 500, 630, 760, 880, 990, 1080, 1150, 1190, 1200].map(v => v * 1000),
      ac: [0, 90, 200, 320, 450, 570, 690, 800, 900, 980, 1050, 1090, 1110].map(v => v * 1000)
    },
    'on-over': {
      label: 'On Schedule, Over Budget',
      pv: [0, 100, 200, 320, 450, 570, 690, 810, 920, 1020, 1100, 1170, 1200].map(v => v * 1000),
      ev: [0, 100, 200, 320, 450, 570, 690, 810, 920, 1020, 1100, 1170, 1200].map(v => v * 1000),
      ac: [0, 120, 240, 380, 530, 670, 810, 940, 1070, 1180, 1290, 1380, 1450].map(v => v * 1000)
    }
  };

  let currentScenario = 'behind-under';
  let cursorMonth = 6; // start mid-project

  const ctx = document.getElementById('evm-chart').getContext('2d');

  // Cursor line plugin
  const cursorPlugin = {
    id: 'cursorLine',
    afterDatasetsDraw(chart) {
      const x = chart.scales.x.getPixelForValue(cursorMonth);
      const yTop = chart.scales.y.top;
      const yBot = chart.scales.y.bottom;
      const c = chart.ctx;
      c.save();
      c.strokeStyle = '#1a3a6c';
      c.lineWidth = 2;
      c.setLineDash([4, 4]);
      c.beginPath();
      c.moveTo(x, yTop);
      c.lineTo(x, yBot);
      c.stroke();
      c.restore();
    }
  };

  const evmChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: monthLabels,
      datasets: [
        {
          label: 'PV (Planned Value)',
          data: scenarios[currentScenario].pv,
          borderColor: '#6c757d',
          backgroundColor: 'transparent',
          borderWidth: 2,
          borderDash: [],
          pointRadius: 0,
          tension: 0.2
        },
        {
          label: 'EV (Earned Value)',
          data: scenarios[currentScenario].ev,
          borderColor: '#00897B',
          backgroundColor: 'rgba(0, 137, 123, 0.10)',
          borderWidth: 3,
          pointRadius: 0,
          tension: 0.2,
          fill: false
        },
        {
          label: 'AC (Actual Cost)',
          data: scenarios[currentScenario].ac,
          borderColor: '#C2185B',
          backgroundColor: 'transparent',
          borderWidth: 3,
          pointRadius: 0,
          tension: 0.2
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      onClick: function (evt) {
        const xScale = evmChart.scales.x;
        const x = evt.x - evmChart.canvas.getBoundingClientRect().left + evmChart.canvas.parentElement.scrollLeft;
        const val = xScale.getValueForPixel(evt.x);
        if (val != null) {
          cursorMonth = Math.max(0, Math.min(12, Math.round(val)));
          updateMetrics();
          evmChart.update('none');
          document.getElementById('month-slider').value = cursorMonth;
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'EVM Curves — PV, EV, AC over a 12-month project',
          font: { size: 14, weight: 'bold' },
          color: '#1a3a6c'
        },
        legend: { position: 'top' },
        tooltip: {
          mode: 'index',
          intersect: false,
          callbacks: {
            label: function (ctx) {
              return ctx.dataset.label + ': $' + (ctx.parsed.y / 1000).toFixed(0) + 'k';
            }
          }
        }
      },
      scales: {
        x: { title: { display: true, text: 'Month' } },
        y: {
          beginAtZero: true,
          title: { display: true, text: 'Cumulative Cost ($)' },
          ticks: {
            callback: v => '$' + (v / 1000).toFixed(0) + 'k'
          }
        }
      }
    },
    plugins: [cursorPlugin]
  });

  function fmt(v) {
    return '$' + Math.round(v / 1000).toLocaleString() + 'k';
  }

  function updateMetrics() {
    const s = scenarios[currentScenario];
    const PV = s.pv[cursorMonth];
    const EV = s.ev[cursorMonth];
    const AC = s.ac[cursorMonth];
    const CV = EV - AC;
    const SV = EV - PV;
    const CPI = AC > 0 ? EV / AC : 1;
    const SPI = PV > 0 ? EV / PV : 1;
    const EAC = CPI > 0 ? BAC / CPI : BAC;

    document.getElementById('m-month').textContent = 'M' + cursorMonth;
    document.getElementById('m-pv').textContent = fmt(PV);
    document.getElementById('m-ev').textContent = fmt(EV);
    document.getElementById('m-ac').textContent = fmt(AC);

    setMetric('m-cv', CV, 'cost');
    setMetric('m-sv', SV, 'schedule');
    setMetric('m-cpi', CPI, 'index');
    setMetric('m-spi', SPI, 'index');

    const eacEl = document.getElementById('m-eac');
    eacEl.textContent = fmt(EAC);
    eacEl.className = EAC > BAC ? 'metric-bad' : 'metric-good';

    // Diagnosis
    let dx = '';
    if (SV < 0 && CV < 0) dx = 'Behind schedule and over budget — escalate now.';
    else if (SV < 0 && CV >= 0) dx = 'Behind schedule but under budget — burn rate is okay, schedule slipping.';
    else if (SV >= 0 && CV < 0) dx = 'On/ahead of schedule but over budget — work is happening fast, expensively.';
    else dx = 'On track on both axes — keep going.';
    document.getElementById('diagnosis').textContent = dx;
  }

  function setMetric(id, value, kind) {
    const el = document.getElementById(id);
    if (kind === 'index') {
      el.textContent = value.toFixed(2);
      el.className = value >= 1 ? 'metric-good' : 'metric-bad';
    } else {
      el.textContent = (value >= 0 ? '+' : '') + fmt(value);
      el.className = value >= 0 ? 'metric-good' : 'metric-bad';
    }
  }

  function applyScenario(name) {
    currentScenario = name;
    const s = scenarios[name];
    evmChart.data.datasets[0].data = s.pv;
    evmChart.data.datasets[1].data = s.ev;
    evmChart.data.datasets[2].data = s.ac;
    evmChart.update();
    updateMetrics();
    document.querySelectorAll('.scenario-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.scenario === name);
    });
  }

  // Wire up controls
  document.querySelectorAll('.scenario-btn').forEach(btn => {
    btn.addEventListener('click', () => applyScenario(btn.dataset.scenario));
  });

  document.getElementById('month-slider').addEventListener('input', function (e) {
    cursorMonth = parseInt(e.target.value, 10);
    updateMetrics();
    evmChart.update('none');
  });

  applyScenario('behind-under');
});
