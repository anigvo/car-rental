import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from '../layout/MainLayout/MainLayout';
import NotFound from 'pages/NotFound/NotFound';

const Home = lazy(() => import('pages/Home/Home.jsx'));
const Catalog = lazy(() => import('pages/Catalog/Catalog.jsx'));
const Favorites = lazy(() => import('pages/Favorites/Favorites.jsx'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
