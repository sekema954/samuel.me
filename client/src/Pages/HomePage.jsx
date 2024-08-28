import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import About from './About';
import Solid from '../Components/Solid';
import Projects from './Projects';
import Contact from './Contact';
import Services from './Services';

function HomePage() {
  return (
    <div>
        <div className='bg-homebg h-screen w-screen bg-center bg-cover flex items-center justify-center px-4 relative'>
            <div className='text-center text-white max-w-lg mx-auto'>
                <div className='my-5'>
                <h1 className='font-bold text-[40px] sm:text-[50px] leading-tight'>
                    Welcome
                </h1>
            </div>
            <div className='text-lg sm:text-xl font-light leading-relaxed'>
                <p>Hi, <span role="img" aria-label="wave">👋</span><br />My name is Samuel Ekema.<br />I am a <span className="font-semibold text-yellow-400">Frontend Developer</span></p>
            </div>
            <div className='mt-[25px]'>
                <button className='bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-yellow-500 transition-transform transform hover:scale-105'>
                    Get in Touch
                </button>
            </div>
            <div>
                <FontAwesomeIcon className='bounceArrow text-yellow-400 text-[20px] absolute bottom-[5%]' icon={faArrowDown}></FontAwesomeIcon>
            </div>
            </div>
        </div>
        <Solid></Solid>
        <About></About>
        <Projects></Projects>
        <Services></Services>
        <Contact></Contact>
    </div>
  );
}

export default HomePage;
