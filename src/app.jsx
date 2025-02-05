import { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import './app.scss';
import Card from './components/card';
import FavoritePage from './pages/favorite-page';
import HomePage from './pages/home-page';
import ProfilePage from './pages/profile-page';

function App() {
  const [fetchData, setFetchData] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    fetch(`https://gateway.marvel.com/v1/public/characters?apikey=${publicKey}`)
      .then((res) => {
        if (!res.ok) throw new Error('Erreur réseau');
        return res.json();
      })
      .then((data) => {
        setFetchData(data.data.results);
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.error(err));
  }, []);

  const addToFavorites = (character) => {
    if (!favorites.some((fav) => fav.id === character.id)) {
      setFavorites([...favorites, character]);
    }
  };

  return (
    <>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/favorites'>Favorites</Link>
      </nav>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <HomePage />
              <ProfilePage />
              <h1>fetch</h1>
              {fetchData
                .filter((character) => character.thumbnail && character.thumbnail.path && character.thumbnail.extension)
                .slice(0, 20)
                .map((character) => {
                  return (
                    <Card
                      key={character.id}
                      character={character.name}
                      image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                      onAddToFavorites={() => addToFavorites(character)}
                    />
                  );
                })}
            </>
          }
        />
        <Route path='/favorites' element={<FavoritePage favorites={favorites} />} />
      </Routes>
    </>
  );
}

export default App;
