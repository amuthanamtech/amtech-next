'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Projects = () => {
  const [filter, setFilter] = useState('*');

  const projectsList = [
    {
      id: 1,
      category: 'first',
      image: "/assets/img/newimage/Sitecore Manage.jpg",
      dataWowDelay: '0.1s',
      title: 'Sitecore Manage Services',
      description: 'Ongoing management and maintenance of Sitecore platform, ensuring optimal performance and uptime.',
    },
    {
      id: 2,
      category: 'second',
      dataWowDelay: '0.3s',
      image: "/assets/img/newimage/Sitecore Manage6.jpg",
      title: 'Sitecore Upgrade',
      description: 'Successfully upgraded to the latest Sitecore version, enhancing features and improving security.',
    },
    {
      id: 3,
      category: 'first',
      image: "/assets/img/newimage/Sitecore Manage4.jpg",
      dataWowDelay: '0.5s',
      title: 'Sitecore XM Cloud Migration',
      description: 'Migrated to Sitecore XM Cloud for better scalability and cloud-native capabilities.',
    },
    {
      id: 4,
      category: 'second',
      image: "/assets/img/newimage/Sitecore Manage3.jpg",
      dataWowDelay: '0.1s',
      title: 'Coveo Search Implementation',
      description: 'Integrated Coveo Search for advanced, AI-powered search capabilities, enhancing user experience and content discoverability.',
    },
    {
      id: 5,
      category: 'first',
      image: "/assets/img/newimage/Sitecore Manage9.jpg",
      dataWowDelay: '0.3s',
      title: 'Content Hub Integration',
      description: 'Seamlessly integrated Sitecore Content Hub, centralizing content management and streamlining workflows.',
    },
    {
      id: 6,
      category: 'second',
      image: "/assets/img/newimage/Sitecore Manage1.jpg",
      dataWowDelay: '0.5s',
      title: 'Audit and Revamping',
      description: 'Conducted a comprehensive site audit and revamping, addressing technical debt and improving overall site performance.',
    }
  ];

  const handleFilterChange = (filterCategory: string) => {
    setFilter(filterCategory);
  }

  return (
    <div className="container project-listing py-5 my-16 border border-blue-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="py-5 px-lg-5">
        <div className="wow fadeInUp" data-wow-delay="0.1s">
          <p className="section-title text-secondary justify-content-center"></p>
          <h1 className="text-center mb-5">Recently Completed Projects</h1>
        </div>
        <div className="row mt-n2 wow fadeInUp" data-wow-delay="0.3s">
          <div className="col-12 text-center">
            <ul className="list-inline mb-5" id="portfolio-flters">
              <li
                className={`mx-2 cursor-pointer ${filter === '*' ? 'active' : ''}`}
                onClick={() => handleFilterChange('*')}
              >
                All
              </li>
              <li
                className={`mx-2 cursor-pointer ${filter === 'first' ? 'active' : ''}`}
                onClick={() => handleFilterChange('first')}
              >
                Web Design
              </li>
              <li
                className={`mx-2 cursor-pointer ${filter === 'second' ? 'active' : ''}`}
                onClick={() => handleFilterChange('second')}
              >
                Graphic Design
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 portfolio-container">
          {projectsList
            .filter((project) => filter === '*' || project.category === filter)
            .map((project) => (
              <div
                key={project.id}
                className={`portfolio-item ${project.category} wow fadeInUp`}
                data-wow-delay={project.dataWowDelay}
              >
                <div className="rounded overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="relative w-full aspect-[4/3] group rounded overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto flex justify-center items-center gap-4 transition-opacity duration-300 rounded">
                      <Link
                        href={project.image}
                        data-lightbox="portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-white bg-opacity-80 hover:bg-opacity-100 transition"
                      >
                        <i className="fa fa-eye text-black hover:text-blue-600 text-xl"></i>
                      </Link>
                      <Link
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-white bg-opacity-80 hover:bg-opacity-100 transition"
                      >
                        <i className="fa fa-link text-black hover:text-blue-600 text-xl"></i>
                      </Link>
                    </div>
                  </div>

                  <div className="bg-white p-4">
                    <p className="text-primary font-medium mb-2">{project.title}</p>
                    <h5 className="text-gray-700 mb-0">{project.description}</h5>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
