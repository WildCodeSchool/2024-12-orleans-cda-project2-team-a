import { useEffect, useState } from 'react';

import '../style/characters.scss';

export default function Characters({ data, onClick }) {
  const [isVisible, setIsVisible] = useState(true);

  const hideCharacters = () => {
    setIsVisible(false);
  };

  const handleClickOutside = (event) => {
    if (isVisible && !event.target.closest('.search-container')) {
      hideCharacters();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  return (
    <>
      <div className='search-container' style={{ display: isVisible ? '' : 'none' }}>
        <div className='search-result' onClick={hideCharacters}>
          <button className='close-search' onClick={hideCharacters}>
            X
          </button>
          <div className='characters'>
            {data.map((dataItem) => {
              return (
                <div
                  key={dataItem.id}
                  className='character-card'
                  onClick={(e) => {
                    e.stopPropagation();
                    onClick(dataItem.id);
                  }}
                >
                  <img
                    className='character-img'
                    src={`${dataItem.thumbnail.path}.${dataItem.thumbnail.extension}`}
                    alt={dataItem.name}
                  />
                  <div className='character-title'>
                    <h2>{dataItem.name}</h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
