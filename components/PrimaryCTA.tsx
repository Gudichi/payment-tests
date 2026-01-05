import { cn } from "@/lib/utils";

type PrimaryCTAProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
};

export function PrimaryCTA({ children, onClick, className, fullWidth = true }: PrimaryCTAProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "bg-wine text-ivory rounded-2xl py-[1.1rem] font-bold uppercase tracking-[0.05em] px-12 shadow-[0_12px_25px_rgba(26,20,18,0.12)] hover:bg-[#7A3B57] active:translate-y-[1px] active:shadow-[0_8px_18px_rgba(26,20,18,0.1)] transition-all text-[clamp(1rem,2vw,1.125rem)] flex items-center justify-center",
        fullWidth ? "w-full max-w-[600px]" : "",
        className
      )}
    >
      {children}
    </button>
  );
}

