<script setup lang="ts">
// Menggunakan v-motion untuk efek muncul yang halus
</script>

<template>
  <section class="bg-transparent px-4 pb-16 pt-2 sm:px-6 lg:px-8">
    <div
      v-motion
      :initial="{ opacity: 0, scale: 0.95 }"
      :enter="{ opacity: 1, scale: 1, transition: { delay: 600 } }"
      class="group mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-emerald-100 bg-white/40 p-1 shadow-xl backdrop-blur-md transition-all duration-500 hover:shadow-emerald-200/40 dark:border-emerald-500/20 dark:bg-emerald-500/5 dark:hover:shadow-emerald-900/20"
    >
      <div
        class="rounded-[1.9rem] bg-gradient-to-br from-emerald-50/80 to-white/80 p-6 dark:from-slate-900/80 dark:to-slate-950/80 sm:p-10"
      >
        <div class="flex flex-col gap-8 md:flex-row md:items-start">
          <div
            class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-3xl shadow-inner dark:bg-emerald-900/40"
          >
            📜
          </div>

          <div class="flex-1">
            <div class="mb-6 flex flex-col gap-2">
              <h2
                class="text-[11px] font-black uppercase tracking-[0.3em] text-emerald-700 dark:text-emerald-400"
              >
                Filosofi & Sejarah
              </h2>
              <h3 class="text-2xl font-bold text-slate-800 dark:text-white">
                Tentang Senjata Tradisional Papua
              </h3>
              <div
                class="h-1 w-12 rounded-full bg-emerald-500 transition-all group-hover:w-24"
              ></div>
            </div>

            <div
              class="grid gap-6 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300 md:grid-cols-2"
            >
              <div class="space-y-4">
                <p>
                  Senjata tradisional di Papua seperti
                  <span
                    class="font-semibold text-emerald-700 dark:text-emerald-300"
                    >busur panah, tombak, kapak batu</span
                  >, dan belati tulang kasuari awalnya merupakan alat esensial
                  untuk bertahan hidup di alam yang menantang. Bentuk dan
                  bahannya dirancang secara cerdas mengikuti lingkungan hutan
                  tropis hingga pegunungan salju abadi.
                </p>
                <p>
                  Bagi masyarakat lokal, senjata bukan sekadar alat perlindungan
                  atau berburu, melainkan perpanjangan dari keberanian dan
                  status sosial pemiliknya.
                </p>
              </div>

              <div class="space-y-4">
                <p>
                  Dalam era modern, senjata-senjata ini beralih fungsi menjadi
                  <span
                    class="font-semibold text-emerald-700 dark:text-emerald-300"
                    >properti upacara adat</span
                  >. Ia melambangkan kedewasaan seorang pria dan identitas suku
                  yang tidak luntur dimakan zaman, menjadikannya warisan budaya
                  yang sangat berharga.
                </p>
                <div
                  class="rounded-2xl border border-emerald-100 bg-emerald-100/30 p-4 text-sm italic dark:border-emerald-500/20 dark:bg-emerald-500/10"
                >
                  "Senjata tradisional Papua adalah perpaduan antara kearifan
                  lokal dalam mengelola alam dan ekspresi seni yang mendalam."
                </div>
              </div>
            </div>

            <div
              class="mt-8 flex flex-wrap items-center gap-4 border-t border-slate-200 pt-6 dark:border-slate-800"
            >
              <div
                class="flex items-center gap-2 text-xs font-medium text-slate-500"
              >
                <span class="h-2 w-2 rounded-full bg-emerald-500"></span>
                Edukasi Budaya
              </div>
              <div
                class="flex items-center gap-2 text-xs font-medium text-slate-500"
              >
                <span class="h-2 w-2 rounded-full bg-sky-500"></span>
                Pelestarian Warisan
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Transisi halus untuk perubahan hover */
.group:hover .h-1 {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
