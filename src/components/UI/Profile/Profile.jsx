import React from "react";
import {
  ProfileWrapper,
  ProfileImage,
  ProfileInfo,
  ProfileName,
  ProfileEmail,
} from "./ProfileElements";
import profileImg from "../../../assets/profile.jpg";

const Profile = () => {
  return (
    <ProfileWrapper>
      <ProfileImage photo={profileImg} />
      <ProfileInfo>
        <ProfileName>Serhii Tarasenko</ProfileName>
        <ProfileEmail>rootfellenusa@gmail.com</ProfileEmail>
      </ProfileInfo>
    </ProfileWrapper>
  );
};

export default Profile;
