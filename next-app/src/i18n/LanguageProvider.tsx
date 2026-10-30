"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { id } from "./id";
import { en } from "./en";
import type { Dictionary } from "./id";

interface LanguageContextType {
  lang: "id" | "en";
  setLang: (lang: "id" | "en") => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

function getInitialLang(): "id" | "en" {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "id" || saved === "en") {
      return saved;
    }
  } catch {}
  return "id";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<"id" | "en">(getInitialLang);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = document.querySelectorAll(".reveal");

    if (prefersReducedMotion) {
      elements.forEach((el) => el.classList.add("visible"));
      return;
    }

    elements.forEach((el) => el.classList.add("js-reveal"));

    const observer = new IntersectionObserver(
      (entries, io) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const setLang = (newLang: "id" | "en") => {
    setLangState(newLang);
    try {
      localStorage.setItem("lang", newLang);
    } catch {}
    document.documentElement.lang = newLang;
  };

  const dict = lang === "en" ? en : id;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: dict }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
