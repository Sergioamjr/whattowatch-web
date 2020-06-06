import React, { useEffect } from "react";
import useQueryUser from "hooks/useQueryUser";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { ReactChildren } from "types/common";

interface Props extends ReactChildren {
  history: RouteComponentProps;
}

const Authentication = ({ children, history }: Props) => {
  const { token } = useQueryUser();
  useEffect(() => {
    if (!token) {
      history.push("/login");
    }
  }, [token, history]);

  return <>{children}</>;
};

export default withRouter(Authentication);
