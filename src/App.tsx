import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
// import Footer from "./components/custom/Footer";
import Header from "./components/custom/Navbar";
import Hero from "./components/custom/Hero";

function App() {
  return (
    <Router>
      <div className="h-auto font-custom-font px-[5rem]">
        <Header />
        <main className="justify-center">
          <div className="">
            <Hero/>
          </div>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;

