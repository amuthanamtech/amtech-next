'use client'

import React from 'react'

const Service = () => {
  return (
    <div className="container service py-5 my-16 border border-blue-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="container py-5 px-lg-5">
                <div className="wow fadeInUp" data-wow-delay="0.1s">
                    {/* <p className="section-title text-secondary justify-content-center"><span></span><span></span></p> */}
                    <h1 className="text-center mb-5">What Solutions We Provide</h1>
                </div>
                <div className="row g-4">
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-user-tie fa-2x"></i>
                            </div>
                            <h5 className="mb-3">Staffing Solution</h5>
                            <p className="m-0">Focused on quality, we manage the staffing lifecycle from sourcing to post-placement support.</p>
                            <a className="btn btn-square" href=""><i className="fa fa-arrow-right"></i></a>
                        </div>
                    </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-sitemap fa-2x"></i>
                            </div>
                            <h5 className="mb-3">Content Management Systems (CMS)</h5>
                            <p className="m-0">Implement and optimize CMS solutions for seamless content updates and management.</p>
                            <a className="btn btn-square" href=""><i className="fa fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-chart-line fa-2x"></i>
                            </div>
                            <h5 className="mb-3">SEO Optimization</h5>
                            <p className="m-0">Optimize search rankings with quality backlinks and targeted keyword strategies.</p>
                            <a className="btn btn-square" href="/"><i className="fa fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-paint-brush fa-2x"></i>
                            </div>
                            <h5 className="mb-3">Design & Development</h5>
                            <p className="m-0">Create visually stunning and functional websites tailored to your business needs.</p>
                            <a className="btn btn-square" href=""><i className="fa fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-wrench fa-2x"></i>
                            </div>
                            <h5 className="mb-3">Maintenance & Support</h5>
                            <p className="m-0">Ongoing website maintenance and support to ensure optimal performance and security.</p>
                            <a className="btn btn-square" href=""><i className="fa fa-arrow-right"></i></a>
                        </div>
                    </div>
                   
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-lightbulb fa-2x"></i>
                            </div>
                            <h5 className="mb-3">IT Consulting</h5>
                            <p className="m-0">Expert advice and strategies to align technology with business goals.</p>
                            <a className="btn btn-square" href=""><i className="fa fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-mobile-alt fa-2x"></i>
                            </div>
                            <h5 className="mb-3">App Development</h5>
                            <p className="m-0">Design and develop intuitive mobile applications for iOS and Android platforms.</p>
                            <a className="btn btn-square" href=""><i className="fa fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Service