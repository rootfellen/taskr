import styled from "styled-components";

export const ButtonWrapper = styled.button`
  all: unset;
  transition: 0.3s ease-in-out;
  padding: ${({ styles }) => styles.padding};
  border: ${({ styles }) => styles.border};
  border-radius: ${({ styles }) => styles.borderRadius};
  color: ${({ styles }) => styles.color};
  font-weight: ${({ styles }) => styles.fontWeight};
  font-size: ${({ styles }) => styles.fontSize};
  cursor: pointer;
  &:hover {
    background-color: ${({ styles }) => styles.backgroundColor};
    color: ${({ styles }) => styles.hoverColor};
  }
`;
