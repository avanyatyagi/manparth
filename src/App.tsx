import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
// import Footer from "./components/custom/Footer";
import Header from "./components/custom/Navbar";
import Hero from "./components/custom/Hero";
import Mission from "./components/custom/Mission";
import Team from "./components/custom/Team";
import Benefits from "./components/custom/Testimonial";

function App() {
  return (
    <Router>
      <div className="h-auto font-custom-font xl:px-[5rem] px-[1.5rem] text-custom-dark">
        <Header />
        <main className="justify-center items-center">
            <Hero/>
            <Mission/>
            <Team/>
            <Benefits/>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;

