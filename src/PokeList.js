import { Link } from 'react-router-dom';
//Link to wraps around an html element and allows us to be required to that route it refers to, and yes to pass router parameters
const PokeList = ({pokelist}) => {
    return (  
        <div className="poke-List">
            {
                pokelist.map((pokemon)=>(
                    <h2>{pokemon.name}</h2>
                ))
            }
        </div>
    );
}
 
export default PokeList;