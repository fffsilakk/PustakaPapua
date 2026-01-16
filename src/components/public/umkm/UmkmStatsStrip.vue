<template>
  <div class="w-full mb-8">
    <div
      class="bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800 py-6 px-4"
    >
      <div
        class="max-w-7xl mx-auto flex flex-wrap justify-around gap-8 text-center"
      >
        <div class="flex flex-col items-center min-w-[120px]">
          <!-- <span class="text-2xl mb-1">🏡</span> -->
          <h4 class="text-xl font-bold text-slate-800 dark:text-slate-100">
            {{ totalUmkm }}
          </h4>
          <p
            class="text-[11px] font-medium text-slate-500 uppercase tracking-wide"
          >
            Mitra Lokal
          </p>
        </div>

        <div
          class="hidden sm:block w-px h-10 bg-slate-200 dark:bg-slate-700 my-auto"
        ></div>

        <div class="flex flex-col items-center min-w-[120px]">
          <h4 class="text-xl font-bold text-slate-800 dark:text-slate-100">
            {{ totalCategories }}
          </h4>
          <p
            class="text-[11px] font-medium text-slate-500 uppercase tracking-wide"
          >
            Jenis Produk
          </p>
        </div>

        <div
          class="hidden sm:block w-px h-10 bg-slate-200 dark:bg-slate-700 my-auto"
        ></div>

        <div class="flex flex-col items-center min-w-[120px]">
          <h4 class="text-xl font-bold text-slate-800 dark:text-slate-100">
            Online
          </h4>
          <p
            class="text-[11px] font-medium text-slate-500 uppercase tracking-wide"
          >
            Siap Dipesan
          </p>
        </div>
      </div>
    </div>

    <div class="flex justify-center -mt-[1px]">
      <div class="h-1 w-24 bg-orange-400 rounded-full"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useUmkmStore } from "../../../stores/umkmStore";

const store = useUmkmStore();

const totalUmkm = computed(() => store.products.length);
const totalCategories = computed(() => {
  const cats = new Set(store.products.map((p) => p.category));
  return cats.size;
});
</script>
