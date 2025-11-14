import React from "react";
import Header from "../component/Header.jsx";
import Hero from "./Hero.jsx";
import EsteemedClientele from "./EsteemedClientele.jsx";
import Info from "./Info.jsx"
import Footer from "../component/Footer.jsx";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Info />
      <EsteemedClientele />
      <Footer/>
    </>
  );
};

export default Home;
