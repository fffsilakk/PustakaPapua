<template>
  <article
    class="group relative rounded-[32px] border transition-all duration-500 overflow-hidden flex flex-col h-full border-slate-200 bg-white hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1.5 dark:border-slate-800 dark:bg-slate-900/40 dark:hover:bg-slate-900/80 dark:hover:border-emerald-500/50"
  >
    <div
      v-if="!isOnline && !item.isOfflineAvailable"
      class="absolute inset-0 bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-center z-20 px-8 text-center"
    >
      <div
        class="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center mb-4 text-emerald-500 shadow-inner"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636"
          />
        </svg>
      </div>
      <h4 class="text-xs font-black text-white uppercase tracking-[0.2em] mb-2">
        Offline
      </h4>
      <p class="text-[10px] text-slate-400 leading-relaxed font-medium">
        Konten ini belum tersedia secara luring. Hubungkan internet untuk
        mengunduh.
      </p>
    </div>

    <div class="relative h-44 overflow-hidden bg-slate-100 dark:bg-slate-800">
      <img
        v-if="item.imageUrl"
        :src="item.imageUrl"
        :alt="item.name"
        class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
      />

      <div class="absolute top-4 left-4">
        <div
          class="px-3 py-1.5 rounded-xl bg-white/90 dark:bg-slate-950/80 backdrop-blur-md border border-white/20 shadow-lg"
        >
          <p
            class="text-[9px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400"
          >
            {{ categoryLabel }}
          </p>
        </div>
      </div>

      <button
        type="button"
        class="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-all backdrop-blur-md border shadow-lg active:scale-90"
        :class="
          item.isFavorite
            ? 'bg-amber-500 border-amber-400 text-white'
            : 'bg-white/50 border-white/20 text-slate-700 dark:text-white hover:bg-white'
        "
        @click.stop="$emit('favorite-click')"
      >
        <span class="text-sm">{{ item.isFavorite ? "★" : "☆" }}</span>
      </button>
    </div>

    <div class="p-6 flex-1 flex flex-col">
      <div class="mb-4">
        <div class="flex items-center gap-2 mb-1.5">
          <span
            class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"
          ></span>
          <p
            class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest"
          >
            {{ item.region }}
          </p>
        </div>
        <h3
          class="font-black text-base text-slate-900 dark:text-white line-clamp-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors tracking-tight"
        >
          {{ item.name }}
        </h3>
      </div>

      <p
        class="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-[1.6] mb-6 font-medium"
      >
        {{ item.shortDescription }}
      </p>

      <!-- <div
        class="mt-auto pt-5 border-t border-slate-100 dark:border-slate-800/50 flex items-center justify-between"
      >
        <RouterLink
          :to="`/budaya/${item.id}`"
          class="text-[10px] px-5 py-2.5 rounded-xl text-xs font-medium transition-all shadow-sm flex items-center gap-2"
          :class="
            !isOnline && !item.isOfflineAvailable
              ? 'bg-slate-100 text-slate-300 pointer-events-none'
              : 'bg-emerald-500 text-white hover:bg-emerald-600 hover:shadow-sm hover:shadow-emerald-200  dark:hover:bg-emerald-400'
          "
        >
          Lihat Detail<span>→</span>
        </RouterLink>

        <button
          type="button"
          class="flex items-center gap-2 cursor-pointer transition-all group/btn px-3 py-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50"
          @click.stop="$emit('offline-click')"
        >
          <div
            :class="
              item.isOfflineAvailable
                ? 'text-emerald-500'
                : 'text-slate-400 dark:text-slate-600 group-hover/btn:text-emerald-400'
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <span
            class="text-[9px] font-black uppercase tracking-widest"
            :class="
              item.isOfflineAvailable ? 'text-emerald-500' : 'text-slate-500'
            "
          >
            {{ item.isOfflineAvailable ? "Tersimpan" : "Simpan" }}
          </span>
        </button>
      </div> -->
    </div>
  </article>
</template>
<script setup lang="ts">
import { computed } from "vue";
// import { RouterLink } from "vue-router";
import type { CultureItem } from "../../../data/cultures";
import { useOfflineStore } from "../../../stores/offlineStore";

const props = defineProps<{
  item: CultureItem;
}>();

const offlineStore = useOfflineStore();
const isOnline = computed(() => offlineStore.isOnline);

const categoryLabel = computed(() => {
  const labels: Record<string, string> = {
    tarian: "Tarian Adat",
    musik: "Alat Musik",
    bahasa: "Bahasa Daerah",
    cerita: "Cerita Rakyat",
  };
  return labels[props.item.category] || "Budaya";
});
</script>
