<script setup lang="ts">
const props = defineProps<{
  title?: string;
  funFacts?: string[];
  highlightsTitle?: string;
  highlights?: string[];
  reflectionTitle?: string;
  reflectionQuestions?: string[];
}>();
</script>

<template>
  <section
    v-if="funFacts?.length || highlights?.length || reflectionQuestions?.length"
    class="mt-6"
  >
    <div
      class="relative overflow-hidden rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-slate-50 px-4 py-5 text-sm shadow-sm sm:px-6 dark:border-emerald-500/30 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900/90"
    >
      <!-- dekorasi background -->
      <div
        class="pointer-events-none absolute -top-10 -right-10 h-24 w-24 rounded-full bg-emerald-200/40 blur-3xl dark:bg-emerald-500/20"
      />
      <div
        class="pointer-events-none absolute -bottom-10 -left-10 h-24 w-24 rounded-full bg-sky-200/40 blur-3xl dark:bg-sky-500/20"
      />

      <div class="relative space-y-4">
        <!-- Header umum -->
        <div class="flex flex-wrap items-center justify-between gap-2">
          <div class="flex items-center gap-2">
            <div
              class="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-xs text-white shadow-md shadow-emerald-400/40"
            >
              🛒
            </div>
            <div>
              <h3
                class="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-800 dark:text-emerald-300"
              >
                {{ title || "Kenalan yuk sama UMKM" }}
              </h3>
              <p class="text-[11px] text-slate-500 dark:text-slate-400">
                Info lengkap produk lokal Papua yang siap kamu beli.
              </p>
            </div>
          </div>

          <span
            class="inline-flex items-center rounded-full bg-white/80 px-2.5 py-1 text-[11px] font-medium text-emerald-700 shadow-sm ring-1 ring-emerald-100 dark:bg-slate-900/70 dark:text-emerald-200 dark:ring-emerald-500/40"
          >
            Lokal · Papua
          </span>
        </div>

        <!-- Konten grid -->
        <div
          class="grid gap-4 sm:grid-cols-[minmax(0,1.3fr)_minmax(0,1.1fr)] sm:items-start"
        >
          <!-- kolom kiri: info produk + keunggulan -->
          <div class="space-y-4">
            <!-- Kenalan produk -->
            <div v-if="funFacts?.length">
              <h4
                class="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-800 dark:text-emerald-300"
              >
                <span
                  class="inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-100 text-[10px] text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-100"
                >
                  ℹ️
                </span>
                Info produk
              </h4>
              <ul
                class="mt-2 space-y-1.5 text-[13px] text-slate-700 dark:text-slate-200"
              >
                <li
                  v-for="(fact, idx) in funFacts"
                  :key="'fact-' + idx"
                  class="flex gap-2"
                >
                  <span
                    class="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500"
                  />
                  <span>{{ fact }}</span>
                </li>
              </ul>
            </div>

            <!-- Keunggulan / unggulan produk -->
            <div v-if="highlights?.length">
              <h4
                class="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-800 dark:text-emerald-300"
              >
                <span
                  class="inline-flex h-4 w-4 items-center justify-center rounded-full bg-amber-100 text-[10px] text-amber-700 dark:bg-amber-500/20 dark:text-amber-100"
                >
                  ✨
                </span>
                {{ highlightsTitle || "Keunggulan produk" }}
              </h4>
              <ul
                class="mt-2 space-y-1.5 text-[13px] text-slate-700 dark:text-slate-200"
              >
                <li
                  v-for="(h, idx) in highlights"
                  :key="'highlight-' + idx"
                  class="flex gap-2"
                >
                  <span
                    class="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500"
                  />
                  <span>{{ h }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- kolom kanan: pertanyaan pembeli -->
          <div
            v-if="reflectionQuestions?.length"
            class="rounded-xl bg-white/80 px-3.5 py-3.5 text-xs shadow-sm ring-1 ring-emerald-100/70 dark:bg-slate-950/70 dark:text-slate-100 dark:ring-emerald-500/40"
          >
            <p class="font-semibold text-slate-800 dark:text-slate-50">
              {{ reflectionTitle || "Sebelum beli, pertimbangkan:" }}
            </p>
            <ol
              class="mt-2 space-y-1.5 text-[12px] text-slate-700 dark:text-slate-200"
            >
              <li
                v-for="(q, idx) in reflectionQuestions"
                :key="'q-' + idx"
                class="flex gap-2"
              >
                <span class="mt-[2px] flex-shrink-0 text-[11px] font-semibold">
                  {{ idx + 1 }}.
                </span>
                <span>{{ q }}</span>
              </li>
            </ol>
            <p class="mt-2 text-[11px] text-slate-500 dark:text-slate-400">
              Info penting untuk pembeli cerdas.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
