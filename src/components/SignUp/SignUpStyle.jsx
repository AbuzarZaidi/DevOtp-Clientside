import styled from "styled-components";
export const ModalContent = styled.div`
  background: #fff;
  padding: 0.8rem 7rem 2.5rem 7rem;
  border-radius: 5px;

  position: relative; /* add this to allow absolute positioning of close button */

  @media screen and (max-width: 48rem) {
    padding: 1rem 5rem 3rem 5rem;
  }

  @media screen and (max-width: 30rem) {
    padding: 1rem 3rem 3rem 3rem;
  }

  @media screen and (max-width: 25rem) {
    padding: 1rem 1rem 3rem 1rem;
  }

  .close {
    position: absolute;
    top: 0.2rem;
    right: 0.5rem;
    font-size: 1.2rem;
    color: #ffffff;
    cursor: pointer;
    background-color: #c1c3c3;
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const FormWrapper = styled.div`
  max-width: 50rem;
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 0.5rem;
    gap: 0.5rem;

    label {
      font-weight: bold;
      font-size: 0.9rem;
      color: #3333ad;
      margin-top: 0.5rem;
    }

    input {
      padding: 0.7rem 3rem 0.7rem 1rem;
      // margin: 0 auto;
      width: 15rem;
      box-sizing: border-box;

      border-radius: 1rem;
      border: 0.1rem solid #ccc;
    }

   
  }

  @media screen and (max-width: 48rem) {
    form {
      gap: 0.5rem;

      label {
        font-size: 0.9rem;
      }

      input {
        padding: 0.5rem;
      }

      button {
        padding: 0.25rem 0.5rem;
        font-size: 0.9rem;
      }
    }
  }
`;
export const Button=styled.button`
  background-color: #3333ad;
  font-weight: 600;
  color: #fff;
  padding: 0.5rem 1.8rem;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;
`

export const Heading = styled.h2`
  color: #3333ad;
`;

export const ContentCenter = styled.div`
  display: flex;
  justify-content: center;
`;
export const InnerSection=styled.div`
margin-top:1rem;
`
export const LoginWord=styled.span`
color: #3333ad;
font-weight:700;
cursor: pointer;
`