<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const subtitle =
  "Mengenal gerak, makna, dan cerita di balik setiap tarian adat dari pegunungan, pesisir, hingga kepulauan Papua.";

const elements = ref<HTMLElement[]>([]);
let observer: IntersectionObserver | null = null;

// VNodeRef: (ref, refs) => void
const setRef = (el: Element | null | any, _refs?: Record<string, unknown>) => {
  if (el instanceof HTMLElement) {
    elements.value.push(el);
  }
};

onMounted(() => {
  if (typeof window === "undefined" || !("IntersectionObserver" in window))
    return;

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("dance-hero-enter");
          observer?.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  elements.value.forEach((el) => observer?.observe(el));
});

onUnmounted(() => {
  observer?.disconnect();
});
</script>

<template>
  <section
    class="relative overflow-hidden bg-gradient-to-b from-orange-50 via-amber-50 to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
  >
    <div
      :ref="setRef"
      class="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 pb-16 pt-16 sm:px-6 md:flex-row md:gap-12 md:pb-20 md:pt-20 lg:px-8 opacity-0 translate-y-8 transition-all duration-800 ease-out"
    >
      <!-- KIRI -->
      <div class="w-full md:w-1/2 flex flex-col justify-center">
        <p
          class="inline-flex items-center gap-2 rounded-full border border-amber-200 dark:border-amber-400/30 bg-white/80 dark:bg-slate-900/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-700 dark:text-amber-300 shadow-sm"
        >
          <span class="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Tentang Papua · Tarian Adat
        </p>

        <h1
          class="mt-5 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl md:text-5xl leading-tight"
        >
          Gerak yang
          <span
            class="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 bg-clip-text text-transparent"
          >
            bercerita
          </span>
          tentang tanah Papua.
        </h1>

        <p
          class="mt-4 text-base sm:text-lg md:text-[17px] text-slate-700 dark:text-slate-300"
        >
          {{ subtitle }}
        </p>

        <div class="mt-7 flex flex-wrap items-center gap-4">
          <button
            class="rounded-xl bg-amber-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-amber-400/40 transition hover:-translate-y-0.5 hover:bg-amber-400"
          >
            Jelajahi tarian
          </button>

          <button
            class="rounded-xl border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/70 px-4 py-2.5 text-sm font-semibold text-slate-800 dark:text-slate-200 transition hover:-translate-y-0.5 hover:text-amber-600"
          >
            Lihat tarian favorit
          </button>
        </div>
      </div>

      <!-- KANAN -->
      <div
        :ref="setRef"
        class="w-full md:w-1/2 opacity-0 translate-y-8 md:translate-x-4 transition-all duration-800 ease-out delay-150"
      >
        <div
          class="relative mx-auto h-72 max-w-md overflow-hidden rounded-3xl bg-slate-900 shadow-[0_18px_50px_rgba(15,23,42,0.4)] sm:h-80 md:h-88 lg:h-96"
        >
          <img
            src="https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,f_auto,q_auto:best,w_640/v1634025439/01jmk329fe0c8j5f4c15zfvbx5.jpg"
            alt="Ilustrasi tarian adat Papua"
            class="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />

          <div
            class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.dance-hero-enter {
  opacity: 1 !important;
  transform: translateY(0) translateX(0) !important;
}
</style>
