<template>
  <article
    class="group relative rounded-[24px] border transition-all duration-500 overflow-hidden flex flex-col h-full border-slate-200 bg-white hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900/40 dark:hover:bg-slate-900 dark:hover:border-emerald-500/50"
  >
    <div
      v-if="!isOnline && !item.isOfflineAvailable"
      class="absolute inset-0 bg-slate-950/90 backdrop-blur-[2px] flex flex-col items-center justify-center z-20 px-6 text-center"
    >
      <div
        class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center mb-3 text-slate-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5"
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
      <p class="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
        Konten Terkunci
      </p>
      <p class="text-[10px] text-slate-500 mt-1">
        Simpan saat online untuk akses tanpa sinyal.
      </p>
    </div>

    <div class="relative h-40 overflow-hidden bg-slate-100 dark:bg-slate-800">
      <img
        v-if="item.imageUrl"
        :src="item.imageUrl"
        :alt="item.name"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div
        class="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 dark:bg-slate-950/80 backdrop-blur-md border border-white/20 shadow-sm"
      >
        <p
          class="text-[9px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400"
        >
          {{ categoryLabel }}
        </p>
      </div>
      <button
        type="button"
        class="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all backdrop-blur-md border"
        :class="
          item.isFavorite
            ? 'bg-amber-500 border-amber-400 text-white'
            : 'bg-white/50 border-white/20 text-slate-700 dark:text-white hover:bg-white'
        "
        @click.stop="$emit('favorite-click')"
      >
        <span class="text-sm">★</span>
      </button>
    </div>

    <div class="p-4 flex-1 flex flex-col">
      <div class="mb-3">
        <h3
          class="font-black text-sm text-slate-900 dark:text-white line-clamp-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors"
        >
          {{ item.name }}
        </h3>
        <p
          class="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-tighter mt-0.5"
        >
          📍 {{ item.region }}
        </p>
      </div>

      <p
        class="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed mb-4"
      >
        {{ item.shortDescription }}
      </p>

      <div
        class="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/50 flex items-center justify-between"
      >
        <RouterLink
          :to="`/budaya/${item.id}`"
          class="text-[11px] font-black uppercase tracking-widest px-4 py-2 rounded-xl transition-all bg-slate-900 text-white hover:bg-emerald-600 dark:bg-slate-800 dark:hover:bg-emerald-500 dark:text-slate-200"
          :class="
            !isOnline && !item.isOfflineAvailable
              ? 'pointer-events-none opacity-20'
              : ''
          "
        >
          Detail
        </RouterLink>

        <button
          type="button"
          class="flex items-center gap-1.5 transition-colors group/btn"
          @click.stop="$emit('offline-click')"
        >
          <div
            :class="
              item.isOfflineAvailable
                ? 'text-emerald-500'
                : 'text-slate-300 dark:text-slate-600 group-hover/btn:text-emerald-400'
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
            class="text-[10px] font-bold uppercase tracking-tighter"
            :class="
              item.isOfflineAvailable ? 'text-emerald-500' : 'text-slate-400'
            "
          >
            {{ item.isOfflineAvailable ? "Tersimpan" : "Simpan" }}
          </span>
        </button>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { RouterLink } from "vue-router";
import type { CultureItem } from "../../../data/cultures";
import { useOfflineStore } from "../../../stores/offlineStore";

const props = defineProps<{
  item: CultureItem;
}>();

const offlineStore = useOfflineStore();
const isOnline = computed(() => offlineStore.isOnline);

const categoryLabel = computed(() => {
  const labels: Record<string, string> = {
    tarian: "Tarian",
    musik: "Musik",
    bahasa: "Bahasa Daerah",
    cerita: "Cerita Rakyat",
  };
  return labels[props.item.category] || "Budaya";
});
</script>
