import Layout from "@/components/layouts/DarkLayout";
import Service from "@/components/Service";
import HeroBanner from "@/components/HeroBanner";
import Header from "@/components/Header";

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
      src: "/assets/img/banner/banner-top-talents.jpg",
      alt: "Background Image",
    },
    imagePosition: "left" as const,
  };

  return (
    <Layout>
      <main>
        <Header />
        <HeroBanner content={heroContent} />
        <Service />
      </main>
    </Layout>
  );
}
