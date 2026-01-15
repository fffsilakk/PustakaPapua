<template>
  <div class="cursor-default relative group inline-block">
    <div
      class="px-3 py-1.5 rounded-full text-[11px] border shadow-sm flex items-center gap-2 cursor-default"
      :class="
        online
          ? 'bg-emerald-500/10 border-emerald-400 text-emerald-300'
          : 'bg-red-500/10 border-red-400 text-red-300'
      "
    >
      <!-- Icon -->
      <OcCloud v-if="online" class="w-4 h-4 text-emerald-400" />
      <OcCloudOffline v-else class="w-4 h-4 text-red-400" />

      <!-- Teks singkat selalu tampil -->
      <span>
        {{ online ? "Online" : "Offline" }}
      </span>
    </div>

    <!-- Tooltip: hanya muncul saat hover -->
    <div
      class="pointer-events-none absolute bottom-full right-0 mb-2 hidden rounded-md bg-slate-900 px-3 py-2 text-[11px] text-slate-100 shadow-lg group-hover:block whitespace-nowrap"
    >
      {{
        online
          ? "Mode Online · Konten baru akan terunduh"
          : "Mode Offline · Menggunakan konten tersimpan"
      }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from "vue";
import { listenConnectionStatus } from "../../../utils/offline";
import { OcCloud, OcCloudOffline } from "@kalimahapps/vue-icons";

const online = ref(true);

let stop: (() => void) | null = null;

onMounted(() => {
  stop = listenConnectionStatus((status) => {
    online.value = status;
  });
});

onBeforeUnmount(() => {
  if (stop) stop();
});
</script>
