// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import Search from "./components/mainpage/MainPage";
import GymDetail from "./components/mainpage/GymDetail.js";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Search />}></Route>
          <Route path="/gym_details/:name" element={<GymDetail />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
