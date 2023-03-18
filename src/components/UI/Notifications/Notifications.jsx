import React from "react";
import notificationsIcon from "../../../assets/icons/notifications.svg";
import {
  NotificationsWrapper,
  NotificationsImage,
  NotificationsList,
} from "./NotificationsElements";

const Notifications = () => {
  return (
    <NotificationsWrapper>
      <NotificationsImage>
        <img src={notificationsIcon} />
        <NotificationsList>0</NotificationsList>
      </NotificationsImage>
    </NotificationsWrapper>
  );
};

export default Notifications;
