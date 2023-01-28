import { useState } from "react";
import useFetch from "./useFetch";
import { PokeInfo } from "./PokeInfo";
const SearchBar = () => {
  //SPREAD OPERATOR

  const [pokeurl, setPokeurl] = useState(process.env.REACT_APP_POKEURL + 'pikachu');
  //const [searchItem, setSearchItem] = useState({error: null, isPending: null, pokeData: null});
  const { error, isPending, data: pokeData } = useFetch(pokeurl)
  //setSearchItem({ error, isPending, data: pokeData })
  
    const handleSubmit = (searchPoke) => {
      //e.preventDefault();
      //console.log(searchPoke); //e is event object, which DOM element fires event
      
      setPokeurl(process.env.REACT_APP_POKEURL + searchPoke)
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
          <div><PokeInfo  pokeinfo = {pokeData} /></div>
        } 
        
      </div>
     );
      }
 
export default SearchBar;