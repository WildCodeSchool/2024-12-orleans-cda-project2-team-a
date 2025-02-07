import '../style/card.scss';

function Card({ character, image, onAddToFavorites }) {
  return (
    <div className='card'>
      <img src={image} alt={character} />
      <h2>{character}</h2>
      <button onClick={onAddToFavorites}>
        <img className='heart' src='/pictures/heart-cards.png' alt='' />
      </button>
    </div>
  );
}

export default Card;
