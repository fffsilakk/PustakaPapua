<script setup lang="ts">
const stats = [
  { label: "Pengrajin Lokal", value: "150+", icon: "👨‍🎨" },
  { label: "Produk Otentik", value: "500+", icon: "✨" },
  { label: "Wilayah Adat", value: "7", icon: "🏔️" },
];

const features = [
  {
    t: "100% Organik",
    d: "Bahan baku dari alam Papua.",
    i: "🌿",
    color: "dark:bg-emerald-500/10 text-emerald-500",
  },
  {
    t: "Pemberdayaan",
    d: "Mendukung mama-mama pengrajin.",
    i: "🤝",
    color: "dark:bg-orange-500/10 text-orange-500",
  },
  {
    t: "Warisan Dunia",
    d: "Sejarah budaya dalam genggaman.",
    i: "🌎",
    color: "dark:bg-blue-500/10 text-blue-500",
  },
];
</script>

<template>
  <main
    class="min-h-screen bg-white dark:bg-slate-900/40 transition-colors duration-500"
  >
    <section
      class="relative px-6 py-20 lg:py-32 overflow-hidden border-b border-slate-100 dark:border-slate-800/50"
    >
      <div
        class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 dark:opacity-50"
      >
        <div
          class="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/20 blur-[120px] rounded-full"
        ></div>
      </div>

      <div class="mx-auto max-w-5xl text-center">
        <div
          v-motion-slide-visible-bottom
          class="inline-flex items-center gap-2 rounded-full bg-slate-100 dark:bg-slate-800/50 px-4 py-1.5 border border-slate-200 dark:border-slate-700/50 shadow-inner"
        >
          <span
            class="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping"
          ></span>
          <span
            class="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 dark:text-slate-400"
            >Visi & Misi Kami</span
          >
        </div>

        <h1
          v-motion-slide-visible-bottom
          class="mt-10 text-5xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-7xl lg:text-8xl leading-none"
        >
          Pemberdayaan <br />
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500"
            >Ekonomi Lokal.</span
          >
        </h1>

        <p
          v-motion-fade-visible
          class="mt-10 text-lg md:text-xl leading-relaxed text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium tracking-tight"
        >
          Menghubungkan tangan terampil Papua dengan dunia digital. Kami
          memastikan setiap karya mendapatkan panggung yang layak di pasar
          global.
        </p>
      </div>
    </section>

    <section
      class="px-6 py-24 bg-slate-50/50 dark:bg-[#050b1d] border-b border-slate-100 rounded-4xl dark:border-slate-800/50"
    >
      <div class="mx-auto max-w-7xl">
        <div class="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div v-motion-roll-visible-left class="relative group p-2">
            <div
              class="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            ></div>
            <div
              class="relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xl transition-all duration-500 group-hover:-translate-y-2"
            >
              <img
                src="https://baktinews.bakti.or.id/sites/default/files/styles/flexslider_full/public/images/noken.jpg?itok=on5wX_rI"
                class="aspect-[4/5] w-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60"
              ></div>
              <div class="absolute bottom-10 left-10 right-10">
                <h3 class="text-3xl font-black text-white tracking-tight">
                  Menjaga Martabat Lewat Karya.
                </h3>
              </div>
            </div>
          </div>

          <div class="space-y-12">
            <div class="space-y-6" v-motion-slide-visible-right>
              <h2
                class="text-4xl font-black text-slate-900 dark:text-white tracking-tighter"
              >
                Visi Abadi
              </h2>
              <div
                class="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium tracking-tight"
              >
                <p>
                  Kami percaya bahwa digitalisasi bukan untuk mengubah tradisi,
                  melainkan untuk
                  <span class="text-emerald-500 font-bold"
                    >memperkuat akarnya.</span
                  >
                </p>
                <p>
                  Setiap Noken dan ukiran adalah simbol identitas. Melalui
                  teknologi, kami membawa identitas ini melintasi benua.
                </p>
              </div>
            </div>

            <div class="grid grid-cols-3 gap-4">
              <div
                v-for="stat in stats"
                :key="stat.label"
                class="p-6 rounded-[2rem] bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 shadow-sm text-center transition-all hover:border-emerald-500"
              >
                <p class="text-2xl mb-1">{{ stat.icon }}</p>
                <h4
                  class="text-2xl font-black text-slate-900 dark:text-white tracking-tighter"
                >
                  {{ stat.value }}
                </h4>
                <p
                  class="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mt-2"
                >
                  {{ stat.label }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-white dark:bg-slate-900/40">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="grid gap-8 md:grid-cols-3">
          <div
            v-for="(point, i) in features"
            :key="i"
            v-motion-slide-visible-bottom
            class="group rounded-[3rem] border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-10 shadow-sm transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] hover:-translate-y-4"
          >
            <div
              :class="`mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl text-3xl shadow-inner ${point.color}`"
            >
              {{ point.i }}
            </div>
            <h3
              class="mb-4 text-xl font-black text-slate-900 dark:text-white tracking-tight italic"
            >
              {{ point.t }}
            </h3>
            <p
              class="text-base leading-relaxed text-slate-500 dark:text-slate-400 font-medium tracking-tight"
            >
              {{ point.d }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="px-6 py-20 bg-slate-50 dark:bg-slate-900/40">
      <div
        class="mx-auto max-w-6xl rounded-[4rem] bg-gradient-to-br from-slate-900 to-black p-12 md:p-20 text-center relative overflow-hidden border border-slate-800 shadow-2xl"
      >
        <div
          class="absolute -top-20 -right-20 w-80 h-80 bg-emerald-500/10 blur-[100px]"
        ></div>

        <h2
          class="relative text-4xl md:text-6xl font-black text-white tracking-tighter leading-none mb-6"
        >
          Siap Berkolaborasi?
        </h2>
        <p
          class="relative text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium"
        >
          Mari bersama-sama membangun ekosistem digital yang ramah budaya dan
          inklusif.
        </p>
        <button
          class="group relative cursor-pointer px-10 py-5 bg-white text-black font-black rounded-2xl transition-all hover:scale-105 active:scale-95 overflow-hidden"
        >
          <span class="relative z-10 uppercase tracking-widest text-sm"
            >Hubungi Kami</span
          >
          <div
            class="absolute inset-0 bg-emerald-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
          ></div>
        </button>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* Menghaluskan transisi antar mode */
main {
  font-family:
    "Inter", sans-serif; /* Pastikan import font ini di project anda */
}

h1,
h2,
h3,
h4 {
  letter-spacing: -0.05em;
}
</style>
