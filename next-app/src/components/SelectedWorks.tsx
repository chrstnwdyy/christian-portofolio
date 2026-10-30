"use client";

import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function SelectedWorks() {
  const { t } = useLanguage();

  return (
    <section
      id="works"
      className="py-16 lg:py-24 relative"
      style={{ backgroundColor: "var(--color-paper)" }}
    >
      {/* Red Geometric Decoration */}
      <div
        aria-hidden="true"
        className="deco-block hidden lg:block"
        style={{ bottom: "120px", left: "-20px", width: "56px", height: "120px" }}
      />

      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 relative z-10">
        <h2
          className="mb-10 lg:mb-16 reveal"
          style={{
            fontSize: "clamp(28px, 2vw + 20px, 32px)",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            color: "var(--color-ink)",
            letterSpacing: "-0.03em",
          }}
        >
          {t.works.heading}
        </h2>

        <div className="grid grid-cols-1 gap-24 lg:gap-32">
          {/* Project 1: KosFindr */}
          <article className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-8 lg:items-start reveal">
            <div className="order-1 lg:order-2 lg:col-span-5 lg:self-start lg:sticky lg:top-28">
              <h3
                className="mb-4"
                style={{
                  fontSize: "clamp(20px, 1.5vw + 16px, 24px)",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  color: "var(--color-ink)",
                  letterSpacing: "-0.03em",
                }}
              >
                {t.works.kos.title}
              </h3>

              <p
                className="mb-4"
                style={{
                  fontSize: "14px",
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "var(--color-gray-wcag)",
                }}
              >
                {t.works.kos.type}
              </p>

              <p
                className="mb-6 leading-relaxed"
                style={{
                  fontSize: "clamp(16px, 1vw + 14px, 18px)",
                  fontFamily: "'Inter', sans-serif",
                  color: "var(--color-gray-wcag)",
                }}
              >
                {t.works.kos.overview}
              </p>

              <div className="mb-6">
                <h4
                  className="mb-2"
                  style={{
                    fontSize: "12px",
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    color: "var(--color-accent)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  {t.works.kos.labelSolution}
                </h4>
                <p
                  className="leading-relaxed"
                  style={{
                    fontSize: "16px",
                    fontFamily: "'Inter', sans-serif",
                    color: "var(--color-ink)",
                  }}
                >
                  {t.works.kos.solution}
                </p>
              </div>

              <ul
                className="flex flex-wrap gap-2"
                style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px" }}
              >
                {["PHP", "Laravel", "Blade", "HTML", "CSS", "JavaScript"].map((tech) => (
                  <li
                    key={tech}
                    className="px-2 py-1"
                    style={{ backgroundColor: "var(--color-surface-dark)", color: "var(--color-ink)" }}
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <a
                href="https://github.com/chrstnwdyy/Kos-Recommendation"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.works.ariaKosGithub}
                className="inline-block mt-6 underline decoration-1 underline-offset-4 transition-colors hover:decoration-[var(--color-accent)] hover:decoration-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
                style={{
                  fontSize: "16px",
                  fontFamily: "'Inter', sans-serif",
                  color: "var(--color-ink)",
                }}
              >
                {t.works.viewOnGithub}
              </a>
              {/* TODO: Live Demo belum tersedia */}
            </div>

            <div className="order-2 lg:order-1 lg:col-span-7 mt-8 lg:mt-0">
              <div className="space-y-8">
                <div className="rounded-[8px]" style={{ border: "1px solid var(--color-ink)", overflow: "hidden" }}>
                  <Image src="/works/kos-result.jpeg" alt={t.works.kos.altResult} width={827} height={364} className="w-full h-auto transition-transform duration-500 hover:scale-[1.01]" />
                </div>
                <p className="mt-2" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "14px", color: "#5A5A5A" }}>{t.works.kos.captionResult}</p>

                <div className="grid grid-cols-1 sm:grid-cols-[1.77fr_1fr] gap-6">
                  <div>
                    <div className="rounded-[8px]" style={{ border: "1px solid var(--color-ink)", overflow: "hidden" }}>
                      <Image src="/works/kos-form.jpeg" alt={t.works.kos.altForm} width={827} height={365} className="w-full h-auto transition-transform duration-500 hover:scale-[1.01]" />
                    </div>
                    <p className="mt-2" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", color: "#5A5A5A", lineHeight: 1.4 }}>{t.works.kos.captionForm}</p>
                  </div>
                  <div>
                    <div className="rounded-[8px]" style={{ border: "1px solid var(--color-ink)", overflow: "hidden" }}>
                      <Image src="/works/kos-detail.jpeg" alt={t.works.kos.altDetail} width={827} height={645} className="w-full h-auto transition-transform duration-500 hover:scale-[1.01]" />
                    </div>
                    <p className="mt-2" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", color: "#5A5A5A" }}>{t.works.kos.captionDetail}</p>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Project 2: Vehicle Detection */}
          <article className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-8 lg:items-start reveal">
            <div className="order-1 lg:order-1 lg:col-span-5 lg:self-start lg:sticky lg:top-28">
              <h3 className="mb-4" style={{ fontSize: "clamp(20px, 1.5vw + 16px, 24px)", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "var(--color-ink)", letterSpacing: "-0.03em" }}>{t.works.yolo.title}</h3>
              <p className="mb-4" style={{ fontSize: "14px", fontFamily: "'JetBrains Mono', monospace", color: "var(--color-gray-wcag)" }}>{t.works.yolo.type}</p>
              <p className="mb-6 leading-relaxed" style={{ fontSize: "clamp(16px, 1vw + 14px, 18px)", fontFamily: "'Inter', sans-serif", color: "var(--color-gray-wcag)" }}>{t.works.yolo.description}</p>
              <ul className="flex flex-wrap gap-2" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px" }}>
                {["YOLOv8", "Roboflow"].map((tech) => (
                  <li key={tech} className="px-2 py-1" style={{ backgroundColor: "var(--color-surface-dark)", color: "var(--color-ink)" }}>{tech}</li>
                ))}
              </ul>

              <a
                href="https://github.com/chrstnwdyy/Vehicle-Detection-and-Counting-using-YOLOv8"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.works.ariaYoloGithub}
                className="inline-block mt-6 underline decoration-1 underline-offset-4 transition-colors hover:decoration-[var(--color-accent)] hover:decoration-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
                style={{
                  fontSize: "16px",
                  fontFamily: "'Inter', sans-serif",
                  color: "var(--color-ink)",
                }}
              >
                {t.works.viewOnGithub}
              </a>
              {/* TODO: Live Demo belum tersedia */}
            </div>

            <div className="order-2 lg:order-2 lg:col-span-7 mt-8 lg:mt-0">
              <div className="space-y-8">
                <div>
                  <div className="rounded-[8px]" style={{ border: "1px solid var(--color-ink)", overflow: "hidden" }}>
                    <Image src="/works/yolo-529-crop.jpeg" alt={t.works.yolo.alt1} width={1278} height={714} className="w-full h-auto transition-transform duration-500 hover:scale-[1.01]" />
                  </div>
                  <p className="mt-2" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "14px", color: "#5A5A5A" }}>{t.works.yolo.caption1}</p>
                </div>
                <div>
                  <div className="rounded-[8px]" style={{ border: "1px solid var(--color-ink)", overflow: "hidden" }}>
                    <Image src="/works/yolo-53-crop.jpeg" alt={t.works.yolo.alt2} width={1278} height={716} className="w-full h-auto transition-transform duration-500 hover:scale-[1.01]" />
                  </div>
                  <p className="mt-2" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "14px", color: "#5A5A5A" }}>{t.works.yolo.caption2}</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
