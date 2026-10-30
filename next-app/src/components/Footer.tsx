"use client";

import { useLanguage } from "@/i18n/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer
      className="py-12 border-t"
      style={{
        backgroundColor: "var(--color-paper)",
        borderColor: "var(--color-border)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "14px",
            color: "#5A5A5A",
          }}
        >
          {t.footer.copyright}
        </p>
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "14px",
            color: "#5A5A5A",
          }}
        >
          {t.footer.builtWith}
        </p>
      </div>
    </footer>
  );
}
