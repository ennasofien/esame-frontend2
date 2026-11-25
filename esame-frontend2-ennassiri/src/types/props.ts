import type { MovieListItem } from './movieList';
import type { MovieDetail } from './movieDetail';

// titolo e sottotitolo in cima alla pagina elenco
export type PageHeadingProps = {
  title: string;
  subtitle: string;
};

// griglia che contiene le card
export type MovieGridProps = {
  movies: MovieListItem[];
};

// singola card dell'elenco
export type MovieCardProps = {
  movie: MovieListItem;
};

// blocco con poster e informazioni nella pagina di dettaglio
export type MovieInfoProps = {
  movie: MovieDetail;
};
