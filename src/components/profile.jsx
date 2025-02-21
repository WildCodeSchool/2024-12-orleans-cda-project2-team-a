import { Link } from 'react-router-dom';

import '../style/profile-page.scss';

export default function Profile({ characterMarvel, img, title, description, comics }) {
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
                {' '}
                <strong>Bio :</strong>
              </h3>
              <p>{description}</p>
            </div>
          </div>
          <div className='comics-section'>
            <h3>Comics</h3>
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
          </div>
        </div>
      </div>
    </div>
  );
}
