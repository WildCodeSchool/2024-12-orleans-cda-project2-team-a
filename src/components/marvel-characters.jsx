import { useEffect, useState } from 'react';

import Card from '../components/card';
import Modal from '../components/modal';
import Profile from '../components/profile';
import Loader from './loader';

const publicKey = import.meta.env.VITE_PUBLIC_KEY;

export default function MarvelCharacters({ addToFavorites }) {
  const [marvelCharacter, setMarvelCharacter] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [comics, setComics] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [err, setError] = useState(null);
  const charactersPerPage = 15;

  useEffect(() => {
    const apiComics = `https://gateway.marvel.com/v1/public/characters?apikey=${publicKey}&limit=40`;

    fetch(apiComics)
      .then((res) => {
        if (!res.ok) throw new Error('Erreur réseau');
        return res.json();
      })
      .then((data) => {
        const filteredCharacters = data.data.results.filter(
          (marvel) =>
            marvel.thumbnail &&
            marvel.thumbnail.path &&
            marvel.thumbnail.extension &&
            !marvel.thumbnail.path.includes('image_not_available'),
        );
        setLoading(false);
        setMarvelCharacter(filteredCharacters);
      })

      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div>
        <Loader />
      </div>
    );
  const handleAddToFavorites = (character) => {
    addToFavorites(character);
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if ((currentPage + 1) * charactersPerPage < marvelCharacter.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleCardClick = (character) => {
    setSelectedCharacter(character);
    fetchComics(character.id);
    setIsModalOpen(true);
  };

  const fetchComics = (characterId) => {
    const apiComicsUrl = `https://gateway.marvel.com/v1/public/characters/${characterId}/comics?apikey=${publicKey}`;

    fetch(apiComicsUrl)
      .then((res) => {
        if (!res.ok) throw new Error('Erreur réseau');
        return res.json();
      })
      .then((data) => {
        setComics(data.data.results);
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.error(err));
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCharacter(null);
    setComics([]);
  };

  const displayedCharacters = marvelCharacter
    .filter(
      (marvel) =>
        marvel.thumbnail &&
        marvel.thumbnail.path &&
        marvel.thumbnail.extension &&
        !marvel.thumbnail.path.includes('image_not_available'),
    )
    .slice(currentPage * charactersPerPage, (currentPage + 1) * charactersPerPage);

  if (err) return <div>Error: {err.message}</div>;

  return (
    <div className='characters-comics'>
      <div className='pagination'>
        <button onClick={handlePrev}>prev</button>
        <button onClick={handleNext}>next</button>
      </div>
      <div className='grid-box'>
        {displayedCharacters.map((character) => (
          <Card
            key={character.id}
            character={character.name}
            image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            onAddToFavorites={() => handleAddToFavorites(character)}
            onClick={() => handleCardClick(character)}
          />
        ))}
      </div>
      <div className='comics-modal'>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          {selectedCharacter && (
            <Profile
              characterMarvel={selectedCharacter.name}
              img={`${selectedCharacter.thumbnail.path}.${selectedCharacter.thumbnail.extension}`}
              description={selectedCharacter.description}
              comics={comics.filter((comic) => comic.description).slice(0, 5)}
            />
          )}
        </Modal>
      </div>
    </div>
  );
}
