// Gantt Chart with Critical Path - vis-timeline
// 12-week CRM rollout. Critical path tasks in magenta, non-critical in emerald.
// CANVAS_HEIGHT: 720

document.addEventListener('DOMContentLoaded', function () {
  // Project starts at Week 1 (Day 0)
  const start = new Date('2026-01-05'); // Monday
  function day(n) {
    const d = new Date(start);
    d.setDate(d.getDate() + n);
    return d;
  }

  // groups = swim lanes
  const groups = new vis.DataSet([
    { id: 1, content: 'Charter' },
    { id: 2, content: 'Requirements' },
    { id: 3, content: 'Vendor Selection' },
    { id: 4, content: 'Data Mapping' },
    { id: 5, content: 'Test Env Setup' },
    { id: 6, content: 'Configuration' },
    { id: 7, content: 'Data Migration' },
    { id: 8, content: 'UAT' },
    { id: 9, content: 'Training Materials' },
    { id: 10, content: 'Training Delivery' },
    { id: 11, content: 'Cutover' },
    { id: 12, content: 'Go-Live' }
  ]);

  // Tasks. critical=true → magenta, false → emerald, milestone=true → gold diamond
  let tasks = [
    { id: 1,  group: 1,  content: '◆ Charter',           start: 0,  end: 0,  critical: true,  milestone: true },
    { id: 2,  group: 2,  content: 'Requirements',         start: 0,  end: 14, critical: true,  milestone: false },
    { id: 3,  group: 3,  content: 'Vendor Selection',     start: 14, end: 28, critical: true,  milestone: false },
    { id: 4,  group: 4,  content: 'Data Mapping',         start: 28, end: 42, critical: false, milestone: false, slack: 7 },
    { id: 5,  group: 5,  content: 'Test Env Setup',       start: 21, end: 35, critical: false, milestone: false, slack: 14 },
    { id: 6,  group: 6,  content: 'Configuration',        start: 28, end: 49, critical: true,  milestone: false },
    { id: 7,  group: 7,  content: 'Data Migration Build', start: 49, end: 63, critical: true,  milestone: false },
    { id: 8,  group: 8,  content: 'UAT',                  start: 63, end: 77, critical: true,  milestone: false },
    { id: 9,  group: 9,  content: 'Training Materials',   start: 49, end: 63, critical: false, milestone: false, slack: 7 },
    { id: 10, group: 10, content: 'Training Delivery',    start: 63, end: 77, critical: false, milestone: false, slack: 7 },
    { id: 11, group: 11, content: 'Cutover',              start: 77, end: 83, critical: true,  milestone: false },
    { id: 12, group: 12, content: '◆ Go-Live',            start: 84, end: 84, critical: true,  milestone: true }
  ];

  let showSlack = false;

  function buildItems() {
    const items = [];
    tasks.forEach(t => {
      let className = 'task-' + (t.critical ? 'critical' : 'normal');
      if (t.milestone) className = 'task-milestone';
      const startDate = day(t.start);
      const endDate = day(t.end + 1); // vis-timeline end is exclusive
      if (t.milestone) {
        items.push({
          id: 'task-' + t.id,
          group: t.group,
          content: t.content,
          start: startDate,
          type: 'point',
          className: className
        });
      } else {
        items.push({
          id: 'task-' + t.id,
          group: t.group,
          content: t.content,
          start: startDate,
          end: endDate,
          type: 'range',
          className: className
        });
      }
      if (showSlack && !t.milestone && !t.critical && t.slack > 0) {
        items.push({
          id: 'slack-' + t.id,
          group: t.group,
          content: '<span style="opacity:0.85;">slack ' + t.slack + 'd</span>',
          start: endDate,
          end: day(t.end + 1 + t.slack),
          type: 'background',
          className: 'task-slack'
        });
      }
    });
    return items;
  }

  const container = document.getElementById('timeline');
  const items = new vis.DataSet(buildItems());

  const options = {
    stack: false,
    showCurrentTime: false,
    orientation: 'top',
    min: day(-2),
    max: day(95),
    start: day(-2),
    end: day(90),
    margin: { item: { horizontal: 0, vertical: 6 } },
    editable: { add: false, remove: false, updateGroup: false, updateTime: true, overrideItems: false },
    onMoving: function (item, callback) {
      // Allow snapping to whole days
      const t = tasks.find(x => 'task-' + x.id === item.id);
      if (!t || t.milestone) {
        callback(null); // don't move milestones
        return;
      }
      const newStartDay = Math.round((item.start - start) / (1000 * 60 * 60 * 24));
      const duration = t.end - t.start;
      t.start = newStartDay;
      t.end = newStartDay + duration;
      item.start = day(t.start);
      item.end = day(t.end + 1);
      callback(item);
      checkProjectFinish();
    }
  };

  const timeline = new vis.Timeline(container, items, groups, options);

  function checkProjectFinish() {
    // Recompute end of CP: configuration's end depends on requirements + vendor + config
    // Simple check: project end is max end across critical path tasks
    const cpEnd = Math.max(...tasks.filter(t => t.critical).map(t => t.end));
    const statusEl = document.getElementById('status-message');
    if (cpEnd > 84) {
      statusEl.innerHTML = '<span style="color:#C2185B;">⚠ Schedule slipped! Project now ends day ' +
        cpEnd + ' (vs planned 84).</span>';
      statusEl.classList.add('alert-bad');
      statusEl.classList.remove('alert-good');
    } else if (cpEnd < 84) {
      statusEl.innerHTML = '<span style="color:#00897B;">✓ Project finishes early on day ' + cpEnd + '.</span>';
      statusEl.classList.add('alert-good');
      statusEl.classList.remove('alert-bad');
    } else {
      statusEl.innerHTML = '<span style="color:#00897B;">✓ Schedule unchanged. Go-Live remains day 84.</span>';
      statusEl.classList.add('alert-good');
      statusEl.classList.remove('alert-bad');
    }
  }

  document.getElementById('toggle-slack').addEventListener('click', function () {
    showSlack = !showSlack;
    items.clear();
    items.add(buildItems());
    this.textContent = showSlack ? 'Hide Slack' : 'Show Slack on Non-Critical Tasks';
    this.classList.toggle('active', showSlack);
  });

  document.getElementById('reset-schedule').addEventListener('click', function () {
    tasks = [
      { id: 1,  group: 1,  content: '◆ Charter',           start: 0,  end: 0,  critical: true,  milestone: true },
      { id: 2,  group: 2,  content: 'Requirements',         start: 0,  end: 14, critical: true,  milestone: false },
      { id: 3,  group: 3,  content: 'Vendor Selection',     start: 14, end: 28, critical: true,  milestone: false },
      { id: 4,  group: 4,  content: 'Data Mapping',         start: 28, end: 42, critical: false, milestone: false, slack: 7 },
      { id: 5,  group: 5,  content: 'Test Env Setup',       start: 21, end: 35, critical: false, milestone: false, slack: 14 },
      { id: 6,  group: 6,  content: 'Configuration',        start: 28, end: 49, critical: true,  milestone: false },
      { id: 7,  group: 7,  content: 'Data Migration Build', start: 49, end: 63, critical: true,  milestone: false },
      { id: 8,  group: 8,  content: 'UAT',                  start: 63, end: 77, critical: true,  milestone: false },
      { id: 9,  group: 9,  content: 'Training Materials',   start: 49, end: 63, critical: false, milestone: false, slack: 7 },
      { id: 10, group: 10, content: 'Training Delivery',    start: 63, end: 77, critical: false, milestone: false, slack: 7 },
      { id: 11, group: 11, content: 'Cutover',              start: 77, end: 83, critical: true,  milestone: false },
      { id: 12, group: 12, content: '◆ Go-Live',            start: 84, end: 84, critical: true,  milestone: true }
    ];
    items.clear();
    items.add(buildItems());
    checkProjectFinish();
  });

  checkProjectFinish();
});
