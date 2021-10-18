import React, { useState } from "react";
import PokemonMoves from "./PokemonMoves";

const PokemonMovesSelector = () => {
  const [id, setId] = useState(null);
  const handleBulbasaurClick = () => {
    setId(1);
  };
  const handleCharmanderClick = () => {
    setId(4);
  };
  return (
    <div>
      <button onClick={handleBulbasaurClick}>Fetch Bulbasaur</button>
      <button onClick={handleCharmanderClick}>Fetch Charmander</button>
      {id ? <PokemonMoves pokemonId={id} /> : null}
    </div>
  );
};
export default PokemonMovesSelector;
