import { Route, Routes } from 'react-router-dom';

import './app.scss';
import Favorites from './components/favorites';
import Footer from './components/footer';
import Home from './components/home';
import NavBar from './components/navbar';
import ProfilePage from './pages/profile-page';

function App() {
  return (
    <Routes>
      <Route element={<NavBar />}>
        <Route element={<Footer />}>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/profilePage' element={<ProfilePage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
