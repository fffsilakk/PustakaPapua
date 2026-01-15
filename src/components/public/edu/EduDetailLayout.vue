<template>
  <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
    <section v-if="module">
      <!-- Back + header -->
      <header class="mb-4 sm:mb-6">
        <button
          type="button"
          class="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-emerald-300 transition-colors mb-3"
          @click="$emit('back')"
        >
          <span class="text-xs">←</span>
          <span>Kembali ke daftar modul</span>
        </button>

        <h1
          class="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight mb-1 text-white"
        >
          {{ module.title }}
        </h1>
        <p class="text-[11px] sm:text-xs text-slate-400">
          {{ categoryLabel }} • {{ module.durationMinutes }} menit •
          {{ module.level }}
        </p>
      </header>

      <!-- Info & offline actions -->
      <section
        class="mb-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-xl border border-slate-800/80 bg-slate-900/60 px-4 py-3"
      >
        <p class="text-xs text-slate-300 max-w-md leading-relaxed">
          Modul ini disusun dengan contoh yang dekat dengan kehidupan
          sehari-hari di Papua dan wilayah Timur, sehingga lebih mudah dipahami
          dan dipraktikkan oleh pelajar maupun komunitas lokal.
        </p>
        <div class="flex items-center gap-3">
          <span
            class="inline-flex items-center text-[10px] px-2 py-1 rounded-full border"
            :class="
              module.isOfflineAvailable
                ? 'border-emerald-400 text-emerald-300'
                : 'border-slate-600 text-slate-400'
            "
          >
            {{ module.isOfflineAvailable ? "Tersedia Offline" : "Online Saja" }}
          </span>
          <button
            type="button"
            class="text-[11px] px-3 py-1 rounded-md border border-emerald-500 text-emerald-300 hover:bg-emerald-500/10 transition-colors"
            @click="$emit('offline-click', module.id)"
          >
            {{
              module.isOfflineAvailable
                ? "Perbarui konten offline"
                : "Simpan untuk offline"
            }}
          </button>
        </div>
      </section>

      <!-- Konten modul -->
      <section
        class="rounded-xl border border-slate-800/80 bg-slate-900/60 p-4 sm:p-5 mb-5"
      >
        <ModuleContent :content="module.content" />
      </section>

      <!-- Placeholder kuis -->
      <section
        class="rounded-xl border border-slate-800/80 bg-slate-900/60 p-4 sm:p-5"
      >
        <h2 class="text-sm font-semibold mb-2">Kuis singkat (opsional)</h2>
        <p class="text-xs text-slate-400 leading-relaxed">
          Di bagian ini nanti bisa ditambahkan kuis sederhana untuk menguji
          pemahaman siswa, termasuk saat perangkat sedang offline.
        </p>
      </section>

      <p class="text-[11px] text-slate-500 mt-2">
        Setelah modul disimpan, konten ini tetap bisa dibuka meskipun perangkat
        tidak terhubung internet.
      </p>
    </section>

    <section v-else>
      <p class="text-sm text-slate-300">Modul tidak ditemukan.</p>
      <button
        type="button"
        class="mt-3 text-[11px] text-emerald-300 hover:underline"
        @click="$emit('back')"
      >
        Kembali ke daftar modul
      </button>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed } from "vue";
import ModuleContent from "./ModuleContent.vue";
import type { EduModule } from "../../../data/eduModules";

const props = defineProps<{
  module: EduModule | null;
}>();

defineEmits<{
  (e: "back"): void;
  (e: "offline-click", id: string): void;
}>();

const categoryLabel = computed(() => {
  if (!props.module) return "";
  switch (props.module.category) {
    case "coding":
      return "Coding Dasar";
    case "agrikultur":
      return "Agrikultur";
    case "bahasa":
      return "Bahasa Inggris";
    default:
      return "Modul";
  }
});
</script>
