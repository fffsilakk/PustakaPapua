<template>
  <div class="space-y-3">
    <p
      v-for="(paragraph, index) in content"
      :key="index"
      class="text-sm text-slate-200 leading-relaxed"
    >
      {{ paragraph }}
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  content: string[];
}>();
</script>
