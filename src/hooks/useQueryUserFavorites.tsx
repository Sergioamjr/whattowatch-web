import { useQuery } from "react-apollo";
import useQueryUser from "./useQueryUser";
import { QUERY_USER_FAVORITES, QUERY_USER_FAVORITES_TYPES } from "fragments";
import { FixMeLater } from "types/common";

export default (): FixMeLater => {
  const { _id: userID } = useQueryUser();
  const { data, ...props } = useQuery<QUERY_USER_FAVORITES_TYPES>(
    QUERY_USER_FAVORITES,
    {
      variables: { userID },
    }
  );
  return {
    ...props,
    ...data,
  };
};
