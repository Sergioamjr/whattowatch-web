import React, { useEffect } from "react";
import useQueryUser from "hooks/useQueryUser";
import { withRouter, RouteComponentProps } from "react-router-dom";

const Authentication: React.FC<RouteComponentProps> = ({
  children,
  history,
}: RouteComponentProps) => {
  const { token } = useQueryUser();
  useEffect(() => {
    if (!token) {
      history.push("/login");
    }
  }, [token]);

  return <>{children}</>;
};

export default withRouter(Authentication);
