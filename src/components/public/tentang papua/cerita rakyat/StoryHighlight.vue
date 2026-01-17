<template>
  <section class="relative my-24 px-6 overflow-hidden py-20">
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div
        class="absolute top-0 left-1/4 w-72 h-72 bg-emerald-500/10 blur-[120px] rounded-full"
      ></div>
      <div
        class="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 blur-[150px] rounded-full"
      ></div>
    </div>

    <div class="relative z-10 max-w-6xl mx-auto">
      <div class="flex flex-col lg:flex-row items-center gap-16">
        <div class="relative w-full lg:w-1/2 group">
          <div
            class="absolute -inset-4 border-2 border-emerald-500/20 rounded-[40px] rotate-3 group-hover:rotate-0 transition-transform duration-700 ease-out"
          ></div>

          <div
            class="relative h-[450px] md:h-[550px] overflow-hidden rounded-[32px] shadow-2xl bg-slate-100 dark:bg-slate-800"
          >
            <img
              :src="imageUrl"
              class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              alt="Momen Cerita"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"
            ></div>
          </div>

          <div
            class="absolute -bottom-6 -right-6 w-24 h-24 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-xl border-8 border-slate-50 dark:border-slate-900 animate-spin-slow"
          >
            <span class="text-3xl">{{ icon }}</span>
          </div>
        </div>

        <div class="w-full lg:w-1/2 space-y-8">
          <div class="flex items-center gap-4">
            <div class="h-[2px] w-16 bg-emerald-500 rounded-full"></div>
            <span
              class="text-xs font-black uppercase tracking-[0.4em] text-emerald-600 dark:text-emerald-400"
            >
              Intisari Cerita
            </span>
          </div>

          <div class="relative">
            <span
              class="absolute -top-12 -left-8 text-[140px] font-serif text-emerald-500/20 leading-none select-none"
              >“</span
            >

            <h3
              class="text-3xl md:text-5xl font-serif italic font-medium leading-[1.3] text-slate-800 dark:text-slate-100 relative z-10"
            >
              {{ quote }}
            </h3>
          </div>

          <div class="pt-6">
            <div
              class="inline-flex items-center gap-4 p-5 rounded-[24px] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm"
            >
              <div
                class="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-2xl shadow-inner"
              >
                🌿
              </div>
              <div>
                <p
                  class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1"
                >
                  Warisan Budaya
                </p>
                <p
                  class="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-tighter"
                >
                  Papua Barat & Timur
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
/**
 * Menggunakan Props agar komponen ini bisa dipakai untuk:
 * - Biwar Sang Penakluk Naga
 * - Asal Usul Burung Cendrawasih
 * - Legenda Danau Sentani
 * - Dll.
 */
interface Props {
  quote: string; // Teks kutipan penting
  imageUrl: string; // Gambar pendukung
  icon?: string; // Ikon dekoratif (default: 🏹)
}

withDefaults(defineProps<Props>(), {
  icon: "🏹",
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400..900&display=swap");

.font-serif {
  font-family: "Playfair Display", serif;
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 15s linear infinite;
}

h3 {
  text-wrap: balance;
}
</style>
