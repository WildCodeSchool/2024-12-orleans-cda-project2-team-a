import { useState } from 'react';

import Modal from '../components/modal';
import '../style/favorites.scss';

function Favorites() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <body className='favorite'>
      <h1>My Favorite Characters</h1>
      <Modal open={isOpen} onClose={onClose} />
      <div className='cards'>
        <div className='carte' onClick={toggleModal}>
          <h2> Thanos</h2>
          <p> Le plus grand des méchants</p>
        </div>

        <div className='carte' onClick={toggleModal}>
          <h2> Iron Man</h2>
          <p> ddddddffff</p>
        </div>

        <div className='carte' onClick={toggleModal}>
          <h2> Spider Man</h2>
          <p>fsdfsffsdfd</p>
        </div>

        <div className='carte' onClick={toggleModal}>
          <h2> Spider Man</h2>
          <p>fsdfsffsdfd</p>
        </div>

        <div className='carte' onClick={toggleModal}>
          <h2> Spider Man</h2>
          <p>fsdfsffsdfd</p>
        </div>

        <div className='carte' onClick={toggleModal}>
          <h2> Spider Man</h2>
          <p>fsdfsffsdfd</p>
        </div>

        <div className='carte' onClick={toggleModal}>
          <h2> Spider Man</h2>
          <p>fsdfsffsdfd</p>
        </div>
      </div>
      <div className='cards'>
        <div className='carte' onClick={toggleModal}>
          <h2> Thanos</h2>
          <p> Le plus grand des méchants</p>
        </div>

        <div className='carte' onClick={toggleModal}>
          <h2> Iron Man</h2>
          <p> ddddddffff</p>
        </div>

        <div className='carte' onClick={toggleModal}>
          <h2> Spider Man</h2>
          <p>fsdfsffsdfd</p>
        </div>

        <div className='carte' onClick={toggleModal}>
          <h2> Spider Man</h2>
          <p>fsdfsffsdfd</p>
        </div>

        <div className='carte' onClick={toggleModal}>
          <h2> Spider Man</h2>
          <p>fsdfsffsdfd</p>
        </div>

        <div className='carte' onClick={toggleModal}>
          <h2> Spider Man</h2>
          <p>fsdfsffsdfd</p>
        </div>

        <div className='carte' onClick={toggleModal}>
          <h2> Spider Man</h2>
          <p>fsdfsffsdfd</p>
        </div>
      </div>
    </body>
  );
}

export default Favorites;
