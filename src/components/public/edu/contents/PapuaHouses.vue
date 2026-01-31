<script setup lang="ts">
import { ref, computed } from "vue";
import BackButton from "../../../../services/BackButton.vue";

// 1. Definisi Interface
interface House {
  name: string;
  tribe: string;
  material: string;
  function: string;
  description: string;
  icon: string;
}

// 2. Data Rumah Adat
const houses: House[] = [
  {
    name: "Honai",
    tribe: "Suku Dani (Pegunungan)",
    material: "Kayu, Jerami/Alang-alang",
    function:
      "Tempat tinggal pria, menyimpan alat perang, dan tempat mendidik anak laki-laki.",
    description:
      "Rumah berbentuk bulat dengan atap kerucut menutupi hingga ke bawah, dirancang khusus untuk menahan suhu dingin pegunungan.",
    icon: "🏠",
  },
  {
    name: "Ebei",
    tribe: "Suku Dani (Pegunungan)",
    material: "Kayu, Jerami/Alang-alang",
    function:
      "Tempat tinggal wanita, anak-anak, dan tempat mendidik anak perempuan.",
    description:
      "Mirip dengan Honai namun ukurannya biasanya lebih kecil. Simbol kehangatan ibu dan keluarga.",
    icon: "🛖",
  },
  {
    name: "Kariwari",
    tribe: "Suku Tobati-Enggros",
    material: "Bambu, Kayu, Daun Sagu",
    function: "Pusat pendidikan agama dan adat bagi pemuda laki-laki.",
    description:
      "Memiliki atap limas segi delapan yang menjulang tinggi, melambangkan kedekatan dengan Sang Pencipta.",
    icon: "⛺",
  },
  {
    name: "Rumah Kaki Seribu",
    tribe: "Suku Arfak",
    material: "Kayu Pohon Cendana & Kulit Kayu",
    function: "Rumah tinggal bersama untuk menghindari serangan hewan buas.",
    description:
      "Memiliki banyak tiang penyangga di bawahnya sehingga terlihat seperti hewan lipan (kaki seribu).",
    icon: "🪵",
  },
];

const activeIndex = ref(0);

// Computed Aman untuk TypeScript Build
const currentHouse = computed<House>(() => {
  return (
    houses[activeIndex.value] ?? {
      name: "",
      tribe: "",
      material: "",
      function: "",
      description: "",
      icon: "🏠",
    }
  );
});
</script>

<template>
  <main
    class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mt-10 lg:py-10 text-left"
  >
    <BackButton class="mb-6" />

    <header class="mb-12 relative">
      <div class="flex items-center gap-4 mb-4">
        <div class="h-1 w-12 bg-emerald-500 rounded-full"></div>
        <span
          class="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400"
          >Arsitektur Tradisional</span
        >
      </div>
      <h1
        class="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight"
      >
        Rumah Adat
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500"
          >Papua</span
        >
      </h1>
      <p
        class="mt-4 max-w-2xl text-slate-600 dark:text-slate-400 leading-relaxed"
      >
        Bukan sekadar tempat berteduh, setiap struktur bangunan di Papua
        mencerminkan kearifan lokal dalam beradaptasi dengan alam dan nilai
        sosial yang tinggi.
      </p>
    </header>

    <div class="grid gap-8 lg:grid-cols-12">
      <div class="lg:col-span-4 space-y-4">
        <button
          v-for="(house, index) in houses"
          :key="index"
          @click="activeIndex = index"
          class="w-full group relative flex items-center gap-4 p-4 rounded-3xl border-2 transition-all duration-300"
          :class="
            activeIndex === index
              ? 'border-emerald-500 bg-emerald-50/50 dark:bg-emerald-900/10'
              : 'border-slate-100 bg-white dark:border-slate-800 dark:bg-slate-900 hover:border-emerald-200'
          "
        >
          <div
            class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm text-2xl dark:bg-slate-800"
          >
            {{ house.icon }}
          </div>
          <div class="text-left">
            <h3
              class="font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors"
            >
              {{ house.name }}
            </h3>
            <p class="text-[11px] text-slate-500 uppercase tracking-tighter">
              {{ house.tribe.split(" ")[1] }}
            </p>
          </div>
          <div
            v-if="activeIndex === index"
            class="absolute right-4 text-emerald-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </button>
      </div>

      <div class="lg:col-span-8">
        <transition name="fade-scale" mode="out-in" v-if="currentHouse">
          <div
            :key="activeIndex"
            class="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 shadow-xl shadow-slate-200/50 dark:shadow-none"
          >
            <div class="bg-emerald-600 p-8 text-white">
              <div class="flex justify-between items-start">
                <div>
                  <h2 class="text-3xl font-black">{{ currentHouse.name }}</h2>
                  <p
                    class="mt-1 flex items-center gap-2 text-emerald-100 text-sm"
                  >
                    <span class="opacity-70">Suku:</span>
                    {{ currentHouse.tribe }}
                  </p>
                </div>
                <span class="text-5xl">{{ currentHouse.icon }}</span>
              </div>
            </div>

            <div class="p-8 space-y-8">
              <p
                class="text-lg leading-relaxed text-slate-700 dark:text-slate-300 font-medium"
              >
                {{ currentHouse.description }}
              </p>

              <div class="grid sm:grid-cols-2 gap-4">
                <div
                  class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800"
                >
                  <h4
                    class="text-[10px] font-bold uppercase tracking-widest text-emerald-600 mb-2"
                  >
                    Material Utama
                  </h4>
                  <p
                    class="text-sm text-slate-600 dark:text-slate-400 font-semibold"
                  >
                    {{ currentHouse.material }}
                  </p>
                </div>
                <div
                  class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800"
                >
                  <h4
                    class="text-[10px] font-bold uppercase tracking-widest text-emerald-600 mb-2"
                  >
                    Fungsi Utama
                  </h4>
                  <p
                    class="text-sm text-slate-600 dark:text-slate-400 font-semibold"
                  >
                    {{ currentHouse.function }}
                  </p>
                </div>
              </div>

              <div
                class="flex gap-4 p-4 rounded-2xl bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-900/30"
              >
                <span class="text-xl">💡</span>
                <p
                  class="text-xs text-amber-800 dark:text-amber-300 leading-relaxed"
                >
                  <strong>Tahukah Anda?</strong> Honai sengaja dibuat tanpa
                  jendela untuk mempertahankan suhu panas di dalamnya, karena
                  udara di pegunungan Papua bisa mencapai di bawah 10°C.
                </p>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>

    <div class="mt-8 flex justify-center">
      <div
        class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-500 uppercase"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd"
          />
        </svg>
        Tersedia Secara Offline
      </div>
    </div>
    <ModuleDevelopmentNotice />
  </main>
</template>

<style scoped>
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.fade-scale-enter-from {
  opacity: 0;
  transform: scale(0.95);
}

.fade-scale-leave-to {
  opacity: 0;
  transform: scale(1.02);
}
</style>
