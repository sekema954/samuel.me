import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Solid from '../Components/Solid';

function Projects() {
  const [data, setData] = useState([]);

  const fetchProjects = async () => {
    const url = "http://localhost:3001/projects";
    const options = {
      method: "GET"
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        console.error(`HTTP request failed: ${response.status}`);
        return;
      }
      const results = await response.json();
      console.log(results);
      const modifiedResults = results.projectLists;
      setData(modifiedResults);
    } catch (error) {
      console.error(`Failed to fetch projects from ${url}:`, error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div>
      <div>
        <div className='h-[400px] bg-black'>
          <div className='flex flex-row text-white justify-between'>
            <div className='px-[30px] py-[30px]'>
              <p className='my-4 text-2xl font-bold'>Project Name</p>
              <div className='flex gap-3 items-center my-4'>
                <FontAwesomeIcon className='text-yellow-300' icon={faStar} />
                <FontAwesomeIcon className='text-yellow-300' icon={faStar} />
                <FontAwesomeIcon className='text-yellow-300' icon={faStar} />
                <FontAwesomeIcon className='text-yellow-300' icon={faStar} />
                <p className='px-4'>2024</p>
                <p className='px-4'>Season 1</p>
              </div>
              <div className='my-5'>
                <p>This project is a modern, fully-featured e-commerce platform developed using React. It is designed to provide a seamless shopping experience with an intuitive user interface and robust functionality. The site aims to cater to a diverse range of products, offer secure transactions, and ensure a smooth and engaging experience for users.</p>
              </div>
              <div className='my-5 flex gap-4'>
                <p>Key Features:</p>
                <p>feature1</p>
                <p>feature2</p>
                <p>feature3</p>
                <p>feature4</p>
              </div>
              <div className='my-5 flex gap-4'>
                <p>Technical Stack:</p>
                <p>React</p>
                <p>Tailwind</p>
                <p>JavaScript</p>
              </div>
              <div>
                <a className='mx-4' href="/go-live">
                  <button className='w-[120px] bg-yellow-500 h-[35px] rounded-[5px] transition-all duration-500 hover:bg-yellow-600'>Go Live</button>
                </a>
                <a className='mx-4' href="/source-code">
                  <button className='w-[120px] bg-yellow-500 h-[35px] rounded-[5px] transition-all duration-500 hover:bg-yellow-600'>Source Code</button>
                </a>
              </div>
            </div>
            <div className='px-[30px] py-[30px]'>
              <div className='w-[400px] h-[300px] bg-white'></div>
            </div>
          </div>
        </div>
        <div className='bg-black text-white py-4'>
          <div className='py-[30px] px-[30px]'>
            <p className='font-semibold'>Project Lists</p>
          </div>
          <div className='h-[200px] flex flex-wrap px-[30px] items-center justify-center gap-[15px]'>
            {data.length > 0 ? (
              data.map(project => (
                <div key={project.id} className='w-[260px] h-full text-black p-4 '>
                  <img src={project.thumbnail} alt={project.website_name} className='w-full h-full object-cover mt-2 shadow shadow-md shadow-white rounded-[10px]' />
                </div>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
      <Solid />
    </div>
  );
}

export default Projects;
