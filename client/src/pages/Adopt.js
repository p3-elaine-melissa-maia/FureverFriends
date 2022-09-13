// import { useEffect, useState } from "react";
// import React from 'react';
// import axios from "axios";
// import '../styles/Home.css'

// function petFinderForm() {
//   const [values, setValues] = useState ({
//     species: "",
//     zip: "",

//   });

//   const handleSpeciesInput = (event) => {
//     setValues({...values, species: event.target.value})
//   };

//   const handleZipInput = (event) => {
//     setValues({...values, zip: event.target.value})
//   };

//   return (
//     <div class="form-container">
//       <form class="pet-finder-form">
//       <label>
//           Pick your species:
//           <select onChange={handleSpeciesInput}>
//             <option value="Cat">Cat</option>
//             <option value="Dog">Dog</option>
//           </select>
//         </label>
//         <label 
//         type="string"
//         onChange={handleZipInput}
//         value={values.zip}
//         class="form-field"
//         name="zip">
//         </label>
        
//       </form>
//     </div>
//   )
// };


// function Adopt() {
//   const url = "https://api.petfinder.com/v2/animals"
//   const [pets, setPets] = useState(null)

//   useEffect(() => {
//     axios.get(url)
//       .then(response => {
//         setPets(response.data)

//       })
//   }, [url]);

//   if (pets) {
//     return (
//      <div></div>
//     )
//   };

//   return (
//     <div>

//     </div>
//   )
// };

// export default Adopt;