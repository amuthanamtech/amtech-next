import Layout from "@/components/layouts/LightLayout";
import HeroBanner from "@/components/HeroBanner";
import ContentBlock from "@/components/ContentBlock";

export default function MaintenanceSupportPage() {
    const heroContent = {
        title: "Maintenance & Support",
        description:
            "Ongoing website maintenance and support to ensure optimal performance and security.",
        readMoreButton: {
            text: "View Plans",
            link: "/plans",
        },
        contactButton: {
            text: "Get Support",
            link: "/contact",
        },
        image: {
            src: "",
            alt: "Maintenance & Support",
            width: 500,
            height: 500,
            enabled: false,
        },
        backgroundImage: {
           src: "/assets/img/newimage/fotis-fotopoulos-LJ9KY8pIH3E-unsplash.jpg",
            alt: "Website Maintenance",
        },
        imagePosition: "left" as const,
    };

    const contentBlock1 = {
        title: "Proactive Monitoring",
        subtitle: "24/7 vigilance for your digital assets",
        description: `
      <p>Our continuous monitoring system detects and resolves issues before they impact your users. We track uptime, performance metrics, and security threats around the clock.</p>
    `,
        button: {
            text: "View Monitoring Tools",
            link: "/monitoring",
        },
        image: {
            src: "/assets/img/newimage/luke-peters-B6JINerWMz0-unsplash.jpg",
            alt: "Website Monitoring",
            width: 800,
            height: 400,
        },
        imagePosition: "right" as const,
    };

    const contentBlock2 = {
        title: "Security Updates",
        subtitle: "Protecting your digital presence",
        description: `
      <p>Regular security patches, vulnerability scanning, and malware protection to safeguard your website against evolving threats and keep your data secure.</p>
    `,
        button: {
            text: "Security Features",
            link: "/security",
        },
        image: {
           src: "/assets/img/newimage/20945651.jpg",
            alt: "Security Updates",
            width: 800,
            height: 400,
        },
        imagePosition: "left" as const,
    };

    const contentBlock3 = {
        title: "Performance Optimization",
        subtitle: "Keeping your site fast and efficient",
        description: `
      <p>Regular tune-ups including database optimization, cache management, and resource optimization to maintain peak website performance and loading speeds.</p>
    `,
        button: {
            text: "Optimization Strategies",
            link: "/optimization",
        },
        image: {
          src: "/assets/img/newimage/pexels-kevin-ku-92347-577585.jpg",
            alt: "Performance Tuning",
            width: 800,
            height: 400,
        },
        imagePosition: "right" as const,
    };

    const contentBlock4 = {
        title: "Content & Backup Management",
        subtitle: "Safe and up-to-date",
        description: `
      <p>Regular content updates, database backups, and disaster recovery planning to ensure your information is current and protected against data loss.</p>
    `,
        button: {
            text: "Backup Solutions",
            link: "/backups",
        },
        image: {
            src: "/assets/img/newimage/marvin-meyer-SYTO3xs06fU-unsplash.jpg",
            alt: "Backup Management",
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