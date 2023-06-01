import React from "react";
import { Container } from "./SidebarElements";
import Logo from "../Logo/Logo";
import SidebarNav from "../SidebarNav/SidebarNav";

const Sidebar = () => {
  return (
    <Container>
      <Logo />
      <SidebarNav />
    </Container>
  );
};

export default Sidebar;
