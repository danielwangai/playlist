import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import {ApolloProvider } from "react-apollo";

import Booklist from "./components/Booklist";
import AddBook from "./components/AddBook"

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="main">
          <h1>Readers list</h1>
          <Booklist />
          <AddBook />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
