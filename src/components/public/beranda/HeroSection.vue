<template>
  <section
    class="relative min-h-[90vh] flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 px-6 md:px-12 lg:px-20 xl:px-32 py-16 overflow-hidden bg-[#fcfdfe] dark:bg-[#020617] transition-colors duration-500"
  >
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute -top-24 -right-24 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-[120px] dark:bg-emerald-500/10"
      ></div>
    </div>

    <div
      class="relative flex flex-col items-center md:items-start max-w-xl z-20"
      data-aos="fade-right"
    >
      <div
        class="flex items-center gap-3 p-1 pr-4 rounded-full border shadow-sm bg-white/80 border-slate-200 dark:bg-slate-900/50 dark:border-slate-800"
      >
        <div class="flex -space-x-2 pl-1">
          <img
            v-for="i in [1, 2, 3]"
            :key="i"
            class="size-7 rounded-full border-2 border-white dark:border-slate-900 object-cover"
            :src="`https://i.pravatar.cc/100?img=${i + 15}`"
          />
        </div>
        <p
          class="text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-tight"
        >
          Komunitas Papua
        </p>
      </div>

      <h1
        class="mt-6 text-center md:text-left text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-slate-900 dark:text-white"
      >
        Jelajahi,<br />
        <span class="text-emerald-600 dark:text-emerald-400"
          >Pustaka Papua.</span
        >
      </h1>

      <p
        class="mt-4 text-center md:text-left text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed"
      >
        Solusi edukasi digital tanpa hambatan sinyal. Simpan modul belajar,
        akses kapan saja, bahkan di daerah blank spot sekalipun.
      </p>

      <div
        class="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto"
      >
        <RouterLink
          to="/belajar"
          class="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl px-8 h-12 w-full sm:w-auto transition-all active:scale-95 shadow-md shadow-emerald-200 dark:shadow-none"
        >
          Mulai Belajar
        </RouterLink>
        <RouterLink
          to="/budaya"
          class="inline-flex items-center justify-center border-2 border-slate-200 text-slate-700 bg-white hover:bg-slate-50 font-bold rounded-xl px-8 h-12 w-full sm:w-auto transition-all dark:border-slate-800 dark:text-slate-300 dark:bg-transparent"
        >
          Eksplor Budaya
        </RouterLink>
      </div>
    </div>

    <div
      class="relative w-full md:w-5/12 lg:w-1/2 flex justify-center z-20"
      data-aos="zoom-in"
    >
      <div class="relative w-full max-w-[500px] group">
        <div
          class="relative rounded-t-2xl border-x-[10px] border-t-[10px] border-slate-800 bg-slate-800 shadow-2xl overflow-hidden"
        >
          <div
            class="aspect-[16/10] bg-white dark:bg-slate-900 overflow-hidden relative"
          >
            <div
              class="absolute top-0 w-full h-6 bg-slate-100 dark:bg-slate-800 flex items-center px-3 gap-1.5 border-b dark:border-slate-700"
            >
              <div class="h-2 w-2 rounded-full bg-red-400"></div>
              <div class="h-2 w-2 rounded-full bg-amber-400"></div>
              <div class="h-2 w-2 rounded-full bg-emerald-400"></div>
              <div
                class="ml-4 h-3 w-32 bg-white dark:bg-slate-700 rounded-sm"
              ></div>
            </div>

            <div class="mt-6 p-4">
              <div
                class="h-3 w-1/2 bg-slate-200 dark:bg-slate-700 rounded-full mb-4"
              ></div>
              <div class="grid grid-cols-2 gap-3">
                <div
                  class="aspect-video bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800/30 flex items-center justify-center"
                >
                  <!-- <span class="text-2xl">📖</span> -->
                  <div
                    class="flex h-15 w-15 items-center justify-center transition-all duration-300"
                  >
                    <img
                      src="/Logo/Logoo.png"
                      alt="Logo"
                      class="h-10 w-full transition-transform hover:rotate-3"
                    />
                    <span
                      class="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent dark:from-emerald-400 dark:to-cyan-400"
                    >
                      Pustaka
                      <span class="block -mt-2"> Papua </span>
                    </span>
                  </div>
                </div>
                <div
                  class="aspect-video bg-cyan-50 dark:bg-cyan-900/20 rounded-lg border border-cyan-100 dark:border-cyan-800/30 flex items-center justify-center"
                >
                  <div
                    class="flex h-full w-full items-center justify-center transition-all duration-300"
                  >
                    <div
                      class="flex h-15 w-15 items-center justify-center transition-all duration-300"
                    >
                      <img
                        src="/assets/cendrawasi.png"
                        alt="NareDev"
                        class="h-10 w-full transition-transform hover:rotate-6"
                      />
                      <h3>Cendrawasih</h3>
                    </div>
                  </div>
                  <!-- <span class="text-2xl">🏺</span> -->
                </div>
              </div>
              <div class="mt-4 space-y-2">
                <div
                  class="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full"
                ></div>
                <div
                  class="h-2 w-3/4 bg-slate-100 dark:bg-slate-800 rounded-full"
                ></div>
              </div>
            </div>

            <div
              class="absolute bottom-4 right-4 bg-emerald-600 text-[10px] font-bold text-white px-2 py-1 rounded shadow-lg animate-pulse"
            >
              OFFLINE MODE READY
            </div>
          </div>
        </div>
        <div class="relative h-3 w-full bg-slate-700 rounded-b-xl"></div>
        <div
          class="absolute left-1/2 -translate-x-1/2 top-full w-24 h-1.5 bg-slate-600 rounded-b-md"
        ></div>

        <div
          class="absolute -inset-4 bg-emerald-500/10 blur-2xl rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        ></div>
      </div>
    </div>
  </section>
</template>
