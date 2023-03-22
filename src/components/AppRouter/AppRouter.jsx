import React, { useContext } from "react";
import { Context } from "../../App";

// IMPORTING REACT-ROUTER COMPONENTS

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

// IMPORTING OUR APP COMPONENTS / PRIVATE ROUTES / PUBLIC ROUTES
import { privateRoutes, publicRoutes } from "../../routes/routes";
import { RouterWrapper, MainSection, AppWrapper } from "./AppRouterElements.js";
import Sidebar from "../UI/Sidebar/Sidebar.jsx";
import Navigation from "../UI/Navigation/Navigation.jsx";

import { useAuthState } from "react-firebase-hooks/auth";
import { BOARD_ROUTE, LOGIN_ROUTE, SIGNUP_ROUTE } from "../../utils/consts";
import Loader from "../../components/UI/Loader/Loader.jsx";

const AppRouter = () => {
  const { auth } = useContext(Context);
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Router>
        {user ? (
          <AppWrapper>
            <Routes>
              {/* PRIVATE ROUTES LAYOUT, An <Outlet> should be used in parent 
              route elements to render their child route elements. This allows 
              nested UI to show up when child routes are rendered. */}
              <Route
                element={
                  <RouterWrapper>
                    <Sidebar />
                    <MainSection>
                      <Navigation />
                      <Outlet />
                    </MainSection>
                  </RouterWrapper>
                }
              >
                {privateRoutes.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={<route.element />}
                  />
                ))}
                <Route path="*" element={<Navigate to="/board" replace />} />
              </Route>
            </Routes>
          </AppWrapper>
        ) : (
          <Routes>
            {/* PUBLIC ROUTES */}

            {publicRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.element />}
              />
            ))}
            <Route path="*" element={<Navigate to={LOGIN_ROUTE} replace />} />
          </Routes>
        )}
      </Router>
    </>
  );
};

export default AppRouter;
