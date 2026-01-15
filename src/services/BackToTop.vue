<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { AnOutlinedArrowUp } from "@kalimahapps/vue-icons";

const showButton = ref<boolean>(false);
const handleScroll = (): void => {
  showButton.value = window.scrollY > 200;
};
const scrollToTop = (): void => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <button
    v-if="showButton"
    @click="scrollToTop"
    class="z-[100] cursor-pointer fixed bottom-5 right-5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white p-3 rounded-full shadow-lg transition-opacity duration-300 hover:bg-green-300"
    aria-label="Back to top"
  >
    <AnOutlinedArrowUp />
  </button>
</template>

<style scoped></style>
