export type EduCategory = "coding" | "agrikultur" | "bahasa";

export interface EduModule {
  id: string;
  title: string;
  category: EduCategory;
  level: "pemula" | "menengah";
  durationMinutes: number;
  isOfflineAvailable: boolean;
  shortDescription: string;
  content: string[];
}

export const eduModules: EduModule[] = [
  {
    id: "html-dasar-papua",
    title: "Belajar HTML Dasar untuk Anak Papua",
    category: "coding",
    level: "pemula",
    durationMinutes: 45,
    isOfflineAvailable: false,
    shortDescription:
      "Pengenalan struktur dasar web: tag, paragraf, gambar, dan link.",
    content: [
      "Apa itu HTML dan bagaimana perannya dalam membangun halaman web.",
      "Mengenal tag dasar seperti <html>, <head>, <body>, <h1>-<h6>, <p>, dan <img>.",
      "Latihan membuat halaman sederhana berisi judul, paragraf, dan gambar pemandangan Papua.",
    ],
  },
  {
    id: "kopi-wamena-modern",
    title: "Teknik Dasar Budidaya Kopi Wamena",
    category: "agrikultur",
    level: "pemula",
    durationMinutes: 40,
    isOfflineAvailable: false,
    shortDescription:
      "Langkah sederhana menanam kopi dengan cara yang lebih produktif.",
    content: [
      "Memilih bibit kopi unggul yang sesuai dengan iklim Wamena.",
      "Teknik penanaman dan perawatan tanaman kopi untuk hasil maksimal.",
      "Pengenalan metode panen dan pasca panen yang efisien.",
    ],
  },
  {
    id: "english-guide-basic",
    title: "Bahasa Inggris Dasar untuk Pemandu Wisata Papua",
    category: "bahasa",
    level: "pemula",
    durationMinutes: 50,
    isOfflineAvailable: false,
    shortDescription: "Kalimat praktis untuk menyambut dan menemani wisatawan.",
    content: [
      "Salam dan perkenalan diri dalam bahasa Inggris.",
      "Kalimat umum untuk menjelaskan atraksi wisata di Papua.",
      "Frasa penting untuk membantu wisatawan selama tur.",
    ],
  },
];
