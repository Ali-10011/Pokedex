import { useState } from "react";
import useFetch from "./useFetch";
const SearchBar = () => {
   
    const [pokemon, setpokemon] = useState();


    const handleSubmit = (e) => {
        e.preventDefault();    
        fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon) //if an unmounted dom object is called 
      .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error('could not fetch the data from server');
        } 
        return res.json();
      })
      .then(res =>
        {
            console.log(res);
        }
      )
      }
    return ( 
        <div className="searchPage">
        <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          required
          value = {pokemon}
          onChange = {(e) =>  setpokemon(e.target.value) }
        />
        <button>Search</button>
      </form>
     
      </div>
     );
      }
 
export default SearchBar;