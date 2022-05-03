import React, { useState } from "react";
import "../filters/filter.css";


function Filter(props) {
  const [inputValue, setInputValue] = useState("");
  const [Region, setRegion] = useState("");

  
  return (
    <div className="Filter">
    
  
      <input

      
        className="SearchBar"
        placeholder="Search for a country..."
        style={props.Mode.general}
        type="text"
        value={inputValue}
      
        onChange={(e) => {
          let arr = [Region, e.target.value];
          setInputValue(e.target.value);
          props.FilterByName(arr);
        }}
      />

      <select
        style={props.Mode.general}
        className="Selection"
        name=""
        onChange={(e) => {
          setRegion(e.target.value);
          let arr = [e.target.value, inputValue];
          props.FilterByName(arr);
        }}
        id=""
      >
        <option style={props.Mode.general} value="">
          Filter by region
        </option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
      </select>
    </div>
  );
}

export default Filter;
