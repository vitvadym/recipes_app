import { IoMdStar } from 'react-icons/io';

const RecipeItem = ({ recipe }) => {
  return (
    <div className='w-80 p-3 shadow-md rounded-md'>
      <div className='flex max-h-96 justify-center overflow-hidden rounded-md'>
        <img
          className='hover:scale-105 duration-300'
          src={recipe.image}
          alt={recipe.name}
        />
      </div>
      <div className='flex justify-between items-center gap-3 py-2'>
        <h3>{recipe.name}</h3>
        <p>{recipe.cuisine}</p>
        <span className='flex font-bold items-center gap-2'>
          4/5
          {
            <IoMdStar
              strokeWidth={40}
              color='orange'
            />
          }
        </span>
      </div>
      <p>
        {recipe.tags?.map((tag) => (
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
