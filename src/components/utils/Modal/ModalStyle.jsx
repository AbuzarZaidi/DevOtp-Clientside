import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  z-index: 1;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 80%;
  max-width: 600px;
  max-height: 95%;
  
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);

  @media (min-width: 768px) {
    width: 60%;
  }

  @media (min-width: 992px) {
    width: 50%;
  }

  @media (min-width: 1200px) {
    width: 40%;
  }
`;
export const CloseButton = styled.button`
position: absolute;
top: 0.2rem;
right: 0.5rem;
font-size: 1.2rem;
color: #ffffff;
cursor: pointer;
border:none;
background-color: #c1c3c3;
border-radius: 50%;
width: 1.5rem;
height: 1.5rem;
display: flex;
justify-content: center;
align-items: center;
`;