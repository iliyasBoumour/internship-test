import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const { token } = useSelector((state) => state.user);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!token) {
      return navigate("/login", { state: { redirect: "/shipping" } });
    }
  }, [token]);

  return <div>shipping page</div>;
};

export default Index;
