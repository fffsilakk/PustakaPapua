<!-- src/components/public/tentang papua/bahasa/LanguageHero.vue -->
<script setup lang="ts">
const subtitle =
  "Mengenal salam, kosakata, dan cerita singkat dari berbagai bahasa daerah di pegunungan, pesisir, dan kepulauan Papua.";
const handleScrollToList = () => {
  if (typeof document === "undefined") return; // jaga-jaga kalau nanti pakai SSR
  const el = document.getElementById("language-list");
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
};
</script>

<template>
  <section
    class="relative min-h-screen flex items-center overflow-hidden bg-[#fdfcfb] dark:bg-[#020617] py-16 md:py-24"
  >
    <div
      class="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-200/20 dark:bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"
      data-aos="fade-down"
      data-aos-duration="2000"
    ></div>

    <div class="container mx-auto max-w-6xl px-6 lg:px-8 relative z-10">
      <div
        class="flex flex-col md:flex-row items-center justify-between gap-12"
      >
        <!-- Kiri: teks -->
        <div class="w-full md:w-3/5 text-center md:text-left space-y-6">
          <div data-aos="fade-right" data-aos-delay="200">
            <span
              class="inline-flex items-center gap-2 rounded-full border border-emerald-200/50 bg-emerald-50/50 dark:border-emerald-500/20 dark:bg-emerald-500/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300"
            >
              <span class="flex h-2 w-2 rounded-full bg-rose-500"></span>
              Bahasa Daerah Papua
            </span>
          </div>

          <h1
            class="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tighter"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            Kata yang
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-sky-500"
              >Menjaga</span
            >
            <br />
            Jati Diri Papua.
          </h1>

          <p
            class="text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-lg mx-auto md:mx-0"
            data-aos="fade-right"
            data-aos-delay="600"
          >
            {{ subtitle }}
          </p>

          <div
            class="flex flex-wrap justify-center md:justify-start gap-4 pt-4"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <button
              class="px-8 py-3.5 bg-slate-900 dark:bg-emerald-600 text-white text-xs font-black uppercase tracking-widest rounded-2xl hover:scale-105 transition-all shadow-lg active:scale-95"
              @click="handleScrollToList"
            >
              Jelajahi Bahasa
            </button>
            <button
              class="px-8 py-3.5 border-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs font-black uppercase tracking-widest rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
            >
              Favorit ★
            </button>
          </div>
        </div>

        <!-- Kanan: kartu hero -->
        <div
          class="w-full md:w-2/5 flex justify-center md:justify-end"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <div
            class="relative w-52 h-[320px] sm:w-56 sm:h-[340px] lg:w-60 lg:h-[360px]"
          >
            <div
              class="absolute -left-10 top-10 z-20 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-4 rounded-2xl shadow-xl border border-white/20 hidden sm:block"
              data-aos="fade-right"
              data-aos-delay="1000"
            >
              <p class="text-[9px] font-black text-emerald-600 uppercase">
                Hidupkan
              </p>
              <p class="text-xs font-bold text-slate-800 dark:text-white">
                Bahasa Ibu Papua
              </p>
            </div>

            <div
              class="h-full w-full overflow-hidden rounded-[2.5rem] border-[8px] border-white dark:border-slate-800 shadow-2xl relative group"
            >
              <img
                src="https://jubitv.id/wp-content/uploads/2024/09/IMG-20240905-WA0068.jpg.webp"
                alt="Belajar bahasa daerah Papua"
                class="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              <div
                class="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white"
              >
                <p class="text-[10px] font-bold opacity-70 uppercase">
                  Contoh Sapaan
                </p>
                <p class="text-lg font-black">“Aroko…” – Bahasa Sentani</p>
              </div>
            </div>

            <div
              class="absolute -bottom-6 -right-6 -z-10 w-full h-full bg-emerald-500/10 rounded-[2.5rem] blur-xl"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
h1 {
  text-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
}

.dark h1 {
  text-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

:deep([data-aos]) {
  transition-timing-function: cubic-bezier(0.25, 1, 0.5, 1);
}
</style>
