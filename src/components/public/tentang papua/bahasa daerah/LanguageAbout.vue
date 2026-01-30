<!-- src/components/public/tentang papua/bahasa/LanguageAboutSection.vue -->
<script setup lang="ts">
// AOS sudah terinstall, pastikan AOS.init() ada di App.vue atau main.ts
</script>

<template>
  <section
    class="relative overflow-hidden bg-slate-50 py-24 px-4 sm:px-6 lg:px-8 dark:bg-slate-950"
  >
    <div
      class="absolute inset-0 z-0 pointer-events-none opacity-40 dark:opacity-20"
      data-aos="zoom-in"
      data-aos-duration="2000"
    >
      <svg
        class="absolute -top-20 -right-20 w-[600px] h-[600px] text-emerald-200/50 dark:text-emerald-500/10"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.7,-31.4,87.1,-15.7,85.8,-0.7C84.6,14.3,78.6,28.6,70.1,41.4C61.6,54.1,50.6,65.3,37.3,72.4C24.1,79.5,8.6,82.5,-6.6,80.8C-21.8,79.1,-36.8,72.7,-49.6,63.1C-62.4,53.5,-73.1,40.7,-78.9,26.1C-84.7,11.5,-85.7,-4.9,-81.9,-20C-78.1,-35.1,-69.5,-48.9,-57.6,-56.3C-45.7,-63.7,-30.5,-64.7,-16.4,-70.5C-2.4,-76.3,10.6,-86.8,24.7,-88.6C38.8,-90.3,53.9,-83.4,44.7,-76.4Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>

    <div class="relative z-10 mx-auto max-w-6xl">
      <div class="grid gap-16 lg:grid-cols-2 lg:items-center">
        <!-- Kiri: narasi -->
        <div class="order-2 lg:order-1 space-y-8" data-aos="fade-right">
          <div
            class="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 dark:border-emerald-500/30 dark:bg-emerald-500/10 shadow-sm"
          >
            <span class="relative flex h-2 w-2">
              <span
                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
              ></span>
              <span
                class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"
              ></span>
            </span>
            <span
              class="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-800 dark:text-emerald-300"
            >
              Bahasa Ibu Papua
            </span>
          </div>

          <h2
            class="text-5xl font-black tracking-tighter text-slate-900 sm:text-6xl dark:text-white leading-tight"
          >
            Bahasa:
            <span
              class="relative inline-block text-emerald-600 dark:text-emerald-400"
            >
              Suara
              <svg
                class="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 338 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 9.5C54.5 3.5 178.5 -5 337 9.5"
                  stroke="#22C55E"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </span>
            Tanah Papua.
          </h2>

          <div
            class="space-y-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400"
          >
            <p>
              Di Papua, bahasa bukan hanya alat komunikasi. Bahasa adalah
              <span class="font-bold text-slate-900 dark:text-white"
                >memori kolektif</span
              >
              yang menyimpan pengetahuan alam, adat, dan cerita leluhur dari
              generasi ke generasi.
            </p>
            <p>
              Papua adalah wilayah dengan kekayaan bahasa daerah terbanyak di
              Indonesia, diperkirakan memiliki lebih dari 400 bahasa, dengan
              beberapa sumber menyebutkan angka sekitar 428 bahasa atau bahkan
              lebih, menjadikannya salah satu pusat keanekaragaman bahasa di
              dunia. Jumlah pastinya bervariasi karena wilayah yang luas dan
              jumlah penutur yang sedikit, serta klasifikasi linguistik yang
              beragam, tetapi mayoritas termasuk dalam rumpun bahasa Papua
              (non-Austronesia) dan Austronesia, dan bahasa Melayu dialek Papua
              (Beta Poco) juga umum digunakan sehari-hari.
            </p>
            <p class="text-sm">
              Melalui halaman ini, anak-anak dan guru bisa mulai mengenal salam,
              kosakata dasar, dan konteks penggunaan bahasa daerah di rumah,
              sekolah, dan upacara adat.
            </p>
          </div>

          <div
            class="flex gap-10 pt-4 border-t border-slate-200 dark:border-slate-800"
          >
            <div>
              <p class="text-2xl font-black text-slate-900 dark:text-white">
                1 Bahasa
              </p>
              <p class="text-[10px] uppercase tracking-widest text-slate-500">
                = 1 Dunia Cerita
              </p>
            </div>
            <div class="w-px h-10 bg-slate-200 dark:bg-slate-800"></div>
            <div>
              <p class="text-2xl font-black text-slate-900 dark:text-white">
                Interaktif
              </p>
              <p class="text-[10px] uppercase tracking-widest text-slate-500">
                Siap Dipakai Belajar
              </p>
            </div>
          </div>
        </div>

        <!-- Kanan: tiga kartu poin -->
        <div class="order-1 lg:order-2 grid gap-6">
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            class="group relative rounded-[2.5rem] border border-white bg-white/40 p-8 shadow-2xl shadow-slate-200/50 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 dark:border-slate-800 dark:bg-slate-900/40 dark:shadow-none"
          >
            <div class="flex items-start gap-6">
              <div
                class="flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-emerald-100 to-emerald-200 text-3xl shadow-inner group-hover:rotate-6 transition-transform dark:from-emerald-500/20 dark:to-emerald-500/10"
              >
                🌱
              </div>
              <div>
                <h3
                  class="text-lg font-black text-slate-900 dark:text-white uppercase tracking-wider"
                >
                  Pelestarian Akar
                </h3>
                <p
                  class="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400"
                >
                  Menjaga bahasa ibu agar tetap hidup di tengah arus bahasa
                  nasional dan global.
                </p>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            class="group relative rounded-[2.5rem] border border-white bg-white/40 p-8 shadow-2xl shadow-slate-200/50 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 dark:border-slate-800 dark:bg-slate-900/40 dark:shadow-none lg:ml-12"
          >
            <div class="flex items-start gap-6">
              <div
                class="flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-amber-100 to-amber-200 text-3xl shadow-inner group-hover:-rotate-6 transition-transform dark:from-amber-500/20 dark:to-amber-500/10"
              >
                🗣️
              </div>
              <div>
                <h3
                  class="text-lg font-black text-slate-900 dark:text-white uppercase tracking-wider"
                >
                  Latihan Lisan
                </h3>
                <p
                  class="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400"
                >
                  Mengajak anak berani mencoba menyapa, memperkenalkan diri, dan
                  bercerita dengan bahasa daerahnya.
                </p>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="500"
            class="group relative rounded-[2.5rem] border border-white bg-white/40 p-8 shadow-2xl shadow-slate-200/50 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 dark:border-slate-800 dark:bg-slate-900/40 dark:shadow-none"
          >
            <div class="flex items-start gap-6">
              <div
                class="flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-sky-100 to-sky-200 text-3xl shadow-inner group-hover:scale-110 transition-transform dark:from-sky-500/20 dark:to-sky-500/10"
              >
                🎓
              </div>
              <div>
                <h3
                  class="text-lg font-black text-slate-900 dark:text-white uppercase tracking-wider"
                >
                  Edukasi Digital
                </h3>
                <p
                  class="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400"
                >
                  Menggunakan platform ini sebagai bahan ajar tambahan di
                  sekolah maupun komunitas belajar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tag bawah -->
      <div
        class="mt-24 flex flex-wrap justify-center gap-3"
        data-aos="fade-up"
        data-aos-offset="0"
      >
        <div
          v-for="tag in [
            'Bahasa Ibu',
            'Kelas & Rumah',
            'Cerita Rakyat',
            'Digital Archive',
          ]"
          :key="tag"
          class="px-6 py-2 rounded-full border border-slate-200 bg-white text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 transition-all hover:border-emerald-500 hover:text-emerald-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-500"
        >
          {{ tag }}
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.backdrop-blur-xl {
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
}

h2 span svg {
  filter: drop-shadow(0 2px 4px rgba(34, 197, 94, 0.2));
}

[data-aos] {
  pointer-events: none;
}
[data-aos].aos-animate {
  pointer-events: auto;
}
</style>
