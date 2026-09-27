import { useEffect, useRef, useState } from 'react';
import { wedding, asset, couple } from './config.js';
import useMusic, { recall } from './useMusic.js';
import InvitationCover from './components/InvitationCover.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Families from './components/Families.jsx';
import Countdown from './components/Countdown.jsx';
import Events from './components/Events.jsx';
import Gallery from './components/Gallery.jsx';
import Contact from './components/Contact.jsx';
import Closing from './components/Closing.jsx';

export default function App() {
  const [opening, setOpening] = useState(false);
  const [opened, setOpened] = useState(false);
  const [petals, setPetals] = useState([]);
  const music = useMusic();
  const timers = useRef([]);
  useEffect(() => {
    document.title = `${couple} | Wedding Invitation`;
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add(entry.target.classList.contains('reveal') ? 'visible' : 'in-view'); observer.unobserve(entry.target); } }), { threshold: .08 });
    document.querySelectorAll('.reveal, .item-reveal').forEach(item => observer.observe(item));
    return () => { observer.disconnect(); timers.current.forEach(clearTimeout); document.body.classList.remove('invitation-open'); };
  }, []);
  function open(withMusic) {
    if (opening) return;
    setOpening(true);
    document.body.classList.add('invitation-open');
    if (withMusic) music.play(); else music.pause();
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduced) setPetals(Array.from({ length: 18 }, (_, i) => ({ left: `${i % 2 === 0 ? Math.random() * 10 : 90 + Math.random() * 10}%`, animationDelay: `${Math.random() * .7}s` })));
    timers.current.push(setTimeout(() => { setOpened(true); }, reduced ? 0 : 1050));
    timers.current.push(setTimeout(() => setPetals([]), 4500));
  }
  useEffect(() => { if (opened) document.querySelector('.monogram')?.focus(); }, [opened]);
  return <>
    {!opened && <InvitationCover opening={opening} onOpen={open} preferQuiet={recall('wedding-music') === 'off'} />}
    <div id="page" inert={!opened}>
      <Header /><main><Hero /><div className="sample-strip">SAMPLE INVITATION <span>Fictional names, venues and contact details · {wedding.tradition}</span></div><Families /><Countdown /><Events /><Gallery /><Contact /><Closing /></main>
      <div className="music-control"><button id="music-toggle" aria-label={music.playing ? 'Pause background music' : 'Play background music'} aria-pressed={music.playing} onClick={music.playing ? music.pause : music.play}>♫ <span>Music {music.playing ? 'on' : 'off'}</span></button><label htmlFor="volume">Volume</label><input id="volume" type="range" min="0" max="0.6" step="0.01" value={music.volume} onChange={event => music.setVolume(Number(event.target.value))} aria-label="Music volume" /></div>
    </div>
    <div id="petals" aria-hidden="true">{petals.map((style, i) => <span key={i} className="petal" style={style}>❀</span>)}</div>
    <audio id="music" ref={music.audio} src={asset(wedding.music)} preload="none" loop onPlay={() => music.setPlaying(true)} onPause={() => music.setPlaying(false)} />
    <p id="audio-status" className="sr-only" role="status">{music.status}</p>
  </>;
}
