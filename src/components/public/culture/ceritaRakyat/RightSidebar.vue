<template>
  <!-- Sidebar Kanan -->
  <aside class="w-full lg:w-80 shrink-0">
    <div class="lg:sticky lg:top-24 space-y-6">
      <!-- Artikel Terbaru Card -->
      <div
        class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
      >
        <div class="mb-4 flex items-center gap-2">
          <div
            class="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-500/20"
          >
            <svg
              class="h-5 w-5 text-emerald-600 dark:text-emerald-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <h3 class="text-sm font-bold text-slate-900 dark:text-white">
            Cerita Rakyat Terbaru
          </h3>
        </div>

        <div class="space-y-4">
          <!-- Article Item 1 -->
          <a class="block group cursor-pointer">
            <p
              class="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors dark:text-white dark:group-hover:text-blue-400"
            >
              Biwar Sang Penakluk Naga
            </p>
            <p class="mt-1 text-xs text-slate-500 dark:text-slate-400">
              5 menit baca
            </p>
          </a>

          <div class="h-px bg-slate-200 dark:bg-slate-800"></div>

          <!-- Article Item 2 -->
          <a class="block group cursor-pointer">
            <p
              class="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors dark:text-white dark:group-hover:text-blue-400"
            >
              Legenda Cabo Pui dan Batu Ajaib
            </p>
            <p class="mt-1 text-xs text-slate-500 dark:text-slate-400">
              4 menit baca
            </p>
          </a>

          <div class="h-px bg-slate-200 dark:bg-slate-800"></div>

          <!-- Article Item 3 -->
          <a class="block group cursor-pointer">
            <p
              class="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors dark:text-white dark:group-hover:text-blue-400"
            >
              Empat Raja
            </p>
            <p class="mt-1 text-xs text-slate-500 dark:text-slate-400">
              8 menit baca
            </p>
          </a>
        </div>
      </div>

      <!-- Donasi Card -->
      <div
        class="rounded-xl border border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 p-5 shadow-sm dark:border-amber-500/40 dark:from-amber-500/10 dark:to-orange-500/10"
      >
        <div class="mb-3 flex items-center gap-2">
          <div
            class="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 dark:bg-amber-500/30"
          >
            <svg
              class="h-5 w-5 text-amber-600 dark:text-amber-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <h3 class="text-sm font-bold text-slate-900 dark:text-white">
            Dukung Kami
          </h3>
        </div>
        <p class="mb-3 text-sm text-slate-700 dark:text-slate-200">
          Bantu kami terus membuat konten tutorial gratis berkualitas.
        </p>
        <button
          @click="donate"
          class="w-full rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-2.5 text-sm font-semibold text-white hover:from-amber-600 hover:to-orange-600 shadow-sm hover:shadow-md transition-all"
        >
          ☕ Traktir Kopi
        </button>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");

const subscribe = () => {
  if (email.value) {
    alert(`Terima kasih! Email ${email.value} telah terdaftar.`);
    email.value = "";
  } else {
    alert("Silakan masukkan email Anda.");
  }
};

const donate = () => {
  alert("Terima kasih atas dukungannya! 🙏");
  // Implementasi redirect ke halaman donasi
  // window.location.href = '/donasi';
};

const navigateToArticle = (path) => {
  console.log("Navigate to:", path);
  // Implementasi navigasi menggunakan Vue Router
  // router.push(path);
};
</script>

<style scoped>
/* Optional: Additional styles */
</style>
