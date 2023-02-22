import React,{useState} from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import {SignUpVal ,LoginVal} from '../../store/constant'
import { setIsOpenHandler}from '../../store/modal' 
import { setLogoutHandler}from '../../store/auth' 
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
  LogoutButton,
  LogoutText,
  Icon,
} from "./NavbarStyle";
import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";
import HeroSection from "../landingPage/herosection/HeroSection";
const Navbar = () => {
  const dispatch = useDispatch();
  const modalName=useSelector((state)=>state.modalData.name)
  const isLogin=useSelector((state)=>state.authData.isLogin)

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
  const logoutHandler=()=>{
    dispatch(setLogoutHandler())
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
             {!isLogin&& <SignupButton onClick={signupHandler}>
                <SignupText>Sign Up</SignupText>
              </SignupButton>}
              {!isLogin&&<LoginButton onClick={loginHandler}>
                <LoginText>Login</LoginText>
              </LoginButton>}
              {isLogin&&<LogoutButton onClick={logoutHandler}>
                <LogoutText>Log out</LogoutText>
              </LogoutButton>}
            </AuthButtons>
          </NavbarMenu>
        </Section>
        <HeroSection />
      </NavbarSection>
    </>
  );
};

export default Navbar;
