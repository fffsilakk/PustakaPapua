<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const sectionRef = ref<HTMLElement | null>(null);
let observer: IntersectionObserver | null = null;

onMounted(() => {
  if (typeof window === "undefined" || !("IntersectionObserver" in window))
    return;

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("instrument-visible");
          observer?.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  if (sectionRef.value) observer.observe(sectionRef.value);
});

onUnmounted(() => {
  observer?.disconnect();
});
</script>

<template>
  <section
    ref="sectionRef"
    class="relative overflow-hidden bg-slate-50 py-24 px-4 opacity-0 translate-y-12 transition-all duration-[1100ms] ease-[cubic-bezier(0.25,1,0.5,1)] sm:px-6 lg:px-8 dark:bg-slate-950"
  >
    <div class="absolute inset-0 z-0 opacity-30 dark:opacity-10">
      <div
        class="absolute top-1/2 left-0 h-1 w-full flex items-center justify-around gap-2 px-10"
      >
        <div
          v-for="i in 12"
          :key="i"
          class="w-1 bg-emerald-500 rounded-full animate-wave"
          :style="{
            height: Math.random() * 100 + 40 + 'px',
            animationDelay: i * 0.1 + 's',
          }"
        ></div>
      </div>
    </div>

    <div class="relative z-10 mx-auto max-w-6xl">
      <div
        class="rounded-[3rem] bg-white/40 border border-white/60 p-8 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] backdrop-blur-2xl md:p-16 dark:bg-slate-900/60 dark:border-slate-800 dark:shadow-none"
      >
        <div class="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div class="space-y-8">
            <div
              class="inline-flex items-center gap-3 rounded-full bg-slate-100 px-4 py-2 dark:bg-slate-800/50"
            >
              <span
                class="flex h-2 w-2 rounded-full bg-rose-500 animate-pulse"
              ></span>
              <span
                class="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-600 dark:text-slate-300"
                >Resonansi Budaya</span
              >
            </div>

            <h2
              class="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl dark:text-white leading-[1.1]"
            >
              Suara yang
              <span
                class="bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent"
                >Menyatu</span
              >
              dengan Jiwa.
            </h2>

            <div
              class="space-y-5 text-lg leading-relaxed text-slate-600 dark:text-slate-400"
            >
              <p>
                Instrumen tradisional Papua seperti
                <span class="text-slate-900 font-bold dark:text-white"
                  >Tifa</span
                >
                dan
                <span class="text-slate-900 font-bold dark:text-white"
                  >Pikon</span
                >
                bukan sekadar alat penghasil bunyi. Mereka adalah perpanjangan
                suara leluhur yang menyampaikan pesan sukacita, duka, hingga
                panggilan keramat untuk berkumpul.
              </p>
              <p>
                Setiap getaran kulit tifa membawa ritme yang mengatur nafas
                tarian dan langkah kaki masyarakat. Mempelajari instrumen ini
                berarti menyelami cara masyarakat Papua berkomunikasi dengan
                alam dan sesama melalui bahasa nada yang jujur.
              </p>
            </div>

            <div class="flex items-center gap-6 pt-4">
              <div class="flex -space-x-3">
                <div
                  v-for="i in 3"
                  :key="i"
                  class="h-10 w-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-sm dark:border-slate-900"
                >
                  {{ ["🥁", "🎻", "📣"][i - 1] }}
                </div>
              </div>
              <p class="text-xs font-medium text-slate-500 italic">
                Berbagai alat musik ritmik, petik, dan tiup.
              </p>
            </div>
          </div>

          <div class="grid gap-4">
            <div
              class="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm transition-all duration-300 hover:-translate-x-2 hover:shadow-xl dark:from-slate-800 dark:to-slate-800/50"
            >
              <div class="flex gap-5">
                <div
                  class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-500 text-2xl shadow-lg shadow-amber-500/20 transition-transform group-hover:rotate-12"
                >
                  🥁
                </div>
                <div>
                  <h3 class="text-lg font-bold text-slate-900 dark:text-white">
                    Harmoni Gerak
                  </h3>
                  <p
                    class="mt-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400"
                  >
                    Menjaga ritme tarian agar tetap selaras dengan denyut
                    jantung penarinya.
                  </p>
                </div>
              </div>
            </div>

            <div
              class="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm transition-all duration-300 hover:-translate-x-2 hover:shadow-xl dark:from-slate-800 dark:to-slate-800/50"
            >
              <div class="flex gap-5">
                <div
                  class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-500 text-2xl shadow-lg shadow-emerald-500/20 transition-transform group-hover:rotate-12"
                >
                  📣
                </div>
                <div>
                  <h3 class="text-lg font-bold text-slate-900 dark:text-white">
                    Bahasa Isyarat Nada
                  </h3>
                  <p
                    class="mt-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400"
                  >
                    Digunakan sebagai media komunikasi jarak jauh dan tanda
                    upacara sakral.
                  </p>
                </div>
              </div>
            </div>

            <div
              class="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm transition-all duration-300 hover:-translate-x-2 hover:shadow-xl dark:from-slate-800 dark:to-slate-800/50"
            >
              <div class="flex gap-5">
                <div
                  class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sky-500 text-2xl shadow-lg shadow-sky-500/20 transition-transform group-hover:rotate-12"
                >
                  📱
                </div>
                <div>
                  <h3 class="text-lg font-bold text-slate-900 dark:text-white">
                    Warisan Digital
                  </h3>
                  <p
                    class="mt-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400"
                  >
                    Menghubungkan tetua kampung dengan teknologi untuk
                    pelestarian abadi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="mt-16 flex flex-wrap justify-center gap-8 border-t border-slate-100 pt-10 dark:border-slate-800/50"
        >
          <div
            class="flex items-center gap-3 text-sm font-semibold text-slate-600 dark:text-slate-400"
          >
            <div class="h-2 w-2 rounded-full bg-emerald-500"></div>
            Eco-friendly materials
          </div>
          <div
            class="flex items-center gap-3 text-sm font-semibold text-slate-600 dark:text-slate-400"
          >
            <div class="h-2 w-2 rounded-full bg-sky-500"></div>
            Spiritual connection
          </div>
          <div
            class="flex items-center gap-3 text-sm font-semibold text-slate-600 dark:text-slate-400"
          >
            <div class="h-2 w-2 rounded-full bg-rose-500"></div>
            Community unity
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.instrument-visible {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

@keyframes wave {
  0%,
  100% {
    transform: scaleY(1);
    opacity: 0.5;
  }
  50% {
    transform: scaleY(1.5);
    opacity: 1;
  }
}

.animate-wave {
  animation: wave 2s ease-in-out infinite;
  transform-origin: center;
}

/* Custom transitions */
.group {
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
</style>
