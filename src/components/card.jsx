import '../style/card.scss';

function Card({ character, image, onAddToFavorites }) {
  return (
    <div className='card'>
      <img src={image} alt={character} />
      <h2>{character}</h2>
      <button onClick={onAddToFavorites}>Add to Favorites</button>
    </div>
  );
}

export default Card;
