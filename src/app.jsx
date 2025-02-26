import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './app.scss';
import MarvelCharacters from './components/marvel-characters';
import Layout from './components/router-layout';
import ComicDisplay from './pages/comics-display';
import ComicsPage from './pages/comics-page';
import FavoritePage from './pages/favorite-page';
import NotFoundPage from './pages/not-found-page';
import ProfilePage from './pages/profile-page';

const getFavoritesFromLocalStorage = () => {
  const savedFavorites = localStorage.getItem('favorites');
  return savedFavorites ? JSON.parse(savedFavorites) : [];
};

const saveFavoritesToLocalStorage = (favorites) => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

function App() {
  const [favorites, setFavorites] = useState(getFavoritesFromLocalStorage());

  useEffect(() => {
    saveFavoritesToLocalStorage(favorites);
  }, [favorites]);

  const addToFavorites = (char) => {
    if (!favorites.some((fav) => fav.id === char.id)) {
      setFavorites([...favorites, char]);
    }
  };

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<MarvelCharacters addToFavorites={addToFavorites} />} />
          <Route path='/favorites' element={<FavoritePage favorites={favorites} />} />+
          <Route path='/comics/:comicId' element={<ComicDisplay />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/comics' element={<ComicsPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
