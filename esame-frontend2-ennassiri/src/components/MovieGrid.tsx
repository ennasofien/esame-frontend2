import type { MovieGridProps } from '../types/props';
import MovieCard from './MovieCard.tsx';

const MovieGrid = ({ movies }: MovieGridProps) => {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieGrid;
