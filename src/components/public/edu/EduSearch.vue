<template>
  <div
    class="relative w-full max-w-2xl mx-auto mb-12"
    data-aos="fade-up"
    data-aos-delay="600"
  >
    <div class="relative group">
      <div
        class="absolute inset-y-0 left-6 flex items-center pointer-events-none z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 text-zinc-400 group-focus-within:text-emerald-500 group-focus-within:scale-110 transition-all duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2.5"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      <input
        type="text"
        :value="modelValue"
        @input="handleInput"
        placeholder="Mau belajar apa? Contoh: 'Coding' atau 'Agrikultur'..."
        class="w-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white text-md rounded-[24px] py-5 pl-16 pr-16 shadow-xl shadow-zinc-200/50 dark:shadow-none focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all placeholder:text-zinc-400 font-medium"
      />

      <button
        v-if="modelValue"
        @click="clearSearch"
        class="absolute inset-y-0 right-5 flex items-center px-2 text-zinc-400 hover:text-rose-500 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div
        class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-emerald-500 to-teal-400 group-focus-within:w-1/2 transition-all duration-500 rounded-full"
      ></div>
    </div>

    <div class="flex flex-wrap justify-center mt-4 gap-2 md:gap-4">
      <span
        class="text-[10px] text-zinc-400 uppercase tracking-[0.2em] w-full text-center mb-1"
        >Topik Populer</span
      >
      <button
        v-for="tag in suggestions"
        :key="tag"
        @click="$emit('update:modelValue', tag)"
        class="px-4 py-1.5 text-[11px] font-bold text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 rounded-full hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-600 hover:border-emerald-200 transition-all transform hover:-translate-y-0.5 active:scale-95"
      >
        {{ tag }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

// Saran disesuaikan dengan modul Edukasi
const suggestions = [
  "Coding",
  "Agrikultur",
  "Bahasa Inggris",
  "Pemasaran Digital",
  "budaya",
];

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};

const clearSearch = () => {
  emit("update:modelValue", "");
};
</script>
