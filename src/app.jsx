import './app.scss';
import Card from './components/card';
import Modal from './components/modal';

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
        <Modal open={isOpen} onClose={onClose} />
        <button className='open-modal' onClick={() => toggleModal(true)}>
          Modal button
        </button>
        <Card />
      </div>
    </div>

  );
}

export default App;
