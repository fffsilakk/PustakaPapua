<template>
  <section
    class="relative py-20 overflow-hidden rounded-4xl bg-[#FAF9F6] dark:bg-[#0B0F17] transition-colors duration-500"
  >
    <div
      class="absolute inset-0 opacity-40 dark:opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] dark:bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"
    ></div>

    <div class="max-w-6xl mx-auto px-6 relative">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-5 space-y-8" data-aos="fade-right">
          <div
            class="inline-block px-4 py-1 bg-orange-100 dark:bg-orange-500/20 text-orange-700 dark:text-orange-400 text-[10px] font-bold uppercase tracking-[0.3em] rounded-sm transform -rotate-1 border border-orange-200/50 dark:border-orange-500/30"
          >
            Kisah Dari Timur
          </div>

          <h2
            class="text-5xl md:text-6xl font-serif font-black text-slate-900 dark:text-slate-50 leading-tight"
          >
            Napas Ekonomi <br />
            <span class="text-orange-600 dark:text-orange-500 italic"
              >Rumah Honai.</span
            >
          </h2>

          <div
            class="relative pl-8 border-l-2 border-orange-200 dark:border-orange-500/40"
          >
            <p
              class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium italic"
            >
              "Setiap anyaman Noken bukan sekadar tas, ia adalah rahim kedua
              bagi mama-mama di pegunungan tengah, tempat mereka menyimpan
              harapan dan masa depan."
            </p>
          </div>
        </div>

        <div class="lg:col-span-7 grid grid-cols-2 gap-4 relative">
          <div class="pt-12" data-aos="zoom-in" data-aos-delay="100">
            <div
              class="relative group overflow-hidden rounded-lg shadow-2xl transform -rotate-2 hover:rotate-0 transition-all duration-500 border-4 border-white dark:border-slate-800"
            >
              <img
                src="https://cdn.grid.id//crop/0x0:0x0/700x0/photo/2019/12/09/62300915.jpg"
                alt="Pengrajin"
                class="w-full aspect-[3/4] object-cover"
              />
              <div
                class="absolute inset-0 bg-black/10 dark:bg-black/40 group-hover:bg-transparent transition-colors"
              ></div>
            </div>
          </div>

          <div class="space-y-4" data-aos="zoom-in" data-aos-delay="300">
            <div
              class="relative overflow-hidden rounded-lg shadow-xl transform rotate-3 hover:rotate-0 transition-all duration-500 border-4 border-white dark:border-slate-800"
            >
              <img
                src="https://images.tokopedia.net/blog-tokopedia-com/uploads/2018/09/Oleh-oleh-Khas-Papua-Barat-4-Detik.jpg"
                alt="Produk"
                class="w-full aspect-square object-cover"
              />
            </div>

            <div
              class="bg-white dark:bg-slate-800 p-6 shadow-xl border border-slate-100 dark:border-slate-700 rounded-sm transform -rotate-1 relative"
            >
              <div
                class="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-500 dark:bg-orange-600 rounded-full shadow-inner border-2 border-white dark:border-slate-800"
              ></div>

              <div class="text-center space-y-1">
                <p
                  class="text-3xl font-black text-slate-900 dark:text-white leading-none"
                >
                  {{ totalUmkm }}+
                </p>
                <p
                  class="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest leading-tight"
                >
                  Keluarga Pengrajin <br />
                  Terkoneksi
                </p>
              </div>
            </div>
          </div>

          <div class="absolute -bottom-10 right-10 hidden md:block">
            <p
              class="font-handwriting text-3xl text-orange-600 dark:text-orange-500 opacity-70 dark:opacity-50 -rotate-12 select-none"
            >
              Asli buatan tangan...
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useUmkmStore } from "../../../stores/umkmStore";

// Inisialisasi store untuk mengambil data produk secara dinamis
const store = useUmkmStore();
const totalUmkm = computed(() => store.products.length);
</script>

<style scoped>
/* Import font khusus untuk kesan Majalah & Tulisan Tangan */
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,900;1,700&family=Reenie+Beanie&display=swap");

.font-serif {
  font-family: "Playfair Display", serif;
}

.font-handwriting {
  font-family: "Reenie Beanie", cursive;
}

/* Transisi halus saat pindah mode gelap/terang */
section {
  transition: background-color 0.5s ease, color 0.5s ease;
}
</style>
