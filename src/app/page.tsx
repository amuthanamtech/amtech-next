"use client";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import FeatureListing from "@/components/FeatureListing";
import AboutUs from "@/components/AboutUs";
import Projects from "@/components/Projects";
import Service from "@/components/Service";
import { useEffect, useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Home() {
  const baseHeroContent = {
    title: "Transforming Digital Experiences with Innovation and Precision",
    description:
      "Leveraging the power of Sitecore, we create dynamic, personalized digital experiences that drive engagement and growth. Our team of skilled architects and developers bring creativity and intelligence to every project, ensuring top-notch solutions tailored to your unique needs.",
    readMoreButton: {
      text: "Read More",
      link: "/",
    },
    contactButton: {
      text: "Contact Us",
      link: "/contact",
    },
    image: {
      src: "",
      alt: "Hero Banner",
      width: 500,
      height: 500,
      enabled: false,
    },
    backgroundImage: {
      src: "",
      alt: "Background Image",
    },
    imagePosition: "left" as const,
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">("right");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Define slides with images and custom content
  const carouselSlides = [
    {
      image: "/assets/img/banner/bnner-ourprojects.jpg",
      content: {
        ...baseHeroContent,
        title: "Project Excellence",
        description: "Discover our innovative project solutions tailored to your business needs.",
        link: "www.google.com"
      }
    },
    {
      image: "/assets/img/newimage/domenico-loia-hGV2TfOh0ns-unsplash.jpg",
      content: {
        ...baseHeroContent,
        title: "Digital Transformation",
        description: "Transform your digital presence with our cutting-edge solutions."
      }
    },
    {
      image: "/assets/img/banner/bnner-ourservices.jpg",
      content: {
        ...baseHeroContent,
        title: "Comprehensive Services",
        description: "Explore our wide range of professional services for your business."
      }
    },
    {
      image: "/assets/img/newimage/fotis-fotopoulos-LJ9KY8pIH3E-unsplash.jpg",
      content: {
        ...baseHeroContent,
        title: "Technical Expertise",
        description: "Leverage our technical expertise for your digital success."
      }
    },
    {
      image: "/assets/img/banner/banner-top-talents.jpg",
      content: {
        ...baseHeroContent,
        title: "Top Talent Solutions",
        description: "Access our pool of skilled professionals for your projects."
      }
    },
    {
      image: "/assets/img/newimage/marvin-meyer-SYTO3xs06fU-unsplash.jpg",
      content: {
        ...baseHeroContent,
        title: "Innovative Approaches",
        description: "Experience innovative approaches to digital challenges."
      }
    }
  ];

  const AUTO_SLIDE_INTERVAL = 10000; // 10 seconds between slides
  const TRANSITION_DURATION = 10000;   // 1 second for animation

  // Start the auto-slide interval
  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setSlideDirection("right");
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, AUTO_SLIDE_INTERVAL);
  };

  // Clear interval when component unmounts or when user interacts
  const clearAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startInterval();
    return () => clearAutoSlide();
  }, []);

  const goToSlide = (index: number, direction: "left" | "right") => {
    setSlideDirection(direction);
    setCurrentSlide(index);
    clearAutoSlide();
    if (!isHovering) {
      setTimeout(startInterval, 2000); // Restart after delay
    }
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % carouselSlides.length, "right");
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + carouselSlides.length) % carouselSlides.length, "left");
  };

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

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  return (
    <main className="dark relative">
      {/* Hero Section with Carousel Background */}
      <div className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
        {/* Background Carousel with Left-to-Right Animation */}
        <div
          className="absolute top-0 left-0 w-full h-full -z-10"
          onMouseEnter={() => {
            setIsHovering(true);
            clearAutoSlide();
          }}
          onMouseLeave={() => {
            setIsHovering(false);
            startInterval();
          }}
        >
          {carouselSlides.map((slide, index) => {
            // Determine animation class based on direction
            let animationClass = "";
            if (index === currentSlide) {
              animationClass = slideDirection === "right"
                ? "animate-[slideInRight_1s]"
                : "animate-[slideInLeft_1s]";
            }

            return (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full mt-[100px] transition-all duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                  } ${animationClass}`}

                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* 🧱 Set overlay with lower z-index */}
                <div className="absolute inset-0 bg-black/40 z-0"></div>

                {/* 🧱 Set content to be above overlay */}
                <div className="relative z-10 mt-[-200px]">
                  <HeroBanner content={slide.content} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4 z-20">
          <button
            onClick={prevSlide}
            className="bg-white/30 hover:bg-white/50 text-white p-3 rounded-full backdrop-blur-sm transition-all"
            aria-label="Previous slide"
          >
            <FaChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white/30 hover:bg-white/50 text-white p-3 rounded-full backdrop-blur-sm transition-all"
            aria-label="Next slide"
          >
            <FaChevronRight size={24} />
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index, index > currentSlide ? "right" : "left")}
              className={`w-3 h-3 rounded-full transition-all ${currentSlide === index
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/70'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <Header bgTransparent={false} isOverlay={false} />
        <div className="container mx-auto mt-5 px-4 h-full flex items-center pt-16">
        </div>
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

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
          .animate-\\[slideInRight_1s\\] {
          animation: slideInRight ${TRANSITION_DURATION}ms ease-in-out;
        }
        
        .animate-\\[slideInLeft_1s\\] {
          animation: slideInLeft ${TRANSITION_DURATION}ms ease-in-out;
        }
      `}</style>
    </main>
  );
}
