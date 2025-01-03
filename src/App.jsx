import "./App.css";
import {Route , Routes } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Certificates from "./pages/Certificates";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/certificates" element={<Certificates/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
 