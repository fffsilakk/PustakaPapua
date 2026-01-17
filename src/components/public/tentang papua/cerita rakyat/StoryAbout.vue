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
          entry.target.classList.add("folklore-visible");
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
    class="relative overflow-hidden bg-slate-50 py-24 px-4 opacity-0 translate-y-12 transition-all duration-[1200ms] ease-[cubic-bezier(0.2,1,0.3,1)] sm:px-6 lg:px-8 dark:bg-slate-950"
  >
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div
        class="absolute top-1/4 -left-20 h-[500px] w-[500px] rounded-full bg-orange-200/40 blur-[120px] dark:bg-orange-500/10"
      />
      <div
        class="absolute bottom-1/4 -right-20 h-[500px] w-[500px] rounded-full bg-sky-200/40 blur-[120px] dark:bg-indigo-500/10"
      />

      <div
        class="absolute inset-0 opacity-[0.03] dark:opacity-[0.1]"
        style="
          background-image: radial-gradient(
            circle,
            currentColor 1px,
            transparent 1px
          );
          background-size: 40px 40px;
        "
      ></div>
    </div>

    <div class="relative z-10 mx-auto max-w-5xl">
      <div class="mb-16 flex flex-col items-center text-center">
        <div
          class="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 mb-6 dark:border-orange-500/30 dark:bg-orange-500/10"
        >
          <span class="animate-pulse text-orange-500 dark:text-orange-400"
            >✨</span
          >
          <span
            class="text-[10px] font-bold uppercase tracking-[0.3em] text-orange-700 dark:text-orange-200"
          >
            Warisan Tutur Papua
          </span>
        </div>

        <h2
          class="text-4xl font-serif font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
        >
          Legenda &
          <span class="italic text-orange-600 dark:text-orange-400"
            >Cerita Rakyat</span
          >
        </h2>
      </div>

      <div
        class="relative overflow-hidden rounded-[3rem] border border-white bg-white/70 backdrop-blur-xl p-8 md:p-16 shadow-2xl shadow-slate-200/50 dark:border-white/10 dark:bg-slate-900/60 dark:shadow-none"
      >
        <div
          class="absolute top-10 right-10 text-8xl text-slate-100 font-serif select-none dark:text-white/5"
        >
          ”
        </div>

        <div class="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div class="space-y-6">
            <h3
              class="text-2xl font-bold text-slate-900 flex items-center gap-3 dark:text-white"
            >
              <span class="h-px w-8 bg-orange-500"></span>
              Pesan di Balik Mitos
            </h3>

            <div
              class="space-y-5 text-lg leading-relaxed text-slate-600 dark:text-slate-300"
            >
              <p>
                Cerita rakyat Papua lebih dari sekadar dongeng pengantar tidur.
                Ia adalah cara masyarakat menjelaskan asal-usul alam, menjaga
                norma sosial, dan mengajarkan moralitas melalui
                karakter-karakter legendaris.
              </p>
              <p>
                Dari kisah
                <span
                  class="text-orange-600 font-semibold italic dark:text-orange-300"
                  >Biwar</span
                >
                yang melawan naga hingga legenda
                <span
                  class="text-orange-600 font-semibold italic dark:text-orange-300"
                  >Asal-usul Suku</span
                >, setiap cerita membawa pesan mendalam tentang keberanian dan
                penghormatan terhadap hutan.
              </p>
            </div>

            <div
              class="pt-6 flex items-center gap-4 text-xs font-semibold text-slate-400 uppercase tracking-widest dark:text-slate-500"
            >
              <span class="h-2 w-2 bg-orange-500 rounded-full"></span>
              Diteruskan melintasi generasi
            </div>
          </div>

          <div class="grid gap-4">
            <div
              class="group flex items-start gap-4 rounded-2xl bg-slate-50 p-5 border border-slate-100 transition-all hover:bg-white hover:border-orange-300 hover:shadow-lg hover:shadow-orange-500/10 dark:bg-white/5 dark:border-white/5 dark:hover:bg-white/10 dark:hover:border-orange-500/30 dark:hover:shadow-none"
            >
              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-2xl group-hover:scale-110 transition-transform dark:bg-orange-500/20"
              >
                📜
              </div>
              <div>
                <h4 class="font-bold text-slate-900 dark:text-white">
                  Pedoman Etika
                </h4>
                <p class="text-sm text-slate-500 mt-1 dark:text-slate-400">
                  Mengandung hukum adat dan aturan moral yang membimbing tingkah
                  laku masyarakat.
                </p>
              </div>
            </div>

            <div
              class="group flex items-start gap-4 rounded-2xl bg-slate-50 p-5 border border-slate-100 transition-all hover:bg-white hover:border-sky-300 hover:shadow-lg hover:shadow-sky-500/10 dark:bg-white/5 dark:border-white/5 dark:hover:bg-white/10 dark:hover:border-sky-500/30 dark:hover:shadow-none"
            >
              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-2xl group-hover:scale-110 transition-transform dark:bg-sky-500/20"
              >
                🏞️
              </div>
              <div>
                <h4 class="font-bold text-slate-900 dark:text-white">
                  Kearifan Ekologi
                </h4>
                <p class="text-sm text-slate-500 mt-1 dark:text-slate-400">
                  Menjelaskan hubungan sakral antara manusia dengan flora dan
                  fauna di tanah Papua.
                </p>
              </div>
            </div>

            <div
              class="group flex items-start gap-4 rounded-2xl bg-slate-50 p-5 border border-slate-100 transition-all hover:bg-white hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-500/10 dark:bg-white/5 dark:border-white/5 dark:hover:bg-white/10 dark:hover:border-emerald-500/30 dark:hover:shadow-none"
            >
              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-2xl group-hover:scale-110 transition-transform dark:bg-emerald-500/20"
              >
                🗣️
              </div>
              <div>
                <h4 class="font-bold text-slate-900 dark:text-white">
                  Tradisi Lisan
                </h4>
                <p class="text-sm text-slate-500 mt-1 dark:text-slate-400">
                  Mengasah daya ingat dan kemampuan bercerita melalui tutur
                  bahasa daerah.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 flex flex-col items-center gap-2">
        <div
          class="h-12 w-px bg-gradient-to-b from-orange-500/50 to-transparent"
        ></div>
        <p
          class="text-[10px] font-bold text-slate-400 tracking-[0.4em] uppercase dark:text-slate-500"
        >
          Eksplorasi Legenda
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.folklore-visible {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

/* Fallback font jika Playfair Display tidak ter-import */
h2 {
  font-family: "Playfair Display", ui-serif, Georgia, Cambria, "Times New Roman",
    Times, serif;
}
</style>
