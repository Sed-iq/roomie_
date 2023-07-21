import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./screens/landing";
import Cart from "./screens/cart";
import "animate.css";
import { useState } from "react";
import Loading from "./screens/loading";
export default () => {
  if (localStorage.getItem("cart_data") == null)
    // console.log(localStorage.getItem("cart_data"));
    localStorage.setItem("cart_data", JSON.stringify([]));
  const [load, setLoad] = useState(true); // simulate loadtime
  return load == true ? (
    <Loading setLoad={setLoad} />
  ) : (
    <div className="bg-white outline-none min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<h2>404</h2>} />
        </Routes>
      </Router>
    </div>
  );
};
  
