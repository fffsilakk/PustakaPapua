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
    <UmkmHighlightBlock
      title="Mode belajar UMKM"
      :fun-facts="[
        'Produk ini menggunakan bahan baku lokal dari kampung sekitar.',
        'Pengemasan sederhana sudah cukup untuk menarik minat pembeli.',
        'Promosi bisa dilakukan lewat media sosial dengan foto yang menarik.',
      ]"
      highlights-title="Keunggulan usaha ini"
      :highlights="[
        'Memberdayakan pengrajin lokal.',
        'Memakai bahan yang mudah didapat di Papua.',
        'Berpotensi jadi oleh-oleh khas daerah.',
      ]"
      reflection-title="Pertanyaan untuk diskusi di kelas"
      :reflection-questions="[
        'Apa yang membuat produk UMKM ini berbeda dengan produk pabrik?',
        'Bagaimana cara kamu membantu mempromosikan UMKM di daerahmu?',
        'Menurutmu, apa tantangan terbesar UMKM di Papua?',
      ]"
    />

    <!-- MODAL DETAIL PRODUK -->
    <transition name="fade">
      <div
        v-if="showDetailModal && activeProduct"
        class="fixed inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur-sm"
        @click.self="closeDetail"
      >
        <div
          class="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-900/95 shadow-2xl overflow-hidden"
        >
          <div class="relative h-44 bg-slate-800">
            <img
              v-if="activeProduct.imageUrl"
              :src="activeProduct.imageUrl"
              :alt="activeProduct.name"
              class="w-full h-full object-cover"
            />
            <button
              type="button"
              class="absolute top-3 right-3 text-xs px-2 py-1 rounded-full bg-black/60 text-slate-100 hover:bg-black/80"
              @click="closeDetail"
            >
              ✕
            </button>
            <div
              class="absolute bottom-3 left-3 px-3 py-1 rounded-xl bg-black/60 text-[10px] text-slate-100"
            >
              📍 {{ activeProduct.origin }}
            </div>
          </div>

          <div class="p-4 space-y-2">
            <h2 class="text-sm font-bold text-slate-50">
              {{ activeProduct.name }}
            </h2>
            <p class="text-[11px] text-emerald-300 uppercase tracking-widest">
              {{ detailCategoryLabel }}
            </p>
            <p class="text-xs text-slate-300 leading-relaxed mt-2">
              {{ activeProduct.shortDescription }}
            </p>
            <p class="text-lg font-black text-emerald-300 mt-3">
              {{ formatPrice(activeProduct.price) }}
            </p>

            <div class="mt-4 flex gap-2">
              <button
                type="button"
                class="flex-1 text-[11px] py-2 rounded-xl border border-slate-600 text-slate-200 hover:bg-slate-800"
                @click="closeDetail"
              >
                Tutup
              </button>
              <button
                type="button"
                class="flex-1 text-[11px] py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold tracking-widest uppercase"
                @click="handleBuyFromModal"
              >
                Beli
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

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
import type { UmkmProduct } from "../../data/umkmProducts";

const umkmStore = useUmkmStore();
const { filteredProducts, selectedCategory, searchQuery } =
  storeToRefs(umkmStore);

// ==== LOGIKA LIHAT SELENGKAPNYA (6 per batch) ====
const PAGE_SIZE = 6;
const visibleCount = ref(PAGE_SIZE);

const visibleProducts = computed(() =>
  filteredProducts.value.slice(0, visibleCount.value)
);

const loadMore = () => {
  visibleCount.value = Math.min(
    visibleCount.value + PAGE_SIZE,
    filteredProducts.value.length
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
