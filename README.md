# South Indian Wedding Invitation — React + Vite

A responsive React invitation with Lord Ganesha artwork, animated doors, sample Telugu wedding events, countdown, music controls, calendar downloads and a keyboard/touch photo gallery.

## Run locally

Use Node.js 22.13+ and pnpm 11.19+.

```sh
pnpm install
pnpm dev
```

Open http://127.0.0.1:5173. Vite automatically reloads your changes.

```sh
pnpm build
pnpm preview
```

The production website is generated in `dist/`. Deploy that folder to any static host. The relative Vite base supports repository subpaths. Opening index.html directly from the filesystem is not supported; use the dev or preview server.

## Personalize

Edit `src/wedding.js` for names, parents, hometowns, ceremony date/time zone, invitation text, blessing, contacts, music, event schedules, venue addresses and gallery paths. Date headings and monograms are derived from that file. Event calendar timestamps use UTC: update start/end along with each displayed event time. Set an optional `mapsUrl` on each event for verified venue directions.

- `src/components/`: welcome, families, countdown, events, gallery, contact and closing sections.
- `src/App.jsx`: opening and scroll animation lifecycle.
- `src/useMusic.js`: playback, volume and saved preferences.
- `src/calendar.js`: calendar file generation.
- `src/styles/`: preserved typography, responsive design and South Indian theme.
- `public/assets/`: optimized artwork, photos, locally served fonts and music.

Names, venues, contacts and the muhurtham are samples. Confirm family customs and final details before sharing. Directions currently point to sample neighbourhoods. The music is an original synthesized flute-style sample; replace it with a licensed recording if desired.

Artwork was created with the built-in image-generation tool: a respectful gold/vermilion Lord Ganesha on a lotus; a carved South Indian mandap with jasmine, marigolds, banana leaves and brass lamps; fictional South Indian wedding portraits and details. Gallery photographs are labelled as AI-generated samples.

No backend is required. Music preferences remain in the visitor's browser. Motion respects reduced-motion settings. `dist/` and `node_modules/` are generated locally and excluded from Git.
