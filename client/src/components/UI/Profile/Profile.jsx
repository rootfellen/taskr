import React, { useContext } from "react";
import {
  ProfileWrapper,
  ProfileImage,
  ProfileInfo,
  ProfileName,
  ProfileEmail,
} from "./ProfileElements.js";

const Profile = () => {
  return (
    <ProfileWrapper>
      <ProfileImage photo={""} />
      <ProfileInfo>
        <ProfileName>Name</ProfileName>
        <ProfileEmail>email</ProfileEmail>
      </ProfileInfo>
    </ProfileWrapper>
  );
};

export default Profile;
