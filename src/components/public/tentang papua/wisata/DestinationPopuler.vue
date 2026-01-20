<script setup lang="ts">
import { onMounted } from "vue";
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Jika gambar ada di src/assets, gunakan import.
// Jika di public/Destination, path yang Anda gunakan sudah benar.
const items = [
  {
    title: "Teluk Cendrawasih",
    loc: "Wondama, Papua",
    img: "/Destination/telukCendrawaiWondama.png",
  },
  {
    title: "Pantai Tablanusu",
    loc: "Jayapura, Papua",
    img: "https://pesonapapua.com/wp-content/uploads/2025/03/trepelin.com_-1.jpg",
  },
  {
    title: "Kali Biru Genyem",
    loc: "Jayapura, Papua",
    img: "https://static.promediateknologi.id/crop/0x0:0x0/x/photo/p2/32/2024/04/27/Blue-River-4112924618.png",
  },
  {
    title: "Telaga Biru Samares",
    loc: "Biak, Papua",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/15/8b/dc/d8/telaga-samares.jpg",
  },
  {
    title: "Raja Ampat",
    loc: "Papua Barat",
    img: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?q=80&w=1000",
  },
];

onMounted(() => {
  new Swiper(".swiper-container-1", {
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".next-button-1",
      prevEl: ".prev-button-1",
    },
    pagination: {
      el: ".swiper-pagination",
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
    class="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-5 lg:py-16"
  >
    <div class="mb-8 flex flex-row justify-between items-end">
      <div class="max-w-xl sm:text-left">
        <h2
          class="text-2xl font-bold tracking-tight text-gray-900 dark:text-amber-50 sm:text-4xl"
        >
          Destinasi Populer
        </h2>
        <p class="text-gray-500 mt-2">
          Jelajahi keajaiban alam di tanah Papua.
        </p>
      </div>

      <div class="flex pb-1">
        <button
          class="prev-button-1 rounded-full border border-gray-300 py-2 px-2 mr-2 text-gray-400 transition hover:bg-gray-900 hover:text-white hover:border-gray-900 cursor-pointer z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          class="next-button-1 rounded-full border border-gray-800 py-2 px-2 text-gray-800 transition hover:bg-gray-900 hover:text-white hover:border-gray-900 cursor-pointer z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>

    <div class="swiper swiper-container-1 !overflow-hidden">
      <div class="swiper-wrapper">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="swiper-slide h-auto"
        >
          <div
            class="group relative block overflow-hidden rounded-2xl bg-gray-100 min-h-[420px] shadow-sm transition-all"
          >
            <img
              :src="item.img"
              :alt="item.title"
              class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              @error="
                (e: any) =>
                  (e.target.src =
                    'https://via.placeholder.com/400x600?text=No+Image')
              "
            />

            <div
              class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
            ></div>

            <div
              class="absolute inset-0 flex flex-col justify-end p-6 text-white"
            >
              <h3 class="text-xl font-bold leading-tight">
                {{ item.title }}
              </h3>
              <div class="flex items-center gap-1 mt-2 opacity-90">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                </svg>
                <p class="text-sm font-medium">{{ item.loc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="swiper-pagination !relative !bottom-0 text-left mt-8"></div>
  </section>
</template>

<style scoped>
.prev-button-1,
.next-button-1 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
}

:deep(.swiper-pagination-bullet) {
  width: 8px;
  height: 8px;
  background: #d1d5db;
  opacity: 1;
}

:deep(.swiper-pagination-bullet-active) {
  background: #111827;
  width: 24px;
  border-radius: 4px;
  transition: all 0.3s ease;
}
</style>
