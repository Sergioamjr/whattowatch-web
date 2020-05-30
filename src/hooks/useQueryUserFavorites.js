import { useQuery } from "react-apollo";
import useQueryUser from "./useQueryUser";
import { QUERY_USER_FAVORITES } from "../fragments";

export default () => {
  const { _id: userID } = useQueryUser();
  const { data, ...props } = useQuery(QUERY_USER_FAVORITES, {
    variables: { userID },
  });
  return {
    ...props,
    ...data,
  };
};
