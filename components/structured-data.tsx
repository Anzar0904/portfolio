"use client";

import { useEffect } from "react";

export default function StructuredData() {
  useEffect(() => {
    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL ?? window.location.origin;
    const profileDescription =
      "AI Engineer from India building systems that scale ops, connect scattered workflows, reduce manual effort, and help teams move faster.";

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Mohammad Anzar Akhtar",
      jobTitle: "AI/ML Engineer & Full-Stack Developer",
      description: profileDescription,
      url: siteUrl,
      email: "anzar0904@gmail.com",
      nationality: "Indian",
      gender: "Male",
      address: {
        "@type": "PostalAddress",
        addressCountry: "India",
        addressLocality: "Lucknow",
      },
      sameAs: [
        "https://www.linkedin.com/in/mohammad-anzar-akhtar-b25397343",
        "https://github.com/Anzar0904",
      ],
      knowsAbout: [
        "Claude Code",
        "OpenAI Codex",
        "AI Automation n8n",
        "Context Engineering",
        "Strategy Building",
        "Operational Efficiency",
        "Agentic Engineering",
        "AI Agents",
        "Wireframing",
      ],
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "IILM University, Greater Noida",
          description: "Bachelor of Technology - BTech, Computer Science",
        },
        {
          "@type": "EducationalOrganization",
          name: "Lal Bahadur Shastri Smarak Jaym Sr School",
          description: "Senior Secondary Certificate, Computer Science",
        },
      ],
      worksFor: [
        {
          "@type": "Organization",
          name: "Growleads",
          description: "AI Engineering Intern",
        },
        {
          "@type": "Organization",
          name: "BrightCanvas",
          description: "n8n Lead Generation Specialist Intern",
        },
        {
          "@type": "Organization",
          name: "Oqulix",
          description: "AI Automation Engineer Intern",
        },
        {
          "@type": "Organization",
          name: "SGCA Technologies",
          description: "UI/UX Designer Intern",
        },
      ],
      award: [
        {
          "@type": "Award",
          name: "Finalist – Call2Code Hackathon, MUJ",
          description:
            "AI‑powered stock market dashboard with multilingual voice commands, real‑time analytics, and sentiment analysis. Selected as a finalist among 100+ teams.",
          dateAwarded: "2025-04",
        },
        {
          "@type": "Award",
          name: "Semi‑Finalist – BitBash, NIT Kurukshetra",
          description:
            "Developed a real‑world solution under 24‑hour constraints; recognized among the top‑performing teams.",
          dateAwarded: "2025-03",
        },
      ],
      hasOccupation: {
        "@type": "Occupation",
        name: "AI Engineer",
        description:
          "Building AI agents, automation workflows, and systems for scaling operations",
        skills: [
          "Claude Code",
          "OpenAI Codex",
          "AI Automation n8n",
          "Context Engineering",
          "Strategy Building",
          "Operational Efficiency",
          "Agentic Engineering",
          "AI Agents",
          "Wireframing",
        ],
      },
    };

    try {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);

      return () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    } catch (error) {
      console.error("Error adding structured data:", error);
    }
  }, []);

  return null;
}
