// src/data/stories.ts
export interface StoryItem {
  id: string;
  title: string;
  category: "cerita-rakyat" | "legenda" | "mitos";
  region: string;
  shortDescription: string;
  coverUrl?: string;
}

export const stories: StoryItem[] = [
  {
    id: "biwar-sang-penakluk-naga",
    title: "Biwar Sang Penakluk Naga",
    category: "cerita-rakyat",
    region: "Mimika, Papua",
    shortDescription:
      "Kisah pemuda bernama Biwar yang menaklukkan naga penunggu sungai demi membalas dendam keluarganya.",
    coverUrl:
      "https://indonesiakaya.com/wp-content/uploads/2024/11/IK_Papua_Header.jpeg",
  },
  {
    id: "empat-raja",
    title: "Asal Usul Raja Ampat",
    category: "legenda",
    region: "Raja Ampat, Papua Barat",
    shortDescription:
      "Legenda tentang asal usul empat raja yang menjadi nama kepulauan Raja Ampat.",
    coverUrl:
      "https://indonesiakaya.com/wp-content/uploads/2023/09/IK_Papua_Header.jpeg",
  },
  // tambahkan cerita lain di sini
];
