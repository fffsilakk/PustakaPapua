<template>
  <section
    class="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900 transition-colors duration-500 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-white"
  >
    <!-- Animated Background Glow -->
    <div class="pointer-events-none absolute inset-0" aria-hidden="true">
      <div
        class="absolute -top-32 -left-32 h-64 w-64 animate-pulse rounded-full bg-emerald-400/30 blur-3xl transition-all duration-1000 dark:bg-emerald-500/20"
      ></div>
      <div
        class="absolute -bottom-40 -right-10 h-72 w-72 animate-pulse rounded-full bg-cyan-400/30 blur-3xl transition-all duration-1000 dark:bg-cyan-500/20"
      ></div>
      <div
        class="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-400/20 blur-3xl transition-all duration-1000 dark:bg-purple-500/10"
      ></div>
    </div>

    <div
      class="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-12 transition-opacity duration-1000 md:flex-row md:items-center md:justify-between md:py-20 lg:py-25"
      :class="isLoaded ? 'opacity-100' : 'opacity-0'"
    >
      <!-- Left: Text Content -->
      <div
        class="max-w-xl transform text-center transition-all duration-700 hover:scale-[1.02] md:text-left"
      >
        <!-- Badge -->
        <span
          class="inline-flex items-center gap-2 rounded-full border border-emerald-600/40 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700 transition-all duration-300 hover:scale-105 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-200"
        >
          <span
            class="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-600 dark:bg-emerald-400"
          ></span>
          Belajar Komputer & Jaringan
        </span>

        <!-- Main Heading -->
        <h1
          class="mt-6 text-balance text-3xl font-bold tracking-tight text-slate-900 transition-colors duration-500 dark:text-white sm:text-4xl lg:text-5xl"
        >
          <span
            class="inline-block bg-gradient-to-r from-emerald-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent dark:from-emerald-300 dark:via-cyan-300 dark:to-emerald-300"
            style="
              animation: gradient 3s ease infinite;
              background-size: 200% 200%;
            "
          >
            ナレDev
          </span>
        </h1>

        <!-- Description -->
        <p
          class="mt-6 text-sm leading-relaxed text-slate-600 transition-colors duration-500 dark:text-slate-300 sm:text-base"
        >
          tempat belajar Komputer & Jaringan dengan tutorial yang mudah
          dipahami.
        </p>
        <div class="flex flex-wrap py-5">
          <!--  -->
          <div class="flex flex-wrap gap-3 text-sm">
            <div
              class="flex items-center gap-2 rounded-lg px-3 py-2 backdrop-blur-sm border dark:bg-slate-800/50 dark:border-slate-700/50 dark:text-slate-400 bg-white/60 border-slate-200 text-slate-600"
            >
              <div class="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Made in Highland Papua</span>
            </div>
            <div
              class="flex items-center gap-2 rounded-lg px-3 py-2 backdrop-blur-sm border dark:bg-slate-800/50 dark:border-slate-700/50 dark:text-slate-400 bg-white/60 border-slate-200 text-slate-600"
            >
              <svg
                class="h-4 w-4 text-amber-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                />
              </svg>
              <span class="text-sm font-medium">100% Gratis & Open</span>
            </div>
          </div>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-wrap gap-4">
          <router-link to="/Tutorial">
            <button
              class="group cursor-pointer inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-3 font-semibold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/50"
            >
              <svg
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              Mulai Belajar
              <svg
                class="h-4 w-4 transition-transform group-hover:translate-x-1"
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
          </router-link>

          <a
            class="inline-flex cursor-pointer items-center gap-2 rounded-xl border px-6 py-3 font-semibold backdrop-blur-sm transition-all dark:border-slate-700 dark:bg-slate-800/50 dark:hover:bg-slate-800 dark:hover:border-slate-600 dark:text-white border-slate-300 bg-white/60 hover:bg-white hover:border-slate-400 text-slate-900"
            href="https://github.com/fffsilakk"
            target="_blank"
            rel="noopener"
          >
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                fill-rule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clip-rule="evenodd"
              />
            </svg>
            GitHub
          </a>
        </div>
      </div>
      <!-- Right: Terminal Mockup -->
      <div
        class="w-full max-w-md transform transition-all duration-700 hover:scale-[1.02] md:hover:rotate-1 md:max-w-lg"
      >
        <div
          class="relative mx-auto w-full overflow-hidden rounded-2xl border border-slate-300 bg-white shadow-2xl shadow-slate-400/50 transition-all duration-500 dark:border-slate-700/60 dark:bg-slate-900/80 dark:shadow-slate-900/70"
        >
          <!-- Terminal Top Bar -->
          <div
            class="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-3 py-2 transition-colors duration-500 sm:px-4 sm:py-2.5 dark:border-slate-800/80 dark:bg-slate-900/90"
          >
            <div class="flex items-center gap-1.5">
              <span
                class="h-2 w-2 cursor-pointer rounded-full bg-red-500/80 transition-all duration-300 hover:scale-110 hover:bg-red-500 sm:h-2.5 sm:w-2.5"
              ></span>
              <span
                class="h-2 w-2 cursor-pointer rounded-full bg-amber-400/80 transition-all duration-300 hover:scale-110 hover:bg-amber-400 sm:h-2.5 sm:w-2.5"
              ></span>
              <span
                class="h-2 w-2 cursor-pointer rounded-full bg-emerald-400/80 transition-all duration-300 hover:scale-110 hover:bg-emerald-400 sm:h-2.5 sm:w-2.5"
              ></span>
            </div>
            <span
              class="truncate font-mono text-[10px] text-slate-600 transition-colors duration-500 sm:text-xs dark:text-slate-400"
            >
              Nare@Dev:~$
            </span>
          </div>

          <!-- Terminal Content -->
          <div
            class="flex flex-col bg-gradient-to-br from-slate-50 to-white transition-colors duration-500 dark:from-slate-950 dark:to-slate-900"
          >
            <div class="px-3 py-3 sm:px-4 sm:py-4">
              <!-- Terminal Output -->
              <div
                class="mb-2 font-mono text-[10px] text-emerald-600 transition-colors duration-500 sm:mb-3 sm:text-xs dark:text-emerald-400"
              >
                <span class="animate-pulse">$</span> ls /modules
              </div>

              <!-- Cards Grid -->
              <div
                class="grid grid-cols-1 gap-2 text-xs sm:grid-cols-2 sm:gap-3 sm:text-sm"
              >
                <!-- Card 1: Hardware -->
                <div
                  class="group cursor-pointer rounded-lg border border-emerald-600/30 bg-emerald-50 p-2.5 transition-all duration-300 hover:scale-105 hover:bg-emerald-100 hover:shadow-md sm:p-3 dark:border-emerald-500/30 dark:bg-emerald-500/5 dark:hover:bg-emerald-500/10"
                >
                  <div class="mb-1 flex items-center gap-1.5">
                    <svg
                      class="h-3 w-3 shrink-0 text-emerald-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 sm:h-3.5 sm:w-3.5 dark:text-emerald-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                      />
                    </svg>
                    <p
                      class="text-xs font-semibold text-emerald-700 transition-colors duration-500 sm:text-sm dark:text-emerald-200"
                    >
                      Hardware
                    </p>
                  </div>
                  <p
                    class="text-[10px] leading-relaxed text-slate-600 transition-colors duration-500 sm:text-xs dark:text-slate-300"
                  >
                    Komponen PC & fungsinya
                  </p>
                </div>

                <!-- Card 2: Linux -->
                <div
                  class="group cursor-pointer rounded-lg border border-cyan-600/30 bg-cyan-50 p-2.5 transition-all duration-300 hover:scale-105 hover:bg-cyan-100 hover:shadow-md sm:p-3 dark:border-cyan-500/30 dark:bg-cyan-500/5 dark:hover:bg-cyan-500/10"
                >
                  <div class="mb-1 flex items-center gap-1.5">
                    <svg
                      class="h-3 w-3 shrink-0 text-cyan-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 sm:h-3.5 sm:w-3.5 dark:text-cyan-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p
                      class="text-xs font-semibold text-cyan-700 transition-colors duration-500 sm:text-sm dark:text-cyan-200"
                    >
                      Linux
                    </p>
                  </div>
                  <p
                    class="text-[10px] leading-relaxed text-slate-600 transition-colors duration-500 sm:text-xs dark:text-slate-300"
                  >
                    Debian & Ubuntu praktis
                  </p>
                </div>

                <!-- Card 3: Jaringan -->
                <div
                  class="group cursor-pointer rounded-lg border border-purple-600/30 bg-purple-50 p-2.5 transition-all duration-300 hover:scale-105 hover:bg-purple-100 hover:shadow-md sm:p-3 dark:border-purple-500/30 dark:bg-purple-500/5 dark:hover:bg-purple-500/10"
                >
                  <div class="mb-1 flex items-center gap-1.5">
                    <svg
                      class="h-3 w-3 shrink-0 text-purple-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 sm:h-3.5 sm:w-3.5 dark:text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                    <p
                      class="text-xs font-semibold text-purple-700 transition-colors duration-500 sm:text-sm dark:text-purple-200"
                    >
                      Jaringan
                    </p>
                  </div>
                  <p
                    class="text-[10px] leading-relaxed text-slate-600 transition-colors duration-500 sm:text-xs dark:text-slate-300"
                  >
                    Konsep IP & routing dasar
                  </p>
                </div>

                <!-- Card 4: Papua -->
                <div
                  class="group cursor-pointer rounded-lg border border-slate-300 bg-white p-2.5 transition-all duration-300 hover:scale-105 hover:bg-slate-50 hover:shadow-md sm:p-3 dark:border-slate-700 dark:bg-slate-900/60 dark:hover:bg-slate-800/60"
                >
                  <div class="mb-1 flex items-center gap-1.5">
                    <svg
                      class="h-3 w-3 shrink-0 text-slate-700 transition-all duration-300 group-hover:scale-110 sm:h-3.5 sm:w-3.5 dark:text-slate-300"
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
                    <p
                      class="text-xs font-semibold text-slate-800 transition-colors duration-500 sm:text-sm dark:text-slate-100"
                    >
                      ナレDev
                    </p>
                  </div>
                  <p
                    class="text-[10px] leading-relaxed text-slate-600 transition-colors duration-500 sm:text-xs dark:text-slate-300"
                  >
                    Materi langsung ke inti
                  </p>
                </div>
              </div>
            </div>

            <!-- Terminal Bottom Status -->
            <div
              class="flex items-center justify-between border-t border-slate-200 bg-slate-50 px-3 py-2 text-[9px] text-slate-600 transition-colors duration-500 sm:px-4 sm:text-[10px] dark:border-slate-800/80 dark:bg-slate-900/90 dark:text-slate-400"
            >
              <span class="flex items-center gap-1">
                <span
                  class="inline-block h-1 w-1 animate-pulse rounded-full bg-emerald-600 sm:h-1.5 sm:w-1.5 dark:bg-emerald-400"
                ></span>
                <span class="hidden sm:inline">Online class ready</span>
                <span class="sm:hidden">Ready</span>
              </span>
              <span class="font-mono">NareDev</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const isLoaded = ref(false);

onMounted(() => {
  // Trigger fade-in animation
  setTimeout(() => {
    isLoaded.value = true;
  }, 100);
});
</script>

<style scoped>
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
