import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Filter from "../filters/filters";
import Infopais from "../InfoPaises/InfoPaises";
import ListaDePaises from "../ListadePaises/ListaDePaises";
import "./Conteudo.css";

function Conteudo(props) {
  const [listaDePaises, SetlistaDePaises] = useState([]);
  const requestReceived = listaDePaises.length > 1 ? listaDePaises : [];
  const [CountryFiltered, setCountryFiltered] = useState([]);
  const [campoDePesquisa, setCampoDePesquisa] = useState("");



  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((resp) => resp.json())
      .then((paises) => {
        SetlistaDePaises(paises);
        
      });
  }, []);


  function FiltroName(inputValue) {
    setCampoDePesquisa(inputValue.length);

    setCountryFiltered(
      requestReceived.filter(
        (value) =>
          value.name.common
            .toString()
            .toLowerCase()
            .includes(inputValue[1].toLowerCase()) &&
          value.region
            .toString()
            .toLowerCase()
            .includes(inputValue[0].toLowerCase())
      )
    );
  }
 
  return (
    <div className="Conteudo">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Filter  Mode={props.Mode}  FilterByName={FiltroName} />
              <ListaDePaises Mode={props.Mode} 
                ArrayList={
                  campoDePesquisa > 0 ? CountryFiltered: requestReceived
                }
    
              />
            </div>
          }
        />
        <Route
          path="/country/:id"
          element={<Infopais FilterByName={FiltroName}  Mode={props.Mode} InfoCountry={requestReceived} />}
        />
      </Routes>
    </div>
  );
}

export default Conteudo;
