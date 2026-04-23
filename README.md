<<<<<<< HEAD
# IceRinkScheduler
=======
# Ice Time Tamer

React/Vite-version av en ishallssida inspirerad av `ice-time-tamer.lovable.app`, byggd for att kunna laggas i ett vanligt GitHub-repo och deployas med GitHub Pages.

## Repo-struktur

- `index.html` - Vite entry
- `src/main.jsx` - React bootstrapping
- `src/App.jsx` - UI och filtrering
- `src/styles.css` - styling
- `src/data/defaultSchedule.js` - lokal fallback-data
- `src/lib/scheduleStore.js` - datakoppling med Supabase + fallback
- `.github/workflows/deploy.yml` - GitHub Pages deployment
- `.env.example` - exempel pa miljo variabler

## Kom igang lokalt

1. Installera dependencies:
   `npm install`
2. Starta dev-server:
   `npm run dev`
3. Bygg produktion:
   `npm run build`

## Supabase-koppling

Appen laser schema fran Supabase om dessa miljo variabler finns:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `VITE_SUPABASE_TABLE`

Om de saknas eller om lasningen misslyckas anvands lokal fallback-data i `src/data/defaultSchedule.js`.

### Forvantad Supabase-struktur

Tabellen ar tankt att heta `weeks` och kan till exempel ha:

- `id` - text eller uuid
- `label` - exempel `Vecka 17`
- `subtitle` - exempel `22 april - 28 april`
- `sort_order` - nummer for sortering
- `data` - json/jsonb med veckans dagar och pass

`data` bor se ut ungefar sa har:

```json
{
  "monday": [
    {
      "start": "06:00",
      "end": "08:00",
      "title": "Bokningsbar is",
      "category": "booking",
      "team": "U14"
    }
  ]
}
```

## GitHub Pages

Workflow finns redan i `.github/workflows/deploy.yml`.

For att fa deployment att fungera:

1. Skapa ett nytt GitHub-repo och pusha projektet.
2. I GitHub: ga till `Settings -> Pages` och satt `Source` till `GitHub Actions`.
3. Om du vill lasa fran Supabase, lagg in dessa GitHub Secrets:
   `VITE_SUPABASE_URL`
   `VITE_SUPABASE_ANON_KEY`
   `VITE_SUPABASE_TABLE`

## Anpassa sidan

- Andra layout och farger i `src/styles.css`
- Byt defaultdata i `src/data/defaultSchedule.js`
- Bygg ut datalagret i `src/lib/scheduleStore.js`

## Nasta rimliga steg

- lagga till adminvyer for redigering
- koppla auth mot Supabase
- dela upp `App.jsx` i mindre komponenter
>>>>>>> 9660143 (Initial React/Vite ice rink scheduler)
