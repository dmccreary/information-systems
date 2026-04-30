// Sprint Burndown Chart - Chart.js
// Shows ideal vs actual burndown with annotations for scope changes and blockers
// CANVAS_HEIGHT: 720

document.addEventListener('DOMContentLoaded', function () {
  const days = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // Ideal burndown: linear from 50 to 0 over 10 days
  const idealData = days.map(d => 50 - d * 5);

  // Actual burndown: jagged real-life shape
  // Day 0: 50  start
  // Day 1: 47  steady
  // Day 2: 44  steady
  // Day 3: 44  blocked plateau
  // Day 4: 44  still blocked
  // Day 5: 32  sharp drop (unblocked)
  // Day 6: 28
  // Day 7: 33  scope added (+5)
  // Day 8: 25
  // Day 9: 16
  // Day 10: 8  missed goal
  const actualData = [50, 47, 44, 44, 44, 32, 28, 33, 25, 16, 8];

  // Velocity history for last 6 sprints (story points completed)
  const velocityLabels = ['Sprint 21', 'Sprint 22', 'Sprint 23', 'Sprint 24', 'Sprint 25', 'Sprint 26'];
  const velocityData = [38, 41, 36, 44, 39, 42];

  let showForecast = false;

  // Compute forecast for next sprint based on recent average velocity
  const avgVelocity = velocityData.reduce((a, b) => a + b, 0) / velocityData.length;
  const completedThisSprint = 50 - actualData[actualData.length - 1]; // 42
  const forecastSlope = avgVelocity / 10;
  const forecastData = days.map(d => Math.max(0, 50 - forecastSlope * d));

  const burndownCtx = document.getElementById('burndown-chart').getContext('2d');
  const burndownChart = new Chart(burndownCtx, {
    type: 'line',
    data: {
      labels: days.map(d => 'Day ' + d),
      datasets: [
        {
          label: 'Ideal',
          data: idealData,
          borderColor: '#6c757d',
          borderDash: [8, 6],
          borderWidth: 2,
          pointRadius: 0,
          tension: 0,
          fill: false
        },
        {
          label: 'Actual',
          data: actualData,
          borderColor: '#C2185B',
          backgroundColor: 'rgba(194, 24, 91, 0.10)',
          borderWidth: 3,
          pointRadius: function (ctx) {
            // Highlight key event points
            const i = ctx.dataIndex;
            if (i === 3 || i === 5 || i === 7) return 7;
            return 4;
          },
          pointBackgroundColor: function (ctx) {
            const i = ctx.dataIndex;
            if (i === 3) return '#FFA000'; // blocker
            if (i === 5) return '#00897B'; // unblock big drop
            if (i === 7) return '#FF7043'; // scope added
            return '#C2185B';
          },
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          tension: 0.15,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        title: {
          display: true,
          text: 'Sprint 27 Burndown — Ideal vs Actual (Sprint Goal: 50 story points in 10 days)',
          font: { size: 14, weight: 'bold' },
          color: '#1a3a6c'
        },
        legend: { position: 'top' },
        tooltip: {
          callbacks: {
            afterLabel: function (ctx) {
              if (ctx.dataset.label !== 'Actual') return '';
              const i = ctx.dataIndex;
              if (i === 3) return 'Blocker: API auth story stuck';
              if (i === 4) return 'Still blocked';
              if (i === 5) return 'Unblocked → 12 points cleared';
              if (i === 7) return 'Scope added mid-sprint (+5 pts)';
              if (i === 10) return 'Missed sprint goal by 8 points';
              return '';
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 55,
          title: { display: true, text: 'Story Points Remaining' }
        },
        x: {
          title: { display: true, text: 'Sprint Day' }
        }
      }
    }
  });

  // Velocity chart
  const velocityCtx = document.getElementById('velocity-chart').getContext('2d');
  const trendSlope = (velocityData[5] - velocityData[0]) / 5;
  const trendIntercept = velocityData[0];
  const trendlineData = velocityData.map((_, i) => trendIntercept + trendSlope * i);

  new Chart(velocityCtx, {
    type: 'bar',
    data: {
      labels: velocityLabels,
      datasets: [
        {
          label: 'Velocity (points completed)',
          data: velocityData,
          backgroundColor: 'rgba(0, 137, 123, 0.65)',
          borderColor: '#00897B',
          borderWidth: 1
        },
        {
          label: 'Trend',
          data: trendlineData,
          type: 'line',
          borderColor: '#1a3a6c',
          borderDash: [6, 4],
          borderWidth: 2,
          pointRadius: 0,
          fill: false,
          tension: 0
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Team Velocity — Last 6 Sprints (avg = ' + avgVelocity.toFixed(1) + ' pts)',
          font: { size: 13, weight: 'bold' },
          color: '#1a3a6c'
        },
        legend: { position: 'top' }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: { display: true, text: 'Story Points Completed' }
        }
      }
    }
  });

  // Forecast toggle
  const toggleBtn = document.getElementById('toggle-forecast');
  toggleBtn.addEventListener('click', function () {
    showForecast = !showForecast;
    if (showForecast) {
      burndownChart.data.datasets.push({
        label: 'Velocity Forecast (next sprint)',
        data: forecastData,
        borderColor: '#FF7043',
        borderDash: [4, 4],
        borderWidth: 2,
        pointRadius: 0,
        tension: 0,
        fill: false
      });
      toggleBtn.textContent = 'Hide Velocity Forecast';
      toggleBtn.classList.add('active');
    } else {
      burndownChart.data.datasets = burndownChart.data.datasets.filter(
        ds => ds.label !== 'Velocity Forecast (next sprint)'
      );
      toggleBtn.textContent = 'Show Velocity Forecast';
      toggleBtn.classList.remove('active');
    }
    burndownChart.update();
  });

  // Update outcome summary
  const outcomeEl = document.getElementById('outcome-summary');
  outcomeEl.innerHTML =
    '<strong>Outcome:</strong> Team completed ' + completedThisSprint +
    ' of 50 points (' + Math.round(completedThisSprint / 50 * 100) + '%) — ' +
    '<span style="color:#C2185B; font-weight: bold;">missed sprint goal by 8 points</span>. ' +
    'Forecast based on average velocity of ' + avgVelocity.toFixed(1) + ' suggests a more realistic next-sprint commitment.';
});
