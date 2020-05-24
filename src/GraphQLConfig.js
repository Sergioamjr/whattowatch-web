import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
});

const GraphQLConnect = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default GraphQLConnect;
