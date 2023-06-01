import React, { useState, useContext, useEffect } from "react";
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
  DefaultLink,
} from "./SignupElements.js";
import googleIcon from "../../../assets/icons/google.svg";
import { Link, useNavigate } from "react-router-dom";

import Loading from "../../UI/Loader/Loader.jsx";

const Signup = () => {
  // Getting database, storage from context

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fileInput, setFileInput] = useState("");
  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
    displayName: "",
  });

  const navigate = useNavigate();

  // Input Values Handler

  const signUpHandler = (e) => {
    setSignUpData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const googleLogin = async (e) => {
    e.preventDefault();
  };

  //  Handle Submit & Creating New User

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const { displayName, email, password } = signUpData;

    try {
      //Create user
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <SignupWrapper>
      {loading ? (
        <Loading page={"signup"} />
      ) : (
        <>
          <Logo />
          <Title>Hey, hello!</Title>
          <SubTitle>Create an account, it’s super easy</SubTitle>
          <SignupForm onSubmit={handleSubmit}>
            {error && <h1 style={{ color: "red" }}>Something went wrong...</h1>}
            <Input
              type="text"
              placeholder="Name"
              name="displayName"
              value={signUpData.displayName}
              onChange={signUpHandler}
            />
            <Input
              type="text"
              placeholder="Email"
              name="email"
              value={signUpData.email}
              onChange={signUpHandler}
            />
            <Input
              type="password"
              placeholder="Password"
              name="password"
              value={signUpData.password}
              onChange={signUpHandler}
            />
            <Cta>
              <CreateAccBtn type="submit">Create account</CreateAccBtn>
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
            Already have an account?{" "}
            <DefaultLink to="/login">Sign in</DefaultLink>
          </Message>
        </>
      )}
    </SignupWrapper>
  );
};

export default Signup;
