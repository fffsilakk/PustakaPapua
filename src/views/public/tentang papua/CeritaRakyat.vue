<script setup lang="ts">
import StoryHero from "../../../components/public/tentang papua/cerita rakyat/StoryHero.vue";
import StoryHighlight from "../../../components/public/tentang papua/cerita rakyat/StoryHighlight.vue";
import StoryListWithSearch from "../../../components/public/tentang papua/cerita rakyat/StoryListWithSearch.vue";
import StoryAbout from "../../../components/public/tentang papua/cerita rakyat/StoryAbout.vue";
</script>

<template>
  <div
    class="w-full min-h-screen -mt-8 bg-white dark:bg-neutral-900 transition-colors duration-400"
  >
    <StoryHero
      title="Cerita Rakyat Papua"
      image="https://indonesiakaya.com/wp-content/uploads/2024/11/IK_Papua_Spot.jpeg"
      region="Papua"
    />
    <StoryListWithSearch class="mt-4" />

    <StoryHighlight
      quote="Hutan adalah ibu kita, jika kita merusaknya, kita merusak diri sendiri."
      imageUrl="https://media.istockphoto.com/id/2148303998/id/foto/pemandangan-pulau-seram-provinsi-maluku.jpg?s=2048x2048&w=is&k=20&c=FZrPA-vGLRZ-3NPXPJfVMV5HntMuif-6CwnVeR1LrJ8="
      icon="🌳"
    />
    <StoryAbout />
  </div>
</template>
