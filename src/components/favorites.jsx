import '../style/burger.scss';
import '../style/favorites.scss';

import Burger from './burger';

function Favorites() {
  return (
    <>
      <Burger />
      <div className='favorite'>
        <h1 className='Favorite-typo'>My Favorite Characters</h1>
      </div>
    </>


  );
}

export default Favorites;
