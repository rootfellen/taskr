import React from "react";
import Logo from "../../UI/Logo/Logo";
import {
  CreateAccBtn,
  Cta,
  Input,
  SignupForm,
  SignupWrapper,
  SubTitle,
  Title,
  Divider,
  GoogleLoginBtn,
  Message,
} from "./SignupElements";
import googleIcon from "../../../assets/icons/google.svg";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <SignupWrapper>
      <Logo />
      <Title>Hey, hello!</Title>
      <SubTitle>Create an account, it’s super easy</SubTitle>
      <SignupForm>
        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Cta>
          <CreateAccBtn>Create account</CreateAccBtn>
          <Divider>
            <hr />
            or
            <hr />
          </Divider>
          <GoogleLoginBtn>
            <img src={googleIcon} alt="Google" />
            Sign up with Google
          </GoogleLoginBtn>
        </Cta>
      </SignupForm>
      <Message>
        Already have an account? <Link to="/login">Sign in</Link>
      </Message>
    </SignupWrapper>
  );
};

export default Signup;
