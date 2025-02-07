import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import './app.scss';
import ComicsMarvel from './components/comics-marvel';
import MarvelCharacters from './components/marvel-characters';
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
      <ComicsMarvel />
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/favorites'>Favorites</Link>
      </nav>
      <Routes>
        <Route path='/' element={<MarvelCharacters addToFavorites={addToFavorites} />} />
        <Route path='/favorites' element={<FavoritePage favorites={favorites} />} />
      </Routes>
    </>
  );
}

export default App;
