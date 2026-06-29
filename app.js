// Super landing interactions
(function () {
  if (typeof window === 'undefined') return;

  // Guard GSAP
  if (window.gsap) {
    gsap.from('.hero h1', { opacity: 0, y: 30, duration: 1, ease: 'power3.out' });
    gsap.from('.hero-sub', { opacity: 0, y: 20, duration: 1, delay: 0.2 });
    gsap.from('.hero-actions', { opacity: 0, y: 20, duration: 1, delay: 0.4 });
  }

  // Subtle hover lift fallback
  var cards = document.querySelectorAll('.bento-card, .compare-card');
  cards.forEach(function(card) {
    card.addEventListener('mouseenter', function() {
      card.style.transform = 'translateY(-4px)';
    });
    card.addEventListener('mouseleave', function() {
      card.style.transform = 'translateY(0)';
    });
  });
})();