<script setup lang="ts">
import { ref } from "vue";
import type { Destination } from "../../../../data/destination";
import { destinations } from "../../../../data/destination";

type MapPin = {
  id: string;
  label: string;
  top: string; // posisi relatif (persentase)
  left: string;
  destinationId?: string;
};

const pins: MapPin[] = [
  {
    id: "pin-raja-ampat",
    label: "Raja Ampat",
    top: "30%",
    left: "10%",
    destinationId: "raja-ampat",
  },
  {
    id: "pin-danau-sentani",
    label: "Danau Sentani",
    top: "25%",
    left: "55%",
    destinationId: "danau-sentani",
  },
  {
    id: "pin-lembah-baliem",
    label: "Lembah Baliem",
    top: "55%",
    left: "60%",
    destinationId: "lembah-baliem",
  },
  {
    id: "pin-teluk-cenderawasih",
    label: "Teluk Cenderawasih",
    top: "20%",
    left: "35%",
    destinationId: "teluk-cenderawasih",
  },
  {
    id: "pin-lorentz",
    label: "Taman Nasional Lorentz",
    top: "65%",
    left: "50%",
    destinationId: "taman-nasional-lorentz",
  },
];

const showModal = ref(false);
const selectedDestination = ref<Destination | null>(null);

const handleOpenPin = (pin: MapPin) => {
  if (!pin.destinationId) return;
  const dest = destinations.find((d) => d.id === pin.destinationId) ?? null;
  selectedDestination.value = dest;
  showModal.value = !!dest;
};

const handleCloseModal = () => {
  showModal.value = false;
  selectedDestination.value = null;
};
</script>

<template>
  <section
    class="bg-slate-50 px-4 pb-16 pt-10 sm:px-6 lg:px-8 dark:bg-slate-950"
  >
    <div class="mx-auto max-w-6xl">
      <div
        class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
      >
        <div>
          <h2
            class="text-xl font-semibold text-slate-900 sm:text-2xl dark:text-slate-50"
          >
            Peta sederhana Papua
          </h2>
          <p class="mt-1 text-sm text-slate-600 dark:text-slate-300">
            Klik titik pada peta untuk melihat ringkasan destinasi utama.
          </p>
        </div>
        <p class="text-xs text-slate-500 dark:text-slate-400">
          Posisi hanya ilustrasi, bukan peta akurat.
        </p>
      </div>

      <!-- Peta + pin -->
      <div
        class="relative mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm dark:border-slate-700 dark:bg-slate-900"
      >
        <!-- Gambar peta -->
        <img
          src="https://www.lamudi.co.id/journal/wp-content/uploads/2022/10/Pulau-Papua.jpg"
          alt="Ilustrasi peta Papua"
          class="h-auto w-full object-cover"
        />

        <!-- Pin destinasi -->
        <button
          v-for="pin in pins"
          :key="pin.id"
          type="button"
          class="group absolute -translate-x-1/2 -translate-y-1/2"
          :style="{ top: pin.top, left: pin.left }"
          @click="handleOpenPin(pin)"
        >
          <span
            class="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 shadow-md shadow-emerald-500/50 ring-2 ring-white transition group-hover:bg-emerald-400 dark:ring-slate-900"
          />
          <span
            class="mt-1 inline-flex rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] font-medium text-slate-50 backdrop-blur-sm opacity-0 translate-y-1 transition group-hover:opacity-100 group-hover:translate-y-0"
          >
            {{ pin.label }}
          </span>
        </button>
      </div>
    </div>

    <!-- Modal kecil ringkasan destinasi -->
    <Teleport to="body">
      <transition name="fade">
        <div
          v-if="showModal && selectedDestination"
          class="fixed inset-0 z-40 flex items-center justify-center bg-slate-900/70 px-4"
          @click.self="handleCloseModal"
        >
          <div
            class="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-slate-950 dark:border dark:border-slate-700"
          >
            <button
              type="button"
              class="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 shadow-sm hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
              @click="handleCloseModal"
            >
              ✕
            </button>

            <div class="px-5 pb-5 pt-4">
              <p
                class="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-300"
              >
                Destinasi di Papua
              </p>
              <h3
                class="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-50"
              >
                {{ selectedDestination.name }}
              </h3>
              <p
                class="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400"
              >
                {{ selectedDestination.location }}
              </p>

              <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">
                {{ selectedDestination.shortDescription }}
              </p>

              <p class="mt-3 text-[11px] text-slate-500 dark:text-slate-400">
                Aktivitas utama: {{ selectedDestination.activities }}
              </p>
            </div>
          </div>
        </div>
      </transition>
    </Teleport>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
