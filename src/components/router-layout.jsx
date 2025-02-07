import { Outlet } from 'react-router-dom';

import Footer from './footer';
import Navbar from './navbar';

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
export default Layout;
