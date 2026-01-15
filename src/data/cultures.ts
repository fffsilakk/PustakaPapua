export type CultureCategory =
  | "tarian"
  | "musik"
  | "bahasa"
  | "cerita"
  | "favorite";

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
      "Tarian pergaulan yang populer di Papua, sering dibawakan dalam acara adat.",
    description: ["..."],
    imageUrl:
      "https://ik.imagekit.io/tvlk/blog/2025/02/antarafoto-upacara-pembukaan-pon-papua-021021-agr-9a.jpg",
    isOfflineAvailable: true,
    isFavorite: false,
  },
  {
    id: "bahasa-mee",
    name: "Bahasa Mee",
    category: "bahasa",
    region: "Pegunungan Tengah",
    shortDescription:
      "Salah satu bahasa daerah di pegunungan Papua yang digunakan oleh masyarakat Mee.",
    description: ["..."],
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX_U5-T646OImWYfiNUWoeWFztupTOwCE-Xg&s",
    isOfflineAvailable: false,
    isFavorite: true,
  },
  {
    id: "biwar-sang-penakluk-naga", // ID diperbaiki
    name: "Biwar Sang Penakluk Naga",
    category: "cerita",
    region: "Mimika",
    shortDescription:
      "Kisah pemuda berani asal Papua yang pantang menyerah menghadapi segala rintangan.",
    description: ["..."],
    imageUrl:
      "https://images.unsplash.com/photo-1544084944-15269ec7b5a0?q=80&w=600",
    isOfflineAvailable: true,
    isFavorite: false,
  },
];
