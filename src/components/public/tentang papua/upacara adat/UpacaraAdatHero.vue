<script setup lang="ts"></script>

<template>
  <section
    class="relative overflow-hidden rounded-3xl border border-emerald-100/70 bg-gradient-to-br from-emerald-600 via-emerald-500 to-sky-500 px-5 py-6 text-white shadow-md sm:px-8 sm:py-7 dark:border-emerald-500/40"
  >
    <!-- dekorasi blur -->
    <div
      class="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-emerald-300/40 blur-3xl"
    />
    <div
      class="pointer-events-none absolute -bottom-16 right-0 h-40 w-40 rounded-full bg-sky-300/40 blur-3xl"
    />

    <div
      class="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
    >
      <!-- kiri: judul & deskripsi -->
      <div class="max-w-xl space-y-3">
        <div
          class="inline-flex items-center gap-2 rounded-full bg-emerald-900/30 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-50/90"
        >
          <span class="h-1.5 w-1.5 rounded-full bg-emerald-300" />
          Warisan budaya Papua
        </div>

        <div class="space-y-1.5">
          <h1 class="text-2xl font-semibold leading-snug sm:text-3xl">
            Upacara Adat Papua
          </h1>
          <p class="text-sm text-emerald-50/90">
            Dari Bakar Batu di pegunungan hingga Mbis di tanah Asmat, setiap
            upacara adat menyimpan makna kebersamaan, syukur, dan penghormatan
            kepada leluhur.
          </p>
        </div>

        <div class="flex flex-wrap gap-2 text-[11px]">
          <span
            class="inline-flex items-center gap-1 rounded-full bg-emerald-900/30 px-2.5 py-1"
          >
            🔥 Syukuran & kebersamaan
          </span>
          <span
            class="inline-flex items-center gap-1 rounded-full bg-emerald-900/30 px-2.5 py-1"
          >
            🪵 Penghormatan leluhur
          </span>
          <span
            class="inline-flex items-center gap-1 rounded-full bg-emerald-900/30 px-2.5 py-1"
          >
            🎭 Identitas budaya
          </span>
        </div>
      </div>

      <!-- kanan: panel ilustratif -->
      <div
        class="flex flex-col items-end gap-3 text-right sm:items-stretch sm:text-left"
      >
        <div
          class="inline-flex items-center gap-2 self-end rounded-2xl bg-emerald-900/25 px-3 py-2 text-xs shadow-sm sm:self-auto"
        >
          <div
            class="flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-500/70 text-lg shadow-md shadow-emerald-400/50"
          >
            🪶
          </div>
          <div class="space-y-0.5 text-left">
            <p class="text-[11px] font-semibold uppercase tracking-[0.16em]">
              Upacara adat
            </p>
            <p class="text-[11px] text-emerald-50/90">
              Ritual sakral yang dijaga lintas generasi.
            </p>
          </div>
        </div>

        <div
          class="rounded-2xl bg-emerald-900/25 px-3 py-2 text-[11px] text-emerald-50/90 backdrop-blur-sm"
        >
          <p>
            Gunakan bagian ini untuk mengenalkan berbagai upacara adat kepada
            siswa dan pengunjung, lengkap dengan cerita singkat dan foto.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
