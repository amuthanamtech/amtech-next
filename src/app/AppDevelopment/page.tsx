import Layout from "@/components/layouts/LightLayout";
import HeroBanner from "@/components/HeroBanner";
import ContentBlock from "@/components/ContentBlock";

export default function AppDevelopmentPage() {
    const heroContent = {
        title: "App Development",
        description:
            "Design and develop intuitive mobile applications for iOS and Android platforms with cutting-edge technology and user-centered design.",
        readMoreButton: {
            text: "View Portfolio",
            link: "/portfolio",
        },
        contactButton: {
            text: "Start a Project",
            link: "/contact",
        },
        image: {
            src: "/assets/img/newimage/4380747.jpg",
            alt: "App Development",
            width: 600,
            height: 500,
            enabled: true,
        },
        backgroundImage: {
             src: "/assets/img/newimage/4380747.jpg",
            alt: "Mobile App Development",
        },
        imagePosition: "left" as const,
    };

    const contentBlock1 = {
        title: "Cross-Platform Development",
        subtitle: "Reach both iOS and Android users simultaneously",
        description: `
      <p>Build once, deploy everywhere. Our cross-platform solutions using React Native and Flutter deliver native-like experiences while saving time and resources.</p>
      <ul>
        <li>80% code reuse between platforms</li>
        <li>Consistent brand experience across devices</li>
        <li>Faster time-to-market</li>
      </ul>
    `,
        button: {
            text: "See Cross-Platform Apps",
            link: "/cross-platform",
        },
        image: {
           src: "/assets/img/newimage/domenico-loia-hGV2TfOh0ns-unsplash.jpg",
            alt: "Cross-Platform Development",
            width: 800,
            height: 500,
        },
        imagePosition: "right" as const,
    };

    const contentBlock2 = {
        title: "Native App Development",
        subtitle: "Optimized performance for each platform",
        description: `
      <p>We create high-performance native apps using Swift for iOS and Kotlin for Android, leveraging platform-specific features for superior user experiences.</p>
      <ul>
        <li>Full access to device hardware capabilities</li>
        <li>Platform-specific UI/UX patterns</li>
        <li>Maximum performance optimization</li>
      </ul>
    `,
        button: {
            text: "Native Development Process",
            link: "/native",
        },
        image: {
            src: "/assets/img/newimage/Wavy_Tech-22_Single-06.jpg",
            alt: "Native App Development",
            width: 800,
            height: 500,
        },
        imagePosition: "left" as const,
    };

    const contentBlock3 = {
        title: "UI/UX Design",
        subtitle: "Intuitive interfaces that users love",
        description: `
      <p>Our design-first approach focuses on creating engaging, user-friendly interfaces with seamless navigation and delightful interactions.</p>
      <ul>
        <li>User journey mapping</li>
        <li>Interactive prototypes</li>
        <li>Accessibility compliance</li>
        <li>Motion design & micro-interactions</li>
      </ul>
    `,
        button: {
            text: "View Design Process",
            link: "/design",
        },
        image: {
            src: "/assets/img/newimage/Tiny-programmers-on-big-laptop-writing-script.jpg",
            alt: "App UI/UX Design",
            width: 800,
            height: 500,
        },
        imagePosition: "right" as const,
    };

    const contentBlock4 = {
        title: "App Maintenance & Updates",
        subtitle: "Keep your app performing flawlessly",
        description: `
      <p>We provide ongoing support including OS compatibility updates, feature enhancements, performance optimization, and bug fixes.</p>
      <ul>
        <li>Monthly performance reports</li>
        <li>Emergency bug fixes within 24 hours</li>
        <li>Regular security audits</li>
        <li>Feature roadmap planning</li>
      </ul>
    `,
        button: {
            text: "Maintenance Plans",
            link: "/maintenance",
        },
        image: {
            src: "/assets/img/newimage/pexels-kevin-ku-92347-577585.jpg",
            alt: "App Maintenance",
            width: 800,
            height: 500,
        },
        imagePosition: "left" as const,
    };

    const contentBlock5 = {
        title: "App Testing & Quality Assurance",
        subtitle: "Ensure flawless performance across devices",
        description: `
      <p>Comprehensive testing strategies covering functionality, performance, security, and usability across thousands of device configurations.</p>
      <ul>
        <li>Automated test scripts</li>
        <li>Real device testing lab</li>
        <li>Performance benchmarking</li>
        <li>Security vulnerability scanning</li>
      </ul>
    `,
        button: {
            text: "QA Process",
            link: "/testing",
        },
        image: {
           src: "/assets/img/newimage/joshua-reddekopp-GkFQEOubrCo-unsplash.jpg",
            alt: "App Testing",
            width: 800,
            height: 500,
        },
        imagePosition: "right" as const,
    };

    const contentBlock6 = {
        title: "Backend Integration",
        subtitle: "Seamless cloud services and API connections",
        description: `
      <p>Robust backend development and integration with existing systems, APIs, and third-party services for full-featured applications.</p>
      <ul>
        <li>Custom API development</li>
        <li>Cloud infrastructure setup</li>
        <li>Database design & optimization</li>
        <li>Real-time data synchronization</li>
      </ul>
    `,
        button: {
            text: "Integration Options",
            link: "/backend",
        },
        image: {
            src: "/assets/img/newimage/luke-peters-B6JINerWMz0-unsplash.jpg",
            alt: "Backend Integration",
            width: 800,
            height: 500,
        },
        imagePosition: "left" as const,
    };

    const techStackFeatures = [
        {
            icon: "react",
            title: "React Native",
            description: "Cross-platform framework for code efficiency"
        },
        {
            icon: "flutter",
            title: "Flutter",
            description: "Google's UI toolkit for beautiful native apps"
        },
        {
            icon: "swift",
            title: "Swift",
            description: "Modern iOS development with Apple's flagship language"
        },
        {
            icon: "kotlin",
            title: "Kotlin",
            description: "Preferred language for Android app development"
        },
        {
            icon: "firebase",
            title: "Firebase",
            description: "Backend services for rapid development"
        },
        {
            icon: "aws",
            title: "AWS Amplify",
            description: "Cloud-powered app backend and hosting"
        }
    ];

    const testimonials = [
        {
            quote: "Their app development team transformed our business concept into a polished product that exceeded our expectations. The user retention rate increased by 45% after launch.",
            author: "Sarah Johnson",
            role: "CEO, TechInnovate",
            avatar: "/demo image/avatar-sarah.jpg"
        },
        {
            quote: "The cross-platform approach saved us 40% in development costs while delivering identical experiences on both iOS and Android. Maintenance has been seamless.",
            author: "Michael Chen",
            role: "Product Director, FinTech Solutions",
            avatar: "/demo image/avatar-michael.jpg"
        }
    ];

    const ctaContent = {
        title: "Ready to Build Your Mobile Application?",
        subtitle: "Let's discuss your project requirements and create a custom development plan",
        buttons: [
            {
                text: "Schedule Consultation",
                link: "/schedule",
                variant: "primary"
            },
            {
                text: "View Case Studies",
                link: "/case-studies",
                variant: "secondary"
            }
        ]
    };

    return (
        <Layout>
            <main>
                <HeroBanner content={heroContent} />
                
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our App Development Process</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                            A structured approach that ensures quality, efficiency, and alignment with your business goals
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {[
                                {number: "01", title: "Discovery", description: "Requirement analysis & planning"},
                                {number: "02", title: "Design", description: "Wireframing & UI/UX prototyping"},
                                {number: "03", title: "Development", description: "Agile sprints & regular demos"},
                                {number: "04", title: "Deployment", description: "App store submission & launch"}
                            ].map((step, index) => (
                                <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                                    <div className="text-5xl font-bold text-blue-600 mb-4">{step.number}</div>
                                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                    <p className="text-gray-600">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                
                <ContentBlock content={contentBlock1} />
                <ContentBlock content={contentBlock2} />
                <ContentBlock content={contentBlock3} />
                <ContentBlock content={contentBlock4} />
                <ContentBlock content={contentBlock5} />
                <ContentBlock content={contentBlock6} />
                
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Technologies We Use</h2>
                        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
                            Leveraging modern tech stacks for high-performance mobile applications
                        </p>
                    </div>
                </section>
            </main>
        </Layout>
    );
}