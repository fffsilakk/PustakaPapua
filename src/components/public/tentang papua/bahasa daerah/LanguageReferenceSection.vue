<!-- src/components/public/tentang papua/bahasa/LanguageReferenceSection.vue -->
<script setup lang="ts">
import { ref } from "vue";

type LanguageReference = {
  id: number;
  title: string;
  description: string;
  sourceType: string;
  url: string;
};

const references = ref<LanguageReference[]>([
  // Contoh dummy – silakan ganti dengan link aslimu
  {
    id: 1,
    title: "Kamus Digital Bahasa Sentani",
    description:
      "Contoh proyek kamus digital untuk mendukung literasi bahasa daerah di sekitar Danau Sentani.",
    sourceType: "Artikel / Kamus Digital",
    url: "https://www.sil.org/system/files/reapdata/41/91/44/41914445368957952167301227090838167680/set_kamus_sentani_indonesia_inggris.pdf",
  },
  {
    id: 2,
    title: "Kamus Digital Bahasa Moy",
    description:
      "Contoh proyek kamus digital untuk mendukung literasi bahasa daerah di Moy.",
    sourceType: "Artikel / Kamus Digital",
    url: "https://kamusbahasamoy.web.id/",
  },
  {
    id: 3,
    title: "Belajar Bahasa Mee",
    description:
      "Contoh proyek kamus digital untuk mendukung literasi bahasa daerah Mee.",
    sourceType: "Artikel / Belajar",
    url: "https://id.wikipedia.org/wiki/Bahasa_Ekari",
  },
  {
    id: 4,
    title: "Panduan Muatan Lokal Bahasa Daerah",
    description:
      "Pedoman penggunaan bahasa ibu dalam pembelajaran kelas awal dan muatan lokal.",
    sourceType: "Dokumen Kebijakan / Pedoman",
    url: "https://contoh-link-pedoman-mulok.com",
  },
]);
</script>

<template>
  <section class="bg-white px-4 py-16 sm:px-6 lg:px-8 dark:bg-slate-950/90">
    <div class="mx-auto max-w-6xl space-y-8">
      <div class="text-center">
        <p
          class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.25em] text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400"
        >
          Link Referensi Bahasa Daerah
        </p>
        <h2
          class="mt-4 text-2xl font-black tracking-tight text-slate-900 dark:text-white sm:text-3xl"
        >
          Sumber Rujukan untuk Dipelajari Lebih Lanjut
        </h2>
        <p
          class="mt-2 text-sm text-slate-500 dark:text-slate-400 max-w-2xl mx-auto"
        >
          Kumpulan link yang dapat dibuka oleh guru, orang tua, dan siswa untuk
          mendalami materi bahasa daerah Papua.
        </p>
      </div>

      <div class="grid gap-4 md:grid-cols-2">
        <article
          v-for="item in references"
          :key="item.id"
          class="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 text-left shadow-sm dark:border-slate-800 dark:bg-slate-900/70"
        >
          <div class="flex items-start gap-3">
            <div
              class="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-[11px] font-black text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300"
            >
              {{ item.id }}
            </div>
            <div>
              <h3 class="text-sm font-semibold text-slate-900 dark:text-white">
                {{ item.title }}
              </h3>
              <p
                class="mt-0.5 text-[10px] uppercase tracking-widest text-emerald-600 dark:text-emerald-300"
              >
                {{ item.sourceType }}
              </p>
            </div>
          </div>

          <p class="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
            {{ item.description }}
          </p>

          <a
            :href="item.url"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-1 inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest text-emerald-600 hover:text-emerald-700 dark:text-emerald-400"
          >
            Buka Link
            <span class="inline-block translate-y-[1px]">↗</span>
          </a>
        </article>
      </div>

      <p
        class="mt-4 text-[11px] text-center text-slate-500 dark:text-slate-400"
      >
        Kamu dapat menambah, menghapus, atau mengubah link di bagian
        <span class="font-semibold">references</span> pada script di atas sesuai
        kebutuhan.
      </p>
    </div>
  </section>
</template>
