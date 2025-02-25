import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../style/comics.scss';

export default function Comics({ data, onClick }) {
  const [isVisible, setIsVisible] = useState(true);

  const hideComics = () => {
    setIsVisible(false);
  };

  const handleClickOutside = (event) => {
    if (isVisible && !event.target.closest('.search-container')) {
      hideComics();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  return (
    <div className='search-container' style={{ display: isVisible ? '' : 'none' }}>
      <div className='search-result' onClick={hideComics}>
        <button className='close-search' onClick={hideComics}>
          X
        </button>
        <div className='comics'>
          {data.map((dataItem) => {
            const detailsUrl = dataItem.urls.find((element) => element['type'] === 'detail').url;
            return (
              <Link
                key={dataItem.id}
                className='comic-card'
                style={{
                  background: `url(${dataItem.thumbnail.path}.${dataItem.thumbnail.extension}) no-repeat center`,
                  backgroundSize: 'cover',
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  onClick(dataItem.id);
                }}
                href={detailsUrl}
                target='_blank'
                rel='noreferrer'
              >
                <div className='comics-title'>
                  <h3>{dataItem.title}</h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
