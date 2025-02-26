import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import '../style/comics-display.scss';

const publicKey = import.meta.env.VITE_PUBLIC_KEY;

export default function ComicDisplay() {
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

  const releaseDate = new Date(comic.dates[0].date).toLocaleDateString();

  return (
    <div className='comics-display'>
      <div className='comics-img'>
        <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
      </div>
      <div className='comics-content'>
        <h2>{comic.title}</h2>
        <h3>Creators:{comic.creators.items[0].name} </h3>
        <span>Role:{comic.creators.items[0].role} </span>
        <span>Date de sortie:{releaseDate} </span>
        <div className='creators'>
          <p>{comic.description}</p>
        </div>
      </div>
    </div>
  );
}
