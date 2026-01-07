import { useContext } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return <div>{isLoggedIn ? <Dashboard /> : <Login />}</div>;
}

export default App;
