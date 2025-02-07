import { useState } from 'react';

import '../style/home.scss';
import Burger from './burger';
import Card from './card';

function Home() {
  const [input, setInput] = useState('');

  return (
    <div className='home-page'>
      <div>
        <div className='burger-home'>
          <Burger />
          <div className='searchBar'>
            <img className='glass' src='/pictures/search.png' alt='' />
            <input
              className='search'
              type='text'
              placeholder='Search'
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
        </div>

        <div className='main'>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
export default Home;
