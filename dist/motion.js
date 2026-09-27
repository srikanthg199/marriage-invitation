const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const items = document.querySelectorAll('.event-card, .gallery-grid button, .family-grid article');
const itemObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      itemObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
items.forEach((item, index) => {
  item.classList.add('item-reveal');
  item.style.setProperty('--reveal-delay', `${(index % 3) * 85}ms`);
  itemObserver.observe(item);
});
const galleryImage = document.querySelector('#large-photo');
galleryImage.addEventListener('load', () => {
  if (reducedMotion.matches) return;
  galleryImage.classList.remove('photo-enter');
  void galleryImage.offsetWidth;
  galleryImage.classList.add('photo-enter');
});
