import Layout from "@/components/layouts/LightLayout";
import AboutUs from "@/components/AboutUs";
import AboutUs2 from "@/components/AboutUs2";
import HeroBanner from "@/components/HeroBanner";

export default function AboutUsPage() {
  const heroContent = {
    title: "Driving Innovation and Empowering Businesses",
    description:
      "At AmTech Digital Solutions, we bridge the gap between cutting-edge technology and business success. With expertise in software development, digital transformation, and talent solutions, we are dedicated to crafting innovative strategies that drive growth and deliver measurable results for our clients worldwide.",
    readMoreButton: {
      text: "Read More",
      link: "/",
    },
    contactButton: {
      text: "Contact Us",
      link: "/contact",
    },
    image: {
      src: "/assets/img/aboutus/aboutus1.webp",
      alt: "Hero Banner",
      width: 600,
      height: 600,
      enabled: false,
    },
    backgroundImage: {
      src: "/assets/img/newimage/1.jpg",
      alt: "Background Image",
    },
    imagePosition: "left" as const,
  };

  // Example content object:
  const exampleContent = {
    title: "Welcome to AmTech Digital Solutions",
    description:
      "Empowering businesses with cutting-edge technology solutions and top-notch talent. We specialize in digital transformation, enterprise-grade software development, and innovative staffing solutions tailored to your needs.",
    image: {
      src: "/assets/img/newimage/2.jpg",
      alt: "AmTech Digital Solutions Team",
      position : "left" as const,
    },
    whoWeAre: {
      title: "Who We Are",
      description:
        "AmTech Digital Solutions is a leading software consultancy and talent provider specializing in delivering innovative technology services. With expertise in Sitecore, .NET, Node.js, JavaScript, Azure, AI/ML, and more, we are your trusted partner in achieving digital excellence.",
      technologies: [
        "Sitecore",
        ".NET",
        "Node.js",
        "JavaScript",
        "Azure",
        "AI/ML",
      ],
    },
    whatWeDo: {
      title: "What We Do",
      items: [
        "Custom Software Development tailored to business needs.",
        "Enterprise-grade solutions in Sitecore, .NET, Java, and Node.js.",
        "Specialized in modern frontend technologies like React, Angular, and Vue.js.",
        "Cloud-based development using Azure and AWS.",
        "Expert staffing solutions with pre-vetted professionals.",
      ],
    },
    cta: {
      text: "Contact Us Today",
      href: "#contact-us",
    },
  };

  return (
    <Layout>
      <main>
        <HeroBanner content={heroContent} />
        <AboutUs2 content={exampleContent} />
        <AboutUs />
      </main>
    </Layout>
  );
}
