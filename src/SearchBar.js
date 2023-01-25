import { useState } from "react";
import useFetch from "./useFetch";
const SearchBar = () => {
  //SPREAD OPERATOR
  const url = 'https://pokeapi.co/api/v2/pokemon/pikachu';

  const [pokeurl, setPokeurl] = useState(url);
  //const [searchItem, setSearchItem] = useState({error: null, isPending: null, pokeData: null});
  const { error, isPending, data: pokeData } = useFetch(pokeurl)
  //setSearchItem({ error, isPending, data: pokeData })
  
    const handleSubmit = (searchPoke) => {
      //e.preventDefault();
      console.log(searchPoke); //e is event object, which DOM element fires event
      setPokeurl('https://pokeapi.co/api/v2/pokemon/' + searchPoke)
      //const { error, isPending, data: pokeData } = useFetch(pokeurl)
      //setSearchItem({ error, isPending, data: pokeData })
      }
      
    return ( 
        <div className="searchPage">
        <form onSubmit={(e)=>{
          e.preventDefault();
          handleSubmit(e.target.searchbox.value.toString());
        }}>
        <input 
          type="text" id = "searchbox"
          required
            
        />
        <button>Search</button>
      </form>
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {pokeData &&
          <div>{pokeData.name}</div>
        } 
        
      </div>
     );
      }
 
export default SearchBar;