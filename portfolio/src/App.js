import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/AboutMe'; 
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './components/NavigationBar';
import './styles/App.css';
import Footer from './components/Footerd';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';





function App() {
  useEffect(() => {
  AOS.init({ duration: 1000, once: true });
}, []);
 

  return (
    <div className='main-body d-flex flex-column min-vh-100' style={{padding: '10px 80px 0px'}}>
      <Router>
      <Navbar />
      <div  className="flex-grow-1">
          <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
      <Footer />
    </Router>

    </div>
    
  

  );
}

export default App;

