import Card from '../components/card';
import '../style/favorite-page.scss';

export default function FavoritePage({ favorites }) {
  return (
    <div className='favorite-container'>
      <h1>Favorites</h1>
      <div className='grid-box'>
        {favorites.length === 0 ? (
          <p>No favorites added yet.</p>
        ) : (
          favorites.map((character) => (
            <Card
              className='test'
              key={character.id}
              character={character.name}
              image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            />
          ))
        )}
      </div>
    </div>
  );
}
