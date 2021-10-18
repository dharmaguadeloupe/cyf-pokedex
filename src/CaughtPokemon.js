import React, { useState } from "react";

const CaughtPokemon = (props) => {
  let [caught, setCaught] = useState([]);
  const [pokemonNameInput, setPokemonNameInput] = useState("");
  const catchPokemon = () => {
    /* let newPokemon = [
      "Bulbasur",
      "Squirtle",
      "Mewtwo",
      "Eevee",
      "Charizard",
      "Snorlax",
      "Charmander",
    ]; */
    //let randomPokemon = Math.floor(Math.random() * newPokemon.length);
    setCaught(caught.concat(pokemonNameInput));
  };
  const handleInputChange = (event) => {
    setPokemonNameInput(event.target.value);
  };
  return (
    <div>
      <p>
        Caught {caught.length} Pokemon on {props.date}
      </p>
      <input type="text" onChange={handleInputChange} />
      <button onClick={catchPokemon}>Catch a Pokemon</button>
      <ul>
        {caught.map((pokemon, index) => (
          <li key={index}>{pokemon}</li>
        ))}
      </ul>
    </div>
  );
};

export default CaughtPokemon;
