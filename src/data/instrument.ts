// src/data/instrument.ts
export type InstrumentCategory =
  | "ritmis"
  | "tiup"
  | "petik"
  | "melodis"
  | "lainnya";
export type InstrumentRegion =
  | "pegunungan"
  | "pesisir"
  | "kepulauan"
  | "lainnya";

export interface Instrument {
  id: string;
  name: string;
  region: InstrumentRegion;
  category: InstrumentCategory;
  thumbnail: string;
  heroImage?: string;
  shortDescription: string;
  description: string;
  materials: string; // bahan utama
  howToPlay: string; // cara memainkan
  usageContext: string; // dipakai untuk apa
  isFavorite?: boolean;
}

export const instruments: Instrument[] = [
  {
    id: "tifa",
    name: "Tifa Papua",
    region: "pesisir",
    category: "ritmis",
    thumbnail: "/images/alat-musik/tifa-thumb.jpg",
    heroImage: "/images/alat-musik/tifa-hero.jpg",
    shortDescription:
      "Gendang khas Papua yang mengatur ritme tarian dan nyanyian adat.",
    description:
      "Tifa adalah alat musik pukul khas Papua berbentuk tabung dengan satu sisi ditutup kulit. Tifa dipakai untuk mengiringi tarian perang, penyambutan tamu, ibadah, dan berbagai upacara adat.",
    materials: "Kayu berlubang dan kulit hewan yang dikeringkan.",
    howToPlay: "Dipukul dengan telapak tangan pada bagian kulit.",
    usageContext:
      "Mengiringi tarian adat, nyanyian gereja, dan upacara kampung.",
    isFavorite: false,
  },
  {
    id: "kecapi-papua",
    name: "Kecapi Papua",
    region: "pesisir",
    category: "petik",
    thumbnail: "/images/alat-musik/kecapi-thumb.jpg",
    heroImage: "/images/alat-musik/kecapi-hero.jpg",
    shortDescription:
      "Alat musik petik bernada lembut untuk mengiringi lagu-lagu rakyat Papua.",
    description:
      "Kecapi Papua adalah alat musik berdawai yang dimainkan dengan cara dipetik. Biasanya digunakan untuk mengiringi lagu-lagu rakyat dan pujian dengan suasana tenang.",
    materials: "Badan dari kayu, senar dari nilon atau kawat.",
    howToPlay: "Dipegang di pangkuan, senar dipetik dengan jari tangan.",
    usageContext: "Mengiringi nyanyian santai, cerita rakyat, dan ibadah.",
    isFavorite: false,
  },
  {
    id: "fu",
    name: "Fu (Seruling Bambu Papua)",
    region: "pegunungan",
    category: "tiup",
    thumbnail: "/images/alat-musik/fu-thumb.jpg",
    heroImage: "/images/alat-musik/fu-hero.jpg",
    shortDescription:
      "Seruling bambu dengan nada lembut yang sering dimainkan di pegunungan Papua.",
    description:
      "Fu adalah seruling bambu tradisional Papua yang menghasilkan nada-nada lembut dan melengking. Alat musik ini kerap dimainkan oleh anak muda sebagai hiburan dan pengiring tarian.",
    materials: "Bambu pilihan yang dilubangi pada beberapa titik.",
    howToPlay:
      "Ditiup pada ujung bambu sambil menutup lubang nada dengan jari.",
    usageContext:
      "Mengiringi tarian, permainan anak-anak, dan hiburan pribadi.",
    isFavorite: false,
  },
  {
    id: "pikon",
    name: "Pikon",
    region: "pegunungan",
    category: "tiup",
    thumbnail: "/images/alat-musik/pikon-thumb.jpg",
    heroImage: "/images/alat-musik/pikon-hero.jpg",
    shortDescription: "Alat musik tiup suku Dani yang suara getarannya unik.",
    description:
      "Pikon adalah alat musik tradisional suku Dani di Lembah Baliem. Suaranya dihasilkan dari getaran tali yang ditegangkan dan dikuatkan dengan resonansi bambu.",
    materials: "Bambu kecil dan tali serat alam.",
    howToPlay:
      "Ujung bambu ditempel di mulut, tali digetarkan sehingga menghasilkan bunyi.",
    usageContext:
      "Hiburan pribadi, komunikasi sederhana, dan melengkapi upacara adat.",
    isFavorite: false,
  },
  {
    id: "yi",
    name: "Yi (Gong Papua)",
    region: "kepulauan",
    category: "melodis",
    thumbnail: "/images/alat-musik/yi-thumb.jpg",
    heroImage: "/images/alat-musik/yi-hero.jpg",
    shortDescription:
      "Gong tradisional yang memberi penanda waktu dan momen penting.",
    description:
      "Yi adalah gong tradisional yang digunakan untuk menandai dimulainya upacara, memanggil warga berkumpul, atau mengiringi lagu-lagu tertentu di beberapa wilayah Papua.",
    materials: "Logam (perunggu/besi) dibentuk piringan.",
    howToPlay: "Dipukul dengan pemukul kayu berlapis kain.",
    usageContext: "Penanda upacara, mengiringi nyanyian dan tarian adat.",
    isFavorite: false,
  },
];
