import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import FeatureListing from "@/components/FeatureListing";
import AboutUs from "@/components/AboutUs";
import Projects from "@/components/Projects";
import Service from "@/components/Service";

export default function Home() {
  const heroContent = {
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
      src: "/assets/img/hero.png",
      alt: "Hero Banner",
      width: 500,
      height: 500,
      enabled: false,
    },
    backgroundImage: {
      src: "/assets/img/banner/bnner-ourprojects.jpg",
      alt: "Background Image",
    },
    imagePosition: "left" as const,
  };

  const featureList = [
    {
      title: "Sitecore Content Hub",
      description:
        "Unify content planning, collaboration, production, and management into one integrated hub. Deliver content at scale across channels, from this centralized hub, and streamline the entire content lifecycle.",
      icon: "fa-code",
      image: "/assets/img/sitecore/contenthub.webp", // Replace with actual image paths
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
  // Example usage data:
  const serviceData = {
    title: "What Solutions We Provide",
    services: [
      {
        icon: "fa-user-tie",
        title: "Staffing Solution",
        description:
          "Focused on quality, we manage the staffing lifecycle from sourcing to post-placement support.",
        link: "",
        delay: "0.1s",
      },
      {
        icon: "fa-sitemap",
        title: "Content Management Systems (CMS)",
        description:
          "Implement and optimize CMS solutions for seamless content updates and management.",
        link: "",
        delay: "0.1s",
      },
      {
        icon: "fa-chart-line",
        title: "SEO Optimization",
        description:
          "Optimize search rankings with quality backlinks and targeted keyword strategies.",
        link: "/",
        delay: "0.1s",
      },
      {
        icon: "fa-paint-brush",
        title: "Design & Development",
        description:
          "Create visually stunning and functional websites tailored to your business needs.",
        link: "",
        delay: "0.3s",
      },
      {
        icon: "fa-wrench",
        title: "Maintenance & Support",
        description:
          "Ongoing website maintenance and support to ensure optimal performance and security.",
        link: "",
        delay: "0.5s",
      },
      {
        icon: "fa-lightbulb",
        title: "IT Consulting",
        description:
          "Expert advice and strategies to align technology with business goals.",
        link: "",
        delay: "0.3s",
      },
      {
        icon: "fa-mobile-alt",
        title: "App Development",
        description:
          "Design and develop intuitive mobile applications for iOS and Android platforms.",
        link: "",
        delay: "0.5s",
      },
    ],
  };

  return (
    <main className="dark">
      <Header bgTransparent={true} isOverlay={true} />
      <HeroBanner content={heroContent} />
      <Service content={serviceData} />
      <FeatureListing
        title="What Sitecore Products Do We Support ?"
        features={featureList}
      />
      <AboutUs />
      <Projects />
    </main>
  );
}
