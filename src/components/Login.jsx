import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { userLogin } from "../features/login/actionCreators";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, err, token } = useSelector((state) => ({
    loading: state.login.isLoading,
    err: state.login.isError,
    token: state.login.token,
  }));

  console.log("login page data", loading, err, token);
  console.log("rendered");

  const handleSubmit = (e) => {
    e.preventDefault();

    // This is a dummy login
    if (email === "admin@gmail.com") dispatch(userLogin("admin"));
    else dispatch(userLogin("Dummy token"));
  };

  useEffect(() => {
    if (token.length > 0) navigate(-1);
  });

  return loading ? (
    <h1>...Loading</h1>
  ) : err ? (
    <h1>Something went wrong</h1>
  ) : (
    <>
      <h1>Welcome to login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input type="submit" value="Login" />
      </form>
    </>
  );
};
