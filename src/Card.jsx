import "./card.css";
import { useEffect, useState } from "react";
import images from "./data/images.json"

function Card({pokemon}) {
//  console.log(pokemon)

  return (
    <div className="card">
      <h1>Pokemon</h1>
      <div className="main">
      <div className="holder">
          {pokemon.map((poke) => (
            
          <div className="card">
            <h2>{poke.name}</h2>
            <ul>
            <li>{poke.pokedexNumber}</li>
            <li>{poke.habitat}</li>
            <li>{poke.evolves_from}</li>
            <li>Legendary? {poke.is_legendary ? "Yes" : "No"}</li>
            <li>Mythical? {poke.is_mythical ? "Yes" : "No"}</li>
            </ul>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
