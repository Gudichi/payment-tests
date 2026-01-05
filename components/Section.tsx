import { cn } from "@/lib/utils";
type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  bg?: "white" | "ivory" | "blush";
  className?: string;
  contentClassName?: string;
  align?: "left" | "center";
};

const bgClasses: Record<NonNullable<SectionProps["bg"]>, string> = {
  white: "bg-white",
  ivory: "bg-ivory",
  blush: "bg-blush/30",
};

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  bg = "white",
  className,
  contentClassName,
  align = "left",
}: SectionProps) {
  return (
    <section id={id} className={cn(bgClasses[bg], "py-16 sm:py-24", className)}>
      <div className={cn("mx-auto w-full max-w-[1100px] px-4 sm:px-6", contentClassName)}>
        {(eyebrow || title || subtitle) && (
          <div className={cn("mb-10", align === "center" ? "text-center" : "text-left")}>
            {eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-wine">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-4 font-heading text-4xl font-bold leading-tight text-espresso sm:text-5xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-lg leading-relaxed text-espresso/80">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
