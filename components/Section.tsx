import { cn } from "@/lib/utils";
type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  bg?: "default" | "ivory" | "tint";
  className?: string;
};

const bgClasses: Record<NonNullable<SectionProps["bg"]>, string> = {
  default: "",
  ivory: "bg-ivory",
  tint: "bg-blush/30",
};

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  bg = "default",
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "px-5 py-12 sm:py-16",
        bgClasses[bg],
        bg === "default" ? "" : "rounded-3xl",
        className
      )}
    >
      {(eyebrow || title || subtitle) && (
        <div className="mx-auto mb-8 max-w-3xl text-center">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cherry">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="mt-3 font-heading text-3xl text-espresso sm:text-4xl">{title}</h2>
          )}
          {subtitle && <p className="mt-3 text-base text-espresso/80">{subtitle}</p>}
        </div>
      )}
      <div className="mx-auto max-w-3xl">{children}</div>
    </section>
  );
}
