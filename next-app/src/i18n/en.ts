import type { Dictionary } from "./id";

export const en: Dictionary = {
  nav: {
    about: "About",
    works: "Works",
    expertise: "Expertise",
    contact: "Contact",
    getInTouch: "Get in Touch",
    menu: "Menu",
    close: "Close",
    ariaToggleMenu: "Toggle menu",
    ariaLanguage: "Language",
  },
  hero: {
    headline: "Building digital experiences with purpose.",
    supporting:
      "I build thoughtful digital products through clean code, structured thinking, and attention to detail.",
    ctaViewProjects: "View Projects",
    ctaContact: "Contact Me",
    labelRole: "ROLE",
    labelLocation: "LOCATION",
    labelAvailability: "AVAILABILITY",
    labelTechnologies: "TECHNOLOGIES",
    valueRole: "Junior Software Engineer",
    valueLocation: "Bekasi, Indonesia",
    valueAvailability: "Open to opportunities",
    photoPlaceholder: "Photo coming soon",
    altPortrait: "Portrait of Christian Widyadmaja",
  },
  works: {
    heading: "Selected Works",
    viewOnGithub: "View on GitHub",
    ariaKosGithub: "View KosFindr on GitHub",
    ariaYoloGithub: "View Vehicle Detection and Counting on GitHub",
    kos: {
      title: "KosFindr",
      type: "Thesis Project / Web Application",
      overview:
        "A web-based recommendation system for finding boarding houses (kos) in the Greater Jakarta area (Jabodetabek). Users need to compare price, location, facilities, and kos type to find one that fits their needs.",
      labelSolution: "SOLUTION",
      solution:
        "A recommendation system using Constraint-Based Filtering that narrows kos options by user preferences: budget, location, facilities, and kos type.",
      captionResult:
        "Recommendation results page: kos listings ranked by Utility Score and facility match.",
      captionForm: "Four-step preference form: budget, area, kos type, facilities.",
      captionDetail: "Kos detail with the list of facilities.",
      altResult:
        "Recommendation results page: kos listings ranked by Utility Score and facility match.",
      altForm:
        "Four-step preference form: budget & area, kos type, facilities, confirmation.",
      altDetail: "Kos detail with the list of facilities.",
    },
    yolo: {
      title: "Vehicle Detection and Counting",
      type: "Final Semester Project / Computer Vision",
      description: "A vehicle detection and counting project using YOLOv8n.",
      caption1:
        "YOLOv8n detection output: boxes with class labels, confidence, and a vehicle counter.",
      caption2: "Another frame from the same footage.",
      alt1:
        "YOLOv8n detection output on a video frame: boxes with class labels and confidence, and a vehicle counter.",
      alt2: "YOLOv8n detection output on another video frame.",
    },
  },
  about: {
    heading: "About",
    labelEducation: "EDUCATION",
    labelLocation: "LOCATION",
    labelLookingFor: "LOOKING FOR",
    valueEducation:
      "Universitas Sanata Dharma, B.Sc. Informatics (System Development), 2022 - 2026",
    valueLocation: "Bekasi, Indonesia",
    valueLookingFor:
      "Junior Full-Stack Developer, Backend Engineer, or System Analyst",
    p1: "I'm Christian Widyadmaja, an Informatics graduate from Universitas Sanata Dharma with a focus on System Development. I build web applications with HTML, CSS, JavaScript, PHP, and Laravel, and I use React and Next.js on the front end, including this site.",
    p2: "My thesis, KosFindr, started with the data. I cleaned and structured a raw Mamikos dataset into SQL before building constraint-based recommendation logic on top of it. My final semester project followed the same order: prepare and annotate the dataset first, then train a YOLOv8 model to detect and count vehicles.",
    p3: "I'm looking for a junior role where I can keep building and learning on a real team.",
  },
  expertise: {
    heading: "Technical Expertise",
    usedIn: "Used in:",
    thisSite: "this site",
    frontend: {
      title: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS"],
      context:
        "Used in: KosFindr (HTML, CSS, JavaScript) and this site (React, Next.js, TypeScript, Tailwind CSS)",
    },
    backend: {
      title: "Backend",
      items: ["PHP", "Laravel", "Blade", "Python"],
      context:
        "Used in: KosFindr (PHP, Laravel, Blade) and Vehicle Detection and Counting (Python)",
    },
    database: {
      title: "Database",
      items: ["MySQL"],
      context: "Used in: KosFindr",
    },
    computerVision: {
      title: "Computer Vision",
      items: ["YOLOv8", "Roboflow"],
      context:
        "Used in: Vehicle Detection and Counting (Roboflow for dataset annotation)",
    },
    tools: {
      title: "Tools",
      items: ["Git", "GitHub", "Figma", "Google Colab"],
      context: null,
    },
  },
  contact: {
    heading: "Contact",
    intro:
      "I'm looking for a junior role. Feel free to reach me by email or on GitHub.",
    labelEmail: "EMAIL",
    labelGitHub: "GITHUB",
    emailAddress: "cp.christianwidy@gmail.com",
    githubHandle: "github.com/chrstnwdyy",
  },
  footer: {
    copyright: "© 2026 Christian Widyadmaja",
    builtWith: "Built with Next.js, TypeScript, and Tailwind CSS",
  },
};
