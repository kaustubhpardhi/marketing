import "./App.css";
import Home from "./components/home/home";
import Testimonial from "./components/testimonials/testimonial";
import Faq from "./components/faq/faq";
import Tryit from "./components/tryit/tryit";
import NavBar from "./components/navbar/Navbar";
import TestFlow from "./components/landing/TestFlow";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="components">
        <NavBar />
        <Home />
        <Testimonial />
        <TestFlow />
        <Faq />
        <Tryit />
        <Footer />
      </div>
    </div>
  );
}

export default App;
