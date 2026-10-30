"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function Navigation() {
  const { lang, setLang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const detailsRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (detailsRef.current && !detailsRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#works", label: t.nav.works },
    { href: "#expertise", label: t.nav.expertise },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-paper)]">
      <nav className="max-w-[1280px] mx-auto px-12 h-20 flex items-center justify-between md:px-8 sm:px-5">
        <Link
          href="#home"
          className="text-xl font-bold tracking-wide"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          CW<span className="text-[var(--color-accent)]">.</span>
        </Link>

        <ul className="hidden md:flex gap-12 list-none m-0 p-0">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-base font-medium transition-colors hover:text-[var(--color-accent)] focus:text-[var(--color-accent)]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex gap-4 items-center">
          <div className="flex gap-2" role="group" aria-label={t.nav.ariaLanguage}>
            <button
              onClick={() => setLang("id")}
              aria-pressed={lang === "id"}
              className="text-base font-medium px-2 py-1 transition-colors"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: lang === "id" ? "var(--color-ink)" : "#5A5A5A",
                borderBottom: lang === "id" ? "2px solid var(--color-accent)" : "none",
              }}
            >
              ID
            </button>
            <button
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              className="text-base font-medium px-2 py-1 transition-colors"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: lang === "en" ? "var(--color-ink)" : "#5A5A5A",
                borderBottom: lang === "en" ? "2px solid var(--color-accent)" : "none",
              }}
            >
              EN
            </button>
          </div>

          <Link
            href="#contact"
            className="px-6 py-2 bg-[var(--color-accent)] text-white font-medium transition-transform hover:scale-[1.02] rounded-[8px]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {t.nav.getInTouch}
          </Link>
        </div>

        <details
          className="relative md:hidden"
          ref={detailsRef}
          open={isOpen}
          onToggle={(e) => setIsOpen((e.target as HTMLDetailsElement).open)}
        >
          <summary
            className="list-none cursor-pointer leading-none p-2"
            aria-label={t.nav.ariaToggleMenu}
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px" }}
          >
            {isOpen ? t.nav.close : t.nav.menu}
          </summary>
          <ul
            className="absolute right-0 top-full mt-2 min-w-48 bg-[var(--color-surface)] p-4 list-none m-0 space-y-3"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-base font-medium transition-colors hover:text-[var(--color-accent)]"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2 border-t border-[var(--color-border)]">
              <div
                className="flex gap-2"
                role="group"
                aria-label={t.nav.ariaLanguage}
              >
                <button
                  onClick={() => {
                    setLang("id");
                    setIsOpen(false);
                  }}
                  aria-pressed={lang === "id"}
                  className="text-base font-medium px-2 py-1 transition-colors flex-1 text-center"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: lang === "id" ? "var(--color-ink)" : "#5A5A5A",
                    borderBottom:
                      lang === "id" ? "2px solid var(--color-accent)" : "none",
                  }}
                >
                  ID
                </button>
                <button
                  onClick={() => {
                    setLang("en");
                    setIsOpen(false);
                  }}
                  aria-pressed={lang === "en"}
                  className="text-base font-medium px-2 py-1 transition-colors flex-1 text-center"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: lang === "en" ? "var(--color-ink)" : "#5A5A5A",
                    borderBottom:
                      lang === "en" ? "2px solid var(--color-accent)" : "none",
                  }}
                >
                  EN
                </button>
              </div>
            </li>
          </ul>
        </details>
      </nav>
    </header>
  );
}
