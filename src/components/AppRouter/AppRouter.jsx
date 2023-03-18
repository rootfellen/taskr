import React from "react";

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
import { RouterWrapper, MainSection } from "./AppRouterElements.js";
import Sidebar from "../UI/Sidebar/Sidebar";
import Navigation from "../UI/Navigation/Navigation";

const AppRouter = () => {
  // TEMPORARY VARIABLE TO HANDLE AUTHORIZATION, FOR PRIVATE ROUTES PURPOSE ONLY
  const auth = {
    token: true,
  };
  return (
    <>
      <Router>
        <Routes>
          {auth.token ? (
            <>
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
                <Route path="/" element={<Navigate to="/home" replace />} />
                {privateRoutes.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={<route.element />}
                  />
                ))}
              </Route>
            </>
          ) : (
            <>
              {/* PUBLIC ROUTES */}
              <>
                {publicRoutes.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={<route.element />}
                  />
                ))}
                <Route path="/" element={<Navigate to="/login" replace />} />
              </>
            </>
          )}
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
