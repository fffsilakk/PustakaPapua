<template>
  <section
    class="relative h-[85vh] md:h-screen w-full overflow-hidden flex items-end"
  >
    <div class="absolute inset-0 z-0">
      <img
        :src="image"
        class="w-full h-full object-cover transform scale-110 animate-slow-zoom"
        alt="Hero Story"
      />
      <div
        class="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-slate-950"
      ></div>
      <div
        class="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-transparent"
      ></div>
    </div>

    <div class="relative z-10 w-full max-w-6xl mx-auto px-6 pb-16 md:pb-24">
      <div class="max-w-3xl space-y-6">
        <div
          class="flex items-center gap-3 animate-fade-in-up"
          style="animation-delay: 200ms"
        >
          <span
            class="px-4 py-1.5 rounded-full bg-emerald-500 text-white text-[10px] font-black uppercase tracking-[0.3em] shadow-lg shadow-emerald-500/20"
          >
            Cerita Rakyat
          </span>
          <span
            class="flex items-center gap-1.5 text-slate-300 font-bold text-xs uppercase tracking-widest"
          >
            <span class="text-emerald-400">📍</span> {{ region }}
          </span>
        </div>

        <h1
          class="text-5xl md:text-8xl font-black text-blue-600 leading-[0.95] tracking-tighter animate-fade-in-up"
          style="animation-delay: 400ms"
        >
          {{ title }}
        </h1>

        <p
          class="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed animate-fade-in-up font-medium"
          style="animation-delay: 600ms"
        >
          Menelusuri jejak keberanian di tanah Papua, di mana setiap aliran
          sungai menyimpan rahasia legenda masa lalu.
        </p>

        <div
          class="flex items-center gap-6 pt-4 animate-fade-in-up"
          style="animation-delay: 800ms"
        >
          <button
            @click="scrollToContent"
            class="group flex items-center gap-3 px-8 py-4 bg-white text-slate-950 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-emerald-500 hover:text-white transition-all duration-300 shadow-2xl"
          >
            Mulai Membaca
            <span class="group-hover:translate-y-1 transition-transform"
              >↓</span
            >
          </button>
        </div>
      </div>
    </div>

    <div
      class="absolute right-0 bottom-0 opacity-10 pointer-events-none hidden lg:block"
    >
      <div
        class="text-[20vh] font-black text-white select-none leading-none -mb-10 -mr-10 rotate-90"
      >
        PAPUA
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  image: string;
  region: string;
}

defineProps<Props>();

const scrollToContent = () => {
  window.scrollTo({
    top: window.innerHeight * 0.8,
    behavior: "smooth",
  });
};
</script>

<style scoped>
/* Keyframe untuk Zoom Halus pada Background */
@keyframes slow-zoom {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}

.animate-slow-zoom {
  animation: slow-zoom 20s infinite alternate ease-in-out;
}

/* Keyframe untuk Entrance Text */
@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  opacity: 0;
  animation: fade-in-up 1s forwards cubic-bezier(0.16, 1, 0.3, 1);
}

/* Tambahan Font Serif untuk kesan sastra (Opsional jika ingin mencampur font) */
h1 {
  text-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}
</style>
