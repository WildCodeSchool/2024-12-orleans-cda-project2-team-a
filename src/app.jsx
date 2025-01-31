import { useState } from 'react';

import './app.scss';
import Card from './components/card';
import Modal from './components/modal';
import ProfilePage from './pages/profile-page';

// import Burger from './components/burger';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <ProfilePage />
      <div className='absolute-center-container'>
        <Modal open={isOpen} onClose={onClose} />
        <button className='open-modal' onClick={() => toggleModal(true)}>
          Modal button
        </button>
        <Card />
      </div>
    </>
  );
}

export default App;
