import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { TextShimmer } from "@/components/ui/text-shimmer";
import { Typewriter } from "@/components/ui/typewriter";
import { TimeCounter } from "@/components/time-counter";

import { WorkItem } from "@/components/work-item";
import { ProjectListItem } from "@/components/project-list-item";
import { AchievementItem } from "@/components/achievement-item";
import { Dock } from "@/components/dock";
import { SkillsDraggable } from "@/components/skills-draggable";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  ScrollAnimation,
  FadeInText,
  SlideUp,
  SlideInLeft,
  SlideInRight,
} from "@/components/scroll-animation";

export default function Page() {
  return (
    <main className="min-h-dvh bg-grid pb-32 pt-6 dark:bg-neutral-950">
      <FadeInText>
        <nav className="mx-auto mb-4 flex w-full max-w-xl items-center justify-between px-4 md:px-6 lg:px-8 text-xs text-neutral-600 dark:text-neutral-300">
          <Link
            href="#"
            className="font-semibold text-neutral-900 dark:text-neutral-50"
          >
            karan.
          </Link>
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="#experience"
              className="hover:text-neutral-900 dark:hover:text-neutral-50 text-xs sm:text-xs"
            >
              experience
            </a>
            <a
              href="#projects"
              className="hover:text-neutral-900 dark:hover:text-neutral-50 text-xs sm:text-xs"
            >
              projects
            </a>
            <ThemeToggle />
          </div>
        </nav>
      </FadeInText>

      <div className="mx-auto max-w-xl px-4 md:px-6 lg:px-8">
        <article
          aria-label="Portfolio"
          className="relative rounded-2xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-950"
        >
          <div className="p-4 md:p-6 lg:p-6">
            {/* Header */}

            <SlideUp>
              <header id="about" className="space-y-2 section-lines p-4">
                <FadeInText delay={0.1}>
                  <div className="flex items-center justify-between">
                    <TextShimmer
                      as="p"
                      className="text-xs"
                      duration={2.2}
                      spread={1.2}
                    >
                      hi there, I'm
                    </TextShimmer>
                    <TimeCounter className="text-xs text-neutral-500 dark:text-neutral-400 font-mono" />
                  </div>
                </FadeInText>
                <SlideInLeft delay={0.2}>
                  <div className="flex items-center gap-3">
                    <div className="h-16 w-16 ring-2 ring-neutral-200 dark:ring-neutral-900 rounded-full overflow-hidden">
                      <img
                        src="/facedemo.jpeg"
                        alt="Karan Paliwal"
                        className="h-full w-full object-cover scale-115 -translate-x-0.5"
                      />
                    </div>
                    <h1 className="text-2xl md:text-3xl font-medium tracking-tight text-neutral-900 dark:text-neutral-50">
                      Karan Paliwal
                    </h1>
                  </div>
                </SlideInLeft>
                <FadeInText delay={0.3}>
                  <div className="flex flex-wrap items-center mt-3 gap-2 sm:gap-4 text-xs text-neutral-600 dark:text-neutral-300">
                    <span>20, he/him</span>
                    <span className="hidden sm:inline">{"||"}</span>
                    <span className="max-w-[38ch]">
                      <Typewriter
                        text={[
                          "AI Engineer",
                          "Shitposter",
                          "Explorer",
                          "Freelancer",
                        ]}
                        speed={90}
                        waitTime={2000}
                        deleteSpeed={80}
                        className="text-neutral-600 dark:text-neutral-300"
                        cursorChar="|"
                        showCursor={true}
                      />
                      {" from India."}
                    </span>
                  </div>
                </FadeInText>
                <SlideInRight delay={0.4}>
                  <div className="mt-5 flex flex-wrap items-center gap-2 sm:gap-4">
                    <Button
                      size="sm"
                      asChild
                      className="h-6 w-20 rounded-sm bg-neutral-900 px-4 text-white shadow-sm hover:bg-neutral-900/90 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
                    >
                      <a
                        href="/resume/karan-paliwal-resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View Resume"
                      >
                        Resume
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      asChild
                      className="h-6 w-6 rounded-sm border border-neutral-200 p-0 text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
                    >
                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=karanpaliwal.work@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Send email"
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      asChild
                      className="h-6 w-6 rounded-sm border border-neutral-200 p-0 text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
                    >
                      <a
                        href="https://x.com/karanpaliwalll"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Open Twitter"
                      >
                        <Twitter className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      asChild
                      className="h-6 w-6 rounded-sm border border-neutral-200 p-0 text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
                    >
                      <a
                        href="https://github.com/karanpaliwallll"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Open GitHub"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      asChild
                      className="h-6 w-6 rounded-sm border border-neutral-200 p-0 text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
                    >
                      <a
                        href="https://www.linkedin.com/in/karanpaliwalll/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Open LinkedIn"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </SlideInRight>
              </header>
            </SlideUp>

            {/* Bio */}
            <FadeInText delay={0.5}>
              <section className="mt-4 m-2 justify-center items-center text-[13px] leading-6 text-neutral-600 dark:text-neutral-300">
                <p>
                  Most teams are not short on tools. They are short on systems
                  that actually work together.{" "}
                  <span className="rounded bg-yellow-200 px-1.5 py-0.5 text-[12px] font-medium text-neutral-900">
                    I build systems that scale ops,
                  </span>{" "}
                  connect scattered workflows, reduce manual effort, and help
                  teams move faster without adding more chaos.
                </p>
              </section>
            </FadeInText>

            {/* Work Experience */}
            <SlideUp delay={0.5}>
              <section id="experience" className="mt-6 section-lines p-4">
                <FadeInText delay={0.1}>
                  <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">
                    Work Experience.
                  </h3>
                </FadeInText>
                <div className="mt-3 space-y-3">
                  <SlideInLeft delay={0.1}>
                    <WorkItem
                      icon="shield"
                      company="Growleads"
                      role="AI Engineering Intern"
                      period="Feb 2026 - May 2026"
                      summary="Built and optimized outbound automation systems, researched emerging AI tools, supported internal product development, and developed AI agents to improve operational efficiency for a B2B demand intelligence team."
                      logoUrl="/growleads-logo.png"
                      links={[
                        {
                          label: "Offer Letter ↗",
                          href: "https://drive.google.com/file/d/1mt0sitpidx792teX9CWrldxYe_huaTO0/view",
                        },
                        {
                          label: "Certificate ↗",
                          href: "https://drive.google.com/file/d/1L0ssaThvUJQmz-9lf6dLICKBLHNwJHsO/view",
                        },
                      ]}
                    />
                  </SlideInLeft>
                  <SlideInLeft delay={0.1}>
                    <WorkItem
                      icon="building"
                      company="BrightCanvas"
                      role="n8n Lead Generation Specialist Intern"
                      period="Sep 2025 - Mar 2026"
                      summary="Designed n8n lead generation workflows, automated data collection, enrichment, and outreach processes, researched qualified prospects, and prepared performance reports to improve automation workflows."
                      logoUrl="/brightcanvas-logo.webp"
                      links={[
                        {
                          label: "Offer Letter ↗",
                          href: "https://drive.google.com/file/d/10J9hSKiC2G34cKN-JGTHVnycLfsyObKR/view",
                        },
                        {
                          label: "Certificate ↗",
                          href: "https://drive.google.com/file/d/1rzWC3nEKUwDzoL1Tbe-X60QDlt6yA3hM/view",
                        },
                      ]}
                    />
                  </SlideInLeft>
                  <SlideInLeft delay={0.1}>
                    <WorkItem
                      icon="building"
                      company="Oqulix"
                      role="AI Automation Engineer Intern"
                      period="Dec 2025 - Feb 2026"
                      summary="Developed an AI-powered automated content generator and implemented AI-driven workflow improvements for a VR product team focused on healthcare, education, and immersive experiences."
                      logoUrl="/oqulix-logo-card.png"
                      links={[
                        {
                          label: "Offer Letter ↗",
                          href: "https://drive.google.com/file/d/1daIueW0j2Af9lKTxHZxfyv1KoPkPjot5/view",
                        },
                        {
                          label: "Certificate ↗",
                          href: "https://drive.google.com/file/d/18ONHZuMCAXlCDxuvDjrdbQ4SLsKIcCqf/view",
                        },
                      ]}
                    />
                  </SlideInLeft>
                  <SlideInLeft delay={0.1}>
                    <WorkItem
                      icon="building"
                      company="SGCA Technologies"
                      role="UI/UX Designer Intern"
                      period="Jun 2025 - Aug 2025"
                      summary="Contributed to the design department through UI/UX design work, interface planning, and visual design support during a remote internship with SGCA Technologies."
                      logoUrl="/sgca-logo.png"
                      links={[
                        {
                          label: "Offer Letter ↗",
                          href: "https://drive.google.com/file/d/1KfbghjPATGqnrVgP5NU42dbB0jJQTpYc/view",
                        },
                        {
                          label: "Certificate ↗",
                          href: "https://drive.google.com/file/d/13omMXeX4gYeob43MLR67OPE5lAVvehKv/view",
                        },
                      ]}
                    />
                  </SlideInLeft>
                </div>
              </section>
            </SlideUp>

            {/* Projects */}
            <SlideUp delay={0.2}>
              <section id="projects" className="mt-8 section-lines p-4">
                <FadeInText delay={0.1}>
                  <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50 mb-4">
                    Projects.
                  </h3>
                </FadeInText>
                <div className="space-y-2">
                  <SlideInLeft delay={0.1}>
                    <ProjectListItem
                      title="The Art Of Building Skills"
                      links={[
                        {
                          label: "Case Study ↗",
                          href: "/project-pdfs/the-art-of-building-skills.pdf",
                        },
                      ]}
                      bullets={[
                        "Designed a model-agnostic framework for turning repeated AI workflows into reusable agent skills instead of disposable prompts.",
                        "Defined the skill package structure around SKILL.md, scripts, references, and assets so agents load only the context they need.",
                        "Documented a build process for capturing repeatable workflows, adding constraints and examples, then testing them on real tasks.",
                      ]}
                      tags={["Agent Workflows", "Skills", "Plugins", "Automation"]}
                    />
                  </SlideInLeft>
                  <SlideInRight delay={0.1}>
                    <ProjectListItem
                      title="Model Agnostic AI-OS v1"
                      links={[
                        {
                          label: "Case Study ↗",
                          href: "/project-pdfs/model-agnostic-ai-os-v1.pdf",
                        },
                      ]}
                      bullets={[
                        "Architected an Obsidian-based operating system that gives AI agents project truth, session history, corrections, and durable memory.",
                        "Separated current status, reusable memory, corrections, and session archive so future agents know what to trust.",
                        "Shipped a local-first v1 with vault structure, retrieval map, active handoff, closeout flow, backups, and setup scripts.",
                      ]}
                      tags={["Obsidian", "Agent Memory", "Markdown", "Automation"]}
                    />
                  </SlideInRight>
                  <SlideInLeft delay={0.2}>
                    <ProjectListItem
                      title="Lead Generation In A Box"
                      links={[
                        {
                          label: "Case Study ↗",
                          href: "/project-pdfs/lead-generation-in-a-box.pdf",
                        },
                      ]}
                      bullets={[
                        "Built an autonomous lead pipeline that turns a keyword into researched, enriched, and outreach-ready prospects.",
                        "Scrapes relevant LinkedIn posts, profiles, and company context before drafting personalized outreach.",
                        "Stores prospect history, pain points, enrichment data, and LinkedIn or WhatsApp drafts to avoid duplicated manual work.",
                      ]}
                      tags={["LinkedIn Scraping", "AI Agents", "Enrichment", "Outreach"]}
                    />
                  </SlideInLeft>
                  <SlideInRight delay={0.2}>
                    <ProjectListItem
                      title="Content Engine v1"
                      links={[
                        {
                          label: "Case Study ↗",
                          href: "/project-pdfs/content-engine-v1.pdf",
                        },
                      ]}
                      bullets={[
                        "Designed an autonomous content pipeline that converts raw context into strategy, platform-specific copy, and visual assets.",
                        "Built the workflow around strategy-first generation so the engine plans message angle, audience, and platform tone before writing.",
                        "Maintains persistent context, generated strategy, platform selection, and final outputs for consistent multi-platform content.",
                      ]}
                      tags={["LLM Orchestration", "Content Strategy", "AI Assets", "Automation"]}
                    />
                  </SlideInRight>
                </div>
                <FadeInText delay={0.2}>
                  <div className="mt-3 flex justify-center">
                    <a
                      href="https://github.com/karanpaliwallll"
                      className="inline-flex items-center gap-1 rounded-sm border border-neutral-200 px-3 py-1.5 text-sm text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
                    >
                      View all projects →
                    </a>
                  </div>
                </FadeInText>
              </section>
            </SlideUp>

            {/* Skills */}
            <SlideUp delay={0.3}>
              <section className="mt-5 section-lines p-4">
                <SkillsDraggable />
              </section>
            </SlideUp>

            {/* Education */}
            <SlideUp delay={0.3}>
              <section className="mt-8 section-lines p-4">
                <FadeInText delay={0.1}>
                  <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50 mb-4">
                    Education.
                  </h3>
                </FadeInText>
                <ul className="space-y-2">
                  <SlideInLeft delay={0.1}>
                    <li>
                      <AchievementItem
                        title="IILM University, Greater Noida"
                        date="2024 - 2028"
                        description="Bachelor of Technology - BTech, Computer Science"
                        logoUrl="/iilm-logo-card.png"
                      />
                    </li>
                  </SlideInLeft>
                  <SlideInRight delay={0.1}>
                    <li>
                      <AchievementItem
                        title="Lal Bahadur Shastri Smarak Jaym Sr School"
                        date="2011 - 2023"
                        description="Senior Secondary Certificate, Computer Science"
                        logoUrl="/lbs-school-logo.png"
                      />
                    </li>
                  </SlideInRight>
                </ul>
              </section>
            </SlideUp>

            {/* Get in Touch */}
            <SlideUp delay={0.3}>
              <section className="mt-8 text-center section-lines p-6">
                <FadeInText delay={0.1}>
                  <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
                    {"Let's work together."}
                  </h2>
                </FadeInText>
                <FadeInText delay={0.1}>
                  <p className="mx-auto mt-2 max-w-xl text-xs text-neutral-500 dark:text-neutral-400">
                    {
                      "I'm always interested in new opportunities and exciting projects. Whether you have a project in mind or just want to chat about tech, I'd love to hear from you."
                    }
                  </p>
                </FadeInText>

                {/* CTAs */}
                <SlideInLeft delay={0.1}>
                  <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                    <Button
                      size="sm"
                      asChild
                      className="h-9 rounded-md bg-neutral-900 px-4 text-white shadow-sm hover:bg-neutral-900/90 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
                    >
                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=karanpaliwal.work@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Get in touch via email"
                      >
                        <span className="inline-flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          <span>Get in touch</span>
                        </span>
                      </a>
                    </Button>
                  </div>
                </SlideInLeft>

                {/* Social row */}
                <SlideInRight delay={0.1}>
                  <div className="mt-4 flex items-center justify-center gap-2 sm:gap-4 text-neutral-600 dark:text-neutral-300">
                    <a
                      href="https://x.com/karanpaliwalll"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Twitter"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                    <a
                      href="https://github.com/karanpaliwallll"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/karanpaliwalll/"
                      aria-label="Open LinkedIn"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                </SlideInRight>

                {/* Availability + response time */}
                <FadeInText delay={0.1}>
                  <p className="mt-4 text-xs text-neutral-500 dark:text-neutral-400">
                    Currently available for freelance work and full‑time
                    opportunities
                  </p>
                  <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                    Response time: Usually within 24 hours
                  </p>
                </FadeInText>

                {/* Divider before footer */}
              </section>
            </SlideUp>
          </div>
        </article>
        <div className="mt-8 flex justify-center rounded-xl py-2  border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-950 ">
          <p className="text-xs text-neutral-500 dark:text-neutral-400 section-lines p-2">
            <span className="italic">Going with the flow</span> <span aria-hidden>🍀</span>
          </p>
        </div>{" "}
      </div>

      {/* Floating Dock */}

      <Dock />
    </main>
  );
}
