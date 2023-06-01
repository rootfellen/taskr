import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0rem;
  overflow: auto;
  flex: 80%;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const NavListTitle = styled.h2`
  color: #42434a;
  font-size: 1.2rem;
  font-weight: 500;
  padding: 0.5rem 3rem;
`;
export const NavListTitleLabels = styled.h2`
  color: #42434a;
  font-size: 1.2rem;
  font-weight: 500;
  padding: 0.5rem 3rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

export const NavListItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
  color: #42434a;
  padding: 0.7rem 0rem;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  gap: 0.5rem;
  width: 100%;
  padding-left: 3rem;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: rgba(15, 201, 167, 0.25);
  }
`;

export const NavListItemActive = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
  color: #42434a;
  padding: 0.7rem 0rem;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  gap: 0.5rem;
  width: 100%;
  padding-left: 3rem;
  transition: 0.3s ease-in-out;
  background-color: rgba(15, 201, 167, 0.25);
  &::before {
    content: "";
    position: absolute;
    left: 0;
    width: 5px;
    height: 100%;
    background-color: #0fc9a7;
  }
`;

export const NavListItemTag = styled.li`
  font-size: 0.7rem;
  width: 50%;
  padding: 0.3rem 0rem 0.3rem 3rem;
  transition: 0.3s ease-in-out;
  color: #42434a;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: rgba(15, 201, 167, 0.25);
  }
`;

export const NavLinkItem = styled(NavLink)`
  width: 60%;
`;

export const Chevron = styled.img`
  padding-top: ${({ isOpen }) => (isOpen ? "0rem" : "1rem")};
  transform: ${({ isOpen }) => (isOpen ? "rotate(0deg)" : "rotate(-90deg)")};
  filter: ${({ isOpen }) =>
    isOpen
      ? "contrast(0) sepia(119%) hue-rotate(476deg) brightness(1.2) saturate(1.28)"
      : "none"};
`;

// Dropdown Menu, items

export const DropdownMenu = styled.ul`
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const DropdownMenuItem = styled.li`
  font-size: 1rem;
  width: 100%;
  padding: 0.3rem 0rem 0.3rem 3rem;
  transition: 0.3s ease-in-out;
  color: #42434a;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  a {
    &:last-child {
      color: #a4a4a4;
    }
  }
`;
