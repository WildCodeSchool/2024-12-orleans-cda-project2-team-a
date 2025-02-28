import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../style/card.scss';

const notify = (character, isFavorite) => {
  if (isFavorite) {
    toast.info(`🔔 ${character} is already in your Favorites!`, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'light',
    });
  } else {
    toast.success(`🎉 ${character} Added to Favorites!`, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'light',
    });
  }
};

export default function Card({ character, image, onAddToFavorites, onClick, isFavoritePage, onRemove }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (favorites.includes(character)) {
      setIsFavorite(true);
    }
  }, [character]);

  const handleFavoriteClick = (e) => {
    e.stopPropagation();

    if (!isFavorite) {
      setIsFavorite(true);
      onAddToFavorites();
      notify(character, false);

      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      favorites.push(character);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    } else {
      notify(character, true);
    }
  };

  return (
    <div className='card' onClick={onClick}>
      <img src={image} alt={character} className='heart' />

      <div className='space'>
        <button className='btn favor' onClick={handleFavoriteClick}>
          <img
            className='heart'
            src={isFavorite ? '/pictures/heart-cards.png' : '/pictures/heart.png'}
            alt='favorite icon'
          />
        </button>
        {isFavoritePage && (
          <button
            className='delete-fav'
            onClick={(e) => {
              e.stopPropagation();
              onRemove();
            }}
          >
            <img className='remove-fav' src='/pictures/remove-fav.svg' alt='' />
          </button>
        )}
      </div>

      <ToastContainer />

      <div className='character-title'>
        <h2>{character}</h2>
      </div>
    </div>
  );
}
