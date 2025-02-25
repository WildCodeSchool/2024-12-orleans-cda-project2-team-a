import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../style/comics-page.scss';

const publicKey = import.meta.env.VITE_PUBLIC_KEY;

function ComicPage() {
  const [comics, setComics] = useState([]);
  const [visibleCount, setVisibleCount] = useState(12);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    fetch(`https://gateway.marvel.com/v1/public/comics?apikey=${publicKey}&limit=50&offset=${offset}`)
      .then((res) => {
        if (!res.ok) throw new Error('Erreur réseau');
        return res.json();
      })
      .then((data) => {
        setComics((prevComics) => {
          const newComics = data.data.results.filter(
            (comic) =>
              comic.thumbnail &&
              comic.thumbnail.path &&
              comic.thumbnail.extension &&
              !comic.thumbnail.path.includes('image_not_available'),
          );

          const existingIds = prevComics.map((comic) => comic.id);
          const filteredNewComics = newComics.filter((comic) => !existingIds.includes(comic.id));

          return [...prevComics, ...filteredNewComics];
        });

        if (data.data.total > offset + 50) {
          setOffset((prevOffset) => prevOffset + 50);
        }
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.error(err));
  }, [offset]);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  return (
    <>
      <div className='comics-container'>
        <h1 className='typo-comics'> Comics</h1>
        <div className='comics'>
          {comics.slice(0, visibleCount).map((comic) => (
            <div className='id' key={comic.id}>
              <Link
                to={`/comics/${comic.id}`}
                key={comic.id}
                className='comic-card'
                style={{
                  background: `url(${comic.thumbnail.path}.${comic.thumbnail.extension}) no-repeat center`,
                  backgroundSize: 'cover',
                }}
              >
                <div className='comics-title'>
                  <h3>{comic.title}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className='more'>
          <button onClick={loadMore}>More</button>
        </div>
      </div>
    </>
  );
}

export default ComicPage;
