import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../style/card.scss';

export default function Card({ character, image, onAddToFavorites, onClick }) {
  const notify = () => {
    toast.success('🎉 Added to Favorites !', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,

      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'light',
    });
  };

  return (
    <div className='card' onClick={onClick}>
      <img src={image} alt={character} className='heart' />
      <div className='space'>
        <button
          className='btn favor'
          onClick={(e) => {
            e.stopPropagation();
            onAddToFavorites();
            notify();
          }}
        >
          <img className='heart ' src='/pictures/heart-cards.png' alt='' />
        </button>
        <ToastContainer />
      </div>
      <div className='character-title'>
        <h2>{character}</h2>
      </div>
    </div>
  );
}
