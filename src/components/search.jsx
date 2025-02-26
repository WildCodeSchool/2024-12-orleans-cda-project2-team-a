import { useState } from 'react';

import '../style/search.scss';
import Characters from './characters.jsx';
import Comics from './comics.jsx';

const publicKey = import.meta.env.VITE_PUBLIC_KEY;

export default function Search() {
  const [characterData, setCharacterData] = useState(null);
  const [comicData, setComicData] = useState(null);
  const [characterName, setCharacterName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    getCharacterData();
  };

  const getCharacterData = () => {
    setCharacterData(null);
    setComicData(null);

    const url = `https://gateway.marvel.com/v1/public/characters?apikey=${publicKey}&&nameStartsWith=${characterName}&limit=100`;

    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        const filteredCharacters = result.data.results.filter(
          (character) => !character.thumbnail.path.includes('image_not_available'),
        );
        setCharacterData({ ...result.data, results: filteredCharacters });
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error));
  };

  const getComicData = (characterId) => {
    window.scrollTo({ top: 0, left: 0 });

    const url = `https://gateway.marvel.com/v1/public/characters/${characterId}/comics?apikey=${publicKey}`;

    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        const filteredComics = result.data.results.filter(
          (comic) => !comic.thumbnail.path.includes('image_not_available'),
        );
        setComicData({ ...result.data, results: filteredComics });
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error));
  };

  const handleChange = (event) => {
    setCharacterName(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Search' onChange={handleChange} />
      </form>

      {!comicData && characterData && characterData.results[0] && (
        <Characters data={characterData.results} onClick={getComicData} />
      )}

      {comicData && comicData.results[0] && <Comics data={comicData.results} onClick={() => {}} />}
    </>
  );
}
