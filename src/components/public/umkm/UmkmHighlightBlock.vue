<script setup lang="ts">
// Data Dummy untuk Statistik Minimalis
const stats = [
  { label: "Pengrajin Lokal", value: "150+", icon: "🎨" },
  { label: "Produk Otentik", value: "500+", icon: "🏺" },
  { label: "Wilayah Adat", value: "7", icon: "🗺️" },
];
</script>

<template>
  <main class="min-h-screen bg-white rounded-2xl dark:bg-slate-800">
    <section class="relative px-4 mt-16 pt-3 pb-12 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-4xl text-center">
        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0 }"
          class="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400"
        >
          Pemberdayaan Ekonomi
        </div>
        <h1
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 100 } }"
          class="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl"
        >
          Mendukung Karya <br />
          <span class="text-emerald-600">Putra-Putri Papua</span>
        </h1>
        <p
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
          class="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400"
        >
          Kami hadir untuk menjembatani kearifan lokal dengan pasar modern,
          memastikan setiap ukiran, anyaman, dan kopi dari tanah Papua
          mendapatkan apresiasi yang layak.
        </p>
      </div>
    </section>

    <section
      class="px-4 py-12 sm:px-6 lg:px-8 shadow-2xl dark:shadow-2xl rounded-2xl"
    >
      <div class="mx-auto max-w-6xl">
        <div class="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div
            v-motion
            :initial="{ opacity: 0, scale: 0.95 }"
            :enter="{ opacity: 1, scale: 1, transition: { delay: 300 } }"
            class="relative overflow-hidden rounded-[2.5rem] bg-slate-100 shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop"
              alt="Handicraft Papua"
              class="aspect-[4/5] w-full object-cover"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
            ></div>
            <div class="absolute bottom-8 left-8 text-white">
              <p class="text-xs font-bold uppercase tracking-widest opacity-80">
                Produksi Lokal
              </p>
              <h3 class="text-xl font-bold">Noken Serat Kayu Asli</h3>
            </div>
          </div>

          <div class="space-y-8">
            <div class="space-y-4">
              <h2 class="text-2xl font-bold text-slate-900 dark:text-white">
                Visi Kami
              </h2>
              <p
                class="text-base leading-relaxed text-slate-600 dark:text-slate-400"
              >
                UMKM Papua bukan sekadar tentang perdagangan, melainkan tentang
                menjaga martabat budaya. Setiap produk yang dihasilkan oleh
                mama-mama di pasar atau pemuda di sanggar seni membawa cerita
                tentang tanah, hutan, dan leluhur.
              </p>
              <p
                class="text-base leading-relaxed text-slate-600 dark:text-slate-400"
              >
                Melalui platform ini, kami berkomitmen untuk meningkatkan
                literasi digital para pelaku UMKM agar mampu bersaing secara
                global tanpa menghilangkan nilai-nilai tradisi.
              </p>
            </div>

            <div
              class="grid grid-cols-3 gap-4 border-t border-slate-100 pt-8 dark:border-slate-800"
            >
              <div v-for="stat in stats" :key="stat.label" class="text-center">
                <p class="text-xl mb-1">{{ stat.icon }}</p>
                <h4 class="text-xl font-bold text-slate-900 dark:text-white">
                  {{ stat.value }}
                </h4>
                <p
                  class="text-[10px] font-bold uppercase tracking-tighter text-slate-400"
                >
                  {{ stat.label }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-slate-50/50 py-16 dark:bg-slate-950/30">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="mb-12 text-center">
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white">
            Mengapa Memilih Produk UMKM Papua?
          </h2>
        </div>

        <div class="grid gap-6 md:grid-cols-3">
          <div
            v-for="(point, i) in [
              {
                t: '100% Organik',
                d: 'Bahan baku diambil langsung dari alam Papua secara berkelanjutan.',
                i: '🌿',
              },
              {
                t: 'Pemberdayaan',
                d: 'Setiap pembelian mendukung kesejahteraan pengrajin lokal secara langsung.',
                i: '🤝',
              },
              {
                t: 'Warisan Dunia',
                d: 'Memiliki produk Papua berarti memiliki potongan sejarah budaya dunia.',
                i: '🌎',
              },
            ]"
            :key="i"
            class="rounded-3xl border border-slate-100 bg-white p-8 transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
          >
            <div class="mb-4 text-3xl">{{ point.i }}</div>
            <h3 class="mb-2 font-bold text-slate-900 dark:text-white">
              {{ point.t }}
            </h3>
            <p
              class="text-sm leading-relaxed text-slate-500 dark:text-slate-400"
            >
              {{ point.d }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- 
    <section class="px-4 py-20 sm:px-6 lg:px-8">
      <div
        class="mx-auto max-w-4xl rounded-[3rem] bg-emerald-600 px-8 py-12 text-center text-white"
      >
        <h2 class="text-2xl font-bold sm:text-3xl">
          Jadilah Bagian dari Perjalanan Kami
        </h2>
        <p class="mt-4 text-emerald-50">
          Mari berkolaborasi untuk memajukan ekonomi kreatif di ufuk timur
          Indonesia.
        </p>
        <button
          class="mt-8 rounded-2xl bg-white px-8 py-4 text-sm font-bold text-emerald-700 transition-all hover:bg-emerald-50 active:scale-95"
        >
          Hubungi Kami Sekarang
        </button>
      </div>
    </section> -->
  </main>
</template>
