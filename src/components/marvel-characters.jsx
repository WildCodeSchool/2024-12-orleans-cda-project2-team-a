import { useEffect, useState } from 'react';

import Card from './card';

const publicKey = import.meta.env.VITE_PUBLIC_KEY;

export default function MarvelCharacters({ addToFavorites }) {
  const [marvelCharacter, setMarvelCharacter] = useState([]);

  useEffect(() => {
    fetch(`https://gateway.marvel.com/v1/public/characters?apikey=${publicKey}`)
      .then((res) => {
        if (!res.ok) throw new Error('Erreur réseau');
        return res.json();
      })
      .then((data) => {
        setMarvelCharacter(data.data.results);
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.error(err));
  }, []);

  const handleAddToFavorites = (character) => {
    addToFavorites(character);
  };

  return (
    <div>
      <h1>Marvel Characters</h1>
      <div className='flex'>
        {marvelCharacter
          .filter((marvel) => marvel.thumbnail && marvel.thumbnail.path && marvel.thumbnail.extension)
          .slice(0, 20)
          .map((character) => (
            <Card
              key={character.id}
              character={character.name}
              image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              onAddToFavorites={() => handleAddToFavorites(character)}
            />
          ))}
      </div>
    </div>
  );
}
