import Layout from "@/components/layouts/LightLayout";
import HeroBanner from "@/components/HeroBanner";
import ContentBlock from "@/components/ContentBlock";

export default function CMSPage() {
    const heroContent = {
        title: "Dynamic CMS Page – Built for Your Digital Strategy",
        description:
            "This content is fully manageable and structured like a software company site. The layout includes a hero section and multiple feature blocks, ideal for CMS integration.",
        readMoreButton: {
            text: "Explore Services",
            link: "/services",
        },
        contactButton: {
            text: "Contact Us",
            link: "/contact",
        },
        image: {
            src: "",
            alt: "Hero Banner",
            width: 500,
            height: 500,
            enabled: false,
        },
        backgroundImage: {
           src: "/assets/img/newimage/4421964.jpg",
            alt: "CMS Hero Background",
        },
        imagePosition: "left" as const,
    };

    const contentBlock1 = {
        title: "Easy Content Editing",
        subtitle: "Update your website content without touching the codebase.",
        description: `
      <p>With our CMS integration, you can update text, images, and layouts in real-time. Whether you're launching a new product or updating blog content, it's all just a few clicks away.</p>
    `,
        button: {
            text: "Learn More",
            link: "/cms/editing",
        },
        image: {
             src: "/assets/img/newimage/fotis-fotopoulos-LJ9KY8pIH3E-unsplash.jpg",
            alt: "CMS Editing Interface",
            width: 800,
            height: 400,
        },
        imagePosition: "right" as const,
    };

    const contentBlock2 = {
        title: "Component-Based Layout",
        subtitle: "Design once, use anywhere.",
        description: `
      <p>Our CMS supports reusable components like banners, content blocks, and testimonial sliders. Design your blocks once and use them across multiple pages with just a click.</p>
    `,
        button: {
            text: "View Components",
            link: "/components",
        },
        image: {
           src: "/assets/img/newimage/luke-peters-B6JINerWMz0-unsplash.jpg",
            alt: "Component Layout",
            width: 800,
            height: 400,
        },
        imagePosition: "left" as const,
    };

    const contentBlock3 = {
        title: "Headless Architecture",
        subtitle: "Flexible, fast, and scalable.",
        description: `
      <p>Use our CMS with any frontend — React, Vue, Next.js, or native mobile. Our headless backend ensures lightning-fast delivery and total freedom of design.</p>
    `,
        button: {
            text: "Explore Headless",
            link: "/headless",
        },
        image: {
             src: "/assets/img/newimage/pakata-goh-EJMTKCZ00I0-unsplash.jpg",
            alt: "Headless CMS Model",
            width: 800,
            height: 400,
        },
        imagePosition: "right" as const,
    };

    const contentBlock4 = {
        title: "Real-Time Previews",
        subtitle: "See your changes before you publish.",
        description: `
      <p>Our CMS provides instant visual feedback while editing. Preview your page exactly as it will appear — even before hitting publish.</p>
    `,
        button: {
            text: "Try Preview Mode",
            link: "/preview",
        },
        image: {
             src: "/assets/img/newimage/4421964.jpg",
            alt: "Live Preview",
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