import "./App.css";
import Home from "./components/home/home";
import Testimonial from "./components/testimonials/testimonial";
import Faq from "./components/faq/faq";
import Tryit from "./components/tryit/tryit";
function App() {
  return (
    <div className="App">
      <div className="components">
        <Home />
        <Testimonial />
        <Faq />
        <Tryit />
      </div>
    </div>
  );
}

export default App;
