import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

export default () => {
  return useQuery(gql`
    query IsUserLoggedIn {
      _id @client
      email @client
      name @client
      token @client
    }
  `);
};
