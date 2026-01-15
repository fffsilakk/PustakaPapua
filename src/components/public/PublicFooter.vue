<template>
  <footer
    class="relative border-t border-slate-200 bg-white transition-colors duration-500 dark:border-slate-800/50 dark:bg-[#020617]"
  >
    <div
      class="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div
        class="absolute -bottom-32 left-1/2 -translate-x-1/2 h-64 w-full max-w-4xl rounded-full bg-emerald-500/10 blur-[120px] dark:bg-emerald-500/5"
      ></div>
    </div>

    <div class="relative mx-auto max-w-7xl px-6 pb-12 pt-20">
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <div class="lg:col-span-5 space-y-8">
          <div class="flex items-center gap-3">
            <div
              class="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-lg shadow-emerald-200 dark:shadow-none font-bold"
            >
              N
            </div>
            <span
              class="text-2xl font-black tracking-tighter text-slate-900 dark:text-white"
            >
              ナレ<span class="text-emerald-600 dark:text-emerald-400"
                >Dev</span
              >
            </span>
          </div>

          <p
            class="max-w-sm text-base leading-relaxed text-slate-500 dark:text-slate-400"
          >
            Sebuah ruang belajar digital untuk merapikan catatan sistem,
            hardware, dan Linux. Dirakit dengan rasa penasaran dari
            <span class="font-semibold text-slate-800 dark:text-slate-200"
              >Highland Papua</span
            >
            untuk Indonesia Timur.
          </p>

          <div
            class="inline-flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-50/50 px-4 py-2 dark:bg-emerald-500/5"
          >
            <span class="relative flex h-2.5 w-2.5">
              <span
                class="animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-75"
              ></span>
              <span
                class="relative h-2.5 w-2.5 rounded-full bg-emerald-500"
              ></span>
            </span>
            <span
              class="text-[11px] font-black uppercase tracking-[0.15em] text-emerald-700 dark:text-emerald-400"
            >
              Open for Collaboration
            </span>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-8 sm:gap-16 lg:col-span-7">
          <div class="space-y-6">
            <h4
              class="text-[11px] font-black uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500"
            >
              Materi Belajar
            </h4>
            <ul class="space-y-4">
              <li v-for="link in materiLinks" :key="link.name">
                <RouterLink
                  :to="link.to"
                  class="group flex items-center text-sm font-medium text-slate-600 transition-all hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400"
                >
                  <span
                    class="h-px w-0 bg-emerald-500 transition-all group-hover:w-3 group-hover:mr-2"
                  ></span>
                  {{ link.name }}
                </RouterLink>
              </li>
            </ul>
          </div>

          <div class="space-y-6">
            <h4
              class="text-[11px] font-black uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500"
            >
              Ekosistem
            </h4>
            <ul class="space-y-4">
              <li v-for="link in miscLinks" :key="link.name">
                <RouterLink
                  :to="link.to"
                  class="group flex items-center text-sm font-medium text-slate-600 transition-all hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400"
                >
                  <span
                    class="h-px w-0 bg-emerald-500 transition-all group-hover:w-3 group-hover:mr-2"
                  ></span>
                  {{ link.name }}
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        class="mt-20 flex flex-col items-center justify-between gap-8 border-t border-slate-100 pt-10 dark:border-slate-800/50 sm:flex-row"
      >
        <p class="text-sm font-medium text-slate-400 dark:text-slate-500">
          © {{ new Date().getFullYear() }}
          <span class="text-slate-900 dark:text-white font-bold tracking-tight"
            >ナレDev</span
          >. Built with <span class="text-red-500">❤</span> in Papua.
        </p>

        <div class="flex items-center gap-6">
          <a
            href="https://github.com/fffsilakk"
            target="_blank"
            class="group flex items-center gap-3 rounded-full bg-slate-50 px-4 py-2 border border-slate-200 transition-all hover:bg-slate-900 hover:text-white dark:bg-slate-900 dark:border-slate-800 dark:hover:bg-white dark:hover:text-slate-900"
          >
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              />
            </svg>
            <span class="text-xs font-black uppercase tracking-widest"
              >fffsilakk</span
            >
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const materiLinks = [
  { name: "Hardware System", to: "/materi/hardware" },
  { name: "Linux Environment", to: "/materi/linux" },
  { name: "Networking", to: "/materi/jaringan" },
  { name: "Tools Review", to: "/materi/review" },
];

const miscLinks = [
  { name: "About NareDev", to: "/tentang" },
  { name: "Community", to: "/kontribusi" },
  { name: "System Log", to: "/update" },
  { name: "Contact", to: "/kontak" },
];
</script>
