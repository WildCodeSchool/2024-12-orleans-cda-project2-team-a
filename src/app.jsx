import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './app.scss';
import MarvelCharacters from './components/marvel-characters';
import Layout from './components/router-layout';
import ComicDetail from './pages/comics-display';
import FavoritePage from './pages/favorite-page';
import NotFound from './pages/not-found-page';
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
          <Route path='/favorites' element={<FavoritePage favorites={favorites} />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/comics/:comicId' element={<ComicDetail />} />
          <Route path='/profile' element={<ProfilePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
