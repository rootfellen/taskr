import React, { useState, useContext } from "react";
import Logo from "../../UI/Logo/Logo.jsx";
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
} from "./LoginElements.js";
import googleIcon from "../../../assets/icons/google.svg";
import { Link } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { Context } from "../../../App";

const Login = () => {
  const { auth } = useContext(Context);
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  const signInHandler = (e) => {
    setSignInData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const googleLogin = async (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider);
  };

  const signInSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      signInData.email,
      signInData.password
    ).catch((err) => alert(err.message));
  };

  return (
    <SignupWrapper>
      <Logo />
      <Title>Hey, hello!</Title>
      <SubTitle>
        Enter the information you’ve entered while registering
      </SubTitle>
      <SignupForm>
        <Input
          type="text"
          placeholder="Email"
          name="email"
          value={signInData.email}
          onChange={signInHandler}
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          value={signInData.password}
          onChange={signInHandler}
        />
        <Cta>
          <CreateAccBtn onClick={signInSubmit}>Login</CreateAccBtn>
          <Divider>
            <hr />
            or
            <hr />
          </Divider>
          <GoogleLoginBtn onClick={googleLogin}>
            <img src={googleIcon} alt="Google" />
            Sign in with Google
          </GoogleLoginBtn>
        </Cta>
      </SignupForm>
      <Message>
        New to Taskr? <Link to="/signup">Sign up</Link>
      </Message>
    </SignupWrapper>
  );
};

export default Login;
