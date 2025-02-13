import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import '../style/comics-display.scss';

const publicKey = import.meta.env.VITE_PUBLIC_KEY;

export default function ComicDetail() {
  const { comicId } = useParams();
  const [comic, setComic] = useState(null);

  useEffect(() => {
    const apiComicUrl = `https://gateway.marvel.com/v1/public/comics/${comicId}?apikey=${publicKey}`;

    fetch(apiComicUrl)
      .then((res) => {
        if (!res.ok) throw new Error('Erreur réseau');
        return res.json();
      })
      .then((data) => {
        setComic(data.data.results[0]);
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.error(err));
  }, [comicId]);

  if (!comic) return <div>Loading...</div>;

  return (
    <div className='comics-display'>
      <div className='comics-img'>
        <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
      </div>
      <div className='comics-content'>
        <h2>{comic.title}</h2>
        <p>{comic.description}</p>
      </div>
    </div>
  );
}
