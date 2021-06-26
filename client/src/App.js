import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar"


function App() {
  return (
    <>
      <Router>
        <Route path='/' component={Sidebar} />
      </Router>
    </>
  );
}

export default App;
