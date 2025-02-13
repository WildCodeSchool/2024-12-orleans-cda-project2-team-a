import { useState } from 'react';

import '../style/characters.scss';

export default function Characters({ data, onClick }) {
  const [isVisible, setIsVisible] = useState(true);

  const hideCharacters = () => {
    setIsVisible(false);
  };

  return (
    <>
      <div className='search-container' style={{ display: isVisible ? 'block' : 'none' }}>
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
