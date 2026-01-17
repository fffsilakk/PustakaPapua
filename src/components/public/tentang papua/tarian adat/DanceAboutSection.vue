<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const sectionRef = ref<HTMLElement | null>(null);
let observer: IntersectionObserver | null = null;

onMounted(() => {
  if (typeof window === "undefined" || !("IntersectionObserver" in window))
    return;

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("dance-visible");
          observer?.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  if (sectionRef.value) observer.observe(sectionRef.value);
});

onUnmounted(() => {
  observer?.disconnect();
});
</script>

<template>
  <section
    ref="sectionRef"
    class="relative overflow-hidden bg-slate-50 py-24 px-4 opacity-0 translate-y-12 transition-all duration-[1200ms] ease-[cubic-bezier(0.2,1,0.3,1)] sm:px-6 lg:px-8 dark:bg-slate-950"
  >
    <div
      class="absolute inset-0 z-0 pointer-events-none opacity-40 dark:opacity-20"
    >
      <svg
        class="absolute -top-20 -right-20 w-[600px] h-[600px] text-amber-200/50 dark:text-amber-500/10"
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
        <div class="order-2 lg:order-1 space-y-8">
          <div
            class="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 dark:border-sky-500/30 dark:bg-sky-500/10"
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
              class="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-800 dark:text-sky-300"
              >Manifestasi Energi</span
            >
          </div>

          <h2
            class="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl dark:text-white leading-[1.1]"
          >
            Tarian: Bahasa
            <span
              class="text-amber-600 dark:text-amber-500 underline decoration-sky-500/30 underline-offset-8"
              >Tubuh & Jiwa</span
            >
            Papua.
          </h2>

          <div
            class="space-y-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400"
          >
            <p>
              Di Papua, tarian bukan sekadar estetika panggung. Ia adalah
              **arsip hidup** yang menyimpan narasi sejarah suku, rasa syukur
              atas hasil bumi, hingga dialog spiritual dengan alam semesta.
            </p>
            <p>
              Setiap entakan kaki di atas tanah adalah bentuk penghormatan
              kepada leluhur. Dengan merawat tarian ini, generasi muda sedang
              menjaga api identitas agar tetap menyala di tengah arus
              modernisasi.
            </p>
          </div>

          <div class="flex gap-10 pt-4">
            <div class="space-y-1">
              <p class="text-sm font-bold text-slate-900 dark:text-white">
                Ekspresif
              </p>
              <p class="text-xs text-slate-500">Gerakan Penuh Energi</p>
            </div>
            <div class="w-px h-10 bg-slate-200 dark:bg-slate-800"></div>
            <div class="space-y-1">
              <p class="text-sm font-bold text-slate-900 dark:text-white">
                Simbolis
              </p>
              <p class="text-xs text-slate-500">Penuh Makna Filosofis</p>
            </div>
          </div>
        </div>

        <div class="order-1 lg:order-2 grid gap-6">
          <div
            class="group relative rounded-3xl border border-white bg-white/50 p-6 shadow-xl shadow-slate-200/50 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 dark:border-slate-800 dark:bg-slate-900/50 dark:shadow-none"
          >
            <div class="flex items-center gap-5">
              <div
                class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-2xl transition-transform group-hover:scale-110 dark:bg-amber-500/20"
              >
                🌱
              </div>
              <div>
                <h3
                  class="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider"
                >
                  Pelestarian Akar
                </h3>
                <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  Menjaga warisan agar tetap relevan dan tidak lekang oleh
                  zaman.
                </p>
              </div>
            </div>
          </div>

          <div
            class="group relative rounded-3xl border border-white bg-white/50 p-6 shadow-xl shadow-slate-200/50 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 dark:border-slate-800 dark:bg-slate-900/50 dark:shadow-none lg:ml-8"
          >
            <div class="flex items-center gap-5">
              <div
                class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-2xl transition-transform group-hover:scale-110 dark:bg-emerald-500/20"
              >
                🤝
              </div>
              <div>
                <h3
                  class="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider"
                >
                  Kekuatan Komunal
                </h3>
                <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  Tarian sebagai perekat sosial yang menyatukan berbagai lapisan
                  masyarakat.
                </p>
              </div>
            </div>
          </div>

          <div
            class="group relative rounded-3xl border border-white bg-white/50 p-6 shadow-xl shadow-slate-200/50 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 dark:border-slate-800 dark:bg-slate-900/50 dark:shadow-none"
          >
            <div class="flex items-center gap-5">
              <div
                class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sky-100 text-2xl transition-transform group-hover:scale-110 dark:bg-sky-500/20"
              >
                🎓
              </div>
              <div>
                <h3
                  class="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider"
                >
                  Edukasi Tanpa Batas
                </h3>
                <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  Menggunakan platform digital untuk mendistribusikan ilmu tari
                  ke seluruh pelosok.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-20 flex flex-wrap justify-center gap-4">
        <div
          v-for="tag in [
            'Pesta Adat',
            'Upacara Sakral',
            'Edukasi Sekolah',
            'Digital Archive',
          ]"
          :key="tag"
          class="px-4 py-1.5 rounded-full border border-slate-200 text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:border-slate-800 dark:text-slate-400"
        >
          {{ tag }}
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.dance-visible {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

/* Glassmorphism subtle effect for light mode */
.bg-white\/50 {
  background-color: rgba(255, 255, 255, 0.6);
}
</style>
