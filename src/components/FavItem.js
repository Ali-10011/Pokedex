import React from 'react'
import { Link } from 'react-router-dom';



const FavItem = ({props}) => {
    console.log(props)
  return (
    <div>
      <img src={process.env.REACT_APP_SPRITEURL + props.id + ".png"} />
      <Link style={{ textDecoration: "none" }} to={`/favorites/${props.name}`}>
        <h2>{props.name}</h2>
      </Link>
    </div>
  );
}

export default FavItem;
