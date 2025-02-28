import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../style/card.scss';

const notify = (character) => {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  if (favorites.some((fav) => fav.name === character)) {
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

export default function Card({ character, image, onAddToFavorites, onClick, onRemove, isFavoritePage }) {
  return (
    <div className='card' onClick={onClick}>
      <img src={image} alt={character} className='heart' />
      <div className='space'>
        <button
          className='btn favor'
          onClick={(e) => {
            e.stopPropagation();
            onAddToFavorites();
            notify(character);
          }}
        >
          <img className='heart ' src='/pictures/heart-cards.png' alt='' />
        </button>

        <ToastContainer />

        {isFavoritePage && (
          <button
            className='delete-fav'
            onClick={(e) => {
              e.stopPropagation();
              onRemove();
            }}
          >
            <img className='remove-fav' src='/pictures/remove-fave.svg' alt='' />
          </button>
        )}
      </div>
      <div className='character-title'>
        <h2>{character}</h2>
      </div>
    </div>
  );
}
