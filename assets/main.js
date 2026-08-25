// Minimal progressive enhancement — no framework, no tracking.
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.mobile-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var isOpen = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      links.style.display = isOpen ? 'flex' : '';
      if (isOpen) {
        links.style.position = 'absolute';
        links.style.top = '100%';
        links.style.left = '0';
        links.style.right = '0';
        links.style.flexDirection = 'column';
        links.style.background = 'var(--card)';
        links.style.padding = '18px 24px';
        links.style.borderBottom = '1px solid var(--line)';
        links.style.gap = '16px';
      }
    });
  }
});
