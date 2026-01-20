<script setup lang="ts">
import HeroSection from "../../components/public/beranda/HeroSection.vue";
import FeatureCards from "../../components/public/beranda/FeatureCards.vue";
import StatsStrip from "../../components/public/beranda/StatsStrip.vue";
import HowItWorks from "../../components/public/beranda/HowItWorks.vue";
import VideoHighlight from "../../components/public/beranda/VideoHighlight.vue";
import ExploreUmkm from "../../components/public/beranda/ExploreUmkm.vue";
</script>

<template>
  <section class="min-h-screen">
    <HeroSection />
    <VideoHighlight />
    <ExploreUmkm />
    <FeatureCards />
    <StatsStrip />
    <HowItWorks />
  </section>
</template>
