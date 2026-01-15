<template>
  <section class="min-h-[400px]">
    <Transition
      enter-active-class="transition duration-500 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
    >
      <div
        v-if="items.length === 0"
        class="relative overflow-hidden flex flex-col items-center justify-center border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-[40px] py-20 px-6 text-center bg-white/50 dark:bg-slate-900/20 backdrop-blur-sm"
      >
        <div
          class="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/5 blur-3xl rounded-full"
        ></div>

        <div class="relative">
          <div
            class="flex h-20 w-20 items-center justify-center rounded-[24px] bg-slate-100 dark:bg-slate-800 text-4xl mb-6 shadow-inner mx-auto animate-bounce"
          >
            🪘
          </div>
          <h3
            class="text-xl font-black text-slate-900 dark:text-white mb-2 uppercase tracking-tight"
          >
            Data Tidak Ditemukan
          </h3>
          <p
            class="text-sm text-slate-500 dark:text-slate-400 max-w-xs mx-auto leading-relaxed"
          >
            Belum ada koleksi budaya untuk wilayah atau kategori ini. Coba
            jelajahi kategori lainnya.
          </p>

          <button
            @click="$emit('reset-filter')"
            class="mt-8 px-6 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-black uppercase tracking-widest rounded-full shadow-lg shadow-emerald-200 dark:shadow-none transition-all active:scale-95"
          >
            Tampilkan Semua Budaya
          </button>
        </div>
      </div>

      <div
        v-else
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        <TransitionGroup name="list" appear>
          <CultureCard
            v-for="item in items"
            :key="item.id"
            :item="item"
            @favorite-click="$emit('favorite-click', item.id)"
            @offline-click="$emit('offline-click', item.id)"
          />
        </TransitionGroup>
      </div>
    </Transition>
  </section>
</template>

<script setup lang="ts">
import CultureCard from "./CultureCard.vue";
import type { CultureItem } from "../../../data/cultures";

const props = defineProps<{
  items: CultureItem[];
}>();

const emit = defineEmits<{
  (e: "favorite-click", id: string): void;
  (e: "offline-click", id: string): void;
  (e: "reset-filter"): void; // Tambahan untuk mempermudah user
}>();
</script>

<style scoped>
/* Animasi List saat filter berubah */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

/* Memastikan layout grid tetap stabil saat item menghilang */
.list-move {
  transition: transform 0.5s ease;
}
</style>
