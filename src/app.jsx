import App1 from './App1';
import './app.scss';
import Favorites from './components/favorites';
import NavBar from './components/navbar';
import ProfilePage from './pages/profile-page';

function App() {
  // useEffect(() => {
  //   fetch('https://gateway.marvel.com/docs/public/v1/public/characters')
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // });

  return (
    <>
      <App1 />
      <NavBar />
      <Favorites />
      <ProfilePage />
    </>
  );
}

export default App;
