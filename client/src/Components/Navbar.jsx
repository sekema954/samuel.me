import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isClicked, setIsClicked] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`top-0 w-full z-50 transition-all duration-300 ${isSticky ? 'bg-black shadow-2xl' : 'bg-black'}`}>
      <nav className='w-full h-[90px] flex items-center justify-between px-[25px]'>
        <div>
          <p className='text-yellow-300 font-bold text-[28px] tracking-widest uppercase glow'>
            Web Portfolio
          </p>
        </div>
        <div onClick={handleClick} className="cursor-pointer flex flex-col justify-center items-center relative w-[30px] h-[30px]">
          <div className={`w-[30px] h-[4px] bg-yellow-300 transition-all duration-300 ${isClicked ? 'rotate-45 translate-y-[10px]' : ''}`}></div>
          <div className={`w-[30px] h-[4px] bg-yellow-300 transition-all duration-300 my-[6px] ${isClicked ? 'opacity-0' : ''}`}></div>
          <div className={`w-[30px] h-[4px] bg-yellow-300 transition-all duration-300 ${isClicked ? '-rotate-45 -translate-y-[10px]' : ''}`}></div>
        </div>
      </nav>
      <div className={`overflow-hidden transition-all duration-500 ${isClicked ? 'h-[270px]' : 'h-0'} bg-white flex items-center justify-center`}>
        <ul className={`text-black text-center font-semibold text-lg transition-opacity duration-500 ${isClicked ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <li className='my-4 hover:text-yellow-400 transition-colors duration-300 glow'><a href="/home">Home</a></li>
          <li className='my-4 hover:text-yellow-400 transition-colors duration-300 glow'><a href="/about">About</a></li>
          <li className='my-4 hover:text-yellow-400 transition-colors duration-300 glow'><a href="/projects">Projects</a></li>
          <li className='my-4 hover:text-yellow-400 transition-colors duration-300 glow'><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
