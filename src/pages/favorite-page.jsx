import { useState } from 'react';

import Card from '../components/card';
import Modal from '../components/modal';
import Profile from '../components/profile';
import '../style/burger.scss';
import '../style/card.scss';
import '../style/favorite-page.scss';

export default function FavoritePage({ favorites }) {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [comics, setComics] = useState([]);

  const fetchComics = (characterId) => {
    const apiComicsUrl = `https://gateway.marvel.com/v1/public/characters/${characterId}/comics?apikey=${import.meta.env.VITE_PUBLIC_KEY}`;

    fetch(apiComicsUrl)
      .then((res) => res.json())
      .then((data) => {
        setComics(data.data.results.filter((comic) => comic.description));
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.error(err));
  };

  const handleCardClick = (character) => {
    setSelectedCharacter({
      ...character,
      image: `${character.thumbnail.path}.${character.thumbnail.extension}`,
    });
    fetchComics(character.id);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCharacter(null);
    setComics([]);
  };

  return (
    <div className='favorite'>
      <h1 className='typo'>My Favorite Characters</h1>
      <div className='grid-box'>
        {favorites.length === 0 ? (
          <h1>No favorites added yet.</h1>
        ) : (
          favorites.map((character) => (
            <Card
              key={character.id}
              character={character.name}
              image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              isFavoritePage={true}
              onClick={() => handleCardClick(character)}
            />
          ))
        )}
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedCharacter && (
          <Profile
            characterMarvel={selectedCharacter.name}
            img={selectedCharacter.image}
            title={selectedCharacter.title}
            description={selectedCharacter.description || 'No description available.'}
            comics={comics.slice(0, 5)}
          />
        )}
      </Modal>
    </div>
  );
}
