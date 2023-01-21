import React from 'react'
export const PokeItem = (props) => {
    return (
        (<div className='col-md-3 text-center border'>
            <img src={props.imgurl} />

            <h2>{props.pokemon.name}</h2>
        </div>)
    )
}
