import { useState } from "react";
import useFetch from "./useFetch";
const SearchBar = () => {
  
  var url = 'https://pokeapi.co/api/v2/pokemon/1';
  const [pokeurl, setPokeurl] = useState(url);
  const [data, setData] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();    
        fetch(pokeurl) //if an unmounted dom object is called 
      .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error('could not fetch the data from server');
        }
        
        return res.json();
      })
      .then(res =>
        {
            setData(res);
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
            onChange={(e) => setPokeurl('https://pokeapi.co/api/v2/pokemon/' + e.target.value.toString()) }
        />
        <button>Search</button>
      </form>
        {data && <div> {data.name} </div>}
        
      </div>
     );
      }
 
export default SearchBar;