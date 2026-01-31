<script setup lang="ts">
import { ref, computed } from "vue";
import BackButton from "../../../../services/BackButton.vue";

// 1. Definisi Interface
interface Vocabulary {
  en: string; // Bahasa Inggris (opsional untuk konteks wisata)
  id: string; // Bahasa Indonesia
  local: string; // Kata dalam bahasa daerah
  pronunciation: string; // Cara baca
}

interface LanguageDialect {
  name: string;
  region: string;
  vocab: Vocabulary[];
}

// 2. Data Bahasa Daerah
const dialects: LanguageDialect[] = [
  {
    name: "Bahasa Biak",
    region: "Biak, Numfor, Supiori",
    vocab: [
      {
        id: "Terima kasih",
        local: "Amanum",
        en: "Thank you",
        pronunciation: "A-ma-num",
      },
      {
        id: "Sama-sama",
        local: "Kabor",
        en: "You're welcome",
        pronunciation: "Ka-bor",
      },
      {
        id: "Apa kabar?",
        local: "Rosai?",
        en: "How are you?",
        pronunciation: "Ro-sai?",
      },
      { id: "Baik", local: "Ppyen", en: "Good", pronunciation: "Pyen" },
    ],
  },
  {
    name: "Bahasa Dani",
    region: "Lembah Baliem, Wamena",
    vocab: [
      {
        id: "Halo/Salam",
        local: "Nayu-ak",
        en: "Hello",
        pronunciation: "Na-yu-ak",
      },
      {
        id: "Terima kasih",
        local: "Wa wa wa",
        en: "Thank you",
        pronunciation: "Wa-wa-wa (cepat)",
      },
      {
        id: "Selamat jalan",
        local: "Lauk",
        en: "Goodbye",
        pronunciation: "La-uk",
      },
      { id: "Makan", local: "Naget", en: "Eat", pronunciation: "Na-get" },
    ],
  },
  {
    name: "Bahasa Sentani",
    region: "Kabupaten Jayapura",
    vocab: [
      {
        id: "Selamat pagi",
        local: "Afo-moke",
        en: "Good morning",
        pronunciation: "A-fo-mo-ke",
      },
      {
        id: "Terima kasih",
        local: "Kosele",
        en: "Thank you",
        pronunciation: "Ko-se-le",
      },
      { id: "Ibu", local: "Mei", en: "Mother", pronunciation: "Mei" },
      { id: "Ayah", local: "Nei", en: "Father", pronunciation: "Nei" },
    ],
  },
];

const activeDialectIndex = ref(0);

// Computed Aman untuk Build
const currentDialect = computed<LanguageDialect>(() => {
  return (
    dialects[activeDialectIndex.value] ?? {
      name: "Bahasa Daerah",
      region: "-",
      vocab: [],
    }
  );
});
</script>

<template>
  <main
    class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mt-10 lg:py-10 text-left"
  >
    <BackButton class="mb-6" />

    <header
      class="mb-10 rounded-[2.5rem] bg-indigo-900 px-8 py-12 text-white shadow-2xl relative overflow-hidden"
    >
      <div class="relative z-10">
        <div
          class="inline-flex items-center gap-2 rounded-full bg-indigo-500/30 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-indigo-200 backdrop-blur-sm"
        >
          Lingustik & Budaya
        </div>
        <h1 class="mt-4 text-3xl font-black sm:text-5xl tracking-tight">
          Bahasa Daerah <span class="text-indigo-400">Papua</span>
        </h1>
        <p
          class="mt-4 max-w-xl text-indigo-100/80 leading-relaxed text-sm sm:text-base"
        >
          Papua memiliki lebih dari 270 bahasa daerah. Mari pelajari kosakata
          dasar dari beberapa bahasa besar untuk menyapa masyarakat lokal.
        </p>
      </div>
      <div
        class="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl"
      ></div>
    </header>

    <div class="mb-8 flex flex-wrap gap-3">
      <button
        v-for="(dialect, index) in dialects"
        :key="index"
        @click="activeDialectIndex = index"
        class="rounded-2xl px-6 py-3 text-sm font-bold transition-all"
        :class="
          activeDialectIndex === index
            ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 dark:shadow-none'
            : 'bg-white text-slate-600 border border-slate-200 hover:border-indigo-300 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400'
        "
      >
        {{ dialect.name }}
      </button>
    </div>

    <section v-if="currentDialect">
      <div class="mb-6">
        <h2 class="text-xl font-bold text-slate-900 dark:text-white">
          {{ currentDialect.name }}
        </h2>
        <p
          class="text-xs text-indigo-600 dark:text-indigo-400 font-medium uppercase tracking-wider mt-1"
        >
          Wilayah: {{ currentDialect.region }}
        </p>
      </div>

      <div class="grid gap-4 sm:grid-cols-2">
        <transition-group name="list">
          <div
            v-for="(item, idx) in currentDialect.vocab"
            :key="item.local"
            class="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 transition-all hover:border-indigo-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/50"
          >
            <div class="flex items-start justify-between mb-4">
              <div>
                <p
                  class="text-[10px] font-bold uppercase tracking-widest text-slate-400"
                >
                  Bahasa Indonesia
                </p>
                <h3 class="text-lg font-bold text-slate-900 dark:text-white">
                  {{ item.id }}
                </h3>
              </div>
              <div
                class="rounded-xl bg-indigo-50 p-2 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                  />
                </svg>
              </div>
            </div>

            <div
              class="mt-4 rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/50 transition-colors group-hover:bg-indigo-50/50 dark:group-hover:bg-indigo-900/10"
            >
              <p
                class="text-[10px] font-bold uppercase tracking-widest text-indigo-500 mb-1"
              >
                Terjemahan Lokal
              </p>
              <p
                class="text-2xl font-black text-indigo-700 dark:text-indigo-400"
              >
                {{ item.local }}
              </p>
              <p class="mt-2 text-xs text-slate-500 italic">
                Cara baca: "{{ item.pronunciation }}"
              </p>
            </div>
          </div>
        </transition-group>
      </div>
    </section>

    <div
      class="mt-12 rounded-[2rem] bg-amber-50 p-8 border border-amber-100 dark:bg-amber-900/10 dark:border-amber-900/30"
    >
      <div class="flex gap-4">
        <span class="text-3xl">🗣️</span>
        <div>
          <h4 class="font-bold text-amber-900 dark:text-amber-400">
            Tips Belajar Bahasa
          </h4>
          <p
            class="mt-2 text-sm text-amber-800 dark:text-amber-300 leading-relaxed"
          >
            Masyarakat Papua sangat menghargai wisatawan yang mencoba berbicara
            menggunakan bahasa daerah mereka, meskipun hanya sekadar mengucapkan
            <strong>"Terima Kasih"</strong> atau <strong>"Halo"</strong>. Jangan
            takut salah pengucapan!
          </p>
        </div>
      </div>
    </div>
    <ModuleDevelopmentNotice />
  </main>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease;
}
.list-enter-from {
  opacity: 0;
  transform: scale(0.9);
}
.list-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

/* Custom Scrollbar for Tabs if needed */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
