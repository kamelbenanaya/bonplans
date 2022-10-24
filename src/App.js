import React from "react";
import Users from "./users/pages/Users";
import Places from "./places/pages/Places";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/Places" element={<Places />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
