import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import images from "./data/images.json";
import Card from "./Card";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [pokedex, setPokedex] = useState(0);

  const getPokemon = async () => {
    const response = await axios.get(
      "https://pokemonrest-api-production.up.railway.app/pokemon/all",
      {
        headers: { Accept: "application/json" },
      }
    );

    let filteredPokemon = response.data.map((pokemon) => {
      let foundImg = images.find((img) => {
        return img.name.name === pokemon.name
      })
      if (foundImg) {
        pokemon.image = foundImg.artwork.image
        return pokemon
      }
    })

    setPokemon(filteredPokemon);
    // console.log(response.data[0].is_legendary);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  // useEffect(() => {
  //   let filteredPokemon = pokemon.map((pokemon) => {
  //     let foundImg = images.find((img) => {
  //       return img.name.name === pokemon.name
  //     })
  //     if (foundImg) {
  //       pokemon.image = foundImg.artwork.image
  //       return pokemon
  //     }
  //   })
  //   console.log(filteredPokemon) 
  //   setPokemon(filteredPokemon)
  //   console.log(pokemon) 
  // }, []);


  if (!pokemon) return <h2> </h2>;


// console.log(images[0].id);

  return (
    <div className="App">
      <h1>Pokemon</h1>
      {/* <div className="container">
        {pokemon.name}
      </div> */}
      {/* <button className="btn" onClick={getPokemon}>New Pokemon</button> */}
      {/* <button className="btn right" onClick={() => setPokedex(pokedex + 1)}>Next Pokemon</button>
      {pokemon.length > 0 && (
        <Card
        name={pokemon[pokedex].name}
        pokedexNumber={pokemon[pokedex].pokedexNumber}
        habitat={pokemon[pokedex].habitat}
        evolves_from={pokemon[pokedex].evolves_from}
        // is_legendary={pokemon[pokedex].is_legendary}
        // is_mythical={pokemon[pokedex].is_mythical}
          
        />
      )} */}
      <div className="main">
      <div className="holder">
          {pokemon.map((poke) => (
            
          <div className="card">
              <h2>{poke.name}</h2>
              <img src={poke.image} alt="pokemon" />
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

export default App;
