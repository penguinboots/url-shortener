import './App.scss'
import Nav from './components/Nav'
import Hero from './components/Hero'

import { useState } from "react";
import Menu from './components/Menu';

function App() {

  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="app-wrapper">
      <Nav isOpen={isOpen} toggleMenu={toggleMenu}/>
      <Menu isOpen={isOpen} />
      <Hero />
      {/* <URLForm />
      <Features />
      <CallToAction />
      <Footer /> */}
    </div>
  );
}

export default App
