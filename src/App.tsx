import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
// import Footer from "./components/custom/Footer";
import Header from "./components/custom/Navbar";
import Hero from "./components/custom/Hero";

function App() {
  return (
    <Router>
      <div className="h-auto bg-custom-bg font-custom-font">
        <Header />
        <main className="flex-grow">
          <div className="container mx-auto px-4">
            <Hero/>
          </div>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;

