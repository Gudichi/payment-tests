import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "OTO 2 — U pripremi",
  description: "Dodatna ponuda će uskoro biti aktivna.",
};

export default function Oto2Page() {
  return (
    <div className="bg-ivory text-espresso min-h-screen">
      <Section align="center" contentClassName="max-w-3xl space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cherry">
          Uskoro
        </p>
        <h1 className="font-heading text-4xl font-bold text-espresso">
          Nova ponuda je u pripremi
        </h1>
        <p className="text-lg text-espresso/80">
          Ova stranica će uskoro sadržavati dodatni sadržaj nakon tvoje kupnje. Do tada sve ostaje
          zaključano.
        </p>
      </Section>
    </div>
  );
}
