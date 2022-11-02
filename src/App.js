import React from "react";
import Users from "./users/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlace from "./places/pages/UpdatePlace";

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
            <Route path="/places/:placeid" element={<UpdatePlace />} exact />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
