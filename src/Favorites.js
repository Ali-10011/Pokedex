import React from 'react'
import useFetch from "./useFetch";
import FavItem from './FavItem';


const Favorites = () => {
  
  const { error, isPending, data: pokeData } = useFetch("http://localhost:8000/favorites")
  return (
    <div className="container row">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}

      {pokeData &&
        pokeData.map((pokemon) => {
          return(
          <FavItem props={pokemon} />);
        })}
    </div>
  );
}

export default Favorites
