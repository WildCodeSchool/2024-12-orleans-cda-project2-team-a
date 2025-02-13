import { useEffect, useState } from 'react';

import '../style/comics-page.scss';

const publicKey = import.meta.env.VITE_PUBLIC_KEY;

function ComicPage() {
  const [comics, setComics] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [offset, setOffset] = useState(0);

  // visibleCount si j'ai passe, sinon affiche

  useEffect(() => {
    fetch(`https://gateway.marvel.com/v1/public/comics?apikey=${publicKey}&limit=50&offset=${offset}`)
      .then((res) => {
        if (!res.ok) throw new Error('Erreur réseau');
        return res.json();
      })
      .then((data) => {
        setComics((prevComics) => [...prevComics, ...data.data.results]);
        if (data.data.total > offset + 50) {
          setOffset(offset + 50);
        }
      })
      .catch((err) => console.error(err));
  }, [offset]);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  return (
    <>
      <div className='comics'>
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
              <h2 className='comics-title'>{comic.title}</h2>

              <img
                className='comic-card'
                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                alt={comic.title}
              />
            </div>
          ))}
      </div>
      <button onClick={loadMore}>More</button>
    </>
  );
}

export default ComicPage;
