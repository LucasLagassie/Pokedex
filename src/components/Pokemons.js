import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import Fuse from "fuse.js";

const Pokemons = () => {
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(36);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    axios
      .get("https://tyradex.vercel.app/api/v1/pokemon")
      .then((res) => setData(res.data.slice(1)));
  }, []);

  const fuse = new Fuse(data, {
    keys: ["name.fr"],
    includeScore: true,
  });

  const exactMatch = data.find(
    (pokemon) => pokemon.name.fr.toLowerCase() === searchValue.toLowerCase()
  );

  let filteredData;
  if (exactMatch) {
    filteredData = [exactMatch];
  } else {
    filteredData =
      searchValue.length >= 2
        ? fuse.search(searchValue).map((result) => result.item)
        : data;
  }

  return (
    <div className="pokemons">
      <div className="radio-container">
        <div className="rangeContainer">
          <input
            type="range"
            min="1"
            max="1025"
            defaultValue={rangeValue}
            onChange={(e) => setRangeValue(e.target.value)}
          />
          <span>{rangeValue} pokémons affichés</span>
        </div>
        <div className="searchContainer">
          <input
            type="text"
            placeholder="Rechercher par nom de Pokémon"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
        </div>
      </div>
      <ul>
        {filteredData.slice(0, rangeValue).map((pokemon) => (
          <Card key={pokemon.pokedex_id} pokemon={pokemon} />
        ))}
      </ul>
    </div>
  );
};

export default Pokemons;
