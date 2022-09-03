import React from 'react';
import ModalContainer from './portal';

const Modal = ({ onClose }) => {
  const handleClose = () => {
    onClose?.();
  };
  return (
    <ModalContainer>
      <Overlay>
        <ModalWrap>
          <CloseButton onClick={handleClose}>
            <i className='hello'>h</i>
          </CloseButton>
          <Contents>
            <h1>hello</h1>
            <button onClick={handleClose}>close</button>
          </Contents>
        </ModalWrap>
      </Overlay>
    </ModalContainer>
  );
};

export default Modal;
