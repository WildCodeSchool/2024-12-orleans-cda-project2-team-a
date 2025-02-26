import { useEffect, useState } from 'react';

import Card from '../components/card';
import Modal from '../components/modal';
import Profile from '../components/profile';
import '../style/marvel-characters.scss';
import Loader from './loader';

const publicKey = import.meta.env.VITE_PUBLIC_KEY;
const charactersPerPage = 15;

export default function MarvelCharacters({ addToFavorites }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [comics, setComics] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [marvelCharacter, setMarvelCharacter] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [count, setcount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [err, setError] = useState(null);

  useEffect(() => {
    const apiComics = `https://gateway.marvel.com/v1/public/characters?apikey=${publicKey}&limit=100`;

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
      setCurrentPage((prevPage) => prevPage - 1);
      setcount((prevCount) => Math.max(prevCount - 1, 0));
    }
  };

  const handleNext = () => {
    if (count <= 3) {
      if ((currentPage + 1) * charactersPerPage < marvelCharacter.length) {
        setCurrentPage(currentPage + 1);
      }
      setcount(count + 1);
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
        <button className='btn-left' onClick={handlePrev}>
          {`<`}
        </button>
        <button className='btn-right' onClick={handleNext} disabled={count >= 3}>
          {`>`}
        </button>
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
