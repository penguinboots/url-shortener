import './App.scss'
import Nav from './components/Nav'
import Hero from './components/Hero'

import { useState } from "react";
import Menu from './components/Menu';
import URLForm from './components/URLForm';
import Features from './components/Features';

function App() {

  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="app-wrapper">
      <Nav isOpen={isOpen} toggleMenu={toggleMenu} />
      <Menu isOpen={isOpen} />
      <Hero />
      <URLForm />
      <Features />
      {/* <CallToAction />
      <Footer /> */}
    </div>
  );
}

export default App
