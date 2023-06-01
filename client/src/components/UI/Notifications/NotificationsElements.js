import styled from "styled-components";

export const NotificationsWrapper = styled.div`
  max-width: 33px;
  max-height: 33px;
  width: 100%;
  height: 100%;
  cursor: pointer;
  flex: 0 1 10%;
`;

export const NotificationsImage = styled.div`
  position: relative;
  width: 100%;
`;

export const NotificationsList = styled.div`
  position: absolute;
  max-width: 1rem;
  width: 100%;
  max-height: 1rem;
  height: 100%;
  border-radius: 50%;
  background-color: #ff800c;
  font-size: 10px;
  top: 0;
  right: -5%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
