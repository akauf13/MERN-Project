import { useEffect, useState } from "react";
// import "./App.css";
import axios from "axios";
import images from "./data/images.json";
import Card from "./Card";
import Modal from "./Modal";

function Pokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [pokedex, setPokedex] = useState(0);
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState();

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
  };

  useEffect(() => {
    getPokemon();
  }, []);

  if (!pokemon) return <h2> </h2>;

  return (
    <div className="App">
      <h1>Pokemon</h1>
     
      <div className="main">
      <div className="holder">
          {pokemon.map((poke) => (
            
          <div className="card" onClick={() => setShow(true)} key={poke.id}>
              <h2>{poke.name}</h2>
              <img src={poke.image} alt="pokemon" onClick={() => {setModalData(poke)}} />
            {/* <ul>
            <li>{poke.pokedexNumber}</li>
            <li>{poke.habitat}</li>
            <li>{poke.evolves_from}</li>
            <li>Legendary? {poke.is_legendary ? "Yes" : "No"}</li>
            <li>Mythical? {poke.is_mythical ? "Yes" : "No"}</li>
            </ul> */}
          </div>
        ))}
        </div>

        <Modal
          setShow={setShow}
          show={show}
          onClose={() => setShow(false)}
          modalData={modalData}
        />

      </div>

    </div>
  );
}

export default Pokemon;
