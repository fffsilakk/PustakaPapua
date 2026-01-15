<template>
  <div class="relative w-full max-w-xl mx-auto mb-8" data-aos="fade-up">
    <div class="relative group">
      <div
        class="absolute inset-y-0 left-5 flex items-center pointer-events-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 text-slate-400 group-focus-within:text-orange-500 transition-colors"
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
        placeholder="Cari kopi, noken, atau kerajinan..."
        class="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm rounded-[20px] py-4 pl-14 pr-16 shadow-sm focus:outline-none focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 transition-all placeholder:text-slate-400"
      />

      <button
        v-if="modelValue"
        @click="clearSearch"
        class="absolute inset-y-0 right-4 flex items-center px-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>

    <div class="hidden md:flex justify-center mt-3 gap-3">
      <span class="text-[10px] text-slate-400 uppercase tracking-widest"
        >Saran:</span
      >
      <button
        v-for="tag in suggestions"
        :key="tag"
        @click="$emit('update:modelValue', tag)"
        class="text-[10px] font-bold text-orange-600/70 hover:text-orange-600 uppercase tracking-tighter transition-colors"
      >
        #{{ tag }}
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

const suggestions = ["Noken", "Arabika", "Patung", "Madu"];

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};

const clearSearch = () => {
  emit("update:modelValue", "");
};
</script>
