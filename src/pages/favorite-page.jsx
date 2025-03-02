import { useState } from 'react';

import Card from '../components/card';
import Modal from '../components/modal';
import Profile from '../components/profile';
import '../style/favorite-page.scss';

export default function FavoritePage({ favorites, removeFromFavorites }) {
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
          <div className='no-favorites'>
            <h1 className='h1-favorite'>No favorites added yet.</h1>
            <p>Start adding your favorite characters from the Home page!</p>
          </div>
        ) : (
          favorites.map((character) => (
            <Card
              key={character.id}
              character={character.name}
              image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              isFavorite={true} // Tous les personnages affichés sont des favoris
              isFavoritePage={true}
              onClick={() => handleCardClick(character)}
              onRemove={() => removeFromFavorites(character)}
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
