<script setup lang="ts">
import { computed } from "vue";
import type { Destination } from "../../../../data/destination";

const props = defineProps<{
  isOpen: boolean;
  destination: Destination | null;
}>();

const emit = defineEmits<{
  (e: "close"): void;
}>();

const mapSrc = computed(() => {
  if (!props.destination) return "";

  if (
    props.destination.mapsUrl &&
    props.destination.mapsUrl.includes("output=embed")
  ) {
    return props.destination.mapsUrl;
  }

  const query =
    props.destination.latitude && props.destination.longitude
      ? `${props.destination.latitude},${props.destination.longitude}`
      : props.destination.name;

  return `https://maps.google.com/maps?q=${encodeURIComponent(
    query,
  )}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
});
</script>

<template>
  <!-- Backdrop -->
  <div
    v-if="isOpen"
    class="fixed inset-0 bg-black/50 z-40 transition-opacity"
    @click="emit('close')"
  ></div>

  <!-- Sidebar -->
  <aside
    class="fixed top-0 right-0 h-full w-full md:w-[420px] bg-white dark:bg-slate-900 z-50 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col"
    :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
  >
    <!-- Header -->
    <div
      class="p-4 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center bg-emerald-600 text-white"
    >
      <div>
        <h3 class="font-bold text-lg">
          {{ destination?.name || "Peta Lokasi" }}
        </h3>
        <p class="text-xs opacity-90">
          {{ destination?.location }}
        </p>
      </div>
      <button
        @click="emit('close')"
        class="p-2 hover:bg-emerald-700 rounded-full transition-colors"
        aria-label="Tutup peta"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>

    <!-- Map -->
    <div class="flex-1 relative bg-gray-100 dark:bg-slate-800">
      <iframe
        v-if="isOpen && destination"
        class="absolute inset-0 w-full h-full"
        width="100%"
        height="100%"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        :src="mapSrc"
        allowfullscreen
        loading="lazy"
      ></iframe>

      <div
        v-else
        class="flex items-center justify-center h-full text-gray-500 text-sm"
      >
        Memuat peta...
      </div>
    </div>

    <!-- Footer -->
    <div
      class="p-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-slate-900"
    >
      <a
        v-if="destination?.mapsUrl"
        :href="destination.mapsUrl"
        target="_blank"
        rel="noopener"
        class="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-white text-emerald-700 border border-emerald-500 text-sm font-semibold hover:bg-emerald-50 transition-colors dark:bg-slate-900 dark:text-emerald-300 dark:hover:bg-slate-800"
      >
        Buka di Google Maps ↗
      </a>
      <button
        v-else
        disabled
        class="w-full py-2.5 px-4 rounded-lg bg-gray-200 text-gray-500 text-sm font-semibold cursor-not-allowed"
      >
        Link Google Maps belum tersedia
      </button>
    </div>
  </aside>
</template>
