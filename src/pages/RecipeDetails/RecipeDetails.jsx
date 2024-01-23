import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';

const RecipeDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://dummyjson.com/recipes/${id}`);
        const data = await response.json();

        setDetails(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className='grid grid-cols-1 p-3 rounded-md shadow-md xl:grid-cols-2'>
          <div className='overflow-hidden rounded-md'>
            <img
              className='w-full h-full object-cover hover:scale-105 duration-300'
              src={details?.image}
              alt={details?.name}
            />
          </div>
          <div className='p-4'>
            <h3 className='text-2xl font-bold text-center pt-2'>
              {details?.name}
            </h3>
            <p>Cuisine: {details?.cuisine}</p>
            <p>Difficulty: {details?.difficulty}</p>
            <p>Cook time: {details?.cookTimeMinutes} min</p>
            <p>Preparation time: {details?.prepTimeMinutes} min</p>

            <h3 className='text-2xl font-bold text-center pt-2'>Ingridients</h3>
            <ul>
              {details?.ingredients?.map((ingredient, index) => (
                <li
                  className='text-pretty border-b-2'
                  key={index}
                >
                  # {ingredient}
                </li>
              ))}
            </ul>

            <h3 className='text-2xl font-bold text-center pt-2'>Instuctions</h3>
            <ul>
              {details?.instructions?.map((instruction, index) => (
                <li
                  className='text-pretty pb-1'
                  key={index}
                >
                  # {instruction}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
export default RecipeDetails;
