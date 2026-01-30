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
    thumbnail:
      "https://www.rukita.co/stories/wp-content/uploads/2023/11/2244180226.webp",
    heroImage:
      "https://www.rukita.co/stories/wp-content/uploads/2023/11/2244180226.webp",
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
    id: "ukulele-papua",
    name: "Ukulele Papua",
    region: "pesisir",
    category: "petik",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmDZy8GaLAhML9HcrOl7b_De4DU1voQNB2bg&s",
    heroImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmDZy8GaLAhML9HcrOl7b_De4DU1voQNB2bg&s",
    shortDescription:
      "Alat musik ikonik pembawa keceriaan, nadi utama irama String Band Papua.",
    description:
      "Ukulele (sering disebut 'Juk') sangat populer di Papua. Alat ini menjadi instrumen vital dalam musik String Band dan lagu-lagu rakyat, menghasilkan irama ritmis yang khas dan mengajak pendengarnya menari.",
    materials:
      "Kayu lokal (seperti kayu matoa), senar nilon (sering menggunakan senar pancing).",
    howToPlay:
      "Digenjreng (strumming) dengan teknik ritmis yang cepat dan dinamis.",
    usageContext:
      "Iringan String Band, pesta rakyat (bakar batu), ibadah kreatif, dan kumpul santai.",
    isFavorite: false,
  },

  {
    id: "fu",
    name: "Fu (Seruling Bambu Papua)",
    region: "pesisir",
    category: "tiup",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Fuu_dari_bagian_atas.png/500px-Fuu_dari_bagian_atas.png",
    heroImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Fuu_dari_bagian_atas.png/500px-Fuu_dari_bagian_atas.png",
    shortDescription:
      "Seruling bambu dengan nada lembut yang sering dimainkan di Selatan Papua.",
    description:
      "Fuu merupakan alat musik Papua yang terbuat dari kayu dan bambu dan dimainkan dengan cara meniupkan udara ke lubang atau bagian yang terbuka. Selain digunakan sebagai sarana komunikasi untuk memanggil orang lain, alat musik ini digunakan untuk mengiringi tarian masyarakat Papua, khususnya suku Asmat, Kabupaten Merauke.",
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
    thumbnail:
      "https://cdn.rri.co.id/berita/Bovendigoel/o/1727383303183-Pikon_failfaire/zvmegpbch93quyh.jpeg",
    heroImage:
      "https://cdn.rri.co.id/berita/Bovendigoel/o/1727383303183-Pikon_failfaire/zvmegpbch93quyh.jpeg",
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
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdjV146BwCFopl_bf8RjB9JLiGuKscNTryAQ&s",
    heroImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdjV146BwCFopl_bf8RjB9JLiGuKscNTryAQ&s",
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
