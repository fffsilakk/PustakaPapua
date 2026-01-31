<!-- src/views/edu/KopiWamenaBasicLearnView.vue -->
<script setup lang="ts">
import { ref } from "vue";
import BackButton from "../../../../services/BackButton.vue";

const activeSection = ref<"persiapan" | "tanam" | "panen">("persiapan");

const steps = {
  persiapan: [
    {
      title: "Memahami Iklim Wamena",
      body: "Wamena berada di dataran tinggi dengan suhu sejuk, sangat cocok untuk kopi arabika. Petani perlu memperhatikan perbedaan suhu siang dan malam.",
    },
    {
      title: "Memilih Bibit Kopi",
      body: "Pilih bibit kopi sehat, daun hijau segar, tidak bercak kuning, dan akar kuat. Gunakan bibit dari kebun pembibitan yang terpercaya di daerahmu.",
    },
    {
      title: "Menyiapkan Media Tanam",
      body: "Campurkan tanah gembur, kompos, dan pasir dengan perbandingan seimbang. Pastikan media tidak becek dan mudah mengalirkan air.",
    },
  ],
  tanam: [
    {
      title: "Menentukan Jarak Tanam",
      body: "Jarak tanam umum untuk kopi arabika adalah sekitar 2 x 2,5 meter. Ini membantu tanaman mendapat cukup cahaya sekaligus ruang untuk tumbuh.",
    },
    {
      title: "Teknik Penanaman Bibit",
      body: "Gali lubang tanam sesuai ukuran akar bibit. Letakkan bibit tegak lurus, tutup dengan tanah, dan padatkan perlahan agar tanaman berdiri kokoh.",
    },
    {
      title: "Penyiraman & Peneduh",
      body: "Siram secukupnya, jangan sampai menggenang. Gunakan tanaman peneduh (seperti pisang atau lamtoro) untuk melindungi kopi dari sinar matahari langsung.",
    },
  ],
  panen: [
    {
      title: "Ciri Buah Siap Panen",
      body: "Buah kopi siap panen ditandai dengan warna merah cerah dan seragam. Hindari memetik buah yang masih hijau atau terlalu hitam.",
    },
    {
      title: "Panen Selektif",
      body: "Panen dilakukan bertahap, hanya memetik buah yang benar-benar matang. Cara ini menghasilkan kualitas biji kopi yang lebih baik.",
    },
    {
      title: "Pengolahan Pasca Panen Singkat",
      body: "Setelah dipetik, buah kopi bisa diproses dengan metode basah atau kering. Yang penting adalah pengeringan hingga kadar air biji cukup rendah.",
    },
  ],
};

const localTips = [
  "Manfaatkan pupuk organik dari kotoran ternak atau sisa tanaman di sekitar kebun.",
  "Jaga kebun tetap bersih dari gulma agar tanaman kopi tidak berebut nutrisi.",
  "Catat waktu tanam, pemupukan, dan panen untuk belajar dari musim ke musim.",
];
const kopiReferences = [
  {
    title: "Kementan: Inovasi Budidaya Kopi Wamena",
    url: "https://technologyindonesia.id/pertanian-dan-pangan/inovasi-pertanian/kementan-budayakan-budidaya-kopi-di-wamena/",
    domain: "technologyindonesia.id",
    desc: "Program Kementerian Pertanian dalam membudayakan teknik budidaya kopi modern di Wamena.",
    icon: "🚜",
  },
  {
    title: "Blog Buah Berdikari: Kenali Kopi Terbaik Papua",
    url: "https://blog.buahberdikari.com/kenali-yuk-kopi-wamena-kopi-terbaik-dari-papua/",
    domain: "blog.buahberdikari.com",
    desc: "Ulasan mendalam tentang karakteristik unik dan reputasi Kopi Wamena sebagai salah satu yang terbaik.",
    icon: "☕",
  },
  {
    title: "Santino Coffee: Sentuhan Tradisional Wamena",
    url: "https://santinocoffee.co.id/sedang-mencari-kopi-dengan-sentuhan-tradisional-yang-nikmat-coba-kopi-wamena/",
    domain: "santinocoffee.co.id",
    desc: "Menggali cita rasa tradisional dan kenikmatan khas dari biji kopi asli Wamena.",
    icon: "🏔️",
  },
];
</script>

<template>
  <main
    class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8 text-left mt-10"
  >
    <BackButton class="my-5" />
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
        Teknik Dasar Budidaya Kopi Wamena
      </h1>
      <p
        class="mt-2 text-[13px] leading-relaxed text-slate-600 dark:text-slate-300"
      >
        Modul ini membantu petani pemula memahami langkah sederhana menanam kopi
        di dataran tinggi Wamena agar lebih produktif dan berkelanjutan.
      </p>
    </header>

    <!-- Tab kecil tahap -->
    <nav
      class="mb-5 inline-flex gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-1 text-[11px] dark:border-slate-800 dark:bg-slate-900"
    >
      <button
        type="button"
        class="rounded-xl px-3 py-1.5 font-semibold transition-colors"
        :class="
          activeSection === 'persiapan'
            ? 'bg-emerald-500 text-white'
            : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
        "
        @click="activeSection = 'persiapan'"
      >
        Persiapan Lahan & Bibit
      </button>
      <button
        type="button"
        class="rounded-xl px-3 py-1.5 font-semibold transition-colors"
        :class="
          activeSection === 'tanam'
            ? 'bg-emerald-500 text-white'
            : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
        "
        @click="activeSection = 'tanam'"
      >
        Penanaman & Perawatan
      </button>
      <button
        type="button"
        class="rounded-xl px-3 py-1.5 font-semibold transition-colors"
        :class="
          activeSection === 'panen'
            ? 'bg-emerald-500 text-white'
            : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
        "
        @click="activeSection = 'panen'"
      >
        Panen & Pasca Panen
      </button>
    </nav>

    <!-- Langkah-langkah utama -->
    <section
      class="mb-5 rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/80"
    >
      <div class="flex items-center justify-between gap-2 mb-3">
        <h2
          class="text-xs font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400"
        >
          Langkah Praktis
        </h2>
        <p class="text-[11px] text-slate-400 dark:text-slate-500">
          Baca perlahan, lalu sesuaikan dengan kondisi kebunmu.
        </p>
      </div>

      <ol class="space-y-3">
        <li
          v-for="(step, idx) in steps[activeSection]"
          :key="idx"
          class="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-[13px] shadow-sm dark:border-slate-800 dark:bg-slate-900"
        >
          <div class="flex items-start gap-2">
            <span
              class="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-[11px] font-semibold text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-300"
            >
              {{ idx + 1 }}
            </span>
            <div>
              <p class="font-semibold text-slate-900 dark:text-slate-50">
                {{ step.title }}
              </p>
              <p
                class="mt-1 text-[12px] leading-relaxed text-slate-600 dark:text-slate-300"
              >
                {{ step.body }}
              </p>
            </div>
          </div>
        </li>
      </ol>
    </section>

    <!-- Tips lokal Wamena -->
    <section
      class="mb-5 rounded-3xl border border-emerald-100 bg-emerald-50 px-5 py-4 text-[13px] text-emerald-900 shadow-sm dark:border-emerald-500/40 dark:bg-emerald-950/30 dark:text-emerald-100"
    >
      <h2 class="text-xs font-bold uppercase tracking-[0.16em]">
        Tips Lokal untuk Petani Wamena
      </h2>
      <ul class="mt-2 list-disc pl-5 space-y-1">
        <li v-for="(tip, idx) in localTips" :key="idx">
          {{ tip }}
        </li>
      </ul>
    </section>

    <!-- Catatan catat & evaluasi -->
    <section
      class="rounded-3xl border border-slate-200 bg-white px-5 py-4 text-[12px] text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300"
    >
      <h2
        class="text-xs font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400"
      >
        Catatan Belajar & Evaluasi
      </h2>
      <ul class="mt-2 list-disc pl-5 space-y-1">
        <li>
          Catat jumlah pohon, tanggal tanam, dan jenis bibit yang digunakan.
        </li>
        <li>Amati perbedaan hasil panen jika ada perubahan cara perawatan.</li>
        <li>
          Diskusikan dengan petani lain di kampung untuk saling berbagi
          pengalaman dan cara yang paling cocok di wilayahmu.
        </li>
      </ul>
    </section>
    <section class="mx-auto mt-8 max-w-4xl px-4 pb-12 sm:px-6">
      <!-- Header Section -->
      <div
        class="mb-6 flex items-center gap-3 border-b border-amber-200 pb-4 dark:border-amber-900/30"
      >
        <h2 class="text-lg font-semibold text-amber-900 dark:text-amber-100">
          Referensi Budidaya Kopi Wamena
        </h2>
        <span
          class="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900/40 dark:text-amber-300"
        >
          {{ kopiReferences.length }} Sumber
        </span>
      </div>

      <!-- Grid Layout Kartu -->
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <a
          v-for="(ref, index) in kopiReferences"
          :key="index"
          :href="ref.url"
          target="_blank"
          rel="noopener noreferrer"
          class="group relative flex flex-col rounded-xl border border-amber-100 bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:border-amber-400/50 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:hover:border-amber-500/50"
        >
          <!-- Ikon & Domain -->
          <div class="mb-3 flex items-center justify-between">
            <div
              class="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-xl text-amber-700 dark:bg-amber-900/20 dark:text-amber-400"
            >
              {{ ref.icon }}
            </div>
            <span
              class="text-[10px] font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500"
            >
              {{ ref.domain }}
            </span>
          </div>

          <!-- Konten Teks -->
          <div class="flex-1">
            <h3
              class="mb-1 text-sm font-semibold text-slate-900 group-hover:text-amber-700 dark:text-slate-100 dark:group-hover:text-amber-400"
            >
              {{ ref.title }}
            </h3>
            <p
              class="text-xs leading-relaxed text-slate-500 line-clamp-2 dark:text-slate-400"
            >
              {{ ref.desc }}
            </p>
          </div>

          <!-- Link Action -->
          <div
            class="mt-4 flex items-center gap-1 text-xs font-medium text-amber-600 dark:text-amber-400"
          >
            Baca Artikel
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
            >
              <path
                fill-rule="evenodd"
                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </a>
      </div>
    </section>
    <ModuleDevelopmentNotice />
  </main>
</template>
