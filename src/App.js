import * as React from "react";

import { Routes, Route } from "react-router-dom";
import About from "./routes/about/about.jsx";
import Contactus from "./routes/contactus/contactus.jsx";

import Home from "./routes/home/home.component.jsx";
import NavigationBar from "./routes/navigation/navigationbar.jsx";
import Privacy from "./routes/privacy/privacy.jsx";
import ShopPage from "./routes/shop/shoppage.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavigationBar />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/privacy" element={<Privacy />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
