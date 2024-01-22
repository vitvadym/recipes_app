import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='flex container w-2/3 mx-auto py-5'>
      <h2 className='font-bold'>
        <Link to={'/'}>Recipe</Link>
      </h2>
    </nav>
  );
};

export default Navbar;
