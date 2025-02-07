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

  console.log(displayProfil);

  return (
    <div className='card'>
      <img src={image} alt={character} onClick={handleDisplayProfil} />
      <h2>{character}</h2>
      <button onClick={onAddToFavorites}>
        <img className='heart' src='/pictures/heart-cards.png' alt='' />
      </button>
      <Modal open={displayProfil} onClose={onClose} />
    </div>
  );
}

export default Card;

//   <>

// const [isOpen, setIsOpen] = useState(false);
// const toggleModal = () => {
//   setIsOpen(!isOpen);
// };

// const onClose = () => {
//   setIsOpen(false);
// };

//   <Modal open={isOpen} onClose={onClose} />
