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
      image: '/assets/img/portfolio-1.jpg',
      dataWowDelay: '0.1s',
      title: 'Sitecore Manage Services',
      description: 'Ongoing management and maintenance of Sitecore platform, ensuring optimal performance and uptime.',
    },
    {
      id: 2,
      category: 'second',
      dataWowDelay: '0.3s',
      image: '/assets/img/portfolio-2.jpg',
      title: 'Sitecore Upgrade',
      description: 'Successfully upgraded to the latest Sitecore version, enhancing features and improving security.',
    },
    {
      id: 3,
      category: 'first',
      image: '/assets/img/portfolio-3.jpg',
      dataWowDelay: '0.5s',
      title: 'Sitecore XM Cloud Migration',
      description: 'Migrated to Sitecore XM Cloud for better scalability and cloud-native capabilities.',
    },
    {
      id: 4,
      category: 'second',
      image: '/assets/img/portfolio-4.jpg',
      dataWowDelay: '0.1s',
      title: 'Coveo Search Implementation',
      description: 'Integrated Coveo Search for advanced, AI-powered search capabilities, enhancing user experience and content discoverability.',
    },
    {
      id: 5,
      category: 'first',
      image: '/assets/img/portfolio-5.jpg',
      dataWowDelay: '0.3s',
      title: 'Content Hub Integration',
      description: 'Seamlessly integrated Sitecore Content Hub, centralizing content management and streamlining workflows.',
    },
    {
      id: 6,
      category: 'second',
      image: '/assets/img/portfolio-6.jpg',
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
          <p className="section-title text-secondary justify-content-center">
            {/* <span></span>Our Projects<span></span> */}
          </p>
          <h1 className="text-center mb-5">Recently Completed Projects</h1>
        </div>
        <div className="row mt-n2 wow fadeInUp" data-wow-delay="0.3s">
          <div className="col-12 text-center">
            <ul className="list-inline mb-5" id="portfolio-flters">
              <li 
                className={`mx-2 ${filter === '*'? 'active' : ''}`}
                onClick={() => handleFilterChange('*')}
              >
                All
              </li>
              <li 
                className={`mx-2 ${filter === 'first'? 'active' : ''}`}
                onClick={() => handleFilterChange('first')}
              >
                Web Design
              </li>
              <li 
                className={`mx-2 ${filter === 'second'? 'active' : ''}`}
                onClick={() => handleFilterChange('second')}
              >
                Graphic Design
              </li>
            </ul>
          </div>
        </div>
        <div className="row g-4 portfolio-container">
          {projectsList
            .filter((project) => filter === '*' || project.category === filter)
            .map((project) => (
              <div key={project.id} className={`col-lg-4 col-md-6 portfolio-item ${project.category} wow fadeInUp`} data-wow-delay={project.dataWowDelay}>
                <div className="rounded overflow-hidden">
                  <div className="position-relative overflow-hidden">
                    <Image 
                      className="img-fluid w-100"
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={300}
                    />
                    <div className="portfolio-overlay">
                      <Link className="btn btn-square btn-outline-light mx-1" href={project.image} data-lightbox="portfolio">
                        <i className="fa fa-eye"></i>
                      </Link>
                      <Link className="btn btn-square btn-outline-light mx-1" href="/">
                        <i className="fa fa-link"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="bg-light p-4">
                    <p className="text-primary fw-medium mb-2">{project.title}</p>
                    <h5 className="lh-base mb-0">{project.description}</h5>
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
