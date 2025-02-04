import './app.scss';
import Burger from './components/burger';
import Card from './components/card';
import Favorites from './components/favorites';
import Footer from './components/footer';
import NavBar from './components/navbar';
import HomePage from './pages/home-page';
import ProfilePage from './pages/profile-page';

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Favorites />
        <ProfilePage />
        <div className='absolute-center-container'>
          <Card />
          <Burger />
        </div>
      </div>
      <Footer />
      <HomePage />
    </>
  );
}

export default App;
