import React from "react";
import Users from "./users/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <MainNavigation />
        <main>
          <Routes>
            <Route path="/" element={<Users />} exact />
            <Route path="/places/new" element={<NewPlace />} exact />
            <Route path="/:userId/places" element={<UserPlaces />} exact />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
