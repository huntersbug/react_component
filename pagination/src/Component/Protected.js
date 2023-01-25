import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Protected = ({ children }) => {
  const navigate = useNavigate();
  const auth = useSelector((store) => store.Authreducer.isAuth);
  React.useEffect(() => {
    if (!auth) {
      navigate("/login");
      return;
    }
  }, [auth]);

  return children;
};

export default Protected;
