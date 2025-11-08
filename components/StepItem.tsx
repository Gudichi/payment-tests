import Image from "next/image";
import { cn } from "@/lib/utils";

type StepItemProps = {
  step: number;
  title: string;
  description: string;
  image?: {
    src: string;
    alt: string;
    priority?: boolean;
  };
  className?: string;
};

export function StepItem({ step, title, description, image, className }: StepItemProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 rounded-2xl border border-blush bg-white p-6 shadow-glow",
        className
      )}
    >
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cherry/10 font-semibold text-cherry">
          {step}
        </span>
        <div>
          <h3 className="font-heading text-2xl text-espresso">{title}</h3>
          <p className="mt-2 text-sm text-espresso/80 whitespace-pre-line">{description}</p>
        </div>
      </div>
      {image && (
        <div className="overflow-hidden rounded-xl border border-blush/60 bg-ivory">
          <Image
            src={image.src}
            alt={image.alt}
            width={960}
            height={640}
            className="h-full w-full object-cover"
            loading={image.priority ? "eager" : "lazy"}
          />
        </div>
      )}
    </div>
  );
}
