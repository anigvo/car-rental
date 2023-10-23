import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ModalContainer, CloseBtn, Backdrop } from './Modal.styled';
import { IoClose } from 'react-icons/io5';
const modalRoot = document.getElementById('modal-root');

const Modal = ({ children, onClose, closeOnBackdropClick }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <Backdrop onClick={closeOnBackdropClick}>
      <ModalContainer>
        {children}
        <CloseBtn onClick={onClose}>
          <IoClose size={24} />
        </CloseBtn>
      </ModalContainer>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;
