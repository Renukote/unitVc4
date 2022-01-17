// import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import { Login } from "./components/Login";
import { PrivateRoute } from "./PrivateRoutes/adminRoute.jsx";
import { Admin } from "./components/Admin";
import { useSelector } from "react-redux";
import { Dashboard } from "./components/Dashboard";

function App() {
  const { token } = useSelector((state) => ({ token: state.login.token }));
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/admin"
          element={
            <PrivateRoute token={token}>
              {" "}
              <Admin />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
