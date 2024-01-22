import styles from './Layout.module.css';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
