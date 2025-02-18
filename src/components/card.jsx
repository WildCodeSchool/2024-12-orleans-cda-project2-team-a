import { useState } from 'react';

import '../style/card.scss';
import Modal from './modal';

function Card({ character, image, onAddToFavorites, isFavoritePage }) {
  const [displayProfil, setDisplayProfil] = useState(false);

  const handleDisplayProfil = () => {
    setDisplayProfil(!displayProfil);
  };
  const onClose = () => {
    setDisplayProfil(false);
  };

  return (
    <>
      <div className='card'>
        <img src={image} alt={character} onClick={handleDisplayProfil} />
        <div className='space'>
          {!isFavoritePage && (
            <button
              className='btn'
              onClick={(e) => {
                e.stopPropagation();
                onAddToFavorites();
              }}
            >
              <img className='heart' src='/pictures/heart-cards.png' alt='' />
            </button>
          )}
        </div>

        <div className='character-title'>
          <h2 onClick={handleDisplayProfil}>{character}</h2>
        </div>

        <Modal open={displayProfil} onClose={onClose} />
      </div>
    </>
  );
}

export default Card;
