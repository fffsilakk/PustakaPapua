<template>
  <footer
    class="relative border-t border-slate-200 bg-white transition-colors duration-500 dark:border-slate-800 dark:bg-slate-950"
  >
    <div
      class="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div
        class="absolute -bottom-24 left-1/2 -translate-x-1/2 h-64 w-full max-w-4xl rounded-full bg-emerald-500/5 blur-[100px] dark:bg-emerald-500/10"
      ></div>
    </div>

    <div class="relative mx-auto lg:max-w-6xl px-6 pb-8 pt-16">
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
        <div class="lg:col-span-5">
          <div class="flex items-center gap-3">
            <!-- <img
              src="/Logo/Logo_NarDev.png"
              alt="NareDev"
              class="h-10 w-auto transition-transform hover:rotate-6"
            /> -->
            <span
              class="text-xl font-bold tracking-tighter text-slate-900 dark:text-white"
              >ナレDev</span
            >
          </div>
          <p
            class="mt-6 max-w-sm text-base leading-relaxed text-slate-600 dark:text-slate-400"
          >
            Sebuah ruang belajar santai untuk merapikan catatan sistem,
            hardware, dan Linux. Dirakit dengan rasa penasaran dari Highland
            Papua.
          </p>
          <div
            class="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 dark:bg-emerald-500/10"
          >
            <span class="relative flex h-2 w-2">
              <span
                class="animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-75"
              ></span>
              <span class="relative h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span
              class="text-[10px] font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-400"
              >Open for Collaboration</span
            >
          </div>
        </div>

        <div class="grid grid-cols-2 gap-8 lg:col-span-7">
          <div class="space-y-4">
            <h4
              class="text-xs font-bold uppercase tracking-[0.2em] text-slate-900 dark:text-white"
            >
              Materi
            </h4>
            <ul class="space-y-3">
              <li v-for="link in materiLinks" :key="link.name">
                <RouterLink
                  :to="link.to"
                  class="text-sm text-slate-500 transition-colors hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400"
                >
                  {{ link.name }}
                </RouterLink>
              </li>
            </ul>
          </div>

          <div class="space-y-4">
            <h4
              class="text-xs font-bold uppercase tracking-[0.2em] text-slate-900 dark:text-white"
            >
              Lainnya
            </h4>
            <ul class="space-y-3">
              <li v-for="link in miscLinks" :key="link.name">
                <RouterLink
                  :to="link.to"
                  class="text-sm text-slate-500 transition-colors hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400"
                >
                  {{ link.name }}
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        class="mt-16 flex flex-col items-center justify-between gap-6 border-t border-slate-100 pt-8 dark:border-slate-800 sm:flex-row"
      >
        <p class="text-sm text-slate-500 dark:text-slate-500">
          © {{ new Date().getFullYear() }}
          <span class="font-bold text-slate-700 dark:text-slate-300"
            >ナレDev</span
          >.
        </p>

        <div class="flex items-center gap-2">
          <a
            href="https://github.com/fffsilakk"
            target="_blank"
            class="dark:text-slate-400 text-slate-600 transition-colors hover:text-emerald-500 dark:hover:text-emerald-400"
          >
            <span class="sr-only">GitHub</span>
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              />
            </svg>
          </a>
          <a
            href="https://github.com/fffsilakk"
            target="_blank"
            class="text-[10px] font-semibold tracking-widest dark:text-slate-400 text-slate-600 hover:text-emerald-500 transition-colors"
          >
            fffsilakk
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const materiLinks = [
  { name: "Hardware", to: "/materi/hardware" },
  { name: "Linux", to: "/materi/linux" },
  { name: "Jaringan", to: "/materi/jaringan" },
  { name: "Review Alat", to: "/materi/review" },
];

const miscLinks = [
  { name: "Tentang", to: "/tentang" },
  { name: "Kontak", to: "/kontak" },
  { name: "Update Log", to: "/update" },
  { name: "Kontribusi", to: "/kontribusi" },
];
</script>
