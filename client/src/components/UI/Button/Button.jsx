import React from "react";
import { ButtonWrapper } from "./ButtonElements";

const Button = ({ children, styles }) => {
  return <ButtonWrapper styles={styles}>{children}</ButtonWrapper>;
};

export default Button;
