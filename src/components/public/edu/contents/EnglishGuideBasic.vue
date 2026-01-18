<!-- src/views/edu/EnglishGuideBasicLearnView.vue -->
<script setup lang="ts">
import { ref } from "vue";

const activeSection = ref<"greetings" | "tour" | "help">("greetings");

const repeatSentences = {
  greetings: [
    {
      en: "Welcome to Papua, my name is [your name].",
      id: "Selamat datang di Papua, nama saya [namamu].",
    },
    {
      en: "I will be your tour guide today.",
      id: "Saya akan menjadi pemandu wisata Anda hari ini.",
    },
    {
      en: "How are you today?",
      id: "Apa kabar hari ini?",
    },
  ],
  tour: [
    {
      en: "This is Sentani Lake, a famous lake in Papua.",
      id: "Ini adalah Danau Sentani, danau yang terkenal di Papua.",
    },
    {
      en: "Please enjoy the view and feel free to take photos.",
      id: "Silakan menikmati pemandangan dan jangan ragu untuk mengambil foto.",
    },
    {
      en: "We will walk for about ten minutes.",
      id: "Kita akan berjalan sekitar sepuluh menit.",
    },
  ],
  help: [
    {
      en: "Do you need any help?",
      id: "Apakah Anda membutuhkan bantuan?",
    },
    {
      en: "Please be careful, the path is a bit slippery.",
      id: "Harap berhati-hati, jalannya sedikit licin.",
    },
    {
      en: "If you feel tired, please tell me.",
      id: "Jika Anda merasa lelah, tolong beri tahu saya.",
    },
  ],
};

const rolePlayExamples = {
  greetings: [
    {
      title: "Menyambut wisatawan di bandara",
      guide:
        "Welcome to Papua! My name is Yohan, I will be your tour guide today.",
      tourist: "Nice to meet you, Yohan.",
    },
  ],
  tour: [
    {
      title: "Menjelaskan objek wisata",
      guide: "This is Youtefa Bridge. It connects the city and the beach area.",
      tourist: "Wow, it looks beautiful!",
    },
  ],
  help: [
    {
      title: "Memberi peringatan di jalur trekking",
      guide:
        "Please be careful here, the path is a bit slippery because of the rain.",
      tourist: "Thank you, I will be careful.",
    },
  ],
};
</script>

<template>
  <main
    class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mt-10 lg:py-8 text-left"
  >
    <!-- Header modul -->
    <header
      class="mb-6 rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/80"
    >
      <p
        class="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-500"
      >
        Modul Latihan
      </p>
      <h1
        class="mt-1 text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50"
      >
        Bahasa Inggris Dasar untuk Pemandu Wisata Papua
      </h1>
      <p
        class="mt-2 text-[13px] leading-relaxed text-slate-600 dark:text-slate-300"
      >
        Fokus latihan: salam, perkenalan, menjelaskan objek wisata, dan
        memberikan bantuan dasar kepada wisatawan asing.
      </p>
    </header>

    <!-- Tab kecil section -->
    <nav
      class="mb-5 inline-flex gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-1 text-[11px] dark:border-slate-800 dark:bg-slate-900"
    >
      <button
        type="button"
        class="rounded-xl px-3 py-1.5 font-semibold transition-colors"
        :class="
          activeSection === 'greetings'
            ? 'bg-emerald-500 text-white'
            : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
        "
        @click="activeSection = 'greetings'"
      >
        Salam & Perkenalan
      </button>
      <button
        type="button"
        class="rounded-xl px-3 py-1.5 font-semibold transition-colors"
        :class="
          activeSection === 'tour'
            ? 'bg-emerald-500 text-white'
            : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
        "
        @click="activeSection = 'tour'"
      >
        Jelaskan Wisata
      </button>
      <button
        type="button"
        class="rounded-xl px-3 py-1.5 font-semibold transition-colors"
        :class="
          activeSection === 'help'
            ? 'bg-emerald-500 text-white'
            : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
        "
        @click="activeSection = 'help'"
      >
        Membantu Wisatawan
      </button>
    </nav>

    <!-- Repeat after me -->
    <section
      class="mb-5 rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/80"
    >
      <div class="flex items-center justify-between gap-2 mb-3">
        <h2
          class="text-xs font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400"
        >
          Repeat After Me
        </h2>
        <p class="text-[11px] text-slate-400 dark:text-slate-500">
          Latih pengucapan dengan membaca pelan, jelas, dan percaya diri.
        </p>
      </div>

      <ul class="space-y-3">
        <li
          v-for="(item, idx) in repeatSentences[activeSection]"
          :key="idx"
          class="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-[13px] shadow-sm dark:border-slate-800 dark:bg-slate-900"
        >
          <p class="text-slate-900 font-semibold dark:text-slate-50">
            {{ item.en }}
          </p>
          <p class="mt-1 text-[12px] text-slate-500 dark:text-slate-400">
            {{ item.id }}
          </p>
          <p class="mt-2 text-[11px] text-emerald-600 dark:text-emerald-300">
            Tips: Ucapkan perlahan 3 kali, lalu coba tanpa melihat teks.
          </p>
        </li>
      </ul>
    </section>

    <!-- Role-play sederhana -->
    <section
      class="mb-5 rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-[13px] text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200"
    >
      <h2
        class="text-xs font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400"
      >
        Latihan Role-play
      </h2>
      <p class="mt-2 text-[12px] text-slate-600 dark:text-slate-400">
        Ajak teman atau bayangkan ada wisatawan di depanmu. Baca bagian
        <span class="font-semibold">Guide</span>, lalu jawab sebagai
        <span class="font-semibold">Tourist</span>.
      </p>

      <div
        v-for="(example, idx) in rolePlayExamples[activeSection]"
        :key="idx"
        class="mt-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-[13px] dark:border-slate-700 dark:bg-slate-900"
      >
        <p class="text-[12px] font-semibold text-slate-500 dark:text-slate-400">
          Skenario: {{ example.title }}
        </p>
        <div class="mt-2 space-y-1">
          <p>
            <span class="font-semibold text-emerald-600 dark:text-emerald-300"
              >Guide:</span
            >
            {{ example.guide }}
          </p>
          <p>
            <span class="font-semibold text-sky-600 dark:text-sky-300"
              >Tourist:</span
            >
            {{ example.tourist }}
          </p>
        </div>
      </div>
    </section>

    <!-- Catatan belajar -->
    <section
      class="rounded-3xl border border-slate-200 bg-white px-5 py-4 text-[12px] text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300"
    >
      <h2
        class="text-xs font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400"
      >
        Catatan Belajar
      </h2>
      <ul class="mt-2 list-disc pl-5 space-y-1">
        <li>Fokus pada pengucapan yang jelas, bukan cepat.</li>
        <li>Latih 2–3 frasa setiap hari agar mudah diingat.</li>
        <li>
          Coba gunakan frasa ini saat simulasi tur di lingkungan sekitar
          (pantai, bukit, atau tempat wisata lokal).
        </li>
      </ul>
    </section>
  </main>
</template>
