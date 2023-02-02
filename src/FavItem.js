import React from 'react'
import useFetch from "./useFetch";
import { PokeInfo } from "./PokeInfo";

const FavItem = ({props}) => {
    const { error, isPending, data: pokeData } = useFetch(props.url);
  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {pokeData && (
        <div>
          <PokeInfo pokeinfo={pokeData} />
        </div>
      )}
    </div>
  );
}

export default FavItem
