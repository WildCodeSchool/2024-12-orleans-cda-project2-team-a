import { createContext, useContext, useState } from 'react';

const LoadingContext = createContext(null);

export const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [count, setcount] = useState(0);
  const [comics, setComics] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <LoadingContext.Provider
      value={{ loading, setLoading, comics, setComics, currentPage, setCurrentPage, count, setcount }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  return useContext(LoadingContext);
};
