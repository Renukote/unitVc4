import { useEffect } from "react";
import { useNavigate } from "react-router";

export const PrivateRoute = ({ children, token }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (token.length === 0 || !token) navigate("/login");
  }, []);

  console.log("token in adminRoute", token);
  if (token === "admin") return <>{children}</>;
  else return <h1> You are not allowed to access this page</h1>;
};
