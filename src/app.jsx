import './app.scss';
import Card from './components/card';
import Favorites from './components/favorites';
import NavBar from './components/navbar';
import ProfilePage from './pages/profile-page';

// import Burger from './components/burger';

function App() {
  return (
    <div>
      <NavBar />
      <Favorites />
      <ProfilePage />
      <div className='absolute-center-container'>
        <Card />
      </div>
    </div>
  );
}

export default App;
