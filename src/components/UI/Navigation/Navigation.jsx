import React from "react";
import { NavigationContainer, ButtonSection } from "./NavigationElements";
import SectionName from "../SectionName/SectionName";
import Search from "../Search/Search";
import Button from "../Button/Button";
import Notifications from "../Notifications/Notifications";
import Profile from "../Profile/Profile";

const Navigation = () => {
  return (
    <NavigationContainer>
      <SectionName>My Board</SectionName>
      <Search type="text" />
      <ButtonSection>
        <Button
          styles={{
            padding: "0.8rem",
            border: "2px dashed #0FC9A7",
            borderRadius: "25px",
            color: "#0FC9A7",
            fontWeight: "500",
            fontSize: "1.25rem",
            backgroundColor: "#0FC9A7",
            hoverColor: "#fff",
          }}
        >
          + Invite
        </Button>
      </ButtonSection>
      <Notifications />
      <Profile />
    </NavigationContainer>
  );
};

export default Navigation;
