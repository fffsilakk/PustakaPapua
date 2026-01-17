<script setup lang="ts">
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true,
    easing: "ease-out-cubic",
  });
});

const tags = [
  { label: "🔥 Syukuran", color: "hover:bg-orange-100 hover:text-orange-600" },
  { label: "🪵 Leluhur", color: "hover:bg-amber-100 hover:text-amber-600" },
  { label: "🎭 Identitas", color: "hover:bg-purple-100 hover:text-purple-600" },
];
</script>

<template>
  <section class="relative overflow-hidden px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
    <div
      class="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-emerald-100/50 blur-3xl dark:bg-emerald-900/20"
    ></div>
    <div
      class="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl dark:bg-blue-900/20"
    ></div>

    <div
      data-aos="fade-up"
      class="group relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-slate-200/60 bg-white/70 backdrop-blur-md transition-all duration-500 hover:border-emerald-200 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900/80"
    >
      <div
        class="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      ></div>

      <div class="relative px-8 py-12 sm:px-16 sm:py-20">
        <div
          class="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between"
        >
          <div class="max-w-2xl space-y-8">
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              class="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400"
            >
              <span class="relative flex h-2 w-2">
                <span
                  class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"
                ></span>
                <span
                  class="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"
                ></span>
              </span>
              Warisan Budaya
            </div>

            <div class="space-y-4">
              <h1
                data-aos="fade-up"
                data-aos-delay="300"
                class="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl"
              >
                Upacara Adat
                <span
                  class="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent"
                  >Papua</span
                >
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="400"
                class="text-lg leading-relaxed text-slate-600 dark:text-slate-400"
              >
                Jelajahi kedalaman makna di balik ritual
                <span
                  class="relative inline-block font-semibold text-slate-900 dark:text-white"
                >
                  Bakar Batu
                  <span
                    class="absolute bottom-0 left-0 h-[2px] w-full bg-emerald-200 dark:bg-emerald-800"
                  ></span>
                </span>
                hingga festival
                <span
                  class="relative inline-block font-semibold text-slate-900 dark:text-white"
                >
                  Mbis </span
                >. Rayakan harmoni syukuran dan ikatan persaudaraan yang abadi.
              </p>
            </div>

            <div
              class="flex flex-wrap gap-3"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <span
                v-for="(tag, index) in tags"
                :key="index"
                :class="tag.color"
                class="cursor-default rounded-xl border border-slate-100 bg-slate-50 px-5 py-2 text-sm font-medium text-slate-600 transition-all duration-300 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-400"
              >
                {{ tag.label }}
              </span>
            </div>
          </div>

          <div
            data-aos="zoom-in-left"
            data-aos-delay="600"
            class="flex flex-col gap-6 lg:w-80"
          >
            <div
              class="relative overflow-hidden rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50/50 to-white p-6 transition-transform duration-500 hover:scale-[1.02] dark:border-emerald-500/20 dark:from-slate-800 dark:to-slate-900"
            >
              <div class="flex items-center gap-4 mb-4">
                <div
                  class="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm dark:bg-slate-800 dark:shadow-emerald-900/20"
                >
                  🪶
                </div>
                <h4
                  class="text-sm font-black uppercase tracking-widest text-emerald-800 dark:text-emerald-400"
                >
                  Ritual Sakral
                </h4>
              </div>
              <p
                class="text-sm leading-relaxed text-slate-500 dark:text-slate-400"
              >
                Mengenal lebih dekat tradisi leluhur melalui dokumentasi visual
                otentik dan narasi mendalam.
              </p>
            </div>

            <button
              class="group/btn relative flex items-center justify-center gap-3 overflow-hidden rounded-2xl bg-slate-900 py-4 text-sm font-bold text-white transition-all hover:bg-slate-800 hover:shadow-xl dark:bg-emerald-600 dark:hover:bg-emerald-500"
            >
              <span class="z-10">Lihat Selengkapnya</span>
              <svg
                class="z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
              <div
                class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500 group-hover/btn:translate-x-full"
              ></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Tambahan untuk smooth scroll behavior jika diperlukan */
section {
  font-family: "Plus Jakarta Sans", sans-serif; /* Opsional: Menggunakan font modern */
}
</style>
