import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar"
import Profile from "./components/Profile"


function App() {
  return (
    <>
      <Router>
        <Route path='/' component={Profile} />
      </Router>
    </>
  );
}

export default App;
