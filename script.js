/* Progressive enhancement. All portfolio content is already in index.html. */
(() => {
  const button = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#mobile-nav');

  function closeMenu() {
    if (!button || !menu) return;
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Open navigation');
    menu.hidden = true;
  }

  if (button && menu) {
    button.addEventListener('click', () => {
      const open = button.getAttribute('aria-expanded') !== 'true';
      button.setAttribute('aria-expanded', String(open));
      button.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      menu.hidden = !open;
    });
    menu.addEventListener('click', event => {
      if (event.target.closest('a')) closeMenu();
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        button.focus();
      }
    });
    const desktop = window.matchMedia('(min-width: 801px)');
    desktop.addEventListener('change', event => { if (event.matches) closeMenu(); });
  }

  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();

  if ('IntersectionObserver' in window) {
    const links = [...document.querySelectorAll('.desktop-nav a')];
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        links.forEach(link => {
          if (link.getAttribute('href') === `#${entry.target.id}`) {
            link.setAttribute('aria-current', 'location');
          } else {
            link.removeAttribute('aria-current');
          }
        });
      });
    }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
    document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
  }
})();
