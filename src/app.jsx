import md5 from 'md5';
import { useEffect, useState } from 'react';

import Appp from './Appp';
import './app.scss';

function App() {
  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;
    const privateKey = import.meta.env.VITE_PRIVATE_KEY;
    const ts = new Date().getTime();
    const hash = md5(ts + privateKey + publicKey);

    fetch(`https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`)
      .then((res) => {
        if (!res.ok) throw new Error('Erreur réseau');
        return res.json();
      })
      .then((data) => setFetchData(data.data.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {fetchData.map((character) => (
        <ul key={character.id}>
          <li>{character.name}</li>
        </ul>
      ))}
      <Appp />
      <h1>fetch</h1>
    </>
  );
}

export default App;
