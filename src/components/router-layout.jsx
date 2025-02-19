import { Outlet } from 'react-router-dom';

import Footer from './footer';
import Navbar from './navbar';

function Layout() {
  return (
    <div
      style={{
        background: 'linear-gradient(to bottom, #670208, #151414 15% 86%, #670208)',
        minHeight: '100vh',
      }}
    >
      <Navbar />

      <Outlet />
      <Footer />
    </div>
  );
}
export default Layout;
