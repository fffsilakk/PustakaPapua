<template>
  <section class="max-w-4xl mx-auto px-4 py-8" v-if="item">
    <button
      type="button"
      class="text-xs text-slate-300 hover:text-emerald-300 mb-3"
      @click="goBack"
    >
      ← Kembali ke daftar budaya
    </button>

    <header class="mb-4">
      <h1 class="text-2xl font-semibold mb-1">
        {{ item.name }}
      </h1>
      <p class="text-xs text-slate-400">
        {{ categoryLabel }} • {{ item.region }}
      </p>
    </header>

    <div
      class="rounded-lg overflow-hidden border border-slate-800 bg-slate-900/60 mb-4"
    >
      <img
        v-if="item.imageUrl"
        :src="item.imageUrl"
        :alt="item.name"
        class="w-full h-56 object-cover"
      />
    </div>

    <section
      class="mb-4 flex flex-wrap gap-3 items-center justify-between rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-3"
    >
      <div class="text-xs text-slate-300 max-w-md">
        Melalui dokumentasi digital seperti ini, generasi muda bisa mengenal dan
        melestarikan budaya lokal meski tinggal jauh dari pusat kota.
      </div>
      <div class="flex items-center gap-3">
        <button
          type="button"
          class="text-[11px] px-3 py-1 rounded-md border"
          :class="
            item.isFavorite
              ? 'border-emerald-400 text-emerald-300'
              : 'border-slate-600 text-slate-300 hover:border-emerald-400'
          "
          @click="toggleFavorite"
        >
          {{ item.isFavorite ? "Hapus dari Favorit" : "Tambah ke Favorit" }}
        </button>
        <button
          type="button"
          class="text-[11px] px-3 py-1 rounded-md border border-emerald-500 text-emerald-300 hover:bg-emerald-500/10"
          @click="markOffline"
        >
          {{
            item.isOfflineAvailable
              ? "Perbarui Konten Offline"
              : "Simpan Offline"
          }}
        </button>
      </div>
    </section>

    <section class="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
      <div class="space-y-3">
        <p
          v-for="(paragraph, idx) in item.description"
          :key="idx"
          class="text-sm text-slate-200 leading-relaxed"
        >
          {{ paragraph }}
        </p>
      </div>
    </section>
  </section>

  <section v-else class="max-w-4xl mx-auto px-4 py-8">
    <p class="text-sm text-slate-300">Data budaya tidak ditemukan.</p>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useCultureStore } from "../../stores/cultureStore";

const route = useRoute();
const router = useRouter();
const cultureStore = useCultureStore();

const itemId = computed(() => route.params.id as string);
const item = computed(() => cultureStore.getById(itemId.value));

const categoryLabel = computed(() => {
  if (!item.value) return "";
  switch (item.value.category) {
    case "tarian":
      return "Tarian";
    case "musik":
      return "Musik";
    case "bahasa":
      return "Bahasa Daerah";
    case "cerita":
      return "Cerita Rakyat";
    default:
      return "Budaya";
  }
});

const goBack = () => {
  router.push({ name: "CultureList" });
};

const toggleFavorite = () => {
  if (!item.value) return;
  cultureStore.toggleFavorite(item.value.id);
};

const markOffline = () => {
  if (!item.value) return;
  cultureStore.markOffline(item.value.id);
  // nanti di sini integrasi download konten ke cache offline
};
</script>
