import { IoMdStar } from 'react-icons/io';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useRecipe from '../../hooks/useRecipe';

const RecipeItem = ({ recipe }) => {
  const { id, name, image, cuisine, tags, rating } = recipe;
  const { favorites, setFavorites } = useRecipe();

  const isInFavorites = favorites.some((item) => item.id === recipe.id);

  const toggleFavorite = (recipe) => {
    if (!isInFavorites) {
      setFavorites((prev) => [...prev, recipe]);
    } else {
      setFavorites((prev) => prev.filter((item) => item.id !== recipe.id));
    }
  };

  return (
    <div className='relative w-80 p-3 shadow-md rounded-md'>
      <div className='flex max-h-96 justify-center overflow-hidden rounded-md'>
        <img
          className='hover:scale-105 duration-300'
          src={image}
          alt={name}
        />
      </div>
      <FaHeart
        title={isInFavorites ? 'Remove from favorite' : 'Add to favotite'}
        onClick={() => toggleFavorite(recipe)}
        color={isInFavorites ? 'red' : ''}
        className='absolute top-5 right-5 w-6 h-6 cursor-pointer duration-200'
      />
      <div className='flex justify-between items-center gap-3 py-2'>
        <Link
          to={`/recipe/${id}`}
          className='font-bold cursor-pointer hover:text-gray-600 duration-200'
        >
          <h3>{name}</h3>
        </Link>
        <p>{cuisine}</p>
        <span className='flex font-bold items-center gap-2'>
          {`${rating}/5`}
          {
            <IoMdStar
              strokeWidth={40}
              color='orange'
            />
          }
        </span>
      </div>
      <p>
        {tags?.map((tag) => (
          <span
            className='text-gray-400 text-sm'
            key={tag}
          >{` #${tag}`}</span>
        ))}
      </p>
    </div>
  );
};

export default RecipeItem;
