import { useEffect, useState } from 'react';

import '../style/comics.scss';

export default function Comics({ data, onClick }) {
  const [isVisible, setIsVisible] = useState(true);

  const hideComics = () => {
    setIsVisible(false);
  };

  const handleClickOutside = (event) => {
    if (event.target.closest('.comic-card') === null) {
      hideComics();
    }
  };

  useEffect(() => {
    if (isVisible) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  return (
    <div className='search-container' style={{ display: isVisible ? 'block' : 'none' }}>
      <div className='search-result'>
        <button className='close-search' onClick={hideComics}>
          X
        </button>
        <div className='comics'>
          {data.map((dataItem) => {
            const detailsUrl = dataItem.urls.find((element) => element['type'] === 'detail').url;

            return (
              <a
                key={dataItem.id}
                className='comic-card'
                style={{
                  background: `url(${dataItem.thumbnail.path}.${dataItem.thumbnail.extension}) no-repeat center`,
                  backgroundSize: 'cover',
                }}
                onClick={() => onClick(dataItem.id)}
                href={detailsUrl}
                target='_blank'
                rel='noreferrer'
              >
                <div className='comics-title'>
                  <h3>{dataItem.title}</h3>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
