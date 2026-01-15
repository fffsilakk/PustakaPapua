<template>
  <article
    class="rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden flex flex-col"
  >
    <div class="h-32 bg-slate-800">
      <img
        v-if="item.imageUrl"
        :src="item.imageUrl"
        :alt="item.name"
        class="w-full h-full object-cover"
      />
    </div>

    <div class="p-3 flex-1 flex flex-col gap-2">
      <header class="flex items-start justify-between gap-2">
        <div>
          <h3 class="font-semibold text-sm mb-1">
            {{ item.name }}
          </h3>
          <p class="text-[11px] text-slate-400">
            {{ categoryLabel }} • {{ item.region }}
          </p>
        </div>
        <button
          type="button"
          class="text-[11px]"
          :class="
            item.isFavorite
              ? 'text-emerald-400'
              : 'text-slate-400 hover:text-emerald-300'
          "
          @click.stop="$emit('favorite-click')"
          title="Favoritkan"
        >
          ★
        </button>
      </header>

      <p class="text-xs text-slate-300 line-clamp-3">
        {{ item.shortDescription }}
      </p>

      <footer class="mt-2 flex items-center justify-between">
        <RouterLink
          :to="`/budaya/${item.id}`"
          class="text-xs px-3 py-1 rounded-md bg-slate-800 hover:bg-slate-700"
        >
          Lihat Detail
        </RouterLink>

        <button
          type="button"
          class="text-[11px] text-slate-300 hover:text-emerald-300"
          @click.stop="$emit('offline-click')"
        >
          {{ item.isOfflineAvailable ? "Tersimpan Offline" : "Simpan Offline" }}
        </button>
      </footer>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { RouterLink } from "vue-router";
import type { CultureItem } from "../../../data/cultures";

const props = defineProps<{
  item: CultureItem;
}>();

const categoryLabel = computed(() => {
  switch (props.item.category) {
    case "tarian":
      return "Tarian";
    case "musik":
      return "Musik";
    case "bahasa":
      return "Bahasa Daerah";
    case "cerita":
      return "Cerita Rakyat";
    default:
      return "Budaya";
  }
});
</script>
