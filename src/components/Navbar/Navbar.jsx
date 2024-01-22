import { Link } from 'react-router-dom';
import { MdFavoriteBorder } from 'react-icons/md';
import Search from '../SearchRecipe/Search';

const Navbar = () => {
  return (
    <nav className='flex flex-col items-center justify-between px-2 py-5 lg:flex-row'>
      <h2 className='font-bold text-2xl text-gray-700'>
        <Link to={'/'}>Tasty Hub</Link>
      </h2>
      <div className='flex items-center justify-between gap-6'>
        <Search />
        <div className='relative rounded-full p-3 bg-slate-200 shadow-md cursor-pointer'>
          <MdFavoriteBorder className='w-5 h-5' />
          <span className='absolute rounded-full font-bold shadow-sm bg-red-700 px-2 -top-1 -right-2'>
            1
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
