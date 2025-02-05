import { Route, Routes } from 'react-router-dom';

import './app.scss';
import Favorites from './components/favorites';
import Home from './components/home';
import Profile from './components/profile';
import Layout from './components/router-layout';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/profile' element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
