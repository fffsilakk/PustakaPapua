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
          entry.target.classList.add("house-about-enter");
          observer?.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
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
    class="relative overflow-hidden bg-white px-4 pb-16 pt-12 opacity-0 translate-y-6 transition-all duration-700 ease-out sm:px-6 lg:px-8 dark:bg-slate-950"
  >
    <!-- ornamen background -->
    <div
      class="pointer-events-none absolute -top-10 left-[-5%] h-32 w-32 rounded-full bg-amber-200/40 blur-3xl dark:bg-amber-500/20"
    />
    <div
      class="pointer-events-none absolute bottom-[-6rem] right-[-5%] h-40 w-40 rounded-full bg-sky-200/40 blur-3xl dark:bg-sky-500/20"
    />

    <div
      class="relative mx-auto max-w-4xl rounded-3xl border border-slate-100 bg-white/90 px-6 py-8 shadow-sm backdrop-blur-sm sm:px-8 sm:py-9 dark:border-slate-700/70 dark:bg-slate-900/80"
    >
      <!-- header -->
      <div class="flex flex-col items-center gap-3 text-center">
        <span
          class="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-800 dark:border-amber-400/40 dark:bg-amber-500/10 dark:text-amber-200"
        >
          <span class="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Makna rumah adat Papua
        </span>

        <h2
          class="text-xl font-semibold text-slate-900 sm:text-2xl dark:text-slate-50"
        >
          Lebih dari sekadar tempat berteduh.
        </h2>
      </div>

      <!-- konten -->
      <div
        class="mt-6 grid gap-6 text-sm text-slate-600 sm:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] sm:items-start dark:text-slate-300"
      >
        <!-- teks utama -->
        <div class="space-y-3">
          <p class="leading-relaxed">
            Setiap rumah adat di Papua dibangun dengan pertimbangan alam, iklim,
            dan cara hidup masyarakatnya. Bentuk Honai yang bundar membantu
            menahan dingin, sedangkan rumah panggung di pesisir memudahkan akses
            ke laut dan danau.
          </p>
          <p class="leading-relaxed">
            Di dalam rumah-rumah ini, anak-anak belajar adat, menerima nasihat
            orang tua, dan mengalami kebersamaan. Dengan memahami rumah adat,
            generasi muda dapat melihat bagaimana leluhur mengatur ruang hidup
            yang sederhana namun penuh makna.
          </p>
        </div>

        <!-- poin-poin -->
        <div
          class="grid gap-3 rounded-2xl bg-slate-50 p-4 text-left shadow-sm sm:p-5 dark:bg-slate-900/70 dark:border dark:border-slate-700"
        >
          <div class="flex items-start gap-3">
            <div
              class="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-lg dark:bg-amber-500/20"
            >
              🏠
            </div>
            <div>
              <h3
                class="text-xs font-semibold uppercase tracking-[0.16em] text-amber-700 dark:text-amber-300"
              >
                Cermin lingkungan
              </h3>
              <p class="mt-1 text-xs text-slate-600 dark:text-slate-300">
                Desain rumah menyesuaikan dengan iklim pegunungan, pesisir, atau
                danau di sekitarnya.
              </p>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <div
              class="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-lg dark:bg-emerald-500/20"
            >
              👨‍👩‍👧‍👦
            </div>
            <div>
              <h3
                class="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700 dark:text-emerald-300"
              >
                Ruang komunitas
              </h3>
              <p class="mt-1 text-xs text-slate-600 dark:text-slate-300">
                Menjadi tempat berkumpul, bermusyawarah, dan merayakan
                kebersamaan dalam adat.
              </p>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <div
              class="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-lg dark:bg-sky-500/20"
            >
              📚
            </div>
            <div>
              <h3
                class="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700 dark:text-sky-300"
              >
                Sekolah kehidupan
              </h3>
              <p class="mt-1 text-xs text-slate-600 dark:text-slate-300">
                Di dalam rumah adat, nilai-nilai kerja sama, hormat, dan
                tanggung jawab diturunkan dari generasi ke generasi.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- bar bawah -->
      <div
        class="mt-6 flex flex-wrap items-center justify-center gap-3 text-[11px] text-slate-500 dark:text-slate-400"
      >
        <span class="inline-flex items-center gap-1.5">
          <span class="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Banyak rumah adat dibangun tanpa paku, hanya dengan tali dan ikatan
          tradisional.
        </span>
        <span
          class="hidden h-3 w-px bg-slate-300 sm:inline-block dark:bg-slate-600"
        />
        <span class="inline-flex items-center gap-1.5">
          <span class="h-1.5 w-1.5 rounded-full bg-amber-400" />
          Dokumentasi bentuk dan fungsi rumah adat membantu pelestarian jangka
          panjang.
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.house-about-enter {
  opacity: 1 !important;
  transform: translateY(0) !important;
}
</style>
