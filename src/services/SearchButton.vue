<template>
  <div class="relative">
    <button
      @click="isModalOpen = true"
      type="button"
      class="group flex items-center gap-3 px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 transition-all hover:border-emerald-500/50 hover:bg-white dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-emerald-500/30 dark:hover:bg-slate-900 shadow-sm"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 text-slate-400 group-hover:text-emerald-500 transition-colors"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>

      <span class="text-sm text-slate-500 dark:text-slate-400"
        >Cari tutorial...</span
      >

      <kbd
        class="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 rounded border border-slate-200 bg-white font-mono text-[10px] font-medium text-slate-400 dark:border-slate-700 dark:bg-slate-800"
      >
        <span class="text-xs">⌘</span>K
      </kbd>
    </button>

    <Teleport to="body">
      <div
        v-if="isModalOpen"
        class="fixed inset-0 z-[100] flex items-start justify-center p-4 sm:p-6 lg:p-20"
      >
        <div
          @click="isModalOpen = false"
          class="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
        ></div>

        <div
          class="relative w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-slate-200 transition-all dark:bg-slate-900 dark:ring-slate-800"
        >
          <div class="relative p-4">
            <svg
              class="pointer-events-none absolute left-8 top-8 h-5 w-5 text-emerald-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              v-model="searchQuery"
              type="text"
              class="h-12 w-full rounded-xl border-0 bg-slate-100 pl-12 pr-4 text-slate-900 placeholder:text-slate-500 focus:ring-2 focus:ring-emerald-500 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-400 sm:text-sm shadow-inner"
              placeholder="Ketik apa yang ingin kamu pelajari..."
              @keydown.esc="isModalOpen = false"
              ref="searchInput"
            />
          </div>

          <div class="max-h-96 overflow-y-auto p-4 pt-0">
            <div v-if="searchQuery.length === 0" class="py-12 text-center">
              <p class="text-sm text-slate-500 dark:text-slate-400">
                Cari berdasarkan judul materi, hardware, atau perintah Linux.
              </p>
            </div>

            <div v-else class="space-y-2">
              <p
                class="px-2 text-[10px] font-bold uppercase tracking-widest text-slate-400"
              >
                Hasil Tutorial
              </p>
              <div
                class="group flex items-center gap-4 p-3 rounded-xl hover:bg-emerald-500/10 cursor-pointer border border-transparent hover:border-emerald-500/20 transition-all"
              >
                <div
                  class="h-10 w-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-emerald-500"
                >
                  🐧
                </div>
                <div>
                  <h4
                    class="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-500"
                  >
                    Instalasi Debian 12
                  </h4>
                  <p class="text-xs text-slate-500 dark:text-slate-400">
                    Panduan langkah demi langkah untuk pemula.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            class="flex items-center justify-between border-t border-slate-100 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-900/80"
          >
            <p class="text-[10px] text-slate-400">
              Tekan <span class="font-bold">ESC</span> untuk menutup
            </p>
            <div class="flex items-center gap-2">
              <span class="text-[10px] text-slate-400">Powered by</span>
              <span class="text-[10px] font-bold text-emerald-500 italic"
                >ナレDev</span
              >
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick, watch } from "vue";

const isModalOpen = ref(false);
const searchQuery = ref("");
const searchInput = ref<HTMLInputElement | null>(null);

// Fungsi untuk menangani shortcut keyboard (⌘K atau Ctrl+K)
const handleKeyDown = (e: KeyboardEvent) => {
  if ((e.metaKey || e.ctrlKey) && e.key === "k") {
    e.preventDefault();
    isModalOpen.value = !isModalOpen.value;
  }
};

// Autofocus input saat modal dibuka
watch(isModalOpen, (newVal) => {
  if (newVal) {
    nextTick(() => {
      searchInput.value?.focus();
    });
  } else {
    searchQuery.value = "";
  }
});

onMounted(() => window.addEventListener("keydown", handleKeyDown));
onUnmounted(() => window.removeEventListener("keydown", handleKeyDown));
</script>
