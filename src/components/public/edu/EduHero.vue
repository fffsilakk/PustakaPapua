<template>
  <main
    class="relative flex min-h-[95vh] flex-col -mt-5 items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-900 px-4"
  >
    <div class="absolute inset-0 z-0">
      <div
        class="absolute top-[20%] left-[10%] w-72 h-72 bg-emerald-500/20 rounded-full blur-[100px] animate-pulse"
      ></div>
      <div
        class="absolute bottom-[20%] right-[10%] w-96 h-96 bg-orange-500/10 rounded-full blur-[120px]"
      ></div>

      <div
        class="absolute inset-0 dark:opacity-[0.05]"
        style="
          background-image:
            linear-gradient(#e2e8f0 1px, transparent 1px),
            linear-gradient(90deg, #e2e8f0 1px, transparent 1px);
          background-size: 50px 50px;
          opacity: 0.2;
        "
      ></div>
    </div>

    <div
      class="relative z-10 flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl py-16 md:py-24 gap-12 lg:gap-20"
    >
      <div class="lg:w-1/2 text-center lg:text-left">
        <div
          class="group flex items-center justify-center lg:justify-start gap-3 rounded-full px-4 py-2 text-xs font-bold tracking-widest border bg-white/60 border-emerald-200 text-emerald-800 shadow-xl backdrop-blur-md dark:bg-zinc-900/60 dark:border-emerald-900/30 dark:text-emerald-400 mb-8 transition-all hover:border-emerald-400"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <div class="relative flex h-3 w-3">
            <span
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
            ></span>
            <span
              class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"
            ></span>
          </div>
          mari torang belajar mengenal papua
        </div>

        <h1
          class="text-5xl md:text-7xl lg:text-[4.8rem] font-black text-zinc-900 dark:text-white leading-[1.05] tracking-tighter mb-6"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          Belajar di <br />
          <span
            class="relative inline-block bg-gradient-to-r from-emerald-600 via-teal-500 to-orange-500 bg-clip-text text-transparent transform translate-y-0 opacity-100"
            data-aos="zoom-in-up"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos-easing="ease-out-back"
          >
            Pustaka Papua
            <span
              class="absolute -bottom-2 left-0 w-full h-2 bg-emerald-500/20 rounded-full blur-sm -z-10"
            ></span>
          </span>
        </h1>

        <p
          class="mt-6 text-lg md:text-xl max-w-2xl text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed mx-auto lg:mx-0"
          data-aos="fade-right"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          Akses modul edukasi, sejarah, dll.. khusus konteks lokal Papua.
          Dirancang agar mudah untuk dapat kamu pelajari
          <span
            class="text-zinc-900 dark:text-zinc-100 font-bold underline decoration-emerald-500 decoration-2 underline-offset-4"
            >kapan saja, tanpa koneksi internet.</span
          >
        </p>
      </div>

      <div
        class="lg:w-1/2 mt-12 lg:mt-0 flex justify-center relative"
        data-aos="fade-left"
        data-aos-delay="600"
        data-aos-duration="1000"
      >
        <div
          class="relative w-full max-w-md h-auto rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-800 transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-out"
        >
          <img
            src="https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,f_auto,q_auto:best,w_640/v1634025439/01h4zfrjgvvwgctfxb2d7982n1.jpg"
            alt="Anak-anak Papua belajar"
            class="w-full h-full object-cover"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-zinc-950/40 to-transparent"
          ></div>

          <div class="absolute bottom-6 left-6 text-white text-left">
            <p class="text-sm font-light">Belajar adalah Pelita</p>
            <p class="text-xl md:text-2xl font-black">Masa Depan Papua</p>
          </div>
        </div>

        <div
          class="absolute -bottom-8 -right-8 p-4 bg-white/80 dark:bg-zinc-900/70 backdrop-blur-md rounded-2xl shadow-lg border border-zinc-200 dark:border-zinc-800 hidden md:block"
          data-aos="zoom-in"
          data-aos-delay="1000"
        >
          <div class="flex items-center gap-3">
            <div
              class="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-emerald-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div>
              <p class="text-xs font-bold text-zinc-500 dark:text-zinc-400">
                ENERGI BARU
              </p>
              <p class="text-sm font-bold text-zinc-800 dark:text-white">
                Literasi Digital
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true,
    easing: "ease-out-back", // Atau 'ease-out-expo' untuk lebih dramatis
  });
});
</script>

<style scoped>
/* Transisi AOS default, bisa di-customize lagi jika perlu */
</style>
