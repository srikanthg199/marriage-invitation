import { wedding, asset, dateLabel, weekdayLabel, shortDate } from '../config.js';

export default function Header() {
 return (<><div className="sacred-header"><img src={asset(wedding.ganesha)} alt="Lord Ganesha" /><div><p className="eyebrow">AN AUSPICIOUS BEGINNING</p><p>{wedding.blessing}</p><span>{wedding.blessingMeaning}</span></div></div><header><a className="monogram" href="#home" aria-label="Wedding invitation home">{wedding.groom.name[0]} <i>&</i> {wedding.bride.name[0]}</a><nav aria-label="Main navigation"><a href="#families">Our families</a><a href="#events">Celebrations</a><a href="#gallery">Gallery</a><a href="#contact">Contact</a></nav><a className="header-date" href="#events">{shortDate}</a></header></>);
}
