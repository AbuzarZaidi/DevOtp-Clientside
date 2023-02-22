import React from 'react';
import { useSelector} from "react-redux";
import {ModalContainer} from './ModalStyle'
const Modal = ({ children }) => {
    const isOpen= useSelector((state) => state.modalData.isOpen);
    if (!isOpen) return null;
  
    return (
      <ModalContainer>
        {children}
      </ModalContainer>
    );
  };
  
  export default Modal;