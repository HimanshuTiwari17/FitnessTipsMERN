import React, { useState } from "react";
import "./Home.css";
import NavBar from "./NavBar.jsx";
import ShowTip from "./ShowTip";

const Home = ({ isLoggedIn }) => {
  return (
    <>
      <NavBar isLoggedIn={isLoggedIn} />
      <section className="hero">
        <ShowTip />
      </section>
      ;
    </>
  );
};

export default Home;
