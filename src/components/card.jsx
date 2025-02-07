import { useRef, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import '../style/card.scss';
import Modal from './modal';

const CARD_WIDTH = 1400;

function Card() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const onClose = () => {
    setIsOpen(false);
  };

  const [scrollPosition, setScrollPosition] = useState(0);

  const containerRef = useRef();

  const handleScroll = (scrollAmount) => {
    const newScrollPosition = scrollPosition + scrollAmount;

    setScrollPosition(newScrollPosition);

    containerRef.current.scrollLeft = newScrollPosition;
  };

  return (
    <>
      <Modal open={isOpen} onClose={onClose} />

      <div className='flexBox'>
        <MdChevronLeft
          className='arrows'
          onClick={() => {
            handleScroll(-CARD_WIDTH);
          }}
        />

        <div className='container' ref={containerRef}>
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
          </div>
        </div>

        <MdChevronRight
          className='arrows'
          onClick={() => {
            handleScroll(CARD_WIDTH);
          }}
        />
      </div>
    </>
  );
}

export default Card;
