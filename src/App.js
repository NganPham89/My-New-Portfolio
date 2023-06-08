import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Contact />
      <Portfolio />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
