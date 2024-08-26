import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";
import Footer from "./components/custom/Footer";
import Header from "./components/custom/Navbar";
import MissionNVision from "./pages/MissionNVision";
import Home from "./pages/Home";

function App() {
  return (
    <div className="h-auto font-custom-font xl:px-[5rem] px-[1.5rem] text-custom-dark bg-custom-bg">
      <Router>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/mission" Component={MissionNVision} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
