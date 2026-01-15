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
  cart: CartItem[];
}

export const useUmkmStore = defineStore("umkm", {
  state: (): UmkmState => ({
    products: umkmProducts,
    selectedCategory: "all",
    cart: [],
  }),
  getters: {
    filteredProducts(state): UmkmProduct[] {
      if (state.selectedCategory === "all") return state.products;
      return state.products.filter(
        (p) => p.category === state.selectedCategory
      );
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
    cartTotal(_state): number {
      return this.cartDetailed.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
  },
  actions: {
    setCategory(category: UmkmCategory | "all") {
      this.selectedCategory = category;
    },
    addToCart(productId: string) {
      const existing = this.cart.find((c) => c.productId === productId);
      if (existing) {
        existing.quantity += 1;
      } else {
        this.cart.push({ productId, quantity: 1 });
      }
    },
    removeFromCart(productId: string) {
      this.cart = this.cart.filter((c) => c.productId !== productId);
    },
    updateQuantity(productId: string, quantity: number) {
      if (quantity <= 0) {
        this.removeFromCart(productId);
        return;
      }
      const item = this.cart.find((c) => c.productId === productId);
      if (item) item.quantity = quantity;
    },
    clearCart() {
      this.cart = [];
    },
  },
});
