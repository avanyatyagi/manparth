import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
// import Footer from "./components/custom/Footer";
import Header from "./components/custom/Navbar";
import Hero from "./components/custom/Hero";
import Mission from "./components/custom/Mission";
import Team from "./components/custom/Team";

function App() {
  return (
    <Router>
      <div className="h-auto font-custom-font xl:px-[5rem] px-[2rem] text-custom-dark">
        <Header />
        <main className="justify-center items-center">
            <Hero/>
            <Mission/>
            <Team/>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;

