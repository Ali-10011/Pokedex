import { PokeItem } from "./PokeItem";

//Link to wraps around an html element and allows us to be required to that route it refers to, and yes to pass router parameters
const PokeList = ({ pokelist }) => {
    return (
        <div className="container row">
            {
                pokelist.map((pokemon) => {
                    var URL = pokemon.url;
                    let result = URL.replace('https://pokeapi.co/api/v2/pokemon/', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/');
                    let imgurl = result.substr(0, result.length - 1);
                    imgurl = imgurl + '.png';
                    result = URL.replace(
                      "https://pokeapi.co/api/v2/pokemon/",
                      ""
                    );
                    let pokeID = result.substr(0, result.length - 1);
                    let id = parseInt(pokeID);

                    fetch("http://localhost:8000/favorites/" + id).then(
                      (response) => {
                        console.log(response.status);
                        if (response.status == 200) {
                          
                             return (
                               <PokeItem
                                 imgurl={imgurl}
                                 pokemon={pokemon}
                                 IsFav={"true"}
                                 id = {pokeID}
                               />
                             );
                        
                        } else if (response.status == 404) {
                             return (
                               <PokeItem
                                 imgurl={imgurl}
                                 pokemon={pokemon}
                                 IsFav={"false"}
                                 id={pokeID}
                               />
                             );
                         
                        }
                      }
                    );
                   
                }
                )
            }
        </div>
    );
}

export default PokeList;