import { useEffect, useState } from 'react';
import type { FetchStatus, MovieListItem, MovieSearchResponse } from '../types/movieList';
import { SEARCH_URL } from '../api/tmdb';
import PageHeading from '../components/PageHeading.tsx';
import MovieGrid from '../components/MovieGrid.tsx';

const MovieListPage = () => {
  const [movies, setMovies] = useState<MovieListItem[]>([]);
  const [status, setStatus] = useState<FetchStatus>('loading');

  useEffect(() => {
    fetch(SEARCH_URL)
      .then((res) => {
        if (!res.ok) throw new Error('Errore ' + res.status);
        return res.json();
      })
      .then((data: MovieSearchResponse) => {
        setMovies(data.results);
        setStatus('success');
      })
      .catch(() => setStatus('error'));
  }, []);

  return (
    <>
      <PageHeading
        title="The Lord of the Rings"
        subtitle="Risultati fissi da API · query=The Lord of the Rings · page=1 · max 20 items · senza filtri / paginazione"
      />

      {status === 'loading' && <p className="note">Caricamento dei film…</p>}
      {status === 'error' && <p className="note">Impossibile caricare i film. Riprova più tardi.</p>}
      {status === 'success' && movies.length === 0 && <p className="note">Nessun film trovato.</p>}
      {status === 'success' && movies.length > 0 && <MovieGrid movies={movies} />}
    </>
  );
};

export default MovieListPage;
