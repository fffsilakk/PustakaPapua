<script setup lang="ts">
import {
  BookOpen,
  Download,
  Wifi,
  WifiOff,
  CheckCircle2,
  Smartphone,
} from "lucide-vue-next";

const steps = [
  {
    title: "Pilih Modul",
    desc: "Jelajahi materi yang tersedia dan pilih topik yang paling dibutuhkan siswa.",
    icon: BookOpen,
    pill: "Langkah awal",
  },
  {
    title: "Unduh Saat Online",
    desc: "Saat berada di kota atau area bersinyal, simpan modul agar bisa dibuka kapan saja.",
    icon: Download,
    pill: "Butuh internet",
  },
  {
    title: "Belajar Tanpa Sinyal",
    desc: "Buka kembali modul yang sudah tersimpan, bahkan saat berada di daerah tanpa jaringan.",
    icon: WifiOff,
    pill: "Tanpa internet",
  },
];
</script>

<template>
  <div class="space-y-8 py-4">
    <!-- HEADER SECTION: soft card -->
    <div
      class="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-slate-50/90 p-5 shadow-sm dark:border-slate-800/70 dark:bg-slate-900/80"
    >
      <!-- Bubles background -->
      <div
        class="pointer-events-none absolute -left-10 top-0 h-32 w-32 rounded-full bg-sky-400/10 blur-3xl"
      />
      <div
        class="pointer-events-none absolute right-0 -bottom-10 h-32 w-32 rounded-full bg-emerald-400/10 blur-3xl"
      />

      <div
        class="relative z-10 flex flex-col gap-4 md:flex-row md:items-center"
      >
        <div class="flex-1 space-y-2">
          <div
            class="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-600 shadow-sm dark:bg-slate-900/70 dark:text-sky-300"
          >
            <span
              class="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500"
            />
            Belajar offline
          </div>

          <h2
            class="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-50 leading-snug"
          >
            Materi tetap terbuka, meski sinyal tidak ada.
          </h2>

          <p class="text-xs md:text-[13px] text-slate-600 dark:text-slate-300">
            Fitur ini membantu sekolah dan komunitas di Papua agar bisa
            melanjutkan proses belajar tanpa khawatir jaringan internet.
          </p>
        </div>

        <div class="flex items-center gap-3 md:flex-col md:items-end">
          <div
            class="inline-flex items-center gap-2 rounded-2xl bg-white px-3 py-2 text-[11px] text-slate-600 shadow-sm dark:bg-slate-900/90 dark:text-slate-200"
          >
            <Wifi class="h-4 w-4 text-sky-500" />
            <span>Gunakan saat online untuk unduh</span>
          </div>
          <div
            class="inline-flex items-center gap-2 rounded-2xl bg-slate-900 text-slate-50 px-3 py-2 text-[11px] shadow-sm dark:bg-black"
          >
            <WifiOff class="h-4 w-4 text-emerald-300" />
            <span>Materi tetap bisa dibuka saat offline</span>
          </div>
        </div>
      </div>
    </div>

    <!-- TIMELINE STEPS -->
    <div
      class="relative rounded-3xl border border-slate-200/70 bg-white/90 p-5 shadow-sm dark:border-slate-800/70 dark:bg-slate-900/80"
    >
      <div class="mb-5 flex items-center justify-between">
        <div>
          <h3 class="text-sm font-semibold text-slate-900 dark:text-slate-50">
            Alur belajar dalam 3 langkah sederhana
          </h3>
          <p class="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
            Ikuti alur ini agar siswa tetap bisa mengakses modul tanpa gangguan.
          </p>
        </div>
        <span
          class="hidden md:inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-[10px] font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-300"
        >
          <CheckCircle2 class="h-3.5 w-3.5 text-emerald-500" />
          Direkomendasikan untuk guru & orang tua
        </span>
      </div>

      <div class="relative mt-4">
        <!-- Vertical line -->
        <div
          class="pointer-events-none absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-sky-400/50 via-slate-200 to-emerald-400/50 md:block"
        />

        <div class="space-y-4">
          <article
            v-for="(step, index) in steps"
            :key="step.title"
            class="group relative flex gap-3 rounded-2xl border border-slate-100 bg-slate-50/80 p-4 text-sm shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/60 dark:border-slate-800 dark:bg-slate-900/90"
          >
            <!-- Bullet + connector for desktop -->
            <div class="relative hidden md:flex w-8 flex-col items-center pt-1">
              <div
                class="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white text-[11px] font-semibold text-slate-500 shadow-sm dark:border-slate-700 dark:bg-slate-900"
              >
                {{ index + 1 }}
              </div>
            </div>

            <!-- Content -->
            <div class="flex flex-1 gap-3">
              <div
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-500 shadow-sm ring-1 ring-sky-100/60 group-hover:bg-sky-500 group-hover:text-white group-hover:ring-sky-400 dark:bg-slate-800 dark:text-sky-300 dark:ring-slate-700"
              >
                <component :is="step.icon" :size="20" class="stroke-[1.6]" />
              </div>

              <div class="space-y-1.5">
                <div class="flex flex-wrap items-center gap-2">
                  <span
                    class="inline-flex items-center gap-2 rounded-full bg-white px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 shadow-sm dark:bg-slate-900/80"
                  >
                    Langkah {{ index + 1 }}
                  </span>
                  <span
                    class="inline-flex items-center gap-1 rounded-full bg-emerald-500/5 px-2 py-0.5 text-[10px] font-medium text-emerald-600 dark:text-emerald-300"
                  >
                    <CheckCircle2 class="h-3 w-3" />
                    {{ step.pill }}
                  </span>
                </div>

                <h4
                  class="text-[13px] font-semibold text-slate-900 dark:text-slate-50"
                >
                  {{ step.title }}
                </h4>

                <p
                  class="text-[11px] leading-relaxed text-slate-600 dark:text-slate-400"
                >
                  {{ step.desc }}
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>

    <!-- TIPS CARD -->
    <div
      class="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-slate-50/80 p-4 dark:border-slate-800/70 dark:bg-slate-900/80"
    >
      <div
        class="pointer-events-none absolute -right-8 -bottom-10 h-24 w-24 rounded-full bg-sky-400/10 blur-2xl"
      />
      <div class="relative z-10 flex items-start gap-3">
        <div
          class="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-300"
        >
          <Smartphone :size="18" class="stroke-[1.7]" />
        </div>
        <div
          class="text-[11px] leading-relaxed text-slate-600 dark:text-slate-300"
        >
          <span class="font-semibold text-slate-900 dark:text-slate-100">
            Tips penting:
          </span>
          Untuk menjaga modul tetap tersedia, hindari menghapus data aplikasi
          atau cache browser setelah mengunduh materi.
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Animasi halus seluruh blok */
.space-y-8 {
  animation: fadeSlide 0.45s ease-out;
}

@keyframes fadeSlide {
  from {
    opacity: 0;
    transform: translateY(14px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
