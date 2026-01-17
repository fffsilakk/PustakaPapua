export type UmkmCategory = "makanan" | "kerajinan" | "kopi";

export interface UmkmProduct {
  id: string;
  name: string;
  category: UmkmCategory;
  price: number;
  origin: string;
  shortDescription: string;
  imageUrl: string;
}

export const umkmProducts: UmkmProduct[] = [
  {
    id: "kopi-wamena-250g",
    name: "Kopi Wamena 250g",
    category: "kopi",
    price: 75000,
    origin: "Wamena, Papua",
    shortDescription:
      "Kopi arabika khas pegunungan Papua dengan cita rasa lembut.",
    imageUrl:
      "https://elscoffee.com/content/uploads/2021/07/Banner-E-Commerce-Wamena-100gr.jpg",
  },
  {
    id: "noken",
    name: "Noken ",
    category: "kerajinan",
    price: 120000,
    origin: "Wamena, Papua Pengunungan",
    shortDescription:
      "Tas tradisional Papua yang dirajut tangan oleh mama-mama Papua.",
    imageUrl:
      "https://asset.kompas.com/crops/VkrBJ-bCB4vKppbv0-wQaAcgdLg=/0x0:927x618/1200x800/data/photo/2021/09/02/61308ee76b718.jpg",
  },
  {
    id: "ubi-jalar-ungu-1kg",
    name: "Ubi Jalar Ungu 1kg",
    category: "makanan",
    price: 25000,
    origin: "Lembah Baliem",
    shortDescription:
      "Ubi jalar ungu khas pegunungan, bisa jadi bahan pangan lokal bergizi.",
    imageUrl: "/umkm/ubi-ungu.jpg",
  },

  // Tambahan 7 produk
  {
    id: "kopi-koteka",
    name: "Kopi Koteka",
    category: "kopi",
    price: 68000,
    origin: "Oksibil, Papua",
    shortDescription:
      "Kopi Oksibil dari dataran tinggi Oksibil dengan aroma cokelat dan rempah.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtYHOpweCnvzdg0XIwpshXq5GJOSbaoCQSLA&s",
  },
  {
    id: "keripik-ubi-lemak-150g",
    name: "Keripik Ubi Lemak 150g",
    category: "makanan",
    price: 18000,
    origin: "Jayapura, Papua",
    shortDescription:
      "Keripik singkong lokal renyah dengan rasa gurih-manis khas Papua.",
    imageUrl:
      "https://down-id.img.susercontent.com/file/id-11134207-7r98v-lo3phggvfgpn05@resize_w900_nl.webp",
  },
  {
    id: "noken-kulit-kayu-asmat",
    name: "Noken Kulit Kayu Asmat",
    category: "kerajinan",
    price: 230000,
    origin: "Asmat, Papua Selatan",
    shortDescription:
      "Noken tradisional dari serat kulit kayu dengan motif ukir Asmat.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT48c7aKxCGGTyeixECi6h31pASj4yjOAePnw&s",
  },
  {
    id: "kopi-dogiyai",
    name: "Kopi Dogiyai",
    category: "kopi",
    price: 65000,
    origin: "Dogiyai, Papua Tengah",
    shortDescription:
      "Kopi robusta kuat dengan body pekat dan aftertaste cokelat pahit.",
    imageUrl:
      "https://www.tokoindonesia.co.uk/wp-content/uploads/2020/10/20201031_210927.jpg",
  },
  {
    id: "abon-ikan-tuna",
    name: "Abon Ikan Tuna",
    category: "makanan",
    price: 32000,
    origin: "Sorong, Papua",
    shortDescription:
      "Abon ikan laut segar khas pesisir Papua, cocok untuk lauk praktis.",
    imageUrl:
      "https://scontent.fupg5-1.fna.fbcdn.net/v/t39.30808-6/561344380_1219879986829990_680164878363923306_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFqNKonh7L538ypmCQIxRRbhB7Eh9-y-2SEHsSH37L7ZPqwaUhCNfLI1WbfQm6XHbHZbTcn0gGMS_iLNYeTmU0e&_nc_ohc=5XbYSvcPi64Q7kNvwFQMMNq&_nc_oc=Adkw2jULO-alzF-Qa04C-R7Mc4bSFgeNYme-OYAAYo4J3BGsTJKe3xhkHCTCpUkGaEc&_nc_zt=23&_nc_ht=scontent.fupg5-1.fna&_nc_gid=74X16knfnaRNZo_4P34sfQ&oh=00_AfqO_XkjS1U6Euj5w_jrDZx8HeVt4rEBuZ2Fqi5ZpD2a9g&oe=696FB4BB",
  },
  {
    id: "gelang-kulit-kerang",
    name: "Gelang Kulit Kerang",
    category: "kerajinan",
    price: 45000,
    origin: " Papua",
    shortDescription:
      "Gelang handmade dari kulit kerang dan manik-manik tradisional Sentani.",
    imageUrl:
      "https://cdn.rri.co.id/berita/Biak/o/1737284140837-pernak-pernik-biak/eaduzryrxa8ztm0.jpeg",
  },
  {
    id: "bolu-sagu-panggang-1-pack",
    name: "Bolu Sagu Panggang 1 Pack",
    category: "makanan",
    price: 38000,
    origin: "Sorong, Papua Barat Daya",
    shortDescription:
      "Bolu lembut berbahan tepung sagu khas Papua, manis dan beraroma kelapa.",
    imageUrl:
      "https://img-global.cpcdn.com/recipes/cf22369517f0937a/1200x630cq80/photo.jpg",
  },
];
