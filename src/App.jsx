import { useState } from 'react';

import './App.scss';
import Modal from './components/Modal';

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
      <button className='openModal' onClick={() => toggleModal(true)}>
        Modal button
      </button>
    </div>
  );
}

export default App;
