import { useState } from 'react';

import Modal from '../components/modal';
import '../style/card.scss';

function Card() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <body>
        <Modal open={isOpen} onClose={onClose} />
        <div className='flexBox'>
          <div className='card' onClick={toggleModal}>
            <img className='thanos' src='/pictures/thanos.png' alt='' />

            <div>
              <div className='rectangle'></div>
              <h1>Thanos</h1>
            </div>
          </div>
          <div className='card' onClick={toggleModal}>
            <img className='thanos' src='/pictures/thanos.png' alt='' />

            <div>
              <div className='rectangle'></div>
              <h1>Thanos</h1>
            </div>
            <div></div>
          </div>
          <div className='card' onClick={toggleModal}>
            <img className='thanos' src='/pictures/thanos.png' alt='' />

            <div>
              <div className='rectangle'></div>
              <h1>Thanos</h1>
            </div>
            <div></div>
          </div>
          <div className='card' onClick={toggleModal}>
            <img className='thanos' src='/pictures/thanos.png' alt='' />

            <div>
              <div className='rectangle'></div>
              <h1>Thanos</h1>
            </div>
            <div></div>
          </div>
          <div className='card' onClick={toggleModal}>
            <img className='thanos' src='/pictures/thanos.png' alt='' />

            <div>
              <div className='rectangle'></div>
              <h1>Thanos</h1>
            </div>
            <div></div>
          </div>
          <div className='card' onClick={toggleModal}>
            <img className='thanos' src='/pictures/thanos.png' alt='' />

            <div>
              <div className='rectangle'></div>
              <h1>Thanos</h1>
            </div>
          </div>
          <div className='card' onClick={toggleModal}>
            <img className='thanos' src='/pictures/thanos.png' alt='' />

            <div>
              <div className='rectangle'></div>
              <h1>Thanos</h1>
            </div>
            <div></div>
          </div>
          <div className='card' onClick={toggleModal}>
            <img className='thanos' src='/pictures/thanos.png' alt='' />

            <div>
              <div className='rectangle'></div>
              <h1>Thanos</h1>
            </div>
            <div></div>
          </div>
          <div className='card' onClick={toggleModal}>
            <img className='thanos' src='/pictures/thanos.png' alt='' />

            <div>
              <div className='rectangle'></div>
              <h1>Thanos</h1>
            </div>
            <div></div>
          </div>
          <div className='card' onClick={toggleModal}>
            <img className='thanos' src='/pictures/thanos.png' alt='' />

            <div>
              <div className='rectangle'></div>
              <h1>Thanos</h1>
            </div>
            <div></div>
          </div>
          <div className='card' onClick={toggleModal}>
            <img className='thanos' src='/pictures/thanos.png' alt='' />

            <div>
              <div className='rectangle'></div>
              <h1>Thanos</h1>
            </div>
            <div></div>
          </div>
          <div className='card' onClick={toggleModal}>
            <img className='thanos' src='/pictures/thanos.png' alt='' />

            <div>
              <div className='rectangle'></div>
              <h1>Thanos</h1>
            </div>
            <div></div>
          </div>
        </div>
      </body>
    </>
  );
}
export default Card;
