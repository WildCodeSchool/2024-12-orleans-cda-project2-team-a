import md5 from 'md5';
import { useCallback, useEffect, useRef, useState } from 'react';

const Appp = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const privateKey = import.meta.env.VITE_PRIVATE_KEY;

  const observer = useRef();
  const lastCharacterRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore],
  );

  const fetchCharacters = async (page) => {
    setLoading(true);
    setError(null);
    try {
      const timestamp = new Date().getTime();
      const hash = md5(timestamp + privateKey + publicKey);
      const offset = page * 20;
      const response = await fetch(
        `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&offset=${offset}&limit=20`,
      );
      if (!response.ok) {
        throw new Error("La réponse du réseau n'était pas correcte");
      }
      const data = await response.json();
      const filteredCharacters = data.data.results.filter(
        (character) =>
          character.description &&
          character.thumbnail.path !== 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
      );

      // Filter out duplicates
      const uniqueCharacters = filteredCharacters.filter((character) => {
        return !characters.some((existingCharacter) => existingCharacter.id === character.id);
      });

      setCharacters((prevCharacters) => [...prevCharacters, ...uniqueCharacters]);
      setHasMore(data.data.results.length > 0);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters(page);
  }, [page]);

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  return (
    <div className='container'>
      <h1>Marvel Characters</h1>
      <div className='character-grid'>
        {characters.map((character, index) => {
          // Hide the first four characters
          if (index < 4) return null;

          if (characters.length === index + 1) {
            return (
              <div ref={lastCharacterRef} className='character-card' key={character.id}>
                <img
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  alt={character.name}
                  className='character-image'
                />
                <h2 className='character-name'>{character.name}</h2>
                <p className='character-description'>{character.description}</p>
              </div>
            );
          } else {
            return (
              <div className='character-card' key={character.id}>
                <img
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  alt={character.name}
                  className='character-image'
                />
                <h2 className='character-name'>{character.name}</h2>
                <p className='character-description'>{character.description}</p>
              </div>
            );
          }
        })}
      </div>
      {loading && <div>Chargement...</div>}
    </div>
  );
};

export default Appp;
