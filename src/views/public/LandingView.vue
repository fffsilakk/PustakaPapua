<template>
  <section class="max-w-6xl mx-auto px-4 py-10">
    <div class="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 class="text-3xl md:text-4xl font-bold mb-4">Smart Pustaka Timur</h1>
        <p class="text-slate-300 mb-4">
          Platform edukasi offline-first, pelestarian budaya, dan pemberdayaan
          UMKM untuk generasi Papua dan Timur Indonesia.
        </p>
        <div class="flex flex-wrap gap-3">
          <RouterLink
            to="/belajar"
            class="px-4 py-2 rounded-md bg-emerald-500 text-slate-950 font-medium hover:bg-emerald-400"
          >
            Mulai Belajar
          </RouterLink>
          <RouterLink
            to="/budaya"
            class="px-4 py-2 rounded-md border border-slate-600 hover:border-emerald-400"
          >
            Jelajahi Budaya
          </RouterLink>
        </div>
      </div>
      <div class="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
        <p class="text-sm text-emerald-300 mb-2">
          Offline-First · PWA · Untuk Daerah Blank Spot
        </p>
        <p class="text-sm text-slate-300">
          Aplikasi ini tetap bisa diakses meski tanpa internet setelah konten
          diunduh. Dirancang untuk sekolah dan komunitas di pegunungan Papua.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
