import { useParams } from 'react-router-dom';

const MovieDetailPage = () => {
  const { id } = useParams();

  return <h1 className="detail__title">Dettaglio movie {id}</h1>;
};

export default MovieDetailPage;
