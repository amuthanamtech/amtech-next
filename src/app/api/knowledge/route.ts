import { NextRequest, NextResponse } from "next/server";

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    // In edge runtime, we need to use a different approach
    // The file is already available in the public directory or can be read directly
    const knowledgeContent = `# 🚀 AmTech Digital Solutions

**Accelerating Digital Excellence**  
Welcome to AmTech! We transform digital experiences through enterprise-grade Sitecore solutions tailored to your strategic goals. 💼➡️📈

## 🏆 About Us
*15+ Years | Sitecore Platinum Partner | 200+ Successful Implementations*  
AmTech specializes in composable DXPs, helping Fortune 500 companies and growth-focused enterprises across healthcare 🏥, finance 💰, and retail 🛒 sectors achieve digital excellence.

**Core Expertise:**
- 🥇 Sitecore MVP-led development teams
- 🧩 Composable DXP architecture
- 🤖 AI-powered personalization & search
- 🔒 Enterprise-grade security
- 🌍 24/7 global support

## 💼 Our Services

### 🌐 Web Experience
- **Enterprise Platforms:** Sitecore XP/XM Cloud implementations
- **Headless Architectures:** React/Vue.js frontends
- 🛒 **E-commerce:** Sitecore OrderCloud solutions
- ♿ **Accessibility:** WCAG 2.1 AA certified

### 📱 Mobile Solutions
- 📲 Native iOS/Android apps
- 🔄 Cross-platform (React Native/Flutter)
- 🧠 JSS-powered Sitecore mobile experiences
- 🔗 IoT integration capabilities

### 🔍 Digital Growth
- 🎯 SEO & content strategy
- 📊 Analytics implementation
- 🤖 Marketing automation
- 📣 Personalization engines

### ⚙️ Cloud & DevOps
- ☁️ XM Cloud/Azure migrations
- 🚀 CI/CD pipelines
- 📦 Containerization (Docker/Kubernetes)
- 👁️ Proactive monitoring

### 🛡️ Managed Services
- 🔄 Continuous optimization
- 🚨 24/7 emergency support
- 🔄 Version upgrades
- 📋 Compliance (GDPR/HIPAA)

## 🤝 Technology Partners
Sitecore Platinum Partner | Microsoft Gold | Coveo Expert

## 📞 Contact Us
- 📞 **Phone:** +971 502097409
- ✉️ **Email:** hr@amtechdigital.co
- 🌐 **Website:** https://www.amtechdigital.co
- 📍 **Locations:** US, UAE, India

Let's transform your digital future together!`;

    return NextResponse.json({ content: knowledgeContent });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Failed to load knowledge file" },
      { status: 500 }
    );
  }
}
