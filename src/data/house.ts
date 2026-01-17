// src/data/house.ts
export type HouseRegion = "pegunungan" | "pesisir" | "kepulauan" | "danau";
export type HouseCategory = "hunian" | "pendidikan" | "ritual" | "komunal";

export interface House {
  id: string;
  name: string;
  region: HouseRegion;
  category: HouseCategory;
  thumbnail: string;
  heroImage?: string;
  shortDescription: string;
  description: string;
  materials: string; // bahan utama
  structure: string; // bentuk/struktur
  mainFunction: string; // fungsi utama
  isFavorite?: boolean;
}

export const houses: House[] = [
  {
    id: "honai",
    name: "Rumah Honai",
    region: "pegunungan",
    category: "hunian",
    thumbnail: "/images/rumah/honai-thumb.jpg",
    heroImage: "/images/rumah/honai-hero.jpg",
    shortDescription:
      "Rumah bundar beratap rumbia khas suku Dani di pegunungan Papua.",
    description:
      "Honai adalah rumah tradisional suku Dani di Lembah Baliem. Bentuknya bundar dengan dinding kayu dan atap rumbia yang tebal, dirancang untuk menahan udara dingin pegunungan. Di dalam Honai, keluarga berkumpul, tidur, dan bercerita di sekitar api unggun.",
    materials:
      "Kayu sebagai dinding dan rangka, atap dari jerami atau daun rumbia tebal.",
    structure:
      "Bentuk bundar, berlantai tanah, satu pintu kecil, tanpa jendela untuk menjaga kehangatan.",
    mainFunction:
      "Hunian keluarga dan tempat berkumpul untuk menjaga kehangatan di daerah pegunungan.",
    isFavorite: false,
  },
  {
    id: "kariwari",
    name: "Rumah Kariwari",
    region: "pesisir",
    category: "pendidikan",
    thumbnail: "/images/rumah/kariwari-thumb.jpg",
    heroImage: "/images/rumah/kariwari-hero.jpg",
    shortDescription:
      "Rumah tinggi berbentuk kerucut dari masyarakat Tobati-Enggros di sekitar Teluk Youtefa.",
    description:
      "Rumah Kariwari adalah rumah tradisional masyarakat Tobati-Enggros di kawasan pesisir sekitar Teluk Youtefa, Jayapura. Bangunannya tinggi dengan bentuk atap menjulang seperti kerucut. Di dalamnya, anak laki-laki belajar nilai adat, keterampilan hidup, dan persiapan menjadi orang dewasa.",
    materials:
      "Kayu sebagai tiang dan rangka, anyaman daun sagu atau rumbia untuk dinding dan atap.",
    structure:
      "Rumah panggung bertingkat dengan tiang-tiang tinggi dan atap menjulang ke atas.",
    mainFunction:
      "Tempat belajar adat, berkumpul laki-laki, dan melaksanakan kegiatan pendidikan tradisional.",
    isFavorite: false,
  },
  {
    id: "rumsram",
    name: "Rumah Rumsram",
    region: "kepulauan",
    category: "pendidikan",
    thumbnail: "/images/rumah/rumsram-thumb.jpg",
    heroImage: "/images/rumah/rumsram-hero.jpg",
    shortDescription:
      "Rumah panggung khas suku Biak yang digunakan sebagai rumah laki-laki.",
    description:
      "Rumsram adalah rumah tradisional suku Biak di wilayah kepulauan utara Papua. Rumah ini berfungsi sebagai rumah laki-laki, tempat anak laki-laki tinggal, belajar tentang laut, perang, dan adat istiadat dari para tetua.",
    materials:
      "Tiang dan rangka dari kayu, lantai dan dinding dari papan kayu atau anyaman bambu, atap daun sagu.",
    structure:
      "Rumah panggung besar dengan kolong tinggi dan atap memanjang seperti perahu terbalik.",
    mainFunction:
      "Tempat tinggal dan pendidikan tradisional bagi laki-laki muda suku Biak.",
    isFavorite: false,
  },
  {
    id: "jew",
    name: "Rumah Jew",
    region: "danau",
    category: "hunian",
    thumbnail: "/images/rumah/jew-thumb.jpg",
    heroImage: "/images/rumah/jew-hero.jpg",
    shortDescription: "Rumah panggung di tepi danau khas masyarakat Sentani.",
    description:
      "Jew adalah rumah tradisional masyarakat di sekitar Danau Sentani. Rumah ini umumnya berbentuk panggung dan dibangun dekat tepi air. Letaknya yang berdekatan dengan danau memudahkan masyarakat untuk menangkap ikan dan menggunakan transportasi perahu.",
    materials:
      "Kayu sebagai tiang dan lantai, dinding papan atau anyaman, atap dari daun sagu.",
    structure:
      "Rumah panggung memanjang dengan tiang-tiang yang ditancapkan dekat permukaan air atau tepi danau.",
    mainFunction:
      "Hunian keluarga yang terhubung langsung dengan aktivitas di danau seperti menangkap ikan dan berperahu.",
    isFavorite: false,
  },
];
