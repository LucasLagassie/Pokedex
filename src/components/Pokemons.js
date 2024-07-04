import React, { useEffect, useState } from "react";
import axios from "axios";
import Details from "./Details";

const Pokemons = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://tyradex.vercel.app/api/v1/pokemon")
      .then((res) => setData(res.data.slice(1)));
  }, []);

  return (
    <div className="pokemons">
      <ul className="radio-container">
        <input type="range" min="1" max="1025" />
      </ul>
      <ul>
        {data.map((pokemon) => (
          <Details key={pokemon.pokedex_id} pokemon={pokemon} />
        ))}
      </ul>
    </div>
  );
};

export default Pokemons;
