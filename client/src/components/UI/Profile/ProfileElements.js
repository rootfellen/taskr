import styled from "styled-components";

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 0.5rem;
  flex: 0 1 20%;
  justify-content: flex-end;
`;

export const ProfileImage = styled.div`
  width: 57px;
  height: 57px;
  background-color: aquamarine;
  border-radius: 50%;
  background-image: url(${({ photo }) => photo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ProfileName = styled.h2`
  color: #42434a;
  font-weight: 500;
  font-size: 1rem;
`;

export const ProfileEmail = styled.h3`
  font-size: 0.75rem;
  color: rgba(153, 153, 153, 0.51);
  font-weight: 500;
`;
