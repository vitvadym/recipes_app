import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Pagination from '../components/Pagination/Pagination';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
