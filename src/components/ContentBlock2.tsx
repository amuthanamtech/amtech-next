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
    <div className="container mx-auto px-4 py-10 my-16 border border-blue-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <section id="talent-pool-overview" className="bg-[#f8f9fa] p-6 sm:p-10">
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-semibold">{title}</h2>
          <p className="text-base sm:text-lg text-[#555] mt-2">
            {description}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8 mt-8">
          <div className="w-full lg:w-1/2">
            <Image
              src="/assets/img/newimage/image5.jpg"
              alt={imageAlt}
              width={800}
              height={400}
              className="w-full h-auto rounded-md object-cover"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <h3 className="text-xl font-semibold mb-4">Key contentList and Expertise</h3>
            <ul className="list-none space-y-2">
              {contentList.map((tech, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span>{tech.icon}</span>
                  <span>
                    <strong>{tech.title}</strong>: {tech.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href={ctaLink}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition-colors duration-200"
          >
            {ctaText}
          </Link>
        </div>
      </section>
    </div>

  );
};

export default TalentPoolOverview;
