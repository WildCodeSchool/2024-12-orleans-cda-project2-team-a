import '../style/card.scss';

export default function Card({ character, image, onAddToFavorites, onClick }) {
  return (
    <div className='card' onClick={onClick}>
      <img src={image} alt={character} className='heart' />
      <h3>{character}</h3>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onAddToFavorites();
        }}
      >
        😎
      </button>
    </div>
  );
}
