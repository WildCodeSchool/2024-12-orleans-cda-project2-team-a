import { useState } from 'react';

import '../style/home.scss';
import Burger from './burger';
import MarvelCharacters from './marvel-characters';

function Home() {
  const [input, setInput] = useState('');

  return (
    <div className='home-page'>
      <div>
        <div className='burger-home'>
          <Burger />
          <img className='glass' src='/pictures/search.png' alt='' />
          <input
            className='search'
            type='text'
            placeholder='Search'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        <div className='main'>
          <MarvelCharacters />
        </div>
      </div>
      <nav className='arrow'>
        <input type='image' id='arrows' alt='Login' src='/pictures/arrow-left.png' />
        <input type='image' id='arrows' alt='Login' src='/pictures/arrow-right.png' />
      </nav>
    </div>
  );
}
export default Home;
