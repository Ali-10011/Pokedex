import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const PokeItem = (props) => {
  const name = props.pokemon.name;
  const url = props.pokemon.url;
  var URL = url;
  let result = URL.replace("https://pokeapi.co/api/v2/pokemon/", "");
  let pokeID = result.substr(0, result.length - 1);
  let id = parseInt(pokeID);
  const [btnState, setBtn] = useState("btn btn-primary");
  const [btnText, setText] = useState("Loading...");
  const [btnStatus, setBtnStatus] = useState(true);

  fetch(process.env.REACT_APP_FAVORITESURL + "/" + pokeID).then((response) => {
    console.log(response.status);
    if (response.status == 200) {
      setBtn("btn btn-danger");
      setText("Favorite");
      setBtnStatus(true);
    } else if (response.status == 404) {
      setBtn("btn btn-light");
      setText("Add to Favorites");
      setBtnStatus(false);
    }
  });

  const handleSubmit = () => {
    //e.preventDefault();

    const favPoke = { id, name, url };
    if(btnText == "Add to Favorites"){
    fetch("http://localhost:8000/favorites", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(favPoke),
    }).then((value) => {
     
        setBtn("btn btn-danger");
        setText("Add to Favorites");
      
    });
  }
  };

  return (
    <div className="col-md-3 text-center">
      <img src={props.imgurl} />

      <Link to ={`/pokemon/${props.pokemon.name}`}>
        <h2>{props.pokemon.name}</h2>
      </Link>

      <button
        disabled={btnStatus}
        type="button"
        class={btnState}
        onClick={() => {
          handleSubmit();
        }}
      >
        {btnText}
      </button>
    </div>
  );
};
