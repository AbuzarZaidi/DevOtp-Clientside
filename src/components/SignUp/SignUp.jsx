import React, { useState } from "react";
import Modal from "../utils/Modal/Modal";
import * as yup from 'yup';
import{LoginVal} from '../../store/constant'
import {
  ModalContent,
  FormWrapper,
  Heading,
  InnerSection,
  ContentCenter,
  Button,
  Word,Error,ErrorDiv
} from "./SignUpStyle";
import { useDispatch } from "react-redux";
import { setIsOpenHandler,setNameHandler } from "../../store/modal";
const { signup } = require("../../functions/auth");
const SignUp = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ name:"",phoneNo:"",email: "", password: "",confirmPassword:"" });
  const [error,setError]=useState(false)
  const [errorMessage,setErrorMessage]=useState("")
  const closeModalHandler = () => {
    dispatch(setIsOpenHandler());
  };
  const schema = yup.object().shape({
    name: yup.string().required(),
    phoneNo: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
    confirmPassword: yup.string().min(6).required()
});
const closeError=()=>{
  if(error){
   setError(false);
     setErrorMessage("");
  }
   
 }
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
    try {
      await schema.validate(formData);
    } catch (error) {
      setError(true);
      setErrorMessage(error.message);
    }
    const result = await signup({name:formData.name,email:formData.email,password:formData.password,confirmPassword:formData.confirmPassword,phoneNo:formData.phoneNo});
    console.log(result)
    if(result.data){
      dispatch(setNameHandler(LoginVal))
    }else{
      setError(true);
      setErrorMessage(result.message);
    }
  };

  return (
    <div>
      <Modal>
        <ModalContent>
          <span className="close" onClick={closeModalHandler}>
            &times;
          </span>
          <ContentCenter>
          
          {error &&<ErrorDiv> <Error>{errorMessage}</Error></ErrorDiv>}
          </ContentCenter>
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
                onClick={closeError}
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
                onClick={closeError}
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
                onClick={closeError}
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
                onClick={closeError}
              />
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                 type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                minLength={8}
                required
                onClick={closeError}
              />
               
       
            </form>
            
          </FormWrapper> 
          <ContentCenter>
          <Button onClick={handleSubmit}>Sign up</Button>
          </ContentCenter>
          <ContentCenter>
    
          <InnerSection>Already have an account? <Word onClick={ToggleHandler}>Log in</Word></InnerSection>
          </ContentCenter>
        </ModalContent>
        
      </Modal>
    </div>
  );
};

export default SignUp;
