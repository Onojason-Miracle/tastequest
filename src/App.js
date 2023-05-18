import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/shop.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Landingpage from "./components/Landingpage";
import Linkfooter from "./components/LinkFooter";

function App() {
  return (
    <div>
     

      <BrowserRouter>
      
        <Routes>
       
          <Route index element={<Landingpage />} />

          <Route path="homepage" element={<Landingpage />} />

          <Route path="signup" element={<Signup />} />

          <Route path="login" element={<Login />} />

          <Route path="footer" element={<Linkfooter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
