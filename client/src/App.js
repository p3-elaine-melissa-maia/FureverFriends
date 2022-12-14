import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Home from "./pages/Home";

import Navbar from "./components/Navbar";

// import NotFound from './pages/NotFound';

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Adopt from "./pages/Adopt";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
import Team from "./pages/Team";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/adopt" element={<Adopt />} />
            <Route path="/profile/:userId" element={<Profile />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;