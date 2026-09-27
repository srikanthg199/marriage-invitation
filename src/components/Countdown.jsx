import { useEffect, useState } from 'react';
import { wedding, dateLabel, timeLabel } from '../config.js';

export default function Countdown() {
  const remaining = () => Math.max(0, Math.floor((new Date(wedding.ceremony).getTime() - Date.now()) / 1000));
  const [seconds, setSeconds] = useState(remaining);
  useEffect(() => { const interval = setInterval(() => setSeconds(remaining()), 1000); return () => clearInterval(interval); }, []);
  const values = [Math.floor(seconds / 86400), Math.floor(seconds % 86400 / 3600), Math.floor(seconds % 3600 / 60), seconds % 60];
  return <section className="countdown-section reveal"><p className="eyebrow">EVERY MOMENT BRINGS US CLOSER</p><h2>Counting down to forever</h2><div id="countdown" className="countdown" role="timer" aria-label={seconds ? 'Time until the wedding' : 'The wedding day is here'}>{['DAYS', 'HOURS', 'MINUTES', 'SECONDS'].map((label, i) => <div key={label}><strong key={values[i]} className="tick">{String(values[i]).padStart(2, '0')}</strong><span>{label}</span></div>)}</div><p>{dateLabel} · {timeLabel} ({wedding.timeZone})</p></section>;
}
