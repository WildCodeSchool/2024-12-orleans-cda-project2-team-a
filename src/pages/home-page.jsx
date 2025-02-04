import { useState } from 'react';

import Burger from '../components/burger';
import Card from '../components/card';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import '../style/home-page.scss';

function HomePage() {
  const [input, setInput] = useState('');

  return (
    <div className='body'>
      <header>
        <Navbar />

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
      </header>
      <main className='main'>
        <Card />
      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  );
}
export default HomePage;
