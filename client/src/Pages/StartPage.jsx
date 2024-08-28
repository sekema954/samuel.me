import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function StartPage() {
    const [dimensions, setDimensions] = useState(false);
    const navigate = useNavigate();

    const handleStartClick = () => {
        setDimensions(true);
    };

    useEffect(() => {
        if (dimensions) {
            // Navigate to /home after the animation duration (0.5s in this case)
            const timer = setTimeout(() => {
                navigate('/home');
            }, 500); // 500ms to match the duration of the animation

            // Cleanup the timer if the component unmounts before the navigation happens
            return () => clearTimeout(timer);
        }
    }, [dimensions, navigate]);

    return (
        <div className='bg-black w-screen h-screen flex items-center justify-center'>
            <div>
                <div className={`w-[400px] h-[400px] rounded-full border border-white relative transition-all duration-[.5s] ${dimensions ? 'w-0 h-0 border-none': ''}`}>
                    <img className='w-full h-full absolute rounded-full' src={require('../Assets/Images/profile-pic.png')} alt="me.pic" />
                </div>
                <div className='flex items-center justify-center my-4'>
                    <button className='w-[200px] h-[45px] bg-yellow-400 cursor-pointer shadow shadow-lg hover:shadow-yellow-200 hover:rotate-[10deg] transition-all duration-[.5s]'
                        onClick={handleStartClick}
                    >
                        Start
                    </button>
                </div>
            </div>
        </div>
    );
}

export default StartPage;
