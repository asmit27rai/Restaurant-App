import "./App.css";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Order from "./pages/Order";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isHome, setIsHome] = useState(true);

  const togglePage = () => {
    setIsHome(prevIsHome => !prevIsHome);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/order/:id" component={Order} />
      </Routes>

      <div className="d-grid gap-2">
        <button
          className="btn btn-primary"
          type="button"
          onClick={togglePage}
        >
          {isHome ? (
            <Link to="/signup" style={{ textDecoration: 'none', color: 'white' }}>
              Book A Table At Resto
            </Link>
          ) : (
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              Back To Home
            </Link>
          )}
        </button>
      </div>
    </Router>
  );
}

export default App;
