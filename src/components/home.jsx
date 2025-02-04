import { useState } from 'react';

import Burger from '../components/burger';
import Card from '../components/card';
import '../style/home.scss';

function Home() {
  const [input, setInput] = useState('');

  return (
    <body className='home-page'>
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

        <main className='main'>
          <Card />
        </main>
      </div>
      <nav className='arrow'>
        <input type='image' id='arrows' alt='Login' src='/pictures/arrow-left.png' />
        <input type='image' id='arrows' alt='Login' src='/pictures/arrow-right.png' />
      </nav>
    </body>
  );
}
export default Home;
