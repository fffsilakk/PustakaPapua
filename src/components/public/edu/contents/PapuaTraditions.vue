<script setup lang="ts">
import { ref, computed } from "vue";
import BackButton from "../../../../services/BackButton.vue";

// 1. Definisi Interface
interface Tradition {
  name: string;
  tribe: string;
  purpose: string;
  philosophy: string;
  steps: string[];
  icon: string;
}

// 2. Data Upacara Adat
const traditions: Tradition[] = [
  {
    name: "Bakar Batu (Barapen)",
    tribe: "Suku Dani & Pegunungan Tengah",
    purpose:
      "Ungkapan syukur, perdamaian antar suku, atau menyambut tamu penting.",
    philosophy:
      "Simbol kebersamaan dan solidaritas. Semua orang bekerja sama menyiapkan makanan dan makan bersama tanpa memandang kasta.",
    steps: [
      "Mengumpulkan batu kali dan kayu bakar",
      "Memanaskan batu hingga membara",
      "Menyusun bahan makanan (ubi, sayur, daging) di dalam lubang beralas daun",
      "Menutup lubang dengan batu panas dan dedaunan hingga matang",
      "Makan bersama (pesta adat)",
    ],
    icon: "🔥",
  },
  {
    name: "Tanam Ari-Ari (Iki Palek)",
    tribe: "Suku Dani",
    purpose:
      "Ungkapan duka cita yang mendalam atas kehilangan anggota keluarga.",
    philosophy:
      "Kesetiaan dan pengorbanan. Meski tradisi potong jari (Iki Palek) kini sudah ditinggalkan, nilainya tetap dihormati sebagai sejarah rasa kasih sayang.",
    steps: [
      "Berkumpul bersama keluarga besar",
      "Pemberian tanda duka melalui upacara adat",
      "Prosesi doa dan penghiburan bagi keluarga yang ditinggalkan",
      "Pemberian santunan atau bantuan makanan secara kolektif",
    ],
    icon: "🖐️",
  },
  {
    name: "Wor",
    tribe: "Suku Biak",
    purpose:
      "Mengiringi setiap fase kehidupan manusia (kelahiran hingga kematian).",
    philosophy:
      "Perlindungan spiritual. Wor dipercaya sebagai cara meminta perlindungan bagi individu dari kekuatan negatif alam.",
    steps: [
      "Persiapan sesaji adat",
      "Nyanyian dan tarian Wor yang ritmis",
      "Pemberian berkat oleh tetua adat",
      "Makan bersama hasil laut",
    ],
    icon: "🥁",
  },
];

const activeIndex = ref(0);

const currentTradition = computed<Tradition>(() => {
  const selected = traditions[activeIndex.value];
  if (selected) return selected;
  return {
    name: "Pilih Upacara",
    tribe: "-",
    purpose: "-",
    philosophy: "-",
    steps: [],
    icon: "✨",
  };
});
</script>

<template>
  <main
    class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mt-10 lg:py-10 text-left"
  >
    <BackButton class="mb-6" />

    <header class="mb-12">
      <div class="flex items-center gap-3 mb-2">
        <span class="h-px w-8 bg-amber-500"></span>
        <span
          class="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-600 dark:text-amber-400"
          >Warisan Luhur</span
        >
      </div>
      <h1
        class="text-4xl font-black text-slate-900 dark:text-white leading-tight"
      >
        Upacara Adat <br class="hidden sm:block" />
        & <span class="italic text-amber-600">Tradisi Papua</span>
      </h1>
      <p class="mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
        Memahami makna sakral di balik ritual, mulai dari penyelesaian konflik
        melalui Bakar Batu hingga upacara siklus hidup suku pesisir.
      </p>
    </header>

    <div class="grid gap-10 lg:grid-cols-12">
      <aside class="lg:col-span-4">
        <div class="sticky top-24 space-y-3">
          <button
            v-for="(tradition, index) in traditions"
            :key="index"
            @click="activeIndex = index"
            class="w-full group relative overflow-hidden rounded-2xl border-2 p-5 text-left transition-all"
            :class="
              activeIndex === index
                ? 'border-amber-500 bg-amber-50/50 dark:bg-amber-900/10 shadow-lg shadow-amber-100 dark:shadow-none'
                : 'border-slate-100 bg-white dark:border-slate-800 dark:bg-slate-900 hover:border-amber-200'
            "
          >
            <div class="flex items-center gap-4">
              <span class="text-2xl">{{ tradition.icon }}</span>
              <span class="font-bold text-slate-800 dark:text-slate-200">{{
                tradition.name
              }}</span>
            </div>
            <div
              v-if="activeIndex === index"
              class="absolute inset-y-0 right-0 w-1.5 bg-amber-500"
            ></div>
          </button>
        </div>
      </aside>

      <section class="lg:col-span-8">
        <transition name="fade-up" mode="out-in" v-if="currentTradition">
          <div :key="activeIndex" class="space-y-8">
            <div
              class="rounded-[2.5rem] bg-white p-8 border border-slate-200 dark:border-slate-800 dark:bg-slate-900 shadow-sm"
            >
              <div
                class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8"
              >
                <div>
                  <h2
                    class="text-3xl font-black text-slate-900 dark:text-white"
                  >
                    {{ currentTradition.name }}
                  </h2>
                  <p class="text-amber-600 font-medium text-sm mt-1">
                    Suku: {{ currentTradition.tribe }}
                  </p>
                </div>
                <div
                  class="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-3xl dark:bg-amber-900/40"
                >
                  {{ currentTradition.icon }}
                </div>
              </div>

              <div class="grid gap-8">
                <div>
                  <h4
                    class="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3"
                  >
                    Tujuan & Fungsi
                  </h4>
                  <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {{ currentTradition.purpose }}
                  </p>
                </div>

                <div
                  class="p-6 rounded-3xl bg-amber-50 dark:bg-amber-900/10 border border-amber-100/50 dark:border-amber-900/20"
                >
                  <h4
                    class="text-[11px] font-bold uppercase tracking-widest text-amber-700 dark:text-amber-400 mb-3"
                  >
                    Filosofi Sosial
                  </h4>
                  <p class="text-slate-700 dark:text-slate-300 italic">
                    "{{ currentTradition.philosophy }}"
                  </p>
                </div>
              </div>
            </div>

            <div class="rounded-[2.5rem] bg-slate-900 p-8 text-white shadow-xl">
              <h4
                class="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-6 text-center sm:text-left"
              >
                Tahapan Tradisi
              </h4>
              <div class="space-y-6">
                <div
                  v-for="(step, sIdx) in currentTradition.steps"
                  :key="sIdx"
                  class="flex gap-4"
                >
                  <div
                    class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-slate-900"
                  >
                    {{ sIdx + 1 }}
                  </div>
                  <p
                    class="text-sm sm:text-base text-slate-300 leading-relaxed"
                  >
                    {{ step }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </section>
    </div>

    <footer
      class="mt-12 rounded-3xl border-2 border-dashed border-slate-200 p-8 dark:border-slate-800"
    >
      <div class="flex flex-col sm:flex-row items-center gap-6">
        <div class="text-4xl grayscale">🤝</div>
        <div class="text-center sm:text-left">
          <h5
            class="font-bold text-slate-900 dark:text-white uppercase text-xs tracking-widest"
          >
            Wawasan Budaya
          </h5>
          <p class="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Upacara adat Papua mengajarkan kita bahwa penyelesaian konflik tidak
            selalu melalui jalur formal, melainkan melalui perdamaian dan
            kerelaan untuk berbagi di satu perjamuan yang sama.
          </p>
        </div>
      </div>
    </footer>
    <ModuleDevelopmentNotice />
  </main>
</template>

<style scoped>
.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 0.4s ease-out;
}

.fade-up-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-up-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
