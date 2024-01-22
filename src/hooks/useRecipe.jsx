import { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';

const useRecipe = () => useContext(RecipeContext);

export default useRecipe;
