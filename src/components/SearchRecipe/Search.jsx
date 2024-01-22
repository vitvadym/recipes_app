import { CiSearch } from 'react-icons/ci';
import useRecipe from '../../hooks/useRecipe';

const Search = () => {
  const { searchQuery, setSearchQuery } = useRecipe();

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <form className='flex justify-center items-center px-2 py-2'>
      <CiSearch className='cursor-pointer w-10 h-5' />
      <input
        className='px-2 py-2 rounded-md shadow-md outline-none'
        type='text'
        name='search'
        placeholder='Search recipe'
        value={searchQuery}
        onChange={handleChange}
      />
    </form>
  );
};

export default Search;
