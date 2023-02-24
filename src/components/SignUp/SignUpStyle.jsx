import styled from "styled-components";

const mediaQueries = {
  mobile: `(max-width: 868px)`,
  laptop: `(max-width: 1600px)`,
  minilaptop: `(max-width: 1200px)`,
  tablet: `(max-width: 935px)`,
  xs: `(max-width: 450px)`,
  xxs: `(max-width: 350px)`,
};
export const ModalContent = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 5px;
  width: 30%;
  // max-width: 600px;

  @media (max-width: 768px) {
    width: 60%;
  }
  position: relative; /* add this to allow absolute positioning of close button */
  // @media ${mediaQueries.laptop} {
  //   padding: 1rem 5rem 1rem 5rem;
  // }
  // @media ${mediaQueries.tablet} {
  //   padding: 3rem 7rem 3rem 7rem;
  // }
  // @media ${mediaQueries.mobile} {
  //   padding: 1rem 3rem 1rem 3rem;
  // }
  // @media ${mediaQueries.xs} {
  //   padding: 1rem 3rem 1rem 3rem;
  // }

  // @media ${mediaQueries.xxs} {
  //   padding: 1rem 1rem 3rem 1rem;
  // }

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
  // max-width: 50rem;
  // margin: 0 auto;
  display: flex;
    justify-content:center;
  form {
    display: flex;
    flex-direction: column;
    justify-content:center;
  
    
    margin-top: 0.5rem;
    gap: 1rem;

    label {
      font-weight: bold;
      font-size: 0.9rem;
      color: #3333ad;
      margin-top: 0.5rem;
    }

    input {
      padding: 0.7rem 3rem 0.7rem 1rem;
      // margin: 0 auto;
      width: 25rem;
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
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;
`

export const Heading = styled.p`
  color: #3333ad;
  font-size:3.2rem;
`;

export const ContentCenter = styled.div`
  display: flex;
  justify-content: center;
`;
export const InnerSection=styled.div`
margin-top:1rem;
`
export const Word=styled.span`
color: #3333ad;
font-weight:700;
cursor: pointer;
`
export const Error = styled.div`
  color:red;
  font-size: 0.9rem;
text-transform: capitalize;
`;
export const ErrorDiv = styled.div`
background-color: #FFE0DF;
padding:0.5rem;
border-radius:1rem;

`;