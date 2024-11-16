'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const heroContent = {
    title: "Transforming Digital Experiences with Innovation and Precision",
    description: "Leveraging the power of Sitecore, we create dynamic, personalized digital experiences that drive engagement and growth. Our team of skilled architects and developers bring creativity and intelligence to every project, ensuring top-notch solutions tailored to your unique needs.",
    readMoreButton: {
        text: "Read More",
        link: "/"
    },
    contactButton: {
        text: "Contact Us",
        link: "/contact"
    },
    image: {
        src: "/assets/img/hero.png",
        alt: "Hero Banner",
        width: 500,
        height: 500
    },
    backgroundImage: {
        src: "/assets/img/banner/background-purple.png",
        alt: "Background Image"
    }
};

const HeroBanner = () => {
    return (
        <div className="position-relative p-0">
            <div 
                className="bg-primary hero-header" 
                style={{
                    backgroundImage: `url(${heroContent.backgroundImage.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="px-lg-5">
                    <div className="row g-5 align-items-end">
                        <div className="col-lg-6 text-center text-lg-start">
                            <h1 className="text-white mb-4 animated slideInDown">{heroContent.title}</h1>
                            <p className="text-white pb-3 animated slideInDown">{heroContent.description}</p>
                            <Link href={heroContent.readMoreButton.link} className="btn btn-secoy py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft">{heroContent.readMoreButton.text}</Link>
                            <Link href={heroContent.contactButton.link} className="btn btn-light py-sm-3 px-sm-5 rounded-pill animated slideInRight">{heroContent.contactButton.text}</Link>
                        </div>
                        <div className="col-lg-6 text-center text-lg-start">
                            <Image 
                                src={heroContent.image.src}
                                alt={heroContent.image.alt}      
                                width={heroContent.image.width}
                                height={heroContent.image.height}
                                className="img-fluid animated zoomIn"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;