import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
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
            anzar.
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
                      <Image
                        src="/facedemo.jpeg"
                        alt="Mohammad Anzar Akhtar"
                        width={64}
                        height={64}
                        className="h-full w-full object-cover scale-110"
                        priority
                      />
                    </div>
                    <h1 className="text-2xl md:text-3xl font-medium tracking-tight text-neutral-900 dark:text-neutral-50">
                      Mohammad Anzar Akhtar
                    </h1>
                  </div>
                </SlideInLeft>
                <FadeInText delay={0.3}>
                  <div className="flex flex-wrap items-center mt-3 gap-2 sm:gap-4 text-xs text-neutral-600 dark:text-neutral-300">
                    <span>he/him</span>
                    <span className="hidden sm:inline">{"||"}</span>
                    <span className="max-w-[38ch]">
                      <Typewriter
                        text={[
                          "AI/ML Engineer",
                          "Full-Stack Developer",
                          "Deep Learning Researcher",
                          "Problem Solver",
                        ]}
                        speed={90}
                        waitTime={2000}
                        deleteSpeed={80}
                        className="text-neutral-600 dark:text-neutral-300"
                        cursorChar="|"
                        showCursor={true}
                      />
                      {" from Lucknow, India."}
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
                        href="/resume/anzar-akhtar-resume.pdf"
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
                        href="mailto:anzar0904@gmail.com"
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
                        href="https://github.com/Anzar0904"
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
                        href="https://linkedin.com/in/anzar-akhtar-b25397343"
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
                  Most teams are not short on ideas. They are short on engineers
                  who bridge research and production.{" "}
                  <span className="rounded bg-yellow-200 px-1.5 py-0.5 text-[12px] font-medium text-neutral-900 dark:bg-yellow-300">
                    I ship projects end-to-end,
                  </span>{" "}
                  from PyTorch deep learning pipelines to security-hardened,
                  responsive Next.js web applications.
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
                      icon="building"
                      company="Infosys"
                      role="Full Stack Development Intern (Virtual)"
                      period="Nov 2025 - Mar 2026"
                      summary="Shipped EcoPackAI, an AI packaging recommendation engine scoring materials on cost, carbon emissions, strength, and recyclability. Trained Random Forest and XGBoost predictive models on engineered data, and built Flask REST APIs backed by MySQL and a responsive interface."
                      logoUrl="/infosys-logo.svg"
                      links={[
                        {
                          label: "Completed ↗",
                          href: "https://linkedin.com/in/anzar-akhtar-b25397343",
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
                      title="CampusConnect — Full-Stack Platform"
                      links={[
                        {
                          label: "Repository ↗",
                          href: "https://github.com/Anzar0904",
                        },
                      ]}
                      bullets={[
                        "Architected and shipped a 29-route collaboration platform for college students with real-time feeds, DMs, marketplace, AI assistant, and coding arena on Next.js 15 & Supabase.",
                        "Led security-hardening pass: college-scoped Row-Level Security policies, server-side OTP/email validation via Edge Functions, and signed URLs for private storage.",
                        "Eliminated duplicate-vote race conditions via atomic RPCs and built motion-driven UI interactions using React Three Fiber and GSAP.",
                      ]}
                      tags={["Next.js 15", "TypeScript", "Supabase", "PostgreSQL", "GSAP / R3F"]}
                    />
                  </SlideInLeft>
                  <SlideInRight delay={0.1}>
                    <ProjectListItem
                      title="CI-MRGS: Multi-Region Glioma Segmentation"
                      links={[
                        {
                          label: "Research ↗",
                          href: "https://github.com/Anzar0904",
                        },
                      ]}
                      bullets={[
                        "Built a deep learning framework for multi-class brain tumor segmentation on BraTS 2024 using multi-modal MRI input (T1, T1c, T2, FLAIR) with Attention U-Net.",
                        "Engineered a production-style PyTorch training pipeline with automatic checkpointing, mixed-precision (AMP), EMA, TensorBoard logging, and Kaggle GPU resumption.",
                        "Designed a hybrid Focal Tversky + Boundary Loss and augmentation strategy to counter severe tumor sub-region class imbalance; prepared manuscript in IEEE format.",
                      ]}
                      tags={["PyTorch", "Attention U-Net", "BraTS 2024", "AMP", "Deep Learning"]}
                    />
                  </SlideInRight>
                  <SlideInLeft delay={0.2}>
                    <ProjectListItem
                      title="AIOS — Personal AI Operating System & Agent Runtime"
                      links={[
                        {
                          label: "Repository ↗",
                          href: "https://github.com/Anzar0904/Aios",
                        },
                      ]}
                      bullets={[
                        "Architected a 4-layer unidirectional OS (Core → Integration → Skill → Interface) with a kernel state machine and heuristic intent router executing system queries with 0 LLM hops (7.4 µs dispatch latency).",
                        "Engineered an episodic agent memory system pairing Qdrant vector search with automatic SQLite cosine-similarity fallback during network partitions and MinIO (S3) for durable checkpoint recovery.",
                        "Implemented a two-phase action approval protocol (/v1/actions/propose → confirm) with local Ollama inference budgeting (Qwen 9B, DeepSeek R1) and SSE real-time telemetry (/v1/events).",
                        "Maintained 100% test pass rate across 1,200 unit and integration tests (pytest in 3.02s) with automated Bandit security verification.",
                      ]}
                      tags={["Python", "Qdrant", "Redis", "MinIO", "Next.js", "Ollama"]}
                    />
                  </SlideInLeft>
                </div>
                <FadeInText delay={0.2}>
                  <div className="mt-3 flex justify-center">
                    <a
                      href="https://github.com/Anzar0904"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 rounded-sm border border-neutral-200 px-3 py-1.5 text-sm text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900 transition-colors"
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
                        description="Bachelor of Technology - B.Tech, Computer Science & Engineering"
                        logoUrl="/iilm-logo-card.png"
                      />
                    </li>
                  </SlideInLeft>
                  <SlideInRight delay={0.1}>
                    <li>
                      <AchievementItem
                        title="Certifications & Specializations"
                        date="2025"
                        description="Oracle DBMS Certified (SQL & PL/SQL) · Infosys Springboard Data Science"
                        logoUrl="/infosys-logo.svg"
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
                      "I'm always interested in new opportunities and exciting engineering challenges. Whether you have a project in mind or want to discuss AI systems, I'd love to connect."
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
                        href="mailto:anzar0904@gmail.com"
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
                      href="https://github.com/Anzar0904"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900 transition-colors"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    <a
                      href="https://linkedin.com/in/anzar-akhtar-b25397343"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Open LinkedIn"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900 transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href="mailto:anzar0904@gmail.com"
                      aria-label="Email"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900 transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  </div>
                </SlideInRight>

                {/* Availability + response time */}
                <FadeInText delay={0.1}>
                  <p className="mt-4 text-xs text-neutral-500 dark:text-neutral-400">
                    Currently available for AI/ML engineering, full-stack internships, and new-grad roles
                  </p>
                  <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                    Response time: Usually within 24 hours
                  </p>
                </FadeInText>
              </section>
            </SlideUp>
          </div>
        </article>
        <div className="mt-8 flex justify-center rounded-xl py-2 border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
          <p className="text-xs text-neutral-500 dark:text-neutral-400 section-lines p-2">
            <span className="italic">Going with the flow</span>{" "}
            <span aria-hidden="true">🍀</span>
          </p>
        </div>
      </div>

      {/* Floating Dock */}
      <Dock />
    </main>
  );
}
