import React, { useContext } from "react";
import {
  ProfileWrapper,
  ProfileImage,
  ProfileInfo,
  ProfileName,
  ProfileEmail,
} from "./ProfileElements.js";
import { Context } from "../../../App.jsx";
import { useAuthState } from "react-firebase-hooks/auth";
import profileImg from "../../../assets/profile.jpg";

const Profile = () => {
  const { auth } = useContext(Context);
  const [user, loading, error] = useAuthState(auth);

  return (
    <ProfileWrapper>
      <ProfileImage photo={profileImg} />
      <ProfileInfo>
        <ProfileName>{user.displayName}</ProfileName>
        <ProfileEmail>{user.email}</ProfileEmail>
      </ProfileInfo>
    </ProfileWrapper>
  );
};

export default Profile;
