import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './app.scss';
import MarvelCharacters from './components/marvel-characters';
import Layout from './components/router-layout';
import ComicPage from './pages/comics-page';

import ComicDetail from './pages/comics-display';
import FavoritePage from './pages/favorite-page';
import NotFound from './pages/not-found-page';
import ProfilePage from './pages/profile-page';

function App() {
  const [favorites, setFavorites] = useState([]);

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
          <Route path='/comics' element={<ComicPage />}></Route>

          <Route path='/comics/:comicId' element={<ComicDetail />} />
          <Route path='/profile' element={<ProfilePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
