<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

interface VideoBudaya {
  id: number;
  judul: string;
  kategori: "Tarian" | "Upacara" | "Dokumentasi";
  embedId: string;
  deskripsi: string;
  deskripsiLengkap: string;
  delay: string;
}

const daftarVideo = ref<VideoBudaya[]>([
  {
    id: 1,
    judul: "Tari Kontemporer Papua",
    kategori: "Tarian",
    embedId: "RDlEGG1cdgwuY&start_radio=1",
    deskripsi: "Eksplorasi gerakan dinamis pemuda Papua.",
    deskripsiLengkap:
      "Video ini menampilkan keindahan gerak tari kontemporer yang diadaptasi dari gerakan burung Cendrawasih, melambangkan kebanggaan rakyat Papua akan alamnya.",
    delay: "0",
  },
  {
    id: 2,
    judul: "Upacara Bakar Batu",
    kategori: "Upacara",
    embedId: "tRIof1HoSDE",
    deskripsi: "Simbol persaudaraan Pegunungan Tengah.",
    deskripsiLengkap:
      "Ritual Bakar Batu adalah salah satu tradisi terpenting di Papua yang bermakna sebagai tanda rasa syukur, silaturahmi, dan perdamaian antar suku.",
    delay: "200",
  },
  {
    id: 3,
    judul: "Keajaiban Raja Ampat",
    kategori: "Dokumentasi",
    embedId: "p2Di02xDxC0",
    deskripsi: "Pelestarian alam maritim pesisir Papua.",
    deskripsiLengkap:
      "Jelajahi keindahan bawah laut dunia di Raja Ampat, di mana kearifan lokal masyarakat dalam menjaga laut menjadi kunci utama kelestarian ekosistem.",
    delay: "400",
  },

  {
    id: 4,
    judul: "Festival Lembah Baliem",
    kategori: "Upacara",
    embedId: "1LQ3YZa7Nvw",
    deskripsi: "Pertemuan akbar suku-suku pegunungan.",
    deskripsiLengkap:
      "Festival budaya tertua di Papua yang menampilkan skenario perang antar suku sebagai bentuk pelestarian tradisi dan nilai persatuan masyarakat di Wamena.",
    delay: "400",
  },
  {
    id: 5,
    judul: "Rumah Tinggi Suku Korowai",
    kategori: "Dokumentasi",
    embedId: "YFqC5LPwBfg", // Contoh ID Video Korowai
    deskripsi: "Arsitektur unik di atas tajuk pohon.",
    deskripsiLengkap:
      "Melihat keajaiban teknik bangunan Suku Korowai yang membangun rumah di atas pohon setinggi 30-50 meter untuk menghindari binatang buas dan roh jahat.",
    delay: "0",
  },
]);

// State untuk Modal
const isModalOpen = ref(false);
const selectedVideo = ref<VideoBudaya | null>(null);

const openModal = (video: VideoBudaya) => {
  selectedVideo.value = video;
  isModalOpen.value = true;
  document.body.style.overflow = "hidden"; // Stop scroll saat modal buka
};

const closeModal = () => {
  isModalOpen.value = false;
  selectedVideo.value = null;
  document.body.style.overflow = "auto"; // Aktifkan scroll lagi
};

onMounted(() => {
  AOS.init({ duration: 1000, once: true });
});
</script>

<template>
  <section class="py-20 px-6 bg-slate-50 dark:bg-zinc-950">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16" data-aos="fade-down">
        <span
          class="text-orange-600 font-bold tracking-widest uppercase text-sm italic"
          >Mutiara Hitam</span
        >
        <h2
          class="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white mt-2"
        >
          Budaya Papua
        </h2>
        <div class="w-24 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
      >
        <div
          v-for="video in daftarVideo"
          :key="video.id"
          class="flex h-full"
          data-aos="fade-up"
          :data-aos-delay="video.delay"
        >
          <div
            class="bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-xl flex flex-col w-full border border-zinc-100 dark:border-zinc-800 hover:shadow-orange-500/10 transition-all duration-500 group"
          >
            <div class="aspect-video relative overflow-hidden bg-black">
              <iframe
                class="w-full h-full"
                :src="`https://www.youtube.com/embed/${video.embedId}?controls=0`"
                frameborder="0"
                allowfullscreen
              ></iframe>
              <div
                @click="openModal(video)"
                class="absolute inset-0 bg-transparent cursor-pointer z-20"
              ></div>
            </div>

            <div class="p-6 flex flex-col flex-grow">
              <span
                class="text-[10px] font-bold text-orange-600 uppercase tracking-widest mb-2"
                >{{ video.kategori }}</span
              >
              <h3 class="text-xl font-bold text-zinc-800 dark:text-white mb-3">
                {{ video.judul }}
              </h3>
              <p
                class="text-zinc-500 dark:text-zinc-400 text-sm mb-6 flex-grow"
              >
                {{ video.deskripsi }}
              </p>

              <button
                @click="openModal(video)"
                class="w-full py-3 bg-zinc-100 dark:bg-zinc-800 hover:bg-orange-600 hover:text-white text-zinc-700 dark:text-zinc-300 font-bold rounded-xl transition-all duration-300"
              >
                Lihat Detail
              </button>
            </div>
          </div>
        </div>
        <div class="flex h-full" data-aos="fade-up" data-aos-delay="200">
          <div
            class="bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 rounded-3xl overflow-hidden shadow-xl flex flex-col w-full border-2 border-dashed border-zinc-300 dark:border-zinc-700 items-center justify-center p-8 text-center group"
          >
            <div
              class="w-20 h-20 bg-white dark:bg-zinc-800 rounded-full flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-10 h-10 text-orange-600 animate-pulse"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <h3
              class="text-2xl font-black text-zinc-400 dark:text-zinc-500 mb-2 italic"
            >
              Coming Soon
            </h3>
            <p class="text-zinc-500 dark:text-zinc-500 text-sm">
              Sedang menyiapkan konten menarik lainnya tentang keajaiban
              Papua...
            </p>

            <div
              class="mt-8 px-6 py-2 border border-zinc-300 dark:border-zinc-700 rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-400"
            >
              Stay Tuned
            </div>
          </div>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <div
        v-if="isModalOpen"
        class="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-8"
      >
        <div
          class="absolute inset-0 bg-black/90 backdrop-blur-sm"
          @click="closeModal"
        ></div>

        <div
          class="relative bg-white dark:bg-zinc-900 w-full max-w-4xl max-h-[90vh] rounded-[2rem] overflow-hidden shadow-2xl flex flex-col"
          data-aos="zoom-in"
          data-aos-duration="300"
        >
          <button
            @click="closeModal"
            class="absolute top-4 right-4 z-50 p-2 bg-black/20 hover:bg-orange-600 rounded-full text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <div class="aspect-video w-full">
            <iframe
              v-if="selectedVideo"
              class="w-full h-full"
              :src="`https://www.youtube.com/embed/${selectedVideo.embedId}?autoplay=1`"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
            ></iframe>
          </div>

          <div class="p-6 md:p-10 overflow-y-auto">
            <div v-if="selectedVideo">
              <div class="flex items-center gap-3 mb-4">
                <span
                  class="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 text-xs font-bold rounded-full"
                  >{{ selectedVideo.kategori }}</span
                >
              </div>
              <h2
                class="text-3xl font-black text-zinc-900 dark:text-white mb-4"
              >
                {{ selectedVideo.judul }}
              </h2>
              <p class="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
                {{ selectedVideo.deskripsiLengkap }}
              </p>

              <a
                :href="`https://www.youtube.com/watch?v=${selectedVideo.embedId}`"
                target="_blank"
                class="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-2xl transition-all transform hover:scale-105"
              >
                Tonton di YouTube
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<style scoped>
/* Hilangkan scrollbar pada modal info jika terlalu panjang */
.overflow-y-auto::-webkit-scrollbar {
  width: 4px;
}
.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #ea580c;
  border-radius: 10px;
}
</style>
