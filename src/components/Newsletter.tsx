'use client'

import React from 'react'

const Newsletter = () => {
    return (
        <div className="container-xxl bg-primary newsletter wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5 px-lg-5">
                <div className="row justify-content-center">
                    <div className="col-lg-7 text-center">
                        <p className="section-title text-white justify-content-center"><span></span>Newsletter<span></span></p>
                        <h1 className="text-center text-white mb-4">Stay Always In Touch</h1>
                        <p className="text-white mb-4">Stay connected with us to get the latest updates, insights, and exclusive offers. Whether you have questions, need support, or want to learn more about our services, we&apos;re here to help. Follow us on social media, subscribe to our newsletter, or contact us directly to keep the conversation going. Your journey to digital excellence starts with a simple hello.</p>
                        <div className="position-relative w-100 mt-3">
                            <input id="emailUs" name='email' className="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Enter Your Email" autoComplete="email" style={{ height: '48px' }} />
                            <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i className="fa fa-paper-plane text-primary fs-4"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter