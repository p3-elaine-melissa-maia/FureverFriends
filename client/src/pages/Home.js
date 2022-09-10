import React from 'react';
// import { Link } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
import '../styles/Home.css'
import { Link } from "react-router-dom";


const Home = () => {
  // const { loading, data } = useQuery(QUERY_MATCHUPS, {
  //   fetchPolicy: "no-cache"
  // });

  // const matchupList = data?.matchups || [];

  return (
    <section>
      {/* <Navbar></Navbar> */}
      <div className="content">
        <div className="info">
            <h2> Find Your <br/> <span>Furever Friend <i className="fa-solid fa-heart"></i></span></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum laboriosam illum ratione quas iste inventore provident laborum, voluptate, reiciendis voluptas officiis distinctio doloribus magni, reprehenderit tempora. Id, molestiae. Ipsam, consequatur.</p>
            <Link to="/signup"><a href="./signup" className="signup-btn">sign up now!</a></Link>
            <Link to="/login"> <a href="./login" className="login-btn">log in</a></Link>
        </div>
    </div>
  </section>
  );
};

export default Home;
