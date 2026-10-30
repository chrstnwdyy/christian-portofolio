"use client";

import { useLanguage } from "@/i18n/LanguageProvider";

export default function Expertise() {
  const { t } = useLanguage();

  const groups = [
    { title: t.expertise.frontend.title, items: t.expertise.frontend.items, context: t.expertise.frontend.context },
    { title: t.expertise.backend.title, items: t.expertise.backend.items, context: t.expertise.backend.context },
    { title: t.expertise.database.title, items: t.expertise.database.items, context: t.expertise.database.context },
    { title: t.expertise.computerVision.title, items: t.expertise.computerVision.items, context: t.expertise.computerVision.context },
    { title: t.expertise.tools.title, items: t.expertise.tools.items, context: t.expertise.tools.context },
  ];

  return (
    <section
      id="expertise"
      className="py-16 lg:py-24 relative"
      style={{ backgroundColor: "var(--color-paper)" }}
    >
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
            {t.expertise.heading}
          </h2>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {groups.map((group, index) => (
              <div
                key={group.title}
                className="reveal"
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <h3
                  className="mb-3"
                  style={{
                    fontSize: "clamp(20px, 1.5vw + 16px, 24px)",
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    color: "var(--color-ink)",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {group.title}
                </h3>

                <ul className="m-0 p-0 list-none space-y-1">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontSize: "16px",
                        fontFamily: "'Inter', sans-serif",
                        color: "var(--color-ink)",
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                {group.context && (
                  <p
                    className="mt-3 leading-relaxed"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "14px",
                      color: "#5A5A5A",
                    }}
                  >
                    {group.context}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
