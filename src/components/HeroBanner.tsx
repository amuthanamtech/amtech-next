'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeroContent {
    title: string;
    description: string;
    readMoreButton: {
        text: string;
        link: string;
    };
    contactButton: {
        text: string;
        link: string;
    };
    image: {
        src: string;
        alt: string;
        width: number;
        height: number;
    };
    backgroundImage: {
        src: string;
        alt: string;
    };
}

interface HeroBannerProps {
    content: HeroContent;
}

const HeroBanner = ({ content }: HeroBannerProps) => {
    return (
        <div className="position-relative p-0">
            <div 
                className="bg-primary hero-header" 
                style={{
                    backgroundImage: `url(${content.backgroundImage.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="px-lg-5">
                    <div className="row g-5 align-items-end">
                        <div className="col-lg-6 text-center text-lg-start">
                            <h1 className="text-white mb-4 animated slideInDown">{content.title}</h1>
                            <p className="text-white pb-3 animated slideInDown">{content.description}</p>
                            <Link href={content.readMoreButton.link} className="btn btn-secoy py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft">{content.readMoreButton.text}</Link>
                            <Link href={content.contactButton.link} className="btn btn-light py-sm-3 px-sm-5 rounded-pill animated slideInRight">{content.contactButton.text}</Link>
                        </div>
                        <div className="col-lg-6 text-center text-lg-start">
                            <Image 
                                src={content.image.src}
                                alt={content.image.alt}      
                                width={content.image.width}
                                height={content.image.height}
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