import { wedding, asset, dateLabel, weekdayLabel, shortDate } from '../config.js';

export default function Contact() {
 return (<><section id="contact" className="section contact reveal"><p className="eyebrow">WE’RE HERE TO HELP</p><h2>Find your way to the celebration</h2><p className="intro">For directions or a little help with your visit,<br />reach out to either family.</p><div className="contact-grid">{wedding.contacts.map(contact => <article key={contact.label}><p className="eyebrow">{contact.label}</p><h3>{contact.name}</h3><p>{contact.phone ? <a href={`tel:${contact.phone}`}>{contact.phone}</a> : 'Phone number to be added'}</p><a href={`mailto:${contact.email}`}>{contact.email} ↗</a></article>)}</div><p className="photo-note">Sample contacts — please replace before sharing with guests.</p></section></>);
}
