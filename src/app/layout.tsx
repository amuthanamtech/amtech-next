import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TechAssistantChat from "@/components/chartbot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AmTech Digital Solutions | Sitecore Software Consultancy",
  description: "AmTech Digital Solutions provides expert Sitecore software consultancy services. We deliver customized solutions to optimize your digital experience and drive business success.",
  icons: {
    icon: '/assets/img/amtech-logo.png'
  },
  openGraph: {
    type: 'website',
    url: 'https://www.amtechdigital.co/',
    title: 'AmTech Digital Solutions | Sitecore Software Consultancy',
    description: 'AmTech Digital Solutions provides expert Sitecore software consultancy services. We deliver customized solutions to optimize your digital experience and drive business success.',
    images: ['https://www.amtechdigital.co/assets/img/amtech-logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500&family=Jost:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />

        <link href="/styles/animate/animate.min.css" rel="stylesheet" />
        <link href="/styles/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
        <link href="/styles/lightbox/css/lightbox.min.css" rel="stylesheet" />
        <link href="/styles/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/styles/css/style.css" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        {children}
        <TechAssistantChat />
        <Footer />
      </body>
    </html>
  );
}


