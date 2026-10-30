# PRD — Web Portofolio Pribadi

**Versi:** 1.0 · **Status:** Draft · **Pemilik:** Christian

## 1. Ringkasan
Web portofolio satu orang untuk menampilkan profil dan daftar proyek. Tujuan: recruiter/klien paham siapa kamu dan apa yang sudah dikerjakan dalam <2 menit.

## 2. Tujuan
- Tampilkan profil (bio, skill, kontak) jelas.
- Tampilkan proyek dengan bukti (gambar, deskripsi, link).
- Mudah di-update tanpa sentuh kode (via file data/CMS).

**Non-goal (v1):** blog, komentar, login user, multi-bahasa, dashboard admin.

## 3. Pengguna
- Recruiter / hiring manager — scan cepat.
- Klien potensial — cek kualitas kerja.
- Kamu — update konten.

## 4. Halaman & Fitur (MVP)
| Halaman | Isi | Prioritas |
|---|---|---|
| Home | Hero: nama, role, 1 kalimat value, CTA (Lihat Proyek / Hubungi) | P0 |
| Profil | Bio, foto, skill, pengalaman, pendidikan, CV download | P0 |
| Proyek (list) | Grid kartu: thumbnail, judul, tech stack, filter/tag | P0 |
| Detail proyek | Deskripsi, masalah→solusi, gambar, tech, link demo/repo | P0 |
| Kontak | Email, LinkedIn, GitHub; form kontak opsional | P1 |

**P0 lain:** responsive mobile, dark/light (P1), SEO dasar (title, meta, OG image), 404 page.

## 5. Kebutuhan Fungsional
- FR1: Data proyek dari satu sumber (JSON/MD frontmatter) — tambah proyek = tambah 1 entri.
- FR2: Kartu proyek bisa difilter berdasarkan tag.
- FR3: Link eksternal buka tab baru + `rel="noopener"`.
- FR4: Form kontak (jika ada) kirim ke email/Formspree; anti-spam honeypot.
- FR5: Semua halaman punya metadata unik.

## 6. Kebutuhan Non-Fungsional
- Lighthouse Performance/Accessibility/SEO ≥ 90.
- LCP < 2.5s di 3G cepat.
- Aksesibel: kontras WCAG AA, alt text, navigasi keyboard.
- Deploy static (Vercel/Netlify), biaya Rp0.

## 7. Model Data Proyek
```
title, slug, summary, description, thumbnail, images[],
tech[], tags[], role, year, demoUrl, repoUrl, featured(bool)
```

## 8. Metrik Sukses
- Semua proyek utama tampil, 0 broken link.
- Recruiter bisa temukan kontak ≤ 2 klik.
- Update proyek < 5 menit.

## 9. Asumsi & TBD
- Stack: static site (Astro/Next static) + Tailwind — *TBD, bisa disesuaikan*.
- Jumlah proyek awal: *TBD*.
- Domain: *TBD*.
- Bahasa konten: Indonesia/Inggris — *TBD*.

## 10. Milestone
1. Setup + halaman Home/Profil.
2. List + detail proyek.
3. Kontak + SEO + deploy.

---
Mau saya simpan jadi `PRD.md` dan lanjut scaffolding?
