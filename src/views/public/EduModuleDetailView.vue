<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useEduStore } from "../../stores/eduStore";
import EduDetailLayout from "../../components/public/edu/EduDetailLayout.vue";

const route = useRoute();
const router = useRouter();
const eduStore = useEduStore();

const moduleId = computed(() => route.params.id as string);
const module = computed(() => {
  const found = eduStore.getById(moduleId.value);
  return found ?? null;
});

const handleBack = () => {
  router.push({ name: "EduDashboard" });
};

const handleOfflineClick = () => {
  if (!module.value) return;
  eduStore.markOffline(module.value.id);
};
</script>

<template>
  <EduDetailLayout
    :module="module"
    @back="handleBack"
    @offline-click="handleOfflineClick"
  />
</template>
