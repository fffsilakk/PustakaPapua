export type EduCategory = "coding" | "agrikultur" | "bahasa" | "budaya";
export type FilterValue = "all" | EduCategory; // Ini akan otomatis mencakup budaya

export interface EduModule {
  id: string;
  title: string;
  category: EduCategory;
  level: "pemula" | "menengah";
  durationMinutes: number;
  isOfflineAvailable: boolean;
  shortDescription: string;
}

export const eduModules: EduModule[] = [
  // =====================
  // MODUL YANG SUDAH ADA
  // =====================
  {
    id: "HtmlDasar",
    title: "Belajar HTML Dasar untuk Anak Papua",
    category: "coding",
    level: "pemula",
    durationMinutes: 45,
    isOfflineAvailable: false,
    shortDescription:
      "Pengenalan struktur dasar web: tag, paragraf, gambar, dan link.",
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
  },
  {
    id: "english-guide-basic",
    title: "Bahasa Inggris Dasar untuk Pemandu Wisata Papua",
    category: "bahasa",
    level: "pemula",
    durationMinutes: 50,
    isOfflineAvailable: false,
    shortDescription: "Kalimat praktis untuk menyambut dan menemani wisatawan.",
  },

  // =====================
  // MODUL BARU – PUSTAKA PAPUA / BUDAYA
  // =====================

  {
    id: "papua-intro",
    title: "Pengenalan Papua dan Keberagaman Budaya",
    category: "budaya",
    level: "pemula",
    durationMinutes: 30,
    isOfflineAvailable: true,
    shortDescription:
      "Mengenal Papua, wilayah adat, dan kekayaan budaya yang dimiliki.",
  },
  {
    id: "suku-papua-dasar",
    title: "Suku-Suku di Papua",
    category: "budaya",
    level: "pemula",
    durationMinutes: 45,
    isOfflineAvailable: true,
    shortDescription:
      "Pengenalan suku-suku besar Papua beserta ciri khas dan wilayahnya.",
  },
  {
    id: "tarian-adat-papua",
    title: "Tarian Adat Papua",
    category: "budaya",
    level: "pemula",
    durationMinutes: 40,
    isOfflineAvailable: false,
    shortDescription:
      "Belajar jenis tarian adat Papua dan makna di balik setiap gerakan.",
  },
  {
    id: "rumah-adat-papua",
    title: "Rumah Adat Papua",
    category: "budaya",
    level: "pemula",
    durationMinutes: 35,
    isOfflineAvailable: true,
    shortDescription:
      "Mengenal Honai, Kariwari, dan rumah adat Papua lainnya beserta fungsinya.",
  },
  {
    id: "bahasa-daerah-papua",
    title: "Bahasa Daerah Papua (Dasar)",
    category: "budaya",
    level: "pemula",
    durationMinutes: 45,
    isOfflineAvailable: true,
    shortDescription:
      "Kosakata dasar dan salam dalam beberapa bahasa daerah Papua.",
  },
  {
    id: "upacara-adat-papua",
    title: "Upacara Adat dan Tradisi Papua",
    category: "budaya",
    level: "menengah",
    durationMinutes: 50,
    isOfflineAvailable: false,
    shortDescription:
      "Memahami upacara adat seperti bakar batu dan nilai sosial di dalamnya.",
  },
];
