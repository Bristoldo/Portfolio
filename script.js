(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
    }));
  }

  // Replace these placeholders with your real public contact details.
  const PROFILE = {
    email: 'djoukennebristol@gmail.com',
    linkedin: 'https://www.linkedin.com/in/djou-kenne-bristol-683985227/',
    github: 'https://github.com/Bristoldo'
  };

  const emailLink = document.getElementById('email-link');
  if (emailLink && PROFILE.email && !PROFILE.email.startsWith('YOUR_')) {
    emailLink.href = `mailto:${PROFILE.email}`;
  }

  const linkedinLink = document.getElementById('linkedin-link');
  if (linkedinLink && PROFILE.linkedin && !PROFILE.linkedin.includes('YOUR_PROFILE')) {
    linkedinLink.href = PROFILE.linkedin;
  }

  // Project repository links intentionally remain inactive until you add verified URLs.
  document.querySelectorAll('[data-placeholder]').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      alert(link.dataset.placeholder);
    });
  });
})();
