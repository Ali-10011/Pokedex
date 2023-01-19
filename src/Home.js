import useFetch from "./useFetch";
import PokeList from "./PokeList";
import { useState } from "react";

//Pass Parameter into Home Page, store current url somewhere and pass next url into this
const Home = () => {
    const { error, isPending, data: pokeData } = useFetch('https://pokeapi.co/api/v2/pokemon/')
    return ( 
        <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { pokeData && 
      <div><PokeList pokelist = {pokeData.results}/> </div>  
       }
    </div>
     );
}

 
export default Home;