<template>
  <main class="bg-slate-50 dark:bg-slate-950 min-h-screen">
    <!-- Hero / header artikel -->
    <section
      class="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white px-4 py-10 sm:py-14 dark:border-slate-800 dark:from-slate-950 dark:to-slate-900"
    >
      <!-- Glow background -->
      <div class="pointer-events-none absolute inset-0 opacity-60">
        <div
          class="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl dark:bg-emerald-500/20"
        ></div>
        <div
          class="absolute right-[-4rem] top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-cyan-300/20 blur-3xl dark:bg-cyan-500/15"
        ></div>
      </div>

      <div
        class="relative mx-auto flex max-w-5xl flex-col gap-6 lg:flex-row lg:items-center"
      >
        <!-- Info utama -->
        <div class="flex-1">
          <div
            class="mb-4 flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400"
          >
            <span
              class="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 font-medium text-emerald-700 dark:border-emerald-500/40 dark:bg-emerald-500/10 dark:text-emerald-200"
            >
              <span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              Cerita Rakyat di Daerah Raja Empat
            </span>
            <span>•</span>
            <span>8 menit baca</span>
            <span>•</span>
            <span>42x dibaca</span>
          </div>

          <h1
            class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl dark:text-white"
          >
            Empat Raja
          </h1>

          <p
            class="mt-4 max-w-2xl text-sm text-slate-600 sm:text-base dark:text-slate-300"
          >
            Kisah seorang pemuda berani asal Papua yang pantang menyerah
            menghadapi rintangan demi melindungi ibunya dan kampung halaman dari
            naga penunggu sungai.
          </p>

          <!-- Meta kecil -->
          <div
            class="mt-5 flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400"
          >
            <div class="inline-flex items-center gap-2">
              <span
                class="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-[11px] font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                CR
              </span>
              <span>Cerita Rakyat</span>
            </div>
            <span
              class="hidden h-4 w-px bg-slate-200 dark:bg-slate-700 sm:inline-block"
            ></span>
            <div class="flex gap-1">
              <span
                class="rounded-full bg-slate-100 px-2 py-0.5 dark:bg-slate-800"
                >#Mimika</span
              >
              <span
                class="rounded-full bg-slate-100 px-2 py-0.5 dark:bg-slate-800"
                >#Biwar</span
              >
              <span
                class="rounded-full bg-slate-100 px-2 py-0.5 dark:bg-slate-800"
                >#Penakluk Naga</span
              >
            </div>
          </div>
        </div>

        <!-- Sisi kanan: gambar ilustrasi -->
        <div class="mt-4 w-full max-w-sm self-stretch lg:mt-0 lg:w-80">
          <div
            class="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900"
          >
            <img
              src="https://indonesiakaya.com/wp-content/uploads/2023/09/IK_Papua_Header.jpeg"
              alt="Penakluk Naga"
              class="h-56 w-full object-cover sm:h-64"
            />
            <div
              class="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent"
            ></div>
            <div class="absolute inset-x-0 bottom-0 p-3 text-xs text-slate-100">
              <p class="font-bold text-emerald-600">Biwar Sang Penakluk Naga</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <main class="min-h-screen bg-slate-50 dark:bg-slate-950">
      <div class="mx-auto max-w-7xl lg:flex gap-6 px-4 py-6">
        <!-- Sidebar Kiri -->
        <LeftSidebar />
        <!-- Konten utama artikel -->
        <section class="bg-slate-50 px-4 py-10 dark:bg-slate-950">
          <div class="mx-auto max-w-4xl">
            <!-- Outline / TOC kecil -->
            <Iam />
            <!-- Isi artikel dengan gambar -->
            <article
              class="prose prose-slate max-w-none prose-headings:scroll-mt-24 dark:prose-invert text-justify rounded-2xl border border-slate-200 bg-white/90 p-4 text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300 sm:text-sm"
            >
              <h2>Pesona Papua dan Mimika</h2>
              <p class="py-3">
                selain terkenal akan pesona alamnya, Papua juga memiliki
                cerita-cerita daerah yang mewarnai sastra Nusantara. Bahkan,
                Raja Ampat yang memesona dengan keindahan lautannya pun memiliki
                legenda di balik terbentuknya. Cerita rakyat lainnya berasal
                dari Mimika, kabupaten yang terkenal dengan keragaman kuliner
                sagu sebagai pilihan makanan pokok bertekstur legit dan tinggi
                serat..
              </p>

              <h2 class="py-3">Moral Cerita Biwar Sang Penakluk Naga</h2>
              <p>
                Pesan moral yang dapat diambil dari cerita rakyat Papua: Biwar
                Sang Penakluk Naga ini melibatkan nilai-nilai seperti
                keberanian, keadilan, dan ketekunan. Biwar adalah contoh nyata
                dari sikap seseorang yang berani dan tekun dalam mengatasi
                rintangan. Dia tidak takut untuk menghadapi naga jahat, yang
                tampak mustahil untuk ditaklukkan. Dengan keberanian dan
                ketekunan seperti yang dimiliki Biwar, kita tentu dapat
                mengatasi segala rintangan yang ada di hidup kita.
              </p>
              <p class="py-3">
                <i
                  >" Biwar adalah contoh nyata dari sikap seseorang yang berani
                  dan tekun dalam mengatasi rintangan. "</i
                >
              </p>

              <section
                id="referensi"
                class="mt-14 border-t border-slate-200 pt-6 dark:border-slate-800"
              >
                <p class="text-xs text-slate-500 dark:text-slate-400">
                  Referensi cerita:
                  <a
                    href="https://indonesiakaya.com/pustaka-indonesia/cerita-rakyat-papua-biwar-sang-penakluk-naga/"
                    target="_blank"
                    rel="noreferrer"
                    class="text-emerald-600 hover:underline dark:text-emerald-300"
                  >
                    Indonesiakaya.com – Cerita Rakyat Papua: Biwar Sang Penakluk
                    Naga
                  </a>
                </p>
              </section>
            </article>
          </div>
        </section>
        <RightSidebar />
      </div>
    </main>
  </main>
</template>

<script setup lang="ts">
import LeftSidebar from "../ceritaRakyat/LeftSidebar.vue";
// @ts-ignore
import RightSidebar from "../ceritaRakyat/RightSidebar.vue";
import Iam from "../../../../services/Iam.vue";
</script>
