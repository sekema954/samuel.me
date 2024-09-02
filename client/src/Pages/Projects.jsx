import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Solid from '../Components/Solid';
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
  const [data, setData] = useState([]);
  const [activeProjectId, setActiveProjectId] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleActive = (project) => {
    setActiveProjectId(project.id);
    setSelectedProject(project);
  };

  const fetchProjects = async () => {
    const url = "https://portfolio-samuel-70fe1a2461ea.herokuapp.com/projects";
    console.log("API URL:", url);
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
      const modifiedResults = results.projectLists;
      setData(modifiedResults);

      // Set the first project as active by default
      if (modifiedResults.length > 0) {
        setActiveProjectId(modifiedResults[0].id);
        setSelectedProject(modifiedResults[0]);
      }
    } catch (error) {
      console.error(`Failed to fetch projects from ${url}:`, error);
    }
  };

  useEffect(() => {
    fetchProjects();
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
    })
  }, []);

  return (
    <div className=''>
      <div>
        <div className='bg-black'>
          {selectedProject ? (
            <div className='lg:grid lg:grid-cols-2 text-white'>
              <div className='px-[30px] py-[30px] flex items-center justify-center'>
                <div className='lg:w-[400px] lg:h-[300px] bg-white'>
                  <img className='w-full h-full object-cover' src={selectedProject.thumbnail} alt={selectedProject.website_name} />
                </div>
              </div>
              <div className='px-[30px] py-[30px]'>
                <p className='my-4 text-2xl font-bold'>{selectedProject.website_name}</p>
                <div className='flex gap-3 items-center my-4'>
                  <FontAwesomeIcon className='text-yellow-300' icon={faStar} />
                  <FontAwesomeIcon className='text-yellow-300' icon={faStar} />
                  <FontAwesomeIcon className='text-yellow-300' icon={faStar} />
                  <FontAwesomeIcon className='text-yellow-300' icon={faStar} />
                  <p className='px-4'>2024</p>
                  <p className='px-4'>Season 1</p>
                </div>
                <div className='my-5'>
                  <p >{selectedProject.website_description}</p>
                </div>
                <div className='my-5 flex gap-4'>
                  <p className='text-[10px] lg:text-[15px]'>Features:</p>
                  {selectedProject.website_features.map((feature, index) => (
                    <p className='text-[10px] lg:text-[15px]' key={index}>{feature}</p>
                  ))}
                </div>
                <div  className='my-5 flex gap-4'>
                  <p className='text-[10px] lg:text-[15px]'>Technical Stack:</p>
                  {selectedProject.technical_stack.map((tech, index) => (
                    <img className='w-[17px] h-[15px]' key={index} src={tech} alt={tech}></img>
                  ))}
                </div>
                <div data-aos="fade-right">
                  <a className='mx-4' href={selectedProject.go_live} target='_blank' rel="noreferrer">
                    <button className='w-[120px] my-4 bg-yellow-500 h-[35px] rounded-[5px] transition-all duration-500 hover:bg-yellow-600'>Go Live</button>
                  </a>
                  <a className='mx-4' href={selectedProject.source_code}>
                    <button className='w-[120px] bg-yellow-500 h-[35px] rounded-[5px] transition-all duration-500 hover:bg-yellow-600'>Source Code</button>
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <p className='text-white text-center'>Select a project to see details</p>
          )}
        </div>
        <div className='bg-black text-white py-4'>
          <div className='py-[30px] px-[30px]'>
            <p className='font-semibold'>Project Lists</p>
          </div>
          <div className='flex flex-wrap px-[30px] items-center justify-center gap-[15px]'>
            {data.length > 0 ? (
              data.map(project => (
                <div data-aos=""
                  key={project.id} 
                  className={`lg:w-[260px] h-full text-black p-4 cursor-pointer ${activeProjectId === project.id ? 'border border-yellow-400' : ''}`}
                  onClick={() => handleActive(project)}
                >
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
