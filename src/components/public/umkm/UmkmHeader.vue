<template>
  <section
    class="relative overflow-hidden mt-6 md:mt-10 rounded-[32px] md:rounded-[40px] bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 p-8 md:p-14 mb-12 transition-colors duration-500"
  >
    <div
      class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
    >
      <div class="w-full lg:flex-1 text-center lg:text-left space-y-6">
        <h2
          class="text-emerald-600 dark:text-emerald-400 font-black text-[10px] md:text-xs uppercase tracking-[0.4em]"
        >
          Empowering Local Heroes
        </h2>

        <h1
          class="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tighter"
        >
          Bawa Pulang <br class="hidden md:block" />
          <span class="relative inline-block">
            Cerita
            <svg
              class="absolute -bottom-2 left-0 w-full h-3 text-orange-400/40 -z-10"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                d="M0 5 Q 25 0, 50 5 T 100 5"
                stroke="currentColor"
                stroke-width="8"
                fill="none"
              />
            </svg>
          </span>
          Papua.
        </h1>

        <p
          class="text-slate-600 dark:text-slate-400 text-sm md:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed font-medium"
        >
          Dukung mama-mama perajin melalui produk UMKM pilihan yang dibuat
          dengan kasih sayang dan keahlian tangan.
        </p>

        <div
          class="flex items-center gap-4 justify-center lg:justify-start pt-2"
        >
          <div
            class="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-2"
          >
            <span class="text-lg">🌱</span>
            <span
              class="text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider"
              >Bahan Alami</span
            >
          </div>
          <div
            class="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-2"
          >
            <span class="text-lg">🎨</span>
            <span
              class="text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider"
              >Handmade</span
            >
          </div>
        </div>
      </div>

      <div class="w-full lg:flex-1 relative flex justify-center lg:block">
        <!-- Mobile carousel -->
        <div class="lg:hidden relative w-full max-w-[280px] h-[350px]">
          <div
            v-for="(slide, index) in slides"
            :key="'mob-' + index"
            class="absolute inset-0 transition-all duration-1000 ease-in-out"
            :class="
              activeIndex === index
                ? 'opacity-100 scale-100 rotate-0'
                : 'opacity-0 scale-95 rotate-3 pointer-events-none'
            "
          >
            <div
              class="h-full w-full bg-white dark:bg-slate-800 p-3 rounded-[32px] shadow-xl border border-slate-100 dark:border-slate-700 flex flex-col"
            >
              <img
                :src="slide.image"
                class="w-full h-48 object-cover rounded-[24px] mb-4"
                :alt="slide.title"
              />
              <div class="flex-1 px-2">
                <p
                  class="text-[10px] font-black text-orange-600 dark:text-orange-400 uppercase tracking-widest"
                >
                  {{ slide.tag }}
                </p>
                <h3
                  class="text-base font-bold text-slate-900 dark:text-white leading-tight mt-1"
                >
                  {{ slide.title }}
                </h3>
                <p
                  class="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-2"
                >
                  {{ slide.price }}
                </p>
              </div>
            </div>
          </div>

          <div
            class="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5"
          >
            <div
              v-for="(_, i) in slides"
              :key="'ind-' + i"
              class="h-1 rounded-full transition-all duration-300"
              :class="
                activeIndex === i
                  ? 'w-6 bg-orange-500'
                  : 'w-2 bg-slate-300 dark:bg-slate-700'
              "
            ></div>
          </div>
        </div>

        <!-- Desktop stacked cards -->
        <div
          v-if="firstSlide && secondSlide && thirdSlide"
          class="hidden lg:block relative h-[400px] w-full"
        >
          <!-- Left card -->
          <div
            class="absolute top-0 left-0 w-48 h-56 bg-white dark:bg-slate-800 rounded-[24px] shadow-2xl p-3 -rotate-6 transition-transform hover:rotate-0 z-10 border border-slate-100 dark:border-slate-700"
          >
            <img
              :src="firstSlide.image"
              class="w-full h-32 object-cover rounded-[18px] mb-3"
              :alt="firstSlide.title"
            />
            <p class="text-[10px] font-black text-emerald-600 uppercase mb-1">
              {{ firstSlide.tag }}
            </p>
            <p
              class="text-[11px] font-bold text-slate-900 dark:text-white leading-tight"
            >
              {{ firstSlide.title }}
            </p>
            <p class="text-[10px] text-slate-400 mt-1">
              {{ firstSlide.price }}
            </p>
          </div>

          <!-- Center card -->
          <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-64 bg-white dark:bg-slate-800 rounded-[24px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] dark:shadow-black/50 p-3 z-20 transition-transform hover:scale-110 border border-slate-100 dark:border-slate-700"
          >
            <img
              :src="secondSlide.image"
              class="w-full h-40 object-cover rounded-[18px] mb-3"
              :alt="secondSlide.title"
            />
            <p class="text-[10px] font-black text-orange-600 uppercase mb-1">
              {{ secondSlide.tag }}
            </p>
            <p
              class="text-xs font-bold text-slate-900 dark:text-white leading-tight"
            >
              {{ secondSlide.title }}
            </p>
            <p class="text-[11px] text-slate-400 mt-1">
              {{ secondSlide.price }}
            </p>
          </div>

          <!-- Right card -->
          <div
            class="absolute bottom-0 right-0 w-44 h-52 bg-white dark:bg-slate-800 rounded-[24px] shadow-xl p-3 rotate-12 transition-transform hover:rotate-0 z-10 border border-slate-100 dark:border-slate-700"
          >
            <img
              :src="thirdSlide.image"
              class="w-full h-28 object-cover rounded-[18px] mb-3"
              :alt="thirdSlide.title"
            />
            <p class="text-[10px] font-black text-blue-600 uppercase mb-1">
              {{ thirdSlide.tag }}
            </p>
            <p
              class="text-[11px] font-bold text-slate-900 dark:text-white leading-tight"
            >
              {{ thirdSlide.title }}
            </p>
            <p class="text-[10px] text-slate-400 mt-1">
              {{ thirdSlide.price }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";

interface UmkmSlide {
  title: string;
  tag: string;
  price: string;
  image: string;
}

const activeIndex = ref(0);

const slides: UmkmSlide[] = [
  {
    title: "Noken Asli Papua",
    tag: "Kriya",
    price: "Mulai Rp 150.000",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuEtZT4QmyBF3HC8VTBjHVnLl6N4BWA3GUrw&s",
  },
  {
    title: "Kopi Arabika Wamena",
    tag: "Kuliner",
    price: "Edisi Premium",
    image:
      "https://elscoffee.com/content/uploads/2021/07/Banner-E-Commerce-Wamena-100gr.jpg",
  },
  {
    title: "Patung Ukir Asmat",
    tag: "Seni",
    price: "Karya Handmade",
    image:
      "https://cdngnfi2.sgp1.cdn.digitaloceanspaces.com/gnfi/uploads/images/2021/06/0806562021-WhatsApp-Image-2021-06-08-at-06.55.29.jpg",
  },
];

// computed untuk aman di desktop
const firstSlide = computed(() => slides[0]);
const secondSlide = computed(() => slides[1]);
const thirdSlide = computed(() => slides[2]);

let timer: ReturnType<typeof setInterval> | null = null;

const startTimer = () => {
  if (!slides.length) return;
  timer = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % slides.length;
  }, 3500);
};

onMounted(() => {
  startTimer();
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>

<style scoped>
section {
  transition: all 0.5s ease-in-out;
}

img {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
</style>
