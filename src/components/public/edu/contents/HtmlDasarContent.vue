<!-- src/views/edu/HtmlDasarLearnView.vue -->
<script setup lang="ts">
import { ref } from "vue";

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
</script>

<template>
  <main
    class="max-w-5xl mx-auto px-4 mt-10 sm:px-6 lg:px-8 py-6 lg:py-8 text-left"
  >
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
  </main>
</template>
