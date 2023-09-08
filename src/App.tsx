import './styles/App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Services from './components/Services';
import Schedule from './components/Schedule';
import Results from './components/Results';
import Contact from './components/Contact';
import PageNotFound from './components/PageNotFound';
import Terms from './components/Terms';
import Privacy from './components/Privacy';

import Admin from './components/Admin';

import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation  } from 'react-router-dom';

function App() {
  window.addEventListener('scroll', fadeIn);

   // Event listener for CSS fade class 
  function fadeIn() {
    const fade = document.querySelectorAll('.fade')

    for (let i = 0; i < fade.length; i++) {
      const windowheight = window.innerHeight;
      const revealtop = fade[i].getBoundingClientRect().top;
      const revealpoint = 10;

      if (revealtop < windowheight - revealpoint) {
        fade[i].classList.add('active');
      } else {
        fade[i].classList.remove('active');
      }
    }
  } 

  // All internal Links send you to the top
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }
  
  return (
    <>
      <ScrollToTop />
      <Navbar/>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path="/about" element={ <About/> }/>
        <Route path="/services" element={ <Services/> }/>
        <Route path="/schedule" element={ <Schedule/> }/>
        <Route path="/results" element={ <Results/> }/>
        <Route path="/contact" element={ <Contact/> }/>
        <Route path="/terms" element={ <Terms/> }/>
        <Route path="/privacy" element={ <Privacy/> }/>
        <Route path="/admin" element={ <Admin/> }/>
        <Route path="/404" element={ <PageNotFound/> }/>
        <Route path="*" element={ <Navigate to="/404"/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App;
