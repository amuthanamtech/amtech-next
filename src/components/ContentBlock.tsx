'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ContentBlockProps {
    content: {
        title: string;
        subtitle: string;
        description: string;
        button: {
            text: string;
            link: string;
        };
        image: {
            src: string;
            alt: string;
            width: number;
            height: number;
        };
        imagePosition: 'left' | 'right';
    };
}

const ContentBlock = ({ content }: ContentBlockProps) => {
    const contentOrder = content.imagePosition === 'left' ? 'order-2' : '';
    const imageOrder = content.imagePosition === 'left' ? 'order-1' : '';

    return (
        <div className="container content-block py-5 my-16 border border-blue-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="row align-items-center">
                    <div className={`col-lg-6 ${contentOrder}`}>
                        <div className="content-wrapper">
                            <h2 className="title mb-3">{content.title}</h2>
                            <h4 className="subtitle mb-3">{content.subtitle}</h4>
                            <div 
                                className="description mb-4"
                                dangerouslySetInnerHTML={{ __html: content.description }}
                            />
                            {content.button.link && (
                                <Link 
                                    href={content.button.link} 
                                    className="btn btn-primary px-4 py-2"
                                >
                                    {content.button.text}
                                </Link>
                            )}
                        </div>
                    </div>
                    <div className={`col-lg-6 ${imageOrder}`}>
                        <Image 
                            src={content.image.src}
                            alt={content.image.alt}      
                            width={content.image.width}
                            height={content.image.height}
                            className="img-fluid"
                            priority
                        />
                    </div>
                </div>
            
        </div>
    );
};

export default ContentBlock;