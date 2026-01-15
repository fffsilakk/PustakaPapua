<template>
  <section
    class="relative overflow-hidden mt-10 rounded-[40px] bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 p-8 md:p-14 mb-12"
  >
    <div
      class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16"
    >
      <div class="flex-1 text-center lg:text-left space-y-6">
        <h2
          class="text-emerald-600 dark:text-emerald-400 font-black text-xs uppercase tracking-[0.4em]"
        >
          Empowering Local Heroes
        </h2>

        <h1
          class="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tighter"
        >
          Bawa Pulang <br />
          <span class="relative">
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
          class="text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed font-medium"
        >
          Dukung mama-mama perajin dan pelestari tradisi melalui produk UMKM
          pilihan yang dibuat dengan kasih sayang dan keahlian tangan.
        </p>

        <div
          class="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4"
        >
          <div
            class="px-5 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-3"
          >
            <span class="text-2xl">🧺</span>
            <span class="text-xs font-bold text-slate-700 dark:text-slate-300"
              >Produk Terbatas</span
            >
          </div>
          <div
            class="px-5 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-3"
          >
            <span class="text-2xl">🌱</span>
            <span class="text-xs font-bold text-slate-700 dark:text-slate-300"
              >Bahan Alami</span
            >
          </div>
        </div>
      </div>

      <div class="flex-1 relative w-full h-[300px] md:h-[400px]">
        <div
          class="absolute top-0 left-0 w-48 h-56 bg-white dark:bg-slate-800 rounded-[24px] shadow-2xl p-3 -rotate-6 transition-transform hover:rotate-0 hover:z-30 duration-500 border border-slate-100 dark:border-slate-700"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <img
            src="https://images.unsplash.com/photo-1590736961958-51fd161ca1f4?q=80&w=400"
            class="w-full h-32 object-cover rounded-[18px] mb-3"
          />
          <p class="text-[10px] font-black text-emerald-600 uppercase mb-1">
            Kriya
          </p>
          <p
            class="text-[11px] font-bold text-slate-900 dark:text-white leading-tight"
          >
            Noken Asli Papua
          </p>
          <p class="text-[10px] text-slate-400 mt-1">Rp 150.000</p>
        </div>

        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-64 bg-white dark:bg-slate-800 rounded-[24px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] p-3 z-20 transition-transform hover:scale-110 duration-500 border border-slate-100 dark:border-slate-700"
          data-aos="zoom-in"
        >
          <img
            src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=400"
            class="w-full h-40 object-cover rounded-[18px] mb-3"
          />
          <p class="text-[10px] font-black text-orange-600 uppercase mb-1">
            Kuliner
          </p>
          <p
            class="text-xs font-bold text-slate-900 dark:text-white leading-tight"
          >
            Kopi Arabika Wamena
          </p>
          <p class="text-[11px] text-slate-400 mt-1">Edisi Premium</p>
        </div>

        <div
          class="absolute bottom-0 right-0 w-44 h-52 bg-white dark:bg-slate-800 rounded-[24px] shadow-xl p-3 rotate-12 transition-transform hover:rotate-0 hover:z-30 duration-500 border border-slate-100 dark:border-slate-700"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img
            src="https://images.unsplash.com/photo-1615486511262-c7438299837a?q=80&w=400"
            class="w-full h-28 object-cover rounded-[18px] mb-3"
          />
          <p class="text-[10px] font-black text-blue-600 uppercase mb-1">
            Seni
          </p>
          <p
            class="text-[11px] font-bold text-slate-900 dark:text-white leading-tight"
          >
            Patung Ukir
          </p>
          <p class="text-[10px] text-slate-400 mt-1">Handmade</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Desain khusus UMKM dengan gaya "Floating Cards Gallery"
</script>
