import { Link } from 'react-router-dom';
import { MdFavoriteBorder } from 'react-icons/md';
import Search from '../SearchRecipe/Search';
import useRecipe from '../../hooks/useRecipe';

const Navbar = () => {
  const { favorites } = useRecipe();
  return (
    <nav className='flex flex-col items-center justify-between px-10 py-5 lg:flex-row'>
      <h2 className='font-bold text-2xl text-gray-700'>
        <Link
          title='Back to main page'
          to={'/'}
        >
          Tasty Hub
        </Link>
      </h2>
      <div className='flex items-center justify-between gap-6'>
        <Search />
        <div
          title='Favorites'
          className='relative rounded-full p-3 bg-slate-200 shadow-md cursor-pointer'
        >
          <Link to={'favorites'}>
            <MdFavoriteBorder className='w-5 h-5' />
            {!!favorites.length && (
              <span className='absolute rounded-full text-xs py-1 shadow-sm text-center bg-red-600 w-[55%] -top-1 -right-2'>
                {favorites.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
