// import { useEffect, createContext, useState } from "react";

// const AuthContext = createContext();

// // provides application access to Petfinder API
// function petFinderAccess ({ Component, pageProps }) {
//     const [accessToken, setAccessToken] = useState(null);

//     useEffect (() => {
//         const fetchAccessToken = async () => {
//             const res = await fetch("/api/oauth-token");
//             const json = await res.json();
//             setAccessToken(json.access_token);
//         };
//         fetchAccessToken();
//     }, []);

//     return (
//         <AuthContext.Provider>
//             <Component {...pageProps} />
//         </AuthContext.Provider>
//     );
// };

// export default petFinderAccess;

