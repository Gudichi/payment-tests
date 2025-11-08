import Image from "next/image";
type ValueStackProps = {
  title: string;
  description: string;
  items: string[];
  bonuses: { title: string; body: string }[];
  image: { src: string; alt: string };
};

export function ValueStack({ title, description, items, bonuses, image }: ValueStackProps) {
  return (
    <div className="grid gap-10 rounded-3xl border border-blush bg-white/90 p-8 shadow-modal lg:grid-cols-2 lg:p-12">
      <div className="space-y-6">
        <h3 className="font-heading text-4xl text-espresso">{title}</h3>
        <p className="text-lg text-espresso/80">{description}</p>
        <ul className="space-y-3 text-base text-espresso/80">
          {items.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-cherry">●</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-lg font-semibold text-espresso">
          A kad se dogodi onaj prvi kontakt — ti ćeš biti spremna.
        </p>
        <p className="text-base text-espresso/80">
          Zato dobivaš i poklon pakiranje dodatnih alata za sljedeće korake:
        </p>
        <ul className="space-y-4 text-base text-espresso/80">
          {bonuses.map((bonus) => (
            <li key={bonus.title} className="rounded-2xl bg-ivory/70 p-4">
              <p className="font-semibold text-espresso">{bonus.title}</p>
              <p className="text-sm text-espresso/80">{bonus.body}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col items-center justify-between gap-4">
        <div className="overflow-hidden rounded-3xl border border-blush/60 bg-ivory shadow-card">
          <Image
            src={image.src}
            alt={image.alt}
            width={720}
            height={720}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
