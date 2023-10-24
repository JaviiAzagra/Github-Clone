import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Overview from "./components/Overview/Overview";
import Line from "./components/Line/Line";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Overview />
      <Line />
      <Footer />
    </div>
  );
}

export default App;
