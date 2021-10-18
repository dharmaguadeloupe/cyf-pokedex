import React from "react";

const BestPokemon = (props) => {
  return (
    <div>
      <p>My favourite Pokemon is Pikachu</p>
        <ul>
          {props.abilities.map((ability) => (
          <li>{ability}</li>))}
      </ul>
    </div>
    );
  };

export default BestPokemon;