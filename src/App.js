import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Banner from "./mainpage/Banner";
import Search from "./mainpage/Search";
import Footer from "./mainpage/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Search />
      <Footer />
    </div>
  );
}

export default App;
