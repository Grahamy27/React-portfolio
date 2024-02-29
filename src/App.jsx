import { useState } from 'react'
// import { Navbar } from 'react-bootstrap';
import Navbar from './components/Navbar/navbar.jsx';
import About from './components/About/about.jsx';
import Portfolio from './components/Portfolio/portfolio.jsx';
import Contact from './components/Contact/contact.jsx';


function App() {
  
  return (
    <div className='App'>
      <Navbar />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App