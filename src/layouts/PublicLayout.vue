<template>
  <!-- Modern Loading Screen -->
  <transition name="fade-out">
    <div
      v-if="isLoading"
      class="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-green-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-emerald-950"
    >
      <div class="absolute inset-0 overflow-hidden">
        <div
          class="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-200/30 dark:bg-emerald-600/10 rounded-full blur-3xl animate-pulse-slow"
        ></div>
        <div
          class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-200/30 dark:bg-green-600/10 rounded-full blur-3xl animate-pulse-slower"
        ></div>
      </div>

      <div class="relative z-10 flex flex-col items-center gap-6">
        <!-- Logo with Scale Animation -->
        <div class="relative">
          <!-- <img
            src="/Logo/Logo_NarDev.png"
            alt="NarDev Logo"
            class="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 animate-scale-bounce"
          /> -->
          <!-- Glow Effect -->
          <div
            class="absolute inset-0 bg-emerald-400/20 dark:bg-emerald-500/30 rounded-full blur-2xl animate-pulse"
          ></div>
        </div>

        <div class="text-center space-y-2">
          <h2
            class="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-white animate-fade-in-up"
          >
            PustakaPapua
          </h2>
          <!-- <p
            class="text-sm sm:text-base text-gray-600 dark:text-gray-400 animate-fade-in-up-delay"
          >
            Komunitas Pelajar Mahasiswa Yahukimo
          </p> -->
        </div>

        <div class="flex gap-2 mt-4">
          <div
            class="w-3 h-3 bg-emerald-600 dark:bg-emerald-400 rounded-full animate-bounce"
            style="animation-delay: 0s"
          ></div>
          <div
            class="w-3 h-3 bg-emerald-600 dark:bg-emerald-400 rounded-full animate-bounce"
            style="animation-delay: 0.2s"
          ></div>
          <div
            class="w-3 h-3 bg-emerald-600 dark:bg-emerald-400 rounded-full animate-bounce"
            style="animation-delay: 0.4s"
          ></div>
        </div>
      </div>
    </div>
  </transition>

  <!-- Main App Content -->
  <!-- Menggunakan v-show agar elemen tetap ada di DOM (hanya hidden) saat loading -->
  <div v-show="!isLoading">
    <!-- <PublicNavbar /> -->
    <Navbar />
    <BackToTop />
    <router-view />
    <Footer />
    <!-- <PublicFooter /> -->
    <!-- <ConnectionStatus /> -->
  </div>
</template>

<script setup lang="ts">
import Navbar from "../components/public/common/Navbar.vue";
import Footer from "../components/public/common/FooterSection.vue";
// import PublicNavbar from "../components/public/PublicNavbar.vue";
// import PublicFooter from "../components/public/PublicFooter.vue";
import BackToTop from "../services/BackToTop.vue";
import { ref, onMounted, nextTick } from "vue";
import type { IStaticMethods } from "preline/preline";
// import ConnectionStatus from "../components/public/common/ConnectionStatus.vue";
const isLoading = ref(true);

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
    HSOverlay: any;
  }
}

onMounted(() => {
  // Simulasi Loading selama 2 detik
  setTimeout(async () => {
    isLoading.value = false;

    // Tunggu Vue selesai update DOM (menampilkan konten v-show)
    await nextTick();

    // Inisialisasi Ulang Preline UI dengan Aman
    try {
      if (
        window.HSStaticMethods &&
        typeof window.HSStaticMethods.autoInit === "function"
      ) {
        window.HSStaticMethods.autoInit();
      } else if (
        window.HSOverlay &&
        typeof window.HSOverlay.init === "function"
      ) {
        // Fallback untuk versi lama
        // window.HSOverlay.init();
      }
    } catch (error) {
      console.warn("Preline UI init warning (safe to ignore):", error);
    }
  }, 2000);
});
</script>

<style scoped>
/* Fade Out Transition */
.fade-out-enter-active,
.fade-out-leave-active {
  transition: opacity 0.5s ease;
}

.fade-out-enter-from,
.fade-out-leave-to {
  opacity: 0;
}

/* Scale Bounce Animation */
@keyframes scale-bounce {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.animate-scale-bounce {
  animation: scale-bounce 2s ease-in-out infinite;
}

/* Fade In Up Animation */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.animate-fade-in-up-delay {
  animation: fade-in-up 0.8s ease-out 0.2s forwards;
  opacity: 0;
}

/* Slower Pulse Animations */
@keyframes pulse-slow {
  0%,
  100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.05);
  }
}

@keyframes pulse-slower {
  0%,
  100% {
    opacity: 0.2;
    transform: scale(1);
  }
  50% {
    opacity: 0.4;
    transform: scale(1.08);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

.animate-pulse-slower {
  animation: pulse-slower 6s ease-in-out infinite;
}
</style>
