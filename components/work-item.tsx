import { Badge } from "@/components/ui/badge";
import { Building2, Shield } from "lucide-react";
import Image from "next/image";

type WorkItemProps = {
  company: string;
  role: string;
  period: string;
  summary: string;
  icon?: "shield" | "building";
  logoUrl?: string;
  links?: { label: string; href: string }[];
};

export function WorkItem({
  company,
  role,
  period,
  summary,
  icon = "building",
  logoUrl,
  links = [],
}: WorkItemProps) {
  const Icon = icon === "shield" ? Shield : Building2;
  return (
    <div className="rounded-xl border border-neutral-200 bg-white px-4 py-3 md:px-5 md:py-3.5 dark:border-neutral-800 dark:bg-neutral-950">
      <div className="flex gap-4">
        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-white p-1 text-neutral-700 shadow-sm dark:border-neutral-800">
          {logoUrl ? (
            <Image
              src={logoUrl}
              alt={`${company} logo`}
              width={32}
              height={32}
              className="h-full w-full object-contain"
            />
          ) : (
            <Icon className="h-4 w-4" aria-hidden="true" />
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-1">
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50 flex-1 min-w-0">
              {company}
            </h4>
          </div>
          <p className="text-xs text-neutral-600 dark:text-neutral-300">
            {role}
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-1.5">
            <span className="text-xs rounded-md border border-neutral-200 bg-neutral-50 px-1.5 py-1 text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 whitespace-nowrap flex-shrink-0 self-start">
              {period}
            </span>
            {links.map(link => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-xs rounded-sm border border-neutral-200 px-2 py-0.5 text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="mt-2 text-xs leading-relaxed text-neutral-700 dark:text-neutral-300">
            {summary}
          </p>
        </div>
      </div>
    </div>
  );
}
