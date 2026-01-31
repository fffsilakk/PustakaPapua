<!-- src/views/edu/HtmlDasarLearnView.vue -->
<script setup lang="ts">
import { ref } from "vue";
import BackButton from "../../../../services/BackButton.vue";

type TabKey = "struktur" | "teks" | "gambarLink";

const activeTab = ref<TabKey>("struktur");

const exampleHtml = {
  struktur: `<html>
  <head>
    <title>Halaman Pertamaku</title>
  </head>
  <body>
    <h1>Selamat datang di Papua!</h1>
    <p>Ini adalah halaman web pertamaku.</p>
  </body>
</html>`,
  teks: `<h1>Judul Besar di Halaman</h1>
<h2>Judul Bagian</h2>
<p>Ini adalah paragraf yang menjelaskan isi cerita.</p>`,
  gambarLink: `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFqOEc2eoOVzMTexwgrhLyoMT6BRUqMGw1mA&s" alt="Pemandangan gunung di Papua" />
<a href="https://example.com">Kunjungi situs favoritku</a>`,
};

// Data referensi kita simpan di array supaya rapi dan gampang ditambah
const references = [
  {
    title: "Petani Kode: Belajar HTML Dasar",
    url: "https://www.petanikode.com/html-dasar/",
    domain: "petanikode.com",
    desc: "Panduan belajar HTML dari nol untuk pemula dengan bahasa yang mudah dipahami.",
    icon: "🌱",
  },
  {
    title: "W3Schools: HTML Tutorial",
    url: "https://www.w3schools.com/html/",
    domain: "w3schools.com",
    desc: "Dokumentasi lengkap dan interaktif untuk referensi standar HTML internasional.",
    icon: "📚",
  },
  {
    title: "Dicoding: Panduan Lengkap HTML",
    url: "https://www.dicoding.com/blog/panduan-lengkap-belajar-coding-html-untuk-pemula/",
    domain: "dicoding.com",
    desc: "Artikel mendalam tentang dasar coding HTML dan tips karir developer.",
    icon: "🚀",
  },
];
</script>

<template>
  <main
    class="max-w-5xl mx-auto px-4 mt-10 sm:px-6 lg:px-8 py-6 lg:py-8 text-left"
  >
    <BackButton class="my-5" />
    <!-- Header -->
    <header
      class="mb-6 rounded-3xl border border-sky-200 bg-gradient-to-r from-sky-50 via-white to-emerald-50 px-5 py-4 shadow-sm dark:border-slate-700 dark:from-slate-900 dark:via-slate-900 dark:to-emerald-950/20"
    >
      <div class="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p
            class="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-600 dark:text-sky-300"
          >
            Modul Coding Dasar
          </p>
          <h1
            class="mt-1 text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50"
          >
            Belajar HTML Dasar untuk Anak Papua
          </h1>
          <p
            class="mt-2 text-[13px] leading-relaxed text-slate-600 dark:text-slate-300 max-w-xl"
          >
            Kamu akan mengenal struktur dasar halaman web: tag, judul, paragraf,
            gambar, dan link. Bayangkan kamu membuat papan informasi digital
            tentang kampungmu di Papua.
          </p>
        </div>
        <div
          class="rounded-2xl border border-sky-200 bg-white/70 px-4 py-2 text-[11px] text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200"
        >
          ⏱️ Perkiraan durasi:
          <span class="font-semibold text-sky-700 dark:text-sky-300">
            45 menit
          </span>
        </div>
      </div>
    </header>

    <!-- Tab navigasi -->
    <nav
      class="mb-5 inline-flex gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-1 text-[11px] dark:border-slate-800 dark:bg-slate-900"
    >
      <button
        type="button"
        class="rounded-xl px-3 py-1.5 font-semibold transition-colors"
        :class="
          activeTab === 'struktur'
            ? 'bg-sky-500 text-white'
            : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
        "
        @click="activeTab = 'struktur'"
      >
        Struktur HTML
      </button>
      <button
        type="button"
        class="rounded-xl px-3 py-1.5 font-semibold transition-colors"
        :class="
          activeTab === 'teks'
            ? 'bg-sky-500 text-white'
            : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
        "
        @click="activeTab = 'teks'"
      >
        Judul & Paragraf
      </button>
      <button
        type="button"
        class="rounded-xl px-3 py-1.5 font-semibold transition-colors"
        :class="
          activeTab === 'gambarLink'
            ? 'bg-sky-500 text-white'
            : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
        "
        @click="activeTab = 'gambarLink'"
      >
        Gambar & Link
      </button>
    </nav>

    <!-- Grid: kode vs hasil -->
    <section class="mb-5 grid gap-4 md:grid-cols-2">
      <!-- Panel kode -->
      <div
        class="rounded-3xl border border-slate-200 bg-slate-950 text-slate-100 shadow-sm overflow-hidden dark:border-slate-800"
      >
        <div
          class="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-4 py-2 text-[11px]"
        >
          <span class="font-semibold text-slate-200"> Contoh Kode HTML </span>
          <span class="text-slate-400">
            {{
              activeTab === "struktur"
                ? "Struktur dasar halaman"
                : activeTab === "teks"
                  ? "Judul & paragraf"
                  : "Gambar & link"
            }}
          </span>
        </div>
        <pre class="p-4 overflow-x-auto text-[12px] leading-relaxed">
<code>{{ exampleHtml[activeTab] }}</code>
        </pre>
      </div>

      <!-- Panel hasil -->
      <div
        class="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/80"
      >
        <h2
          class="text-xs font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400"
        >
          Jika kode ini dijalankan, tampilannya kira-kira seperti ini:
        </h2>

        <div
          class="mt-3 rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-[13px] text-slate-800 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
        >
          <!-- simulasi tampilan, bukan rendering asli -->
          <template v-if="activeTab === 'struktur'">
            <h1 class="text-xl font-bold mb-1">Selamat datang di Papua!</h1>
            <p class="text-[13px]">Ini adalah halaman web pertamaku.</p>
          </template>

          <template v-else-if="activeTab === 'teks'">
            <h1 class="text-2xl font-extrabold mb-1">Judul Besar di Halaman</h1>
            <h2 class="text-lg font-semibold mb-1">Judul Bagian</h2>
            <p class="text-[13px]">
              Ini adalah paragraf yang menjelaskan isi cerita.
            </p>
          </template>

          <template v-else>
            <div class="mb-2">
              <div
                class="mb-2 h-32 w-full overflow-hidden rounded-xl bg-slate-300 flex items-center justify-center text-[12px] text-slate-600"
              >
                Gambar: gunung-papua.jpg
              </div>
              <a
                href="#"
                class="text-sky-600 underline hover:text-sky-700 text-[13px]"
              >
                Kunjungi situs favoritku
              </a>
            </div>
          </template>
        </div>

        <p class="mt-3 text-[12px] text-slate-600 dark:text-slate-400">
          Perhatikan: bagian kiri adalah kode yang ditulis, bagian kanan adalah
          gambaran tampilan yang muncul di browser.
        </p>
      </div>
    </section>

    <!-- Penjelasan konsep -->
    <section
      class="mb-5 rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-[13px] text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200"
    >
      <h2
        class="text-xs font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400"
      >
        Konsep Penting yang Perlu Diingat
      </h2>
      <ul class="mt-2 list-disc pl-5 space-y-1">
        <li>
          HTML adalah bahasa untuk membuat kerangka halaman web, seperti rangka
          rumah.
        </li>
        <li>
          Tag <code>&lt;h1&gt;</code> dipakai untuk judul utama, sedangkan
          <code>&lt;p&gt;</code> dipakai untuk paragraf.
        </li>
        <li>
          Tag <code>&lt;img&gt;</code> menampilkan gambar, dan
          <code>&lt;a&gt;</code> membuat link ke halaman lain.
        </li>
      </ul>
    </section>

    <!-- Tugas kecil -->
    <section
      class="rounded-3xl border border-emerald-100 bg-emerald-50 px-5 py-4 text-[13px] text-emerald-900 shadow-sm dark:border-emerald-500/40 dark:bg-emerald-950/30 dark:text-emerald-100"
    >
      <h2 class="text-xs font-bold uppercase tracking-[0.16em]">
        Tugas Kecil untuk Kamu
      </h2>
      <ol class="mt-2 list-decimal pl-5 space-y-1">
        <li>
          Ganti teks judul menjadi nama kampung atau kota tempat tinggalmu.
        </li>
        <li>
          Tulis satu paragraf yang menceritakan hal menarik tentang Papua.
        </li>
        <li>
          Coba bayangkan gambar apa yang cocok ditampilkan di halaman webmu,
          misalnya gunung, danau, atau pasar tradisional.
        </li>
      </ol>
    </section>

    <!-- <section>
      <h2>Referensi</h2>
      https://www.petanikode.com/html-dasar/
      https://www.w3schools.com/html/
      https://www.dicoding.com/blog/panduan-lengkap-belajar-coding-html-untuk-pemula/
    </section> -->
    <section class="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <!-- Header Section -->
      <div
        class="mb-6 flex items-center gap-3 border-b border-slate-200 pb-4 dark:border-slate-700"
      >
        <h2 class="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Referensi & Sumber Belajar
        </h2>
        <span
          class="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400"
        >
          {{ references.length }} Tautan
        </span>
      </div>

      <!-- Grid Layout untuk Kartu Referensi -->
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <a
          v-for="(ref, index) in references"
          :key="index"
          :href="ref.url"
          target="_blank"
          rel="noopener noreferrer"
          class="group relative flex flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:border-emerald-400/50 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:hover:border-emerald-500/50"
        >
          <!-- Header Kartu: Icon & Domain -->
          <div class="mb-3 flex items-center justify-between">
            <div
              class="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-xl dark:bg-emerald-900/20"
            >
              {{ ref.icon }}
            </div>
            <span
              class="text-[10px] font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500"
            >
              {{ ref.domain }}
            </span>
          </div>

          <!-- Judul & Deskripsi -->
          <div class="flex-1">
            <h3
              class="mb-1 text-sm font-semibold text-slate-900 group-hover:text-emerald-600 dark:text-slate-100 dark:group-hover:text-emerald-400"
            >
              {{ ref.title }}
            </h3>
            <p
              class="text-xs leading-relaxed text-slate-500 line-clamp-2 dark:text-slate-400"
            >
              {{ ref.desc }}
            </p>
          </div>

          <!-- Tombol Link Eksternal -->
          <div
            class="mt-4 flex items-center gap-1 text-xs font-medium text-emerald-600 dark:text-emerald-400"
          >
            Kunjungi Website
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
