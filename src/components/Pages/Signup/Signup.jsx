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
} from "./SignupElements.js";
import googleIcon from "../../../assets/icons/google.svg";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Context } from "../../../App";

const Signup = () => {
  const { auth } = useContext(Context);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fileInput, setFileInput] = useState("");
  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
    name: "",
  });

  //  Profile Image Handler

  const fileHandler = (e) => {
    setFileInput(e.target.value);
  };

  // Input Values Handler

  const signUpHandler = (e) => {
    setSignUpData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  //  Handle Submit & Creating New User
  const { email, password, name } = signUpData;

  const signUpSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password)
        .then((res) => console.log(res))

        .catch((err) => console.log(err));
      await updateProfile(auth.currentUser, { displayName: name }).catch(
        (err) => console.log(err)
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SignupWrapper>
      <Logo />
      <Title>Hey, hello!</Title>
      <SubTitle>Create an account, it’s super easy</SubTitle>
      <SignupForm>
        <Input
          type="text"
          placeholder="Name"
          name="name"
          value={signUpData.name}
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
          <CreateAccBtn onClick={(e) => signUpSubmit(e)}>
            Create account
          </CreateAccBtn>
          <Divider>
            <hr />
            or
            <hr />
          </Divider>
          <GoogleLoginBtn>
            <img src={googleIcon} alt="Google" />
            Sign in with Google
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
