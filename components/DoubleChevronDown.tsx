import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type DoubleChevronDownProps = {
  className?: string;
  color?: string;
};

export function DoubleChevronDown({ className, color = "text-wine" }: DoubleChevronDownProps) {
  return (
    <div className={cn("flex items-center justify-center", className)} aria-hidden="true">
      <ChevronDown 
        className={cn("w-7 h-7 animate-subtle-bounce", color)} 
      />
    </div>
  );
}

