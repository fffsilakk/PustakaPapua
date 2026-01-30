<script setup lang="ts">
import { onMounted } from "vue";
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
const cultureItems = [
  {
    title: "Tarian Adat",
    desc: "Gerak ritmis penuh makna leluhur tanah Papua.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrFsqaGI_xFnkt-cSaoFle6_4ghNoHamsHng&shttps://papuapegunungan.kpu.go.id/public/papuapegunungan/images/1760844590_76a14218db4d3c05c85f.jpg",
    url: "/tarianAdat",
    tag: "Seni",
  },
  {
    title: "Bahasa Daerah",
    desc: "Ratusan dialek unik yang menjadi identitas bangsa.",
    img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=800",
    url: "/bahasaDaerah",
    tag: "Bahasa",
  },
  {
    title: "Alat Musik",
    desc: "Suara tifa yang menggetarkan jiwa di setiap upacara.",
    img: "https://i0.wp.com/antarpapua.com/wp-content/uploads/2024/04/Tifa-future-image.webp?resize=400%2C225&ssl=1",
    url: "/alatMusik",
    tag: "Musik",
  },
  {
    title: "Cerita Rakyat",
    desc: "Legenda luhur yang abadi diwariskan turun temurun.",
    img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800",
    url: "/ceritaRakyat",
    tag: "Sastra",
  },
  {
    title: "Situs Wisata",
    desc: "Keindahan alam dan sejarah yang tak ternilai.",
    img: "https://www.indonesia.travel/link/e1f6a3997dff4bb6888a384fbe715792.aspx",
    url: "/wisata",
    tag: "Alam",
  },
];

onMounted(() => {
  new Swiper(".swiper-budaya", {
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 1.2,
    spaceBetween: 16,
    loop: true,
    autoplay: { delay: 3500, disableOnInteraction: false },
    navigation: { nextEl: ".next-budaya", prevEl: ".prev-budaya" },
    pagination: { el: ".pagination-budaya", clickable: true },
    breakpoints: {
      640: { slidesPerView: 2.2, spaceBetween: 20 },
      1024: { slidesPerView: 3.2, spaceBetween: 24 },
      1280: { slidesPerView: 4.2, spaceBetween: 24 },
    },
  });
});
</script>

<template>
  <section
    class="py-24 bg-white dark:bg-slate-900 rounded-2xl overflow-hidden relative"
  >
    <div class="container mx-auto px-6">
      <div
        class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
      >
        <div class="relative">
          <span
            class="text-orange-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-2 block"
            >Culture & Heritage</span
          >
          <h2
            class="text-4xl font-black text-slate-900 dark:text-white tracking-tighter"
          >
            Warisan
            <span class="text-orange-500 italic font-light">Budaya</span>
          </h2>
        </div>

        <div class="flex gap-3">
          <button
            class="prev-budaya w-12 h-12 rounded-2xl flex items-center justify-center bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all cursor-pointer shadow-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            class="next-budaya w-12 h-12 rounded-2xl flex items-center justify-center bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all cursor-pointer shadow-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <div class="swiper swiper-budaya !overflow-visible">
        <div class="swiper-wrapper">
          <div
            v-for="(item, index) in cultureItems"
            :key="index"
            class="swiper-slide h-auto"
          >
            <div
              class="group relative bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 overflow-hidden flex flex-col h-full"
            >
              <div class="relative h-48 overflow-hidden">
                <div
                  class="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-[9px] font-black text-orange-600 uppercase tracking-widest shadow-sm"
                >
                  {{ item.tag }}
                </div>
                <img
                  :src="item.img"
                  :alt="item.title"
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                ></div>
              </div>

              <div class="p-6 flex flex-col flex-grow">
                <h3
                  class="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-orange-500 transition-colors"
                >
                  {{ item.title }}
                </h3>
                <p
                  class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2 mb-6 flex-grow"
                >
                  {{ item.desc }}
                </p>

                <div
                  class="pt-4 border-t border-slate-50 dark:border-slate-800"
                >
                  <a
                    :href="item.url"
                    class="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-orange-500 transition-all"
                  >
                    <span>Explore Details</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="pagination-budaya !flex justify-center mt-12"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Swiper Pagination Style */
:deep(.swiper-pagination-bullet) {
  width: 24px;
  height: 4px;
  border-radius: 2px;
  background: #e2e8f0;
  opacity: 1;
  transition: all 0.3s;
}

:deep(.swiper-pagination-bullet-active) {
  background: #f97316 !important;
  width: 40px;
}

/* Menjaga teks agar tetap rapi maksimal 2 baris */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Menghindari glitch overflow saat animasi hover */
.swiper-slide {
  padding: 10px 0;
}
</style>
