'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

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
        enabled: boolean;
    };
    backgroundImage: {
        src: string;
        alt: string;
    };
    imagePosition: 'left' | 'right';
}

interface HeroBannerProps {
    content: HeroContent;
}

const HeroBanner = ({ content }: HeroBannerProps) => {
    const router = useRouter();
    const contentOrder = content.imagePosition === 'left' ? 'order-2' : '';
    const imageOrder = content.imagePosition === 'left' ? 'order-1' : '';

    // Contact button click handler with fallback
    const handleContactClick = (e: React.MouseEvent) => {
        e.preventDefault();
        // Try both methods to ensure navigation works
        try {
            router.push(content.contactButton.link);
        } catch (error) {
            window.location.href = content.contactButton.link;
        }
    };

    return (
        <div className="position-relative p-0">
            <div 
                className="hero-header" 
                style={{
                    backgroundImage: `url(${content.backgroundImage.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="px-lg-5">
                    <div className="row g-5 align-items-end">
                        <div className={`col-lg-7 text-center text-lg-start ${contentOrder}`} style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '2rem', borderRadius: '10px' }}>
                            <h1 className="text-white mb-4 animated slideInDown">{content.title}</h1>
                            <p className="text-white pb-3 animated slideInDown">{content.description}</p>
                            <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3">
                                <Link href={content.readMoreButton.link} className="btn btn-secondary py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft">
                                    {content.readMoreButton.text}
                                </Link>
                                
                                {/* Contact Button */}
                                <button 
                                    onClick={handleContactClick}
                                    className="btn btn-light py-sm-3 px-sm-5 rounded-pill animated slideInRight"
                                >
                                    {content.contactButton.text}
                                </button>
                            </div>
                        </div>                        
                        <div className={`col-lg-5 text-center text-lg-start ${imageOrder}`}>
                            {content.image.enabled && (
                                <Image 
                                    src={content.image.src}
                                    alt={content.image.alt}      
                                    width={content.image.width}
                                    height={content.image.height}
                                    className="img-fluid animated zoomIn"
                                    priority
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;