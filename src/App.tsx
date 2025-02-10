import "./App.css";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider"
import Product from "./components/Product/Product"
import Genre from "./components/Genre/Genre"
function App() {
  return (
    <div className="AppMain">
      <Header />
      <Slider />
      <Product />
      <Genre />
    </div>
  );
}

export default App;
