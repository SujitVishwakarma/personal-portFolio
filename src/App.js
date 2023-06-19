import React from 'react';
import { Link } from 'react-scroll';
import Navbar from './Components/Navbar';
import Banner from './Components/banner/Banner';
import Features from './Components/features/Features';
import Projects from './Components/projects/Projects';
import Resume from './Components/resume/Resume';
import Contact from './Components/contact/Contact';
import Footer from './Components/footer/Footer';
import FooterBottom from './Components/footer/FooterBottom';


function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className='max-w-screen-xl mx-auto px-10'>
        <Navbar/>
        <Banner/>
        <Features/>
        <Projects/>
        <Resume/>
        <Contact/>
        <Footer/>
        <FooterBottom/>
      </div>
    </div>
  );
}

export default App;
