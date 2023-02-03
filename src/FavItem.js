import React from 'react'
import { Link } from 'react-router-dom';



const FavItem = ({props}) => {
    console.log(props)
  return (
    <div className="col-md-3 text-center">
      <img src={process.env.REACT_APP_SPRITEURL + props.id + ".png"} />
      <Link to  = {`/favorites/${props.name}`}>
        <h2>{props.name}</h2>
      </Link>
    </div>
  );
}

export default FavItem;
