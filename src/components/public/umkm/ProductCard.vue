<template>
  <article
    class="group relative rounded-[28px] border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/40 overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1"
  >
    <div class="relative h-44 overflow-hidden bg-slate-100 dark:bg-slate-800">
      <img
        v-if="product.imageUrl"
        :src="product.imageUrl"
        :alt="product.name"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div
        class="absolute top-3 left-3 px-3 py-1 rounded-xl bg-white/90 dark:bg-slate-900/80 backdrop-blur-md border border-white/20 shadow-sm"
      >
        <p
          class="text-[9px] font-black text-slate-700 dark:text-slate-200 uppercase tracking-tighter"
        >
          📍 {{ product.origin }}
        </p>
      </div>
    </div>

    <div class="p-5 flex-1 flex flex-col">
      <header class="mb-2">
        <div class="flex justify-between items-start gap-2">
          <h3
            class="font-black text-sm text-slate-900 dark:text-white line-clamp-1 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors"
          >
            {{ product.name }}
          </h3>
        </div>
        <p
          class="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mt-1"
        >
          {{ categoryLabel }}
        </p>
      </header>

      <p
        class="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed mb-4"
      >
        {{ product.shortDescription }}
      </p>

      <div class="mt-auto">
        <div class="flex flex-col gap-3">
          <span
            class="text-lg font-black text-slate-900 dark:text-white tracking-tighter leading-none"
          >
            {{ formatPrice(product.price) }}
          </span>

          <div class="flex gap-2">
            <button
              type="button"
              class="flex-1 cursor-pointer text-center text-[10px] font-black uppercase tracking-widest py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              @click="$emit('show-detail', product)"
            >
              Detail
            </button>

            <button
              type="button"
              class="flex-1 cursor-pointer text-center text-[10px] font-black uppercase tracking-widest py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-200 dark:shadow-none transition-all active:scale-95"
              @click="$emit('add-to-cart')"
            >
              Beli
            </button>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { UmkmProduct } from "../../../data/umkmProducts";

const props = defineProps<{
  product: UmkmProduct;
}>();

const emit = defineEmits<{
  "add-to-cart": [];
  "show-detail": [UmkmProduct];
}>();

const categoryLabel = computed(() => {
  const labels: Record<string, string> = {
    makanan: "Kuliner",
    kerajinan: "Kriya",
    kopi: "Kopi Papua",
  };
  return labels[props.product.category] || "Produk";
});

const formatPrice = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
</script>
