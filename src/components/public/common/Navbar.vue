<template>
  <header class="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
    <nav class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <span class="font-semibold text-lg">Smart Pustaka Timur</span>
      </div>
      <div class="flex items-center gap-4 text-sm">
        <RouterLink to="/" class="hover:text-emerald-400">Beranda</RouterLink>
        <RouterLink to="/belajar" class="hover:text-emerald-400"
          >Belajar</RouterLink
        >
        <RouterLink to="/budaya" class="hover:text-emerald-400"
          >Budaya</RouterLink
        >
        <RouterLink to="/umkm" class="hover:text-emerald-400">UMKM</RouterLink>
        <RouterLink to="/cart" class="hover:text-emerald-400">Cart</RouterLink>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
