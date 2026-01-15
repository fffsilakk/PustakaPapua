export type CultureCategory = "tarian" | "musik" | "bahasa" | "cerita";

export interface CultureItem {
  id: string;
  name: string;
  category: CultureCategory;
  region: string;
  shortDescription: string;
  description: string[];
  imageUrl: string;
  isOfflineAvailable: boolean;
  isFavorite: boolean;
}

export const cultures: CultureItem[] = [
  {
    id: "tari-sajojo",
    name: "Tari Sajojo",
    category: "tarian",
    region: "Papua",
    shortDescription:
      "Tarian pergaulan yang populer di Papua, sering dibawakan dalam acara adat dan penyambutan.",
    description: [
      "Tari Sajojo merupakan salah satu tarian paling dikenal dari Papua, dengan gerakan dinamis dan penuh semangat.",
      "Biasanya dibawakan secara berkelompok dan diiringi lagu daerah yang ceria.",
      "Tarian ini sering digunakan untuk menyambut tamu dan membangun kebersamaan.",
    ],
    imageUrl: "/assets/images/culture/sajojo.jpg",
    isOfflineAvailable: false,
    isFavorite: false,
  },
  {
    id: "bahasa-mee",
    name: "Bahasa Mee",
    category: "bahasa",
    region: "Pegunungan Tengah",
    shortDescription:
      "Salah satu bahasa daerah di pegunungan Papua yang digunakan oleh masyarakat Mee.",
    description: [
      "Bahasa Mee digunakan oleh masyarakat di wilayah pegunungan tengah Papua.",
      "Melestarikan bahasa daerah berarti menjaga identitas dan pengetahuan lokal.",
      "Melalui platform digital, generasi muda bisa belajar kosakata dan ungkapan dasar Bahasa Mee.",
    ],
    imageUrl: "/assets/images/culture/mee.jpg",
    isOfflineAvailable: false,
    isFavorite: false,
  },
];
