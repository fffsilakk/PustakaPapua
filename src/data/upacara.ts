// src/data/upacara.ts
export interface Upacara {
  id: string;
  name: string;
  tribe: string;
  region: string;
  category: "syukuran" | "pernikahan" | "kematian" | "inisiasi" | "lainnya";
  thumbnail: string;
  shortDescription: string;
  description: string;
  mainMoment?: string; // contoh: "Syukuran panen", "Pernikahan", dll
  isFavorite: boolean;
}

export const upacaraList: Upacara[] = [
  {
    id: "bakar-batu",
    name: "Upacara Bakar Batu",
    tribe: "Berbagai suku Pegunungan Papua",
    region: "Pegunungan Papua",
    category: "syukuran",
    thumbnail:
      "https://kab-yalimo.kpu.go.id/public/kab-yalimo/images/1764483024_03968e81f2b55c38b8fc.jpg",
    shortDescription:
      "Tradisi memasak bersama dengan batu panas sebagai bentuk syukur, perdamaian, dan kebersamaan.",
    description:
      "Upacara Bakar Batu dilakukan sebagai ungkapan syukur, perayaan pernikahan, penerimaan tamu penting, atau upacara duka. Batu dipanaskan lalu digunakan untuk memasak babi, sayuran, dan umbi-umbian yang kemudian dinikmati bersama sebagai simbol persatuan.",

    mainMoment: "Syukuran panen",
    isFavorite: false,
  },
  {
    id: "mbis-asmat",
    name: "Upacara Mbis (Mbismbu)",
    tribe: "Suku Asmat",
    region: "Pesisir selatan Papua",
    category: "kematian",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZTNkA8yGQTqcSFFZZ9mpcVm46kltizYBaTw&s",
    shortDescription:
      "Upacara pemahatan patung leluhur untuk menghormati dan mengenang orang yang telah meninggal.",
    description:
      "Dalam upacara Mbis, suku Asmat memahat patung leluhur sebagai cara menjaga ingatan terhadap anggota keluarga yang telah meninggal dan menghormati roh mereka. Upacara ini menguatkan hubungan antara yang hidup dan leluhur.",
    mainMoment: "Peringatan kematian",
    isFavorite: false,
  },
];
