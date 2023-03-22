import React, { useState, useContext } from "react";
import {
  NavList,
  NavListItem,
  NavListItemActive,
  NavListTitle,
  NavWrapper,
  NavListItemTag,
  Chevron,
  DropdownMenu,
  DropdownMenuItem,
  NavListTitleLabels,
  NavLinkItem,
} from "./SidebarNavElements";
import { NavLink } from "react-router-dom";
import HomeIcon from "../../../assets/icons/home.svg";
import BoardIcon from "../../../assets/icons/board.svg";
import NotesIcon from "../../../assets/icons/notes.svg";
import GoalsIcon from "../../../assets/icons/goals.svg";
import CalendarIcon from "../../../assets/icons/calendar.svg";
import SettingsIcon from "../../../assets/icons/settings.svg";
import HelpIcon from "../../../assets/icons/help.svg";
import LogoutIcon from "../../../assets/icons/logout.svg";
import HighPriorityTag from "../../../assets/icons/tags/high.svg";
import MediumPriorityTag from "../../../assets/icons/tags/medium.svg";
import LowPriorityTag from "../../../assets/icons/tags/low.svg";
import dropDownIcon from "../../../assets/icons/chevron.svg";
import boardItemIcon from "../../../assets/icons/boardItem.svg";
import { Context } from "../../../App";

const SidebarNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [tagsOpen, setTagsOpen] = useState(false);
  const { auth } = useContext(Context);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  const toggleTagsDropdown = () => {
    setTagsOpen((prevState) => !prevState);
  };

  const signOutHandler = () => {
    auth.signOut();
  };
  return (
    <NavWrapper>
      <NavList>
        <NavListTitle>Pages</NavListTitle>
        <NavLinkItem to="/home">
          {({ isActive }) =>
            isActive ? (
              <NavListItemActive>
                <img src={HomeIcon} alt="Home" />
                Home
              </NavListItemActive>
            ) : (
              <NavListItem>
                <img src={HomeIcon} alt="Home" />
                Home
              </NavListItem>
            )
          }
        </NavLinkItem>
        <NavLinkItem to="/board">
          {({ isActive }) =>
            isActive ? (
              <NavListItemActive onClick={toggleDropdown}>
                <img src={BoardIcon} alt="Board" />
                Board
                <Chevron isOpen={isOpen} src={dropDownIcon} alt="dropdown" />
              </NavListItemActive>
            ) : (
              <NavListItem>
                {" "}
                <img src={BoardIcon} alt="Board" />
                Board{" "}
              </NavListItem>
            )
          }
        </NavLinkItem>
        {isOpen && (
          <DropdownMenu isOpen={isOpen}>
            <NavLinkItem to="/">
              <DropdownMenuItem>
                <img src={boardItemIcon} alt="Board Item" />
                My board
              </DropdownMenuItem>
            </NavLinkItem>
            <NavLinkItem to="/">
              <DropdownMenuItem>
                <img src={boardItemIcon} alt="Board Item" />
                HobinRood App
              </DropdownMenuItem>
            </NavLinkItem>
            <NavLinkItem to="/">
              <DropdownMenuItem>
                <img src={boardItemIcon} alt="Board Item" />
                Hackathon Project
              </DropdownMenuItem>
            </NavLinkItem>
            <NavLinkItem to="/">
              <DropdownMenuItem style={{ color: "#A4A4A4", fontWeight: "500" }}>
                Load more...
              </DropdownMenuItem>
            </NavLinkItem>
          </DropdownMenu>
        )}
        <NavLinkItem to="/notes">
          {({ isActive }) =>
            isActive ? (
              <NavListItemActive>
                <img src={NotesIcon} alt="Notes" />
                Notes
              </NavListItemActive>
            ) : (
              <NavListItem>
                <img src={NotesIcon} alt="Notes" />
                Notes
              </NavListItem>
            )
          }
        </NavLinkItem>
        <NavLinkItem to="/goals">
          {({ isActive }) =>
            isActive ? (
              <NavListItemActive>
                <img src={GoalsIcon} alt="Goals" />
                Goals
              </NavListItemActive>
            ) : (
              <NavListItem>
                <img src={GoalsIcon} alt="Goals" />
                Goals
              </NavListItem>
            )
          }
        </NavLinkItem>
        <NavLinkItem to="/calendar">
          {({ isActive }) =>
            isActive ? (
              <NavListItemActive>
                <img src={CalendarIcon} alt="Calendar" />
                Calendar
              </NavListItemActive>
            ) : (
              <NavListItem>
                <img src={CalendarIcon} alt="Calendar" />
                Calendar
              </NavListItem>
            )
          }
        </NavLinkItem>
        <NavLinkItem to="/settings">
          {({ isActive }) =>
            isActive ? (
              <NavListItemActive>
                <img src={SettingsIcon} alt="Settings" />
                Settings
              </NavListItemActive>
            ) : (
              <NavListItem>
                <img src={SettingsIcon} alt="Settings" />
                Settings
              </NavListItem>
            )
          }
        </NavLinkItem>
      </NavList>
      <NavList>
        <NavListTitleLabels onClick={toggleTagsDropdown}>
          Labels <Chevron isOpen={tagsOpen} src={dropDownIcon} alt="dropdown" />
        </NavListTitleLabels>
        {tagsOpen && (
          <>
            <NavLink to="/">
              <NavListItemTag>
                <img src={HighPriorityTag} alt="High Priority" />
                High Priority
              </NavListItemTag>
            </NavLink>
            <NavLink to="/">
              <NavListItemTag>
                <img src={MediumPriorityTag} alt="Medium Priority" />
                Medium Priority
              </NavListItemTag>
            </NavLink>
            <NavLink to="/">
              <NavListItemTag>
                <img src={LowPriorityTag} alt="Low Priority" />
                Low Priority
              </NavListItemTag>
            </NavLink>
          </>
        )}
      </NavList>
      <NavList>
        <NavLinkItem to="/help">
          {({ isActive }) =>
            isActive ? (
              <NavListItemActive>
                <img src={HelpIcon} alt="Help" />
                Help
              </NavListItemActive>
            ) : (
              <NavListItem>
                <img src={HelpIcon} alt="Help" />
                Help
              </NavListItem>
            )
          }
        </NavLinkItem>
        <NavLinkItem to="/" onClick={signOutHandler}>
          {({ isActive }) =>
            isActive ? (
              <NavListItemActive>
                <img src={LogoutIcon} alt="Logout" />
                Logout
              </NavListItemActive>
            ) : (
              <NavListItem>
                <img src={LogoutIcon} alt="Logout" />
                Logout
              </NavListItem>
            )
          }
        </NavLinkItem>
      </NavList>
    </NavWrapper>
  );
};

export default SidebarNav;
