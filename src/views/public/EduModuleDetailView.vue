<template>
  <section class="max-w-4xl mx-auto px-4 py-8" v-if="module">
    <header class="mb-4">
      <button
        type="button"
        class="text-xs text-slate-300 hover:text-emerald-300 mb-3"
        @click="goBack"
      >
        ← Kembali ke daftar modul
      </button>

      <h1 class="text-2xl font-semibold mb-1">
        {{ module.title }}
      </h1>
      <p class="text-xs text-slate-400">
        {{ categoryLabel }} • {{ module.durationMinutes }} menit •
        {{ module.level }}
      </p>
    </header>

    <section
      class="mb-4 flex flex-wrap gap-3 items-center justify-between rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-3"
    >
      <div class="text-xs text-slate-300 max-w-md">
        Modul ini dirancang untuk konteks Papua dan wilayah Timur dengan
        contoh-contoh yang dekat dengan kehidupan sehari-hari.
      </div>
      <div class="flex items-center gap-3">
        <span
          class="text-[10px] px-2 py-1 rounded-full border"
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
          class="text-[11px] px-3 py-1 rounded-md border border-emerald-500 text-emerald-300 hover:bg-emerald-500/10"
          @click="handleOfflineClick"
        >
          {{
            module.isOfflineAvailable
              ? "Perbarui Konten Offline"
              : "Simpan Modul untuk Offline"
          }}
        </button>
      </div>
    </section>

    <section
      class="rounded-lg border border-slate-800 bg-slate-900/60 p-4 mb-6"
    >
      <ModuleContent :content="module.content" />
    </section>

    <!-- Placeholder kuis (nanti bisa dikembangkan) -->
    <section class="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
      <h2 class="text-sm font-semibold mb-2">Kuis Singkat (Opsional)</h2>
      <p class="text-xs text-slate-400">
        Di sini nanti bisa ditambahkan kuis untuk menguji pemahaman siswa secara
        offline.
      </p>
    </section>
  </section>

  <section v-else class="max-w-4xl mx-auto px-4 py-8">
    <p class="text-sm text-slate-300">Modul tidak ditemukan.</p>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useEduStore } from "../../stores/eduStore";
import ModuleContent from "../../components/public/edu/ModuleContent.vue";

const route = useRoute();
const router = useRouter();
const eduStore = useEduStore();

const moduleId = computed(() => route.params.id as string);
const module = computed(() => eduStore.getById(moduleId.value));

const categoryLabel = computed(() => {
  if (!module.value) return "";
  switch (module.value.category) {
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

const goBack = () => {
  router.push({ name: "EduDashboard" });
};

const handleOfflineClick = () => {
  if (!module.value) return;
  eduStore.markOffline(module.value.id);
  // nanti di sini integrasi dengan IndexedDB + PWA untuk benar-benar menyimpan konten
};
</script>
