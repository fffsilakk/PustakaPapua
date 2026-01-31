<script setup lang="ts">
import { ref, computed } from "vue";
import BackButton from "../../../../services/BackButton.vue";

// 1. Definisi Interface
interface Dance {
  name: string;
  origin: string;
  category: "Kegembiraan" | "Perang" | "Pemujaan" | "Penyambutan";
  description: string;
  meaning: string;
  icon: string;
}

// 2. Data Tarian
const dances: Dance[] = [
  {
    name: "Tari Sajojo",
    origin: "Papua (Umum)",
    category: "Kegembiraan",
    description:
      "Tarian pergaulan yang sangat populer, sering dibawakan untuk menyambut tamu atau dalam acara kebersamaan.",
    meaning:
      "Mencerminkan semangat kebersamaan dan keceriaan masyarakat Papua.",
    icon: "💃",
  },
  {
    name: "Tari Musyoh",
    origin: "Papua (Suku Pesisir)",
    category: "Pemujaan",
    description:
      "Tarian sakral yang secara tradisional dilakukan untuk menenangkan arwah leluhur yang meninggal karena kecelakaan.",
    meaning:
      "Simbol penghormatan kepada roh nenek moyang dan harapan akan ketenangan.",
    icon: "🔥",
  },
  {
    name: "Tari Yospan",
    origin: "Biak & Yapen Waropen",
    category: "Kegembiraan",
    description:
      "Gabungan dari tarian Yosim dan Pancar. Dikenal dengan gerakan kaki yang energetik seperti loncatan.",
    meaning: "Ekspresi kebahagiaan para pemuda dan persahabatan antar suku.",
    icon: "✨",
  },
  {
    name: "Tari Perang",
    origin: "Pegunungan Tengah",
    category: "Perang",
    description:
      "Tarian yang menggambarkan kepahlawanan dan kegagahan pria Papua dengan atribut tombak dan panah.",
    meaning:
      "Menunjukkan keberanian, kekuatan, dan kesiapan untuk melindungi tanah air.",
    icon: "🛡️",
  },
];

const activeIndex = ref(0);

// Computed dengan Fallback agar aman dari TypeScript 'undefined' error
const currentDance = computed<Dance>(() => {
  return (
    dances[activeIndex.value] ?? {
      name: "",
      origin: "",
      category: "Kegembiraan",
      description: "",
      meaning: "",
      icon: "✨",
    }
  );
});

// Helper warna badge berdasarkan kategori
const getCategoryClass = (cat: string) => {
  switch (cat) {
    case "Perang":
      return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
    case "Pemujaan":
      return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400";
    case "Penyambutan":
      return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
    default:
      return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400";
  }
};
</script>

<template>
  <main
    class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mt-10 lg:py-10 text-left"
  >
    <BackButton class="mb-6" />

    <header class="mb-10 text-center lg:text-left">
      <div
        class="inline-flex items-center gap-2 rounded-full bg-rose-50 px-3 py-1 dark:bg-rose-900/20"
      >
        <span class="relative flex h-2 w-2">
          <span
            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"
          ></span>
          <span
            class="relative inline-flex rounded-full h-2 w-2 bg-rose-500"
          ></span>
        </span>
        <span
          class="text-[10px] font-bold uppercase tracking-widest text-rose-600 dark:text-rose-400"
          >Budaya & Seni</span
        >
      </div>
      <h1
        class="mt-4 text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl"
      >
        Tarian Adat <span class="text-rose-600">Papua</span>
      </h1>
      <p class="mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
        Menelusuri makna di balik setiap hentakan kaki dan gerakan tangan yang
        menceritakan sejarah, pemujaan, hingga semangat kepahlawanan.
      </p>
    </header>

    <div class="grid gap-8 lg:grid-cols-12">
      <div class="lg:col-span-5 space-y-4">
        <button
          v-for="(dance, index) in dances"
          :key="index"
          @click="activeIndex = index"
          class="group relative w-full overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300"
          :class="
            activeIndex === index
              ? 'border-rose-500 bg-white shadow-xl shadow-rose-100 dark:bg-slate-900 dark:shadow-none'
              : 'border-slate-100 bg-slate-50 hover:border-rose-200 dark:border-slate-800 dark:bg-slate-900/50'
          "
        >
          <div class="relative z-10 flex items-center justify-between">
            <div class="flex items-center gap-4">
              <span
                class="text-3xl transition-transform group-hover:scale-110"
                >{{ dance.icon }}</span
              >
              <div>
                <h3 class="font-bold text-slate-900 dark:text-white">
                  {{ dance.name }}
                </h3>
                <p class="text-xs text-slate-500">{{ dance.origin }}</p>
              </div>
            </div>
            <span
              class="rounded-lg px-2 py-1 text-[10px] font-bold uppercase tracking-tight"
              :class="getCategoryClass(dance.category)"
            >
              {{ dance.category }}
            </span>
          </div>
          <div
            v-if="activeIndex === index"
            class="absolute inset-y-0 left-0 w-1 bg-rose-500"
          ></div>
        </button>
      </div>

      <div class="lg:col-span-7">
        <transition name="slide-up" mode="out-in" v-if="currentDance">
          <div
            :key="activeIndex"
            class="rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <div class="flex items-center gap-4 mb-8">
              <div
                class="flex h-16 w-16 items-center justify-center rounded-3xl bg-rose-50 text-4xl dark:bg-rose-900/20"
              >
                {{ currentDance.icon }}
              </div>
              <div>
                <span
                  class="text-xs font-bold uppercase tracking-widest text-rose-500"
                  >Detail Tarian</span
                >
                <h2
                  class="text-3xl font-black text-slate-900 dark:text-white leading-tight"
                >
                  {{ currentDance.name }}
                </h2>
              </div>
            </div>

            <div class="grid gap-6">
              <div
                class="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:rounded-full before:bg-rose-100 dark:before:bg-rose-900/30"
              >
                <h4 class="text-sm font-bold text-slate-900 dark:text-white">
                  Deskripsi
                </h4>
                <p
                  class="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400"
                >
                  {{ currentDance.description }}
                </p>
              </div>

              <div class="rounded-3xl bg-slate-50 p-6 dark:bg-slate-800/50">
                <div
                  class="flex items-center gap-2 mb-2 text-rose-600 dark:text-rose-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <h4 class="text-sm font-bold uppercase tracking-wider">
                    Makna & Filosofi
                  </h4>
                </div>
                <p
                  class="text-sm italic leading-relaxed text-slate-700 dark:text-slate-300"
                >
                  "{{ currentDance.meaning }}"
                </p>
              </div>
            </div>

            <div
              class="mt-8 flex items-center gap-3 rounded-2xl border border-dashed border-slate-200 p-4 dark:border-slate-700"
            >
              <div class="text-xl">💡</div>
              <p class="text-[11px] text-slate-500 dark:text-slate-400">
                <strong>Tips Belajar:</strong> Perhatikan irama musik pengiring
                (seperti Tifa) untuk memahami kecepatan gerakan tarian ini.
              </p>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <ModuleDevelopmentNotice />
  </main>
</template>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

/* Sembunyikan scrollbar untuk pengalaman UI lebih clean */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
