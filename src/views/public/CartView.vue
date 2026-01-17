<template>
  <section
    class="min-h-screen bg-[#fafafa] dark:bg-slate-950 py-12 lg:py-24 transition-colors duration-500"
  >
    <div class="max-w-5xl mx-auto px-6 lg:px-8">
      <header
        class="mb-16 border-b border-slate-200 dark:border-slate-800 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4"
      >
        <div data-aos="fade-up">
          <h1
            class="text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white uppercase italic"
          >
            Tas <span class="text-emerald-500">Belanja</span>
          </h1>
          <p
            class="text-slate-500 dark:text-slate-400 mt-2 font-medium tracking-wide"
          >
            Terima kasih telah mendukung pengrajin lokal tanah Papua.
          </p>
        </div>
        <div class="text-right" data-aos="fade-left">
          <span
            class="text-xs font-black uppercase tracking-[0.3em] text-slate-400"
            >Status</span
          >
          <p class="text-sm font-bold text-emerald-600 dark:text-emerald-400">
            Siap Checkout
          </p>
        </div>
      </header>

      <div
        v-if="items.length === 0"
        class="flex flex-col items-center justify-center py-32 rounded-[40px] bg-white dark:bg-[#0a0a0a] border border-slate-100 dark:border-slate-900 shadow-sm"
        data-aos="zoom-in"
      >
        <div
          class="w-20 h-20 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6"
        >
          <svg
            class="w-8 h-8 text-slate-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              stroke-width="1.5"
            />
          </svg>
        </div>
        <h3 class="text-xl font-bold text-slate-900 dark:text-white">
          Keranjang Kosong
        </h3>
        <RouterLink
          to="/umkm"
          class="mt-6 text-sm font-black uppercase tracking-widest border-b-2 border-emerald-500 pb-1 hover:text-emerald-500 transition-colors"
        >
          Lihat Produk UMKM
        </RouterLink>
      </div>

      <div v-else class="grid gap-16 lg:grid-cols-12">
        <div class="lg:col-span-7">
          <div class="divide-y divide-slate-100 dark:divide-slate-800">
            <div
              v-for="item in items"
              :key="item.id"
              class="py-8 first:pt-0 group flex gap-6"
              data-aos="fade-up"
            >
              <div
                class="h-28 w-24 bg-slate-100 dark:bg-slate-900 rounded-2xl overflow-hidden flex-shrink-0 relative"
              >
                <img
                  :src="item.imageUrl"
                  :alt="item.name"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div class="flex flex-col justify-between flex-grow">
                <div>
                  <div class="flex justify-between items-start">
                    <h3
                      class="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors"
                    >
                      {{ item.name }}
                    </h3>
                    <button
                      @click="umkmStore.removeFromCart(item.id)"
                      class="text-slate-300 hover:text-rose-500 transition-colors"
                    >
                      <svg
                        class="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 18L18 6M6 6l12 12" stroke-width="2" />
                      </svg>
                    </button>
                  </div>
                  <p
                    class="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1"
                  >
                    {{ item.origin }}
                  </p>
                </div>

                <div class="flex items-center justify-between mt-4">
                  <div
                    class="flex items-center border border-slate-200 dark:border-slate-800 rounded-full px-1 py-1"
                  >
                    <button
                      @click="
                        umkmStore.updateQuantity(item.id, item.quantity - 1)
                      "
                      class="w-8 h-8 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center justify-center text-slate-500"
                    >
                      -
                    </button>
                    <span
                      class="text-xs font-black w-8 text-center text-slate-900 dark:text-white"
                      >{{ item.quantity }}</span
                    >
                    <button
                      @click="
                        umkmStore.updateQuantity(item.id, item.quantity + 1)
                      "
                      class="w-8 h-8 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center justify-center text-slate-500"
                    >
                      +
                    </button>
                  </div>
                  <p class="text-sm font-black text-slate-900 dark:text-white">
                    {{ formatPrice(item.price * item.quantity) }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-5">
          <div
            class="bg-white dark:bg-[#0a0a0a] rounded-[40px] p-10 border border-slate-100 dark:border-slate-900 sticky top-32"
          >
            <h2
              class="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-8 text-center"
            >
              Ringkasan
            </h2>

            <div class="space-y-4 mb-10">
              <div class="flex justify-between text-sm">
                <span class="text-slate-500">Subtotal Belanja</span>
                <span class="font-bold text-slate-900 dark:text-white">{{
                  formatPrice(total)
                }}</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-slate-500">Estimasi Ongkir</span>
                <span class="text-emerald-500 font-bold italic"
                  >Gratis Khusus Lomba</span
                >
              </div>
            </div>

            <div
              class="border-t border-slate-100 dark:border-slate-800 pt-6 mb-10"
            >
              <div class="flex justify-between items-end">
                <span class="text-xs font-black uppercase text-slate-400"
                  >Total Akhir</span
                >
                <span
                  class="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tighter"
                  >{{ formatPrice(total) }}</span
                >
              </div>
            </div>

            <button
              @click="handleCheckout"
              :disabled="!isOnline"
              class="w-full py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] transition-all active:scale-95 shadow-2xl shadow-emerald-500/20"
              :class="
                isOnline
                  ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                  : 'bg-slate-100 text-slate-400 dark:bg-slate-800'
              "
            >
              {{ isOnline ? "Lanjutkan Transaksi" : "Koneksi Terputus" }}
            </button>

            <div class="mt-8 flex justify-center gap-4 grayscale opacity-40">
              <span class="text-[10px] font-bold">VISA</span>
              <span class="text-[10px] font-bold">MASTERCARD</span>
              <span class="text-[10px] font-bold">QRIS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-[#fafafa] dark:bg-slate-900 py-10 px-6 lg:px-8">
    <div class="max-w-5xl mx-auto">
      <div class="grid md:grid-cols-3 gap-8 text-center md:text-left">
        <div
          class="p-8 rounded-[2rem] bg-white dark:bg-[#0a0a0a] border border-slate-100 dark:border-slate-900 shadow-sm transition-transform hover:-translate-y-1 duration-300"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div
            class="w-12 h-12 bg-emerald-50 dark:bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 mx-auto md:mx-0"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                stroke-width="1.5"
              />
            </svg>
          </div>
          <h4
            class="text-sm font-black uppercase tracking-widest text-slate-900 dark:text-white mb-3 italic"
          >
            Pengiriman Lokal
          </h4>
          <p
            class="text-xs leading-relaxed text-slate-500 dark:text-slate-400 font-medium"
          >
            Produk dikirim langsung oleh pengrajin UMKM dari berbagai wilayah di
            Papua menggunakan ekspedisi terpercaya.
          </p>
        </div>

        <div
          class="p-8 rounded-[2rem] bg-white dark:bg-[#0a0a0a] border border-slate-100 dark:border-slate-900 shadow-sm transition-transform hover:-translate-y-1 duration-300"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div
            class="w-12 h-12 bg-blue-50 dark:bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 mx-auto md:mx-0"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                stroke-width="1.5"
              />
            </svg>
          </div>
          <h4
            class="text-sm font-black uppercase tracking-widest text-slate-900 dark:text-white mb-3 italic"
          >
            Transaksi Aman
          </h4>
          <p
            class="text-xs leading-relaxed text-slate-500 dark:text-slate-400 font-medium"
          >
            Sistem kami menjamin keamanan pembayaran Anda. Dana hanya akan
            diteruskan ke penjual setelah barang Anda terima.
          </p>
        </div>

        <div
          class="p-8 rounded-[2rem] bg-white dark:bg-[#0a0a0a] border border-slate-100 dark:border-slate-900 shadow-sm transition-transform hover:-translate-y-1 duration-300"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div
            class="w-12 h-12 bg-amber-50 dark:bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-600 dark:text-amber-400 mb-6 mx-auto md:mx-0"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                stroke-width="1.5"
              />
            </svg>
          </div>
          <h4
            class="text-sm font-black uppercase tracking-widest text-slate-900 dark:text-white mb-3 italic"
          >
            Support UMKM
          </h4>
          <p
            class="text-xs leading-relaxed text-slate-500 dark:text-slate-400 font-medium"
          >
            Setiap pembelian Anda berkontribusi langsung pada peningkatan
            ekonomi kreatif masyarakat adat di tanah Papua.
          </p>
        </div>
      </div>

      <div
        class="mt-16 p-6 rounded-[1.5rem] bg-slate-50 dark:bg-[#080808] border border-dashed border-slate-200 dark:border-slate-800 text-center"
        data-aos="fade-in"
      >
        <p
          class="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]"
        >
          Catatan: Harga yang tertera sudah termasuk kontribusi untuk
          pelestarian budaya Papua.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useUmkmStore } from "../../stores/umkmStore";
import { useOfflineStore } from "../../stores/offlineStore";
import Swal from "sweetalert2";

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

  Swal.fire({
    title: "Konfirmasi",
    text: "Lanjutkan ke simulasi pembayaran?",
    icon: "info",
    showCancelButton: true,
    confirmButtonText: "Ya",
    confirmButtonColor: "#10b981",
    background: document.documentElement.classList.contains("dark")
      ? "#0a0a0a"
      : "#fff",
    color: document.documentElement.classList.contains("dark")
      ? "#fff"
      : "#000",
  });
};
</script>
