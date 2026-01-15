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
    id: "noken-rajut-sentani",
    name: "Noken Rajut Sentani",
    category: "kerajinan",
    price: 120000,
    origin: "Sentani, Papua",
    shortDescription:
      "Tas tradisional Papua yang dirajut tangan oleh mama-mama Papua.",
    imageUrl: "/umkm/noken.jpg",
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
];
