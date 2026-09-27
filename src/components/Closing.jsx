import { wedding, asset, dateLabel, weekdayLabel, shortDate } from '../config.js';

export default function Closing() {
 return (<><footer><p className="script">Your presence is our greatest gift.</p><h2>Come for the celebration.<br />Stay for the memories.</h2><p>We look forward to celebrating, laughing, and beginning<br />this beautiful journey with your love and blessings.</p><div className="footer-monogram">{wedding.groom.name[0]} <i>&</i> {wedding.bride.name[0]}</div><p className="eyebrow">{dateLabel} · {wedding.city.toUpperCase()}</p><small>With love, the {wedding.groom.surname} & {wedding.bride.surname} families</small></footer></>);
}
