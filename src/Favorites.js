import React from 'react'
import useFetch from "./useFetch";
import PokeList from "./PokeList";
import { useState } from "react";

const Favorites = () => {
  
  const { error, isPending, data: pokeData } = useFetch("http://localhost:8000/favorites");
  {
    console.log(pokeData);
  }
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {pokeData && (
        <div>
          <PokeList pokelist={pokeData} />{" "}
        </div>
      )}
    </div>
  );
}

export default Favorites
