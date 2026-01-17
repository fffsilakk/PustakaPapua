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
          entry.target.classList.add("section-visible");
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
    class="relative overflow-hidden bg-slate-50 px-4 py-20 opacity-0 translate-y-12 transition-all duration-[1000ms] ease-[cubic-bezier(0.23,1,0.32,1)] sm:px-6 lg:px-8 dark:bg-slate-950"
  >
    <div class="absolute inset-0 z-0">
      <div
        class="absolute -top-24 -left-10 h-[400px] w-[400px] rounded-full bg-emerald-100/50 blur-[100px] dark:bg-emerald-900/20"
      />
      <div
        class="absolute top-1/2 -right-20 h-[300px] w-[300px] rounded-full bg-sky-100/50 blur-[100px] dark:bg-sky-900/20"
      />
    </div>

    <div class="relative z-10 mx-auto max-w-6xl">
      <div class="grid gap-12 lg:grid-cols-12 lg:items-center">
        <div class="lg:col-span-7">
          <div class="space-y-6">
            <div
              class="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/50 px-4 py-1.5 backdrop-blur-md dark:border-emerald-500/30 dark:bg-emerald-500/10"
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
                class="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300"
              >
                Explore the Unexplored
              </span>
            </div>

            <h2
              class="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white"
            >
              Mengapa Wisata Papua
              <span class="text-emerald-600 dark:text-emerald-400"
                >Begitu Istimewa?</span
              >
            </h2>

            <div
              class="max-w-2xl space-y-4 text-lg leading-relaxed text-slate-600 dark:text-slate-400"
            >
              <p>
                Papua adalah mahakarya alam yang belum terjamah sepenuhnya.
                Kombinasi langka antara
                <span class="font-semibold text-slate-800 dark:text-slate-200"
                  >biodiversitas tertinggi di dunia</span
                >
                dan kearifan lokal yang telah terjaga selama ribuan tahun.
              </p>
              <p>
                Bukan sekadar perjalanan fisik, mengunjungi Papua adalah
                perjalanan spiritual untuk belajar bagaimana manusia dan alam
                dapat hidup dalam harmoni yang sempurna.
              </p>
            </div>

            <div class="flex flex-wrap gap-8 pt-4">
              <div>
                <p class="text-3xl font-bold text-slate-900 dark:text-white">
                  250+
                </p>
                <p class="text-xs uppercase tracking-widest text-slate-500">
                  Suku Bangsa
                </p>
              </div>
              <div class="h-12 w-px bg-slate-200 dark:bg-slate-800" />
              <div>
                <p class="text-3xl font-bold text-slate-900 dark:text-white">
                  75%
                </p>
                <p class="text-xs uppercase tracking-widest text-slate-500">
                  Hutan Lindung
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-5 space-y-4">
          <div
            class="group relative overflow-hidden rounded-3xl border border-white bg-white/60 p-6 shadow-xl shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-emerald-200/40 dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-none dark:hover:border-emerald-500/50"
          >
            <div class="flex items-start gap-4">
              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-100 text-2xl transition-transform group-hover:scale-110 dark:bg-sky-500/20"
              >
                🌊
              </div>
              <div>
                <h3 class="text-base font-bold text-slate-900 dark:text-white">
                  Keindahan Alam Beragam
                </h3>
                <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  Dari terumbu karang tropis hingga puncak gunung bersalju
                  abadi.
                </p>
              </div>
            </div>
          </div>

          <div
            class="group relative overflow-hidden rounded-3xl border border-white bg-white/60 p-6 shadow-xl shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-emerald-200/40 dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-none dark:hover:border-emerald-500/50"
          >
            <div class="flex items-start gap-4">
              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-2xl transition-transform group-hover:scale-110 dark:bg-emerald-500/20"
              >
                🧭
              </div>
              <div>
                <h3 class="text-base font-bold text-slate-900 dark:text-white">
                  Petualangan Autentik
                </h3>
                <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  Setiap jengkal tanah menyimpan cerita kearifan lokal dan
                  dialog dengan alam.
                </p>
              </div>
            </div>
          </div>

          <div
            class="group relative overflow-hidden rounded-3xl border border-white bg-white/60 p-6 shadow-xl shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-emerald-200/40 dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-none dark:hover:border-emerald-500/50"
          >
            <div class="flex items-start gap-4">
              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-2xl transition-transform group-hover:scale-110 dark:bg-amber-500/20"
              >
                🤝
              </div>
              <div>
                <h3 class="text-base font-bold text-slate-900 dark:text-white">
                  Pemberdayaan Lokal
                </h3>
                <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  Dukungan langsung bagi kesejahteraan masyarakat di
                  kampung-kampung adat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-slate-200 pt-8 dark:border-slate-800"
      >
        <p
          class="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400"
        >
          <span class="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Berpartisipasi dalam menjaga kelestarian bumi Papua.
        </p>
        <div class="flex items-center gap-4">
          <div
            class="h-1 w-24 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden"
          >
            <div
              class="h-full w-2/3 bg-emerald-500 rounded-full animate-pulse"
            ></div>
          </div>
          <span
            class="text-xs font-bold uppercase tracking-widest text-slate-400"
            >Sustainability Level: High</span
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-visible {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

/* Glassmorphism subtle effect */
.dark .bg-white\/60 {
  background-color: rgba(15, 23, 42, 0.7);
}
</style>
