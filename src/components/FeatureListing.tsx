'use client';

import React from 'react';

const FeatureListing = () => {
    return (
       
        <div className="py-5">
            <div className="py-2 px-lg-5">
                <div className="row g-4">
                    <div className="col-lg-3 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="feature-item bg-light rounded text-center p-4">
                            <i className="fa fa-3x fa-laptop-code text-primary mb-4"></i>
                            <h5 className="mb-3">Design & Development</h5>
                            <p className="m-0">Create visually stunning and functional websites tailored to your business needs</p>
                        </div>
                    </div>
                    <div className="col-lg-3 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="feature-item bg-light rounded text-center p-4">
                            <i className="fa fa-3x fa-mail-bulk text-primary mb-4"></i>
                            <h5 className="mb-3">Digital Marketing</h5>
                            <p className="m-0">Comprehensive strategies to boost online presence and drive targeted engagement.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="feature-item bg-light rounded text-center p-4">
                            <i className="fa fa-3x fa-search text-primary mb-4"></i>
                            <h5 className="mb-3">SEO & Backlinks</h5>
                            <p className="m-0">Optimize search rankings with quality backlinks and targeted keyword strategies.</p>
                        </div>
                    </div> 
                    <div className="col-lg-3 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="feature-item bg-light rounded text-center p-4">
                            <i className="fa fa-3x fa-search text-primary mb-4"></i>
                            <h5 className="mb-3">SEO & Backlinks</h5>
                            <p className="m-0">Optimize search rankings with quality backlinks and targeted keyword strategies.</p>
                        </div>
                    </div>                   
                </div>
            </div>
        </div>
        

    );
};

export default FeatureListing;
