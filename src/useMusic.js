import { useEffect, useRef, useState } from 'react';
export function recall(key) { try { return localStorage.getItem(key); } catch { return null; } }
function remember(key, value) { try { localStorage.setItem(key, value); } catch { /* Storage can be disabled. */ } }
export default function useMusic() {
  const audio = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [status, setStatus] = useState('');
  const [volume, setVolume] = useState(() => { const saved = Number(recall('wedding-volume') ?? .15); return Number.isFinite(saved) ? Math.min(.6, Math.max(0, saved)) : .15; });
  useEffect(() => { audio.current.volume = volume; remember('wedding-volume', volume); }, [volume]);
  async function play() {
    try { await audio.current.play(); setPlaying(true); setStatus(''); remember('wedding-music', 'on'); }
    catch { setStatus('Music could not start. Use the music button to try again.'); setPlaying(false); }
  }
  function pause() { audio.current.pause(); setPlaying(false); remember('wedding-music', 'off'); }
  return { audio, playing, setPlaying, volume, setVolume, status, play, pause };
}
