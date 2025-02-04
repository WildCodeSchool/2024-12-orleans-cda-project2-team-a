import { Route, Routes } from 'react-router-dom';

import './app.scss';
import Favorites from './components/favorites';
import Home from './components/home';
import Layout from './components/layout';
import Profile from './components/profile';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/profilePage' element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
