import React from 'react'
export const PokeItem = (props) => {
    
    const handleSubmit = () => {
      //e.preventDefault();
      const name = props.pokemon.name
      const url = props.pokemon.url
        var URL = url;
        let result = URL.replace("https://pokeapi.co/api/v2/pokemon/", "");
       let pokeID = result.substr(0, result.length - 1);
       let id = parseInt(pokeID)
      const favPoke = {id, name, url};
      
        console.log(favPoke)
      fetch("http://localhost:8000/favorites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(favPoke),
      }).then((value) => {
        console.log(value);
      });
    };

    return (
      <div className="col-md-3 text-center">
        <img src={props.imgurl} />
        
          <h2>{props.pokemon.name}</h2>
   
        <button
          onClick={() => {
            handleSubmit();
          }}
        >
          Add to Favorites
        </button>
      </div>
    );
}
