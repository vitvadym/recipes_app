import { createContext, useEffect, useState } from 'react';
export const RecipeContext = createContext(null);

const RecipeProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [skip, setSkip] = useState(0);

  const fetchData = async () => {
    try {
      setIsLoading(true);

      const response = await fetch(
        `https://dummyjson.com/recipes/search?q=${searchQuery}&limit=6&skip=${
          skip * 6
        }`,
      );

      const result = await response.json();

      setPages(Math.round(result.total / 6));
      setRecipes(result.recipes);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage, skip]);

  const handlePage = (page) => {
    setCurrentPage(page + 1);
    setSkip(page);
  };

  const value = {
    recipes,
    isLoading,
    favorites,
    searchQuery,
    setSearchQuery,
    setFavorites,
    handlePage,
    currentPage,
    pages,
  };

  return (
    <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>
  );
};

export default RecipeProvider;
