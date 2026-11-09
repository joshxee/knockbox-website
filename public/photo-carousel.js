const gallery = document.querySelector('.home-photos');

if (gallery) {
  const viewport = gallery.querySelector('.photo-viewport');
  const previous = gallery.querySelector('[data-photo-previous]');
  const next = gallery.querySelector('[data-photo-next]');

  const updateControls = () => {
    previous.disabled = viewport.scrollLeft <= 1;
    next.disabled = viewport.scrollLeft >= viewport.scrollWidth - viewport.clientWidth - 1;
  };

  const move = (direction) => {
    const step = viewport.querySelector('img').getBoundingClientRect().width + parseFloat(getComputedStyle(viewport).columnGap);
    viewport.scrollBy({
      left: direction * step,
      behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    });
  };

  previous.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
  viewport.addEventListener('scroll', updateControls, { passive: true });
  new ResizeObserver(updateControls).observe(viewport);
  gallery.querySelector('.photo-controls').hidden = false;
  updateControls();
}
