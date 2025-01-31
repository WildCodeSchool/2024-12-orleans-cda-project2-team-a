import './app.scss';

import Favorites from './components/favorites';
import NavBar from './components/navbar';
import ProfilePage from './pages/profile-page';


function App() {
  return (

    <div >
      <NavBar />
      <Favorites />
    <ProfilePage />
    </div>
  );
}

export default App;
