import './app.scss';
import Modal from './components/modal';
import Favorites from "./components/favorites"
import NavBar from "./components/navbar"
import { useState } from 'react';


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

      <NavBar/>
      <Favorites/>
    </div>
  );
}

export default App;