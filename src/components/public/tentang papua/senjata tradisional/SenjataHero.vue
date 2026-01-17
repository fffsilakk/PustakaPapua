<script setup lang="ts">
// Pastikan @vueuse/motion sudah terinstall & terdaftar di main.ts
</script>

<template>
  <section class="relative px-4 py-10 sm:px-6 lg:px-8 mt-3">
    <div
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="group relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-1 shadow-xl dark:border-slate-800 dark:bg-slate-950"
    >
      <div
        class="relative overflow-hidden rounded-[2.3rem] bg-emerald-900 px-6 py-10 sm:px-12 sm:py-16 text-white"
      >
        <div class="relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div class="space-y-8">
            <div
              v-motion
              :initial="{ opacity: 0, x: -20 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 200 } }"
              class="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-100"
            >
              <span class="relative flex h-2 w-2">
                <span
                  class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
                ></span>
                <span
                  class="relative inline-flex rounded-full h-2 w-2 bg-emerald-300"
                ></span>
              </span>
              Cultural Heritage
            </div>

            <div class="space-y-4">
              <h1
                class="text-4xl font-extrabold tracking-tight sm:text-6xl lg:leading-[1.1]"
              >
                Senjata <br />
                <span class="text-emerald-400">Tradisional</span>
              </h1>
              <p class="max-w-md text-lg leading-relaxed text-slate-300">
                Simbol keberanian dan harga diri masyarakat Papua. Dari busur
                kayu hingga belati tulang, setiap ukiran memiliki cerita
                kearifan yang mendalam.
              </p>
            </div>

            <div class="flex flex-wrap gap-4 items-center">
              <button
                class="rounded-xl bg-emerald-500 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-emerald-400 hover:shadow-lg active:scale-95"
              >
                Jelajahi Koleksi
              </button>

              <div
                class="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 p-2 pr-4"
              >
                <div class="flex -space-x-2">
                  <div
                    v-for="i in 3"
                    :key="i"
                    class="h-8 w-8 rounded-full border-2 border-emerald-900 bg-emerald-200"
                  />
                </div>
                <p class="text-[11px] font-bold text-emerald-100">
                  1k+ Siswa Belajar
                </p>
              </div>
            </div>
          </div>

          <div class="relative flex justify-center lg:justify-end">
            <div
              v-motion
              :initial="{ opacity: 0, scale: 0.9 }"
              :enter="{
                opacity: 1,
                scale: 1,
                transition: { delay: 400, duration: 800 },
              }"
              class="relative z-10 w-full max-w-[380px]"
            >
              <div
                class="relative overflow-hidden rounded-[2rem] border-4 border-white/10 bg-slate-800 shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1629117621151-546051515286?q=80&w=2000&auto=format&fit=crop"
                  alt="Senjata Papua"
                  class="h-[450px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div
                  class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6"
                >
                  <p
                    class="text-[10px] font-black uppercase tracking-widest text-emerald-400"
                  >
                    Artifact Spotlight
                  </p>
                  <h3 class="text-xl font-bold text-white">
                    Belati Tulang Kasuari
                  </h3>
                </div>
              </div>

              <div
                v-motion
                :initial="{ y: 0 }"
                :enter="{
                  y: 15,
                  transition: {
                    repeat: Infinity,
                    repeatType: 'reverse',
                    duration: 2500,
                  },
                }"
                class="absolute -right-6 -top-6 hidden rounded-2xl bg-white p-4 shadow-xl sm:block dark:bg-slate-800"
              >
                <div class="flex items-center gap-3">
                  <div
                    class="rounded-lg bg-emerald-50 p-2 text-xl dark:bg-emerald-500/20"
                  >
                    🏹
                  </div>
                  <div>
                    <p class="text-[9px] font-black uppercase text-slate-400">
                      Origin
                    </p>
                    <p class="text-xs font-bold text-slate-800 dark:text-white">
                      Asli Papua
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
