import { Outlet } from 'react-router-dom';

import Footer from './footer';
import NavBar from './navbar';

const Layout = () => {
  return (
    <>
      <NavBar />

      <Outlet />
      <Footer />
    </>
  );
};
export default Layout;
