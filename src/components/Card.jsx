import React from "react";
import { Link } from "react-router-dom";
const Card = (props) => {
  const { id, title, img, price,getId } = props;
  function handleClick(){
    getId(id);
  }
  return <>
    <article className="card">
        <img className="card-img" src={img} alt={title} />
        <h3 className="card-title">{title}</h3>
        <div className="detail">
            <h4 className="card-price">{price}</h4>
            <Link to={id.toString()} className="btn">Details</Link>
        </div>
        <button onClick={handleClick}>delete</button>
    </article>
  </>;
};

export default Card;
