/* eslint-disable no-console */
import { useEffect, useState } from 'react';

import Card from '../components/card';
import Modal from '../components/modal';
import Profile from '../components/profile';

// import '../style/marvel-characters.scss';

const publicKey = import.meta.env.VITE_PUBLIC_KEY;

export default function MarvelCharacters({ addToFavorites }) {
  const [marvelCharacter, setMarvelCharacter] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [comics, setComics] = useState([]);

  useEffect(() => {
    const apiComics = `https://gateway.marvel.com/v1/public/characters?apikey=${publicKey}&limit=100`;

    fetch(apiComics)
      .then((res) => {
        if (!res.ok) throw new Error('Erreur réseau');
        return res.json();
      })
      .then((data) => {
        setMarvelCharacter(data.data.results);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleAddToFavorites = (character) => {
    addToFavorites(character);
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

  return (
    <div className='characters-comics'>
      <div className='grid-box'>
        {marvelCharacter
          .filter(
            (marvel) =>
              marvel.thumbnail &&
              marvel.thumbnail.path &&
              marvel.thumbnail.extension &&
              !marvel.thumbnail.path.includes('image_not_available'),
          )
          .slice(0, 20)
          .filter(
            (marvel) =>
              marvel.thumbnail &&
              marvel.thumbnail.path &&
              marvel.thumbnail.extension &&
              !marvel.thumbnail.path.includes('image_not_available'),
          )
          .slice(0, 20)
          .map((character) => (
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
              title={selectedCharacter.title}
              description={selectedCharacter.description}
              comics={comics.filter((comic) => comic.description).slice(0, 5)}
            />
          )}
        </Modal>
      </div>
    </div>
  );
}
