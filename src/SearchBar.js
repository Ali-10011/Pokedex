import { useState } from "react";
import useFetch from "./useFetch";
import { PokeInfo } from "./PokeInfo";
const SearchBar = () => {
  //SPREAD OPERATOR

  const [pokeurl, setPokeurl] = useState(process.env.REACT_APP_POKEURL + 'pikachu');
 
  const { error, isPending, data: pokeData } = useFetch(pokeurl)
 
    const handleSubmit = (searchPoke) => {
     
      setPokeurl(process.env.REACT_APP_POKEURL + searchPoke)
      
      }
      
    return (
      <div className="searchPage">
        <form
          className="text-center"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e.target.searchbox.value.toString());
          }}
        >
          <input type="text" id="searchbox" class="form-control-md"  required />
          <span></span>
          <button className="btn btn-danger btn-outline-light mx-3">
            Search
          </button>
        </form>
        {error && <div className="text-danger">{error}</div>}
        {isPending && <div>Loading...</div>}
        {pokeData && (
          <div>
            <PokeInfo pokeinfo={pokeData} />
          </div>
        )}
      </div>
    );
      }
 
export default SearchBar;