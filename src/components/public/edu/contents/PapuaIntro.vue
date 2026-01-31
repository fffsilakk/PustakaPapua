<!-- src/views/edu/PapuaIntroBasicLearnView.vue -->
<script setup lang="ts">
import { ref, onMounted } from "vue";
import BackButton from "../../../../services/BackButton.vue";
import AOS from "aos";

onMounted(() => {
  AOS.init({
    once: true,
    duration: 700,
    offset: 120,
  });
});

const materi = {
  id: "papua-intro",
  title: "Pengenalan Papua dan Keberagaman Budaya",
  category: "budaya",
  level: "pemula",
  durationMinutes: 30,
  isOfflineAvailable: true,
  shortDescription:
    "Mengenal Papua, wilayah adat, dan kekayaan budaya yang dimiliki.",
};

const activeSection = ref<"gambaran" | "wilayah-adat" | "contoh-budaya">(
  "gambaran",
);

const sections = {
  gambaran: [
    {
      title: "Di mana letak Papua?",
      body: "Papua terletak di bagian paling timur Indonesia dan berbatasan dengan Papua Nugini. Wilayah ini memiliki pegunungan tinggi, lembah subur, dan garis pantai yang panjang.",
    },
    {
      title: "Keunikan alam Papua",
      body: "Papua terkenal dengan pegunungan Jayawijaya, hutan hujan tropis, dan keanekaragaman hayati yang sangat tinggi. Banyak tumbuhan dan hewan yang hanya bisa ditemukan di Papua.",
    },
    {
      title: "Keberagaman suku dan bahasa",
      body: "Di Papua terdapat ratusan suku dengan bahasa dan adat istiadat yang berbeda, namun semuanya menjadi bagian dari kekayaan budaya Indonesia.",
    },
  ],
  "wilayah-adat": [
    {
      title: "Wilayah Adat Mamta dan Saereri",
      body: "Wilayah utara Papua yang banyak berada di sekitar pesisir dan teluk. Masyarakatnya dikenal dengan tradisi bahari dan kerajinan ukiran kayu.",
    },
    {
      title: "Wilayah Adat La Pago dan Mee Pago",
      body: "Wilayah pegunungan tengah dengan lembah-lembah seperti Lembah Baliem. Banyak masyarakatnya hidup dari berkebun dan beternak babi.",
    },
    {
      title: "Wilayah Adat Anim Ha dan Domberai",
      body: "Wilayah selatan dan barat Papua, termasuk daerah rawa dan pesisir. Di sini berkembang beragam tradisi seni, tarian, dan rumah adat yang khas.",
    },
  ],
  "contoh-budaya": [
    {
      title: "Tarian dan Upacara Adat",
      body: "Setiap wilayah adat memiliki tarian dan upacara adat sendiri, misalnya tarian perang, upacara bakar batu, dan berbagai ritual syukuran.",
    },
    {
      title: "Rumah Adat dan Pakaian Tradisional",
      body: "Papua memiliki beragam rumah adat dan pakaian tradisional yang menunjukkan identitas suku dan wilayah, seperti honai di pegunungan.",
    },
    {
      title: "Bahasa Daerah dan Cerita Rakyat",
      body: "Cerita rakyat dan bahasa daerah menjadi cara orang tua menurunkan nilai-nilai kehidupan, sejarah, dan identitas kepada generasi muda.",
    },
  ],
};

const reflectionQuestions = [
  "Hal apa yang paling kamu ingat ketika mendengar kata Papua?",
  "Mengapa penting untuk mengenal keberagaman budaya di Papua?",
  "Bagaimana caramu menghargai teman yang berasal dari budaya atau suku yang berbeda?",
];

const references = [
  {
    title: "Papua People and Its Culture",
    url: "https://biarjournal.com/index.php/lakhomi/article/download/742/717",
    domain: "biarjournal.com",
    desc: "Tulisan singkat mengenai masyarakat Papua dan kebudayaannya secara umum.",
    icon: "📄",
  },
  {
    title: "Infusing Culture in English Learning (Jayapura)",
    url: "https://e-journal.usd.ac.id/index.php/LLT/article/download/506/438",
    domain: "e-journal.usd.ac.id",
    desc: "Contoh bagaimana budaya Papua diintegrasikan dalam pembelajaran di Jayapura.",
    icon: "🎓",
  },
];
</script>

<template>
  <main
    class="mx-auto mt-10 max-w-4xl px-4 py-6 text-left sm:px-6 lg:px-8 lg:py-8"
  >
    <BackButton class="my-5" />

    <!-- HERO / HEADER MODUL -->
    <header
      class="mb-6 overflow-hidden rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-600 via-emerald-500 to-sky-500 px-5 py-5 text-white shadow-md dark:border-emerald-500/40"
      data-aos="fade-up"
    >
      <div
        class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
      >
        <div class="max-w-xl space-y-2">
          <p
            class="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-100/90"
          >
            Modul pengenalan · {{ materi.category }}
          </p>
          <h1 class="text-xl font-extrabold tracking-tight sm:text-2xl">
            {{ materi.title }}
          </h1>
          <p class="text-[13px] leading-relaxed text-emerald-50/90">
            {{ materi.shortDescription }}
          </p>
        </div>

        <div
          class="flex flex-col items-end gap-2 text-right text-[11px] sm:items-end"
        >
          <div
            class="inline-flex items-center gap-2 rounded-2xl bg-emerald-900/30 px-3 py-2 text-emerald-50 shadow-sm"
          >
            <span
              class="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/90 text-xs shadow-md shadow-emerald-400/60"
            >
              ⏱️
            </span>
            <div class="space-y-0.5 text-left">
              <p class="font-semibold">
                {{ materi.durationMinutes }} menit belajar
              </p>
              <p class="text-[10px] text-emerald-100/80">
                Level: {{ materi.level }}
              </p>
            </div>
          </div>

          <div
            v-if="materi.isOfflineAvailable"
            class="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px]"
          >
            <span>📥</span>
            <span>Bisa disimpan untuk belajar offline</span>
          </div>

          <p class="text-[10px] text-emerald-100/80">
            ID modul: {{ materi.id }}
          </p>
        </div>
      </div>
    </header>

    <!-- TAB KECIL SEKSIS MODUL -->
    <nav
      class="mb-5 inline-flex gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-1 text-[11px] dark:border-slate-800 dark:bg-slate-900"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <button
        type="button"
        class="rounded-xl px-3 py-1.5 font-semibold transition-colors"
        :class="
          activeSection === 'gambaran'
            ? 'bg-emerald-500 text-white'
            : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
        "
        @click="activeSection = 'gambaran'"
      >
        Gambaran Umum Papua
      </button>
      <button
        type="button"
        class="rounded-xl px-3 py-1.5 font-semibold transition-colors"
        :class="
          activeSection === 'wilayah-adat'
            ? 'bg-emerald-500 text-white'
            : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
        "
        @click="activeSection = 'wilayah-adat'"
      >
        Wilayah Adat
      </button>
      <button
        type="button"
        class="rounded-xl px-3 py-1.5 font-semibold transition-colors"
        :class="
          activeSection === 'contoh-budaya'
            ? 'bg-emerald-500 text-white'
            : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
        "
        @click="activeSection = 'contoh-budaya'"
      >
        Contoh Budaya
      </button>
    </nav>

    <!-- KONTEN UTAMA -->
    <section
      class="mb-5 rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/80"
      data-aos="fade-up"
      data-aos-delay="150"
    >
      <div class="mb-3 flex items-center justify-between gap-2">
        <h2
          class="text-xs font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400"
        >
          Materi Utama
        </h2>
        <p class="text-[11px] text-slate-400 dark:text-slate-500">
          Baca setiap bagian dan diskusikan bersama teman atau guru.
        </p>
      </div>

      <ol class="space-y-3">
        <li
          v-for="(item, idx) in sections[activeSection]"
          :key="idx"
          class="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-[13px] shadow-sm dark:border-slate-800 dark:bg-slate-900"
          data-aos="fade-up"
          :data-aos-delay="180 + idx * 80"
        >
          <div class="flex items-start gap-2">
            <span
              class="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-[11px] font-semibold text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-300"
            >
              {{ idx + 1 }}
            </span>
            <div>
              <p class="font-semibold text-slate-900 dark:text-slate-50">
                {{ item.title }}
              </p>
              <p
                class="mt-1 text-[12px] leading-relaxed text-slate-600 dark:text-slate-300"
              >
                {{ item.body }}
              </p>
            </div>
          </div>
        </li>
      </ol>
    </section>

    <!-- AKTIVITAS REFLEKSI -->
    <section
      class="mb-5 rounded-3xl border border-emerald-100 bg-emerald-50 px-5 py-4 text-[13px] text-emerald-900 shadow-sm dark:border-emerald-500/40 dark:bg-emerald-950/30 dark:text-emerald-100"
      data-aos="fade-right"
    >
      <h2 class="text-xs font-bold uppercase tracking-[0.16em]">
        Pertanyaan Refleksi
      </h2>
      <p class="mt-1 text-[12px]">
        Gunakan pertanyaan ini untuk bahan diskusi di kelas atau renungan
        pribadi setelah belajar.
      </p>
      <ol class="mt-2 list-decimal space-y-1 pl-4">
        <li v-for="(q, idx) in reflectionQuestions" :key="idx">
          {{ q }}
        </li>
      </ol>
    </section>

    <!-- REFERENSI SINGKAT -->
    <section class="mx-auto mt-6 max-w-4xl pb-4" data-aos="fade-left">
      <div
        class="mb-4 flex items-center gap-3 border-b border-slate-200 pb-3 dark:border-slate-700"
      >
        <h2 class="text-sm font-semibold text-slate-900 dark:text-slate-100">
          Referensi Lanjutan
        </h2>
        <span
          class="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400"
        >
          {{ references.length }} sumber
        </span>
      </div>

      <div class="grid gap-4 sm:grid-cols-2">
        <a
          v-for="(ref, index) in references"
          :key="index"
          :href="ref.url"
          target="_blank"
          rel="noopener noreferrer"
          class="group relative flex flex-col rounded-xl border border-slate-200 bg-white p-4 text-[13px] shadow-sm transition-all hover:-translate-y-1 hover:border-emerald-400/50 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:hover:border-emerald-500/50"
        >
          <div class="mb-2 flex items-center justify-between">
            <div
              class="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-lg text-emerald-700 dark:bg-emerald-900/25 dark:text-emerald-300"
            >
              {{ ref.icon }}
            </div>
            <span
              class="text-[10px] font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500"
            >
              {{ ref.domain }}
            </span>
          </div>

          <h3
            class="mb-1 text-sm font-semibold text-slate-900 group-hover:text-emerald-700 dark:text-slate-100 dark:group-hover:text-emerald-300"
          >
            {{ ref.title }}
          </h3>
          <p
            class="text-[12px] leading-relaxed text-slate-500 line-clamp-2 dark:text-slate-400"
          >
            {{ ref.desc }}
          </p>

          <div
            class="mt-3 flex items-center gap-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400"
          >
            Lihat sumber
            <span
              class="translate-x-0 text-[11px] transition-transform group-hover:translate-x-0.5"
            >
              →
            </span>
          </div>
        </a>
      </div>
    </section>
    <ModuleDevelopmentNotice />
  </main>
</template>
