<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useDanceStore } from "../../../../stores/danceStore";
import type { Dance } from "../../../../data/dance";
import DanceCard from "./DanceCard.vue";

const danceStore = useDanceStore();
const { filteredItems } = storeToRefs(danceStore);

const showDetail = ref(false);
const selectedDance = ref<Dance | null>(null);

const handleOpenDetail = (dance: Dance) => {
  selectedDance.value = dance;
  showDetail.value = true;
};

const handleCloseDetail = () => {
  showDetail.value = false;
  selectedDance.value = null;
};
</script>

<template>
  <section
    class="bg-slate-50/60 px-4 pb-16 pt-4 sm:px-6 lg:px-8 dark:bg-slate-950/60"
  >
    <!-- Judul section kecil -->
    <div class="mx-auto mb-6 flex max-w-6xl items-center justify-between gap-3">
      <div>
        <h2 class="text-lg font-semibold text-slate-900 dark:text-slate-50">
          Daftar tarian adat
        </h2>
        <p class="text-sm text-slate-500 dark:text-slate-400">
          Pilih salah satu tarian untuk melihat detail gerakan dan maknanya.
        </p>
      </div>
      <p class="text-xs text-slate-500 dark:text-slate-400">
        {{ filteredItems.length }} tarian
      </p>
    </div>

    <!-- Grid kartu -->
    <div
      class="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-6"
    >
      <DanceCard
        v-for="dance in filteredItems"
        :key="dance.id"
        :dance="dance"
        @open-detail="handleOpenDetail"
        @toggle-favorite="danceStore.toggleFavorite"
      />
    </div>

    <!-- Empty state -->
    <div
      v-if="filteredItems.length === 0"
      class="mx-auto mt-10 flex max-w-lg flex-col items-center rounded-2xl border border-dashed border-slate-300 bg-white/80 px-6 py-10 text-center dark:border-slate-700 dark:bg-slate-900/80"
    >
      <p class="text-sm font-semibold text-slate-700 dark:text-slate-100">
        Belum ada tarian yang cocok dengan filter.
      </p>
      <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
        Coba ubah kata kunci atau kategori yang digunakan.
      </p>
    </div>

    <!-- Modal detail sederhana -->
    <Teleport to="body">
      <transition name="fade">
        <div
          v-if="showDetail && selectedDance"
          class="fixed inset-0 z-40 flex items-center justify-center bg-slate-900/70 px-4"
          @click.self="handleCloseDetail"
        >
          <div
            class="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white shadow-2xl dark:bg-slate-950 dark:border dark:border-slate-700"
          >
            <button
              type="button"
              class="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 shadow-sm hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
              @click="handleCloseDetail"
            >
              ✕
            </button>

            <!-- Gambar -->
            <div
              class="h-48 w-full overflow-hidden rounded-t-2xl bg-slate-200 dark:bg-slate-800"
            >
              <img
                :src="selectedDance.thumbnail"
                :alt="selectedDance.name"
                class="h-full w-full object-cover"
              />
            </div>

            <!-- Konten detail -->
            <div class="px-5 pb-5 pt-4">
              <p
                class="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700 dark:text-amber-300"
              >
                Tarian adat · {{ selectedDance.region }}
              </p>
              <h3
                class="mt-1 text-xl font-semibold text-slate-900 dark:text-slate-50"
              >
                {{ selectedDance.name }}
              </h3>

              <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">
                {{ selectedDance.description }}
              </p>

              <dl
                class="mt-4 grid grid-cols-1 gap-3 text-sm text-slate-700 dark:text-slate-200 sm:grid-cols-2"
              >
                <div v-if="selectedDance.attributes.jumlahPenari">
                  <dt
                    class="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400"
                  >
                    Jumlah penari
                  </dt>
                  <dd class="mt-0.5">
                    {{ selectedDance.attributes.jumlahPenari }}
                  </dd>
                </div>
                <div v-if="selectedDance.attributes.musikPengiring">
                  <dt
                    class="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400"
                  >
                    Musik pengiring
                  </dt>
                  <dd class="mt-0.5">
                    {{ selectedDance.attributes.musikPengiring }}
                  </dd>
                </div>
                <div v-if="selectedDance.attributes.properti">
                  <dt
                    class="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400"
                  >
                    Properti
                  </dt>
                  <dd class="mt-0.5">
                    {{ selectedDance.attributes.properti }}
                  </dd>
                </div>
                <div v-if="selectedDance.attributes.suasana">
                  <dt
                    class="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400"
                  >
                    Suasana
                  </dt>
                  <dd class="mt-0.5">
                    {{ selectedDance.attributes.suasana }}
                  </dd>
                </div>
              </dl>
              <!-- ... di dalam modal DanceListGrid.vue, setelah <dl> -->
              <div
                v-if="
                  selectedDance.funFacts?.length ||
                  selectedDance.reflectionQuestions?.length
                "
                class="mt-6 rounded-2xl border border-amber-100 bg-amber-50/70 px-4 py-4 text-sm dark:border-amber-500/30 dark:bg-amber-500/5"
              >
                <h4
                  class="text-xs font-semibold uppercase tracking-[0.16em] text-amber-800 dark:text-amber-300"
                >
                  Mode belajar · Tahukah kamu?
                </h4>

                <ul
                  v-if="selectedDance.funFacts?.length"
                  class="mt-2 list-disc space-y-1 pl-4 text-slate-700 dark:text-slate-200"
                >
                  <li v-for="(fact, idx) in selectedDance.funFacts" :key="idx">
                    {{ fact }}
                  </li>
                </ul>

                <div
                  v-if="selectedDance.reflectionQuestions?.length"
                  class="mt-4 rounded-xl bg-white/70 px-3 py-3 text-xs dark:bg-slate-900/70"
                >
                  <p class="font-semibold text-slate-800 dark:text-slate-100">
                    Pertanyaan refleksi untuk siswa:
                  </p>
                  <ol
                    class="mt-2 list-decimal space-y-1 pl-4 text-slate-700 dark:text-slate-200"
                  >
                    <li
                      v-for="(q, idx) in selectedDance.reflectionQuestions"
                      :key="idx"
                    >
                      {{ q }}
                    </li>
                  </ol>
                </div>
              </div>
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
  transition: opacity 0.18s ease-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
