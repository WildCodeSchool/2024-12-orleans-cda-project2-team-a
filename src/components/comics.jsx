import { Link } from 'react-router-dom';

import useVisibleStatus from '../hooks/use-visible-status';
import '../style/comics.scss';

export default function Comics({ data, onClick }) {
  const [isVisible, hideComicsCharacters] = useVisibleStatus();

  return (
    <div className='search-container' style={{ display: isVisible ? '' : 'none' }}>
      <div className='search-result' onClick={hideComicsCharacters}>
        <button className='close-search' onClick={hideComicsCharacters}>
          X
        </button>
        <div className='comics'>
          {data.map((dataItem) => {
            return (
              <Link
                to={`/comics/${dataItem.id}`}
                key={dataItem.id}
                className='comic-card'
                style={{
                  background: `url(${dataItem.thumbnail.path}.${dataItem.thumbnail.extension}) no-repeat center`,
                  backgroundSize: 'cover',
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  onClick(dataItem.id);
                  hideComicsCharacters();
                }}
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
