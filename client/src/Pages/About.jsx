import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown} from '@fortawesome/free-solid-svg-icons';
import Solid from '../Components/Solid';

function About() {
  return (
    <div className='relative'>
        <div className='flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100 bg-circles'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
                <div className='flex flex-col justify-center'>
                    <h1 className='text-4xl font-extrabold text-gray-800 mb-4'>About Me</h1>
                    <p className='text-xl text-gray-600 mb-4'>
                        I’m a Frontend Developer based in the United States.
                    </p>
                    <p className='text-lg text-gray-700'>
                        I love creating seamless and intuitive user experiences. The ever-changing web technologies inspire me to keep learning and innovating, blending design and code to build modern, dynamic web applications.
                    </p>
                </div>
                <div className='flex items-center justify-center'>
                    <img className='w-full h-auto max-w-xs rounded-lg shadow-lg' src={require('../Assets/Images/profile-pic.png')} alt="Profile" />
                </div>
            </div>
        </div>
        <div className='absolute bottom-[5%] flex items-center justify-center w-full'>
            <FontAwesomeIcon className='bounceArrow text-black text-[20px]' icon={faCaretDown}></FontAwesomeIcon>
        </div>
        <Solid></Solid>
    </div>
  )
}

export default About
