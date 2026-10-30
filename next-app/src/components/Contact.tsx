"use client";

import { useLanguage } from "@/i18n/LanguageProvider";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="py-16 lg:py-24 relative"
      style={{ backgroundColor: "var(--color-paper)" }}
    >
      {/* Red Geometric Decoration */}
      <div
        aria-hidden="true"
        className="deco-block hidden lg:block"
        style={{ bottom: "40px", right: "-16px", width: "40px", height: "80px" }}
      />

      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <h2
            className="lg:col-span-4 contact-reveal"
            style={{
              fontSize: "clamp(28px, 2vw + 20px, 32px)",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              color: "var(--color-ink)",
              letterSpacing: "-0.03em",
            }}
          >
            {t.contact.heading}
          </h2>

          <div className="lg:col-span-8">
            <p
              className="contact-reveal mb-10 leading-relaxed"
              style={{
                fontSize: "clamp(16px, 1vw + 14px, 18px)",
                fontFamily: "'Inter', sans-serif",
                color: "var(--color-ink)",
                animationDelay: "0ms",
              }}
            >
              {t.contact.intro}
            </p>

            <div className="space-y-8">
              {/* Email row */}
              <div
                className="contact-reveal"
                style={{ animationDelay: "60ms" }}
              >
                <p
                  className="mb-1"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "14px",
                    textTransform: "uppercase",
                    color: "#5A5A5A",
                  }}
                >
                  {t.contact.labelEmail}
                </p>
                <a
                  href={`mailto:${t.contact.emailAddress}`}
                  className="inline-block transition-colors hover:underline decoration-[var(--color-accent)] decoration-2 underline-offset-4 focus-visible:outline-2 focus-visible:outline-[var(--color-accent)]"
                  style={{
                    fontSize: "clamp(20px, 5vw, 32px)",
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    color: "var(--color-ink)",
                    letterSpacing: "-0.03em",
                    overflowWrap: "anywhere",
                  }}
                >
                  {t.contact.emailAddress}
                </a>
              </div>

              {/* GitHub row */}
              <div
                className="contact-reveal"
                style={{ animationDelay: "120ms" }}
              >
                <p
                  className="mb-1"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "14px",
                    textTransform: "uppercase",
                    color: "#5A5A5A",
                  }}
                >
                  {t.contact.labelGitHub}
                </p>
                <a
                  href={`https://${t.contact.githubHandle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-colors hover:underline decoration-[var(--color-accent)] decoration-2 underline-offset-4 focus-visible:outline-2 focus-visible:outline-[var(--color-accent)]"
                  style={{
                    fontSize: "clamp(20px, 5vw, 32px)",
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    color: "var(--color-ink)",
                    letterSpacing: "-0.03em",
                    overflowWrap: "anywhere",
                  }}
                >
                  {t.contact.githubHandle}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
