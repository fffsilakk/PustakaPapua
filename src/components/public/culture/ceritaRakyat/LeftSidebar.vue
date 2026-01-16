<template>
  <!-- Sidebar Kiri - Fixed di Desktop, Hidden di Mobile -->
  <aside class="hidden lg:block lg:w-20 xl:w-24 shrink-0">
    <div class="sticky top-24 flex flex-col gap-3">
      <!-- Back Button -->
      <button
        @click="goBack"
        class="group flex h-14 w-14 xl:h-16 xl:w-16 items-center justify-center rounded-xl bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-500/50 shadow-sm transition-all duration-300 hover:scale-105 dark:bg-slate-900 dark:border-slate-800 dark:hover:bg-slate-800 dark:hover:border-emerald-500/50"
        title="Kembali"
      >
        <svg
          class="h-5 w-5 text-slate-600 transition-colors group-hover:text-emerald-600 dark:text-slate-300 dark:group-hover:text-emerald-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </button>

      <!-- Discussion Button -->
      <button
        @click="openDiscussion"
        class="group flex h-14 w-14 xl:h-16 xl:w-16 items-center justify-center rounded-xl bg-white hover:bg-cyan-50 border border-slate-200 hover:border-cyan-500/50 shadow-sm transition-all duration-300 hover:scale-105 dark:bg-slate-900 dark:border-slate-800 dark:hover:bg-slate-800 dark:hover:border-cyan-500/50"
        title="Diskusi"
      >
        <svg
          class="h-5 w-5 text-slate-600 transition-colors group-hover:text-cyan-600 dark:text-slate-300 dark:group-hover:text-cyan-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </button>

      <!-- FAQ Button -->
      <button
        @click="openFAQ"
        class="group flex h-14 w-14 xl:h-16 xl:w-16 items-center justify-center rounded-xl bg-white hover:bg-purple-50 border border-slate-200 hover:border-purple-500/50 shadow-sm transition-all duration-300 hover:scale-105 dark:bg-slate-900 dark:border-slate-800 dark:hover:bg-slate-800 dark:hover:border-purple-500/50"
        title="FAQ"
      >
        <svg
          class="h-5 w-5 text-slate-600 transition-colors group-hover:text-purple-600 dark:text-slate-300 dark:group-hover:text-purple-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>

      <!-- Divider -->
      <div class="h-px bg-slate-200 dark:bg-slate-800 my-2"></div>

      <!-- Twitter Link -->
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        class="group flex h-14 w-14 xl:h-16 xl:w-16 items-center justify-center rounded-xl bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-500/50 shadow-sm transition-all duration-300 hover:scale-105 dark:bg-slate-900 dark:border-slate-800 dark:hover:bg-slate-800 dark:hover:border-blue-500/50"
        title="Twitter"
      >
        <svg
          class="h-5 w-5 text-slate-600 transition-colors group-hover:text-blue-600 dark:text-slate-300 dark:group-hover:text-blue-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
          />
        </svg>
      </a>

      <!-- GitHub Link -->
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        class="group flex h-14 w-14 xl:h-16 xl:w-16 items-center justify-center rounded-xl bg-white hover:bg-slate-100 border border-slate-200 hover:border-slate-400 shadow-sm transition-all duration-300 hover:scale-105 dark:bg-slate-900 dark:border-slate-800 dark:hover:bg-slate-800 dark:hover:border-slate-600"
        title="GitHub"
      >
        <svg
          class="h-5 w-5 text-slate-600 transition-colors group-hover:text-slate-900 dark:text-slate-300 dark:group-hover:text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
          />
        </svg>
      </a>
    </div>
  </aside>
</template>

<script setup lang="ts">
const goBack = () => {
  window.history.back();
};

const openDiscussion = () => {
  console.log("Open discussion");
  // Implementasi buka dialog diskusi
};

const openFAQ = () => {
  console.log("Open FAQ");
  // Implementasi buka dialog FAQ
};
</script>

<style scoped>
/* Optional: Additional styles */
</style>
