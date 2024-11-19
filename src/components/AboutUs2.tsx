// AboutUs2.tsx
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

interface AboutUsProps {
  content: {
    title: string;
    description: string;
    image: {
      src: string;
      alt: string;
      position?: 'left' | 'right';
    };
    whoWeAre: {
      title: string;
      description: string;
      technologies: string[];
    };
    whatWeDo: {
      title: string;
      items: string[];
    };
    cta: {
      text: string;
      href: string;
    };
  };
}
  const AboutUs = ({ content }: AboutUsProps) => {
    const skillSectionRef = useRef(null);
    useEffect(() => {
      const handleScroll = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.progress-bar');
            progressBars.forEach((bar: Element) => {
              const value = bar.getAttribute('aria-valuenow');
              (bar as HTMLElement).style.width = `${value}%`;
            });
          }
        });
      };

      const observer = new IntersectionObserver(handleScroll, {
        threshold: 0.2,
      });

      if (skillSectionRef.current) {
        observer.observe(skillSectionRef.current);
      }

      return () => {
        if (skillSectionRef.current) {
          observer.unobserve(skillSectionRef.current);
        }
      };
    }, []);

    const contentSection = (
      <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.1s">
        <h1 className="mb-5">{content.title}</h1>
        <p className="mb-4">{content.description}</p>
      
        <div className="mb-4">
          <h3 className="mb-3">{content.whoWeAre.title}</h3>
          <p>{content.whoWeAre.description}</p>
        </div>

        <div className="mb-4">
          <h3 className="mb-3">{content.whatWeDo.title}</h3>
          <ul className="list-unstyled">
            {content.whatWeDo.items.map((item, index) => (
              <li key={index} className="mb-2">{item}</li>
            ))}
          </ul>
        </div>

        <Link href={content.cta.href} className="btn btn-primary py-sm-3 px-sm-5 rounded-pill mt-3">
          {content.cta.text}
        </Link>
      </div>
    );

    const imageSection = (
      <div className="col-lg-5">
        <Image
          className="wow zoomIn"
          src={content.image.src}
          alt={content.image.alt}
          width={600}
          height={400}
          data-wow-delay="0.5s"
          priority
        />
      </div>
    );

    return (
      <div className="container about-us py-5 my-16 border border-blue-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" ref={skillSectionRef}>
        <div className="py-5 px-lg-5">
          <div className="row g-5 align-items-center">
            {content.image.position === 'left' ? (
              <>
                {imageSection}
                {contentSection}
              </>
            ) : (
              <>
                {contentSection}
                {imageSection}
              </>
            )}
          </div>
        </div>
      </div>
    );
  };
export default AboutUs;