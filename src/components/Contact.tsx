"use client";

import React, { useState } from 'react';
import { db } from '../app/firebase/config'; // adjust path as needed
import { collection, addDoc } from 'firebase/firestore';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject) {
      alert('Please fill in all required fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    try {
      // Save data to Firestore
      await addDoc(collection(db, 'contacts'), formData);

      // Then send email via your existing API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
        window.location.href = '/thankyou';
      } else {
        alert('Failed to send email. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container py-5" style={{
      backgroundImage: "url('/')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundColor: 'white'
    }}>
      <div className="container py-5 px-lg-5 p-100">
        <div className="wow fadeInUp" data-wow-delay="0.1s">
          <h1 className="text-center mb-5">Get in Touch with Us</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="wow fadeInUp" data-wow-delay="0.3s">
              <p className="text-center mb-4">
                We&apos;d love to  hear from  you! Whether you have a question, need support, or want to explore how we can help with your staffing or development needs, feel free to reach out. Our team is ready to assist you!
              </p>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                      <label htmlFor="name">Your Name *</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                      <label htmlFor="email">Your Email *</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Subject"
                        autoComplete="on"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      />
                      <label htmlFor="subject">Subject *</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        id="message"
                        style={{ height: "150px" }}
                        autoComplete="off"
                        value={formData.message}
                        onChange={handleInputChange}
                      ></textarea>
                      <label htmlFor="message">Message </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-secondary w-100 py-3"
                      type="submit"
                      disabled={isLoading}
                    >
                      {isLoading && (
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                      )}
                      {isLoading ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
