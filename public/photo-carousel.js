const gallery = document.querySelector('.home-photos');

if (gallery) {
  const viewport = gallery.querySelector('.photo-viewport');
  const slider = gallery.querySelector('.photo-slider');

  const updateControls = () => {
    const distance = viewport.scrollWidth - viewport.clientWidth;
    slider.disabled = distance <= 0;
    slider.value = distance > 0 ? Math.round(viewport.scrollLeft / distance * 1000) : 0;
  };

  slider.addEventListener('input', () => {
    viewport.scrollLeft = Number(slider.value) / 1000 * (viewport.scrollWidth - viewport.clientWidth);
  });
  viewport.addEventListener('scroll', updateControls, { passive: true });
  new ResizeObserver(updateControls).observe(viewport);
  gallery.querySelector('.photo-controls').hidden = false;
  updateControls();
}
