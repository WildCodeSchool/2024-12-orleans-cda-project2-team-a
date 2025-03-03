import React from 'react';
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
const pictures = import.meta.env.BASE_URL;

export default function Card({ character, image, isFavorite, onAddToFavorites, onClick, isFavoritePage, onRemove }) {
  const handleFavoriteClick = (e) => {
    e.stopPropagation();

    if (!isFavorite) {
      onAddToFavorites();
      notify(character, false);
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
            src={isFavorite ? `${pictures}pictures/heart-cards.png` : `${pictures}pictures/heart.png`}
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
            <img className='remove-fav' src={`${pictures}pictures/remove-fav.svg`} alt='' />
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
