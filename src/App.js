import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

import Search from "./mainpage/Search";
import GymDetail from "./mainpage/GymDetail.js";
import Footer from "./mainpage/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Search />}></Route>
          <Route path="/gym/:id" element={<GymDetail />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
