import '../style/card.scss';

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
          }}
        >
          <img className='heart ' src='/pictures/heart-cards.png' alt='' />
        </button>
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
