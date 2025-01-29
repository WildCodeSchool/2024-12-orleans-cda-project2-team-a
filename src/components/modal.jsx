import '../style/modal.scss';

const Modal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <>
      <div className='overlay'></div>

      <div className='modal'>
        <img src='/marspider.webp' alt='marvel' />
        <h1>Marvel</h1>
        <div className='comics-content'>
          <img src='/marvel.jpg' alt='comic presentation' />
          <img src='../marvel.jpg' alt='comic presentation' />
          <img src='../marvel.jpg' alt='comic presentation' />
        </div>
        <button onClick={onClose}>X</button>
      </div>
    </>
  );
};

export default Modal;
