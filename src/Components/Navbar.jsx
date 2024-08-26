import React from 'react'

function Navbar() {
  return (
    <div>
        <nav className='w-full h-[60px] bg-[#F9F1E7] flex items-center justify-between px-[25px]'>
            <div>
                <p className='font-[600] text-[25px]'>Web Portfolio</p>
            </div>
            <div>
                <div className="w-[30px] h-[4px] bg-black my-2"></div>
                <div className="w-[25px] h-[4px] bg-black"></div>
            </div>
        </nav>
        <div className='h-[270px] bg-black flex justify-center items-center'>
            <ul className='text-white'>
                <li className='my-4'><a href="/home">HOME</a></li>
                <li className='my-4'><a href="/home">ABOUT</a></li>
                <li className='my-4'><a href="/home">PROJECTS</a></li>
                <li className='my-4'><a href="/home">CONTACT</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar