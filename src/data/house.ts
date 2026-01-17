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
    thumbnail:
      "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,f_auto,q_auto:best,w_640/v1631608134/fnr70cq46cndsny2yhmw.jpg",
    heroImage:
      "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,f_auto,q_auto:best,w_640/v1631608134/fnr70cq46cndsny2yhmw.jpg",
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
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6a1aPhCYZvm_q5udGwv1UKOVbu24-6w2QhA&s",
    heroImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6a1aPhCYZvm_q5udGwv1UKOVbu24-6w2QhA&s",
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
    thumbnail:
      "https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2022/02/24/427248485.jpg",
    heroImage:
      "https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2022/02/24/427248485.jpg",
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
    thumbnail:
      "https://ik.imagekit.io/goodid/gnfi/uploads/articles/large-20170502002700-img4346-e9777d058d96c71c7efbf2e424a007fa.jpg?tr=w-449,h-252,fo-center",
    heroImage:
      "https://ik.imagekit.io/goodid/gnfi/uploads/articles/large-20170502002700-img4346-e9777d058d96c71c7efbf2e424a007fa.jpg?tr=w-449,h-252,fo-center",
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
  {
    id: "rumah-pohon-korowai",
    name: "Rumah Pohon",
    region: "pegunungan",
    category: "hunian",
    thumbnail:
      "https://st3.depositphotos.com/1025317/13843/i/600/depositphotos_138433020-stock-photo-group-of-papuan-korowai-tribe.jpg",
    heroImage:
      "https://st3.depositphotos.com/1025317/13843/i/600/depositphotos_138433020-stock-photo-group-of-papuan-korowai-tribe.jpg",
    shortDescription:
      "Rumah adat unik suku Korowai yang dibangun tinggi di atas pohon.",
    description:
      "Rumah Pohon merupakan hunian ikonik milik suku Korowai di Papua Selatan. Rumah ini dibangun pada ketinggian 15 hingga 50 meter di atas permukaan tanah. Alasan utama pembangunan rumah setinggi ini adalah untuk menghindari serangan binatang buas, gangguan roh jahat (menurut kepercayaan lokal), serta sebagai sistem pertahanan diri dari serangan suku musuh.",
    materials:
      "Batang pohon besar sebagai penopang utama, kayu, rotan untuk pengikat, dan atap dari kulit kayu atau daun sagu.",
    structure:
      "Dibangun di atas pohon besar yang masih kokoh dengan menggunakan tangga tunggal yang terbuat dari batang pohon bertakik untuk memanjat.",
    mainFunction:
      "Tempat tinggal keluarga sekaligus benteng pertahanan dari bahaya alam dan konflik antar suku.",
    isFavorite: false,
  },
  {
    id: "rumah-kaki-seribu",
    name: "Rumah Kaki Seribu (Mod Aki Aksa)",
    region: "pegunungan",
    category: "hunian",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Rumah_Kaki_Seribu_%28Mod_Aki_Aksa%29.jpg/500px-Rumah_Kaki_Seribu_%28Mod_Aki_Aksa%29.jpg",
    heroImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Rumah_Kaki_Seribu_%28Mod_Aki_Aksa%29.jpg/500px-Rumah_Kaki_Seribu_%28Mod_Aki_Aksa%29.jpg",
    shortDescription:
      "Rumah tradisional suku Arfak dengan ribuan tiang penyangga vertikal.",
    description:
      "Rumah Kaki Seribu, atau dikenal dengan nama Mod Aki Aksa oleh masyarakat suku Arfak di Pegunungan Arfak, memiliki bentuk panggung dengan ciri khas ribuan tiang penyangga di bawahnya. Desain unik ini bertujuan untuk melindungi penghuninya dari serangan hewan buas dan udara dingin pegunungan yang ekstrem, serta menyesuaikan dengan kontur tanah yang tidak rata.",
    materials:
      "Kayu keras untuk tiang penyangga, kulit kayu untuk dinding, dan anyaman rumput atau daun untuk atap.",
    structure:
      "Memiliki tiang-tiang penyangga vertikal yang sangat banyak dan rapat (diameter 10-20 cm) dengan jarak antar tiang hanya sekitar 30 cm.",
    mainFunction:
      "Hunian komunal yang sangat hangat di daerah pegunungan dan simbol kekompakan masyarakat Arfak.",
    isFavorite: false,
  },
];
