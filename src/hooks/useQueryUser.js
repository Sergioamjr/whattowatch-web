import { useQuery } from "@apollo/react-hooks";
import { GET_LOCAL_USER } from "../fragments";

export default () => {
  const { data, ...props } = useQuery(GET_LOCAL_USER);

  return {
    ...props,
    ...data,
  };
};
