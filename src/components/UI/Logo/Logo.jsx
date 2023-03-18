import React from "react";

import logoIcon from "../../../assets/icons/logo.svg";
import { LogoWrapper } from "./LogoElements";

const Logo = () => {
  return (
    <LogoWrapper to="/">
      <img src={logoIcon} alt="Task" />
      Taskr
    </LogoWrapper>
  );
};

export default Logo;
