import React from "react";
import { HeroContainer } from "./HeroElements";

const Hero = ({ children }) => {
  return <HeroContainer>{children}</HeroContainer>;
};

export default Hero;
