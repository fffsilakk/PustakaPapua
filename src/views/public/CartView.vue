<template>
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
</script>
