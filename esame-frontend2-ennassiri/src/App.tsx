import { Routes, Route } from 'react-router-dom';
import Shell from './components/Shell.tsx';
import MovieListPage from './pages/MovieListPage.tsx';
import MovieDetailPage from './pages/MovieDetailPage.tsx';

const App = () => {
  return (
    <Routes>
      <Route element={<Shell />}>
        <Route path="/" element={<MovieListPage />} />
        <Route path="/movies/:id" element={<MovieDetailPage />} />
      </Route>
    </Routes>
  );
};

export default App;
