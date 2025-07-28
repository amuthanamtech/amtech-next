import Layout from "@/components/layouts/DarkLayout";
import Service from "@/components/Service";
import HeroBanner from "@/components/HeroBanner";
import ContentBlock2 from "@/components/ContentBlock2";

export default function ServicePage() {
  const heroContent = {
    title:
      "High-Quality  Talent for Immediate Placement – Tailored for Your IT Needs",
    description:
      " We understand the importance of finding the right talent quickly and effectively, and we are well-equipped to provide highly skilled professionals for your organization.",
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
      src: "/assets/img/banner/banner_our_talents.jpg",
      alt: "Background Image",
    },
    imagePosition: "left" as const,
  };

  const talentPoolContent = {
    title: "Empowering Businesses with a Versatile Talent Pool",
    description:
      "At AmTech Digital Solutions, we take pride in our diverse and highly skilled talent pool. From seasoned developers to innovative thinkers, our team is equipped to tackle complex challenges and drive business growth across industries.",
    imagePath: "/assets/img/talents/talent-pool.webp",
    imageAlt: "Tech Talent Pool Overview",
    contentList: [
      {
        icon: "🌐",
        title: "Sitecore & Content Hub",
        description:
          "Expertise in Sitecore XP, XM Cloud, SXA, and advanced content strategies.",
      },
      {
        icon: "🌥️",
        title: "Sitecore XM Cloud",
        description:
          "Specialized in Sitecore XM Cloud solutions, delivering headless CMS implementations and seamless integration with enterprise platforms.",
      },
      {
        icon: "🛍️",
        title: "BigCommerce",
        description:
          "Proficient in developing and customizing BigCommerce storefronts, integrating APIs, and enhancing user shopping experiences.",
      },
      {
        icon: "⚡",
        title: "Next.js",
        description:
          "Experienced in building fast and SEO-friendly web applications using Next.js, with optimized server-side rendering and API integration.",
      },
      {
        icon: "💻",
        title: ".NET Development",
        description:
          "Skilled in creating scalable, enterprise-grade solutions with .NET Core and .NET Framework.",
      },
      {
        icon: "⚛️",
        title: "JavaScript Frameworks",
        description:
          "Mastery in Angular, React, and Vue.js for building dynamic frontend applications.",
      },
      {
        icon: "🔧",
        title: "Node.js",
        description:
          "Proficient in backend development for real-time and scalable applications.",
      },
      {
        icon: "☁️",
        title: "Azure & AWS",
        description:
          "Hands-on experience in cloud solutions for hosting, DevOps, and AI services.",
      },
      {
        icon: "🤖",
        title: "Python & AI/ML",
        description:
          "Specializing in data-driven solutions and advanced analytics.",
      },
      {
        icon: "🚀",
        title: "DevOps",
        description:
          "CI/CD pipelines, containerization (Docker), and orchestration (Kubernetes).",
      },
      {
        icon: "🎨",
        title: "Frontend Technologies",
        description: "HTML5, CSS3, SCSS, and modern UI/UX practices.",
      },
      {
        icon: "🔍",
        title: "Search Integration",
        description: "Expertise in Elasticsearch, Solr, and Coveo.",
      },
      {
        icon: "🛒",
        title: "E-commerce Platforms",
        description:
          "Experience in custom e-commerce implementations and integrations.",
      },
      {
        icon: "☕",
        title: "Java & Java Frameworks",
        description:
          "Expertise in building enterprise-grade applications with Java, Spring Boot, Hibernate, and Microservices architecture.",
      },
      {
        icon: "📊",
        title: "SQL & Database Management",
        description:
          "Hands-on experience in designing and managing SQL databases, including performance tuning, stored procedures, and database migrations.",
      },
    ],
    ctaText: "Contact Us Now",
    ctaLink: "#contact-us",
  };
  // Example usage data:
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
  return (
    <Layout>
      <main>
        <HeroBanner content={heroContent} />
        <ContentBlock2 {...talentPoolContent} />
        <Service content={serviceData} />
      </main>
    </Layout>
  );
}
