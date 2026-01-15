<!-- <template>
  <section class="max-w-4xl mx-auto px-4 py-8">
    <h1 class="text-2xl font-semibold mb-4">Keranjang</h1>

    <div v-if="items.length === 0" class="text-sm text-slate-300">
      Keranjang masih kosong. Silakan pilih produk UMKM terlebih dahulu.
    </div>

    <div v-else class="space-y-4">
      <div
        v-for="item in items"
        :key="item.id"
        class="flex items-center justify-between border border-slate-800 bg-slate-900/60 rounded-lg px-3 py-2"
      >
        <div>
          <p class="text-sm font-medium">{{ item.name }}</p>
          <p class="text-xs text-slate-400">
            {{ item.origin }} • {{ formatPrice(item.price) }} x
            {{ item.quantity }}
          </p>
        </div>
        <div class="flex items-center gap-2">
          <input
            type="number"
            min="1"
            class="w-16 text-xs bg-slate-900 border border-slate-700 rounded px-1 py-0.5"
            :value="item.quantity"
            @input="onQuantityChange(item.id, $event)"
          />
          <button
            type="button"
            class="text-[11px] text-red-300 hover:text-red-400"
            @click="umkmStore.removeFromCart(item.id)"
          >
            Hapus
          </button>
        </div>
      </div>

      <div
        class="flex items-center justify-between border-t border-slate-800 pt-4 mt-2"
      >
        <p class="text-sm">
          Total:
          <span class="font-semibold text-emerald-300">
            {{ formatPrice(total) }}
          </span>
        </p>
        <button
          type="button"
          class="text-xs px-4 py-2 rounded-md font-medium"
          :class="
            isOnline
              ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400'
              : 'bg-slate-800 text-slate-400 cursor-not-allowed'
          "
          @click="handleCheckout"
        >
          {{ isOnline ? "Simulasi Checkout" : "Checkout membutuhkan koneksi" }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useUmkmStore } from "../../stores/umkmStore";
import { useOfflineStore } from "../../stores/offlineStore";

const umkmStore = useUmkmStore();
const { cartDetailed: items, cartTotal: total } = storeToRefs(umkmStore);

const offlineStore = useOfflineStore();
const isOnline = computed(() => offlineStore.isOnline);

const formatPrice = (value: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(
    value
  );

const onQuantityChange = (id: string, event: Event) => {
  const target = event.target as HTMLInputElement;
  const value = Number(target.value || "0");
  umkmStore.updateQuantity(id, value);
};

const handleCheckout = () => {
  if (!isOnline.value) {
    alert(
      "Checkout membutuhkan koneksi internet. Silakan coba lagi saat online."
    );
    return;
  }

  alert(
    "Ini simulasi checkout untuk keperluan demo lomba. Di versi produksi akan dihubungkan ke payment gateway."
  );
};
</script> -->

<template>
  <section class="max-w-4xl mx-auto px-6 py-12 md:py-20">
    <div class="flex items-center gap-4 mb-10" data-aos="fade-down">
      <div
        class="h-12 w-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      </div>
      <div>
        <h1
          class="text-3xl font-black tracking-tight text-slate-900 dark:text-white"
        >
          Keranjang Saya
        </h1>
        <p class="text-sm text-slate-500 dark:text-slate-400">
          Kelola produk UMKM pilihan Anda
        </p>
      </div>
    </div>

    <div
      v-if="items.length === 0"
      class="text-center py-20 rounded-[32px] border-2 border-dashed border-slate-200 dark:border-slate-800"
      data-aos="zoom-in"
    >
      <div class="text-5xl mb-4">🛒</div>
      <h3 class="text-lg font-bold text-slate-900 dark:text-white">
        Keranjang masih kosong
      </h3>
      <p
        class="text-sm text-slate-500 dark:text-slate-400 mt-2 mb-8 max-w-xs mx-auto"
      >
        Dukung ekonomi lokal dengan membeli produk autentik dari Papua.
      </p>
      <RouterLink
        to="/umkm"
        class="inline-flex items-center justify-center bg-slate-900 dark:bg-emerald-600 text-white px-8 py-3 rounded-xl font-bold text-sm transition-transform active:scale-95"
      >
        Lihat Produk UMKM
      </RouterLink>
    </div>

    <div v-else class="grid gap-8 lg:grid-cols-3">
      <div class="lg:col-span-2 space-y-4">
        <div
          v-for="item in items"
          :key="item.id"
          class="group relative flex flex-col sm:flex-row items-center gap-4 p-4 rounded-3xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900/50"
          data-aos="fade-up"
        >
          <div
            class="h-24 w-24 sm:h-20 sm:w-20 rounded-2xl bg-slate-100 dark:bg-slate-800 overflow-hidden flex-shrink-0"
          >
            <img
              {{
              item.image
              }}
              alt="produk"
              class="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          <div class="flex-grow text-center sm:text-left">
            <p class="text-base font-bold text-slate-900 dark:text-white">
              {{ item.name }}
            </p>
            <p
              class="text-xs font-medium text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mt-0.5"
            >
              {{ item.origin }}
            </p>
            <p class="text-sm font-semibold text-slate-500 mt-1">
              {{ formatPrice(item.price) }}
            </p>
          </div>

          <div
            class="flex items-center gap-3 bg-slate-50 dark:bg-slate-950 p-2 rounded-2xl border border-slate-100 dark:border-slate-800"
          >
            <button
              @click="umkmStore.updateQuantity(item.id, item.quantity - 1)"
              class="w-8 h-8 flex items-center justify-center rounded-xl hover:bg-white dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400"
            >
              -
            </button>
            <span class="text-sm font-bold w-4 text-center">{{
              item.quantity
            }}</span>
            <button
              @click="umkmStore.updateQuantity(item.id, item.quantity + 1)"
              class="w-8 h-8 flex items-center justify-center rounded-xl hover:bg-white dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400"
            >
              +
            </button>
          </div>

          <button
            type="button"
            class="p-2 text-slate-300 hover:text-red-500 transition-colors"
            @click="umkmStore.removeFromCart(item.id)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <div class="lg:col-span-1">
        <div
          class="sticky top-24 p-6 rounded-[32px] border border-slate-200 bg-white shadow-xl shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none"
        >
          <h3 class="text-lg font-black text-slate-900 dark:text-white mb-6">
            Ringkasan Pesanan
          </h3>

          <div
            class="space-y-4 mb-6 border-b border-slate-100 dark:border-slate-800 pb-6"
          >
            <div class="flex justify-between text-sm">
              <span class="text-slate-500">Subtotal</span>
              <span class="font-bold text-slate-900 dark:text-white">{{
                formatPrice(total)
              }}</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-slate-500">Pajak (0%)</span>
              <span class="font-bold text-slate-900 dark:text-white">Rp 0</span>
            </div>
          </div>

          <div class="flex justify-between items-end mb-8">
            <span class="text-sm font-bold text-slate-900 dark:text-white"
              >Total Akhir</span
            >
            <span
              class="text-2xl font-black text-emerald-600 dark:text-emerald-400"
              >{{ formatPrice(total) }}</span
            >
          </div>

          <div
            v-if="!isOnline"
            class="mb-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-700 dark:text-amber-400 flex gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Mode Offline Aktif. Checkout hanya tersedia saat terhubung internet.
          </div>

          <button
            type="button"
            class="w-full py-4 rounded-2xl font-black text-sm transition-all active:scale-95 shadow-lg shadow-emerald-200 dark:shadow-none"
            :class="
              isOnline
                ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                : 'bg-slate-100 text-slate-400 cursor-not-allowed dark:bg-slate-800'
            "
            @click="handleCheckout"
          >
            {{ isOnline ? "LANJUT KE PEMBAYARAN" : "KONEKSI DIBUTUHKAN" }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Script tetap sama dengan logic Pinia Anda
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useUmkmStore } from "../../stores/umkmStore";
import { useOfflineStore } from "../../stores/offlineStore";

const umkmStore = useUmkmStore();
const { cartDetailed: items, cartTotal: total } = storeToRefs(umkmStore);

const offlineStore = useOfflineStore();
const isOnline = computed(() => offlineStore.isOnline);

const formatPrice = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);

const handleCheckout = () => {
  if (!isOnline.value) return;
  alert(
    "Ini simulasi checkout untuk keperluan demo lomba. Di versi produksi akan dihubungkan ke payment gateway."
  );
};
</script>
