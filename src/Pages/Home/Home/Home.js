import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Services from "../Services/Services";
import Teams from "../Teams/Teams";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Products />
      <Teams />
    </div>
  );
};

export default Home;
