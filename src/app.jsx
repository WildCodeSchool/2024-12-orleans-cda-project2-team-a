import './app.scss';
import Favorites from './components/favorites';
import NavBar from './components/navbar';

function App() {
  return (
    <div className='absolute-center-container'>
      <NavBar />
      <Favorites />
    </div>
  );
}

export default App;
