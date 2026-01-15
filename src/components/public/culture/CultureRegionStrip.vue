<template>
  <section class="relative mb-16 py-8" data-aos="fade-up">
    <div class="flex flex-col items-center text-center mb-10 space-y-2">
      <h2
        class="text-2xl font-black tracking-tight text-slate-900 dark:text-white uppercase"
      >
        Eksplorasi Geografis Budaya
      </h2>
      <p class="text-sm text-slate-500 dark:text-slate-400">
        Pilih salah satu wilayah adat untuk melihat kekayaan budayanya
      </p>
    </div>

    <div class="relative max-w-5xl mx-auto px-4">
      <div
        v-if="hoveredRegion"
        class="fixed pointer-events-none z-[100] px-4 py-2 bg-slate-900/90 dark:bg-amber-500 text-white dark:text-slate-950 text-xs font-black rounded-xl shadow-2xl backdrop-blur-md transition-opacity duration-200 uppercase tracking-widest border border-white/20"
        :style="{ left: mousePos.x + 15 + 'px', top: mousePos.y + 15 + 'px' }"
      >
        {{ hoveredRegion }}
      </div>

      <div
        class="relative bg-white/50 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800 rounded-[40px] p-6 md:p-12 backdrop-blur-sm"
      >
        <svg
          viewBox="0 0 800 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-full h-auto drop-shadow-2xl"
        >
          <path
            @mouseenter="handleMouseEnter('Domberai', $event)"
            @mouseleave="handleMouseLeave"
            @click="selectRegion('domberai')"
            :class="[
              selectedRegion === 'domberai'
                ? 'fill-amber-500 stroke-amber-600'
                : 'fill-slate-200 dark:fill-slate-800 stroke-white dark:stroke-slate-700',
            ]"
            class="transition-all duration-300 cursor-pointer hover:fill-amber-400 hover:scale-[1.02] origin-center"
            d="M50 150 C 70 100, 150 80, 180 130 L 200 180 L 150 220 L 80 200 Z"
          />

          <circle
            @mouseenter="handleMouseEnter('Saireri', $event)"
            @mouseleave="handleMouseLeave"
            @click="selectRegion('saireri')"
            cx="280"
            cy="120"
            r="30"
            :class="[
              selectedRegion === 'saireri'
                ? 'fill-amber-500'
                : 'fill-slate-300 dark:fill-slate-700',
            ]"
            class="transition-all duration-300 cursor-pointer hover:fill-amber-400"
          />

          <path
            @mouseenter="handleMouseEnter('Mamta / Tabi', $event)"
            @mouseleave="handleMouseLeave"
            @click="selectRegion('mamta')"
            :class="[
              selectedRegion === 'mamta'
                ? 'fill-amber-500 stroke-amber-600'
                : 'fill-slate-200 dark:fill-slate-800 stroke-white dark:stroke-slate-700',
            ]"
            class="transition-all duration-300 cursor-pointer hover:fill-amber-400"
            d="M350 150 L 550 150 L 550 200 L 350 200 Z"
          />

          <path
            @mouseenter="handleMouseEnter('La Pago', $event)"
            @mouseleave="handleMouseLeave"
            @click="selectRegion('lapago')"
            :class="[
              selectedRegion === 'lapago'
                ? 'fill-amber-500 stroke-amber-600'
                : 'fill-slate-200 dark:fill-slate-800 stroke-white dark:stroke-slate-700',
            ]"
            class="transition-all duration-300 cursor-pointer hover:fill-amber-400"
            d="M400 200 L 550 200 L 550 300 L 400 300 Z"
          />

          <path
            @mouseenter="handleMouseEnter('Mee Pago', $event)"
            @mouseleave="handleMouseLeave"
            @click="selectRegion('meepago')"
            :class="[
              selectedRegion === 'meepago'
                ? 'fill-amber-500 stroke-amber-600'
                : 'fill-slate-200 dark:fill-slate-800 stroke-white dark:stroke-slate-700',
            ]"
            class="transition-all duration-300 cursor-pointer hover:fill-amber-400"
            d="M250 200 L 400 200 L 400 300 L 250 300 Z"
          />

          <path
            @mouseenter="handleMouseEnter('Anim Ha', $event)"
            @mouseleave="handleMouseLeave"
            @click="selectRegion('anim-ha')"
            :class="[
              selectedRegion === 'anim-ha'
                ? 'fill-amber-500 stroke-amber-600'
                : 'fill-slate-200 dark:fill-slate-800 stroke-white dark:stroke-slate-700',
            ]"
            class="transition-all duration-300 cursor-pointer hover:fill-amber-400"
            d="M400 300 L 550 300 L 550 380 L 450 380 Z"
          />
        </svg>

        <div
          class="absolute bottom-8 left-8 p-4 rounded-2xl bg-white/80 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 backdrop-blur shadow-sm"
        >
          <p
            class="text-[10px] font-black text-slate-400 uppercase tracking-tighter mb-1"
          >
            Wilayah Terpilih:
          </p>
          <p
            class="text-sm font-black text-amber-600 dark:text-amber-400 uppercase"
          >
            {{ selectedRegion !== "all" ? selectedRegion : "Semua Papua" }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

const selectedRegion = ref("all");
const hoveredRegion = ref<string | null>(null);
const mousePos = reactive({ x: 0, y: 0 });

const handleMouseEnter = (name: string, event: MouseEvent) => {
  hoveredRegion.value = name;
  updateMousePos(event);
};

const handleMouseLeave = () => {
  hoveredRegion.value = null;
};

const updateMousePos = (event: MouseEvent) => {
  mousePos.x = event.clientX;
  mousePos.y = event.clientY;
};

const selectRegion = (id: string) => {
  selectedRegion.value = id;
  // logic store disini
};
</script>

<style scoped>
path,
circle {
  stroke-width: 2;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
