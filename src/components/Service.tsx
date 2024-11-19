// ServiceCard.tsx
'use client'

import React from 'react'

interface ServiceItem {
    icon: string
    title: string
    description: string
    link: string
    delay?: string
}

interface ServiceProps {
  content: {
    title: string
    services: ServiceItem[]
  }
}

const Service: React.FC<ServiceProps> = ({ content }) => {
    if (!content) return null
    
    return (
      <div className="container service py-5 my-16 border border-blue-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="container py-5 px-lg-5">
          <div className="wow fadeInUp" data-wow-delay="0.1s">
            <h1 className="text-center mb-5">{content.title}</h1>
          </div>
          <div className="row g-4">
            {content.services.map((service, index) => (
              <div key={index} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={service.delay || "0.1s"}>
                <div className="service-item d-flex flex-column text-center rounded">
                  <div className="service-icon flex-shrink-0">
                    <i className={`fa ${service.icon} fa-2x`}></i>
                  </div>
                  <h5 className="mb-3">{service.title}</h5>
                  <p className="m-0">{service.description}</p>
                  <a className="btn btn-square" href={service.link}><i className="fa fa-arrow-right"></i></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
}

export default Service

