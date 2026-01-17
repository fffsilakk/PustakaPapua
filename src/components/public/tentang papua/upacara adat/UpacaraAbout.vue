<script setup lang="ts">
// Desain Penutup Edukatif - Clean & Soft
</script>

<template>
  <section class="bg-transparent px-4 pb-16 pt-4 sm:px-6 lg:px-8">
    <div
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { delay: 600 } }"
      class="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900/50"
    >
      <div class="flex flex-col gap-8 md:flex-row md:items-start">
        <div
          class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-2xl dark:bg-emerald-500/10"
        >
          ✨
        </div>

        <div class="flex-1">
          <div class="mb-4">
            <h2
              class="text-[11px] font-black uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400"
            >
              Makna & Filosofi
            </h2>
            <h3 class="mt-1 text-2xl font-bold text-slate-800 dark:text-white">
              Tentang Upacara Adat Papua
            </h3>
          </div>

          <div
            class="grid gap-8 text-[15px] leading-relaxed text-slate-600 dark:text-slate-400 lg:grid-cols-2"
          >
            <div class="space-y-4">
              <p>
                Upacara adat di Papua biasanya dilakukan untuk menandai momen
                penting seperti
                <span class="font-semibold text-slate-800 dark:text-slate-200"
                  >syukuran panen, pernikahan, kelahiran, hingga
                  perdamaian</span
                >. Dalam setiap prosesinya, masyarakat berkumpul dan bekerja
                sama sebagai simbol persatuan yang sangat kuat.
              </p>
              <p>
                Tradisi seperti <span class="italic">Bakar Batu</span> bukan
                sekadar makan bersama, namun merupakan manifestasi dari nilai
                berbagi dan toleransi antarwarga yang telah diwariskan secara
                turun-temurun.
              </p>
            </div>

            <div class="space-y-4">
              <p>
                Di banyak tempat, upacara adat juga menjadi sarana bagi para
                tetua untuk menurunkan
                <span
                  class="font-semibold text-emerald-600 dark:text-emerald-400"
                  >aturan adat dan identitas budaya</span
                >
                kepada generasi muda agar tidak luntur dimakan zaman.
              </p>

              <div class="rounded-2xl bg-slate-50 p-5 dark:bg-slate-800/40">
                <p class="text-xs font-medium leading-relaxed italic">
                  "Fitur ini dirancang sebagai bahan diskusi edukatif untuk
                  mengenal siapa yang melaksanakan ritual, lokasi, serta makna
                  mendalam di balik setiap tradisi Papua."
                </p>
              </div>
            </div>
          </div>

          <div
            class="mt-8 flex flex-wrap gap-4 border-t border-slate-100 pt-6 dark:border-slate-800"
          >
            <div
              class="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-400"
            >
              <span class="h-1 w-4 rounded-full bg-emerald-400"></span>
              Nilai Sosial
            </div>
            <div
              class="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-400"
            >
              <span class="h-1 w-4 rounded-full bg-sky-400"></span>
              Gotong Royong
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
