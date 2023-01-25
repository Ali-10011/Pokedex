import useFetch from "./useFetch";
import PokeList from "./PokeList";
import { useState } from "react";

//Pass Parameter into Home Page, store current url somewhere and pass next url into this
const Home = () => {
  var url = 'https://pokeapi.co/api/v2/pokemon/';
  const [pokeurl, setPokeurl] = useState(url);
  const { error, isPending, data: pokeData } = useFetch(pokeurl)
  
  return (
    <div>
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {pokeData &&
        <div>
          <PokeList pokelist={pokeData.results} /> </div>
      }  
    </div>
    
       <button disabled={!pokeData?.previous} onClick={() => { setPokeurl(pokeData.previous)
         }}> Back</button>
      <button disabled={!pokeData?.next} onClick={() => {
        setPokeurl(pokeData.next)
      }}> Next</button>

    </div>
  );
}


export default Home;