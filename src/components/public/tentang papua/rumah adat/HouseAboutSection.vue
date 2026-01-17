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
          entry.target.classList.add("house-visible");
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
    class="relative overflow-hidden bg-white py-20 px-4 opacity-0 translate-y-10 transition-all duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-6 lg:px-8 dark:bg-slate-950"
  >
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        class="absolute -top-24 -right-10 h-80 w-80 rounded-full bg-amber-100/40 blur-[100px] dark:bg-amber-900/20"
      />
      <div
        class="absolute bottom-0 -left-10 h-80 w-80 rounded-full bg-sky-100/40 blur-[100px] dark:bg-sky-900/20"
      />
    </div>

    <div class="relative z-10 mx-auto max-w-5xl">
      <div
        class="rounded-[2.5rem] border border-slate-100 bg-white/70 p-8 shadow-2xl shadow-slate-200/50 backdrop-blur-xl md:p-12 dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-none"
      >
        <div class="mb-12 flex flex-col items-center text-center">
          <div
            class="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 mb-6 dark:border-amber-500/30 dark:bg-amber-500/10"
          >
            <span class="flex h-2 w-2">
              <span
                class="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-amber-400 opacity-75"
              ></span>
              <span
                class="relative inline-flex rounded-full h-2 w-2 bg-amber-500"
              ></span>
            </span>
            <span
              class="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-800 dark:text-amber-200"
            >
              Arsitektur Tradisional
            </span>
          </div>

          <h2
            class="max-w-2xl text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white leading-tight"
          >
            Rumah Adat Papua:
            <span class="text-amber-600 dark:text-amber-400"
              >Filosofi Kehidupan dalam Ruang</span
            >
          </h2>
        </div>

        <div class="grid gap-12 lg:grid-cols-5">
          <div
            class="lg:col-span-3 space-y-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400"
          >
            <p>
              Arsitektur asli Papua adalah bentuk adaptasi genius terhadap
              lingkungan.
              <span class="text-slate-900 font-semibold dark:text-slate-200"
                >Honai</span
              >
              yang bundar tanpa jendela dirancang untuk memerangkap panas di
              pegunungan dingin, sementara rumah panggung pesisir dibangun untuk
              harmoni dengan pasang surut air laut.
            </p>
            <p>
              Di balik dinding kayu dan atap rumbia, terdapat "sekolah" tak
              terlihat. Tempat di mana nasihat leluhur diturunkan dan nilai
              kebersamaan dijunjung tinggi. Memahami rumah adat adalah cara kita
              menghargai bagaimana leluhur mengatur ruang hidup yang efisien
              namun sarat makna spiritual.
            </p>

            <div class="flex gap-2 pt-4">
              <div class="h-1 w-12 rounded-full bg-amber-500"></div>
              <div
                class="h-1 w-4 rounded-full bg-amber-200 dark:bg-slate-700"
              ></div>
            </div>
          </div>

          <div class="lg:col-span-2 space-y-4">
            <div
              class="group flex items-start gap-4 rounded-2xl border border-slate-50 bg-white p-4 transition-all hover:border-amber-200 hover:shadow-lg hover:shadow-amber-500/5 dark:border-slate-800 dark:bg-slate-800/50"
            >
              <div
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-xl transition-transform group-hover:scale-110 dark:bg-amber-500/20"
              >
                🏠
              </div>
              <div>
                <h3 class="font-bold text-slate-900 dark:text-white">
                  Adaptasi Alam
                </h3>
                <p class="text-sm text-slate-500 dark:text-slate-400">
                  Desain yang menyesuaikan suhu ekstrem dan kontur geografi
                  Papua.
                </p>
              </div>
            </div>

            <div
              class="group flex items-start gap-4 rounded-2xl border border-slate-50 bg-white p-4 transition-all hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-500/5 dark:border-slate-800 dark:bg-slate-800/50"
            >
              <div
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-xl transition-transform group-hover:scale-110 dark:bg-emerald-500/20"
              >
                🤝
              </div>
              <div>
                <h3 class="font-bold text-slate-900 dark:text-white">
                  Pusat Budaya
                </h3>
                <p class="text-sm text-slate-500 dark:text-slate-400">
                  Ruang sakral untuk musyawarah adat dan pesta kebersamaan.
                </p>
              </div>
            </div>

            <div
              class="group flex items-start gap-4 rounded-2xl border border-slate-50 bg-white p-4 transition-all hover:border-sky-200 hover:shadow-lg hover:shadow-sky-500/5 dark:border-slate-800 dark:bg-slate-800/50"
            >
              <div
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-xl transition-transform group-hover:scale-110 dark:bg-sky-500/20"
              >
                🌿
              </div>
              <div>
                <h3 class="font-bold text-slate-900 dark:text-white">
                  Material Alami
                </h3>
                <p class="text-sm text-slate-500 dark:text-slate-400">
                  Konstruksi organik tanpa paku, menjaga keseimbangan ekosistem.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          class="mt-12 flex flex-wrap items-center justify-center gap-6 border-t border-slate-100 pt-8 dark:border-slate-800"
        >
          <div
            class="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400"
          >
            <span class="h-2 w-2 rounded-full bg-emerald-500"></span>
            Teknik ikat tradisional
          </div>
          <div
            class="hidden h-4 w-px bg-slate-200 md:block dark:bg-slate-700"
          ></div>
          <div
            class="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400"
          >
            <span class="h-2 w-2 rounded-full bg-amber-500"></span>
            Pelestarian Arsitektur Nusantara
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.house-visible {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

/* Transisi halus untuk elemen hover */
.group {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
