<template>
  <div class="relative">
    <button
      @click="isModalOpen = true"
      type="button"
      class="group flex items-center gap-3 px-3 py-1.5 rounded-2xl border border-slate-200 bg-slate-50/50 transition-all hover:border-emerald-500/50 hover:bg-white hover:shadow-md active:scale-95 dark:border-slate-800 dark:bg-zinc-900/50 dark:hover:border-emerald-500/30 dark:hover:bg-zinc-900"
    >
      <div
        class="p-1 rounded-lg bg-white dark:bg-zinc-800 shadow-sm group-hover:text-emerald-500 transition-colors text-slate-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2.5"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      <span class="text-sm font-medium text-slate-500 dark:text-zinc-400"
        >Cari materi...</span
      >

      <kbd
        class="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-lg border border-slate-200 bg-white font-mono text-[10px] font-bold text-slate-400 dark:border-zinc-700 dark:bg-zinc-800 shadow-sm"
      >
        <span class="text-xs">⌘</span>K
      </kbd>
    </button>

    <Teleport to="body">
      <div
        v-if="isModalOpen"
        class="fixed inset-0 z-[100] flex items-start justify-center p-4 sm:p-6 lg:p-20 overflow-hidden"
      >
        <div
          @click="isModalOpen = false"
          class="fixed inset-0 bg-slate-950/60 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
        ></div>

        <div
          class="relative w-full max-w-2xl transform overflow-hidden rounded-[2.5rem] bg-white shadow-2xl ring-1 ring-slate-200 dark:bg-zinc-950 dark:ring-zinc-800 animate-in zoom-in-95 slide-in-from-top-4 duration-300"
        >
          <div
            class="relative p-5 border-b border-slate-100 dark:border-zinc-800"
          >
            <div class="absolute left-9 top-1/2 -translate-y-1/2">
              <span
                v-if="!searchQuery"
                class="flex h-5 w-5 animate-pulse rounded-full bg-emerald-500/20"
              ></span>
              <svg
                v-else
                class="h-5 w-5 text-emerald-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <input
              v-model="searchQuery"
              type="text"
              class="h-14 w-full rounded-2xl border-none bg-slate-50 pl-14 pr-4 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-500 dark:bg-zinc-900 dark:text-white sm:text-base shadow-inner"
              placeholder="Apa yang ingin Kaka pelajari hari ini?"
              @keydown.esc="isModalOpen = false"
              ref="searchInput"
            />
          </div>

          <div class="max-h-[60vh] overflow-y-auto p-4 custom-scrollbar">
            <div v-if="searchQuery.length === 0" class="py-10 text-center">
              <div
                class="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-3xl"
              >
                <FlSearchShield />
              </div>
              <p class="text-sm font-bold text-slate-700 dark:text-zinc-300">
                Mau cari apa di Pustaka Papua?
              </p>
              <div class="mt-4 flex flex-wrap justify-center gap-2">
                <button
                  v-for="hint in [
                    'UMKM Noken',
                    'Bahasa Inggris',
                    'Tifa',
                    'Kopi',
                  ]"
                  @click="searchQuery = hint"
                  class="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-zinc-800 text-[11px] font-bold text-slate-600 dark:text-zinc-400 hover:bg-emerald-500 hover:text-white transition-all"
                >
                  # {{ hint }}
                </button>
              </div>
            </div>

            <div
              v-else-if="filteredSections.length === 0"
              class="py-12 text-center"
            >
              <span class="text-4xl">🌵</span>
              <p class="mt-4 text-sm text-slate-500 dark:text-zinc-400">
                Wah, kata kunci "<span
                  class="text-slate-900 dark:text-white font-bold"
                  >{{ searchQuery }}</span
                >" belum ditemukan.
              </p>
            </div>

            <div v-else class="space-y-6 pb-4">
              <div v-for="section in filteredSections" :key="section.id">
                <h3
                  class="px-3 mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-500"
                >
                  {{ section.label }}
                </h3>

                <div class="grid grid-cols-1 gap-1">
                  <button
                    v-for="item in section.items"
                    :key="item.id"
                    @click="onSelect(item)"
                    class="group flex items-center gap-4 p-3 rounded-2xl transition-all text-left hover:bg-emerald-50 dark:hover:bg-emerald-500/10 border border-transparent hover:border-emerald-100 dark:hover:border-emerald-500/20"
                  >
                    <div
                      class="h-12 w-12 shrink-0 rounded-xl bg-slate-50 dark:bg-zinc-900 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform"
                    >
                      {{ item.icon }}
                    </div>
                    <div class="flex-1 min-w-0">
                      <h4
                        class="text-sm font-bold text-slate-900 dark:text-white line-clamp-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
                      >
                        {{ item.title }}
                      </h4>
                      <p
                        class="text-xs text-slate-500 dark:text-zinc-400 line-clamp-1"
                      >
                        {{ item.description }}
                      </p>
                    </div>
                    <div
                      class="opacity-0 group-hover:opacity-100 transition-opacity pr-2 text-emerald-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            class="flex items-center justify-between border-t border-slate-100 bg-slate-50/50 px-6 py-4 dark:border-zinc-800/50 dark:bg-zinc-900/50"
          >
            <div class="flex items-center gap-4">
              <div
                class="flex items-center gap-1.5 text-[10px] font-bold text-zinc-400"
              >
                <kbd
                  class="px-1.5 py-0.5 rounded bg-white dark:bg-zinc-800 border dark:border-zinc-700 shadow-sm"
                  >ESC</kbd
                >
                Tutup
              </div>
              <div
                class="flex items-center gap-1.5 text-[10px] font-bold text-zinc-400"
              >
                <kbd
                  class="px-1.5 py-0.5 rounded bg-white dark:bg-zinc-800 border dark:border-zinc-700 shadow-sm"
                  >↵</kbd
                >
                Pilih
              </div>
            </div>
            <p
              class="text-[10px] font-black italic text-emerald-600 uppercase tracking-widest"
            >
              Pustaka Timur
            </p>
          </div>
        </div>
      </div>
    </Teleport>
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

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick, watch, computed } from "vue";
import { useRouter } from "vue-router";
import { FlSearchShield } from "@kalimahapps/vue-icons";

const router = useRouter();

const isModalOpen = ref(false);
const searchQuery = ref("");
const searchInput = ref<HTMLInputElement | null>(null);

// DATA MASTER PENCARIAN
type SearchItem = {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: "umkm" | "belajar" | "budaya" | "lainnya";
  route?: string; // misal: '/umkm/1'
  type?: "page" | "tag" | "module";
};

const allItems = ref<SearchItem[]>([
  // UMKM
  {
    id: "umkm-noken",
    title: "UMKM Noken Wamena",
    description: "Profil UMKM pengrajin noken dan produk unggulan.",
    icon: "🧺",
    category: "umkm",
    route: "/umkm/noken-wamena",
    type: "page",
  },
  {
    id: "umkm-kopi",
    title: "Kopi Papua Pegunungan",
    description: "Data pelaku usaha kopi dan titik penjualan.",
    icon: "☕",
    category: "umkm",
    route: "/umkm/kopi-papua",
    type: "page",
  },

  // BELAJAR
  {
    id: "Html Dasar",
    title: "Belajar Html Dasar",
    description: "Materi numerasi dan latihan untuk siswa SMP/SMA.",
    icon: "📐",
    category: "belajar",
    route: "/belajar/HtmlDasar",
    type: "module",
  },
  {
    id: "kopi wamena modern",
    title: "Teknik Dasar Budidaya Kopi Wamena",
    description:
      "Langkah sederhana menanam kopi dengan cara yang lebih produktif.",
    icon: "📖",
    category: "belajar",
    route: "/belajar/kopi-wamena-modern",
    type: "module",
  },

  // BUDAYA
  {
    id: "budaya-cerita-rakyat",
    title: "Cerita Rakyat Papua",
    description: "Kumpulan cerita rakyat dari berbagai suku di Timur.",
    icon: "🔥",
    category: "budaya",
    route: "/ceritaRakyat",
    type: "page",
  },

  // LAINNYA
  {
    id: "lainnya-tutorial-offline",
    title: "Cara Pakai Pustaka Timur Offline",
    description: "Panduan sinkronisasi dan akses tanpa internet.",
    icon: "📶",
    category: "lainnya",
    route: "/panduan/offline-first",
    type: "page",
  },
]);

// CONFIG SECTION
const sectionsConfig = [
  { id: "umkm", label: "UMKM & Ekonomi Lokal" },
  { id: "belajar", label: "Belajar & Modul" },
  { id: "budaya", label: "Budaya & Komunitas" },
  { id: "lainnya", label: "Halaman Lainnya" },
];

// FILTERING
type CategoryKey = "umkm" | "belajar" | "budaya" | "lainnya";

const filteredSections = computed(() => {
  const q = searchQuery.value.trim().toLowerCase();

  if (!q) {
    return sectionsConfig
      .map((sec) => {
        const items = allItems.value
          .filter((i) => i.category === sec.id)
          .slice(0, 3);

        return {
          id: sec.id,
          label: sec.label,
          items,
        };
      })
      .filter((s) => s.items && s.items.length > 0);
  }

  const matchedByCategory: Record<CategoryKey, SearchItem[]> = {
    umkm: [],
    belajar: [],
    budaya: [],
    lainnya: [],
  };

  for (const item of allItems.value) {
    const haystack = (
      item.title +
      " " +
      item.description +
      " " +
      item.category
    ).toLowerCase();

    if (haystack.includes(q)) {
      const key = item.category as CategoryKey;
      matchedByCategory[key].push(item);
    }
  }

  return sectionsConfig
    .map((sec) => {
      const key = sec.id as CategoryKey;
      const items = matchedByCategory[key] || [];
      return {
        id: sec.id,
        label: sec.label,
        items,
      };
    })
    .filter((s) => s.items && s.items.length > 0);
});

// HANDLER PILIH ITEM
const onSelect = (item: SearchItem) => {
  isModalOpen.value = false;

  if (item.route) {
    router.push(item.route);
  }
  // kalau mau emit ke parent:
  // emit("select", item);
};

// Shortcut ⌘K / Ctrl+K
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
