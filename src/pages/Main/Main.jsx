import Loader from '../../components/Loader/Loader';
import Pagination from '../../components/Pagination/Pagination';
import RecipeItem from '../../components/RecipeItem/RecipeItem';
import useRecipe from '../../hooks/useRecipe';

const Main = () => {
  const { data, isLoading } = useRecipe();
  console.log(data);

  // if (isLoading) {
  //   return <Loader />;
  // }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className='flex flex-wrap gap-5 justify-center'>
          {data.recipes?.map((recipe) => (
            <RecipeItem
              key={recipe.id}
              recipe={recipe}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Main;
