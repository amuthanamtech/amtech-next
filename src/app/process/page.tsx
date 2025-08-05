import Layout from "@/components/layouts/LightLayout";
import ContentBlock from "@/components/ContentBlock";
import HeroBanner from "@/components/HeroBanner";

export default function ServicePage() {
  const heroContent = {
    title:
      "Your Trusted Partner in Staffing Solutions",
    description:
      "At AmTech Digital Solutions, we streamline the staffing process to connect businesses with top-tier talent efficiently and seamlessly. Our transparent and client-focused approach ensures that each step, from initial consultation to post-placement support, is designed to meet your unique requirements while maintaining the highest standards of professionalism, compliance, and confidentiality. Whether it's contract staffing or permanent placements, we deliver results that empower your success.",
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
      src: "/assets/img/newimage/Process.png",
      alt: "Background Image",
    },
    imagePosition: "left" as const,
  };

  const contentBlock = {
    title: "Our Staffing Process",
    subtitle: "Streamlined Steps to Deliver the Right Talent for Your Needs",
    description: `
        <ol>
          <li>
              <div class="flex items-center">
                <div class="-top-6 -left-6 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold border-2 border-white shadow-lg">1</div>
                <h6 class="ml-4">Initial Consultation and Requirement Gathering:</h6>
              </div>
              <p>We begin with an in-depth consultation to understand the client's staffing needs, culture, and project requirements. This ensures that we are aligned with your expectations and can deliver candidates who are a perfect fit.</p>
          </li>
          <li>
              <div class="flex items-center">
                <div class="-top-6 -left-6 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold border-2 border-white shadow-lg">2</div>
                <h6 class="ml-4">Sourcing and Screening:</h6>
              </div>
              <p>Using a combination of our talent pool, industry connections, and recruitment platforms, we source candidates who match the skill set and experience level required. Our screening process includes initial interviews, technical assessments, and background checks.</p>
          </li>
          <li>
              <div class="flex items-center">
                <div class="-top-6 -left-6 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold border-2 border-white shadow-lg">3</div>
                <h6 class="ml-4">Interview Coordination:</h6>
              </div>
              <p>We schedule and facilitate interviews between shortlisted candidates and the client, providing full support with interview logistics and feedback follow-ups.</p>
          </li>
          <li>
              <div class="flex items-center">
                <div class="-top-6 -left-6 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold border-2 border-white shadow-lg">4</div>
                <h6 class="ml-4">Offer and Onboarding:</h6>
              </div>
              <p>Once a candidate is selected, we handle offer negotiation, employment contracts, and onboarding coordination to ensure a smooth transition into the client's team.</p>
          </li>
          <li>
              <div class="flex items-center">
                <div class="-top-6 -left-6 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold border-2 border-white shadow-lg">5</div>
                <h6 class="ml-4">Ongoing Support:</h6>
              </div>
              <p>We provide post-placement support to both the client and candidate, ensuring satisfaction and addressing any adjustments required for the best performance.</p>
          </li>
        </ol>        
    `,
    button: {
      text: "",
      link: "",
    },
    image: {
      src: "/assets/img/newimage/Experienced-Tech-Talent.png",
      alt: "Staffing Process Overview",
      width: 800,
      height: 400,
    },
    imagePosition: "right" as const,
  };

  const contentBlock2 = {
    title: "Terms and Conditions for Engagement",
    subtitle: "Clear Policies for Seamless Collaborations",
    description: `
          <ol>
              <li>
                  <h6>Engagement Types:</h6>
                  <p class="pl-5 pt-2"><strong>Contract Staffing:</strong> Flexible short or long-term engagements to meet your project needs.</p>
                  <p class="pl-5"><strong>Permanent Placement:</strong> Full-time hiring solutions tailored to your requirements.</p>
              </li>
              <li>
                  <h6>Fees and Payment Terms:</h6>
                  <p>Our fees are calculated as a percentage of the candidate's annual salary for permanent placements or an agreed hourly rate for contract staffing.</p>
                  <p>Payment terms: Net 30 days from the invoice date.</p>
              </li>
              <li>
                  <h6>Replacement Guarantee:</h6>
                  <p>We provide a guarantee period for all placements. If the candidate leaves or is found unsuitable within this period, we offer a replacement at no extra cost.</p>
              </li>
              <li>
                  <h6>Compliance and Confidentiality:</h6>
                  <p>We adhere to industry standards, legal requirements, and confidentiality agreements to protect client information and candidate privacy.</p>
              </li>
          </ol>      `,
    button: {
      text: "",
      link: "",
    },
    image: {
      src: "/assets/img/newimage/Experienced-Tech-Talent-Available-to-Hire.png", // Replace with your uploaded file path if needed
      alt: "Terms and Conditions for Engagement",
      width: 800,
      height: 400,
    },
    imagePosition: "left" as const,
  };

  return (
    <Layout>
      <main>
        <HeroBanner content={heroContent} />
        <ContentBlock content={contentBlock} />
        <ContentBlock content={contentBlock2} />
      </main>
    </Layout>
  );
}
