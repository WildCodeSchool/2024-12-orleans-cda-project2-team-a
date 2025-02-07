import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './app.scss';
import MarvelCharacters from './components/marvel-characters';
import Layout from './components/router-layout';
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
      <Layout>
        <Routes>
          <Route path='/' element={<MarvelCharacters addToFavorites={addToFavorites} />} />
          <Route path='/favorites' element={<FavoritePage favorites={favorites} />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
