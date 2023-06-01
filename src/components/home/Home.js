import React from "react";
import "../../assets/homePage.css";
import Content from "./Content";
import Furniture from "./Furniture";
import Intro from "./Intro";
import Navbar from "./Navbar";
import ProductFamouse from "./ProductFamouse";

function Home() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Content />
      <ProductFamouse />
      <Furniture />
    </div>
  );
}

export default Home;
