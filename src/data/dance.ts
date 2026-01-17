// src/data/dance.ts
export type DanceCategory = "upacara" | "perang" | "penyambutan" | "lainnya";
export type DanceRegion = "pegunungan" | "pesisir" | "kepulauan" | "lainnya";

export interface Dance {
  id: string;
  name: string;
  region: DanceRegion;
  category: DanceCategory;
  thumbnail: string;
  heroImage?: string;
  shortDescription: string;
  description: string;
  attributes: {
    jumlahPenari?: string;
    properti?: string;
    musikPengiring?: string;
    suasana?: string;
  };
  isFavorite?: boolean;
}

export const dances: Dance[] = [
  {
    id: "tari-sajojo",
    name: "Tari Sajojo",
    region: "pesisir",
    category: "penyambutan",
    thumbnail:
      "https://pesonapapua.com/wp-content/uploads/2024/04/Mengenal-Lebih-Dalam-Tentang-Tari-Sajojo-Papua.jpg",
    heroImage:
      "https://pesonapapua.com/wp-content/uploads/2024/04/Mengenal-Lebih-Dalam-Tentang-Tari-Sajojo-Papua.jpg",
    shortDescription:
      "Tarian pergaulan yang ceria dan penuh semangat dari Papua.",
    description:
      "Tari Sajojo adalah tarian pergaulan yang sangat populer di Papua, biasanya ditarikan dalam acara-acara sosial dan penyambutan tamu. Gerakan tangan yang lincah dan langkah kaki yang ceria menjadi ciri khasnya.",
    attributes: {
      jumlahPenari: "Bebas, biasanya berkelompok",
      properti: "Tanpa properti khusus, kadang memakai hiasan kepala",
      musikPengiring: "Lagu Sajojo dengan irama cepat",
      suasana: "Gembira dan penuh semangat",
    },
    isFavorite: false,
  },
  {
    id: "tari-yospan",
    name: "Tari Yospan",
    region: "pesisir",
    category: "penyambutan",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQTITKnYi4Ljjtt8TDi8Qfa5Mi2bvM8VDX1w&s",
    heroImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQTITKnYi4Ljjtt8TDi8Qfa5Mi2bvM8VDX1w&s",
    shortDescription:
      "Tarian kreasi pemuda Biak yang menggabungkan Yahe (pagi) dan Span (malam).",
    description:
      "Tari Yospan adalah tarian kreasi pemuda Biak Numfor yang menggabungkan dua gerakan tradisional: Yahe (gerakan pagi) dan Span (gerakan malam). Tarian ini melambangkan semangat generasi muda Papua.",
    attributes: {
      jumlahPenari: "Pasangan atau berkelompok",
      properti: "Kain cekryong dan noken",
      musikPengiring: "Gitar akustik dan tifa",
      suasana: "Ceria dan modern-tradisional",
    },
    isFavorite: false,
  },
  {
    id: "tari-perang",
    name: "Tari Perang Abun",
    region: "pegunungan",
    category: "perang",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRD86y2nvRE4NlTl52f0TW__xzHiYD5Sl14Q&s",
    heroImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRD86y2nvRE4NlTl52f0TW__xzHiYD5Sl14Q&s",
    shortDescription:
      "Tarian perang suku Abun dengan gerakan gagah dan penuh kekuatan.",
    description:
      "Tari Perang Abun adalah tarian tradisional suku Abun di Pegunungan Arfak yang menggambarkan pertempuran antar suku. Gerakan tangan memegang tombak dan perisai menjadi ciri khasnya.",
    attributes: {
      jumlahPenari: "6-12 penari pria",
      properti: "Tombak bambu dan perisai kayu",
      musikPengiring: "Tifa dan gong",
      suasana: "Gagah dan berwibawa",
    },
    isFavorite: false,
  },
];
