import { useParams } from "react-router";
import useFetch from "./useFetch";
import { PokeInfo } from "./PokeInfo";

const FavInfo = () => {

  const {name} = useParams()
  const { error, isPending, data: pokeData } = useFetch(process.env.REACT_APP_POKEURL + name);
  
 return (
   <div>
     {error && <div>{error}</div>}
     {isPending && <div>Loading...</div>}
     {pokeData && (
       <div>
         <PokeInfo pokeinfo={pokeData} />
       </div>
     )}{" "}
   </div>
 );
}


export default FavInfo;
