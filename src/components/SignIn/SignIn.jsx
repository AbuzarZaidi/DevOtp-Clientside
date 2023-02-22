import React,{useState} from 'react'
import Modal from "../utils/Modal/Modal";
import { useDispatch } from "react-redux";
import * as yup from 'yup';
import{SignUpVal} from '../../store/constant'
import { setIsOpenHandler,setNameHandler } from "../../store/modal";
import { setLoginHandler } from "../../store/auth";
import {
    ModalContent,
    FormWrapper,
    Heading,
    InnerSection,
    ContentCenter,
    Button,
    Word,Error,ErrorDiv
  } from "./SignInStyle";
  const { signin } = require("../../functions/auth");
const SignIn = () => {
    const dispatch = useDispatch();
const [formData, setFormData] = useState({ email: "", password: "" });
const [error,setError]=useState(false)
const [errorMessage,setErrorMessage]=useState("")
const closeModalHandler = () => {
    dispatch(setIsOpenHandler());
  };
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required()
});
  const ToggleHandler=()=>{
    dispatch(setNameHandler(SignUpVal))
  }
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const closeError=()=>{
   if(error){
    setError(false);
      setErrorMessage("");
   }
    
  }
  const handleSubmit =async (event) => {
    event.preventDefault();
    console.log(formData)
    try {
      await schema.validate(formData);
    } catch (error) {
      setError(true);
      setErrorMessage(error.message);
    }
    const result = await signin({email:formData.email,password:formData.password});
    console.log(result)
    if(result.data){
      dispatch(setLoginHandler({
        id:result.data.id,
        name:result.data.name,
        email:result.data.email,
        token:result.data.token
      }))
      dispatch(setIsOpenHandler(""))
    }else{
      setError(true);
      setErrorMessage(result.message);
    }
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
          
        {error &&<ErrorDiv> <Error>{errorMessage}</Error></ErrorDiv>}
        </ContentCenter>
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
      
      
          </form>
          <ContentCenter>
            <Button onClick={handleSubmit}>Log in</Button>
         
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