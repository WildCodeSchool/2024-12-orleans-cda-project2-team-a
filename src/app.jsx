import { useState } from 'react';

import './app.scss';
import Favorites from './components/favorites';
import Modal from './components/modal';
import NavBar from './components/navbar';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <div className='absolute-center-container'>
      <Modal open={isOpen} onClose={onClose} />
      <button className='open-modal' onClick={() => toggleModal(true)}>
        Modal button
      </button>

      <NavBar />
      <Favorites />
    </div>
  );
}

export default App;
