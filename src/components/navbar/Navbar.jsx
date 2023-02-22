import React,{useState} from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import {SignUpVal ,LoginVal} from '../../store/constant'
import { setIsOpenHandler}from '../../store/modal' 
import {
  NavbarSection,
  Section,
  NavbarMenu,
  Logo,
  Menu,
  MenuItem,
  AuthButtons,
  Heading3,
  Image,
  SignupButton,
  SignupText,
  LoginButton,
  LoginText,
  Icon,
} from "./NavbarStyle";
import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";
import HeroSection from "../landingPage/herosection/HeroSection";
const Navbar = () => {
  const dispatch = useDispatch();
  const modalName=useSelector((state)=>state.modalData.name)

  const[showMenu,setShowMenu]=useState(false);
  const showMenuHandler=()=>{
    setShowMenu(!showMenu)
  }
  const signupHandler=()=>{
    dispatch(setIsOpenHandler(SignUpVal));
  }
  const loginHandler=()=>{
    dispatch(setIsOpenHandler(LoginVal));
  }
  return (
    <>
   {modalName==="signup"&&<SignUp />} 
   {modalName==="login"&&<SignIn />} 
    {showMenu&&<h1>Hello world</h1>}
      <NavbarSection>
        <Section>
          <NavbarMenu>
            <Logo>
              <Image src="/images/logo.png" alt="Alt text for the image" />

              <Heading3>DevOTP</Heading3>
            </Logo>
            <Menu>
              <MenuItem>Home</MenuItem>
              <MenuItem>Packages</MenuItem>
              <MenuItem>Contact Us</MenuItem>
              <MenuItem>How it works?</MenuItem>
              <MenuItem>Android App</MenuItem>
            </Menu>
            <AuthButtons>
              <Icon>
                <GiHamburgerMenu style={{ fontSize: "1rem" }} onClick={showMenuHandler} />
               
              </Icon>
              <SignupButton onClick={signupHandler}>
                <SignupText>Sign Up</SignupText>
              </SignupButton>
              <LoginButton onClick={loginHandler}>
                <LoginText>Login</LoginText>
              </LoginButton>
            </AuthButtons>
          </NavbarMenu>
        </Section>
        <HeroSection />
      </NavbarSection>
    </>
  );
};

export default Navbar;
