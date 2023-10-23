import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Project";
import Contact from "./components/Contact/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Header />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
