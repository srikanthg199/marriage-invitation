import { useEffect, useRef, useState } from 'react';
import { wedding, asset } from '../config.js';

export default function Gallery() {
  const [photo, setPhoto] = useState(null);
  const dialog = useRef(null);
  const touch = useRef(null);
  const trigger = useRef(null);
  const navigate = delta => setPhoto(current => (current + delta + wedding.gallery.length) % wedding.gallery.length);
  const close = () => setPhoto(null);
  useEffect(() => {
    if (photo === null) { dialog.current.close(); return; }
    dialog.current.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [photo]);
  const selected = photo === null ? null : wedding.gallery[photo];
  return <><section id="gallery" className="section gallery-section reveal"><div className="section-heading"><div><p className="eyebrow">MOMENTS TO CHERISH</p><h2>A glimpse of our joy</h2></div><p>Little moments, lasting memories.<br />Tap a photograph to take a closer look.</p></div><div id="gallery-grid" className="gallery-grid">{wedding.gallery.map((image, i) => <button key={image.src} className="item-reveal" data-photo={i} aria-label={`Enlarge ${image.caption}`} onClick={event => { trigger.current = event.currentTarget; setPhoto(i); }}><img src={asset(image.src)} alt={image.alt} width="650" height="650" loading="lazy" /></button>)}</div><p className="photo-note">Illustrative, AI-generated sample photographs. Replace with your own memories.</p></section><dialog ref={dialog} id="lightbox" aria-label="Wedding photo gallery" onCancel={close} onClose={() => { close(); trigger.current?.focus(); }} onClick={event => { if (event.target === event.currentTarget) close(); }} onKeyDown={event => { if (event.key === 'ArrowRight') navigate(1); if (event.key === 'ArrowLeft') navigate(-1); }} onTouchStart={event => { touch.current = event.changedTouches[0].clientX; }} onTouchEnd={event => { if (touch.current !== null) { const delta = event.changedTouches[0].clientX - touch.current; if (Math.abs(delta) > 45) navigate(delta < 0 ? 1 : -1); touch.current = null; } }}><button id="close-gallery" onClick={close} aria-label="Close photo gallery">✕</button><button id="prev-photo" onClick={() => navigate(-1)} aria-label="Previous photograph">←</button>{selected && <figure><img key={selected.src} id="large-photo" className="photo-enter" src={asset(selected.src)} alt={selected.alt} /><figcaption id="photo-caption">{photo + 1} / {wedding.gallery.length} · {selected.caption}</figcaption></figure>}<button id="next-photo" onClick={() => navigate(1)} aria-label="Next photograph">→</button></dialog></>;
}
