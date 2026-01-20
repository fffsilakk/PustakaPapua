<script setup lang="ts">
import { onMounted } from "vue";
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// Jika Anda menggunakan Vue Router, aktifkan import di bawah ini:
// import { useRouter } from 'vue-router';

const cultureItems = [
  {
    title: "Tarian Adat",
    desc: "Gerak ritmis penuh makna leluhur.",
    img: "https://images.unsplash.com/photo-1590731422709-775677095493?q=80&w=800",
    url: "/tarianAdat", // Link tujuan
  },
  {
    title: "Bahasa Daerah",
    desc: "Ratusan dialek unik tanah Papua.",
    img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=800",
    url: "/bahasaDaerah",
  },
  {
    title: "Alat Musik",
    desc: "Suara tifa yang menggetarkan jiwa.",
    img: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=800",
    url: "/alatMusik",
  },
  {
    title: "Cerita Rakyat",
    desc: "Legenda luhur yang abadi.",
    img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800",
    url: "/ceritaRakyat",
  },
  {
    title: "Tempat Wisata",
    desc: "Situs bersejarah penuh filosofi.",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800",
    url: "/tempatWisata",
  },
];

onMounted(() => {
  new Swiper(".swiper-budaya", {
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 1.2,
    spaceBetween: 24,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".next-budaya",
      prevEl: ".prev-budaya",
    },
    pagination: {
      el: ".pagination-budaya",
      clickable: true,
    },
    breakpoints: {
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
      1280: { slidesPerView: 4 },
    },
  });
});
</script>

<template>
  <section
    class="py-20 transition-colors duration-500 bg-slate-50 dark:bg-slate-950 overflow-hidden"
  >
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div
        class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
      >
        <div class="relative">
          <span
            class="text-orange-500 font-bold uppercase tracking-[0.3em] text-xs mb-2 block"
            >Culture & Heritage</span
          >
          <h2
            class="text-4xl md:text-5xl font-black text-slate-900 dark:text-white transition-colors"
          >
            Warisan
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400"
              >Budaya</span
            >
          </h2>
        </div>

        <div class="flex gap-4">
          <button
            class="prev-budaya w-12 h-12 rounded-full flex items-center justify-center bg-white/80 dark:bg-slate-800/50 backdrop-blur-md border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 shadow-lg hover:bg-orange-500 hover:text-white transition-all cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
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
            class="next-budaya w-12 h-12 rounded-full flex items-center justify-center bg-white/80 dark:bg-slate-800/50 backdrop-blur-md border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 shadow-lg hover:bg-orange-500 hover:text-white transition-all cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
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
              class="group relative bg-white dark:bg-slate-900 rounded-[2rem] p-3 border border-slate-200 dark:border-slate-800 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(249,115,22,0.2)] hover:border-orange-500/50"
            >
              <div
                class="relative h-64 w-full overflow-hidden rounded-[1.5rem] mb-6"
              >
                <img
                  :src="item.img"
                  :alt="item.title"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                />
              </div>

              <div class="px-4 pb-6">
                <h3
                  class="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-orange-500 transition-colors"
                >
                  {{ item.title }}
                </h3>
                <p
                  class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed"
                >
                  {{ item.desc }}
                </p>

                <div class="mt-6 flex items-center justify-between">
                  <span
                    class="h-[2px] w-12 bg-orange-500 group-hover:w-20 transition-all"
                  ></span>

                  <a
                    :href="item.url"
                    class="text-xs font-black uppercase tracking-tighter text-slate-400 group-hover:text-orange-500 transition-colors cursor-pointer"
                  >
                    Explore Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="pagination-budaya !static mt-16 !flex justify-center"></div>
    </div>
  </section>
</template>
