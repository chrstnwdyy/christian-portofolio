"use client";

import { useLanguage } from "@/i18n/LanguageProvider";

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="py-16 lg:py-24 relative"
      style={{ backgroundColor: "var(--color-paper)" }}
    >
      {/* Red Geometric Decoration */}
      <div
        aria-hidden="true"
        className="deco-block hidden lg:block"
        style={{ top: "40px", right: "-12px", width: "40px", height: "100px" }}
      />

      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <h2
            className="lg:col-span-4 reveal"
            style={{
              fontSize: "clamp(28px, 2vw + 20px, 32px)",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              color: "var(--color-ink)",
              letterSpacing: "-0.03em",
            }}
          >
            {t.about.heading}
          </h2>

          <div className="lg:col-span-8">
            <div className="max-w-[65ch] space-y-6">
              <p
                className="reveal leading-relaxed"
                style={{
                  fontSize: "clamp(16px, 1vw + 14px, 18px)",
                  fontFamily: "'Inter', sans-serif",
                  color: "var(--color-ink)",
                  transitionDelay: "0ms",
                }}
              >
                {t.about.p1}
              </p>

              <p
                className="reveal leading-relaxed"
                style={{
                  fontSize: "clamp(16px, 1vw + 14px, 18px)",
                  fontFamily: "'Inter', sans-serif",
                  color: "var(--color-ink)",
                  transitionDelay: "60ms",
                }}
              >
                {t.about.p2}
              </p>

              <p
                className="reveal leading-relaxed"
                style={{
                  fontSize: "clamp(16px, 1vw + 14px, 18px)",
                  fontFamily: "'Inter', sans-serif",
                  color: "var(--color-ink)",
                  transitionDelay: "120ms",
                }}
              >
                {t.about.p3}
              </p>
            </div>

            <dl
              className="reveal mt-12 space-y-5 m-0"
              style={{ transitionDelay: "180ms" }}
            >
              <div>
                <dt
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "14px",
                    textTransform: "uppercase",
                    color: "#5A5A5A",
                  }}
                >
                  {t.about.labelEducation}
                </dt>
                <dd
                  className="mt-1 m-0"
                  style={{
                    fontSize: "16px",
                    fontFamily: "'Inter', sans-serif",
                    color: "var(--color-ink)",
                  }}
                >
                  {t.about.valueEducation}
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
                  {t.about.labelLocation}
                </dt>
                <dd
                  className="mt-1 m-0"
                  style={{
                    fontSize: "16px",
                    fontFamily: "'Inter', sans-serif",
                    color: "var(--color-ink)",
                  }}
                >
                  {t.about.valueLocation}
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
                  {t.about.labelLookingFor}
                </dt>
                <dd
                  className="mt-1 m-0"
                  style={{
                    fontSize: "16px",
                    fontFamily: "'Inter', sans-serif",
                    color: "var(--color-ink)",
                  }}
                >
                  {t.about.valueLookingFor}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
