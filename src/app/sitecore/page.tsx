import Layout from "@/components/layouts/LightLayout";
import ContentBlock from "@/components/ContentBlock";
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
      src: "/",
      alt: "Hero Banner",
      width: 500,
      height: 500,
      enabled: false,
    },
    backgroundImage: {
      src: "/assets/img/sitecore/sitecore-consulting-implementation.webp",
      alt: "Background Image",
    },
    imagePosition: "left" as const,
  };

  const contentBlock1 = {
    title: "Sitecore Consulting and Implementation",
    subtitle: "Let us take care of developmental and infrastructural challenges.",
    description: `
        <p>Whether you’re just starting with Sitecore or optimizing your existing implementation, our expert consultants ensure a seamless and scalable solution. From architecture design to custom integrations, we provide comprehensive services to help you leverage Sitecore’s full potential. We take care of the complexities, so you can focus on driving results.</p>
    `,
    button: {
      text: "",
      link: "",
    },
    image: {
      src: "/assets/img/newimage/Experienced-Tech-Talent-Available-to-Hire.png",
      alt: "Sitecore Consulting and Implementation",
      width: 800,
      height: 400
    },
    imagePosition: "right" as const
};

const contentBlock2 = {
  title: "Sitecore Upgrade",
  subtitle: "Let us help you move to the latest version of the DXP – Sitecore 10.",
  description: `
      <p>Stay ahead of the curve with the latest advancements in Sitecore technology. Our team specializes in seamless upgrades, ensuring you take full advantage of Sitecore 10’s enhanced features, improved performance, and advanced capabilities, without any disruptions to your business.</p>
  `,
  button: {
    text: "",
    link: "",
  },
  image: {
    src: "/assets/img/sitecore/sitecore-upgrade.webp",
    alt: "Sitecore Upgrade to Sitecore 10",
    width: 800,
    height: 400
  },
  imagePosition: "left" as const
};

const contentBlock3 = {
  title: "Sitecore Managed Services",
  subtitle: "Let us handle the everyday stuff and think of us as an extension to your in-house team.",
  description: `
      <p>Our Sitecore Managed Services are designed to support your platform day-to-day, offering proactive monitoring, maintenance, updates, and troubleshooting. With our dedicated support, you’ll have peace of mind knowing your Sitecore platform is running smoothly, so you can focus on scaling your business.</p>
  `,
  button: {
    text: "",
    ink: "",
  },
  image: {
    src: "/assets/img/sitecore/sitecore-managed-services.webp",
    alt: "Sitecore Managed Services",
    width: 800,
    height: 400
  },
  imagePosition: "right" as const
};

const contentBlock4 = {
  title: "Sitecore Marketing & Digital Strategy",
  subtitle: "Let us help you figure out strategy, requirements, roadmaps, and business needs.",
  description: `
      <p>Our Sitecore-certified experts work alongside your marketing teams to develop effective strategies tailored to your unique business goals. From defining clear requirements to creating actionable roadmaps, we ensure your digital strategy aligns with both your customer needs and business objectives.</p>
  `,
  button: {
    text: "",
    link: "",
  },
  image: {
    src: "/assets/img/sitecore/sitecore-marketing-strategy.webp",
    alt: "Sitecore Marketing & Digital Strategy",
    width: 800,
    height: 400
  },
  imagePosition: "left" as const
};

const contentBlock5 = {
  title: "Sitecore OrderCloud",
  subtitle: "Let us take care of developmental and infrastructural challenges.",
  description: `
      <p>Simplify and scale your eCommerce operations with Sitecore OrderCloud. Whether you need B2B, B2C, or multi-channel eCommerce solutions, our team ensures a robust and flexible implementation. From integration to custom development, we provide end-to-end support for a streamlined eCommerce experience.</p>
  `,
  button: {
    text: "",
    link: "",
  },
  image: {
    src: "/assets/img/sitecore/sitecore-ordercloud.webp",
    alt: "Sitecore OrderCloud eCommerce Solutions",
    width: 800,
    height: 400
  },
  imagePosition: "right" as const
};

const contentBlock6 = {
  title: "Sitecore Discover",
  subtitle: "Let us take care of developmental and infrastructural challenges.",
  description: `
      <p>Unlock deep customer insights with Sitecore Discover. This powerful tool helps you understand customer behavior and personalize experiences across channels. Our team will handle the integration and customization, enabling you to make data-driven decisions that enhance customer engagement and drive conversion.</p>
  `,
  button: {
    text: "",
    link: "",
  },
  image: {
    src: "/assets/img/sitecore/sitecore-discover.webp",
    alt: "Sitecore Discover Insights and Personalization",
    width: 800,
    height: 400
  },
  imagePosition: "left" as const
};

const contentBlock7 = {
  title: "Sitecore Content Hub",
  subtitle: "Deliver content at scale across channels, from this centralized hub, and streamline the entire content lifecycle.",
  description: `
      <p>Manage and deliver consistent, personalized content at scale with Sitecore Content Hub. Our team will help you centralize content creation, storage, and distribution across channels to ensure your messages are always aligned with customer expectations. Streamline the entire content lifecycle, from ideation to publishing.</p>
  `,
  button: {
    text: "",
    link: "",
  },
  image: {
    src: "/assets/img/sitecore/sitecore-content-hub.webp",
    alt: "Sitecore Content Hub Centralized Content Management",
    width: 800,
    height: 400
  },
  imagePosition: "right" as const
};

const contentBlock8 = {
  title: "Sitecore XM Cloud",
  subtitle: "The headless, cloud-native SaaS CMS that meets all your expectations.",
  description: `
      <p>Future-proof your content management with Sitecore XM Cloud, a headless, cloud-native CMS built to handle the most complex digital experiences. We’ll help you implement this flexible platform to create and manage content across multiple channels, all while offering scalability, security, and faster time-to-market.</p>
  `,
  button: {
    text: "",
    link: "/sitecore-xm-cloud",
  },
  image: {
    src: "/assets/img/newimage/Experienced-Tech-Talent-Available.png",
    alt: "Sitecore XM Cloud Headless CMS",
    width: 800,
    height: 400
  },
  imagePosition: "left" as const
};

const contentBlock9 = {
  title: "Sitecore Personalize from xDB",
  subtitle: "Trade-off conventional personalization with AI-powered personalization in just $30K.",
  description: `
      <p>Unlock the power of AI-driven personalization with Sitecore Personalize. Powered by xDB, this solution allows you to deliver hyper-relevant experiences across all touchpoints. In just $30K, we’ll help you implement intelligent personalization, enhancing customer engagement and driving conversions like never before.</p>
  `,
  button: {
    text: "",
    link: "",
  },
  image: {
    src: "/assets/img/newimage/Experienced-Tech-Talent.png",
    alt: "Sitecore Personalize with xDB",
    width: 800,
    height: 400
  },
  imagePosition: "right" as const
};


  return (
    <Layout>
      <main>
        <HeroBanner content={heroContent} />
        <ContentBlock content={contentBlock1} />
        <ContentBlock content={contentBlock2} />
        <ContentBlock content={contentBlock3} />
        <ContentBlock content={contentBlock4} />
        <ContentBlock content={contentBlock5} />
        <ContentBlock content={contentBlock6} />
        <ContentBlock content={contentBlock7} />
        <ContentBlock content={contentBlock8} />
        <ContentBlock content={contentBlock9} />
      </main>
    </Layout>
  );
}
