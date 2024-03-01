import { useState } from 'react'
// import { Navbar } from 'react-bootstrap';
import Navbar from './components/Navbar/navbar.jsx';
import About from './components/About/about.jsx';
import Portfolio from './components/Portfolio/projects.jsx';
import Contact from './components/Contact/contact.jsx';
import Footer from './components/Footer/footer.jsx';

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

export default App;