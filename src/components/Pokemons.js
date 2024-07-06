import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Pokemons = () => {
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(36);

  useEffect(() => {
    axios
      .get("https://tyradex.vercel.app/api/v1/pokemon")
      .then((res) => setData(res.data.slice(1)));
  }, []);

  return (
    <div className="pokemons">
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max="1025"
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
      </ul>
      <ul>
        {data.slice(0, rangeValue).map((pokemon) => (
          <Card key={pokemon.pokedex_id} pokemon={pokemon} />
        ))}
      </ul>
    </div>
  );
};

export default Pokemons;
