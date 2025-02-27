import { createContext, useContext, useState } from 'react';

const LoadingContext = createContext(null);

export const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [comics, setComics] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <LoadingContext.Provider
      value={{ loading, setLoading, isModalOpen, setIsModalOpen, comics, setComics, currentPage, setCurrentPage }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  return useContext(LoadingContext);
};
