"use client";

import React from "react";
import Image from "next/image";

interface FeatureProps {
    title: string;
    features: {
        title: string;
        description: string;
        icon: string;
        image: string;
        delay: string;
    }[];
}

const FeatureListing = ({ title, features }: FeatureProps) => {
    return (
        <div className="container feature-listing py-5 my-16 border border-blue-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="py-2 px-lg-5">
            <div className="wow fadeInUp" data-wow-delay="0.1s">
                    {title && <h2 className="text-center mb-5">{title}</h2>}
                </div>
                <div className="row g-4">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="col-lg-3 wow fadeInUp"
                            data-wow-delay={feature.delay}
                        >
                            <div className="feature-item bg-light rounded text-center p-4">
                                <div className="d-flex justify-content-center">
                                    <Image
                                        src={feature.image}
                                        alt={feature.title}
                                        width={200}
                                        height={150}
                                        className="mb-4"
                                    />
                                </div>
                                <h5 className="mb-3">{feature.title}</h5>
                                <p className="m-0">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeatureListing;
