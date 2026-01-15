<template>
  <div
    class="fixed bottom-4 right-4 px-3 py-1.5 rounded-full text-[11px] border shadow-sm"
    :class="
      online
        ? 'bg-emerald-500/10 border-emerald-400 text-emerald-300'
        : 'bg-red-500/10 border-red-400 text-red-300'
    "
  >
    {{
      online
        ? "Mode Online · Konten baru akan terunduh"
        : "Mode Offline · Menggunakan konten tersimpan"
    }}
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from "vue";
import { listenConnectionStatus } from "../../../utils/offline";

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
