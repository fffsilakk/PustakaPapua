<!-- src/views/edu/KopiWamenaBasicLearnView.vue -->
<script setup lang="ts">
import { ref } from "vue";

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
</script>

<template>
  <main
    class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8 text-left mt-10"
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
  </main>
</template>
