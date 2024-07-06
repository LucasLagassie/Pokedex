import React from "react";

const Card = ({ pokemon }) => {
  return (
    <li className="card">
      <img src={pokemon.sprites.regular} alt={"pokemon " + pokemon.name.fr} />
      <div className="infos">
        <h2>N° {pokemon.pokedex_id}</h2>
        <h4>{pokemon.name.fr}</h4>
        <p>
          Types :{" "}
          {pokemon.types.map((type, index) => (
            <span key={index}>{type.name} </span>
          ))}
        </p>
      </div>
    </li>
  );
};

export default Card;
