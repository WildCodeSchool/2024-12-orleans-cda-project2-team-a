import useVisibleStatus from '../hooks/use-visible-status';
import '../style/characters.scss';
import Loader from './loader';

export default function Characters({ data, onClick }) {
  const [isVisible, hideComicsCharacters] = useVisibleStatus();

  return (
    <>
      <div className='search-container' style={{ display: isVisible ? '' : 'none' }}>
        <div className='search-result' onClick={() => hideComicsCharacters()}>
          <button className='close-search' onClick={() => hideComicsCharacters()}>
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
