<template>
  <main
    class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden transition-colors duration-500 text-center px-4"
  >
    <div
      class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden"
    >
      <div
        class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-500/10 blur-[120px] dark:bg-emerald-600/5"
      ></div>
      <div
        class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-600/5"
      ></div>
    </div>

    <div class="flex flex-col items-center w-full max-w-4xl py-12 md:py-20">
      <div
        class="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-medium border shadow-sm transition-all bg-white/80 border-emerald-100 text-emerald-700 backdrop-blur-md dark:bg-slate-900/50 dark:border-slate-800 dark:text-emerald-400"
        data-aos="fade-down"
      >
        <span class="relative flex h-2 w-2">
          <span
            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
          ></span>
          <span
            class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"
          ></span>
        </span>
        Asisten Belajar Cerdas Smart Pustaka
      </div>

      <h1
        class="mt-8 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <span class="text-slate-900 dark:text-white"
          >Apa yang ingin kamu pelajari
        </span>
        <span
          class="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent dark:from-emerald-400 dark:to-cyan-400"
        >
          hari ini?
        </span>
      </h1>

      <p
        class="mt-6 text-base md:text-lg max-w-2xl leading-relaxed text-slate-600 dark:text-slate-400"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Tulis topik atau kelas impianmu. Kami rangkai modul belajar khusus
        dengan konteks lokal yang bisa kamu akses
        <span class="font-bold text-slate-800 dark:text-slate-200"
          >tanpa internet (offline).</span
        >
      </p>

      <div
        class="mt-10 w-full max-w-2xl rounded-3xl p-1.5 transition-all duration-300 bg-gradient-to-b from-slate-200 to-slate-100 shadow-2xl shadow-slate-200/50 dark:from-slate-700/50 dark:to-slate-800/50 dark:shadow-none"
        data-aos="zoom-in"
        data-aos-delay="300"
      >
        <div class="rounded-[22px] bg-white p-4 dark:bg-slate-900">
          <textarea
            class="w-full resize-none bg-transparent p-2 text-base md:text-lg outline-none text-slate-800 placeholder:text-slate-400 dark:text-slate-100 dark:placeholder:text-slate-500"
            rows="3"
            placeholder="Tulis di sini, misal: Cara bertani hidroponik di lahan terbatas..."
          ></textarea>

          <div
            class="mt-4 flex items-center justify-between border-t border-slate-50 pt-3 dark:border-slate-800"
          >
            <button
              class="group flex items-center gap-2 px-3 py-1.5 rounded-xl transition text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800"
              title="Tambah detail instruksi"
            >
              <div
                class="flex items-center justify-center rounded-lg size-7 bg-slate-100 dark:bg-slate-800 group-hover:scale-110 transition"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
              <span class="text-xs font-semibold hidden sm:inline"
                >Tambah Detail</span
              >
            </button>

            <button
              class="flex items-center gap-2 px-5 py-2 rounded-xl font-bold transition-all active:scale-95 bg-emerald-600 text-white shadow-lg shadow-emerald-200 hover:bg-emerald-700 hover:shadow-emerald-300/50 dark:bg-emerald-500 dark:text-slate-950 dark:shadow-none dark:hover:bg-emerald-400"
            >
              <span>Rangkai Modul</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m5 12 7-7 7 7" />
                <path d="M12 19V5" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        class="mt-12 w-full max-w-3xl"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <p
          class="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500"
        >
          Mungkin ide ini menarik:
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            v-for="(suggestion, index) in suggestions"
            :key="index"
            class="group text-left p-4 rounded-2xl border transition-all duration-300 bg-white border-slate-200 hover:border-emerald-400 hover:shadow-md dark:bg-slate-900/40 dark:border-slate-800 dark:hover:border-emerald-500/50"
          >
            <p
              class="text-sm text-slate-700 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors"
            >
              {{ suggestion }}
            </p>
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

const suggestions = [
  "Bagaimana membuat modul numerasi SD pesisir?",
  "Contoh materi coding dasar tanpa laptop mahal.",
  "Bahasa Inggris praktis untuk pedagang pasar.",
  "Ide belajar kelompok remaja secara offline.",
];

onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true,
    easing: "ease-out-back",
  });
});
</script>
