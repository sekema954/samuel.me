import React, { useState } from 'react';
import frontend from '../Assets/Images/frontend.avif';
import responsive from '../Assets/Images/responsive.jpg';
import api from '../Assets/Images/api.jpg';
import security from '../Assets/Images/security.jpg';
import seo from '../Assets/Images/seo.webp';



function Services() {
  const myServices = [
    { id: 1, src: frontend, name:'Frontend Design', context:"Creating visually stunning websites with a focus on user experience and performance.", alt: "frontend" },
    { id: 2, src: responsive, name:'Responsive Design', context:"Crafting adaptable web designs that seamlessly adjust to any device, ensuring an optimal user experience across all screen sizes.", alt: "responsive" },
    { id: 3, src: api, name:'API Intergration', context:"creating and integrating application programming interfaces (APIs).", alt: "API" },
    { id: 4, src: security, name:'Web Security', context:"focus on protecting websites and web applications from cyber threats.", alt:"security"},
    { id: 5, src: seo, name:'Search Engine Optimization', context:" Search engine optimization (SEO) services aim to improve the visibility of websites in search engine results, driving more organic traffic", alt: "SEO" },
  ];

  return (
    <div>
      <div>
        <div className='flex justify-between items-center h-[300px] px-[55px]'>
          <p className='font-[700] text-[25px]'>
            I provide the best and<br></br>affordable services
          </p>
          <div>
            <p>Services</p>
            <p>I provide a variety of services to my clients.</p>
          </div>
        </div>
      </div>
      <div className='h-[300px] flex-items justify-center px-[35px]'>
        <div className='flex gap-[5px]'>
          {myServices.map(service => (
            <ServiceItem key={service.id} service={service} />
          ))}
        </div>
      </div>
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
      className='rounded-[10px] w-[300px] h-[220px] bg-black relative flex items-center text-center justify-center shadow shadow-lg shadow-black'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
        <p className='text-yellow-400 absolute top-[4%] font-[600]'>{service.name}</p>
        <p className='text-white absolute px-4'>{service.context}</p>
        <img
            className={`rounded-[10px] h-full w-full transition-all duration-500 ease-in-out object-cover ${isHovered ? 'transform -translate-y-full opacity-0' : 'transform translate-y-0 opacity-100'}`}
            src={service.src}
            alt={service.alt}
        />
    </div>
  );
}

export default Services;
