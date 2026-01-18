<template>
  <section class="max-w-6xl mx-auto px-4 py-8">
    <UmkmHeader />
    <ProductFilterBar v-model="selectedCategory" />
    <UmkmSearchBar v-model="searchQuery" />

    <!-- Grid produk: hanya tampilkan visibleProducts -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ProductCard
        v-for="product in visibleProducts"
        :key="product.id"
        :product="product"
        @add-to-cart="umkmStore.addToCart(product.id)"
        @show-detail="openDetail"
      />
      <CardComingSoon />
    </div>

    <!-- Tombol Lihat selengkapnya -->
    <div
      v-if="visibleCount < filteredProducts.length"
      class="flex justify-center mt-6"
    >
      <button
        type="button"
        class="px-4 cursor-pointer py-2 rounded-full text-xs font-semibold border border-emerald-400 hover:border-emerald-400 text-emerald-600 hover:text-emerald-400 transition-all"
        @click="loadMore"
      >
        Lihat selengkapnya
      </button>
    </div>

    <!-- Info jika semua sudah tampil -->
    <p
      v-else-if="filteredProducts.length > 0"
      class="mt-6 text-center text-[11px] text-slate-500"
    >
      Semua produk sudah ditampilkan.
    </p>

    <UmkmStatsStrip class="mt-10" />
    <UmkmStoryStrip class="mt-10" />
    <UmkmHighlightBlock />

    <!-- MODAL DETAIL PRODUK -->
    <transition name="modal-scale">
      <div
        v-if="showDetailModal && activeProduct"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md"
        @click.self="closeDetail"
      >
        <div
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :enter="{ opacity: 1, scale: 1 }"
          class="w-full max-w-[400px] overflow-hidden rounded-[2.5rem] border border-white bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-950"
        >
          <div class="relative h-64 w-full bg-slate-100 dark:bg-slate-800">
            <img
              v-if="activeProduct.imageUrl"
              :src="activeProduct.imageUrl"
              :alt="activeProduct.name"
              class="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
            />

            <div
              class="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold text-slate-800 shadow-sm backdrop-blur-md dark:bg-slate-900/90 dark:text-slate-100"
            >
              <span class="text-emerald-500">📍</span>
              {{ activeProduct.origin }}
            </div>

            <button
              @click="closeDetail"
              class="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-md transition-all hover:bg-rose-500 hover:scale-110"
            >
              ✕
            </button>
          </div>

          <div class="p-8 space-y-4">
            <div>
              <p
                class="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400"
              >
                {{ detailCategoryLabel }}
              </p>
              <h2
                class="mt-1 text-2xl font-bold text-slate-900 dark:text-white leading-tight"
              >
                {{ activeProduct.name }}
              </h2>
            </div>

            <p
              class="text-sm leading-relaxed text-slate-500 dark:text-slate-400"
            >
              {{ activeProduct.shortDescription }}
            </p>

            <div class="flex items-center justify-between pt-2">
              <div class="space-y-0.5">
                <p
                  class="text-[10px] font-bold uppercase tracking-wider text-slate-400"
                >
                  Harga Spesial
                </p>
                <p
                  class="text-2xl font-black text-slate-900 dark:text-emerald-400"
                >
                  {{ formatPrice(activeProduct.price) }}
                </p>
              </div>
            </div>

            <div class="mt-6 flex gap-3">
              <button
                type="button"
                class="flex-1 rounded-2xl border border-slate-200 py-4 text-[11px] font-bold uppercase tracking-widest text-slate-400 transition-all hover:bg-slate-50 active:scale-95 dark:border-slate-800 dark:hover:bg-slate-900"
                @click="closeDetail"
              >
                Nanti Dulu
              </button>
              <button
                type="button"
                class="flex-1 rounded-2xl bg-emerald-600 py-4 text-[11px] font-bold uppercase tracking-widest text-white shadow-lg shadow-emerald-200 transition-all hover:bg-emerald-700 hover:shadow-emerald-300 active:scale-95 dark:shadow-none"
                @click="handleBuyFromModal"
              >
                Beli Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>
<style scoped>
/* Animasi Scale yang lebih smooth */
.modal-scale-enter-active,
.modal-scale-leave-active {
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.modal-scale-enter-from,
.modal-scale-leave-to {
  opacity: 0;
  transform: scale(0.9) translateY(20px);
}
</style>
<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useUmkmStore } from "../../stores/umkmStore";
import UmkmHeader from "../../components/public/umkm/UmkmHeader.vue";
import ProductCard from "../../components/public/umkm/ProductCard.vue";
import ProductFilterBar from "../../components/public/umkm/ProductFilterBar.vue";
import UmkmSearchBar from "../../components/public/umkm/UmkmSearchBar.vue";
import UmkmStatsStrip from "../../components/public/umkm/UmkmStatsStrip.vue";
import UmkmStoryStrip from "../../components/public/umkm/UmkmStoryStrip.vue";
import UmkmHighlightBlock from "../../components/public/umkm/UmkmHighlightBlock.vue";
import CardComingSoon from "../../services/CardComingSoon.vue";
import type { UmkmProduct } from "../../data/umkmProducts";

const umkmStore = useUmkmStore();
const { filteredProducts, selectedCategory, searchQuery } =
  storeToRefs(umkmStore);

// ==== LOGIKA LIHAT SELENGKAPNYA (6 per batch) ====
const PAGE_SIZE = 6;
const visibleCount = ref(PAGE_SIZE);

const visibleProducts = computed(() =>
  filteredProducts.value.slice(0, visibleCount.value),
);

const loadMore = () => {
  visibleCount.value = Math.min(
    visibleCount.value + PAGE_SIZE,
    filteredProducts.value.length,
  );
};

// reset ke 6 setiap filter / search berubah
watch([filteredProducts, selectedCategory, searchQuery], () => {
  visibleCount.value = PAGE_SIZE;
});

// ==== STATE MODAL DETAIL ====
const showDetailModal = ref(false);
const activeProduct = ref<UmkmProduct | null>(null);

const openDetail = (product: UmkmProduct) => {
  activeProduct.value = product;
  showDetailModal.value = true;
};

const closeDetail = () => {
  showDetailModal.value = false;
  activeProduct.value = null;
};

const detailCategoryLabel = computed(() => {
  if (!activeProduct.value) return "";
  const map: Record<string, string> = {
    makanan: "Kuliner",
    kerajinan: "Kriya",
    kopi: "Kopi Papua",
  };
  return map[activeProduct.value.category] || "Produk UMKM";
});

const formatPrice = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);

const handleBuyFromModal = () => {
  if (!activeProduct.value) return;
  umkmStore.addToCart(activeProduct.value.id);
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
