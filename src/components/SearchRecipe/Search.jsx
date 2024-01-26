import useRecipe from '../../hooks/useRecipe';
import { CiSearch } from 'react-icons/ci';

const Search = () => {
  const { searchQuery, setSearchQuery, handleSubmit, resetSearch } =
    useRecipe();

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex justify-center gap-2 items-center px-2 py-2'
    >
      <input
        className='px-2 py-2 rounded-md shadow-md outline-none'
        type='text'
        name='search'
        placeholder='Search recipe'
        value={searchQuery}
        onChange={handleChange}
      />
      <button
        className='px-5 py-3 bg-slate-200 shadow-md rounded-md'
        type='submit'
      >
        <CiSearch />
      </button>
      <button
        onClick={resetSearch}
        className='px-4 py-2 bg-slate-200 shadow-md rounded-md text-slate-700'
      >
        Show All
      </button>
    </form>
  );
};

export default Search;
