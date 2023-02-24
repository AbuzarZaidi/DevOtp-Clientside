import styled from "styled-components";

const mediaQueries = {
  mobile: `(max-width: 650px)`,
  laptop: `(max-width: 1500px)`,
  minilaptop: `(max-width: 1200px)`,
  tablet: `(max-width: 935px)`,
  xs: `(max-width: 450px)`,
  xxs: `(max-width: 350px)`,
};
export const ModalContent = styled.div`
  background: #fff;
  // padding: 4rem;
  border-radius: 5px;
  width: 100%;
  max-width: 600px;
  max-height: 90%;
  position: relative; /* add this to allow absolute positioning of close button */

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

  @media ${mediaQueries.laptop} {
    width: 40%;
  }
  @media ${mediaQueries.minilaptop} {
    width: 40%;
  }
  @media ${mediaQueries.tablet} {
    width: 80%;
  }
  @media ${mediaQueries.xs} {
    width: 80%;
  }
  // @media ${mediaQueries.xxs} {
  //   width: 80%;
  // }
`;
export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
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
      width: 80%;
      box-sizing: border-box;
      border-radius: 1rem;
      border: 0.1rem solid #ccc;
    }
  }

  @media ${mediaQueries.laptop} {
    form {
      gap: 1rem;
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

  @media ${mediaQueries.mobile} {
    form {
      input {
        width: 100%;
      }
    }
  }
`;
export const Button=styled.button`
  background-color: #3333ad;
  font-weight: 600;
  color: #fff;
  padding: 0.5rem 5rem;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;
  @media ${mediaQueries.mobile} {
    padding: 0.5rem 2.5rem;
  }
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
export const InnerSection=styled.div`
margin-top:1rem;
`

export const Heading = styled.h4`
  color: #3333ad;
  font-size:2.8rem;
  margin-bottom:1rem;
  @media ${mediaQueries.mobile} {
    font-size: 2rem;
  }
`;

export const ContentCenter = styled.div`
  display: flex;
  justify-content: center;
 
`;
export const ContentCenter1 = styled.div`
  display: flex;
  justify-content: center;
  margin-top:.2rem;
  margin-bottom:.5rem;

`;
export const InputContentCenter=styled.div`
display: flex;
justify-content: center;
  flex-direction: column;

 align-items:center;
 text-align:start;
`;

export const Label=styled.label`
  font-weight: 600;
  font-size: 1.2rem;
  width:60%;
  color: #3333ad;
  @media ${mediaQueries.mobile} {
    font-size: 1rem;
  }
`;

export const Input=styled.input`
  background-color:#F2F2FF;
  width:60%;
  padding: 0.5rem 1rem 0.5rem 1rem;
  box-sizing: border-box;
  border-radius: 1rem;
  border: 0.1rem solid #ccc;
  margin-top: 0.3rem;
  margin-bottom: 1rem;
  @media ${mediaQueries.mobile} {
    width:80%;
  }
`;
