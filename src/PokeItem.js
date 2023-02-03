import React from 'react'
import { useState } from "react";

export const PokeItem = (props) => {
 console.log(props)
  //const btnColor = props.IsFav == "true" ? "btn btn-light" : "btn btn-danger";
 // const [colorState, setColor] = useState();
    const handleSubmit = () => {
      const name = props.pokemon.name
      const id = props.id
      const url = props.pokemon.url
      const favPoke = {id, name, url};
      
        console.log(favPoke)
      fetch("http://localhost:8000/favorites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(favPoke),
      });
    };

    return (
      <div className="col-md-3 text-center">
        <img src={props.imgurl} />

        <h2>{props.pokemon.name}</h2>

        <button
          type="button"
          class="btn btn-light"
          onClick={() => {
            //handleSubmit();
          }}
        >
          Add to Favorites
        </button>
      </div>
    );
}
