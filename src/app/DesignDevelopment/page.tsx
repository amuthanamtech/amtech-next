'use client';

import Layout from "@/components/layouts/LightLayout";
import HeroBanner from "@/components/HeroBanner";
import ContentBlock from "@/components/ContentBlock";

export default function DesignDevelopmentPage() {
    const heroContent = {
        title: "Design & Development",
        description:
            "Create visually stunning and functional websites tailored to your business needs.",
        readMoreButton: {
            text: "Our Projects",
            link: "/projects",
        },
        contactButton: {
            text: "Get a Quote",
            link: "/contact",
        },
        image: {
            src: "",
            alt: "Design & Development",
            width: 500,
            height: 500,
            enabled: false,
        },
        backgroundImage: {
           src: "/assets/img/newimage/19362653.jpg",
            alt: "Web Design & Development",
        },
        imagePosition: "left" as const,
    };

    const contentBlock1 = {
        title: "Custom Design",
        subtitle: "Unique and brand-aligned",
        description: `
      <p>We create designs that reflect your brand identity and engage your audience through intuitive interfaces and compelling visuals.</p>
    `,
        button: {
            text: "See Portfolio",
            link: "/portfolio",
        },
        image: {
            src: "/assets/img/newimage/joshua-reddekopp-GkFQEOubrCo-unsplash.jpg",
            alt: "Custom Web Design",
            width: 800,
            height: 400,
        },
        imagePosition: "right" as const,
    };


    const contentBlock2 = {
        title: "Responsive Development",
        subtitle: "Flawless on every device",
        description: `
            <p>Our websites are built with mobile-first principles to ensure perfect functionality across all screen sizes and devices.</p>
            <ul>
                <li>Cross-browser compatibility</li>
                <li>Mobile-first, fluid layouts</li>
                <li>Optimized touch and interaction design</li>
            </ul>
        `,
        button: {
            text: "Learn More",
            link: "/responsive",
        },
        image: {
            src: "/assets/img/newimage/content_filling_2.jpg",
            alt: "Responsive Development",
            width: 800,
            height: 400,
        },
        imagePosition: "left" as const,
    };

    const contentBlock3 = {
        title: "Performance Optimized",
        subtitle: "Lightning-fast loading",
        description: `
            <p>We optimize every aspect of your site from the ground up to ensure it loads fast and stays lean for high conversion rates.</p>
            <ul>
                <li>Image compression & lazy loading</li>
                <li>Code splitting and caching</li>
                <li>Core Web Vitals compliance</li>
            </ul>
        `,
        button: {
            text: "See Metrics",
            link: "/performance",
        },
        image: {
           src: "/assets/img/newimage/20945227.jpg",
            alt: "Performance Optimization",
            width: 800,
            height: 400,
        },
        imagePosition: "right" as const,
    };

    const contentBlock4 = {
        title: "SEO Friendly",
        subtitle: "Built to rank",
        description: `
            <p>We follow SEO best practices in both design and code, helping your business get found in search engines and reach more customers.</p>
            <ul>
                <li>Clean semantic HTML structure</li>
                <li>Optimized meta tags and sitemap</li>
                <li>Schema markup integration</li>
            </ul>
        `,
        button: {
            text: "SEO Services",
            link: "/seo",
        },
        image: {
           src: "/assets/img/newimage/20943761.jpg",
            alt: "SEO Friendly Development",
            width: 800,
            height: 400,
        },
        imagePosition: "left" as const,
    };

    const contentBlock5 = {
        title: "CMS Integration",
        subtitle: "Easy content management",
        description: `
            <p>We integrate modern CMS platforms like Sitecore, WordPress, or headless CMS solutions for easier content updates by your team.</p>
            <ul>
                <li>Custom components and templates</li>
                <li>Role-based access for content editors</li>
                <li>Sitecore JSS, Next.js, and GraphQL integrations</li>
            </ul>
        `,
        button: {
            text: "Explore CMS",
            link: "/cms",
        },
        image: {
           src: "/assets/img/newimage/4421964.jpg",
            alt: "CMS Integration",
            width: 800,
            height: 400,
        },
        imagePosition: "right" as const,
    };

    const contentBlock6 = {
        title: "Web & Mobile Apps",
        subtitle: "Cross-platform digital experiences",
        description: `
            <p>We design and build responsive web applications and hybrid mobile apps using React, Next.js, Flutter, and other cutting-edge tools.</p>
            <ul>
                <li>Single Page Applications (SPAs)</li>
                <li>Progressive Web Apps (PWAs)</li>
                <li>Android/iOS hybrid development</li>
            </ul>
        `,
        button: {
            text: "Our App Work",
            link: "/apps",
        },
        image: {
            src: "/assets/img/newimage/pexels-kevin-ku-92347-577585.jpg",
            alt: "Web & Mobile Applications",
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
                <ContentBlock content={contentBlock5} />
                <ContentBlock content={contentBlock6} />
            </main>
        </Layout>
    );
}
