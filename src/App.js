import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import components
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Submit from "./pages/Submit/Submit";

const App = () => {
  // const [login, setLogin] = useState("login");

  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/sign-in"}>
              Document Handler
            </Link>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/submit" element={<Submit />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
