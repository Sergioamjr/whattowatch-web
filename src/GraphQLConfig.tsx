import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ReactChildren } from "types/common";

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  uri: "http://localhost:4000/",
});

cache.writeData({
  data: {
    token: localStorage.getItem("token"),
    _id: localStorage.getItem("_id"),
    email: localStorage.getItem("email"),
    name: localStorage.getItem("name"),
  },
});

const GraphQLConnect = ({ children }: ReactChildren): JSX.Element => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default GraphQLConnect;
