// import { useState } from 'react';
// import '../style/card.scss';
// import Modal from './modal';
// function Card({ character, image, onAddToFavorites }) {
//   const [displayProfil, setDisplayProfil] = useState(false);
//   const handleDisplayProfil = () => {
//     setDisplayProfil(!displayProfil);
//   };
//   const onClose = () => {
//     setDisplayProfil(false);
//   };
//   return (
//     <>
//       <div className='card'>
//         <img src={image} alt={character} onClick={handleDisplayProfil} />
//         <h2>{character}</h2>
//         <button className='btn' onClick={onAddToFavorites}>
//           <img className='heart' src='/pictures/heart-cards.png' alt='' />
//         </button>
//         <Modal open={displayProfil} onClose={onClose} />
//       </div>
//     </>
//   );
// }
// export default Card;
import '../style/card.scss';

export default function Card({ character, image, onAddToFavorites, onClick }) {
  return (
    <div className='card' onClick={onClick}>
      <img src={image} alt={character} />
      <h3>{character}</h3>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onAddToFavorites();
        }}
      >
        Add to Favorites
      </button>
    </div>
  );
}
