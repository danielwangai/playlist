import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import {ApolloProvider } from "react-apollo";

import Booklist from "./components/Booklist";

const client = new ApolloClient({
  uri: process.env.APOLLO_CLIENT_URI
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="main">
          <h1>Readers list</h1>
          <Booklist />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
