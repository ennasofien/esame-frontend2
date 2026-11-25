import { Link } from 'react-router-dom';
import type { MovieCardProps } from '../types/props';
import { IMAGE_BASE_URL } from '../api/tmdb';
import { formatDate } from '../utils/formatDate';

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <article className="card">
      <div className="card__poster">
        {movie.poster_path ? (
          <img src={IMAGE_BASE_URL + movie.poster_path} alt={movie.title} />
        ) : (
          'Poster'
        )}
      </div>
      <div className="card__body">
        <h2 className="card__title">{movie.title}</h2>
        <p className="card__meta">
          Uscita: {formatDate(movie.release_date)} · Voto: {movie.vote_average.toFixed(1)}
        </p>
        <p className="card__overview">{movie.overview}</p>
        <Link className="card__cta" to={`/movies/${movie.id}`}>
          Dettaglio
        </Link>
      </div>
    </article>
  );
};

export default MovieCard;
