import { useState } from "react";
import React from 'react';
// import { Link } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
import '../styles/Home.css'

function Adopt() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Select a species.</label>
      <select
        id="species"
        value={inputs.species}
        onChange={handleChange}
        name="species"
        >

        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        </select>

      <label>Enter ZIP Code:
        <input 
          type="number" 
          name="zip" 
          value={inputs.zip || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
  )
}


export default Adopt;