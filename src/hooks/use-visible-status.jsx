import { useEffect, useState } from 'react';

const useVisibleStatus = () => {
  const [isVisible, setIsVisible] = useState(true);

  const hideComicsCharacters = () => {
    setIsVisible(false);
  };

  const handleClickOutside = (event) => {
    if (isVisible && !event.target.closest('.search-container')) {
      hideComicsCharacters();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  return [isVisible, hideComicsCharacters];
};

export default useVisibleStatus;
