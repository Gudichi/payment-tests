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
    <div className="grid gap-8 rounded-3xl border border-blush bg-white p-6 shadow-card lg:grid-cols-2">
      <div className="space-y-5">
        <h3 className="font-heading text-3xl text-espresso">{title}</h3>
        <p className="text-base text-espresso/80">{description}</p>
        <ul className="space-y-2 text-sm text-espresso/80">
          {items.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-cherry">●</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-base font-semibold text-espresso">
          A kad se dogodi onaj prvi kontakt — ti ćeš biti spremna.
        </p>
        <p className="text-sm text-espresso/80">
          Zato dobivaš i poklon pakiranje dodatnih alata za sljedeće korake:
        </p>
        <ul className="space-y-3 text-sm text-espresso/80">
          {bonuses.map((bonus) => (
            <li key={bonus.title} className="rounded-2xl bg-ivory/80 p-4">
              <p className="font-semibold text-espresso">{bonus.title}</p>
              <p className="text-sm text-espresso/80">{bonus.body}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col items-center justify-between gap-4">
        <div className="overflow-hidden rounded-3xl border border-blush/60 bg-ivory">
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
