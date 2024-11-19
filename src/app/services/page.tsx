import Layout from "@/components/layouts/DarkLayout";
import Service from "@/components/Service";
import HeroBanner from "@/components/HeroBanner";

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
      src: "/assets/img/banner/banner-our-services.jpg",
      alt: "Background Image",
    },
    imagePosition: "left" as const,
  };

  // Example usage data:
const serviceData = {
  title: "What Solutions We Provide",
  services: [
    {
      icon: "fa-user-tie",
      title: "Staffing Solution",
      description: "Focused on quality, we manage the staffing lifecycle from sourcing to post-placement support.",
      link: "",
      delay: "0.1s"
    },
    {
      icon: "fa-sitemap",
      title: "Content Management Systems (CMS)",
      description: "Implement and optimize CMS solutions for seamless content updates and management.",
      link: "",
      delay: "0.1s"
    },
    {
      icon: "fa-chart-line",
      title: "SEO Optimization",
      description: "Optimize search rankings with quality backlinks and targeted keyword strategies.",
      link: "/",
      delay: "0.1s"
    },
    {
      icon: "fa-paint-brush",
      title: "Design & Development",
      description: "Create visually stunning and functional websites tailored to your business needs.",
      link: "",
      delay: "0.3s"
    },
    {
      icon: "fa-wrench",
      title: "Maintenance & Support",
      description: "Ongoing website maintenance and support to ensure optimal performance and security.",
      link: "",
      delay: "0.5s"
    },
    {
      icon: "fa-lightbulb",
      title: "IT Consulting",
      description: "Expert advice and strategies to align technology with business goals.",
      link: "",
      delay: "0.3s"
    },
    {
      icon: "fa-mobile-alt",
      title: "App Development",
      description: "Design and develop intuitive mobile applications for iOS and Android platforms.",
      link: "",
      delay: "0.5s"
    }
  ]
}

  return (
    <Layout>
      <main>
        <HeroBanner content={heroContent} />
        <Service content={serviceData} />
      </main>
    </Layout>
  );
}
