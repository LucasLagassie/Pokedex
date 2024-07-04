import React from "react";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Pokemons from "../components/Pokemons";

const Home = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <Pokemons />
    </div>
  );
};

export default Home;
