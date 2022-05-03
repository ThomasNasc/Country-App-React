import React from "react";
import { Link } from "react-router-dom";
import "./Card.css"

function Card(props) {
 
  return (
    <Link className="Link" to={`/country/`+props.infoPais.name.common}>
    <div   style={props.Mode.general} className="Card" >
      <img src={props.infoPais.flags.png} alt="" />
      <div className="InfoCountrys">
      <h3>{props.infoPais.name.common}</h3>
      <p><strong> Population:</strong> {props.infoPais.population}</p>
      <p><strong> Region:</strong> {props.infoPais.region}</p>
      <p><strong>Capital:</strong> {props.infoPais.capital}</p>
      </div>
    </div>
     </Link>
  );
}

export default Card;
