import Layout from "@/components/layouts/LightLayout";
import HeroBanner from "@/components/HeroBanner";
import ContentBlock from "@/components/ContentBlock";

export default function SEOOptimizationPage() {
    const heroContent = {
        title: "SEO Optimization",
        description:
            "Optimize search rankings with quality backlinks and targeted keyword strategies.",
        readMoreButton: {
            text: "Our Strategies",
            link: "/strategies",
        },
        contactButton: {
            text: "Free Audit",
            link: "/audit",
        },
        image: {
            src: "",
            alt: "SEO Optimization",
            width: 500,
            height: 500,
            enabled: false,
        },
        backgroundImage: {
            src: "/assets/img/newimage/pakata-goh-EJMTKCZ00I0-unsplash.jpg",
            alt: "Search Engine Optimization",
        },
        imagePosition: "left" as const,
    };

    const contentBlock1 = {
        title: "Keyword Strategy",
        subtitle: "Target the right audience with precision",
        description: `
      <p>We conduct comprehensive keyword research to identify high-value search terms that drive qualified traffic to your business, focusing on buyer intent and conversion potential.</p>
    `,
        button: {
            text: "Keyword Analysis",
            link: "/keyword-analysis",
        },
        image: {
            src: "/assets/img/newimage/20943761.jpg",
            alt: "Keyword Research",
            width: 800,
            height: 400,
        },
        imagePosition: "right" as const,
    };

    const contentBlock2 = {
        title: "Quality Backlinks",
        subtitle: "Build authority and domain strength",
        description: `
      <p>Our strategic link-building approach secures high-authority backlinks from reputable sources to boost your domain authority and search rankings.</p>
    `,
        button: {
            text: "Link Building",
            link: "/backlinks",
        },
        image: {
             src: "/assets/img/newimage/fotis-fotopoulos-LJ9KY8pIH3E-unsplash.jpg",
            alt: "Quality Backlinks",
            width: 800,
            height: 400,
        },
        imagePosition: "left" as const,
    };

    const contentBlock3 = {
        title: "Technical SEO",
        subtitle: "Optimize your website's foundation",
        description: `
      <p>We improve crawlability, indexing, and site architecture through structured data implementation, schema markup, and performance optimization.</p>
    `,
        button: {
            text: "Technical Audit",
            link: "/technical-seo",
        },
        image: {
            src: "/assets/img/newimage/hal-gatewood-tZc3vjPCk-Q-unsplash.jpg",
            alt: "Technical SEO",
            width: 800,
            height: 400,
        },
        imagePosition: "right" as const,
    };

    const contentBlock4 = {
        title: "Performance Analytics",
        subtitle: "Data-driven optimization decisions",
        description: `
      <p>Track keyword rankings, traffic sources, and conversion metrics with comprehensive reporting and actionable insights for continuous improvement.</p>
    `,
        button: {
            text: "View Reports",
            link: "/analytics",
        },
        image: {
            src: "/assets/img/newimage/20945651.jpg",
            alt: "SEO Analytics",
            width: 800,
            height: 400,
        },
        imagePosition: "left" as const,
    };

    return (
        <Layout>
            <main>
                <HeroBanner content={heroContent} />
                <ContentBlock content={contentBlock1} />
                <ContentBlock content={contentBlock2} />
                <ContentBlock content={contentBlock3} />
                <ContentBlock content={contentBlock4} />
            </main>
        </Layout>
    );
}