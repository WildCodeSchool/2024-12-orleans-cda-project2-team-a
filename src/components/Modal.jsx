import '../style/Modal.scss';

const Modal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <>
      <h1>hello from modal</h1>
      <button onClick={onClose}>Close</button>
    </>
  );
};

export default Modal;
