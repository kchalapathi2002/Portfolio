// ===== MOBILE NAVBAR TOGGLE =====
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close nav when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== NAVBAR SCROLL SHADOW =====
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.style.boxShadow = window.scrollY > 50
    ? '0 4px 24px rgba(0,0,0,0.5)'
    : 'none';
});

// ===== SCROLL FADE-IN ANIMATION =====
const fadeEls = document.querySelectorAll(
  '.skill-card, .timeline-card, .project-card, .edu-card, .contact-item, .contact-form, .contact-info, .hero-text, .hero-avatar'
);

fadeEls.forEach(el => el.classList.add('fade-in'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

fadeEls.forEach(el => observer.observe(el));

// ===== CONTACT FORM HANDLER =====
function handleSubmit(e) {
  e.preventDefault();
  const note = document.getElementById('form-note');
  note.textContent = '✓ Message sent! I\'ll get back to you soon.';
  e.target.reset();
  setTimeout(() => { note.textContent = ''; }, 4000);
}

// ===== ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = 'var(--accent)';
    }
  });
});
