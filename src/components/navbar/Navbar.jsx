import React,{useState} from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
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
import HeroSection from "../landingPage/herosection/HeroSection";
const Navbar = () => {
  const dispatch = useDispatch();
  const[showMenu,setShowMenu]=useState(false);
  const showMenuHandler=()=>{
    setShowMenu(!showMenu)
  }
  const signupHandler=()=>{
    dispatch(setIsOpenHandler());
  }
  return (
    <>
    <SignUp />
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
              <LoginButton>
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
