import { createContext, useContext } from 'react';
import { useInput } from '../hooks/useInput';

const SearchContext = createContext(null);
const SearchHandlerContext = createContext(null);

export const useSearchContext = () => {
  return useContext(SearchContext);
};

export const useSearchContextHandler = () => {
  return useContext(SearchHandlerContext);
};

export const SearchContextProvider = ({ children }) => {
  const [searchInput, searchHandler] = useInput();

  return (
    <SearchContext.Provider value={searchInput}>
      <SearchHandlerContext.Provider value={searchHandler}>
        {children}
      </SearchHandlerContext.Provider>
    </SearchContext.Provider>
  );
};
