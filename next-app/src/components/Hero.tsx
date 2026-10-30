"use client";

import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="pt-32 pb-24 lg:pt-40 lg:pb-32 md:pt-24 md:pb-16 sm:pt-20 sm:pb-12 relative"
      style={{ backgroundColor: "var(--color-paper)" }}
    >
      {/* Red Geometric Decorations */}
      <div
        aria-hidden="true"
        className="deco-block hidden lg:block"
        style={{ top: "120px", right: "-32px", width: "80px", height: "180px" }}
      />
      <div
        aria-hidden="true"
        className="deco-block hidden sm:block"
        style={{ bottom: "40px", left: "-24px", width: "64px", height: "64px" }}
      />

      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 lg:items-start">
          {/* Photo (left on desktop, first on mobile/tablet) */}
          <div className="lg:col-span-4 lg:order-1 reveal">
            <div className="relative aspect-square lg:aspect-[4/5] overflow-hidden rounded-[12px] border border-[var(--color-border)]">
              <Image
                src="/works/profile4.jpg"
                alt={t.hero.altPortrait}
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 33vw"
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
          </div>

          {/* Text (right on desktop, below photo on mobile/tablet) */}
          <div className="lg:col-span-8 lg:order-2 reveal" style={{ transitionDelay: "100ms" }}>
            <h1
              className="mb-8 leading-tight max-w-[28ch]"
              style={{
                fontSize: "clamp(32px, 4vw + 8px, 64px)",
                lineHeight: 1.1,
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                color: "var(--color-ink)",
                letterSpacing: "-0.03em",
              }}
            >
              {t.hero.headline}
            </h1>

            <p
              className="mb-12 max-w-[48ch] leading-relaxed"
              style={{
                fontSize: "clamp(16px, 1vw + 14px, 18px)",
                fontFamily: "'Inter', sans-serif",
                color: "var(--color-gray-wcag)",
              }}
            >
              {t.hero.supporting}
            </p>

            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a
                href="#works"
                className="inline-flex h-12 w-full items-center justify-center px-8 bg-[var(--color-accent)] text-white font-semibold transition-transform hover:scale-[1.02] focus:scale-[1.02] sm:w-auto rounded-[8px]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "16px",
                }}
              >
                {t.hero.ctaViewProjects}
              </a>
              <a
                href="#contact"
                className="inline-flex h-12 w-full items-center justify-center px-8 border-2 border-[var(--color-ink)] text-[var(--color-ink)] font-semibold transition-colors hover:bg-[var(--color-surface-dark)] focus:bg-[var(--color-surface-dark)] sm:w-auto rounded-[8px]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "16px",
                }}
              >
                {t.hero.ctaContact}
              </a>
            </div>
          </div>
        </div>

        {/* Metadata row: 4 columns desktop, 2x2 tablet, 1 column mobile */}
        <dl className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 m-0 reveal" style={{ transitionDelay: "200ms" }}>
          <div>
            <dt
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "14px",
                textTransform: "uppercase",
                color: "#5A5A5A",
              }}
            >
              {t.hero.labelRole}
            </dt>
            <dd
              className="mt-1 m-0"
              style={{
                fontSize: "18px",
                fontWeight: 500,
                fontFamily: "'Inter', sans-serif",
                color: "var(--color-ink)",
              }}
            >
              {t.hero.valueRole}
            </dd>
          </div>

          <div>
            <dt
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "14px",
                textTransform: "uppercase",
                color: "#5A5A5A",
              }}
            >
              {t.hero.labelLocation}
            </dt>
            <dd
              className="mt-1 m-0"
              style={{
                fontSize: "18px",
                fontWeight: 500,
                fontFamily: "'Inter', sans-serif",
                color: "var(--color-ink)",
              }}
            >
              {t.hero.valueLocation}
            </dd>
          </div>

          <div>
            <dt
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "14px",
                textTransform: "uppercase",
                color: "#5A5A5A",
              }}
            >
              {t.hero.labelAvailability}
            </dt>
            <dd
              className="mt-1 m-0"
              style={{
                fontSize: "18px",
                fontWeight: 500,
                fontFamily: "'Inter', sans-serif",
                color: "var(--color-ink)",
              }}
            >
              {t.hero.valueAvailability}
            </dd>
          </div>

          <div>
            <dt
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "14px",
                textTransform: "uppercase",
                color: "#5A5A5A",
              }}
            >
              {t.hero.labelTechnologies}
            </dt>
            <dd
              className="mt-1 m-0"
              style={{
                fontSize: "16px",
                fontFamily: "'Inter', sans-serif",
                color: "var(--color-ink)",
              }}
            >
              React &amp; Next.js, TypeScript, Tailwind CSS
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
