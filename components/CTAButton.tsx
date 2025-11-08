import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonStyles = cva(
  "inline-flex items-center justify-center rounded-2xl text-base font-semibold transition duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transition-none motion-reduce:transform-none",
  {
    variants: {
      variant: {
        primary:
          "bg-cherry text-ivory shadow-card hover:translate-y-0.5 hover:shadow-modal focus-visible:outline-cherry",
        ghost:
          "border border-cherry text-cherry hover:bg-cherry/10 focus-visible:outline-cherry",
      },
      size: {
        md: "px-6 py-3",
        lg: "px-8 py-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

type CTAButtonProps = VariantProps<typeof buttonStyles> & {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function CTAButton({ href, children, className, variant, size }: CTAButtonProps) {
  return (
    <Link href={href} className={cn(buttonStyles({ variant, size }), className)}>
      {children}
    </Link>
  );
}
