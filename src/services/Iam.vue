<template>
  <!-- Blog Article Header -->
  <div class="max-w-3xl px-4 pt-2 lg:pt-2 pb-2 sm:px-2 lg:px-8 mx-auto">
    <div class="max-w-2xl">
      <!-- Avatar Media -->
      <div class="flex justify-between items-center mb-3">
        <div class="flex w-full sm:items-center gap-x-4">
          <!-- Avatar -->
          <div class="shrink-0">
            <img
              class="h-12 w-12 rounded-full object-cover ring-2 ring-slate-200 dark:ring-slate-700"
              src=""
              alt="Avatar"
            />
          </div>

          <!-- Info -->
          <div class="flex-1">
            <div class="flex items-start justify-between gap-x-3">
              <div class="min-w-0">
                <!-- Nama + tooltip simple -->
                <div
                  class="relative inline-block"
                  @mouseenter="showCard = true"
                  @mouseleave="showCard = false"
                >
                  <button
                    type="button"
                    class="text-sm font-semibold text-slate-900 dark:text-neutral-100 hover:text-slate-700 dark:hover:text-neutral-300 focus:outline-none"
                  >
                    Videl Kobak
                  </button>

                  <!-- Dropdown Card -->
                  <transition
                    enter-active-class="transition ease-out duration-150"
                    enter-from-class="opacity-0 translate-y-1"
                    enter-to-class="opacity-100 translate-y-0"
                    leave-active-class="transition ease-in duration-100"
                    leave-from-class="opacity-100 translate-y-0"
                    leave-to-class="opacity-0 translate-y-1"
                  >
                    <div
                      v-if="showCard"
                      class="absolute z-20 mt-2 w-64 rounded-xl border border-slate-200 bg-white/95 p-4 shadow-lg backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/95"
                    >
                      <div class="flex items-center gap-x-3 mb-2">
                        <img
                          class="h-8 w-8 rounded-full object-cover ring-1 ring-slate-200 dark:ring-slate-700"
                          src=""
                          alt="Avatar"
                        />
                        <div>
                          <p
                            class="text-sm font-semibold text-slate-900 dark:text-neutral-100"
                          >
                            Videl Kobak
                          </p>
                          <p
                            class="text-xs text-slate-500 dark:text-neutral-500"
                          >
                            Network & Web Developer
                          </p>
                        </div>
                      </div>
                      <p
                        class="text-xs leading-relaxed text-slate-600 dark:text-neutral-400"
                      >
                        Saya Videl Kobak, suka eksplor tentang jaringan
                        komputer, dan pengembangan web.
                      </p>
                    </div>
                  </transition>
                </div>

                <div
                  class="mt-1 flex items-center gap-2 text-[11px] text-slate-500 dark:text-neutral-500"
                >
                  <span
                    class="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse"
                  ></span>
                  <span>Sedang minum Kopi</span>
                </div>
              </div>

              <!-- Button Group -->
              <div class="flex-shrink-0">
                <a
                  href="https://www.instagram.com/fffsilakk/"
                  target="_blank"
                  class="inline-flex items-center gap-x-2 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-800 shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-700"
                >
                  <FaBandsInstagram class="h-3.5 w-3.5" />
                  <span>Instagram</span>
                </a>
              </div>
              <!-- End Button Group -->
            </div>
          </div>
        </div>
      </div>
      <!-- End Avatar Media -->
    </div>
  </div>
  <!-- End Blog Article Header -->
</template>

<script setup lang="ts">
import { ref } from "vue";
import { FaBandsInstagram } from "@kalimahapps/vue-icons";

const showCard = ref(false);
</script>
