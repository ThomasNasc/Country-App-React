import React from "react";
import "./ListaDePaises.css";
import Card from "../Card/Card";

function ListaDePaises(props) {
  const countryList = props.ArrayList;
  const justify = countryList.length < 4?{justifyContent: "flex-start"}: {justifyContent: "space-between"}
  return (
    <div className="ListaDePaises" style={justify}>
      {countryList.map((pais, index)=> {
        return (
          <Card  Mode={props.Mode}  infoPais={pais} key={index} index={index} />
        );
      })}
    </div>
  );
}

export default ListaDePaises;
