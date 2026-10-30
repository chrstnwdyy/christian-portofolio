export const id = {
  nav: {
    about: "Tentang",
    works: "Karya",
    expertise: "Keahlian",
    contact: "Kontak",
    getInTouch: "Hubungi Saya",
    menu: "Menu",
    close: "Tutup",
    ariaToggleMenu: "Buka menu",
    ariaLanguage: "Bahasa",
  },
  hero: {
    headline: "Membangun pengalaman digital yang bermakna.",
    supporting:
      "Saya membangun produk digital yang matang lewat kode yang bersih, cara berpikir terstruktur, dan perhatian pada detail.",
    ctaViewProjects: "Lihat Proyek",
    ctaContact: "Hubungi Saya",
    labelRole: "PERAN",
    labelLocation: "LOKASI",
    labelAvailability: "KETERSEDIAAN",
    labelTechnologies: "TEKNOLOGI",
    valueRole: "Junior Software Engineer",
    valueLocation: "Bekasi, Indonesia",
    valueAvailability: "Terbuka untuk peluang",
    photoPlaceholder: "Foto menyusul",
    altPortrait: "Foto Christian Widyadmaja",
  },
  works: {
    heading: "Karya Pilihan",
    viewOnGithub: "Lihat di GitHub",
    ariaKosGithub: "Lihat KosFindr di GitHub",
    ariaYoloGithub: "Lihat Deteksi dan Penghitungan Kendaraan di GitHub",
    kos: {
      title: "KosFindr",
      type: "Proyek Skripsi / Aplikasi Web",
      overview:
        "Sistem rekomendasi berbasis web untuk mencari kos di wilayah Jabodetabek. Pengguna perlu membandingkan harga, lokasi, fasilitas, dan tipe kos untuk menemukan yang sesuai kebutuhan.",
      labelSolution: "SOLUSI",
      solution:
        "Sistem rekomendasi dengan Constraint-Based Filtering yang menyaring pilihan kos berdasarkan preferensi pengguna: budget, lokasi, fasilitas, dan tipe kos.",
      captionResult:
        "Halaman hasil rekomendasi: daftar kos diranking dengan Utility Score dan kecocokan fasilitas.",
      captionForm: "Form preferensi 4 langkah: budget, wilayah, tipe kos, fasilitas.",
      captionDetail: "Detail kos dengan daftar fasilitas.",
      altResult:
        "Halaman hasil rekomendasi: daftar kos diranking dengan Utility Score dan kecocokan fasilitas.",
      altForm:
        "Form preferensi 4 langkah: budget & wilayah, tipe kos, fasilitas, konfirmasi.",
      altDetail: "Detail kos dengan daftar fasilitas.",
    },
    yolo: {
      title: "Deteksi dan Penghitungan Kendaraan",
      type: "Proyek Akhir Semester / Computer Vision",
      description: "Proyek deteksi dan penghitungan kendaraan menggunakan YOLOv8n.",
      caption1:
        "Hasil deteksi YOLOv8n: kotak dengan label kelas, confidence, dan penghitung kendaraan.",
      caption2: "Frame lain dari rekaman yang sama.",
      alt1:
        "Hasil deteksi YOLOv8n pada frame video: kotak dengan label kelas dan confidence, serta penghitung MOBIL / MOTOR / ORANG.",
      alt2: "Hasil deteksi YOLOv8n pada frame video lain.",
    },
  },
  about: {
    heading: "Tentang",
    labelEducation: "PENDIDIKAN",
    labelLocation: "LOKASI",
    labelLookingFor: "MENCARI",
    valueEducation:
      "Universitas Sanata Dharma, S1 Informatika (System Development), 2022 - 2026",
    valueLocation: "Bekasi, Indonesia",
    valueLookingFor:
      "Junior Full-Stack Developer, Backend Engineer, atau System Analyst",
    p1: "Saya Christian Widyadmaja, lulusan Informatika Universitas Sanata Dharma dengan konsentrasi System Development. Saya membangun aplikasi web dengan HTML, CSS, JavaScript, PHP, dan Laravel, serta memakai React dan Next.js di sisi front end, termasuk untuk situs ini.",
    p2: "Skripsi saya, KosFindr, dimulai dari data. Saya membersihkan dan menyusun dataset mentah Mamikos menjadi struktur SQL sebelum membangun logika rekomendasi constraint-based di atasnya. Proyek akhir semester saya mengikuti urutan yang sama: menyiapkan dan menganotasi dataset terlebih dahulu, lalu melatih model YOLOv8 untuk mendeteksi dan menghitung kendaraan.",
    p3: "Saya mencari posisi junior tempat saya bisa terus membangun dan belajar bersama tim yang nyata.",
  },
  expertise: {
    heading: "Keahlian Teknis",
    usedIn: "Dipakai di:",
    thisSite: "situs ini",
    frontend: {
      title: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS"],
      context:
        "Dipakai di: KosFindr (HTML, CSS, JavaScript) dan situs ini (React, Next.js, TypeScript, Tailwind CSS)",
    },
    backend: {
      title: "Backend",
      items: ["PHP", "Laravel", "Blade", "Python"],
      context:
        "Dipakai di: KosFindr (PHP, Laravel, Blade) dan Deteksi dan Penghitungan Kendaraan (Python)",
    },
    database: {
      title: "Database",
      items: ["MySQL"],
      context: "Dipakai di: KosFindr",
    },
    computerVision: {
      title: "Computer Vision",
      items: ["YOLOv8", "Roboflow"],
      context:
        "Dipakai di: Deteksi dan Penghitungan Kendaraan (Roboflow untuk anotasi dataset)",
    },
    tools: {
      title: "Tools",
      items: ["Git", "GitHub", "Figma", "Google Colab"],
      context: null,
    },
  },
  contact: {
    heading: "Kontak",
    intro:
      "Saya sedang mencari posisi junior. Silakan hubungi saya lewat email atau GitHub.",
    labelEmail: "EMAIL",
    labelGitHub: "GITHUB",
    emailAddress: "cp.christianwidy@gmail.com",
    githubHandle: "github.com/chrstnwdyy",
  },
  footer: {
    copyright: "© 2026 Christian Widyadmaja",
    builtWith: "Dibangun dengan Next.js, TypeScript, dan Tailwind CSS",
  },
};

export type Dictionary = typeof id;
