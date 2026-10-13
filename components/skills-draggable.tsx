"use client";

import type React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Bot,
  BrainCircuit,
  Cpu,
  Network,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  SiFlask,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiScikitlearn,
  SiSupabase,
  SiTypescript,
} from "react-icons/si";

type Skill = {
  label: string;
  icon?: React.ReactNode;
};

function SkillPill({ label, icon }: Skill) {
  return (
    <motion.div
      className={cn(
        "relative select-none",
        "inline-flex items-center gap-1.5 rounded-sm border px-1 py-0.25 text-xs font-medium",
        "bg-white text-neutral-600 border-neutral-200",
        "dark:bg-neutral-950 dark:text-neutral-300 dark:border-neutral-800"
      )}
      whileHover={{ scale: 1.15 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      aria-label={label}
    >
      <div
        className="h-3 w-3 flex items-center justify-center"
        aria-hidden="true"
      >
        {icon}
      </div>
      <span className="leading-none">{label}</span>
    </motion.div>
  );
}

export function SkillsDraggable() {
  const skills: Skill[] = [
    { label: "Python", icon: <SiPython className="h-3 w-3" /> },
    { label: "PyTorch", icon: <SiPytorch className="h-3 w-3" /> },
    { label: "Next.js 15", icon: <SiNextdotjs className="h-3 w-3" /> },
    { label: "TypeScript", icon: <SiTypescript className="h-3 w-3" /> },
    { label: "Attention U-Net", icon: <Sparkles className="h-3 w-3" /> },
    { label: "Supabase", icon: <SiSupabase className="h-3 w-3" /> },
    { label: "PostgreSQL", icon: <SiPostgresql className="h-3 w-3" /> },
    { label: "Flask", icon: <SiFlask className="h-3 w-3" /> },
    { label: "Scikit-learn", icon: <SiScikitlearn className="h-3 w-3" /> },
    { label: "XGBoost", icon: <Cpu className="h-3 w-3" /> },
    { label: "System Design", icon: <Network className="h-3 w-3" /> },
    { label: "Row-Level Security", icon: <ShieldCheck className="h-3 w-3" /> },
    { label: "AI Agents", icon: <Bot className="h-3 w-3" /> },
    { label: "Context Engineering", icon: <BrainCircuit className="h-3 w-3" /> },
  ];

  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
          Skills
        </h3>
      </div>
      <div className={cn("relative flex flex-wrap gap-2")}>
        {skills.map(s => (
          <SkillPill key={s.label} {...s} />
        ))}
      </div>
    </div>
  );
}

export default SkillsDraggable;
