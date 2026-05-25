import Home from "@/components/Home/Home";
import Popup from "@/components/Popup"; // ✅ add this import
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Popup />
      <Home />
      
    </div>
  );
};

export default HomePage;
