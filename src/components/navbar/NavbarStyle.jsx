import styled from "styled-components";
const mobile = `(max-width: 868px)`;
const laptop=`(max-width:1500px)`;
const minilaptop=`(max-width:1200px)`;
const tablet=`(max-width:935px)`;
export const NavbarSection = styled.footer`
  background: #fff7e0;
  background-image: radial-gradient(
      at 80.1% 83.3%,
      #ffe0fb 0px,
      transparent 50%
    ),
    radial-gradient(at 74.1% 34.7%, #d7f7fa 0px, transparent 50%),
    radial-gradient(at 27.7% 87%, #eedbff 0px, transparent 50%);
  height: 85vh;
  weight: 100%;
  @media ${mobile} {
    height:70vh;
    
   }
`;
export const Section = styled.section`
  display: flex;

  flex-direction: column;
  // align-items: start;
  width: 100%; /* set the section width to 100% of the parent element */
  // max-width: 85rem; /* set a maximum width for the section to limit its size */
  // margin: 0 auto; /* center the section horizontally using auto margin */
`;
export const NavbarMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top:2rem;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  margin-left:2rem;
  margin-right:10rem;
  @media ${laptop} {
    margin-right:5rem;
    
   }
   @media ${minilaptop} {
    margin-right:3rem;
    
   }
`;
export const Heading3 = styled.h4`
  font-size: 1.1rem;

  margin-left: 1rem;
  color: #3333ad;
  width: 100%; /* set the heading width to 100% of the parent element */
  max-width: 45rem;
  @media ${minilaptop} {
    font-size: 1rem;
    
   }
`;
export const Image = styled.img`
  width: 100%;
  max-width: 500px;

`;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right:10rem;
  @media ${laptop} {
    margin-right:5rem;
   }
   @media ${minilaptop} {
    margin-right:3rem;
   };
  @media ${mobile} {
   display:none;
  }
`;
export const AuthButtons = styled.div`
  display: flex;
  // justify-content: space-betwen;
  align-items: center;
  margin-right:2rem;

`;

export const MenuItem = styled.p`
  font-weight: 600;
  color: #3333ad;
  margin: 0 1.5rem;
  font-size: 1.1rem;
  @media ${laptop} {
    font-size:1rem;
    margin: 0 1.5rem;
   }
   @media ${minilaptop} {
    margin: 0 .5rem;
    font-size:.9rem;
   }
   @media ${tablet} {
    margin: 0 .4rem;
    font-size:.7rem;
   }
   
`;
export const SignupButton = styled.button`
  background: none;
  margin-right: 1rem;
  width: 6rem;
  max-width: 500px;
  border: 3px solid #000000;
  border-radius: 2rem;
  cursor: pointer;
  &:hover {
    background-color: #454545;
    transition: transform 0.2s ease-in-out; /* add a transition effect */

    &:hover {
      transform: scale(1.05); /* grow the component on hover */
    }
  }
  @media ${mobile} {
    display:none;
   }

`;
export const SignupText = styled.p`
  color: #000000;
  font-weight: 600;
  font-size: 1.1rem;
  padding: 0.7rem;
  &:hover {
 
    color:#ffffff;
  }
  @media ${laptop} {
    font-size: 1rem;
  padding: 0.5rem;
   }
   @media ${minilaptop} {
    font-size: .9rem;
    padding: 0.4rem;
   }
   @media ${tablet} {
    font-size: .9rem;
    padding: 0.3rem;
   }
`;
export const LoginButton = styled.button`
  background: none;
  // margin-top: 2.5rem;
  width: 6rem;
  max-width: 500px;
  border: 3px solid #3333ad;
  border-radius: 2rem;
  cursor: pointer;
  &:hover {
    transition: transform 0.2s ease-in-out; /* add a transition effect */

    &:hover {
      transform: scale(1.05); /* grow the component on hover */
    }
    background-color: #7a7ac9;
  }
  @media ${mobile} {
    display:none;
   }
`;
export const LoginText = styled.p`
  color: #3333ad;
  font-weight: 600;
  font-size: 1.1rem;
  padding: 0.7rem;
  &:hover {
 
    color:#ffffff;
  }
  @media ${laptop} {
    font-size: 1rem;
  padding: 0.5rem;
   }
   @media ${minilaptop} {
    font-size: .9rem;
    padding: 0.3rem;
   }
`;
export const LogoutButton = styled.button`
  background: none;
  // margin-top: 2.5rem;
  width: 6rem;
  max-width: 500px;
  border: 3px solid  #ff3333;
  border-radius: 2rem;
  cursor: pointer;
  &:hover {
    
    background-color:  #ff3333;
    transition: transform 0.2s ease-in-out; /* add a transition effect */

    &:hover {
      transform: scale(1.05); /* grow the component on hover */
    }
  }
  @media ${mobile} {
    // display:none;
   }
`;
export const LogoutText = styled.p`
  color:  #ff3333;
  font-weight: 600;
  font-size: 1.1rem;
  padding: 0.7rem;
  &:hover {
 
    color:#ffffff;
  }
  @media ${laptop} {
    font-size: 1rem;
  padding: 0.5rem;
   }
   @media ${minilaptop} {
    font-size: .9rem;
    padding: 0.3rem;
   }
`;
export const Icon=styled.div`
display:none;
@media ${mobile} {
  display:block;
 }
`;