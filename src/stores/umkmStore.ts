import { defineStore } from "pinia";
import {
  umkmProducts,
  type UmkmProduct,
  type UmkmCategory,
} from "../data/umkmProducts";

interface CartItem {
  productId: string;
  quantity: number;
}

interface UmkmState {
  products: UmkmProduct[];
  selectedCategory: UmkmCategory | "all";
  searchQuery: string; // TAMBAHKAN INI agar TS mengenali searchQuery
  cart: CartItem[];
}

const CART_KEY = "spt-umkm-cart";

function loadCart(): CartItem[] {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveCart(cart: CartItem[]) {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch {
    // abaikan error quota
  }
}

export const useUmkmStore = defineStore("umkm", {
  state: (): UmkmState => ({
    products: umkmProducts,
    selectedCategory: "all",
    searchQuery: "", // INISIALISASI state kosong
    cart: loadCart(),
  }),

  getters: {
    /**
     * Getter yang sudah digabung:
     * Memfilter berdasarkan Kategori DAN Kata Kunci Pencarian
     */
    filteredProducts(state): UmkmProduct[] {
      return state.products.filter((p) => {
        // 1. Cek Kategori
        const matchesCategory =
          state.selectedCategory === "all" ||
          p.category === state.selectedCategory;

        // 2. Cek Pencarian (Nama produk atau deskripsi)
        const query = state.searchQuery.toLowerCase().trim();
        const matchesSearch =
          p.name.toLowerCase().includes(query) ||
          p.shortDescription.toLowerCase().includes(query) ||
          p.origin.toLowerCase().includes(query);

        return matchesCategory && matchesSearch;
      });
    },

    cartCount(state): number {
      return state.cart.reduce((sum, item) => sum + item.quantity, 0);
    },

    cartDetailed(state): (UmkmProduct & { quantity: number })[] {
      return state.cart
        .map((ci) => {
          const product = state.products.find((p) => p.id === ci.productId);
          if (!product) return null;
          return { ...product, quantity: ci.quantity };
        })
        .filter(Boolean) as (UmkmProduct & { quantity: number })[];
    },

    cartTotal(): number {
      return this.cartDetailed.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
    getById: (state) => {
      return (id: string) => state.products.find((p) => p.id === id) ?? null;
    },
  },

  actions: {
    setCategory(category: UmkmCategory | "all") {
      this.selectedCategory = category;
    },

    // Action tambahan untuk mereset pencarian jika diperlukan
    setSearchQuery(query: string) {
      this.searchQuery = query;
    },

    addToCart(productId: string) {
      const existing = this.cart.find((c) => c.productId === productId);
      if (existing) {
        existing.quantity += 1;
      } else {
        this.cart.push({ productId, quantity: 1 });
      }
      saveCart(this.cart);
    },

    removeFromCart(productId: string) {
      this.cart = this.cart.filter((c) => c.productId !== productId);
      saveCart(this.cart);
    },

    updateQuantity(productId: string, quantity: number) {
      if (quantity <= 0) {
        this.removeFromCart(productId);
        return;
      }
      const item = this.cart.find((c) => c.productId === productId);
      if (item) {
        item.quantity = quantity;
        saveCart(this.cart);
      }
    },

    clearCart() {
      this.cart = [];
      saveCart(this.cart);
    },
  },
});
