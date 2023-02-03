import React from "react";


export const PokeInfo = (props) => {
  return (
    <div className="text-center">
      {console.log(props.pokeinfo)}
      <img
        src={props.pokeinfo.sprites.other["official-artwork"].front_default}
        alt={props.pokeinfo.name}
      />
      <div class="container">
        <div class="row border">
          <div class="col">ID</div>
          <div class="col">{props.pokeinfo.id}</div>
          <div class="col">Weight</div>
          <div class="col">{props.pokeinfo.weight + " lbs"}</div>
        </div>
        <div class="row border">
          <div class="col">Name</div>
          <div class="col">{props.pokeinfo.name}</div>
          <div class="col">Abilities</div>
          <div class="col">
            {props.pokeinfo.abilities.map((pokemon) => {
              return <h6>{pokemon.ability.name}</h6>;
            })}
          </div>
        </div>
        <div class="row border">
          <div class="col">Types</div>
          <div class="col">
            {props.pokeinfo.types.map((pokemon) => {
              return <h6>{pokemon.type.name}</h6>;
            })}
          </div>
          <div class="col">Moves Count</div>
          <div class="col">{props.pokeinfo.moves.length + " moves"}</div>
        </div>
        
      </div>
    </div>
  );
};

export default PokeInfo;