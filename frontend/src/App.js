




import "./App.css";
// importing components from react-router-dom package
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
  
// import Home component
import Home from "./Home";
import Com from "./com";
import TestGrid from "./grid";
import Login from "./login";
  
function App() {
  return (
    <>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Routes>
 
          <Route path="/" element={<Home/>} />
          <Route path="/Com" element={<Com/>} />
          <Route path="/grid" element={<TestGrid/>} />
          <Route path="/login" element={<Login/>} />

            

        </Routes>
      </Router>
    </>
  );
}
  
export default App;