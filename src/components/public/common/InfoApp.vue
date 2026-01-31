<script setup lang="ts">
import {
  WifiOff,
  BookOpen,
  ShoppingBag,
  Download,
  Zap,
  ChevronRight,
} from "lucide-vue-next";

const features = [
  {
    title: "Offline-First (PWA)",
    desc: "Aplikasi tetap berfungsi penuh meski tanpa koneksi internet.",
    icon: WifiOff,
    color: "text-amber-600 dark:text-amber-300",
    bg: "bg-amber-50 dark:bg-amber-500/10",
  },
  {
    title: "Modul Belajar",
    desc: "Materi edukasi yang bisa diunduh dan disimpan offline.",
    icon: Download,
    color: "text-blue-600 dark:text-blue-300",
    bg: "bg-blue-50 dark:bg-blue-500/10",
  },
  {
    title: "Eksplor Tentang Papua",
    desc: "Jelajahi kekayaan budaya tanah Papua secara mendalam:",
    icon: BookOpen,
    color: "text-emerald-600 dark:text-emerald-300",
    bg: "bg-emerald-50 dark:bg-emerald-500/10",
    isExplore: true,
    subItems: [
      "Tempat Wisata",
      "Cerita Rakyat",
      "Tarian Adat",
      "Alat Musik",
      "Rumah Adat",
      "Upacara Adat",
      "Senjata Tradisional",
      "Bahasa Daerah",
    ],
  },
  {
    title: "UMKM Papua",
    desc: "Dukungan ekonomi kreatif untuk produk-produk lokal.",
    icon: ShoppingBag,
    color: "text-rose-600 dark:text-rose-300",
    bg: "bg-rose-50 dark:bg-rose-500/10",
  },
];
</script>

<template>
  <div class="space-y-4">
    <!-- Badge atas -->
    <div
      class="flex items-start gap-3 rounded-2xl bg-emerald-50/90 p-4 border border-emerald-100 dark:bg-slate-900 dark:border-emerald-500/30"
    >
      <div
        class="mt-1 rounded-full bg-emerald-500 text-white p-1.5 shadow-sm dark:bg-emerald-400"
      >
        <Zap :size="14" />
      </div>
      <div
        class="text-xs leading-relaxed text-emerald-900 dark:text-emerald-200"
      >
        Dibuat dengan
        <span class="font-bold">Bun + Vite + Vue 3</span>. Solusi cerdas untuk
        akses informasi di wilayah blank spot.
      </div>
    </div>

    <!-- List fitur -->
    <div
      class="grid grid-cols-1 gap-3 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar"
    >
      <div
        v-for="item in features"
        :key="item.title"
        class="rounded-2xl border border-slate-100/80 bg-white/95 p-3 shadow-sm transition-colors dark:border-neutral-700 dark:bg-neutral-900/70"
      >
        <div class="flex items-center gap-4 mb-2">
          <div
            :class="[
              'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl shadow-sm ring-1 ring-slate-100/80 dark:ring-neutral-700/70',
              item.bg,
              item.color,
            ]"
          >
            <component :is="item.icon" :size="20" class="stroke-[1.6]" />
          </div>
          <div>
            <h3 class="text-sm font-bold text-slate-800 dark:text-neutral-100">
              {{ item.title }}
            </h3>
            <p class="text-[11px] text-slate-500 dark:text-neutral-400">
              {{ item.desc }}
            </p>
          </div>
        </div>

        <div v-if="item.isExplore" class="grid grid-cols-2 gap-1.5 mt-2 pl-14">
          <div
            v-for="sub in item.subItems"
            :key="sub"
            class="flex items-center gap-1.5 text-[10px] text-slate-600 dark:text-neutral-400"
          >
            <ChevronRight
              :size="10"
              class="text-emerald-500 dark:text-emerald-300"
            />
            {{ sub }}
          </div>
        </div>
      </div>
    </div>

    <!-- Footer tech stack -->
    <div
      class="pt-2 flex justify-between items-center border-t border-slate-100 dark:border-neutral-700 text-[10px] text-slate-400 dark:text-neutral-500"
    >
      <div class="flex flex-wrap gap-2">
        <span
          class="px-2 py-0.5 rounded bg-slate-100 dark:bg-neutral-800 font-mono text-slate-600 dark:text-neutral-300"
          >Bun Runtime</span
        >
        <span
          class="px-2 py-0.5 rounded bg-slate-100 dark:bg-neutral-800 font-mono text-slate-600 dark:text-neutral-300"
          >Vite JS</span
        >
      </div>
      <p class="font-medium text-slate-500 dark:text-neutral-300">
        v1.0.0-PROTOTYPE
      </p>
    </div>
  </div>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #10b981;
  border-radius: 999px;
}
</style>
