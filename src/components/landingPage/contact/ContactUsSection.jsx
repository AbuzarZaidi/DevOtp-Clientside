import React,{useState} from "react";
import * as yup from 'yup';
import {
  Section,
  Heading,
  SubmitButton,
  SubmitButtonText,
  Heading2,
  Heading3,
  EmailField,
  MessageField,
  InnerSection,
  Field,
  FieldDiv1,
  FieldDiv2,
  FieldDiv3,
  FieldDiv4,
  Error,
  ErrorDiv
} from "./ContactUsSectionStyle";
const { Createquery } = require("../../../functions/contact");
const ContactUsSection = () => {
  const [error,setError]=useState(false)
  const [success,setSuccess]=useState(false)
const [errorMessage,setErrorMessage]=useState("")
const [successMessage,setSuccessMessage]=useState("")
const schema = yup.object().shape({
  name: yup.string().required(),
  phoneNo: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().required(),
});
  const [formData, setFormData] = useState({ name:"",phoneNo:"",email: "",message: "" });
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit =async (event) => {
    event.preventDefault();
 
    try {
      await schema.validate(formData);
    } catch (error) {
      setError(true);
      setErrorMessage(error.message);
    }
    const result = await Createquery(formData);
    console.log(result.message)
    if(result.data){
      setSuccess(true);
        setSuccessMessage(result.message)
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      
    }else{
      setError(true);
      if(Array.isArray(result.message)){
  
        setSuccessMessage(result.message[0])
      }else{
        setErrorMessage(result.message);
      }
      
    }
   
  };
  const closeError=()=>{
    if(error){
     setError(false);
       setErrorMessage("");
    }
     
   }
  return (
    <Section>
      <Heading>Contact</Heading>
      {error &&<ErrorDiv> <Error>{errorMessage}</Error></ErrorDiv>}
      {success &&<div style={{backgroundColor:"green",borderRadius:"1rem",padding:"0.5rem 5rem"}}> <p style={{color:"#ffffff",fontSize: "1rem",textTransform:"capitalize"}}>{successMessage}</p></div>}
      
     
      <InnerSection>
        <FieldDiv1 >
          <Heading2>Name</Heading2>
        
          <Field  onClick={closeError} type="text" id="name" name="name" value={formData.name} placeholder="Name"  onChange={handleInputChange}></Field>
        </FieldDiv1>
        <FieldDiv2 >
          <Heading2>Phone#</Heading2>
          <Field  onClick={closeError} type="text" id="phoneNo" name="phoneNo" placeholder="Phone" onChange={handleInputChange} value={formData.phoneNo}></Field>
        </FieldDiv2>
      </InnerSection>
      <FieldDiv3 >
      <Heading3>Email</Heading3>
      
      <EmailField  onClick={closeError} type="email" id="email" name="email" onChange={handleInputChange} placeholder="Email" value={formData.email}></EmailField>
      </FieldDiv3>
      <FieldDiv4 >
      <Heading3>Message</Heading3>
      <MessageField  onClick={closeError} type="text" id="message" name="message" onChange={handleInputChange} value={formData.message} placeholder="Message"></MessageField>
      </FieldDiv4>
      <SubmitButton>
        <SubmitButtonText onClick={handleSubmit}>Submit</SubmitButtonText>
      </SubmitButton>
    </Section>
  );
};

export default ContactUsSection;
