import { Outlet } from 'react-router-dom';

import '../style/route-layout.scss';
import Footer from './footer';
import Navbar from './navbar';

function Layout() {
  return (
    <div className='layout'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
export default Layout;
