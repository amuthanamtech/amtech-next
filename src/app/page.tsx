import HeroBanner from "@/components/HeroBanner";
import FeatureListing from "@/components/FeatureListing";
import AboutUs from "@/components/AboutUs";
import Projects from "@/components/Projects";

export default function Home() {
  const heroContent = {
    title: "Transforming Digital Experiences with Innovation and Precision",
    description: "Leveraging the power of Sitecore, we create dynamic, personalized digital experiences that drive engagement and growth. Our team of skilled architects and developers bring creativity and intelligence to every project, ensuring top-notch solutions tailored to your unique needs.",
    readMoreButton: {
      text: "Read More",
      link: "/"
    },
    contactButton: {
      text: "Contact Us",
      link: "/contact"
    },
    image: {
      src: "/assets/img/hero.png",
      alt: "Hero Banner",
      width: 500,
      height: 500
    },
    backgroundImage: {
      src: "/assets/img/banner/background-purple.png",
      alt: "Background Image"
    }
  };

  return (
    <main>
      <HeroBanner content={heroContent} />
      <FeatureListing />
      <AboutUs />
      <Projects />
    </main>
  );
}