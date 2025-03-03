import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../style/profile.scss';
import Loader from './loader';

export default function Profile({ characterMarvel, img, description, comics }) {
  const [loadingComics, setLoadingComics] = useState(true);

  useEffect(() => {
    if (comics.length === 0) {
      setLoadingComics(true);
    } else {
      setLoadingComics(false);
    }
  }, [comics]);

  return (
    <div className='profile'>
      <div className='comics-characters'>
        <div className='character-content'>
          <div className='present'>
            <div className='image-containe'>
              <img src={img} alt={characterMarvel} />
              <h2>{characterMarvel}</h2>
            </div>
            <div className='bio'>
              <h3>
                <strong>Bio :</strong>
              </h3>
              <p>{description ? description : 'Description not available'}</p>
            </div>
          </div>
          <div className='comics-section'>
            <h3>Comics</h3>
            <div className='comics-container'>
              {loadingComics ? (
                <Loader />
              ) : (
                <div className='comics-list'>
                  {comics.map((comic) => (
                    <Link to={`/comics/${comic.id}`} key={comic.id}>
                      <img
                        className='item'
                        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                        alt={comic.title}
                      />
                      <p>{comic.title}</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
