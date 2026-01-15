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

      <span class="text-sm text-slate-500 dark:text-slate-400">Cari ...</span>

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
          <!-- Input -->
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
              placeholder="Cari UMKM, materi belajar, budaya, dan lainnya..."
              @keydown.esc="isModalOpen = false"
              ref="searchInput"
            />
          </div>

          <!-- Hasil -->
          <div class="max-h-96 overflow-y-auto p-4 pt-0">
            <!-- Placeholder awal -->
            <div
              v-if="searchQuery.length === 0"
              class="py-8 text-center space-y-2"
            >
              <p class="text-sm text-slate-500 dark:text-slate-400">
                Cari berdasarkan kata kunci seperti:
              </p>
              <div class="flex flex-wrap justify-center gap-2 text-[11px]">
                <span
                  class="px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
                >
                  UMKM noken
                </span>
                <span
                  class="px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
                >
                  Belajar matematika
                </span>
                <span
                  class="px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
                >
                  Cerita rakyat
                </span>
              </div>
            </div>

            <!-- Tidak ada hasil -->
            <div
              v-else-if="filteredSections.length === 0"
              class="py-8 text-center"
            >
              <p class="text-sm text-slate-500 dark:text-slate-400">
                Tidak ada hasil untuk "<span class="font-semibold">{{
                  searchQuery
                }}</span
                >".
              </p>
            </div>

            <!-- Hasil per kategori -->
            <div v-else class="space-y-4">
              <div
                v-for="section in filteredSections"
                :key="section.id"
                class="space-y-2"
              >
                <p
                  class="px-2 text-[10px] font-bold uppercase tracking-widest text-slate-400"
                >
                  {{ section.label }}
                </p>

                <div
                  v-for="item in section.items"
                  :key="item.id"
                  class="group flex items-center gap-4 p-3 rounded-xl hover:bg-emerald-500/10 cursor-pointer border border-transparent hover:border-emerald-500/20 transition-all"
                  @click="onSelect(item)"
                >
                  <div
                    class="h-10 w-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xl"
                  >
                    {{ item.icon }}
                  </div>
                  <div>
                    <h4
                      class="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-500"
                    >
                      {{ item.title }}
                    </h4>
                    <p class="text-xs text-slate-500 dark:text-slate-400">
                      {{ item.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div
            class="flex items-center justify-between border-t border-slate-100 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-900/80"
          >
            <p class="text-[10px] text-slate-400">
              Tekan <span class="font-bold">ESC</span> untuk menutup
            </p>
            <div class="flex items-center gap-2">
              <span class="text-[10px] text-slate-400">Powered by</span>
              <span class="text-[10px] font-bold text-emerald-500 italic">
                Pustaka Timur
              </span>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick, watch, computed } from "vue";
import { useRouter } from "vue-router";

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
    id: "belajar-matematika",
    title: "Belajar Matematika Dasar",
    description: "Materi numerasi dan latihan untuk siswa SMP/SMA.",
    icon: "📐",
    category: "belajar",
    route: "/belajar/matematika-dasar",
    type: "module",
  },
  {
    id: "belajar-literasi",
    title: "Modul Literasi Membaca",
    description: "Panduan meningkatkan kemampuan membaca pemahaman.",
    icon: "📖",
    category: "belajar",
    route: "/belajar/literasi",
    type: "module",
  },

  // BUDAYA
  {
    id: "budaya-cerita-rakyat",
    title: "Cerita Rakyat Papua",
    description: "Kumpulan cerita rakyat dari berbagai suku di Timur.",
    icon: "🔥",
    category: "budaya",
    route: "/budaya/cerita-rakyat",
    type: "page",
  },
  {
    id: "budaya-lagu-daerah",
    title: "Lagu Daerah & Rohani",
    description: "Koleksi lagu daerah dan rohani untuk komunitas.",
    icon: "🎵",
    category: "budaya",
    route: "/budaya/lagu",
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
  {
    id: "lainnya-tentang",
    title: "Tentang Pustaka Timur",
    description: "Info singkat tentang misi dan fitur aplikasi.",
    icon: "ℹ️",
    category: "lainnya",
    route: "/tentang",
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
