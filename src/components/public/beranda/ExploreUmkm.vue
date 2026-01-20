<template>
  <section
    class="px-4 pt-16 pb-24 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-36"
  >
    <div class="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:items-center">
      <div
        class="z-20 p-8 bg-slate-50 dark:bg-slate-900 rounded-3xl sm:p-12 lg:sticky lg:top-10"
        data-aos="fade-right"
      >
        <div class="max-w-md mx-auto text-center lg:text-left">
          <header>
            <h2
              class="text-3xl font-black text-gray-900 sm:text-4xl dark:text-white leading-tight"
            >
              Produk <span class="text-emerald-500">Lokal</span>
            </h2>

            <p
              class="mt-4 text-gray-500 dark:text-gray-400 leading-relaxed text-sm"
            >
              Produk unggulan dari UMKM lokal yang mencerminkan kekayaan budaya
              Papua. Kualitas terbaik langsung ke tangan Anda.
            </p>
          </header>
          <router-link to="/umkm">
            <a
              class="group inline-flex items-center px-8 py-4 mt-8 text-white transition-all bg-emerald-500 rounded-full hover:bg-emerald-600 hover:shadow-xl focus:outline-none"
            >
              <span class="text-sm font-bold"> Belanja Sekarang </span>
              <svg
                class="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1"
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
          </router-link>
        </div>
      </div>

      <div
        class="lg:col-span-2 relative"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        <div class="swiper swiper-produk !overflow-hidden rounded-3xl">
          <div class="swiper-wrapper">
            <div
              v-for="(item, index) in products"
              :key="index"
              class="swiper-slide h-auto"
            >
              <div
                class="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-slate-700 transition-all hover:shadow-lg"
              >
                <div class="relative overflow-hidden aspect-square">
                  <img
                    :src="item.img"
                    :alt="item.title"
                    class="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                  <span
                    class="absolute right-3 top-3 rounded-full bg-white/90 backdrop-blur-sm py-1 px-3 text-[10px] font-bold text-emerald-600"
                  >
                    {{ item.category }}
                  </span>
                </div>

                <div class="p-4 flex justify-between items-center">
                  <div>
                    <h3
                      class="font-bold text-gray-900 dark:text-white group-hover:text-emerald-500 transition-colors"
                    >
                      {{ item.title }}
                    </h3>
                    <p class="text-sm text-gray-500">{{ item.price }}</p>
                  </div>
                  <button
                    class="p-2 rounded-lg bg-emerald-50 text-emerald-500 hover:bg-emerald-500 hover:text-white transition-all"
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
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import Swiper from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import AOS from "aos";

const products = [
  {
    title: "Batik Papua",
    category: "Karya Seni",
    price: "Rp 150.000",
    img: "https://awsimages.detik.net.id/community/media/visual/2023/10/02/shutterstock-2_43.jpeg?w=1200",
  },
  {
    title: "Ukiran Asmat",
    category: "Karya Seni",
    price: "Rp 1.500.000",
    img: "https://indonesiakaya.com/wp-content/uploads/2020/10/Ukiran_Asmat_adalah_sebuah_perpaduan_antara_kreatifitas_kekuatan_ketrampilan_ketelitian_dan_keindahan_yang_bersatu_menciptakan_sebuah_kesempurnaan_-1.jpg",
  },
  {
    title: "Martabak Sagu",
    category: "Kuliner",
    price: "Rp 35.000",
    img: "https://www.indonesia.travel/contentassets/1a5b44d788d046eabbc3222ec04b5d9e/martabak-sagu.jpg",
  },
  {
    title: "Noken",
    category: "Karya Seni",
    price: "Rp 50.000",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuEtZT4QmyBF3HC8VTBjHVnLl6N4BWA3GUrw&s",
  },
];

onMounted(() => {
  AOS.init({ duration: 1000, once: true });

  new Swiper(".swiper-produk", {
    modules: [Navigation, Autoplay],
    slidesPerView: 1.2,
    spaceBetween: 20,
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false },
    breakpoints: {
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 2.5 }, // Mengatur agar pas di area kanan tanpa luber ke kiri
    },
  });
});
</script>

<style scoped>
/* Penting: Memastikan swiper tidak keluar jalur */
.swiper-produk {
  width: 100%;
  position: relative;
}

/* Agar card tidak terlihat nempel di container */
.swiper-slide {
  padding: 5px;
}
</style>
