import '../style/modal.scss';

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <button className='btn-modal' onClick={onClose}>
          x
        </button>
        {children}
      </div>
    </div>
  );
}
