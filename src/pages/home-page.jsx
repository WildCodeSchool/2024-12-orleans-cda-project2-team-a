import { useState } from 'react';

import Burger from '../components/burger';
import Card from '../components/card';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import '../style/home.scss';

function HomePage() {
  const [input, setInput] = useState('');

  return (
    <body className='body'>
      <header>
        <div className='navbar'>
          <Navbar />
        </div>
        <div className='burger-home'>
          <Burger />
          <img className='loupe' src='/pictures/search.png' alt='' />
          <input
            className='search'
            type='text'
            placeholder='Search'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </header>
      <main className='main'>
        <Card />
      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </body>
  );
}
export default HomePage;
