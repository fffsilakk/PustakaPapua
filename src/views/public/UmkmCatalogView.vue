<template>
  <section class="max-w-6xl mx-auto px-4 py-8">
    <UmkmHeader />
    <ProductFilterBar v-model="selectedCategory" />
    <UmkmSearchBar v-model="umkmStore.searchQuery" />
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
        @add-to-cart="umkmStore.addToCart(product.id)"
      />
    </div>
    <UmkmStatsStrip class="mt-10" />
    <UmkmStoryStrip class="mt-10" />
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useUmkmStore } from "../../stores/umkmStore";
import UmkmHeader from "../../components/public/umkm/UmkmHeader.vue";
import ProductCard from "../../components/public/umkm/ProductCard.vue";
import ProductFilterBar from "../../components/public/umkm/ProductFilterBar.vue";
import UmkmSearchBar from "../../components/public/umkm/UmkmSearchBar.vue";
import UmkmStatsStrip from "../../components/public/umkm/UmkmStatsStrip.vue";
import UmkmStoryStrip from "../../components/public/umkm/UmkmStoryStrip.vue";

const umkmStore = useUmkmStore();
const { filteredProducts, selectedCategory } = storeToRefs(umkmStore);
</script>
