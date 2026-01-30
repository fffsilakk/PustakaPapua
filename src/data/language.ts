// src/data/language.ts
export type LanguageRegion =
  | "pesisir"
  | "pegunungan"
  | "kepulauan"
  | "lembah"
  | "kota";

export type LanguageCategory =
  | "bahasa_daerah"
  | "dialek"
  | "lingua_franca"
  | "lainnya";

export interface LocalLanguage {
  id: string;
  name: string; // Nama bahasa
  region: LanguageRegion; // Wilayah utama penutur
  category: LanguageCategory;
  thumbnail: string; // Foto kampung/ikon budaya terkait
  heroImage?: string;
  shortDescription: string; // Deskripsi singkat bahasa
  description: string; // Penjelasan lebih panjang
  area: string; // Kabupaten / area penyebaran
  numberOfSpeakers?: string; // Perkiraan jumlah penutur (opsional, teks)
  usageDomain: string; // Dipakai di rumah, adat, gereja, pasar, dll
  isEndangered?: boolean; // Bahasa terancam punah atau tidak
  isFavorite?: boolean;
  exampleGreeting?: string; // Contoh sapaan sederhana
  exampleMeaning?: string; // Arti dari sapaan
}

// contoh awal, silakan ganti konten sesuai data yang kamu punya
export const localLanguages: LocalLanguage[] = [
  {
    id: "sentani",
    name: "Bahasa Sentani",
    region: "lembah",
    category: "bahasa_daerah",
    thumbnail: "https://example.com/sentani-thumbnail.jpg",
    heroImage: "https://example.com/sentani-hero.jpg",
    shortDescription:
      "Bahasa lokal yang digunakan oleh masyarakat di sekitar Danau Sentani dan sekitarnya.",
    description:
      "Bahasa Sentani digunakan oleh komunitas di sekitar Danau Sentani, Kabupaten Jayapura. Bahasa ini memiliki beberapa variasi dialek di tiap kampung dan menjadi bagian penting dalam upacara adat, cerita rakyat, dan keseharian masyarakat.",
    area: "Kabupaten Jayapura, Papua",
    numberOfSpeakers: "± 20.000 penutur (perkiraan kasar)",
    usageDomain: "Komunikasi sehari-hari, upacara adat, cerita lisan.",
    isEndangered: true,
    isFavorite: false,
    exampleGreeting: "Aroko…",
    exampleMeaning: "Sapaan hangat kepada orang yang ditemui.",
  },
  {
    id: "mee",
    name: "Bahasa Mee",
    region: "pegunungan",
    category: "bahasa_daerah",
    thumbnail: "https://example.com/mee-thumbnail.jpg",
    shortDescription:
      "Bahasa yang digunakan oleh masyarakat Mee di wilayah pegunungan Papua.",
    description:
      "Bahasa Mee dituturkan oleh masyarakat di wilayah pegunungan Papua bagian tengah. Bahasa ini kaya istilah yang berkaitan dengan pertanian, alam, dan kehidupan sosial.",
    area: "Kabupaten Dogiyai, Deiyai, Nabire dan sekitarnya",
    numberOfSpeakers: "Puluhan ribu penutur (perkiraan kasar)",
    usageDomain: "Kehidupan sehari-hari, gereja, musyawarah adat.",
    isEndangered: false,
    isFavorite: false,
    exampleGreeting: "Aiai…",
    exampleMeaning: "Sapaan/ungkapan perjumpaan dengan orang lain.",
  },
  {
    id: "moy-jayapura",
    name: "Bahasa Moy (Moi)",
    region: "pesisir",
    category: "bahasa_daerah",
    thumbnail: "https://example.com/moy-jayapura-thumbnail.jpg",
    shortDescription:
      "Bahasa suku Moy di Kabupaten Jayapura, yang membentang dari daratan Sabron hingga pesisir Kendate.",
    description:
      "Bahasa ini merupakan warisan suku Moy di wilayah Depapre. Berkat dokumentasi dari Almarhum Pak Guru Isai Sato (SDN Kendate), bahasa ini kembali dipelajari oleh generasi muda untuk mencegah kepunahan bahasa ibu di wilayah pesisir utara.",
    area: "Sabron, Dosay, Waibron, Maribu, dan Kendate (Kabupaten Jayapura)",
    numberOfSpeakers: "Penutur terbatas (dalam upaya revitalisasi)",
    usageDomain:
      "Pendidikan sekolah dasar (muatan lokal), percakapan orang tua, dan literasi adat.",
    isEndangered: true,
    isFavorite: true,
    exampleGreeting: "Daba",
    exampleMeaning: "Sapaan umum atau tanda perjumpaan.",
  },
];
