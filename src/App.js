import "./App.css";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LogIn from "./components/LogIn";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/checkout" element={<Checkout />}/>
        <Route exact path="/logIn" element={<LogIn/>}/>
      </Routes>
    </Router>
  );
}

export default App;
