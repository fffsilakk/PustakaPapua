<script setup lang="ts">
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

const subtitle =
  "Dari Raja Ampat hingga Puncak Jaya, temukan fragmen surga yang jatuh ke bumi. Perpaduan magis antara tradisi leluhur dan kemegahan alam yang tak tersentuh.";

onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true,
    easing: "ease-out-back",
  });
});
</script>

<template>
  <section
    class="relative min-h-screen overflow-hidden bg-[#fafafa] dark:bg-slate-950 flex items-center"
  >
    <div
      class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"
    >
      <div
        class="absolute -top-[10%] -left-[5%] w-[40%] h-[40%] rounded-full bg-emerald-100/50 blur-[120px] dark:bg-emerald-900/20"
      ></div>
      <div
        class="absolute top-[20%] -right-[5%] w-[30%] h-[30%] rounded-full bg-sky-100/50 blur-[120px] dark:bg-sky-900/20"
      ></div>
    </div>

    <div class="container mx-auto px-6 py-20 relative z-10">
      <div class="flex flex-col lg:flex-row items-center gap-16">
        <div class="w-full lg:w-3/5" data-aos="fade-right">
          <div
            class="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 mb-8"
          >
            <span class="relative flex h-2 w-2">
              <span
                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
              ></span>
              <span
                class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"
              ></span>
            </span>
            <span
              class="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400"
            >
              Wonderful Indonesia • Papua Edition
            </span>
          </div>

          <h1
            class="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-[1.1] mb-6"
          >
            Eksplorasi <br />
            <span class="relative">
              <span
                class="relative z-10 bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent"
                >Mahakarya</span
              >
              <svg
                class="absolute -bottom-2 left-0 w-full h-3 text-emerald-200 dark:text-emerald-800/30 -z-10"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 25 0, 50 5 T 100 5"
                  stroke="currentColor"
                  stroke-width="8"
                  fill="transparent"
                />
              </svg>
            </span>
            Alam Papua.
          </h1>

          <p
            class="max-w-xl text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-10"
          >
            {{ subtitle }}
          </p>

          <div class="flex flex-wrap gap-4 mb-12">
            <button
              class="group relative px-8 py-4 bg-slate-900 dark:bg-emerald-500 text-white rounded-2xl font-bold transition-all hover:scale-105 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] dark:hover:shadow-emerald-500/30 overflow-hidden"
            >
              <span class="relative z-10">Mulai Petualangan</span>
              <div
                class="absolute inset-0 bg-gradient-to-r from-emerald-400 to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity"
              ></div>
            </button>

            <button
              class="px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
            >
              Jelajahi Galeri
            </button>
          </div>
        </div>

        <div
          class="w-4/5 lg:w-2/5 relative"
          data-aos="zoom-in-up"
          data-aos-delay="200"
        >
          <div class="relative z-20 group mt-5">
            <div
              class="absolute -inset-4 bg-gradient-to-tr from-emerald-500 to-sky-500 rounded-[2.5rem] opacity-20 blur-2xl group-hover:opacity-40 transition duration-1000"
            ></div>
            <div
              class="relative overflow-hidden rounded-[2rem] bg-slate-200 aspect-[4/5] shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1703769605297-cc74106244d9?q=80&w=1184&auto=format&fit=crop"
                alt="Raja Ampat"
                class="w-full h-full object-cover transform transition duration-1000 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"
              ></div>

              <div
                class="absolute bottom-8 left-8 right-8 p-6 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl"
              >
                <p class="text-white font-medium">
                  "Surga terakhir di bumi yang memberikan ketenangan jiwa."
                </p>
                <p class="text-emerald-400 text-sm mt-2 font-bold">
                  — Raja Ampat, Papua Barat
                </p>
              </div>
            </div>
          </div>

          <!-- <div
            class="absolute -top-10 -right-10 w-32 h-32 bg-white dark:bg-slate-800 rounded-3xl shadow-xl flex items-center justify-center p-4 z-30 animate-bounce-slow"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <div class="text-center">
              <span class="text-3xl block mb-1">⭐</span>
              <p class="text-[10px] font-bold text-slate-400 uppercase">
                Top Rated
              </p>
            </div>
          </div> -->

          <div
            class="absolute -bottom-6 -left-12 hidden md:block w-48 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl z-30"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <div class="flex items-center gap-3">
              <div
                class="h-10 w-10 rounded-full bg-sky-100 dark:bg-sky-900/50 flex items-center justify-center text-xl"
              >
                📍
              </div>
              <div>
                <p class="text-xs font-bold dark:text-white">
                  Lokasi Strategis
                </p>
                <p class="text-[10px] text-slate-500">Mudah diakses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes bounce-slow {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}

.animate-bounce-slow {
  animation: bounce-slow 4s ease-in-out infinite;
}

/* Custom Scrollbar untuk vibe premium */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #10b981;
  border-radius: 10px;
}
</style>
