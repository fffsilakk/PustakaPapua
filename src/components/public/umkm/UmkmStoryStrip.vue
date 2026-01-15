<template>
  <section class="relative py-20 overflow-hidden bg-[#FAF9F6]">
    <div
      class="absolute inset-0 opacity-40 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"
    ></div>

    <div class="max-w-6xl mx-auto px-6 relative">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-5 space-y-8">
          <div
            class="inline-block px-4 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 text-[10px] font-bold uppercase tracking-[0.3em] rounded-sm transform -rotate-1"
          >
            Kisah Dari Timur
          </div>

          <h2
            class="text-5xl md:text-6xl font-serif font-black text-slate-900 leading-tight"
          >
            Napas Ekonomi <br />
            <span class="text-orange-600 italic">Rumah Honai.</span>
          </h2>

          <div class="relative pl-8 border-l-2 border-orange-200">
            <p
              class="text-lg text-slate-600 leading-relaxed font-medium italic"
            >
              "Setiap anyaman Noken bukan sekadar tas, ia adalah rahim kedua
              bagi mama-mama di pegunungan tengah, tempat mereka menyimpan
              harapan dan masa depan."
            </p>
          </div>
        </div>

        <div class="lg:col-span-7 grid grid-cols-2 gap-4 relative">
          <div class="pt-12">
            <div
              class="relative group overflow-hidden rounded-lg shadow-2xl transform -rotate-2 hover:rotate-0 transition-all duration-500"
            >
              <img
                src="https://cdn.grid.id//crop/0x0:0x0/700x0/photo/2019/12/09/62300915.jpg"
                alt="Pengrajin"
                class="w-full aspect-[3/4] object-cover"
              />
              <div
                class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"
              ></div>
            </div>
          </div>

          <div class="space-y-4">
            <div
              class="relative overflow-hidden rounded-lg shadow-xl transform rotate-3 hover:rotate-0 transition-all duration-500"
            >
              <img
                src="https://images.tokopedia.net/blog-tokopedia-com/uploads/2018/09/Oleh-oleh-Khas-Papua-Barat-4-Detik.jpg"
                alt="Produk"
                class="w-full aspect-square object-cover"
              />
            </div>

            <div
              class="bg-white p-6 shadow-xl border border-slate-100 rounded-sm transform -rotate-1 relative"
            >
              <div
                class="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full shadow-inner"
              ></div>

              <div class="text-center space-y-2">
                <p class="text-3xl font-black text-slate-900">
                  {{ totalUmkm }}+
                </p>
                <p
                  class="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight"
                >
                  Keluarga Pengrajin <br />
                  Terkoneksi
                </p>
              </div>
            </div>
          </div>

          <div class="absolute -bottom-6 right-10 hidden md:block">
            <p
              class="font-handwriting text-2xl text-orange-600 opacity-70 -rotate-12"
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

const store = useUmkmStore();
const totalUmkm = computed(() => store.products.length);
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,900;1,700&family=Reenie+Beanie&display=swap");

.font-serif {
  font-family: "Playfair Display", serif;
}

.font-handwriting {
  font-family: "Reenie Beanie", cursive;
}
</style>
