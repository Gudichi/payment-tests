"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { TimedContent } from "./timed-content";
import { Version } from "./versions";

const SECTION_SPACING = "py-12 md:py-16";
const CONTAINER = "max-w-5xl mx-auto px-4 sm:px-6";
const STACK = "space-y-6";

export default function AboveTheFold({ version }: { version: Version }) {
  const { atf } = version;

  return (
    <div className="min-h-screen bg-[#f8f4ee] text-slate-900 font-sans">
      <div className="bg-[#f2c7b6] text-[#4c170a] text-center text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase py-3 px-4">
        Nova formula koja ga tjera da te moli za još vremena
      </div>

      <section className={`${SECTION_SPACING}`}>
        <div className={`${CONTAINER} flex flex-col items-center ${STACK} text-center`}>
          <p className="text-sm font-semibold tracking-[0.3em] text-rose-500 uppercase">
            Besplatni vodič
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-[#2f0a17]">
            {atf.headline}
          </h1>
          <p className="text-base md:text-xl text-[#5b2333] max-w-3xl leading-relaxed">
            {atf.subheadline}
          </p>
          <div className="w-full max-w-3xl">
            <Image
              src="/images/Herophoto.png"
              alt="Sretna žena koja ponovno osvaja njegovo srce"
              width={960}
              height={720}
              priority
              className="w-full rounded-2xl border border-[#f0d7ca] shadow-card"
            />
          </div>
        </div>
      </section>

      <section className={`${SECTION_SPACING} bg-white`}>
        <div className={`${CONTAINER} ${STACK}`}>
          <div className={`text-center ${STACK}`}>
            <p className="text-sm font-semibold tracking-[0.3em] uppercase text-rose-500">
              {atf.bulletPointsTitle}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2f0a17]">
              Otkrij što ćeš naučiti u narednih 11 minuta
            </h2>
          </div>

          <ul className="grid gap-6">
            {atf.bulletPoints.map((point, index) => (
              <li key={index} className="flex gap-4 text-left">
                <span className="mt-1 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#f8f4ee] text-rose-600">
                  <Check className="h-4 w-4" />
                </span>
                <div
                  className="text-base md:text-lg text-[#4b1a28] leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: point }}
                />
              </li>
            ))}
          </ul>

          <TimedContent checkoutVersion={version.checkoutVersion} />
        </div>
      </section>
    </div>
  );
}
