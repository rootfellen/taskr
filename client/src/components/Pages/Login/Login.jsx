import React, { useState, useContext } from "react";

// Importing Logo Component
import Logo from "../../UI/Logo/Logo.jsx";

//  Import Styled Components for Login.jsx
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
  DefaultLink,
} from "./LoginElements.js";
import googleIcon from "../../../assets/icons/google.svg";

// Import React Router Components
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  // Sign In Handler

  const signInHandler = (e) => {
    setSignInData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  // Google Handler

  const googleLogin = async (e) => {
    e.preventDefault();
  };

  // Sign in Submit handler

  const signInSubmit = async (e) => {
    e.preventDefault();
    try {
      navigate("/");
    } catch (err) {
      setError((prevState) => !prevState);
      alert(error);
    }
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
        {error && <span style={{ color: "red" }}>Something weng wrong...</span>}
      </SignupForm>
      <Message>
        New to Taskr? <DefaultLink to="/signup">Sign up</DefaultLink>
      </Message>
    </SignupWrapper>
  );
};

export default Login;
