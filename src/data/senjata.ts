// src/data/senjata.ts

export type SenjataType =
  | "busur-panah"
  | "tombak"
  | "kapak"
  | "belati"
  | "perisai"
  | "lainnya";

export interface Senjata {
  id: string;
  name: string;
  type: SenjataType;
  tribe: string;
  region: string;
  thumbnail: string;
  shortDescription: string;
  description: string;
  usage: string[]; // contoh: ["Berburu", "Perang", "Upacara adat"]
  isFavorite: boolean;
}

export const senjataList: Senjata[] = [
  {
    id: "busur-panah-papua",
    name: "Busur dan Panah Papua",
    type: "busur-panah",
    tribe: "Berbagai suku di Papua",
    region: "Pegunungan dan pedalaman Papua",
    thumbnail:
      "https://st2.depositphotos.com/4507459/6929/i/950/depositphotos_69297411-stock-photo-man-with-bow-and-arrow.jpg",
    shortDescription:
      "Senjata utama untuk berburu dan berperang, terdiri dari busur kayu dan panah dengan ujung runcing.",
    description:
      "Busur dan panah merupakan salah satu senjata tradisional paling dikenal di Papua. Senjata ini digunakan untuk berburu hewan di hutan, melindungi kampung, dan pada masa lalu dipakai dalam peperangan antar-suku. Panah dapat dibuat dengan ujung kayu runcing, batu, atau logam sederhana.",
    usage: ["Berburu", "Perang", "Perlindungan kampung"],
    isFavorite: false,
  },
  {
    id: "tombak-papua",
    name: "Tombak Tradisional",
    type: "tombak",
    tribe: "Berbagai suku pesisir dan pedalaman",
    region: "Berbagai wilayah Papua",
    thumbnail:
      "https://cnc-magazine.oramiland.com/parenting/images/denian_tombakpapua_VugYeYv.width-800.format-webp.webp",
    shortDescription:
      "Tombak dengan batang kayu panjang dan ujung runcing, dipakai untuk berburu dan upacara adat.",
    description:
      "Tombak tradisional Papua biasanya dibuat dari kayu keras dengan ujung yang diruncingkan atau diberi mata tombak sederhana. Selain digunakan untuk berburu dan menjaga keamanan, tombak juga sering tampil dalam tarian perang dan upacara adat sebagai simbol keberanian.",
    usage: ["Berburu", "Perang", "Upacara adat", "Tarian perang"],
    isFavorite: false,
  },
  {
    id: "belati-kasuari",
    name: "Belati Tulang Kasuari",
    type: "belati",
    tribe: "Beberapa suku di Papua",
    region: "Papua",
    thumbnail:
      "https://asset.kompas.com/crops/G0FuY5me-g3-U_xj8IQTBqnEALs=/0x76:1000x576/375x240/data/photo/2018/04/25/1481996292.jpg",
    shortDescription:
      "Pisau kecil yang dibuat dari tulang burung kasuari, sering dipakai dekat dengan tubuh.",
    description:
      "Belati tulang kasuari adalah senjata sekaligus aksesoris tradisional yang dibuat dari tulang burung kasuari. Senjata ini biasanya diselipkan di pinggang atau lengan dan melambangkan keberanian serta kedekatan dengan alam.",
    usage: ["Perlengkapan diri", "Perang", "Simbol status"],
    isFavorite: false,
  },
];
