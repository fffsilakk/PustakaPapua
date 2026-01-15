<template>
  <section class="max-w-6xl mx-auto px-4 py-8">
    <header class="mb-6">
      <h1 class="text-2xl font-semibold mb-1">Katalog UMKM Papua</h1>
      <p class="text-sm text-slate-300">
        Produk lokal dari mama-mama dan pelaku usaha di Papua. Platform ini bisa
        menjadi jembatan menuju pasar digital yang lebih luas.
      </p>
    </header>

    <ProductFilterBar v-model="selectedCategory" />

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
        @add-to-cart="umkmStore.addToCart(product.id)"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useUmkmStore } from "../../stores/umkmStore";
import ProductCard from "../../components/public/umkm/ProductCard.vue";
import ProductFilterBar from "../../components/public/umkm/ProductFilterBar.vue";

const umkmStore = useUmkmStore();
const { filteredProducts, selectedCategory } = storeToRefs(umkmStore);
</script>
