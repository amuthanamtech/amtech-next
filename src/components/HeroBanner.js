'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroBanner = () => {
    return (
        <div className="position-relative p-0">
            <div className="bg-primary hero-header">
                <div className="px-lg-5">
                    <div className="row g-5 align-items-end">
                        <div className="col-lg-6 text-center text-lg-start">
                            <h1 className="text-white mb-4 animated slideInDown">Transforming Digital Experiences with Innovation and Precision</h1>
                            <p className="text-white pb-3 animated slideInDown">Leveraging the power of Sitecore, we create dynamic, personalized digital experiences that drive engagement and growth. Our team of skilled architects and developers bring creativity and intelligence to every project, ensuring top-notch solutions tailored to your unique needs.</p>
                            <Link href="/" className="btn btn-secoy py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft">Read More</Link>
                            <Link href="/contact" className="btn btn-light py-sm-3 px-sm-5 rounded-pill animated slideInRight">Contact Us</Link>
                        </div>
                        <div className="col-lg-6 text-center text-lg-start">
                            {/* <Image 
                                src="/assets/img/hero.png"
                                alt="Hero Banner"      
                                width={500}
                                height={500}
                                className="img-fluid animated zoomIn"
                                priority
                            /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;
