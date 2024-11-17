import Layout from "@/components/layouts/DarkLayout";
import AboutUs from "@/components/AboutUs";
import HeroBanner from "@/components/HeroBanner";

export default function AboutUsPage() {
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
    },
    backgroundImage: {
      src: "/assets/img/banner/background-purple.png",
      alt: "Background Image",
    },
    imagePosition: "right",
  };
  return (
    <Layout>
      <main>
        <HeroBanner content={heroContent} />
        <AboutUs />
      </main>
    </Layout>
  );
}
