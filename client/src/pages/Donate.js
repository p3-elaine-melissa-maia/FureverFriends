import React from 'react';
import '../styles/Home.css'
import Card from "../components/CardPayment";
import { Link } from "react-router-dom";


function Donate({ transition }) {
  return (
    <>
      <Nav />
      <Spring
        from={transition.from}
        to={transition.to}
        config={transition.config}
      >
        {(props) => (
          <animated.div style={props}>
           <div style={{marginTop:'100px'}}>
            <div
              className="container mt-5"
              style={{ display: "flex", fontFamily: "Karla sans-serif" }}
            >
              <Container className="text-center" style={{ paddingRight: "30px" }}>
                <img
                  style={{ margin: "0 auto", display: "block", borderRadius: "75px" }}
                  src={logo}
                  alt='EcoLivin Logo'
                  height="150px"
                ></img>
                <p className="py-3">
                  Insert Text Here
                </p>
              </Container>
              <Container style={{ border: "2px solid #703043" }}>
                <Card />
              </Container>
            </div>
          </div>
          </animated.div>)}
      </Spring>
    </>
  );
}

export default Donate;