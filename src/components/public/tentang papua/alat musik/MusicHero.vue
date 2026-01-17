<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const subtitle =
  "Mengenal tifa, kecapi, fu, dan alat musik tradisional Papua lainnya yang mengiringi tarian, ritual, dan cerita dari generasi ke generasi.";

const elements = ref<HTMLElement[]>([]);
let observer: IntersectionObserver | null = null;

// function ref untuk kumpulkan elemen yang mau dianimasikan
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
          entry.target.classList.add("music-hero-enter");
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
    class="relative overflow-hidden bg-gradient-to-b from-emerald-100 via-amber-50 to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
  >
    <div
      :ref="setRef"
      class="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 pb-16 pt-16 opacity-0 translate-y-8 transition-all duration-800 ease-out sm:px-6 md:flex-row md:gap-12 md:pb-20 md:pt-20 lg:px-8"
    >
      <!-- Kolom kiri: teks -->
      <div class="w-full md:w-1/2 flex flex-col justify-center">
        <p
          class="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-700 shadow-sm dark:border-amber-400/30 dark:bg-slate-900/70 dark:text-amber-200"
        >
          <span class="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Tentang Papua · Alat Musik
        </p>

        <h1
          class="mt-5 text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl leading-tight dark:text-slate-50"
        >
          Alat musik
          <span
            class="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 bg-clip-text text-transparent"
          >
            tradisional Papua.
          </span>
        </h1>

        <p
          class="mt-4 text-base text-slate-700 sm:text-lg md:text-[17px] dark:text-slate-300"
        >
          {{ subtitle }}
        </p>

        <div class="mt-7 flex flex-wrap items-center gap-4">
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-xl bg-amber-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-amber-400/40 transition hover:-translate-y-0.5 hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-amber-50 dark:focus-visible:ring-offset-slate-950"
          >
            Jelajahi alat musik
          </button>

          <button
            type="button"
            class="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white/80 px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-400 hover:text-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-amber-50 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:text-amber-200 dark:focus-visible:ring-offset-slate-950"
          >
            Lihat favorit
          </button>
        </div>

        <dl
          class="mt-7 flex flex-wrap gap-5 text-sm text-slate-700 dark:text-slate-300"
        >
          <div class="flex items-start gap-3">
            <div
              class="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-200"
            >
              🥁
            </div>
            <div>
              <dt class="font-semibold">Tifa & teman-temannya</dt>
              <dd class="text-slate-500 dark:text-slate-400">
                Alat ritmis yang mengatur langkah tarian adat.
              </dd>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <div
              class="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-200"
            >
              🎶
            </div>
            <div>
              <dt class="font-semibold">Nada dari alam</dt>
              <dd class="text-slate-500 dark:text-slate-400">
                Bambu, kayu, dan kulit yang diolah jadi bunyi unik.
              </dd>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <div
              class="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sky-700 dark:bg-sky-500/20 dark:text-sky-200"
            >
              📖
            </div>
            <div>
              <dt class="font-semibold">Cerita di setiap denting</dt>
              <dd class="text-slate-500 dark:text-slate-400">
                Digunakan dalam ibadah, perang, hingga pesta sukacita.
              </dd>
            </div>
          </div>
        </dl>
      </div>

      <!-- Kolom kanan: gambar / ilustrasi -->
      <div
        :ref="setRef"
        class="w-full md:w-1/2 opacity-0 translate-y-8 md:translate-x-4 transition-all duration-800 ease-out delay-150"
      >
        <div
          class="relative mx-auto h-72 max-w-md overflow-hidden rounded-3xl bg-slate-900 shadow-[0_18px_50px_rgba(15,23,42,0.4)] sm:h-80 md:h-88 lg:h-96"
        >
          <img
            src="https://asset.kompas.com/crops/YWY-xVN9y8N47Y5SX1Nb5pMetZU=/0x97:800x630/1200x800/data/photo/2022/03/20/623715668f45f.jpg"
            alt="Orang memainkan tifa, alat musik tradisional Papua"
            class="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
          />

          <div
            class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent"
          ></div>

          <div
            class="absolute left-4 right-4 bottom-4 space-y-2 text-sm text-slate-50"
          >
            <div
              class="inline-flex items-center gap-2 rounded-full bg-slate-900/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em]"
            >
              <span
                class="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"
              />
              Cuplikan bunyi tifa
            </div>

            <p class="text-[13px] leading-snug text-slate-100/90">
              Dentuman tifa mengatur ritme tarian dan menguatkan suara nyanyian
              adat Papua.
            </p>
          </div>

          <!-- Ornamen kecil -->
          <div
            class="pointer-events-none absolute -top-6 -right-6 h-20 w-20 rounded-full border border-amber-300/70 bg-amber-200/30 blur-[1px]"
          ></div>
          <div
            class="pointer-events-none absolute -bottom-5 -left-5 h-16 w-16 rounded-3xl border border-sky-300/70 bg-sky-200/40"
          ></div>
        </div>
      </div>
    </div>

    <!-- Background dekoratif -->
    <div
      class="pointer-events-none absolute -top-10 left-[-10%] h-40 w-40 rounded-full bg-amber-300/30 blur-3xl dark:bg-amber-500/25"
    ></div>
    <div
      class="pointer-events-none absolute bottom-[-5rem] right-[-10%] h-40 w-40 rounded-full bg-sky-300/30 blur-3xl dark:bg-sky-500/25"
    ></div>
  </section>
</template>

<style scoped>
.music-hero-enter {
  opacity: 1 !important;
  transform: translateY(0) translateX(0) !important;
}
</style>
