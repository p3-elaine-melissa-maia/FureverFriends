// import { useEffect, useState, useContext } from "react";
// import { AuthContext } from "./petFinder";

// export default () => {
//   // tracks result of search
//   const [results, setResults] = useState(null);

//   // fetches list of pets from Petfinder API
//   useEffect(() => {
//     if (accessToken === null) return;
//     const fetchPets = async () => {
//       const petResults = await fetch("https://api.petfinder.com/v2/animals", {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       });

//       const json = await petResults.json();
//       setResults(json.animals);
//     };

//     fetchPets();
//   }, [accessToken]);

//   // displays results
//   if (results === null) return null;
// };
