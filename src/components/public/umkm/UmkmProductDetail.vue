<script setup lang="ts">
import { computed } from "vue";
import type { UmkmProduct } from "../../../data/umkmProducts";

const props = defineProps<{
  product: UmkmProduct;
}>();

const emit = defineEmits<{
  (e: "close"): void;
  (e: "add-to-cart", id: string | number): void;
}>();

const formattedPrice = computed(() =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(props.product.price),
);
</script>

<template>
  <section
    class="mb-10 px-4 py-8 md:px-6 lg:px-8 border border-slate-200 dark:border-slate-800 rounded-[2rem] bg-white dark:bg-slate-950"
  >
    <div class="flex justify-between items-start gap-4 mb-4">
      <div>
        <p
          class="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600"
        >
          {{ product.origin }}
        </p>
        <h1
          class="text-xl md:text-2xl font-bold text-slate-900 dark:text-white"
        >
          {{ product.name }}
        </h1>
      </div>

      <button
        type="button"
        @click="emit('close')"
        class="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-rose-500"
      >
        ✕ Tutup
      </button>
    </div>

    <div class="grid gap-6 md:grid-cols-2 lg:items-start">
      <!-- Gambar -->
      <div>
        <div class="relative">
          <img
            :alt="product.name"
            :src="product.imageUrl"
            class="h-60 w-full rounded-2xl object-cover bg-slate-100"
          />
          <div
            class="absolute bottom-3 left-3 inline-flex items-center rounded-full bg-black/70 px-3 py-1.5 text-[10px] text-white"
          >
            Hover untuk zoom
          </div>
        </div>
      </div>

      <!-- Detail -->
      <div class="space-y-4">
        <div>
          <p class="text-[11px] font-bold uppercase text-slate-400">Harga</p>
          <p class="text-xl font-black text-emerald-600">
            {{ formattedPrice }}
          </p>
        </div>

        <p class="text-sm text-slate-600 dark:text-slate-300">
          {{ product.shortDescription }}
        </p>

        <div>
          <p class="text-[11px] font-bold uppercase text-slate-400 mb-1">
            Deskripsi Lengkap
          </p>
          <p
            class="text-sm text-slate-600 dark:text-slate-300 whitespace-pre-line"
          >
            {{ product.shortDescription }}
          </p>
        </div>

        <div class="pt-2 flex gap-3">
          <button
            type="button"
            class="flex-1 rounded-xl border border-slate-200 dark:border-slate-700 py-2.5 text-[11px] font-bold uppercase text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all"
            @click="emit('close')"
          >
            Lanjut lihat produk lain
          </button>
          <button
            type="button"
            class="flex-1 rounded-xl bg-emerald-600 py-2.5 text-[11px] font-bold uppercase text-white shadow-lg hover:bg-emerald-700 transition-all"
            @click="emit('add-to-cart', product.id)"
          >
            Tambah ke keranjang
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
