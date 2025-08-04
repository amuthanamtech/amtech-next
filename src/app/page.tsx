'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './SwiperOverrides.css'; // For custom arrow color
import Header from '@/components/Header';
import Service from '@/components/Service';
import FeatureListing from '@/components/FeatureListing';
import Projects from '@/components/Projects';
import AboutUs from '@/components/AboutUs';



const slideContent = [
  {
    image: "/assets/img/banner/banner2.jpg",
    title: "Project Excellence",
    description: "Discover our innovative project solutions tailored to your business needs.",
    button1: { text: "Read More", link: "/" },
    button2: { text: "Contact Us", link: "/contact" },
  },
  {
    image: "/assets/img/banner/banner4.jpg",
    title: "Digital Transformation",
    description: "Transform your digital presence with our cutting-edge solutions.",
    button1: { text: "Read More", link: "/" },
    button2: { text: "Contact Us", link: "/contact" },
  },
  {
    image: "/assets/img/banner/banner1.jpg",
    title: "Comprehensive Services",
    description: "Explore our wide range of professional services for your business.",
    button1: { text: "Read More", link: "/" },
    button2: { text: "Contact Us", link: "/contact" },
  },
  {
    image: "/assets/img/banner/bnner-ourservices.jpg",
    title: "Technical Expertise",
    description: "Leverage our technical expertise for your digital success.",
    button1: { text: "Read More", link: "/" },
    button2: { text: "Contact Us", link: "/contact" },
  },
  {
    image: "/assets/img/newimage/marvin-meyer-SYTO3xs06fU-unsplash.jpg",
    title: "Top Talent Solutions",
    description: "Access our pool of skilled professionals for your projects.",
    button1: { text: "Read More", link: "/" },
    button2: { text: "Contact Us", link: "/contact" },
  },
  {
    image: "/assets/img/banner/banner3.jpg",
    title: "Innovative Approaches",
    description: "Experience innovative approaches to digital challenges.",
    button1: { text: "Read More", link: "/" },
    button2: { text: "Contact Us", link: "/contact" },
  },
];

const featureList = [
  {
    title: "Sitecore Content Hub",
    description:
      "Unify content planning, collaboration, production, and management into one integrated hub. Deliver content at scale across channels, from this centralized hub, and streamline the entire content lifecycle.",
    icon: "fa-code",
    image: "/assets/img/sitecore/contenthub.webp",
    delay: "0.1s",
  },
  {
    title: "Sitecore Experience Platform",
    description:
      "Deliver a unique experience to each customer by accelerating personalization and auto-modifying page elements. Nurture customers better by combining data, AI, and marketing automation capabilities across channels.",
    icon: "fa-cogs",
    image: "/assets/img/sitecore/experienceplattform.webp",
    delay: "0.2s",
  },
  {
    title: "Sitecore Experience Commerce",
    description:
      "Support omnichannel commerce by creating custom storefront experience with this headless architecture. Sync this highly configurable platform with old and new technology ecosystems seamlessly.",
    icon: "fa-cloud",
    image: "/assets/img/sitecore/experiencecommerce.webp",
    delay: "0.3s",
  },
  {
    title: "Boxever",
    description:
      "Capture, unify, and activate customer data better with Sitecore’s Customer Data Platform. Use insights to transform your marketing efforts.",
    icon: "fa-chart-line",
    image: "/assets/img/sitecore/boxever.webp",
    delay: "0.4s",
  },
  {
    title: "OrderCloud",
    description:
      "Power custom eCommerce experience, order management, and digital marketplaces with an API-first, headless cloud platform, and create your own B2B, B2C, or B2X commerce store.",
    icon: "fa-chart-line",
    image: "/assets/img/sitecore/ordercloud.webp",
    delay: "0.4s",
  },
  {
    title: "Sitecore Send",
    description:
      "Sitecore Send is an email marketing automation tool offered by Sitecore. It helps businesses create, manage, and deliver personalized email campaigns to engage their customers effectively.",
    icon: "fa-chart-line",
    image: "/assets/img/sitecore/sitecoresend.png",
    delay: "0.4s",
  },
];

const serviceData = {
  title: "What Solutions We Provide",
  services: [
    {
      icon: "fa-user-tie",
      title: "Staffing Solution",
      description:
        "Focused on quality, we manage the staffing lifecycle from sourcing to post-placement support.",
      link: "/process",
      delay: "0.1s",
    },
    {
      icon: "fa-sitemap",
      title: "Content Management Systems (CMS)",
      description:
        "Implement and optimize CMS solutions for seamless content updates and management.",
      link: "/cms",
      delay: "0.1s",
    },
    {
      icon: "fa-chart-line",
      title: "SEO Optimization",
      description:
        "Optimize search rankings with quality backlinks and targeted keyword strategies.",
      link: "/seo",
      delay: "0.1s",
    },
    {
      icon: "fa-paint-brush",
      title: "Design & Development",
      description:
        "Create visually stunning and functional websites tailored to your business needs.",
      link: "/DesignDevelopment",
      delay: "0.3s",
    },
    {
      icon: "fa-wrench",
      title: "Maintenance & Support",
      description:
        "Ongoing website maintenance and support to ensure optimal performance and security.",
      link: "/MaintenanceSupport",
      delay: "0.5s",
    },
    {
      icon: "fa-lightbulb",
      title: "IT Consulting",
      description:
        "Expert advice and strategies to align technology with business goals.",
      link: "/consulting",
      delay: "0.3s",
    },
    {
      icon: "fa-mobile-alt",
      title: "App Development",
      description:
        "Design and develop intuitive mobile applications for iOS and Android platforms.",
      link: "/AppDevelopment",
      delay: "0.5s",
    },
  ],
};


const SwiperCarousel = () => {
  return (
    <main>
      <Header bgTransparent={false} isOverlay={false} />

      <div className="relative w-full h-[600px] lg:!mt-[100px]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 10000 }}
          loop
          className="h-full"
        >
          {slideContent.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                {/* Background Image */}
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover object-left md:object-center"
                />


                {/* Right-Aligned Banner */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center md:justify-end px-4 md:px-10 py-6">
<div className="text-white w-full md:max-w-md text-center md:text-right space-y-4 overflow-hidden px-4 lg:px-0 lg:mx-[300px]">
                    {/* Title + Description */}
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">
                      {slide.title}
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                      {slide.description}
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-row flex-wrap justify-center md:justify-end gap-4">
                      <a
                        href={slide.button1.link}
                        className="px-5 py-3 bg-secondary text-black hover:bg-gray-200 rounded-full font-semibold text-sm"
                      >
                        {slide.button1.text}
                      </a>
                      <a
                        href={slide.button2.link}
                        className="px-5 py-3 bg-white text-black hover:bg-gray-200 rounded-full font-semibold text-sm"
                      >
                        {slide.button2.text}
                      </a>
                    </div>

                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Rest of the content */}
      <div className="bg-white dark:bg-gray-900">
        <Service content={serviceData} />
        <FeatureListing
          title="What Sitecore Products Do We Support ?"
          features={featureList}
        />
        <AboutUs />
        <Projects />
      </div>
    </main>
  );
};


export default SwiperCarousel;