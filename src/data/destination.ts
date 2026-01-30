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
  mapsUrl?: string; // Link Google Maps (bisa embed atau link biasa)
  latitude?: number; // Koordinat untuk fallback
  longitude?: number; // Koordinat untuk fallback
}

export const destinations: Destination[] = [
  {
    id: "raja-ampat",
    name: "Raja Ampat",
    region: "kepulauan",
    category: "bahari",
    thumbnail:
      "https://images.unsplash.com/photo-1703769605314-502c031fe751?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heroImage:
      "https://images.unsplash.com/photo-1703769605314-502c031fe751?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shortDescription:
      "Gugusan pulau dengan laut biru jernih dan keanekaragaman hayati laut yang mendunia.",
    description:
      "Raja Ampat dikenal sebagai salah satu destinasi bahari terindah di dunia. Perairannya menyimpan terumbu karang yang sangat beragam, ikan berwarna-warni, dan laguna di antara pulau-pulau karst. Wisatawan dapat snorkeling, diving, atau sekadar menikmati pemandangan dari atas bukit.",
    location: "Kabupaten Raja Ampat, Papua Barat Daya",
    bestTimeToVisit: "Oktober–April saat gelombang relatif tenang.",
    activities:
      "Snorkeling, diving, island hopping, melihat sunset di atas bukit karst.",
    isFavorite: false,
    latitude: -0.2333,
    longitude: 130.5167,
    mapsUrl:
      "https://maps.google.com/maps?q=Raja+Ampat&t=&z=9&ie=UTF8&iwloc=&output=embed",
  },
  {
    id: "danau-sentani",
    name: "Danau Sentani",
    region: "danau",
    category: "alam",
    thumbnail:
      "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/11/2025/05/04/lake-sentani-c2848048-add0-47d1-a96e-5a7bea5ff9b-resize-750-3072052363.jpeg",
    heroImage:
      "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/11/2025/05/04/lake-sentani-c2848048-add0-47d1-a96e-5a7bea5ff9b-resize-750-3072052363.jpeg",
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
    latitude: -2.6053,
    longitude: 140.5369,
    mapsUrl:
      "https://maps.google.com/maps?q=Danau+Sentani&t=&z=11&ie=UTF8&iwloc=&output=embed",
  },
  {
    id: "lembah-baliem",
    name: "Lembah Baliem",
    region: "pegunungan",
    category: "budaya",
    thumbnail:
      "https://wisato.id/wp-content/uploads/2020/05/Lembah-Baliem-Puncak-Jaya.jpg",
    heroImage:
      "https://wisato.id/wp-content/uploads/2020/05/Lembah-Baliem-Puncak-Jaya.jpg",
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
    latitude: -4.0956,
    longitude: 138.9431,
    mapsUrl:
      "https://maps.google.com/maps?q=Lembah+Baliem&t=&z=10&ie=UTF8&iwloc=&output=embed",
  },
  {
    id: "teluk-cenderawasih",
    name: "Teluk Cenderawasih",
    region: "pesisir",
    category: "bahari",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT60fzlcmQDftAPtYUCBuitJa6MHPK5rrzzZw&s",
    heroImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT60fzlcmQDftAPtYUCBuitJa6MHPK5rrzzZw&s",
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
    latitude: -2.25,
    longitude: 134.5,
    mapsUrl:
      "https://maps.google.com/maps?q=Taman+Nasional+Teluk+Cenderawasih&t=&z=8&ie=UTF8&iwloc=&output=embed",
  },
  {
    id: "gua-binsari",
    name: "Gua Binsari (Gua Jepang)",
    region: "taman_nasional",
    category: "lainnya",
    thumbnail:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/18/bb/e3/binsari-japanese-cave.jpg?w=1400&h=-1&s=1",
    heroImage:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/18/bb/e3/binsari-japanese-cave.jpg?w=1400&h=-1&s=1",
    shortDescription:
      "Gua bersejarah saksi bisu Perang Dunia II dengan lubang cahaya alami yang ikonik.",
    description:
      "Gua Binsari, atau lebih dikenal sebagai Gua Jepang, merupakan kompleks gua alami yang pernah menjadi pusat logistik dan perlindungan bagi ribuan tentara Jepang pada masa Perang Dunia II (1943-1944). Kini, gua ini menjadi museum terbuka yang menyimpan berbagai peninggalan perang seperti amunisi, peralatan makan, hingga puing kendaraan perang. Cahaya matahari yang masuk melalui atap gua yang runtuh memberikan suasana yang dramatis dan sakral bagi para pengunjung.",
    location: "Desa Ambroben, Distrik Biak Kota, Kabupaten Biak Numfor",
    bestTimeToVisit:
      "Pukul 11:00 - 13:00 WIT (untuk melihat fenomena sinar matahari menembus lubang gua).",
    activities:
      "Wisata sejarah, fotografi, eksplorasi gua, edukasi sejarah Perang Dunia II.",
    isFavorite: false,
    latitude: -1.1685,
    longitude: 136.0883,
    mapsUrl:
      "https://maps.google.com/maps?q=Gua+Jepang+Biak&t=&z=14&ie=UTF8&iwloc=&output=embed",
  },
  {
    id: "pantai-anggopi",
    name: "Pantai Anggopi",
    region: "pesisir",
    category: "bahari",
    thumbnail:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/76/41/d5/caption.jpg?w=1100&h=600&s=1",
    heroImage:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/76/41/d5/caption.jpg?w=1100&h=600&s=1",
    shortDescription:
      "Pantai unik dengan kolam pemandian air tawar alami tepat di pinggir laut.",
    description:
      "Pantai Anggopi terkenal dengan fenomena uniknya di mana terdapat kolam mata air tawar yang sangat jernih berwarna kebiruan yang muncul tepat di bibir pantai. Pengunjung dapat memilih untuk berenang di air laut yang hangat atau membilas diri di kolam air tawar yang sejuk. Pohon-pohon rindang di sekitar pantai menciptakan suasana yang teduh, sangat cocok untuk rekreasi keluarga.",
    location: "Kampung Anggopi, Distrik Oridek, Kabupaten Biak Numfor",
    bestTimeToVisit:
      "Akhir pekan atau hari libur (pagi hari saat air laut pasang memberikan pemandangan terbaik).",
    activities:
      "Berenang di kolam air tawar, snorkeling, piknik keluarga, menikmati kelapa muda.",
    isFavorite: false,
    latitude: -1.1218,
    longitude: 136.1952,
    mapsUrl:
      "https://maps.google.com/maps?q=Pantai+Anggopi&t=&z=14&ie=UTF8&iwloc=&output=embed",
  },
  {
    id: "kali-biru-biak",
    name: "Kali Biru (Warsa)",
    region: "pesisir",
    category: "alam",
    thumbnail:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4_L1ShmlWnLf7UwaQ-MG8vhxXVXyiy4d2ojd4fkT8gfJI4WMou6v9nr_EwezdC6XVBgnF-d2lmvH2w0YjLbm-OEKsrRfEQj1tzmYtcGKTBiQbENH9NoKUOIhxZ5Ho64mX5-RoiBHpTeSw/s1600/1.+telaga+biru+samares+biak.JPG",
    heroImage:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4_L1ShmlWnLf7UwaQ-MG8vhxXVXyiy4d2ojd4fkT8gfJI4WMou6v9nr_EwezdC6XVBgnF-d2lmvH2w0YjLbm-OEKsrRfEQj1tzmYtcGKTBiQbENH9NoKUOIhxZ5Ho64mX5-RoiBHpTeSw/s1600/1.+telaga+biru+samares+biak.JPG",
    shortDescription:
      "Sungai jernih berwarna biru toska yang tersembunyi di tengah hutan asri Biak.",
    description:
      "Kali Biru Warsa adalah destinasi wisata alam yang menawarkan kesegaran air sungai dengan gradasi warna biru yang mempesona. Terletak jauh dari keramaian kota, sungai ini dikelilingi oleh pepohonan rimbun yang memberikan suasana sangat tenang. Keunikan utama tempat ini adalah kejernihan airnya yang memungkinkan Anda melihat dasar sungai dengan jelas, serta suhu air yang sejuk dan menyegarkan.",
    location: "Distrik Warsa, Kabupaten Biak Numfor",
    bestTimeToVisit:
      "Pukul 10:00 - 14:00 WIT saat matahari tepat di atas kepala agar warna biru air terlihat maksimal.",
    activities:
      "Berenang, fotografi alam, relaksasi di tepi sungai, eksplorasi hutan sekitar.",
    isFavorite: false,
    latitude: -0.9231,
    longitude: 135.9419,
    mapsUrl:
      "https://maps.google.com/maps?q=Kali+Biru+Biak&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
  {
    id: "kali-biru-raja-ampat",
    name: "Kali Biru (Warkesi)",
    region: "kepulauan",
    category: "alam",
    thumbnail:
      "https://travelrebels.com/wp-content/uploads/2025/02/tips-bezoeken-kali-biru.jpg",
    heroImage:
      "https://travelrebels.com/wp-content/uploads/2025/02/tips-bezoeken-kali-biru.jpg",
    shortDescription:
      "Sungai kristal berwarna biru pekat yang tersembunyi di jantung hutan tropis Waigeo.",
    description:
      "Kali Biru Raja Ampat adalah sungai alami yang memiliki air berwarna biru safir yang sangat jernih dan tenang. Terletak di dalam hutan dekat pemukiman Warkesi, sungai ini menawarkan pengalaman berenang di air pegunungan yang sangat dingin (mencapai 10-15 derajat Celcius). Sambil menikmati kesegaran air, pengunjung seringkali dapat mendengar suara kicauan Burung Cenderawasih yang hidup bebas di pepohonan tinggi di sekitar sungai.",
    location: "Hutan Warkesi, Pulau Waigeo, Kabupaten Raja Ampat",
    bestTimeToVisit:
      "Pagi hari pukul 08:00 - 10:00 WIT (setelah melakukan pengamatan Burung Cenderawasih).",
    activities:
      "Berenang di air dingin, bird watching (Cenderawasih), jungle trekking, fotografi alam.",
    isFavorite: false,
    latitude: -0.4289,
    longitude: 130.8167,
    mapsUrl:
      "https://maps.google.com/maps?q=Kali+Biru+Raja+Ampat&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
];
