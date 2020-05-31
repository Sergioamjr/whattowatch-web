import { useQuery } from "@apollo/react-hooks";
import { GET_LOCAL_USER } from "../fragments";
import { FixMeLater } from "./../types/common";

export default (): FixMeLater => {
  const { data, ...props } = useQuery(GET_LOCAL_USER);

  return {
    ...props,
    ...data,
  };
};
