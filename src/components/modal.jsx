import '../style/modal.scss';

const Modal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <>
      <div className='overlay'></div>

      <div className='modal'>
        <div>
          <img className='thanos' src='/image-logo/thanos.png' alt='marvel' />
          <h1>Thanos</h1>
        </div>
        <div className='comics-content'>
          <img src='/image-logo/comics.png' alt='comic presentation' />
          <img src='/image-logo/comics.png' alt='comic presentation' />
          <img src='/image-logo/comics.png' alt='comic presentation' />
        </div>
        <button type='button' onClick={onClose}>
          X
        </button>
      </div>
    </>
  );
};

export default Modal;
