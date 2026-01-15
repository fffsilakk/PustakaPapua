<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { Sun, Moon } from "lucide-vue-next";

// Theme state
const isDark = ref<boolean>(false);

// Navbar states
const scrolled = ref<boolean>(false);
// const mobileMenuOpen = ref<boolean>(false);
// const activeDropdown = ref<string | null>(null);
const activeDesktopDropdown = ref<string | null>(null);

onMounted(() => {
  // Initialize theme
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    isDark.value = true;
    document.documentElement.classList.add("dark");
  }

  // Scroll listener
  window.addEventListener("scroll", handleScroll);

  // Close dropdown when clicking outside
  window.addEventListener("click", handleOutsideClick);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("click", handleOutsideClick);
  document.body.style.overflow = "";
});

// Theme toggle
const toggleDarkMode = (): void => {
  isDark.value = !isDark.value;

  if (isDark.value) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
};

// Navbar scroll effect
const handleScroll = (): void => {
  scrolled.value = window.scrollY > 20;
};

// Mobile menu toggle
// const toggleMobileMenu = (): void => {
//   mobileMenuOpen.value = !mobileMenuOpen.value;

//   if (mobileMenuOpen.value) {
//     document.body.style.overflow = "hidden";
//   } else {
//     document.body.style.overflow = "";
//   }
// };

// // Close mobile menu
// const closeMobileMenu = (): void => {
//   mobileMenuOpen.value = false;
//   document.body.style.overflow = "";
// };

// // Dropdown handlers
// const toggleDropdown = (dropdown: string): void => {
//   activeDropdown.value = activeDropdown.value === dropdown ? null : dropdown;
// };

// const toggleDesktopDropdown = (dropdown: string): void => {
//   activeDesktopDropdown.value =
//     activeDesktopDropdown.value === dropdown ? null : dropdown;
// };

const closeDesktopDropdown = (): void => {
  activeDesktopDropdown.value = null;
};

// Close dropdown when clicking outside
const handleOutsideClick = (e: MouseEvent): void => {
  if (!e.target || !(e.target as Element).closest(".dropdown-container")) {
    closeDesktopDropdown();
  }
};
</script>

<template>
  <!-- Toggle Dark Mode -->
  <button
    @click="toggleDarkMode"
    class="flex items-center mt-2 py-3 justify-center w-9 h-9 rounded-full cursor-pointer hover:bg-gray-200 dark:hover:bg-neutral-800 transition"
    type="button"
    aria-label="Toggle dark mode"
  >
    <Sun v-if="isDark" class="w-5 h-5 text-yellow-400" />
    <Moon v-else class="w-5 h-5 text-gray-700 dark:text-gray-300" />
  </button>
</template>
