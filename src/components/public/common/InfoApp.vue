<script setup lang="ts">
import {
  WifiOff,
  BookOpen,
  ShoppingBag,
  // MapPin,
  // Languages,
  Download,
  Zap,
  ChevronRight,
} from "lucide-vue-next";

const features = [
  {
    title: "Offline-First (PWA)",
    desc: "Aplikasi tetap berfungsi penuh meski tanpa koneksi internet.",
    icon: WifiOff,
    color: "text-amber-600",
    bg: "bg-amber-100",
  },
  {
    title: "Modul Belajar",
    desc: "Materi edukasi yang bisa diunduh dan disimpan offline Agar ketika tidak.",
    icon: Download,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    title: "Eksplor Tentang Papua",
    desc: "Jelajahi kekayaan budaya tanah Papua secara mendalam:",
    icon: BookOpen,
    color: "text-emerald-600",
    bg: "bg-emerald-100",
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
    color: "text-rose-600",
    bg: "bg-rose-100",
  },
];
</script>

<template>
  <div class="space-y-4">
    <div
      class="flex items-start gap-3 rounded-2xl bg-emerald-50 p-4 border border-emerald-100 dark:bg-emerald-500/5 dark:border-emerald-500/20"
    >
      <div class="mt-1 rounded-full bg-emerald-500 p-1.5 text-white">
        <Zap :size="14" />
      </div>
      <div
        class="text-xs leading-relaxed text-emerald-900 dark:text-emerald-400"
      >
        Dibuat dengan <span class="font-bold">Bun + Vite + Vue 3</span>. Solusi
        cerdas akses informasi di wilayah blank spot.
      </div>
    </div>

    <div
      class="grid grid-cols-1 gap-3 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar"
    >
      <div
        v-for="item in features"
        :key="item.title"
        class="rounded-2xl border border-slate-100 p-3 dark:border-neutral-700 bg-white dark:bg-neutral-800/50"
      >
        <div class="flex items-center gap-4 mb-2">
          <div
            :class="[
              'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl shadow-sm',
              item.bg,
              item.color,
            ]"
          >
            <component :is="item.icon" :size="20" />
          </div>
          <div>
            <h3 class="text-sm font-bold text-slate-800 dark:text-neutral-200">
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
            <ChevronRight :size="10" class="text-emerald-500" />
            {{ sub }}
          </div>
        </div>
      </div>
    </div>

    <div
      class="pt-2 flex justify-between items-center border-t border-slate-100 dark:border-neutral-700 text-[10px] text-slate-400"
    >
      <div class="flex gap-2">
        <span
          class="px-2 py-0.5 rounded bg-slate-100 dark:bg-neutral-800 font-mono text-slate-500"
          >Bun Runtime</span
        >
        <span
          class="px-2 py-0.5 rounded bg-slate-100 dark:bg-neutral-800 font-mono text-slate-500"
          >Vite JS</span
        >
      </div>
      <p class="font-medium">v1.0.0-PROTOTYPE</p>
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
  border-radius: 10px;
}
</style>
