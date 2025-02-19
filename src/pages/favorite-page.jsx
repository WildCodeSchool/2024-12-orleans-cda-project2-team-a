import Card from '../components/card';
import '../style/burger.scss';
import '../style/card.scss';

export default function FavoritePage({ favorites }) {
  return (
    <div className='favorite'>
      <div className='grid-box'>
        {favorites.length === 0 ? (
          <h1>No favorites added yet.</h1>
        ) : (
          favorites.map((character) => (
            <Card
              key={character.id}
              character={character.name}
              image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              isFavoritePage={true}
            />
          ))
        )}
      </div>
    </div>
  );
}
