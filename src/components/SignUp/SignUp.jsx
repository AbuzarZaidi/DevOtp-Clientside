import React, { useState } from "react";
import Modal from "../utils/Modal/Modal";
import * as yup from "yup";
import { LoginVal } from "../../store/constant";
import {
  InputContentCenter,
  Heading,
  Label,
  Input,
  ContentCenter,
  Error,
  Word,
  ContentCenter1,
  Button,
  InnerSection,
  ErrorDiv,
} from "./SignUpStyle";
import { useDispatch } from "react-redux";
import { setIsOpenHandler, setNameHandler } from "../../store/modal";
const { signup } = require("../../functions/auth");
const SignUp = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    phoneNo: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const closeModalHandler = () => {
    dispatch(setIsOpenHandler());
  };
  const schema = yup.object().shape({
    name: yup.string().required(),
    phoneNo: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
    confirmPassword: yup.string().min(6).required(),
  });

  const closeError = () => {
    if (error) {
      setError(false);
      setErrorMessage("");
    }
  };
  const ToggleHandler = () => {
    dispatch(setNameHandler(LoginVal));
  };
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    try {
      await schema.validate(formData);
    } catch (error) {
      setError(true);
      setErrorMessage(error.message);
    }
    const result = await signup({
      name: formData.name,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
      phoneNo: formData.phoneNo,
    });
    console.log(result);
    if (result.data) {
      dispatch(setNameHandler(LoginVal));
    } else {
      setError(true);
      setErrorMessage(result.message);
    }
  };

  return (
    <>
      <Modal>
        <ContentCenter>
          {error && (
            <ErrorDiv>
              {" "}
              <Error>{errorMessage}</Error>
            </ErrorDiv>
          )}
        </ContentCenter>
        <ContentCenter>
          <Heading>Sign up</Heading>
        </ContentCenter>

        <InputContentCenter>
          <Label htmlFor="name">Name</Label>
          <Input type="text" />
        </InputContentCenter>
        <InputContentCenter>
          <Label htmlFor="name">Email</Label>
          <Input type="text" />
        </InputContentCenter>
        <InputContentCenter>
          <Label htmlFor="name">Phone No</Label>
          <Input type="text" />
        </InputContentCenter>
        <InputContentCenter>
          <Label htmlFor="name">Password</Label>
          <Input type="text" />
        </InputContentCenter>
        <InputContentCenter>
          <Label htmlFor="name">Confirm Password</Label>
          <Input type="text" />
        </InputContentCenter>
        <ContentCenter>
          <Button>Sign up</Button>
        </ContentCenter>
        <ContentCenter1>
          <InnerSection>
            Already have an account? <Word onClick={ToggleHandler}>Log in</Word>
          </InnerSection>
        </ContentCenter1>
      </Modal>
    </>
  );
};

export default SignUp;
