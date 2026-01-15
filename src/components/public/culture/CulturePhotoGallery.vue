<template>
  <section class="max-w-6xl mx-auto px-6 py-16">
    <div class="flex items-center gap-4 mb-10" data-aos="fade-down">
      <div
        class="h-12 w-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
      <div>
        <h2
          class="text-3xl font-black tracking-tight text-slate-900 dark:text-white"
        >
          Galeri Budaya
        </h2>
        <p class="text-sm text-slate-500 dark:text-slate-400">
          Kumpulan visual tarian, alat musik, dan aksara adat
        </p>
      </div>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      <div
        v-for="(item, index) in galleryItems"
        :key="item.id"
        class="relative overflow-hidden rounded-3xl group cursor-pointer aspect-square bg-slate-100 dark:bg-slate-800"
        :data-aos="`zoom-in-up`"
        :data-aos-delay="index * 100"
        @click="openModal(item)"
      >
        <img
          :src="item.imageUrl"
          :alt="item.caption"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
        >
          <p class="text-white text-sm font-semibold leading-tight">
            {{ item.caption }}
          </p>
        </div>
      </div>
    </div>

    <div
      v-if="isModalOpen"
      class="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
      @click="closeModal"
    >
      <div
        class="relative max-w-3xl max-h-[90vh] overflow-hidden rounded-3xl shadow-2xl"
        @click.stop
      >
        <img
          :src="currentImage?.imageUrl"
          :alt="currentImage?.caption"
          class="w-full h-full object-contain"
        />
        <div
          class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-12 text-white"
        >
          <p class="text-lg font-bold">{{ currentImage?.caption }}</p>
          <p class="text-sm text-slate-300 mt-1">{{ currentImage?.origin }}</p>
        </div>
        <button
          @click="closeModal"
          class="absolute top-4 right-4 text-white text-2xl bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
        >
          &times;
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface GalleryItem {
  id: string;
  imageUrl: string;
  caption: string;
  origin: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    imageUrl: "",
    caption: "Tari Perang Asmat",
    origin: "Asmat, Papua Selatan",
  },
  {
    id: "2",
    imageUrl: "",
    caption: "Alat Musik Tifa",
    origin: "Berbagai Suku Papua",
  },
  {
    id: "3",
    imageUrl: "",
    caption: "Ukiran Kayu Motif Papua",
    origin: "Sentani, Papua",
  },
  {
    id: "4",
    imageUrl: "",
    caption: "Pakaian Adat Suku Dani",
    origin: "Lani Jaya, Pegunungan Tengah",
  },
  //   {
  //     id: "5",
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1613273187216-72c6e6d1e4e1?q=80&w=600",
  //     caption: "Rumah Adat Honai",
  //     origin: "Pegunungan Tengah, Papua",
  //   },
  //   {
  //     id: "6",
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1612803859089-68801f92e0e4?q=80&w=600",
  //     caption: "Aksara Lontara Papua",
  //     origin: "Papua Barat (Interpretasi Modern)",
  //   },
  //   {
  //     id: "7",
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1598476839634-9d5f72e6b0e8?q=80&w=600",
  //     caption: "Upacara Adat Bakar Batu",
  //     origin: "Wamena, Pegunungan Tengah",
  //   },
  //   {
  //     id: "8",
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1594732670733-4f11b6f0e4b7?q=80&w=600",
  //     caption: "Anyaman Noken Tradisional",
  //     origin: "Berbagai Suku Papua",
  //   },
];

const isModalOpen = ref(false);
const currentImage = ref<GalleryItem | null>(null);

const openModal = (item: GalleryItem) => {
  currentImage.value = item;
  isModalOpen.value = true;
  document.body.style.overflow = "hidden"; // Mencegah scroll body saat modal terbuka
};

const closeModal = () => {
  isModalOpen.value = false;
  currentImage.value = null;
  document.body.style.overflow = ""; // Mengembalikan scroll body
};
</script>

<style scoped>
/* No additional styles needed for masonry, Tailwind handles it! */
</style>
