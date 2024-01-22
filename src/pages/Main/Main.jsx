import Loader from '../../components/Loader/Loader';
import Pagination from '../../components/Pagination/Pagination';
import RecipeItem from '../../components/RecipeItem/RecipeItem';
import useRecipe from '../../hooks/useRecipe';

const Main = () => {
  const { recipes, isLoading } = useRecipe();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className='flex flex-wrap gap-4 justify-center'>
          {recipes?.map((recipe) => (
            <RecipeItem
              key={recipe.id}
              recipe={recipe}
            />
          ))}
        </div>
      )}
      <Pagination />
    </>
  );
};

export default Main;
