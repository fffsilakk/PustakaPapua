// src/data/destination.ts
export type DestinationRegion =
  | "pegunungan"
  | "pesisir"
  | "kepulauan"
  | "danau"
  | "taman_nasional";

export type DestinationCategory =
  | "alam"
  | "bahari"
  | "budaya"
  | "petualangan"
  | "lainnya";

export interface Destination {
  id: string;
  name: string;
  region: DestinationRegion;
  category: DestinationCategory;
  thumbnail: string;
  heroImage?: string;
  shortDescription: string;
  description: string;
  location: string; // kabupaten / area
  bestTimeToVisit: string;
  activities: string; // aktivitas utama
  isFavorite?: boolean;
  mapsUrl?: string;
}

export const destinations: Destination[] = [
  {
    id: "raja-ampat",
    name: "Raja Ampat",
    region: "kepulauan",
    category: "bahari",
    thumbnail: "/images/wisata/raja-ampat-thumb.jpg",
    heroImage: "/images/wisata/raja-ampat-hero.jpg",
    shortDescription:
      "Gugusan pulau dengan laut biru jernih dan keanekaragaman hayati laut yang mendunia.",
    description:
      "Raja Ampat dikenal sebagai salah satu destinasi bahari terindah di dunia. Perairannya menyimpan terumbu karang yang sangat beragam, ikan berwarna-warni, dan laguna di antara pulau-pulau karst. Wisatawan dapat snorkeling, diving, atau sekadar menikmati pemandangan dari atas bukit.",
    location: "Kabupaten Raja Ampat, Papua Barat Daya",
    bestTimeToVisit: "Oktober–April saat gelombang relatif tenang.",
    activities:
      "Snorkeling, diving, island hopping, melihat sunset di atas bukit karst.",
    isFavorite: false,
  },
  {
    id: "danau-sentani",
    name: "Danau Sentani",
    region: "danau",
    category: "alam",
    thumbnail: "/images/wisata/danau-sentani-thumb.jpg",
    heroImage: "/images/wisata/danau-sentani-hero.jpg",
    shortDescription:
      "Danau luas dengan pulau-pulau kecil dan kampung adat di sekitarnya.",
    description:
      "Danau Sentani terletak tidak jauh dari Kota Jayapura dan dikelilingi perbukitan hijau. Di sekitar danau terdapat kampung-kampung adat dengan rumah Jew, serta seni ukir dan lukisan khas. Setiap tahun, danau ini sering menjadi lokasi festival budaya.",
    location: "Kabupaten Jayapura, Papua",
    bestTimeToVisit:
      "Musim kemarau (sekitar Juni–September) untuk cuaca yang lebih cerah.",
    activities:
      "Naik perahu keliling danau, mengunjungi kampung adat, menikmati kuliner ikan danau.",
    isFavorite: false,
  },
  {
    id: "lembah-baliem",
    name: "Lembah Baliem",
    region: "pegunungan",
    category: "budaya",
    thumbnail: "/images/wisata/lembah-baliem-thumb.jpg",
    heroImage: "/images/wisata/lembah-baliem-hero.jpg",
    shortDescription:
      "Lembah hijau di pegunungan yang menjadi rumah bagi suku Dani, Lani, dan Yali.",
    description:
      "Lembah Baliem terkenal sebagai pusat budaya suku Dani dan sekitarnya. Pemandangan lembah yang luas, desa-desa adat, serta festival Lembah Baliem menarik wisatawan untuk belajar tentang tradisi perang-perangan, tarian, dan kehidupan sehari-hari masyarakat pegunungan.",
    location: "Kabupaten Jayawijaya (sekitar Wamena), Papua Pegunungan",
    bestTimeToVisit:
      "Sekitar Agustus saat Festival Lembah Baliem biasanya diselenggarakan.",
    activities:
      "Mengunjungi kampung adat, trekking ringan, menyaksikan festival dan tarian adat.",
    isFavorite: false,
  },
  {
    id: "teluk-cenderawasih",
    name: "Teluk Cenderawasih",
    region: "pesisir",
    category: "bahari",
    thumbnail: "/images/wisata/teluk-cenderawasih-thumb.jpg",
    heroImage: "/images/wisata/teluk-cenderawasih-hero.jpg",
    shortDescription:
      "Taman laut luas yang dikenal sebagai habitat hiu paus dan terumbu karang yang indah.",
    description:
      "Teluk Cenderawasih merupakan salah satu taman nasional laut terbesar di Indonesia. Di beberapa titik, wisatawan dapat berkesempatan melihat dan berenang bersama hiu paus, serta menikmati keindahan terumbu karang dan pulau-pulau kecil di sekitarnya.",
    location: "Wilayah Papua dan Papua Barat, termasuk Nabire dan Manokwari",
    bestTimeToVisit:
      "Sepanjang tahun, dengan peluang melihat hiu paus cukup tinggi pada bulan tertentu.",
    activities:
      "Snorkeling, diving, melihat hiu paus, menjelajahi pulau-pulau kecil.",
    isFavorite: false,
  },
  {
    id: "taman-nasional-lorentz",
    name: "Taman Nasional Lorentz",
    region: "taman_nasional",
    category: "petualangan",
    thumbnail: "/images/wisata/lorentz-thumb.jpg",
    heroImage: "/images/wisata/lorentz-hero.jpg",
    shortDescription:
      "Taman nasional pegunungan yang menjadi Situs Warisan Dunia UNESCO.",
    description:
      "Taman Nasional Lorentz mencakup pegunungan tinggi, hutan hujan, hingga pesisir. Kawasan ini memiliki keanekaragaman hayati yang luar biasa dan merupakan salah satu kawasan lindung terbesar di Asia Tenggara. Beberapa jalur trekking menantang tersedia bagi pencinta petualangan.",
    location: "Beberapa kabupaten di Papua, termasuk Mimika dan Jayawijaya",
    bestTimeToVisit:
      "Musim kemarau dengan persiapan fisik dan perizinan yang matang.",
    activities:
      "Trekking, pengamatan alam, fotografi lanskap pegunungan dan hutan.",
    isFavorite: false,
  },
];
