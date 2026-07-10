(function () {
  const groups = document.querySelectorAll('.sidebar details[data-sidebar-group]');
  groups.forEach((group) => {
    const key = 'clyth-docs-sidebar-' + group.dataset.sidebarGroup;
    const saved = localStorage.getItem(key);
    if (saved !== null) group.open = saved === 'open';
    group.addEventListener('toggle', () => {
      localStorage.setItem(key, group.open ? 'open' : 'closed');
    });
  });

  const toggle = document.querySelector('.mobile-docs-toggle');
  const backdrop = document.querySelector('.sidebar-backdrop');
  if (toggle) toggle.addEventListener('click', () => document.body.classList.add('sidebar-open'));
  if (backdrop) backdrop.addEventListener('click', () => document.body.classList.remove('sidebar-open'));
})();
