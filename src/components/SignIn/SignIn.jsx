import React,{useState} from 'react'
import Modal from "../utils/Modal/Modal";
import { useDispatch } from "react-redux";
import{SignUpVal} from '../../store/constant'
import { setIsOpenHandler,setNameHandler } from "../../store/modal";
import {
    ModalContent,
    FormWrapper,
    Heading,
    InnerSection,
    ContentCenter,
    Button,
    Word
  } from "./SignInStyle";

const SignIn = () => {
    const dispatch = useDispatch();
const [formData, setFormData] = useState({ email: "", password: "" });
const closeModalHandler = () => {
    dispatch(setIsOpenHandler());
  };
  const ToggleHandler=()=>{
    dispatch(setNameHandler(SignUpVal))
  }
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // or send data to server
  };
  return (
    <div>
    <Modal>
      <ModalContent>
        <span className="close" onClick={closeModalHandler}>
          &times;
        </span>
        <ContentCenter>
          <Heading>Log in</Heading>
        </ContentCenter>
        <FormWrapper>
          <form onSubmit={handleSubmit}>
         
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              minLength={8}
              required
            />
      
            
          </form>
          <ContentCenter>
            <Button>Log in</Button>
         
            </ContentCenter>
          <ContentCenter>
          <InnerSection>Don't have an account yet? <Word onClick={ToggleHandler}>Sign up</Word></InnerSection>
          </ContentCenter>
        </FormWrapper>
      </ModalContent>
    </Modal>
  </div>
  )
}

export default SignIn