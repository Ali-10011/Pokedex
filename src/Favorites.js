import React from 'react'
import useFetch from "./useFetch";
import FavItem from './FavItem';
import { useNavigate } from 'react-router-dom';


const Favorites = () => {
  
 const {
   error,
   isPending,
   data: pokeData,
 } = useFetch(process.env.REACT_APP_FAVORITESURL);
 const navigate = useNavigate();

 const handleClick = (pokemon) => {
   fetch(process.env.REACT_APP_FAVORITESURL + "/" + pokemon.id, {
     method: "DELETE",
   }).then(() => {
     navigate("/");
   });
 };

  return (
    <div className="container row">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}

      {pokeData &&
        pokeData.map((pokemon) => {
          return (
            <div className="col-md-3 text-center" >
              <FavItem props={pokemon} />
              <button className = "btn btn-danger btn-outline-light" btn-danger btn-outline-light onClick={() => handleClick(pokemon)}>Remove</button>
            </div>
          );
        })}
    </div>
  );
}

export default Favorites
