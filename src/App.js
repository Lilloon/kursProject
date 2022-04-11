import "./App.css";
import Header from "./components/Header/Header";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import MyRoutes from "./components/Header/Routes/Routes";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/kursProject/" || location.pathname === "/") {
      navigate("kursProject/aboutMe");
    }
  }, []);
  console.log(location);

  return (
    <div className="App">
      <Header />
      <div className="content">
        <MyRoutes />
      </div>
    </div>
  );
}

export default App;
