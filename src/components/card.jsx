import { useState } from 'react';

import '../style/card.scss';
import Modal from './modal';

function Card({ character, image, onAddToFavorites }) {
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
        <div className='character-title'>
          <h2>{character}</h2>
        </div>
        <button className='btn' onClick={onAddToFavorites}>
          <img className='heart' src='/pictures/heart-cards.png' alt='' />
        </button>
        <Modal open={displayProfil} onClose={onClose} />
      </div>
    </>
  );
}

export default Card;
