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
        <a
          class="flex items-center gap-1 font-bold text-xl text-black focus:outline-none focus:opacity-80 dark:text-white group transition-all duration-300 hover:scale-105"
          aria-label="Brand"
        >
          <div
            class="flex h-20 w-15 items-center justify-center transition-all duration-300"
          >
            <img src="/Logo/Logoo.png" alt="Logo" class="h-10 w-full" />
          </div>
          <span
            class="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent dark:from-emerald-400 dark:to-cyan-400"
          >
            Pustaka
            <span class="block -mt-2"> Papua </span>
          </span>
        </a>
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

  <div v-show="!isLoading">
    <Navbar />
    <BackToTop />
    <router-view />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from "../components/public/common/Navbar.vue";
import Footer from "../components/public/common/FooterSection.vue";
import BackToTop from "../services/BackToTop.vue";
import { ref, onMounted, nextTick } from "vue";
import type { IStaticMethods } from "preline/preline";
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
