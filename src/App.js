import React, { useState, useCallback } from "react";
import Users from "./users/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlace from "./places/pages/UpdatePlace";
import Auth from "./users/pages/Auth";
import { AuthContext } from "./shared/context/authcontext";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);
  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);
  let routes;
  if (isLoggedIn) {
    routes = (
      <>
        <Route path="/" element={<Users />} exact />
        <Route path="/places/new" element={<NewPlace />} exact />
        <Route path="/:userId/places" element={<UserPlaces />} exact />
        <Route path="/places/:placeid" element={<UpdatePlace />} exact />
      </>
    );
  } else {
    routes = (
      <>
        <Route path="/" element={<Users />} exact />
        <Route path="/auth" element={<Auth />} exact />
        <Route path="/:userId/places" element={<UserPlaces />} exact />
      </>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <div>
        <BrowserRouter>
          <MainNavigation />
          <main>
            <Routes>{routes}</Routes>
          </main>
        </BrowserRouter>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
