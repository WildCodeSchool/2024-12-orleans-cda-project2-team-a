import Card from '../components/card';

export default function FavoritePage({ favorites }) {
  return (
    <div>
      <h1>Favorites</h1>
      <div className='grid-box'>
        {favorites.length === 0 ? (
          <p>No favorites added yet.</p>
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
    </div>
  );
}
