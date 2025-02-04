import { useState } from 'react';

import '../style/card.scss';
import Modal from './modal';

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
