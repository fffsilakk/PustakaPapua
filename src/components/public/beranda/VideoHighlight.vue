<script setup lang="ts">
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init();
});
</script>

<template>
  <section class="relative py-20 bg-white dark:bg-zinc-950 overflow-hidden">
    <div
      class="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
    >
      <div
        class="absolute top-10 left-10 w-64 h-64 bg-orange-600 rounded-full blur-[120px]"
      ></div>
      <div
        class="absolute bottom-10 right-10 w-64 h-64 bg-red-600 rounded-full blur-[120px]"
      ></div>
    </div>

    <div class="max-w-5xl mx-auto px-6 relative z-10">
      <div class="flex flex-col lg:flex-row items-center gap-12">
        <div class="lg:w-1/2" data-aos="fade-right" data-aos-duration="1000">
          <div class="flex items-center gap-2 mb-4">
            <span class="w-12 h-[2px] bg-orange-600"></span>
            <span
              class="text-orange-600 font-bold tracking-[0.2em] uppercase text-xs"
            >
              Wonderful Indonesia
            </span>
          </div>

          <h2
            class="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white leading-[1.1] mb-6"
          >
            Ke
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600"
              >Papua</span
            >
          </h2>

          <p
            class="text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed"
          >
            Saksikan kemegahan alam, kejernihan air Raja Ampat, hingga
            kehangatan senyum saudara kita di ufuk timur. Sebuah perjalanan
            visual yang akan mengubah cara Anda memandang keindahan nusantara.
          </p>

          <div class="flex flex-wrap gap-4">
            <a
              href="https://www.youtube.com/watch?v=PgrGHs0U2Zs"
              target="_blank"
              class="px-8 py-4 bg-zinc-900 dark:bg-white dark:text-zinc-900 text-white font-bold rounded-2xl hover:bg-orange-600 dark:hover:bg-orange-500 dark:hover:text-white transition-all transform hover:-translate-y-1 shadow-xl shadow-orange-500/10"
            >
              Tonton Video Lengkap
            </a>
            <router-link to="/budaya">
              <button
                class="px-8 cursor-pointer py-4 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-300 font-bold rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all"
              >
                Pelajari Budaya
              </button>
            </router-link>
          </div>
        </div>

        <div
          class="lg:w-1/2 w-full"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div class="relative group">
            <div
              class="absolute -inset-4 bg-gradient-to-tr from-orange-500 to-red-600 rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
            ></div>

            <div
              class="relative bg-zinc-900 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-800"
            >
              <div class="aspect-video w-full">
                <iframe
                  class="w-full h-full"
                  src="https://www.youtube.com/embed/PgrGHs0U2Zs?si=6n_D-C3XvD_h-nUf"
                  title="Jelajahi Papua"
                  frameborder="0"
                  allow="
                    accelerometer;
                    autoplay;
                    clipboard-write;
                    encrypted-media;
                    gyroscope;
                    picture-in-picture;
                    web-share;
                  "
                  allowfullscreen
                ></iframe>
              </div>
            </div>

            <div
              class="absolute -bottom-6 -left-6 bg-white dark:bg-zinc-900 p-4 rounded-2xl shadow-xl border border-zinc-100 dark:border-zinc-800 hidden md:block"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <div class="flex items-center gap-3">
                <div
                  class="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 text-orange-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p
                    class="text-[10px] text-zinc-500 uppercase font-bold tracking-wider"
                  >
                    Lokasi
                  </p>
                  <p class="text-sm font-bold text-zinc-800 dark:text-white">
                    Papua, Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
