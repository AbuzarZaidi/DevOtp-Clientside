import React from 'react';
import { useSelector,useDispatch} from "react-redux";
import { setIsOpenHandler } from "../../../store/modal";
import {ModalOverlay,ModalWrapper,CloseButton} from './ModalStyle'
const Modal = ({ children }) => {
  const dispatch=useDispatch();
    const isOpen= useSelector((state) => state.modalData.isOpen);
    const handleClose = () => {
      dispatch(setIsOpenHandler())
    };
    if (!isOpen) return null;
  
    return (
      <ModalOverlay isOpen={isOpen}>
      <ModalWrapper>
      <CloseButton onClick={handleClose}>&times;</CloseButton>
        {children}
      </ModalWrapper>
    </ModalOverlay>
    );
  };
  
  export default Modal;