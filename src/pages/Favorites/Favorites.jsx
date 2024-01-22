import RecipeItem from '../../components/RecipeItem/RecipeItem';
import useRecipe from '../../hooks/useRecipe';

const Favorites = () => {
  const { favorites } = useRecipe();
  return (
    <div className='flex flex-wrap justify-center gap-4'>
      {favorites?.map((recipe) => (
        <RecipeItem
          key={recipe.id}
          recipe={recipe}
        />
      ))}
    </div>
  );
};

export default Favorites;
