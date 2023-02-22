import React, { useState } from "react";
import Modal from "../utils/Modal/Modal";
import{LoginVal} from '../../store/constant'
import {
  ModalContent,
  FormWrapper,
  Heading,
  InnerSection,
  ContentCenter,
  Button,
  Word
} from "./SignUpStyle";
import { useDispatch } from "react-redux";
import { setIsOpenHandler,setNameHandler } from "../../store/modal";
const { signup } = require("../../functions/auth");
const SignUp = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ name:"",phoneNo:"",email: "", password: "",confirmPassword:"" });

  const closeModalHandler = () => {
    dispatch(setIsOpenHandler());
  };
const ToggleHandler=()=>{
  dispatch(setNameHandler(LoginVal))
}
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log(formData)
    const result = await signup({name:formData.name,email:formData.email,password:formData.password,confirmPassword:formData.confirmPassword,phoneNo:formData.phoneNo});
    console.log(result)
    // or send data to server
  };

  return (
    <div>
      <Modal>
        <ModalContent>
          <span className="close" onClick={closeModalHandler}>
            &times;
          </span>
          <ContentCenter>
            <Heading>Sign up</Heading>
          </ContentCenter>
          <FormWrapper>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="phoneNo">Phone:</label>
              <input
                type="text"
                id="phoneNo"
                name="phoneNo"
                placeholder="Phone No"
                value={formData.phoneNo}
                onChange={handleInputChange}
                required
              />
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
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="confirmPassword"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                minLength={8}
                required
              />
              
            </form>
            <ContentCenter>
              <Button onClick={handleSubmit}>Sign up</Button>
           
              </ContentCenter>
            <ContentCenter>
            <InnerSection>Already have an account? <Word onClick={ToggleHandler}>Log in</Word></InnerSection>
            </ContentCenter>
          </FormWrapper>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default SignUp;
