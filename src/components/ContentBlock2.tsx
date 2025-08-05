'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface TalentPoolProps {
  title: string;
  description: string;
  imagePath: string;
  imageAlt: string;
  contentList: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  ctaText: string;
  ctaLink: string;
}

const TalentPoolOverview: React.FC<TalentPoolProps> = ({
  title,
  description,
  imagePath,
  imageAlt,
  contentList,
  ctaText,
  ctaLink
}) => {
  return (
    <div className="container content-block py-5 my-16 border border-blue-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <section id="talent-pool-overview" className="p-10 bg-[#f8f9fa]">
      <div className="text-center">
        <h2>{title}</h2>
        <p className="text-lg text-[#555]">
          {description}
        </p>
      </div>
      <div className="flex flex-row items-start gap-8 mt-8">
        <div className="w-1/2">
          <Image 
            src="/assets/img/newimage/image5.jpg"
            alt={imageAlt}
            width={800}
            height={400}
            className="max-w-full h-auto"
          />
        </div>
        <div className="w-1/2">
          <h3>Key contentList and Expertise</h3>
          <ul className="list-none p-0">
            {contentList.map((tech, index) => (
              <li key={index}>
                {tech.icon} <strong>{tech.title}</strong>: {tech.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-5 text-center">
        <Link 
          href={ctaLink}
          className="btn btn-primary py-sm-3 px-sm-5 rounded-pill mt-3"
        >
          {ctaText}
        </Link>
      </div>
    </section>
    </div>
  );
};

export default TalentPoolOverview;
