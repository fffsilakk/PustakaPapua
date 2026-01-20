<script setup lang="ts">
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
  });
});

const stats = [
  { label: "Pengrajin", value: "150+", icon: "👨‍🎨" },
  { label: "Produk", value: "500+", icon: "✨" },
  { label: "Wilayah", value: "7", icon: "🏔️" },
];

const features = [
  {
    t: "Serat Alami",
    d: "Diambil dari kulit kayu pilihan dengan teknik berkelanjutan.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    t: "Pemberdayaan",
    d: "Sistem bagi hasil transparan untuk kesejahteraan komunitas.",
    color: "from-orange-500 to-red-500",
  },
  {
    t: "Digital Access",
    d: "Membuka gerbang ekspor tanpa melalui banyak perantara.",
    color: "from-blue-500 to-indigo-600",
  },
];
</script>

<template>
  <main
    class="min-h-screen bg-[#fafafa] dark:bg-slate-900/60 overflow-x-hidden selection:bg-emerald-500 selection:text-white"
  >
    <section class="py-15 px-6 relative">
      <div class="container mx-auto max-w-7xl">
        <div class="grid lg:grid-cols-12 gap-12 items-end">
          <div class="lg:col-span-7" data-aos="fade-right">
            <div class="relative group overflow-hidden rounded-[3rem]">
              <div
                class="absolute inset-0 bg-emerald-900/20 group-hover:bg-transparent transition-colors duration-700 z-10"
              ></div>
              <img
                alt="Pengrajin"
                src="https://cdn.antaranews.com/cache/1200x800/2021/10/29/10.jpg"
                class="w-full h-[600px] object-cover transform group-hover:scale-110 transition-transform duration-1000"
              />
              <div class="absolute bottom-10 left-10 z-20">
                <h2 class="text-4xl font-bold text-white drop-shadow-lg italic">
                  "Noken adalah jati diri."
                </h2>
              </div>
            </div>
          </div>

          <div class="lg:col-span-5 space-y-12 pb-12">
            <div
              v-for="(stat, idx) in stats"
              :key="idx"
              data-aos="fade-up"
              :data-aos-delay="idx * 150"
              class="flex items-center gap-6 group"
            >
              <div
                class="text-5xl opacity-50 group-hover:opacity-100 transition-opacity"
              >
                {{ stat.icon }}
              </div>
              <div>
                <h4
                  class="text-5xl font-black text-slate-900 dark:text-white tracking-tighter"
                >
                  {{ stat.value }}
                </h4>
                <p
                  class="text-sm font-bold uppercase tracking-widest text-emerald-600"
                >
                  {{ stat.label }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5 bg-slate-50 dark:bg-slate-900/50">
      <div class="container mx-auto max-w-7xl px-6">
        <div class="mb-20">
          <h2
            data-aos="fade-right"
            class="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight"
          >
            Kenapa Harus <br />
            Kami?
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="(f, i) in features"
            :key="i"
            data-aos="zoom-in-up"
            :data-aos-delay="i * 200"
            class="p-1 w-full rounded-[3rem] bg-gradient-to-b from-slate-200 to-transparent dark:from-slate-700 dark:to-transparent"
          >
            <div
              class="h-full p-10 rounded-[2.9rem] bg-white dark:bg-slate-900 flex flex-col justify-between hover:shadow-2xl transition-all"
            >
              <div>
                <div
                  :class="`h-2 w-12 rounded-full bg-gradient-to-r ${f.color} mb-8`"
                ></div>
                <h3
                  class="text-2xl font-black text-slate-900 dark:text-white mb-4 italic"
                >
                  {{ f.t }}
                </h3>
                <p
                  class="text-slate-500 dark:text-slate-400 leading-relaxed font-medium text-lg"
                >
                  {{ f.d }}
                </p>
              </div>
              <div
                class="mt-8 text-emerald-500 font-black cursor-pointer group flex items-center gap-2"
              >
                LEARN MORE
                <span class="group-hover:translate-x-2 transition-transform"
                  >→</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 px-6 overflow-hidden">
      <div
        data-aos="flip-up"
        class="container mx-auto max-w-6xl relative rounded-[4rem] bg-slate-950 p-12 md:p-32 text-center overflow-hidden border border-emerald-500/20"
      >
        <div
          class="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 blur-[100px]"
        ></div>
        <div
          class="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-[100px]"
        ></div>

        <h2
          class="relative text-5xl md:text-8xl font-black text-white tracking-tighter mb-10 leading-none"
        >
          MARI <span class="italic font-light">BERKARYA</span>
        </h2>

        <button
          class="relative px-12 py-6 bg-white text-slate-950 font-black rounded-full hover:bg-emerald-400 transition-colors uppercase tracking-[0.2em] text-sm"
        >
          Mulai Kolaborasi
        </button>
      </div>
    </section>
  </main>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;500;700&display=swap");

main {
  font-family: "Space Grotesk", sans-serif;
}

/* Memperbaiki masalah horizontal scroll pada AOS */
[data-aos] {
  pointer-events: none;
}
.aos-animate {
  pointer-events: auto;
}
</style>
