<script setup lang="ts">
import { ref, computed } from "vue";
import BackButton from "../../../../services/BackButton.vue";

// 1. Definisi Interface untuk Type Safety
interface Tribe {
  name: string;
  region: string;
  description: string;
  characteristic: string;
  image: string;
}

interface Reference {
  title: string;
  url: string;
  domain: string;
  desc: string;
  icon: string;
}

// 2. Data Suku-Suku
const tribes: Tribe[] = [
  {
    name: "Suku Asmat",
    region: "Papua Selatan (Pesisir)",
    description:
      "Dikenal secara internasional karena seni ukir kayu yang luar biasa dan hubungan spiritual yang mendalam dengan nenek moyang.",
    characteristic:
      "Ahli ukir kayu, rumah tradisional 'Jew', dan upacara adat Bisj Pole.",
    image: "🗿",
  },
  {
    name: "Suku Dani",
    region: "Lembah Baliem (Pegunungan Tengah)",
    description:
      "Salah satu suku paling terkenal yang mendiami lembah subur di pegunungan tinggi Papua.",
    characteristic:
      "Rumah Honai, tradisi bakar batu (Barapen), dan pertanian ubi jalar.",
    image: "🏠",
  },
  {
    name: "Suku Biak",
    region: "Kepulauan Biak & Numfor",
    description:
      "Dikenal sebagai pelaut ulung yang memiliki navigasi tradisional yang hebat melintasi samudera.",
    characteristic:
      "Tradisi Wor (tarian & nyanyian), mahir dalam kelautan, dan kerajinan anyaman.",
    image: "🛶",
  },
  {
    name: "Suku Amungme",
    region: "Dataran Tinggi Mimika",
    description:
      "Suku yang memiliki keterikatan suci dengan gunung-gunung tinggi di Papua, yang mereka anggap sebagai tempat sakral.",
    characteristic:
      "Memuliakan alam (gunung/tanah), struktur sosial berbasis klan yang kuat.",
    image: "⛰️",
  },
];

// 3. State & Computed (Solusi untuk Error Undefined)
const activeTribeIndex = ref(0);

const currentTribe = computed<Tribe>(() => {
  return (
    tribes[activeTribeIndex.value] ?? {
      name: "",
      region: "",
      description: "",
      characteristic: "",
      image: "",
    }
  );
});
const cultureReferences: Reference[] = [
  {
    title: "Profil Suku Asmat",
    url: "https://id.wikipedia.org/wiki/Suku_Asmat",
    domain: "",
    desc: "Informasi mengenai sejarah dan kebudayaan suku Asmat di Papua.",
    icon: "🏛️",
  },
  {
    title: "Tentang suku Dani",
    url: "https://id.wikipedia.org/wiki/Suku_Dani",
    domain: "",
    desc: "Artikel mendalam tentang kehidupan suku Dani dan festival Lembah Baliem.",
    icon: "🌾",
  },
];
</script>

<template>
  <main
    class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mt-10 lg:py-10 text-left"
  >
    <BackButton class="mb-6" />

    <header
      class="relative mb-8 overflow-hidden rounded-[2rem] bg-gradient-to-br from-amber-600 to-orange-700 px-6 py-10 text-white shadow-xl"
    >
      <div class="relative z-10">
        <span
          class="inline-block rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest backdrop-blur-md"
        >
          Modul Budaya
        </span>
        <h1 class="mt-3 text-2xl sm:text-4xl font-black tracking-tight">
          Suku-Suku di Papua
        </h1>
        <p
          class="mt-3 max-w-2xl text-sm sm:text-base text-orange-50/90 leading-relaxed"
        >
          Mengenal kekayaan budaya, wilayah, dan karakteristik unik dari
          suku-suku besar yang menghuni Bumi Cendrawasih.
        </p>
      </div>
      <div
        class="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl"
      ></div>
    </header>

    <div class="grid gap-8 lg:grid-cols-12">
      <aside class="lg:col-span-4 space-y-3">
        <h2
          class="px-2 text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500"
        >
          Daftar Suku
        </h2>
        <div
          class="flex flex-row overflow-x-auto gap-2 lg:flex-col pb-2 lg:pb-0 scrollbar-hide"
        >
          <button
            v-for="(tribe, index) in tribes"
            :key="index"
            @click="activeTribeIndex = index"
            class="flex min-w-[140px] items-center gap-3 rounded-2xl border p-4 transition-all duration-300 sm:min-w-0"
            :class="
              activeTribeIndex === index
                ? 'border-amber-500 bg-amber-50 text-amber-700 shadow-sm dark:bg-amber-900/20 dark:text-amber-300'
                : 'border-slate-100 bg-white text-slate-600 hover:border-amber-200 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400'
            "
          >
            <span class="text-2xl">{{ tribe.image }}</span>
            <span class="font-bold text-sm">{{ tribe.name }}</span>
          </button>
        </div>
      </aside>

      <section class="lg:col-span-8">
        <div
          class="min-h-[400px] rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/50 sm:p-8"
        >
          <transition name="fade" mode="out-in">
            <div :key="activeTribeIndex">
              <div
                class="mb-6 flex flex-wrap items-center justify-between gap-4"
              >
                <div>
                  <h2
                    class="text-3xl font-black text-slate-900 dark:text-white"
                  >
                    {{ currentTribe.name }}
                  </h2>
                  <div
                    class="mt-2 flex items-center gap-2 text-amber-600 dark:text-amber-400"
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
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span class="text-sm font-medium">{{
                      currentTribe.region
                    }}</span>
                  </div>
                </div>
                <div
                  class="rounded-2xl bg-slate-50 p-4 text-4xl dark:bg-slate-800 shadow-inner"
                >
                  {{ currentTribe.image }}
                </div>
              </div>

              <div class="space-y-6">
                <div>
                  <h3
                    class="text-xs font-bold uppercase tracking-wider text-slate-400"
                  >
                    Tentang Suku
                  </h3>
                  <p
                    class="mt-2 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300"
                  >
                    {{ currentTribe.description }}
                  </p>
                </div>

                <div
                  class="rounded-2xl bg-amber-50/50 p-5 dark:bg-amber-900/10 border border-amber-100/50 dark:border-amber-900/30"
                >
                  <h3
                    class="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400"
                  >
                    Ciri Khas & Budaya
                  </h3>
                  <p
                    class="mt-2 text-[15px] font-semibold text-slate-700 dark:text-slate-200"
                  >
                    {{ currentTribe.characteristic }}
                  </p>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </section>
    </div>

    <section class="mt-12">
      <div
        class="mb-6 flex items-center gap-3 border-b border-slate-200 pb-4 dark:border-slate-800"
      >
        <h2 class="text-lg font-bold text-slate-800 dark:text-slate-100">
          Pelajari Lebih Lanjut
        </h2>
      </div>

      <div class="grid gap-4 sm:grid-cols-2">
        <a
          v-for="(ref, index) in cultureReferences"
          :key="index"
          :href="ref.url"
          target="_blank"
          class="group flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-4 transition-all hover:border-amber-400 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
        >
          <div
            class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-2xl dark:bg-amber-900/20"
          >
            {{ ref.icon }}
          </div>
          <div>
            <span
              class="text-[10px] font-bold uppercase tracking-tight text-amber-600"
              >{{ ref.domain }}</span
            >
            <h3
              class="text-sm font-bold text-slate-900 group-hover:text-amber-700 dark:text-white dark:group-hover:text-amber-400"
            >
              {{ ref.title }}
            </h3>
            <p
              class="mt-1 text-xs text-slate-500 dark:text-slate-400 line-clamp-2"
            >
              {{ ref.desc }}
            </p>
          </div>
        </a>
      </div>
    </section>

    <footer
      class="mt-10 rounded-3xl bg-slate-50 p-8 text-center dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800"
    >
      <p class="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        "Papua bukan hanya tentang tanah yang kaya, tapi tentang manusia dan
        ribuan tahun peradaban yang terjaga dalam keberagaman suku-sukunya."
      </p>
    </footer>
    <ModuleDevelopmentNotice />
  </main>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
