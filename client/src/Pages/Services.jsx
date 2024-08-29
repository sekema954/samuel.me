import React, { useState } from 'react';
import frontend from '../Assets/Images/frontend.avif';
import responsive from '../Assets/Images/responsive.jpg';
import api from '../Assets/Images/api.jpg';
import security from '../Assets/Images/security.jpg';
import Solid from '../Components/Solid';

function Services() {
  const myServices = [
    { id: 1, src: frontend, name: 'Frontend Design', context: "Creating visually stunning websites with a focus on user experience and performance.", alt: "frontend" },
    { id: 2, src: responsive, name: 'Responsive Design', context: "Crafting adaptable web designs that seamlessly adjust to any device, ensuring an optimal user experience across all screen sizes.", alt: "responsive" },
    { id: 3, src: api, name: 'API Integration', context: "Creating and integrating application programming interfaces (APIs).", alt: "API" },
    { id: 4, src: security, name: 'Web Security', context: "Focus on protecting websites and web applications from cyber threats.", alt: "security" },
  ];

  return (
    <div>
      <div className='flex flex-col lg:flex-row justify-between items-center h-auto px-4 lg:px-[55px] py-4'>
        <p className='font-[700] text-[20px] lg:text-[25px] text-center lg:text-left'>
          I provide the best and<br />affordable services
        </p>
        <div className='text-center lg:text-left'>
          <p className='text-lg font-semibold'>Services</p>
          <p className='text-sm lg:text-base'>I provide a variety of services to my clients.</p>
        </div>
      </div>
      <div className='px-4 lg:px-[35px] py-4'>
        <div className='flex flex-wrap justify-center gap-4 lg:gap-6'>
          {myServices.map(service => (
            <ServiceItem key={service.id} service={service} />
          ))}
        </div>
      </div>
      <Solid></Solid>
    </div>
  );
}

function ServiceItem({ service }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className='rounded-[10px] w-full sm:w-[250px] md:w-[300px] h-[200px] lg:h-[220px] bg-black relative flex items-center text-center justify-center shadow-lg'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p className='text-yellow-400 absolute top-2 lg:top-4 font-[600] text-sm lg:text-base'>{service.name}</p>
      <p className='text-white absolute px-2 lg:px-4 text-xs lg:text-sm'>{service.context}</p>
      <img
        className={`rounded-[10px] h-full w-full transition-all duration-500 ease-in-out object-cover ${isHovered ? 'transform -translate-y-full opacity-0' : 'transform translate-y-0 opacity-100'}`}
        src={service.src}
        alt={service.alt}
      />
    </div>
  );
}

export default Services;
