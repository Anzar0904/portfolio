import { cn } from "@/lib/utils";
import Image from "next/image";

type AchievementItemProps = {
  title: string;
  date: string;
  description: string;
  href?: string;
  logoUrl?: string;
  className?: string;
};

export function AchievementItem({
  title,
  date,
  description,
  href,
  logoUrl,
  className,
}: AchievementItemProps) {
  return (
    <article
      className={cn(
        "rounded-xl border border-neutral-200 bg-white px-4 py-3 md:px-5 md:py-3.5 dark:border-neutral-800 dark:bg-neutral-950",
        className
      )}
    >
      <div className="flex gap-4">
        {logoUrl ? (
          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-white p-1 text-neutral-700 shadow-sm dark:border-neutral-800">
            <Image
              src={logoUrl}
              alt={`${title} logo`}
              width={32}
              height={32}
              className="h-full w-full object-contain"
            />
          </div>
        ) : null}

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <h4 className="min-w-0 flex-1 text-sm font-semibold text-neutral-900 dark:text-neutral-50">
              {title}
            </h4>
            <div className="flex shrink-0 items-center gap-2">
              <span className="whitespace-nowrap rounded-sm border border-neutral-200 px-1 py-0.25 text-xs text-neutral-600 dark:border-neutral-800 dark:text-neutral-300">
                {date}
              </span>
              {href ? (
                <a
                  href={href}
                  className="whitespace-nowrap rounded-full border border-neutral-200 px-2 py-0.5 text-xs text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
                >
                  Read more
                </a>
              ) : null}
            </div>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-neutral-700 dark:text-neutral-300">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}
