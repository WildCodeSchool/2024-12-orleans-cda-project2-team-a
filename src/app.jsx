import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './app.scss';
import MarvelCharacters from './components/marvel-characters';
import Layout from './components/router-layout';
import NotFound from './pages/404-Page';
import FavoritePage from './pages/favorite-page';

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
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='/' element={<MarvelCharacters addToFavorites={addToFavorites} />} />
          <Route path='/favorites' element={<FavoritePage favorites={favorites} />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
