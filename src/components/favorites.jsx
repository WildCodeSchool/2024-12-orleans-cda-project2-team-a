import '../style/card.scss';
import '../style/favorite-responsive.scss';
import '../style/favorites.scss';
import Card from './card';

function Favorites() {
  return (
    <body className='favorite'>
      <h1 className='Favorite-typo'>My Favorite Characters</h1>

      <Card />
    </body>
  );
}

export default Favorites;
