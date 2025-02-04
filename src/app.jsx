import './app.scss';
import Favorites from './components/favorites';
import NavBar from './components/navbar';
import ProfilePage from './pages/profile-page';

function App() {
  return (
    <>
      <NavBar />
      <Favorites />
      <ProfilePage />
    </>
  );
}

export default App;
