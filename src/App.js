import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Features" element={<Features />}></Route>
          <Route path="/Pricing" element={<Pricing />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
