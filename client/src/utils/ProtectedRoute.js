import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ Component, redirectTo, ...props }) => {
  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])

  const navigate = useNavigate();
  return (
    <Route
      {...props}
      render={(props) => {
        if (auth.isLoggedIn) {
          return <Component />;
        } else {
          // '/app/report', { state: rowData }
          return navigate("/shipping");
        }
      }}
    />
  );
};

export default ProtectedRoute;
