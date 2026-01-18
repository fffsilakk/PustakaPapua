<template>
  <section class="py-12 px-4 max-w-7xl mx-auto min-h-[600px]">
    <Transition
      enter-active-class="transition duration-700 ease-out"
      enter-from-class="opacity-0 translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
    >
      <div
        v-if="items.length === 0"
        class="flex flex-col items-center justify-center min-h-[400px] rounded-3xl border border-slate-100 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-900/10 p-12 text-center backdrop-blur-sm"
        data-aos="fade-up"
      >
        <div class="mb-6 relative">
          <div class="text-6xl grayscale opacity-50 mb-4">empty</div>
          <div class="h-1 w-12 bg-emerald-500 mx-auto rounded-full"></div>
        </div>

        <h3
          class="text-2xl font-light text-slate-800 dark:text-slate-100 tracking-tight mb-3"
        >
          Belum Ada Koleksi
        </h3>
        <p
          class="text-slate-500 dark:text-slate-400 max-w-sm mx-auto mb-8 font-light leading-relaxed"
        >
          Kami sedang menyusun data budaya terbaik untuk kategori ini. Silakan
          jelajahi bagian lainnya.
        </p>
      </div>

      <div v-else>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          <TransitionGroup name="list" appear>
            <CultureCard
              v-for="(item, index) in items"
              :key="item.id"
              :item="item"
              :data-aos="'fade-up'"
              :data-aos-delay="index * 100"
              @favorite-click="$emit('favorite-click', item.id)"
              @offline-click="$emit('offline-click', item.id)"
            />
          </TransitionGroup>
        </div>

        <div
          class="mt-5 flex justify-center"
          data-aos="fade-up"
          data-aos-offset="0"
        >
          <div class="relative inline-block text-left group cursor-pointer">
            <button
              class="inline-flex items-center gap-4 px-8 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <span
                class="text-sm font-semibold tracking-wider cursor-pointer uppercase hover:text-emerald-600 text-emerald-500"
                >Eksplorasi Kategori</span
              >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-slate-400 group-hover:rotate-180 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div
              class="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mb-6 transition-all duration-300 z-50 overflow-hidden"
            >
              <button
                v-for="nav in navLinks"
                :key="nav.path"
                @click="$router.push(nav.path)"
                class="w-full flex items-center gap-4 px-6 py-1 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                <span class="text-lg opacity-70 group-hover:opacity-100">{{
                  nav.icon
                }}</span>
                <span class="text-xs font-bold uppercase tracking-widest">{{
                  nav.label
                }}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
import CultureCard from "./CultureCard.vue";
import type { CultureItem } from "../../../data/cultures";

const props = defineProps<{
  items: CultureItem[];
}>();

const emit = defineEmits<{
  (e: "favorite-click", id: string): void;
  (e: "offline-click", id: string): void;
  (e: "reset-filter"): void;
}>();

onMounted(() => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
  });
});

const navLinks = [
  { label: "Tarian Adat", path: "/tarianAdat", icon: "•" },
  { label: "Musik Daerah", path: "/alatMusik", icon: "•" },
  { label: "Bahasa Daerah", path: "/bahasaDaerah", icon: "•" },
  { label: "Cerita Rakyat", path: "/ceritaRakyat", icon: "•" },
  { label: "Favorit", path: "/budaya/favorite", icon: "•" },
];
</script>

<style scoped>
/* Transisi Smooth untuk List */
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1);
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
}

.list-leave-active {
  position: absolute;
}
</style>
