<template>
  <footer
    class="w-full bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 mt-16"
  >
    <!-- Wrapper utama -->
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <!-- Bagian atas -->
      <div
        class="py-10 lg:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 text-sm text-slate-500 dark:text-slate-400"
      >
        <!-- Brand + Deskripsi -->
        <div class="sm:col-span-2 lg:col-span-2">
          <div class="flex items-center gap-2">
            <!-- Logo sederhana -->
            <div
              class="h-9 w-11 rounded-xl flex items-center justify-center text-white font-bold flex-shrink-0"
            >
              <div
                class="flex items-center justify-center transition-all duration-300"
              >
                <img
                  src="/Logo/Logoo.png"
                  alt="Logo"
                  class="h-full w-full transition-all hover:rotate-6 object-contain dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                />
              </div>
            </div>
            <div class="flex flex-col">
              <span
                class="text-base font-semibold text-slate-900 dark:text-slate-100"
              >
                Pustaka Papua
              </span>
              <span class="text-xs text-slate-400 dark:text-slate-500">
                Belajar, budaya, dan UMKM tanpa batas sinyal.
              </span>
            </div>
          </div>
          <p class="mt-4 text-sm leading-relaxed max-w-md">
            Pustaka Timur adalah platform pembelajaran dan literasi digital
            untuk Papua dan Indonesia Timur, dirancang agar tetap nyaman diakses
            meski koneksi internet terbatas.
          </p>
        </div>

        <!-- Menu -->
        <div class="flex flex-col">
          <h2 class="font-semibold mb-4 text-slate-900 dark:text-slate-100">
            Menu
          </h2>
          <nav class="flex flex-col space-y-2.5">
            <RouterLink
              to="/"
              class="hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
            >
              Beranda
            </RouterLink>
            <RouterLink
              to="/belajar"
              class="hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
            >
              Belajar
            </RouterLink>
            <RouterLink
              to="/umkm"
              class="hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
            >
              UMKM
            </RouterLink>
            <RouterLink
              to="/budaya"
              class="hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
            >
              Budaya & Komunitas
            </RouterLink>
            <RouterLink
              to="/tentang"
              class="hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
            >
              Tentang Pustaka Papua
            </RouterLink>
          </nav>
        </div>

        <!-- Newsletter -->
        <div>
          <h2 class="font-semibold text-slate-900 dark:text-slate-100 mb-4">
            Tetap terhubung
          </h2>
          <p class="text-sm mb-4">
            Dapatkan info rilis konten baru, modul belajar, dan kabar UMKM
            langsung ke email kamu.
          </p>
          <form
            class="flex flex-col xs:flex-row items-stretch gap-2 p-2 rounded-xl bg-slate-50 dark:bg-slate-900/60"
          >
            <input
              class="flex-1 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 min-w-0"
              type="email"
              placeholder="Masukkan email kamu"
            />
            <button
              type="submit"
              class="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
            >
              Berlangganan
            </button>
          </form>
          <p class="mt-2 text-[11px] text-slate-400 dark:text-slate-500">
            Tidak spam. Kamu bisa berhenti berlangganan kapan saja.
          </p>
        </div>
      </div>

      <!-- Bottom bar -->
      <div
        class="border-t border-slate-100 dark:border-slate-800 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-[11px] text-slate-400 dark:text-slate-500"
      >
        <p class="text-center md:text-left">
          © {{ new Date().getFullYear() }} Pustaka Papua. All rights reserved.
        </p>
        <div class="flex items-center gap-4 flex-wrap justify-center">
          <RouterLink
            to="/kebijakan-privasi"
            class="hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
          >
            Kebijakan Privasi
          </RouterLink>
          <RouterLink
            to="/syarat-ketentuan"
            class="hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
          >
            Syarat & Ketentuan
          </RouterLink>
        </div>
      </div>
    </div>
  </footer>
</template>
<script lang="ts" setup></script>
