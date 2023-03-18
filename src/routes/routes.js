// PUBLIC ROUTES

import Board from "../components/Pages/Board/Board";
import Login from "../components/Pages/Login/Login";
import Signup from "../components/Pages/Signup/Signup";
import Calendar from "../components/Pages/Calendar/Calendar";
import Notes from "../components/Pages/Notes/Notes.jsx";
import Home from "../components/Pages/Home/Home.jsx";
import {
  BOARD_ROUTE,
  CALENDAR_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  NOTES_ROUTE,
  SIGNUP_ROUTE,
} from "../utils/consts";

export const publicRoutes = [
  {
    path: SIGNUP_ROUTE,
    element: Signup,
  },
  {
    path: LOGIN_ROUTE,
    element: Login,
  },
  {
    path: BOARD_ROUTE,
    element: Board,
  },
];

// PRIVATE ROUTES (routes which are available for authorized users only)

export const privateRoutes = [
  {
    path: BOARD_ROUTE,
    element: Board,
  },
  {
    path: CALENDAR_ROUTE,
    element: Calendar,
  },
  {
    path: NOTES_ROUTE,
    element: Notes,
  },
  {
    path: HOME_ROUTE,
    element: Home,
  },
];
