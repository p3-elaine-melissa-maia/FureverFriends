

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Home from './pages/Home';



import Navbar from "./components/Navbar";

// import NotFound from './pages/NotFound';


import Login from './pages/Login';
import Signup from './pages/Signup';
import Adopt from './pages/Adopt';
import Feed from './pages/Feed';
import Profile from './pages/Profile';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});



function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Navbar />
          <Routes>

            
            <Route 
            path="/" 
            element={<Home/>}
            />
            <Route 
              path="/login" 
              element={<Login />}
            />
            <Route 
              path="/signup" 
              element={<Signup />}
            />
            <Route
              path="/feed"
              element={<Feed/>}
            />
            <Route
              path="/adopt"
              element={<Adopt/>}
            />
            <Route 
                path="/me" 
                element={<Profile />} 
              />
            <Route
              path="/users/:userId"
              element={<Profile/>}
            />


            <Route path="/team" element={<Team />} />

          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
