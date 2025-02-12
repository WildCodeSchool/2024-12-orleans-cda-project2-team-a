import { useEffect, useState } from 'react';

import '../style/comics-page.scss';

const publicKey = import.meta.env.VITE_PUBLIC_KEY;

function ComicPage() {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    fetch(`https://gateway.marvel.com/v1/public/comics?apikey=${publicKey}`)
      .then((res) => {
        if (!res.ok) throw new Error('Erreur réseau');
        return res.json();
      })
      .then((data) => {
        setComics(data.data.results);
      })

      // eslint-disable-next-line no-console
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className='grid-comics'>
        {comics
          .filter(
            (comic) =>
              comic.thumbnail &&
              comic.thumbnail.path &&
              comic.thumbnail.extension &&
              !comic.thumbnail.path.includes('image_not_available'),
          )
          .map((comic) => (
            <div className='id' key={comic.id}>
              <h2 className='titre'>{comic.title}</h2>
              <img
                className='img-comics'
                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                alt={comic.title}
              />
            </div>
          ))}
      </div>
    </>
  );
}

export default ComicPage;
