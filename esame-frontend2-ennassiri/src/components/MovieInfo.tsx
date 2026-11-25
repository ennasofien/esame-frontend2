import type { MovieInfoProps } from '../types/props';
import { IMAGE_BASE_URL } from '../api/tmdb';
import { formatDate } from '../utils/formatDate';

const MovieInfo = ({ movie }: MovieInfoProps) => {
  const companies = movie.production_companies.map((company) => company.name).join(' · ');

  return (
    <article className="detail">
      <div>
        <div className="detail__poster">
          {movie.poster_path ? (
            <img src={IMAGE_BASE_URL + movie.poster_path} alt={movie.title} />
          ) : (
            'Poster'
          )}
        </div>
      </div>

      <div>
        <h1 className="detail__title">{movie.title}</h1>
        {movie.tagline && <p className="detail__tagline">“{movie.tagline}”</p>}

        <ul className="detail__meta">
          <li>Uscita: {formatDate(movie.release_date)}</li>
          <li>Durata: {movie.runtime ? movie.runtime + ' min' : 'n.d.'}</li>
          <li>Voto: {movie.vote_average.toFixed(1)}</li>
          <li>Voti: {movie.vote_count.toLocaleString('it-IT')}</li>
          <li>Stato: {movie.status}</li>
          <li>Lingua: {movie.original_language}</li>
        </ul>

        <div className="detail__genres">
          {movie.genres.map((genre) => (
            <span key={genre.id} className="genre">
              {genre.name}
            </span>
          ))}
        </div>

        <p className="detail__overview-label">Trama</p>
        <p className="detail__overview">{movie.overview || 'Trama non disponibile.'}</p>

        {companies && <p className="card__meta">Produzione: {companies}</p>}
      </div>
    </article>
  );
};

export default MovieInfo;
