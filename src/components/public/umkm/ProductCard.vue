<template>
  <article
    class="rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden flex flex-col"
  >
    <div class="h-32 bg-slate-800">
      <img
        v-if="product.imageUrl"
        :src="product.imageUrl"
        :alt="product.name"
        class="w-full h-full object-cover"
      />
    </div>

    <div class="p-3 flex-1 flex flex-col gap-2">
      <header>
        <h3 class="font-semibold text-sm mb-1">
          {{ product.name }}
        </h3>
        <p class="text-[11px] text-slate-400">
          {{ categoryLabel }} • {{ product.origin }}
        </p>
      </header>

      <p class="text-xs text-slate-300 line-clamp-2">
        {{ product.shortDescription }}
      </p>

      <footer class="mt-2 flex items-center justify-between">
        <span class="text-sm font-semibold text-emerald-300">
          {{ formatPrice(product.price) }}
        </span>
        <div class="flex gap-2">
          <RouterLink
            :to="`/umkm/${product.id}`"
            class="text-[11px] px-3 py-1 rounded-md bg-slate-800 hover:bg-slate-700"
          >
            Detail
          </RouterLink>
          <button
            type="button"
            class="text-[11px] px-3 py-1 rounded-md bg-emerald-500 text-slate-950 hover:bg-emerald-400"
            @click="$emit('add-to-cart')"
          >
            Tambah
          </button>
        </div>
      </footer>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { RouterLink } from "vue-router";
import type { UmkmProduct } from "../../../data/umkmProducts";

const props = defineProps<{
  product: UmkmProduct;
}>();

const categoryLabel = computed(() => {
  switch (props.product.category) {
    case "makanan":
      return "Makanan";
    case "kerajinan":
      return "Kerajinan";
    case "kopi":
      return "Kopi";
    default:
      return "Produk";
  }
});

const formatPrice = (value: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(
    value
  );
</script>
