<template>
  <div class="relative group inline-block z-50">
    <div
      class="px-3 py-1.5 cursor-pointer rounded-full text-[11px] border shadow-sm flex items-center gap-2 transition-all duration-300 active:scale-95"
      :class="
        online
          ? 'bg-emerald-500/10 border-emerald-400/50 text-emerald-600 dark:text-emerald-300'
          : 'bg-red-500/10 border-red-400/50 text-red-600 dark:text-red-300'
      "
    >
      <OcCloud
        v-if="online"
        class="w-4 h-4 text-emerald-500 dark:text-emerald-400"
      />
      <OcCloudOffline v-else class="w-4 h-4 text-red-500 dark:text-red-400" />

      <span class="font-bold tracking-wide uppercase text-[10px]">
        {{ online ? "Online" : "Offline" }}
      </span>
    </div>

    <div
      class="pointer-events-none absolute top-full right-0 mt-2 hidden rounded-xl bg-slate-900 px-3 py-2 text-[10px] text-slate-100 shadow-xl group-hover:block animate-in fade-in slide-in-from-top-1 duration-200 whitespace-nowrap border border-white/10"
    >
      <div
        class="absolute -top-1 right-5 h-2 w-2 rotate-45 bg-slate-900 border-l border-t border-white/10"
      ></div>

      <div class="relative flex items-center gap-2">
        <div
          :class="online ? 'bg-emerald-500' : 'bg-red-500'"
          class="h-1.5 w-1.5 rounded-full animate-pulse"
        ></div>
        {{
          online
            ? "Mode Online · Konten baru akan terunduh"
            : "Mode Offline · Menggunakan konten tersimpan"
        }}
      </div>
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
