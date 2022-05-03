import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./InfoPaises.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeftLong} from '@fortawesome/free-solid-svg-icons'

function Infopais(props) {
  const [Country, setCountry] = useState([]);
  const { id } = useParams();
  // Effects
  useEffect(() => {
    setCountry(props.InfoCountry.filter((value) => value.name.common === id));
  }, [props.InfoCountry, id]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Functions
  function Iterator(param, option, param2) {
    let Info = [];
    Object.keys(param).map((item) =>
      option === 0
        ? Info.push(param[item])
        : Info.push(param[item][`${param2}`])
    );
    return Info.join(", ");
  }
  function CatchBorderNames() {
    if ([{}].hasOwnProperty.call(Country[0], "borders")) {
      let Borders = [];
      Country[0].borders.map((valueBorder) =>
        Borders.push(
          props.InfoCountry.find((value) => value.cca3 === valueBorder).name
            .common
        )
      );
      return (
        <div className="borderCountries">
         <p><strong>Borders Countries:</strong>{" "}</p>
          {Borders.map((value, index) => {
            return <Link to={`/country/`+value} style={props.Mode.general} className="NameBorder" key={index}>{value} </Link>;
          })}
        </div>
      );
    } else {
      return "";
    }
  }

  return (
    <div className="Infopais">
      <Link
        style={props.Mode.general}
        onClick={() => props.FilterByName(["", ""])}
        className="ButtonBack"
        to="/"
      >
        < FontAwesomeIcon  style={{  marginRight: "10px" }} icon={faArrowLeftLong} />
      Back 
      </Link>
      <div className="Atributes" style={{ color: props.Mode.general.color }}>
        <img src={Country.length === 0 ? "" : Country[0].flags.png} alt="" />
        <div className="Information">
          <h1>{Country.length === 0 ? "" : Country[0].name.common}</h1>
          <div className="Informations">
            <div className="InformationsPart">
              <p>
                <strong> Native Name:</strong>{" "}
                {Country.length === 0
                  ? ""
                  : Iterator(Country[0].name.nativeName, 1, "common")}
              </p>
              <p>
                {" "}
                <strong>Population: </strong>
                {Country.length === 0 ? "" : Country[0].population}
              </p>
              <p>
                <strong>Region:</strong>{" "}
                {Country.length === 0 ? "" : Country[0].region}
              </p>
              <p>
                <strong>Sub Region:</strong>{" "}
                {Country.length === 0 ? "" : Country[0].subregion}
              </p>
              <p>
                <strong>Capital: </strong>
                {Country.length === 0 ? "" : Country[0].capital[0]}
              </p>
            </div>
            <div className="InformationsPart">
              <p>
                <strong>Top Level Domain:</strong>{" "}
                {Country.length === 0 ? "" : Country[0].tld}
              </p>
              <p>
                <strong>Currencies: </strong>
                {Country.length === 0
                  ? ""
                  : Iterator(Country[0].currencies, 1, "name")}
              </p>
              <p>
                <strong> Languages: </strong>
                {Country.length === 0 ? "" : Iterator(Country[0].languages, 0, "")}
              </p>
            </div>
          </div>
          {Country.length === 0 ? "" : CatchBorderNames()}
        </div>
      </div>
    </div>
  );
}

export default Infopais;
