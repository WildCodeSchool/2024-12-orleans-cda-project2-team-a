import { Link } from 'react-router-dom';

import Card from '../components/card';
import '../style/burger.scss';
import '../style/card.scss';
import '../style/favorite-page.scss';

export default function FavoritePage({ favorites }) {
  return (
    <div className='favorite'>
      <h1 className='typo'>My Favorite Characters</h1>
      <div className='grid-box'>
        {favorites.length === 0 ? (
          <h1>No favorites added yet.</h1>
        ) : (
          favorites.map((character) => (
            <Link to={`/${character.id}`} key={character.id}>
              <Card
                key={character.id}
                character={character.name}
                image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                isFavoritePage={true}
              />
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
