import { couple } from './config.js';
const escape = text => text.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;');
export function calendarText(event, index) {
  return ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Wedding Invitation//EN', 'BEGIN:VEVENT', `UID:wedding-${index}-${event.start}@example.com`, `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z/, 'Z')}`, `DTSTART:${event.start}`, `DTEND:${event.end}`, `SUMMARY:${escape(`${couple} — ${event.name}`)}`, `LOCATION:${escape(`${event.venue}, ${event.address}`)}`, 'DESCRIPTION:Sample wedding event. Confirm final venue with the families.', 'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
}
export function downloadCalendar(event, index) {
  const url = URL.createObjectURL(new Blob([calendarText(event, index)], { type: 'text/calendar;charset=utf-8' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = `wedding-${event.name.toLowerCase().replaceAll(' ', '-')}.ics`;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
