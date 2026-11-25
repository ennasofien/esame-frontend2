import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { MovieDetail } from '../types/movieDetail';
import type { FetchStatus } from '../types/movieList';
import { getDetailUrl } from '../api/tmdb';
import BackLink from '../components/BackLink.tsx';
import MovieInfo from '../components/MovieInfo.tsx';

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieDetail | null>(null);
  const [status, setStatus] = useState<FetchStatus>('loading');

  useEffect(() => {
    if (!id) return;

    fetch(getDetailUrl(id))
      .then((res) => {
        if (!res.ok) throw new Error('Errore ' + res.status);
        return res.json();
      })
      .then((data: MovieDetail) => {
        setMovie(data);
        setStatus('success');
      })
      .catch(() => setStatus('error'));
  }, [id]);

  return (
    <>
      <BackLink />

      {status === 'loading' && <p className="note">Caricamento del film…</p>}
      {status === 'error' && <p className="note">Film non trovato o errore di caricamento.</p>}
      {status === 'success' && movie && <MovieInfo movie={movie} />}
    </>
  );
};

export default MovieDetailPage;
