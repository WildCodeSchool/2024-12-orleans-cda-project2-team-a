import Burger from '../components/burger';
import Card from '../components/card';
import '../style/burger.scss';
import '../style/favorites.scss';

export default function FavoritePage({ favorites }) {
  return (
    <div className='favorite'>
      <Burger />

      <h1 className='Favorite-typo'>My Favorite Characters</h1>

      {favorites.length === 0 ? (
        <h1>No favorites added yet.</h1>
      ) : (
        favorites.map((character) => (
          <Card
            key={character.id}
            character={character.name}
            image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          />
        ))
      )}
    </div>
  );
}
