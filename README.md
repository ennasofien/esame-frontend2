# Movie App – esame Frontend 2

Ciao! Questo è il mio progetto per l'esame M9: un piccolo sito in **React + TypeScript** che mostra i film del **Signore degli Anelli**, prendendo i dati dalle API di **TMDB**.

## Cosa fa

- **`/`** → la lista dei film (sempre la stessa ricerca, solo la prima pagina, niente filtri)
- **`/movies/:id`** → il dettaglio di un film, caricato in base al numero nell'indirizzo

Tutte e due le pagine hanno lo stesso header, perché stanno dentro la stessa `Shell`.

## Come farlo partire

1. `cd esame-frontend2-ennassiri`
2. `npm install`
3. Crea il file `.env` (copia `.env.example`) e scrivi la tua chiave: `VITE_TMDB_API_KEY=la_tua_chiave`
4. `npm run dev` e apri il link che compare nel terminale

## Come è fatto

Il sito è diviso in pezzi piccoli (componenti), ognuno fa una cosa sola:
**Header** (barra in alto), **Shell** (contenitore comune), **PageHeading** (titolo della lista),
**MovieGrid** (la griglia), **MovieCard** (la card di un film), **BackLink** (torna alla lista),
**MovieInfo** (tutte le info nel dettaglio).

Per i dati uso `useState` per salvarli, `useEffect` per far partire la richiesta quando si apre la pagina e `fetch` per chiamare l'API.
Mentre carica scrive "Caricamento…", e se qualcosa va storto mostra un messaggio di errore.

Fatto da **Soufian Ennassiri**
