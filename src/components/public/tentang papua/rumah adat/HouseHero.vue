<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const subtitle =
  "Mengenal Honai, Kariwari, Rumsram, Jew, dan rumah adat Papua lainnya yang menyimpan cara hidup dan hikmat leluhur.";

const elements = ref<HTMLElement[]>([]);
let observer: IntersectionObserver | null = null;

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
          entry.target.classList.add("house-hero-enter");
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
    class="relative pb-8 overflow-hidden bg-gradient-to-b from-orange-50 via-amber-50 to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
  >
    <div
      :ref="setRef"
      class="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 pb-16 pt-16 opacity-0 translate-y-8 transition-all duration-800 ease-out sm:px-6 md:flex-row md:gap-12 md:pb-20 md:pt-20 lg:px-8"
    >
      <!-- Kiri: teks -->
      <div class="w-full md:w-1/2 flex flex-col justify-center">
        <p
          class="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-700 shadow-sm dark:border-amber-400/30 dark:bg-slate-900/70 dark:text-amber-200"
        >
          <span class="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Tentang Papua · Rumah Adat
        </p>

        <h1
          class="mt-5 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl dark:text-slate-50"
        >
          Rumah adat
          <span
            class="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 bg-clip-text text-transparent"
          >
            Papua
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
            Jelajahi rumah adat
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
              🏠
            </div>
            <div>
              <dt class="font-semibold">Bentuk yang unik</dt>
              <dd class="text-slate-500 dark:text-slate-400">
                Dari Honai bundar hingga Rumsram berbentuk perahu.
              </dd>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <div
              class="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-200"
            >
              🌿
            </div>
            <div>
              <dt class="font-semibold">Bahan dari alam</dt>
              <dd class="text-slate-500 dark:text-slate-400">
                Kayu, bambu, dan daun sagu dirangkai jadi tempat berlindung.
              </dd>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <div
              class="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sky-700 dark:bg-sky-500/20 dark:text-sky-200"
            >
              👨‍👩‍👧‍👦
            </div>
            <div>
              <dt class="font-semibold">Ruang belajar adat</dt>
              <dd class="text-slate-500 dark:text-slate-400">
                Menjadi tempat anak muda menerima nasihat dan cerita leluhur.
              </dd>
            </div>
          </div>
        </dl>
      </div>

      <!-- Kanan: gambar rumah adat -->
      <div
        :ref="setRef"
        class="w-full md:w-1/2 opacity-0 translate-y-8 md:translate-x-4 transition-all duration-800 ease-out delay-150"
      >
        <div
          class="relative mx-auto h-72 max-w-md overflow-hidden rounded-3xl bg-slate-900 shadow-[0_18px_50px_rgba(15,23,42,0.4)] sm:h-80 md:h-88 lg:h-96"
        >
          <img
            src="https://asset.kompas.com/crops/cHX-KKOR-GAI9xNykFny_4GKh68=/0x0:1800x1200/750x500/data/photo/2022/02/17/620db524eac87.jpg"
            alt="Ilustrasi rumah adat Papua"
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
              Contoh rumah Honai di pegunungan
            </div>

            <p class="text-[13px] leading-snug text-slate-100/90">
              Bentuk bundar dan atap tebal Honai membantu menahan dingin di
              Lembah Baliem.
            </p>
          </div>

          <!-- Ornamen -->
          <div
            class="pointer-events-none absolute -top-6 -right-6 h-20 w-20 rounded-full border border-amber-300/70 bg-amber-200/30 blur-[1px]"
          ></div>
          <div
            class="pointer-events-none absolute -bottom-5 -left-5 h-16 w-16 rounded-3xl border border-emerald-300/70 bg-emerald-200/40"
          ></div>
        </div>
      </div>
    </div>

    <!-- Background dekoratif -->
    <div
      class="pointer-events-none absolute -top-10 left-[-10%] h-40 w-40 rounded-full bg-amber-300/30 blur-3xl dark:bg-amber-500/25"
    ></div>
    <div
      class="pointer-events-none absolute bottom-[-5rem] right-[-10%] h-40 w-40 rounded-full bg-emerald-300/30 blur-3xl dark:bg-emerald-500/25"
    ></div>
  </section>
</template>

<style scoped>
.house-hero-enter {
  opacity: 1 !important;
  transform: translateY(0) translateX(0) !important;
}
</style>
