import { createContext, useState } from 'react';
import useFetch from '../hooks/useFetch';
import useDebounce from '../hooks/useDebounce';

export const RecipeContext = createContext(null);

const RecipeProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedQuery = useDebounce(searchQuery);

  const { data, isLoading } = useFetch(
    `https://dummyjson.com/recipes/search?q=${debouncedQuery}&limit=50`,
  );

  const value = {
    data,
    isLoading,
    favorites,
    searchQuery,
    setSearchQuery,
    setFavorites,
  };

  return (
    <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>
  );
};

export default RecipeProvider;
