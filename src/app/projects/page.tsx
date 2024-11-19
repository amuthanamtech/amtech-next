import Layout from "@/components/layouts/DarkLayout";
import Projects from "@/components/Projects";
import HeroBanner from "@/components/HeroBanner";

export default function ProjectsPage() {
  const heroContent = {
    title:
      "Successfully Delivered Advanced Sitecore Solutions with Upgrades, Integrations, and Managed Services for Optimal Performance",
    description:
      "Completed multiple Sitecore projects, including upgrades, cloud migrations, content integration, and AI-powered solutions, ensuring scalability, security, and seamless user experiences across platforms.",
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
      src: "/assets/img/banner/banner-our-projects3.webp",
      alt: "Background Image",
    },
    imagePosition: "left" as const,
  };

  return (
    <Layout>
      <main>
        <HeroBanner content={heroContent} />
        <Projects />
      </main>
    </Layout>
  );
}
