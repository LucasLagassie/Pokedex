import React from "react";

const Details = ({ pokemon }) => {
  return (
    <li className="details">
      <img src={pokemon.sprites.regular} alt={"pokemon " + pokemon.name.fr} />
      <div className="infos">
        <h2>{pokemon.name.fr}</h2>
      </div>
    </li>
  );
};

export default Details;
