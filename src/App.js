import * as React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
