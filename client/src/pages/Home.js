import React from "react";
// import { Link } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
import "../styles/Home.css";
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
          <h2>
            {" "}
            Find Your <br />{" "}
            <span>
              Furever Friend <i className="fa-solid fa-heart"></i>
            </span>
          </h2>
          <p>
            This application is an accessible pet social media app where users
            can search for adoptable pets, friend
            other pet owners, and comment and like photos.
          </p>
          <Link to="/signup" href="./signup" className="signup-btn">
            sign up now!
          </Link>
          <Link to="/login" href="./login" className="login-btn">
            log in
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
