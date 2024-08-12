import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
// import Footer from "./components/custom/Footer";
import Header from "./components/custom/Navbar";

function App() {
  return (
    <Router>
      <div className="h-auto bg-custom-bg ">
        <Header />
        <main className="flex-grow">
          <div className="container mx-auto px-4">
            {/* <Outlet /> */}
          </div>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;

