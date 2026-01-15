<template>
  <RouterLink to="/cart" class="relative inline-flex items-center">
    <span class="text-sm">Cart</span>
    <span
      v-if="count > 0"
      class="ml-1 text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-500 text-slate-950"
    >
      {{ count }}
    </span>
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import { storeToRefs } from "pinia";
import { useUmkmStore } from "../../../stores/umkmStore";

const umkmStore = useUmkmStore();
const { cartCount: count } = storeToRefs(umkmStore);
</script>
