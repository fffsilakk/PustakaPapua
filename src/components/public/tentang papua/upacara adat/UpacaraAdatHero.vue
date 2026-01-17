<script setup lang="ts">
// Desain Clean & Minimalist
</script>

<template>
  <section class="relative px-4 py-8 sm:px-6 lg:px-8">
    <div
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0 }"
      class="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
    >
      <div class="relative px-6 py-10 sm:px-12 sm:py-14">
        <div
          class="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between"
        >
          <div class="max-w-2xl space-y-6">
            <div
              class="inline-flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400"
            >
              <span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              Warisan Budaya
            </div>

            <div class="space-y-3">
              <h1
                class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
              >
                Upacara Adat Papua
              </h1>
              <p
                class="text-base leading-relaxed text-slate-600 dark:text-slate-400"
              >
                Dari ritual
                <span class="font-semibold text-slate-900 dark:text-white"
                  >Bakar Batu</span
                >
                hingga festival
                <span class="font-semibold text-slate-900 dark:text-white"
                  >Mbis</span
                >, temukan harmoni syukuran, penghormatan leluhur, dan ikatan
                persaudaraan yang tulus.
              </p>
            </div>

            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in ['🔥 Syukuran', '🪵 Leluhur', '🎭 Identitas']"
                :key="tag"
                class="rounded-full border border-slate-100 bg-slate-50 px-4 py-1.5 text-xs font-medium text-slate-600 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-400"
              >
                {{ tag }}
              </span>
            </div>
          </div>

          <div class="flex flex-col gap-4 lg:max-w-xs">
            <div
              class="rounded-2xl border border-emerald-100 bg-emerald-50/30 p-5 dark:border-emerald-500/20 dark:bg-emerald-500/5"
            >
              <div class="flex items-center gap-4 mb-3">
                <div
                  class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-xl shadow-sm dark:bg-slate-800"
                >
                  🪶
                </div>
                <h4
                  class="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400"
                >
                  Ritual Sakral
                </h4>
              </div>
              <p
                class="text-xs leading-relaxed text-slate-500 dark:text-slate-400"
              >
                Gunakan bagian ini untuk mengenal berbagai upacara adat Papua
                melalui cerita singkat dan dokumentasi visual yang otentik.
              </p>
            </div>

            <button
              class="flex items-center justify-center gap-2 rounded-2xl bg-slate-900 py-3 text-xs font-bold text-white transition-all hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-500"
            >
              Lihat Selengkapnya
              <svg
                class="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
